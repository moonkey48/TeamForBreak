import React, { useEffect, useState } from 'react';
import { User, Users } from '../../types/userType';
import s from './card.module.css';

type Props = {
    user:User;
    checkItem:(id:string , index:number)=>void;
}

const Card = ({user,checkItem}:Props) => {
    const [clear,setClear] = useState(false);
    useEffect(()=>{
        let result = true;
        user.todoList.map((todo)=>{
            if(todo.done===false){
                result = false;
            }
        })
        if(user.todoList.length===0){
            result= false;
        }
        console.log(result);
        setClear(result);
    },[checkItem]);

    return <li className={`${s.card} ${clear?s[user.theme]:''}`} key={user.uid}>
        <div className={s.cardHeader}>
            <div className={`${s.nameBox} ${s[user.theme]}`}>
                <h3 className={`${s.name} ${clear===true?s.clear:''}`}>{user.name}</h3>
            </div>
            <div className={`${s.clearBox} ${clear===true?s.clear:''}`}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0C4.0374 0 0 4.0374 0 9C0 13.9626 4.0374 18 9 18C13.9626 18 18 13.9626 18 9C18 4.0374 13.9626 0 9 0ZM7.2009 12.9717L3.8592 9.6372L5.13 8.3628L7.1991 10.4283L11.9637 5.6637L13.2363 6.9363L7.2009 12.9717V12.9717Z" fill="#fff"/>
                </svg>
                <h3 className={s.clearText}>Clear</h3>
            </div>
        </div>
        {
            <ul className={s.todoList}>
                {user.todoList.map((todo,index)=>{
                    return <li className={s.todoItem} key={index}>
                        <div className={s.leftBox}>
                            <button onClick={()=>checkItem(user.uid,index)} className={`${s.check_button} ${todo.done?s.checked:s.unchecked} ${s[user.theme]}`}></button>
                            <h5 className={`${s.todo_content} ${clear===true?s.clear:''}`}>{todo.content}</h5>
                        </div>
                    </li>
                })
                }
                {user.todoList.length === 0 ?<li className={s.todoItem} key={1}>
                        <div className={s.leftBox}>
                            <h5 className={`${s.todo_content}`} style={{fontSize: '14px'}}>아직 {user.name}님이 오늘의 목표를 적지 않았네요 🙃</h5>
                        </div>
                    </li>:''}
            </ul>
        }
    </li>
}

export default Card;