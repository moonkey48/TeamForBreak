import { Theme } from './userType';

export type RoomInfoT = { 
    title:string,
    description:string,
    roomId:string,
    password:string,
    theme:Theme,
    member:string[],
    memberIds:string[],
    startTime:number,
    endTime:number,
    remain:number;
    fine_total:number;
    fine_per_day:number;
    fine_each:{[memberName:string]:number};
}
export type RoomsT ={
    [roomId:string]:RoomInfoT;
}