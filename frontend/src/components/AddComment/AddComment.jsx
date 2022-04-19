import { useState } from "react";
import axios from 'axios'
import useAuth from "../../hooks/useAuth";


const AddComment = (props) => {

    const [user, token] = useAuth();

    const [users, setUser] = useState('')
    const [video_id, setVideo_Id] = useState('')
    const [text, setText] = useState('')
    const [likes, setLikes] = useState('')
    const [dislikes, setDislikes] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/comment/auth/', {
                headers: {
                    Authorization: "Bearer " + token,
                  },
                user: users,
                video_id: video_id,
                text: text,
                likes: likes,
                dislikes: dislikes
            })
            window.location.reload(true)
        }
        catch (error) {
            console.log(error.response)
        }
    }



    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <h2 className="text-center">
                    Add a Comment
                </h2>
            </div>
            <div className="border-bar">
                <label className="spacing">User</label>
                <input type="number" value={users} onChange={(event) => setUser(event.target.value)} />
                <label className="spacing">Video_id:</label>
                <input type="text" value={video_id} onChange={(event) => setVideo_Id(event.target.value)} />
                <label className="spacing">Text:</label>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
                <label className="spacing">Likes:</label>
                <input type="number" value={likes} onChange={(event) => setLikes(event.target.value)} />
                <label className="spacing">Dislikes:</label>
                <input type="number" value={dislikes} onChange={(event) => setDislikes(event.target.value)} />
                <button type="submit"  className="spacing">Add</button>
            </div>
        </form>
     );
}
 
export default AddComment;