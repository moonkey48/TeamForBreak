import { Theme } from './userType';

export type RoomInfoT = { 
    title:string,
    description:string,
    progress:number,
    roomId:string,
    password:string,
    theme:Theme,
    member:string[],
    memberIds:string[],
    day:string;
    fine_total:number;
    fine_each:{[memberName:string]:number};
}
export type RoomsT ={
    [roomId:string]:RoomInfoT;
}