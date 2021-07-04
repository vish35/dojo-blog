import { useEffect,useState } from "react";
const useFetch =()=>{
    const [data,setData]=useState(null);
    const [isPending,setPending]=useState(true);
    const [Error,setError]=useState(null);
    useEffect((url)=>{
        fetch(url).then(res=>
            {
                if(!res.ok)
                throw Error('could not fetch the data for that resource')
                return res.json()
            }
            ).then(data=>
            {
                console.log(data);
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch(err=>{
                setPending(false);
                setError(err.message);
            })
    },[url]);
   

    return {data,isPending,Error }
}
export default useFetch;