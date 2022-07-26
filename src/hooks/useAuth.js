import { useState, useEffect } from "react";
import { db,auth } from "../fb-config";
import {onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";


const useAuth = () => {
  const [user, setUser] = useState(null);

  // 로그인 상태 확인
  useEffect(()=>{
    return onAuthStateChanged(auth,(user)=>{
      if(user){
        const userData = {
          name: user.displayName,
          id: user.uid,
        };
        await setDoc(doc(db,"users",userData),{merge:true});
        setUser(user);
      }else{
        setUser(false);
      }
    });
  },[]);

  // 로그아웃
  const logOut = () => signOut(auth).then(()=>{
    console.log("log out!");
  })

  // 구글 로그인
  const provider = new GoogleAuthProvider();
  const signInGoogle = signInWithPopup(auth, provider).then((data)=>{
    setUser(data.user);
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  });

  // 
  return [user, logOut,signInGoogle];
};

export default useAuth;