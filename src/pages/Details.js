import { useLocation, useHistory } from "react-router-dom";
import Calendar from "../components/Calendar";
import {db} from "../fb-config";
import { doc, deleteDoc,setDoc,updateDoc } from "firebase/firestore";

const Details = () =>{
  const history = useHistory();
  const {state:habit} = useLocation();

  const deleteHabit = async () =>{
    await deleteDoc(doc(db,`users/${habit.userid}/habits`,habit.id));
    history.goBack();
  }
  const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(()=>{
        callback.apply(null,args);
      },wait);
    };
  };

  const changeHabitTitle = debounce((e)=>{
    console.log(e.target.value);
    const docRef = doc(db,`users/${uid}/habits`,habit.id)
    await updateDoc(docRef, {
      name: e.target.value
    })
  },2500);

  return (
    <></>
  )
}

export default Details;