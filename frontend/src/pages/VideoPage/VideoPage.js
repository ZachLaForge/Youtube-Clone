import ReactPlayer from "react-player";
import './VideoPage.css'
import AddComment from "../../components/AddComment/AddComment";


const VideoPage = (props) => {  



    return ( 
    <div className="center-video">
        <div>
        <ReactPlayer url="https://www.youtube.com/watch?v=8iQMTrC-spc"  />
        </div>
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