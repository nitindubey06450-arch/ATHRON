import express from "express"
import Thread from "../models/Thread.js"
import getopenairesponse from "../utils/openai.js"

const router = express.Router();

//get all chats
router.get("/thread" , async(req,res) => {
    try{
        const threads = await Thread.find({}).sort({updatedAt : -1});
         res.json(threads);
    }catch(err){
        console.log(err);
        res.status(500).json({error : "failed to send the thread to left side"});
    }
})

// to get thread based on their id 
router.get("/thread/:threadID" , async(req,res) => {
    const {threadID} = req.params;

    try{
        const thread = await Thread.findOne({threadID});

        if(!thread){
            return res.status(404).json({error : " Thread not found "});
        }

        res.json(thread.messages);

    }catch(err){
        console.log(err);
        res.status(500).json({error : " failed to fetch the data "});
    }
})

// to delete the thread 
router.delete("/thread/:threadID" , async(req,res) => {
    const {threadID} = req.params;

    try{
       let deletedThread = await Thread.findOneAndDelete({threadID});

       if(!deletedThread){
        return res.status(404).json({error : " cannot delete the thread "});
       }

       res.status(200).json({success : " Thread deleted successfully"});

    }catch(err){
        console.log(err);
        res.status(500).json({ error : "Failed to delete "});
    }
})

// chats
router.post("/chat" , async(req,res) => {
    const {threadID , message} = req.body;

    // invalid 
    if(!threadID || !message){
        return res.status(400).json({error : "missing required details "});
    }

    try {
     let thread = await Thread.findOne({threadID});

        if(!thread){ // new chat 
           thread = new Thread({
            threadID,
            title : message,
            messages : [{role:"user" , content:message}],
           });
        } else {
            thread.messages.push({role:"user" , content : message});
        }

        // Get OpenAI reply
        let assistantReply;
        try {
            assistantReply = await getopenairesponse(message);
        } catch(aiErr) {
            console.log("OpenAI failed:", aiErr.message);
            return res.status(502).json({error: "AI service error: " + aiErr.message});
        }

        if(!assistantReply){
            return res.status(502).json({error : "Empty reply from AI"});
        }

        thread.messages.push({role:"assistant" , content : assistantReply});
        thread.updatedAt = new Date();

        await thread.save();

        res.json({reply : assistantReply});

    }catch(err){
        console.log("Chat route error:", err.message);
        res.status(500).json({error : "Something went wrong: " + err.message});
    }
})

// test route
router.post("/test" , async(req,res) => {
try{
    const thread = new Thread ({
        threadID : "test-" + Date.now(),
        title:"test thread",
    })
    const response = await thread.save();
    res.send(response);

}catch(err) {
    console.log("chats err : " , err);
    res.status(500).json({error: "failed to save in DB "});
}
})

export default router;
