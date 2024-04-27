'use client'
import React, { useState, useEffect } from 'react';

interface TimePair {
  from: string;
  to: string;
}

const WorkScheduleForm: React.FC = () => {
  const initialTimePair: TimePair = { from: '08:30', to: '12:00' };
  const defaultTimePairs: TimePair[] = [{ ...initialTimePair }, { ...initialTimePair }];

  const [schedule, setSchedule] = useState<{
    [key: string]: TimePair[];
  }>(() => {
    const defaultSchedule: { [key: string]: TimePair[] } = {
      tousLesJours: [...defaultTimePairs],
      Lundi: [],
      Mardi: [],
      Mercredi: [],
      Jeudi: [],
      Vendredi: [],
      Samedi: [],
      Dimanche: [],
    };

    Object.keys(defaultSchedule).forEach((day) => {
      if (day !== 'tousLesJours') {
        defaultSchedule[day] = [...defaultTimePairs];
      }
    });

    return defaultSchedule;
  });

  const [selectedDay, setSelectedDay] = useState<string>('tousLesJours');

  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
  };

  const addTimePair = () => {
    const updatedSchedule = { ...schedule };
    updatedSchedule.tousLesJours.push({ ...initialTimePair });

    Object.keys(updatedSchedule).forEach((day) => {
      if (day !== 'tousLesJours') {
        updatedSchedule[day].push({ ...initialTimePair });
      }
    });

    setSchedule(updatedSchedule);
  };

  const addTimeOtherAllDay = () => {
    const updatedSchedule = { ...schedule };
    if (updatedSchedule[selectedDay]) {
      updatedSchedule[selectedDay].push({ ...initialTimePair });
      setSchedule(updatedSchedule);
    }
  };

  const handleTimeChangeForDay = (index: number, field: keyof TimePair, value: string) => {
    setSchedule((prevSchedule) => {
      const updatedSchedule = { ...prevSchedule };
      updatedSchedule[selectedDay][index][field] = value;
      return updatedSchedule;
    });
  };

  const handleTimeChangeForAllDays = (index: number, field: keyof TimePair, value: string) => {
    const updatedSchedule = { ...schedule };

    Object.keys(updatedSchedule).forEach((day) => {
      if (day !== 'tousLesJours') {
        updatedSchedule[day][index][field] = value;
      }
    });

    setSchedule(updatedSchedule);
  };

  const handleRemoveTimePair = (index: number) => {
    const updatedSchedule = { ...schedule };

    updatedSchedule[selectedDay].splice(index, 1);

    if (selectedDay === 'tousLesJours') {
      Object.keys(updatedSchedule).forEach((day) => {
        if (day !== 'tousLesJours') {
          updatedSchedule[day].splice(index, 1);
        }
      });
    }

    setSchedule(updatedSchedule);
  };

  function updateFormattedDate() {
    const inputDate = document.getElementById('inputDate') as HTMLInputElement;
    const formattedDate = document.getElementById('formattedDate');

    if (inputDate && formattedDate) {
      const selectedDate = inputDate.value;
      
    }
  }

  useEffect(() => {
    const inputDate = document.getElementById('inputDate') as HTMLInputElement;

    if (inputDate) {
      inputDate.addEventListener('change', () => {
        updateFormattedDate();
      });
    }
  }, []);

  const renderWorkHours = () => {
    return (
      <div>
        <h3>{selectedDay === 'tousLesJours' ? 'Tous les jours' : selectedDay}</h3>
        {schedule[selectedDay].map((timePair, index) => (
          <div key={index} className='flex'>
            <div>
              <label>De</label>
              <br />
              {selectedDay === 'tousLesJours' ? (
                <input
                className='text-lg rounded text-black'
                value={timePair.from}
                type='time'
                style={{ border: 'solid 2px #EAEAEA', width: '100px', height: '40px' }}
                onChange={(e) => handleTimeChangeForAllDays(index, 'from', e.target.value)}
            
                />) : (
                    <input
                    className='text-lg rounded text-black'
                    value={timePair.from}
                    type='time'
                    style={{ border: 'solid 2px #EAEAEA', width: '100px', height: '40px' }}
                    onChange={(e) => handleTimeChangeForDay(index, 'from', e.target.value)}
                
                    />
                  )}
              
            </div>
            <div style={{ marginLeft: '20px' }}>
              <label>à</label>
              <br />
              {selectedDay === 'tousLesJours' ? (
                <input
                  className='text-lg rounded text-black'
                  value={timePair.to}
                  type='time'
                  style={{ border: 'solid 2px #EAEAEA', width: '100px', height: '40px' }}
                  onChange={(e) => handleTimeChangeForAllDays(index, 'to', e.target.value)}
                />
              ) : (
                <input
                  className='text-lg rounded text-black'
                  value={timePair.to}
                  type='time'
                  style={{ border: 'solid 2px black', width: '100px', height: '40px' }}
                  onChange={(e) => handleTimeChangeForDay(index, 'to', e.target.value)}
                />
              )}
              <img
                src="/minus-circle-red.svg"
                alt="Supprimer"
                style={{ marginLeft: '10px', cursor: 'pointer' }}
                onClick={() => handleRemoveTimePair(index)}
              />
            </div>
          </div>
        ))}
        <br />
        {selectedDay === 'tousLesJours' ? (
          <button onClick={addTimePair}>Ajouter une plage horaire pour tous les jours</button>
        ) : (
          <button onClick={addTimeOtherAllDay}>Ajouter une plage horaire pour {selectedDay}</button>
        )}
      </div>
    );
  };

  const renderNoWork = () => {
    return (
      <div>
        <div className='flex'>
          <div>
            <label>Du</label>
            <br />
            <input
              className='text-lg rounded text-black'
              id='inputDate'
              type='date'
              style={{ border: 'solid 2px #EAEAEA', width: '100px', height: '40px' }}
            ></input>
            <span id='formattedDate'></span>
          </div>
          <div style={{ marginLeft: '20px' }}>
            <label>au</label>
            <br />
            <input
              className='text-lg rounded text-black'
              type='time'
              style={{ border: 'solid 2px #EAEAEA', width: '100px', height: '40px' }}
            />
            <img
              src="/minus-circle-red.svg"
              alt="Supprimer"
              style={{ marginLeft: '10px', cursor: 'pointer' }}
            />
          </div>
        </div>

        <br />
        {selectedDay === 'tousLesJours' ? (
          <button onClick={addTimePair}>Ajouter une plage horaire pour tous les jours</button>
        ) : (
          <button onClick={addTimeOtherAllDay}>Ajouter une plage horaire pour {selectedDay}</button>
        )}
      </div>
    );
  };

  return (
    <div style={{ width: '100%' }}>
      <br />
      <span>Horaires d'ouverture</span>
      <br />
      <br />
      <div style={{ background: '#EAEAEA', width: '100%', height: '2px' }}></div>
      <span>Configurer les plages horaires</span>
      <br />
      <br />
      <div className='flex'>
        {Object.keys(schedule).map((day) => (
          <button key={day} onClick={() => handleDaySelect(day)}>{day}</button>
        ))}
      </div>
      {renderWorkHours()}
      <br />
      <span>Vacances et jours férié</span>
      <br /><br />
      <div style={{ width: '100%', height: '2px', background: '#EAEAEA' }}></div>
      <br />
      <span>Configurer les dates d'indisponibilité</span>
      <br /><br />
      {renderNoWork()}
    </div>
  );
};

export default WorkScheduleForm;