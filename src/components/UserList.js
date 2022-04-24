import React from 'react'
import { useEffect } from 'react'
import { fetchAllUsers } from '../store/slices/users/users';
import { useDispatch, useSelector,  } from 'react-redux'
const UserList = () => {
    const dispatch=useDispatch();
    const {list:users}=useSelector(state=>state.users)
    
    useEffect(()=>{
        dispatch(fetchAllUsers());
    },[dispatch])
  return (
    <div className='container '>
        <div className='row'>
{
users.map((user)=>(
    <div key={user.id} className='col-md-3'>
        <div className='card mb-2'>
            <img src={user.avatar} alt='avatar'/>
            <div className='card-body'>
                <h5 className='card-title'>{`${user.first_name}${user.last_name}`}</h5>
                <p className='card-text'>{user.email}</p>
            </div>
        </div>
    </div>

))
}
        </div>
    </div>
  )
}

export default UserList