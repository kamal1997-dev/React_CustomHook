//https://api.github.com/users/--api  for githubusers
// will use above api to get users 

import useGithub from "./hooks/useGithub";
const GitHubUser=({username})=>{
   
    const[user,loading,error]=useGithub(username)
    console.log(user)
    
    //by giving  username in dependency we are making sure useeffect to run whenever username changes 
    return(
        <div className="github-user">
         {loading&& <p>Loading</p>}
         {error&& <p>{error.message}</p>}


        {
            user &&(
                <ul className="details">
                    <li>
                        <img src={user.avatar_url} alt={user.login}/>
                    </li>
                    <li>
                        <strong >Name:</strong> {user.name}
                    </li>
                    <li>
                        <strong >Bio:</strong> {user.bio?user.bio:"NA"}
                    </li>
                    <li>
                        <strong >Location:</strong> {user.location?user.location:"NA"}
                    </li>
                    <li>
                        <strong >Blog or Site:</strong> {user.blog?user.blog:"NA"}
                    </li>
                    <li>
                        <strong >Public repos</strong> {user.public_repos?user.public_repos:0}
                    </li>
                </ul>
            )
        }

        </div>

    )
}
export default GitHubUser;