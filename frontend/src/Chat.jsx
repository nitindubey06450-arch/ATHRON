import "./Chat.css"
import { useContext , useState , useEffect } from "react";
import { MyContext } from "./Mycontext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"

function Chats(){

    const{newChats , prevChats , reply} = useContext(MyContext);
    const [latestReply , setLatestReply] = useState(null);

    useEffect(() => {

        if(reply === null){
             setLatestReply(null);
              return ;
        }

         if(! prevChats?.length) return;

         const content = reply.split(" ");

         let idx = 0;

         const interval = setInterval(() => {
                setLatestReply(content.slice(0 , idx+1).join(" "));
                idx++;
                if(idx >= content.length) clearInterval(interval);
         }, 40)

         return () => clearInterval(interval);

    }, [prevChats , reply])

    const isEmpty = !prevChats || prevChats.length === 0;

    return (
       <>
        { isEmpty && (
            <div className="welcome">
                <div className="welcome-title">AETHRON</div>
                <div className="welcome-sub">Ask me anything. I'm here to help.</div>
            </div>
        )}

        <div className="chats">
        {
            prevChats?.map((chat , idx) =>
                <div className= {chat.role === "user" ? "userDiv" : "gptDiv"} key={idx}>
                    {
                        chat.role === "user"
                        ? <p className="userMessage">{chat.content}</p>
                        : <div className="gpt">
                            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                              {typeof chat?.content === "string" ? chat.content : ""}
                            </ReactMarkdown>
                          </div>
                    }
                </div>
            )
        }

             {
                prevChats.length > 0 && latestReply != null &&
                <div className="gptDiv" key={"typing"}>
                    <div className="gpt">
                        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                            {latestReply}
                        </ReactMarkdown>
                    </div>
                </div>
            }

        </div>
       </>
    )
}
export default Chats;
