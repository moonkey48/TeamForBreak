import React, { useEffect, useState } from 'react';
import { Theme, User, Users } from '../../types/userType';
import s from './card.module.css';

type Props = {
    cardUser:User;
    user:User;
    roomId:string;
    changeItem:(id:string,roomId:string,index:number,content:string)=>void;
    checkItem:(id:string ,roomId:string, index:number)=>void;
    changeTheme:(id:string,roomId:string,theme:Theme)=>void;
    addContent:(id:string, roomId:string, content:string)=>void;
    deleteContent:(id:string, roomId:string,index:number)=>void;
}

const Card = ({cardUser,user,roomId,changeItem,checkItem,changeTheme,addContent,deleteContent}:Props) => {
    const [clear,setClear] = useState(false);
    const [newContent, setNewContent] = useState('');
    const [owner,setOwener] = useState<boolean>(user?.uid === cardUser?.uid)
    useEffect(()=>{
        let result = true;
        if(cardUser?.rooms){
            cardUser?.rooms[roomId].todoList.map((todo)=>{
                if(todo.done===false){
                    result = false;
                }
            })
            if(cardUser?.rooms[roomId].todoList.length===0){
                result= false;
            }
        }
        setClear(result);
    },[checkItem]);

    return <li className={`${s.card} ${clear?s[cardUser?.rooms[roomId].theme]:''}`} key={cardUser.uid}>
        <div className={s.cardHeader}>
            <div className={`${s.nameBox} ${s[cardUser?.rooms[roomId].theme]}`}>
                <h3 className={`${s.name} ${clear===true?s.clear:''}`}>{cardUser.name}</h3>
                {owner?<ul className={`${s.themeChange}`}>
                    <li onClick={()=>changeTheme(user.uid, roomId, 'green')} className={s.green}></li>
                    <li onClick={()=>changeTheme(user.uid, roomId, 'yellow')} className={s.yellow}></li>
                    <li onClick={()=>changeTheme(user.uid, roomId, 'pink')} className={s.pink}></li>
                    <li onClick={()=>changeTheme(user.uid, roomId, 'blue')} className={s.blue}></li>
                    <li onClick={()=>changeTheme(user.uid, roomId, 'purple')} className={s.purple}></li>
                    <li onClick={()=>changeTheme(user.uid, roomId, 'orange')} className={s.orange}></li>
                    <li onClick={()=>changeTheme(user.uid, roomId, 'black')} className={s.black}></li>       
            </ul>:''
                }
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
                {cardUser?.rooms[roomId].todoList.map((todo,index)=>{
                    return <li className={s.todoItem} key={index}>
                        <div className={s.leftBox}>
                            <button onClick={()=>{
                                if(owner===true){
                                    checkItem(cardUser?.uid,roomId,index)
                                }
                            }} className={`${owner===true?s.check_button:s.check_button_enabled} ${todo.done?s.checked:s.unchecked} ${s[cardUser?.rooms[roomId].theme]}`}></button>
                            <form className={s.todoItem_form}>
                                <input className={`${s.todoItem_input} ${clear===true?s.clear:''} ${owner===true?s.show:s.hide}`} value={todo.content} 
                                onChange={(e)=>changeItem(cardUser?.uid, roomId, index,e.target.value)}
                                type="text" />
                            </form>
                            <h5 className={`${s.todo_content} ${clear===true?s.clear:''} ${owner===true?s.hide:s.show}`}>{todo.content}</h5>
                        </div>
                    </li>
                })
                }
                {cardUser?.rooms[roomId].todoList.length === 0 ?<li className={s.todoItem} key={1}>
                        <div className={s.leftBox}>
                            <h5 className={`${s.todo_content}`} style={{fontSize: '14px'}}>?????? {cardUser.name}?????? ????????? ?????? ???????????? ????</h5>
                        </div>
                    </li>:''}
            </ul>
        }
        <form onSubmit={(e)=>{
            e.preventDefault();
            addContent(user.uid, roomId, newContent);
            setNewContent('');
        }}>
            <input  className={`${s.newItem_input} ${clear?s.hide:s.show}`} type="text" placeholder='???????????? ?????? ??????'  value={newContent} onChange={(e)=>setNewContent(e.target.value)} />
        </form>
    </li>
}

export default Card;