import { Theme } from './userType';

export type RoomT = { 
    title:string,
    description:string,
    progress:number,
    roomId:string,
    password:string,
    theme:Theme,
    member:string[],
    //member uid array
}
export type RoomsT = Array<RoomT>