export type Todo = {
    content:string;
    done:boolean;
}
export type UserLogin ={
    name:string;
    uid:string;
    email:string;
}
export type Theme = 'green' | 'orange' | 'pink' | 'yellow';
export type UserData ={
    todoList:Todo[];
    theme:Theme;
    rooms?:string[];
}
export type User = UserLogin & UserData;
export type Users = {
    [uid:string]:User;
}