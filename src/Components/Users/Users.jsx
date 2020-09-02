import React from 'react';
import users from "./Users.module.css";
import logo from "./../../Assets/Logo.jpg"
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsers / props.usersPerPage);
    let pages = [];
    for(var i=1; i<=pagesCount; i++){
        pages.push(i);
    }

    return(
        <div >
            {pages.map((page)=>{
                    if(page<=50)
                    return(
                        <span onClick={()=>{props.onPageChange(page)}} className={props.currentPage===page?users.currentPage:""}>{page}</span>
                    )
                })}
                
               {props.users.map(u => <div key={u.id}> 
                    <NavLink to={"/profile/" + u.id}>
                    <img className={users.img} src={u.photos.small!=null?u.photos.small:logo}></img>
                    </NavLink>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>
                        {
                            u.followed
                            ? <button disabled={props.isFollowLoading} onClick={() => {
                                props.unfollowThunkCreator(u.id)
                                }}>Unfollow</button>
                                : <button disabled={props.isFollowLoading} onClick={() => {
                                    props.followThunkCreator(u.id)                                
                                }}>Follow</button>
                        }
                        
                </div>
            </div>)}
        </div>
    )
}
export default Users;