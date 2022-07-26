import { Link } from "react-router-dom";
import { format, sub, eachDayOfInterval, isSameDay } from "date-fns";
import { summary } from "date-streaks";
import Check from "./Check";

const Habit = ({ habit, user }) => {
  const { dates, streak, cleanDates } = renderDates(habit.completedOn);

  const variant = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", ease: "easeOut" },
    },
  };

  return <div></div>;
};

export default Habit;
