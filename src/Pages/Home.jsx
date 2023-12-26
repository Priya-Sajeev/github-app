import React from 'react'
import UserList from "../Components/users/UserList" ; 
import UserSearch from "../Components/users/UserSearch";

function Home() {
    return (
     <>
      <UserSearch />
      <UserList />
    </>
   );
}
export default Home