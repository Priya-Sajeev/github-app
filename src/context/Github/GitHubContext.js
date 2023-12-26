import { createContext,useReducer } from "react";
import githubReducer from "./GitHubReducer";

const URL = 'https://api.github.com';
const Token = process.env.REACT_APP_GITHUB_TOKEN;
const GitHubContext = createContext();
   export const GitHubProvider = ({children}) =>
   {
    const initialState ={
        users : [],
        repos : [],
        user  :{},
        loading : false
    }
    const[state,dispatch] = useReducer(githubReducer,initialState);
const searchUsers = async (text) =>
    {
        dispatch({type :"SET_LOADING",payload:true});
        const input = new URLSearchParams({ q: text,});
        const response = await fetch(`${URL}/search/users?${input}`
        // ,{
        //   headers:{
        //     Authorization : `token ${Token}`,
        //   },  
        // }
        );
        const {items} = await response.json();
        dispatch({type:"GET_USERS",payload : items});
    };

const clearUsers =()=>{
        dispatch({type :"CLEAR_USERS"})
    };

const getUser = async (login) => { 
        dispatch({type :"SET_LOADING",payload :true});
        const response = await fetch(`${URL}/users/${login}`
    //     , 
    //     {
    //        headers: {
    //        Authorization: `token ${Token}`,
    //     },
    // }
    );
       const data= await response.json();
       dispatch({type: "GET_USER",payload: data});
    };

const getRepos = async (login) => {
     dispatch({type: "SET_LOADING", payload :true});
     const input =new URLSearchParams({sort: "created", perpage : 10});
     const response = await fetch(`${URL}/users/${login}/repos?${input}`
    //  ,{
    //     headers: { Authorization: `token ${Token}`,
    // },
    // }
    );
    const data= await response.json();
    dispatch({type: "GET_REPOS",payload: data});
}; 

return (
<GitHubContext.Provider value={{user :state.user, 
repos : state.repos,
users:state.users,
loading:state.loading,
getUser, 
getRepos, 
searchUsers, 
clearUsers}}>
{children} 
</GitHubContext.Provider>
);
};
export default GitHubContext;
