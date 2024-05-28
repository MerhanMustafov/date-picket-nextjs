'use client';
import styles from './page.module.css';
import {getYearCalendarData} from '@/lib/calendar'
import { useState } from 'react';
import {generateReactKey} from '@/lib/generateReactKey'
type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type MonthString = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December'
type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31
type MonthLookUp = {
  [key in MonthNumber]: MonthString
}

const monthLookUp: MonthLookUp = {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": 'July',
  "8": 'August',
  "9": 'September',
  "10": 'October',
  "11": 'November',
  "12": 'December',
}

const date = new Date();
export default function Home() {
  const [year, setYear] = useState<number>(date.getFullYear())
  const [monthNumber, setMonthNumber] = useState<MonthNumber>(date.getMonth() + 1 as MonthNumber)
  const [selectedDate, setSelectedDate] = useState<{year: number, monthNumber: MonthNumber, day: Day}>({
    year: date.getFullYear(),
    monthNumber: date.getMonth() + 1 as MonthNumber,
    day: date.getDate() as Day
  
  })

  const yearData = getYearCalendarData(year, 'Sun')
  
  const monthString = monthLookUp[monthNumber]
  console.log(monthString);

  const handleDayClick = (year: number, month: MonthNumber, day: Day) => {
    setSelectedDate({
      year,
      monthNumber: month,
      day
    })
  }

  const handleNextMonth = () => {
    setYear(monthNumber === 12 ? year + 1 : year)
    setMonthNumber(monthNumber === 12 ? 1 : monthNumber + 1 as MonthNumber)
  }

  const handlePrevMonth = () => {
    setYear(monthNumber === 1 ? year - 1 : year)
    setMonthNumber(monthNumber === 1 ? 12 : monthNumber - 1 as MonthNumber)
  }
  
  const handleNextYear = () => {
    setYear((prev) => prev + 1)
    setMonthNumber(1)
  }

  const handlePrevYear = () => {
    setYear((prev) => prev - 1)
    setMonthNumber(12)

  }

  return (
   <div>
    <div>
      <h1>{year}:{monthString}</h1> 
      <button onClick={handlePrevMonth}>Prev Month</button>
      <button onClick={handleNextMonth}>Next Month</button>

      <button onClick={handlePrevYear}>Prev Year</button>
      <button onClick={handleNextYear}>Next Year</button>
      <div className={styles.calendarBodyWrapper}>

      {yearData.weekStrings.map((weekDayStr) => {
        return <span className={styles.headerItem} key={weekDayStr}>{weekDayStr}</span>
      })}
      {yearData.data[monthNumber].prev.map((data) => (
        <span className={`${styles.item} ${styles.prevItem}`} key={generateReactKey()}>{data.day}</span>
      ))}
      {yearData.data[monthNumber].curr.map((data) => {
        const isSelectedDay = selectedDate.year === year && selectedDate.monthNumber === monthNumber && selectedDate.day === data.day
        return (
          <span onClick={() => handleDayClick(data.year, data.monthNumber as MonthNumber, data.day as Day)} className={`${styles.item} ${!isSelectedDay && styles.currentMonthDayHover} ${isSelectedDay && styles.selectedDay}`} key={generateReactKey()}>{data.day}</span>
        )
      })}

      {yearData.data[monthNumber].next.map((data) => (
        <span className={`${styles.item} ${styles.nextItem}`} key={generateReactKey()}>{data.day}</span>
      ))}
      </div>
    </div>
   </div>
  );
}
