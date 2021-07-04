
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


//installed json-server
//npx json-server --watch data/db.json --port 8000


//for routing
//npm i react-router@5