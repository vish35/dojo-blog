import {useState} from 'react'
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const [isPending,setPending]=useState(false);
    const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();

        const blog={title,body,author};
        console.log(blog);
        setPending(true);
        //posting blog to json 
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            setPending(false);
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
               <label>Blog body:</label>
                <textarea required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <input
                type="text"
                required
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                />
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog</button>}
            </form>
        </div>
     );
}
 
export default Create;