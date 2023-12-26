import React, { useContext, useEffect, useState} from "react";
import {HashLoader } from "react-spinners";
import UserItem from "./UserItem";
import GitHubContext from "../../context/Github/GitHubContext";

function UserList()
{
const {users, loading} = useContext(GitHubContext);

if (loading) {
return (
   <div>
    <HashLoader
       color='#808080' 
       loading= {loading}
       size={100}
       className='mx-auto'/>
    </div>
);
}
if (!loading) {
return (
 <div className='grid grid-cols-1 gap-8 x1:grid-cols-4 1g:grid-cols-3 md:grid-cols-2'>
    {users.map ((user, index) => (
     <UserItem key= {index} user={user}/>
    ))}
 </div>
   );
  }
}

export default UserList;