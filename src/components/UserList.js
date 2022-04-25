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
    <div key={user.id} className='col-3 '>
        <div className='card mb-2 bg-secondary border border-info p-1' style={{width: '16rem', height:'23rem'}}>
            <img src={user.avatar} alt='avatar'/>
            <div className='card-body  '>
                <h5 className='card-title  text-light  '> User: {`${user.first_name}${user.last_name}`}</h5>
                <p className='card-text  text-light '> Email: {user.email}</p>
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