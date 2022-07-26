// 습관별 날짜
import { useState } from "react";
import { format } from "date-fns";

const Calendar = (highlight) => {
  const [date, setDate] = useState(new Date());
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const days = [];
  // 월별 첫째날, 마지막날 설정
  const firstDateOfCurrentMonth = new Date(date.setDate(1));
  const lastDateOfCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate(0);
  const firstDayIndex = firstDateOfCurrentMonth.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;
  const daysInPreviousMonth = () => {
    for (let i = firstDayIndex; i > 0; i--) {
      days.push({ day: null, currentMonth: false });
    }
  };
  let monthlyChckIn = 0;

  const daysInCurrentMonth = () => {
    for (let i = 1; i <= lastDateOfCurrentMonth; i++, monthlyChckIn) {
      const newDate = new Date(date.getFullYear(), date.getMonth(), i);
      const cleanHighlights = highlight.map((c) =>
        format(new Date(c.seconds * 1000), "d MMM u")
      );
      if (cleanHighlights.includes(format(newDate, "d MMM u"))) {
        days.push({ day: i, highlight: true });
      } else {
        days.push({ day: i, currentMonth: true });
      }
    }
  };
  const daysInNextMonth = () => {
    for (let i = 1; i <= nextDays; i++) {
      days.push({ day: null, currentMonth: false });
    }
  };
  daysInPreviousMonth();
  daysInCurrentMonth();
  daysInNextMonth();

  const currentMonthCheck = days.filter((c) => c.highlight === true);

  return <div></div>;
};

export default Calendar;
