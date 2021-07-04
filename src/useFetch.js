import { useEffect,useState } from "react";
const useFetch =(url)=>{
    const [data,setData]=useState(null);
    const [isPending,setPending]=useState(true);
    const [Error,setError]=useState(null);
    useEffect(()=>{

        const abortCont =new AbortController();
        fetch(url, {signal: abortCont.signal}).then(res=>
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
                if(err.name==='AbortErrot'){
                    console.log('fetch aborted')
                }
                else{
                setPending(false);
                setError(err.message);
                }
            })

            return ()=>abortCont.abort();
    },[url]);
   

    return {data,isPending,Error }
}
export default useFetch;