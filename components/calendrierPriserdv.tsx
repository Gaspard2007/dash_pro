'use client'
import '../ui/calendrierPriseRDV.css';
import React, { useState, useEffect } from 'react';
// Date par defaut à corriger
function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateSelected, setDateSelected] = useState<Date | null>(null);

  
  const toDay = useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const monthsOfYear = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  function getDaysInMonth(date: Date): number {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  }

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const days = [];

    // Remplir les jours vides avant le premier jour du mois
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: '', isDisabled: true });
    }

    // Remplir les jours du mois avec leurs numéros
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isDisabled: false });
    }

    return days;
  };

 
  const handleDayClick = (day: string | number) => {
    const dayNumber = typeof day === 'string' ? parseInt(day, 10) : day;
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNumber);
    setDateSelected(selectedDate  || toDay);
  };
  const handlePreviousMonth = () => {
    setCurrentDate(prevDate => {
      return new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => {
      return new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
    });
  };

  const days = generateCalendarDays();

  return (
    <div className="calendar" style={{width:'70%'}}>
      <div className="header">
        <button onClick={handlePreviousMonth}>&lt;</button>
        <h1>{monthsOfYear[currentDate.getMonth()]} {currentDate.getFullYear()}</h1>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days-of-week">
        {daysOfWeek.map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="days">
        {days.map((item, index) => (
          <div
            key={index}
            className={`calendar-day ${item.isDisabled ? 'disabled' : ''} ${dateSelected && item.day === dateSelected.getDate() ? 'selected' : ''}`}
            onClick={() => !item.isDisabled && handleDayClick(item.day)}
          >
            {item.day}
          </div>
        ))}
      </div>
      {dateSelected && (
        <p>Date sélectionnée : {dateSelected.toLocaleDateString('fr-FR')}</p>
      )}
    </div>
  );
}

export default Calendar;
