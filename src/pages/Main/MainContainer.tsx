import React, { useEffect, useState } from 'react';
import Main from './Main';
import {Todo, User, Users} from '../../types/userType';

const MainContainer = () => {
    const [userInfo,setUserInfo] = useState<Users>({
        'id1':{
          name:'austin',
          uid:'id1',
          theme:'green',
          todoList:[
            {content:'Daily Coding',done:false},
            {content:'CS Research',done:false},
          ],
        },
        'id2':{
          name:'lizzy',
          uid:'id2',
          theme:'yellow',
          todoList:[
            {content:'UX 리서치',done:false},
            {content:'포트폴리오 완성',done:false},
          ],
        },
        'id3':{
          name:'Seven',
          uid:'id3',
          theme:'pink',
          todoList:[
            {content:'UX 리서치',done:false},
            {content:'포트폴리오 완성',done:false},
          ],
        },
        'id4':{
          name:'moonkey',
          uid:'id4',
          theme:'orange',
          todoList:[],
        },
        'id5':{
          name:'zelly',
          uid:'id5',
          theme:'green',
          todoList:[
            {content:'브랜딩 미메시스',done:false},
            {content:'포트폴리오 완성',done:false},
          ],
        },
        'id6':{
          name:'lily',
          uid:'id6',
          theme:'yellow',
          todoList:[
            // {content:'UI 미메시스',done:false},
            // {content:'포트폴리오 완성',done:false},
          ],
        },
      })
    const checkItem = (id:string , index:number) =>{
        let updated = {...userInfo};
        updated[id].todoList[index].done = updated[id].todoList[index].done===true?false:true;
        setUserInfo(updated);
    }
    // const deleteItem = (key:number) =>{
    //     const updated = 
    // }
    return <Main userInfo={userInfo} checkItem={checkItem} />
}

export default MainContainer;