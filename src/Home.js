import { useState ,useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {data,isPending,Error}=useFetch('http://localhost:8000/blogs');
   
   return ( 
        <div className="home">
            {Error && <div>{Error}</div>}
            {isPending && <div>Loading...</div>}
      {data&& <BlogList blogs={data} title="All blogs" />}
       
        </div>
     );
}
 
export default Home;