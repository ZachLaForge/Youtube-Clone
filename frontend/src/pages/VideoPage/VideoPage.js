import ReactPlayer from "react-player";
import './VideoPage.css'
import AddComment from "../../components/AddComment/AddComment";


const VideoPage = (props) => {  



    return ( 
    <div className="center-video">
        <h1>Why Falcon 9 is Better than Even SpaceX Thought</h1>
        <div>
        <ReactPlayer url="https://www.youtube.com/watch?v=8iQMTrC-spc"  />
        </div>
            <p className="border-entry">Falcon 9 has seemingly overachieved on its promises of rapid reuse with little to no refurbishment between flights. Ian breaks down data from SpaceX's workhorse showing how Falcon 9 Block 5 surpassed even SpaceX's expectations.</p>
        <div>
            <small>
                <AddComment />    
            </small>
        </div> 
        {props.commentAll.map((comment) =>{
            return(
                <div className="border-entry">
                    <div>
                        <div>
                            {comment.user}
                        </div>
                        <div>
                            {comment.text}
                        </div>
                        <div>
                            <td className="text-left">
                            {comment.likes}     
                            </td>
                            <td className="text-right">
                            {comment.dislikes}
                            </td>
                        </div>
                    </div>
                </div>
            )
        })}
     </div>
     );
}
 
export default VideoPage;