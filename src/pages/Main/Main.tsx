import React, { useRef, useState } from 'react';
import s from './Main.module.css';
import HeaderContainer from '../../components/header/HeaderContainer';
import CardsContainer from '../../components/cards/CardsContainer';
import {Users} from '../../types/userType';

type Props = {
    userInfo: Users;
    userOff:()=>void;
    checkItem:(id:string , index:number)=>void;
}

const Main = ({userInfo,checkItem,userOff}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    return <div className={s.container}>
        <HeaderContainer userOff={userOff}/>
        <CardsContainer userInfo={userInfo} checkItem={checkItem} />
        {/* <main>
            <form ref={formRef}>
                <label htmlFor="addTodo">추가하기</label>
                <input ref={inputRef} type="addTodo" name="addTodo" id="addTodo"></input>
                <button onClick={(e)=>{
                    e.preventDefault();
                    console.log(inputRef.current!.value);
                    formRef.current?.reset();
                } }>ADD</button>
            </form>
            <ul>{todos.map((item:string,idx:number)=>{
                return <li key={idx}>
                    <h1>{item}</h1>
                    <button onClick={()=>deleteItem(idx)}>X</button>
                </li>
            })}</ul>
        </main> */}
    </div>
}

export default Main;