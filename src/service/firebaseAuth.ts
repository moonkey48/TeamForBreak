import { User, UserLogin } from './../types/userType';
import {FirebaseApp} from 'firebase/app';
import { getAuth,GoogleAuthProvider,signInWithPopup,Auth,AuthProvider } from "firebase/auth";

export interface AuthServiceI{
    signIn:(userOn:(loginResult:User)=>void)=>void;
}

export class AuthService implements AuthServiceI{
    private auth:Auth;
    private provider:AuthProvider;
    constructor(app:FirebaseApp){
        this.auth = getAuth(app);
        this.provider = new GoogleAuthProvider();
    }
    signIn(userOn:(loginResult:User)=>void){
        signInWithPopup(this.auth, this.provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(result);
            userOn({
                name:user.displayName as string,
                email:user.email as string,
                uid:user.uid,
                rooms:{
                    'room1':{
                        theme:'green',
                        todoList:[
                          {content:'Daily Coding',done:false},
                          {content:'CS Research',done:false},
                        ],
                      }
                }
            })
        }).catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            // const email = error.customData.email;
            // const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage);
        });
        
        return {
            name:null,
            email:null,
            uid:null,
        }
    }
}
