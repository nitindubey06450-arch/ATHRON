import "dotenv/config"

const getopenairesponse = async(message) =>{
    const options = {
    method:"POST",
    headers:{
        "Content-Type": "application/json", 
         "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body : JSON.stringify({
        model:"gpt-4o-mini",
        messages:[{
            role: "user",
            content: message
        }]
    })
  }

 try{
  const response = await fetch("https://api.openai.com/v1/chat/completions" , options);
  const data = await response.json();

  // Log full response if something went wrong
  if(!data.choices || data.choices.length === 0){
    console.log("OpenAI API Error Response:", JSON.stringify(data, null, 2));
    throw new Error(data.error?.message || "No response from OpenAI");
  }

  return data.choices[0].message.content;

 }catch(err) {
    console.log("OpenAI Error:", err.message);
    throw err; // rethrow so the route can handle it properly
 }
}

export default getopenairesponse;
