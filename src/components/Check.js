// 습관 체크
import {useState} from "react";
import {db} from "../fb-config";
import {doc,setDoc} from "firebase/firestore";
import {isSameDay} from "date-fns";
import styled from "styled-components";

const Container = styled.div`
  background: gray;
  display: flex;
  justify-content: center;
`

const Check = ({habit, cleanDates, user}) => {
  const midNightString = new Date(new Date.setHours(0,0,0,0)).toDateString();
  const [done, setDone] = useState(cleanDates.includes(midNightString) ? true: false);

  const checkIn = () => {
    if(cleanDates.includes(midNightString)){
      const removed = habit.completedOn.filter(d=> !isSameDay(new Date(d.seconds*1000), new Date()))

      await setDoc(doc(db, `users/${user.uid}/habits`,habit.id),{
        name: habit.name,
        completedOn: removed
      }, {merge:true})

      setDone(false);
    }else{
      await setDoc(doc(db, `users/${user.uid}/habits`,habit.id),{
        name: habit.name,
        completedOn: [...habit.completedOn, new Date(new Date().setHours(0,0,0,0))]
      }, {merge:true})

      setDone(true);
    }
  }

  return (
    <div>
      <Container>
        <div className="here" onClick={checkIn}>
          hererrr
        </div>
      </Container>
    </div>
  )
}

export default Check;