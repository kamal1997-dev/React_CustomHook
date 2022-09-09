import { useState ,useEffect} from "react";

const useGithub=(username)=>{
    const[user,setUser]=useState(null)
    const[error,setError]=useState(null)
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
        //https://api.github.com/users/username---to get specific user
         const featchData= async()=>{
             setLoading(true);
               try{
                 const response =await fetch(`https://api.github.com/users/${username}`);
                 //fetch function returns a promise and to resolve that we have to use await 
                 //and await can be used only in async functions 
                 const responseData= await response.json();
                 setUser(responseData);
                 setLoading(false);

                }
                 catch(error){
                    setError(error);
                    setLoading(false);

                }

        }


       featchData();
    },[username]);


  return [user,loading,error];
}
export default useGithub;