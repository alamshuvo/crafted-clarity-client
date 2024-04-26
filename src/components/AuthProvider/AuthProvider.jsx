import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext,  useEffect,  useState } from "react";
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


// update profile user 
const updateProfileUser=(name,img)=>{
    return  updateProfile(auth.currentUser, {
         displayName: name, 
         photoURL: img,
       }).then(() => {
         // Profile updated!
         // ...
       }).catch((error) => {
         // An error occurred
         // ...
       });
 }

// google signin 
const signinWithGoogle=()=>{
   return signInWithPopup(auth,provider)
}


//  github signin
const signInWithGithub=()=>{
    return signInWithPopup(auth,githubProvider);
}
// Sign out 
const signOutproile=()=>{
    setUser(null)
    setError(true)

     signOut(auth)
   
}

//  Auth state change 
useEffect(()=>{
    const unSubcribe= onAuthStateChanged(auth,curentUser=>{
           setUser(curentUser);
           setLoading(false);
           setError(false)
       })
       return ()=>
       {
           unSubcribe();
       }
      },[])

  const allInfu={
    registerUser,
    updateProfileUser,
    user,
    loading,
    error,
    signOutproile,
    signinWithGoogle,
    signInWithGithub
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