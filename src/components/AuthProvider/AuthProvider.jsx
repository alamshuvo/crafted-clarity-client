import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { createContext,  useState } from "react";
import auth from "../../Firebase/firebase.config";

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(true);

// register User with Email and Password
    const registerUser=(email,password)=>{
        setLoading(true);
        setError(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }


// 


  const allInfu={
    registerUser,
  }
    return (
        <div>
            <AuthContext.Provider value={allInfu}>
                  {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;