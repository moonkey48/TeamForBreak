export type Todo = {
    content:string;
    done:boolean;
}
export type UserLogin ={
    name:string;
    uid:string;
    email:string;
}
export type Theme = 'green' | 'orange' | 'pink' | 'yellow' | 'blue' | 'purple' | 'black';
export type UserRoomData = {
    todoList:Todo[];
    theme:Theme;
}
export type UserData ={
    rooms:{[roomId:string]:UserRoomData};
}
export type User = UserLogin & UserData;
export type Users = {
    [uid:string]:User;
}