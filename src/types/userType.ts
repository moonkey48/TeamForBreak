export type Todo = {
    content:string;
    done:boolean;
}
export type User ={
    name:string;
    uid:string;
    todoList:Todo[];
    theme:string;
}
export type Users = {
    [uid:string]:User;
}