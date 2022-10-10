import { FirebaseApp } from 'firebase/app';
import { child, get, getDatabase, ref, set } from "firebase/database";
import React from 'react';
import { RoomInfoT, RoomsT } from '../types/roomType';
import { User, Users } from '../types/userType';

export interface DatabaseI{
    updateUser:(setUser:React.Dispatch<React.SetStateAction<User>>,userId:string, user:User)=>void;
    readUsersAll:(setUserAll:React.Dispatch<React.SetStateAction<Users>>)=>void;
}

export class Database implements DatabaseI{
    private database:any;
    constructor(app:FirebaseApp){
        this.database = getDatabase(app);       
    }
    
    updateUser = (setUser:React.Dispatch<React.SetStateAction<User>>,userId:string, user:User) =>{
        set(ref(this.database, 'users/' + userId), user);
        setUser(user);
    }
    updateUsersAll = (users:Users) =>{
        set(ref(this.database, 'users/'), users);
    }
    updateRoom = (roomId:string,room:RoomInfoT) =>{
        set(ref(this.database, 'rooms/' + roomId), room);
    }
    updateRoomsAll = (rooms:RoomsT) =>{
        set(ref(this.database, 'rooms/'), rooms);
    }
    readUser = (setUser:React.Dispatch<React.SetStateAction<User>>, uid:string) =>{
        const dbRef = ref(this.database);
        get(child(dbRef, 'users/' + uid)).then((snapshot) => {
            if (snapshot.exists()) {
                setUser(snapshot.val())
                console.log(snapshot.val());
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    }
    readUsersAll = (setUserAll:React.Dispatch<React.SetStateAction<Users>>) =>{
        const dbRef = ref(this.database);
        get(child(dbRef, 'users/')).then((snapshot) => {
            if (snapshot.exists()) {
                setUserAll(snapshot.val())
                console.log(snapshot.val());
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    }
    readRoomsAll = (setRoomsAll:React.Dispatch<React.SetStateAction<RoomsT>>) =>{
        const dbRef = ref(this.database);
        get(child(dbRef, 'rooms/')).then((snapshot) => {
            if (snapshot.exists()) {
                setRoomsAll(snapshot.val())
                console.log(snapshot.val());
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    }
}