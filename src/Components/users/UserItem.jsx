import React from "react";
import PropTypes from "prop-types";
import { Link} from "react-router-dom";

function UserItem({ user }) {
return (
<>
<div className='card-side shadow-1g compact bg-base-100'> 
   <div className='flex-row items-center space-x-4 card-body'>
    <div>
      <div className='avatar'>
        <div className='rounded-full shadow w-14 h-14'> 
        <img src={user.avatar_url} alt='Profile Pic' />
       </div> 
    </div>
   </div>
  <div>
  <div className='card-title'>{user.login}</div> 
  <Link 
   className='text-base-content text-opacity-40'
    to={`/user/${user.login}`}>
       Go to profile
   </Link> 
   </div>
  </div>
</div>
</>
);
}
UserItem.propTypes = { user: PropTypes.object.isRequired,
};

export default UserItem;