import {FirebaseApp} from 'firebase/app';
import { getAuth,GoogleAuthProvider,signInWithPopup,Auth,AuthProvider } from "firebase/auth";

export interface AuthServiceI{
    signIn:()=>void;
}

export class AuthService implements AuthServiceI{
    private auth:Auth;
    private provider:AuthProvider;
    constructor(app:FirebaseApp){
        this.auth = getAuth(app);
        this.provider = new GoogleAuthProvider();
    }
    signIn(){
        signInWithPopup(this.auth, this.provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            console.log(result);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage);
        });
    }
}
