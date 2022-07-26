import { useState, useEffect } from "react";
import useCollection from "../hooks/useCollection";
import Habit from "../components/Habit";
import { db } from "../fb-config";

const habitPage = ({ user, modal, setModal }) => {
  const [completed, setCompleted] = useState(null);
  const habits = useCollection(`user/${user.uid}/habits`);

  useEffect(() => {
    if (habits) {
      let completed = 0;
      habits.forEach((h) => {
        const dates = h.completedOn;
        const actualDates = dates.map((a) => a.seconds);
        const today = new Date().setHours(0, 0, 0, 0) / 1000;
        if (actualDates.includes(today)) {
          completed++;
        }
      });
      setCompleted(completed);
    }
  }, [habits]);

  const habitsVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  const addHabit = (e) => {
    e.preventDefault();
    setModal(false);
  };
};
