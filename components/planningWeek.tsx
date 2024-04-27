import React, { useState } from 'react';

interface RendezVous {
  heureDebut: number;
  heureFin: number;
  titre: string;
}

const HORAIRE_DEBUT = 8;
const HORAIRE_FIN = 23.5;
const PAS = 0.5;

const rendezVous: RendezVous[] = [
  { heureDebut: 9, heureFin: 10.5, titre: "Réunion équipe" },
  { heureDebut: 14, heureFin: 18.5, titre: "Appel client" },
  // Ajoutez d'autres rendez-vous ici...
];

const PlanningWeek: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const handlePrevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const rows: JSX.Element[] = [];
  let currentHour = HORAIRE_DEBUT;

  while (currentHour <= HORAIRE_FIN) {
    const timeString = `${Math.floor(currentHour)}:${(currentHour % 1) * 60}`;
    rows.push(
      <div key={currentHour} className="flex items-center border-b border-gray-200">
        <div className="w-16 p-2">{timeString}</div>
        <div className="flex-grow flex flex-wrap gap-2">
          {rendezVous.map((rdv: RendezVous, index: number) => {
            if (rdv.heureDebut <= currentHour && rdv.heureFin > currentHour) {
              return (
                <div key={index} className="bg-blue-500 text-white p-1 rounded">
                  {rdv.titre}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
    currentHour += PAS;
  }

  const daysOfWeek: string[] = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const startDate = new Date(currentDate);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-4">
        <button onClick={handlePrevWeek}>Semaine précédente</button>
        <div className="flex space-x-4">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-center">
              <div className="weekday">{day}</div>
              <div>{startDate.getDate() + index}</div>
            </div>
          ))}
        </div>
        <button onClick={handleNextWeek}>Semaine suivante</button>
      </div>
      <div className="flex">
        <div className="w-16"></div>
        <div className="flex-grow">
          {rows}
        </div>
      </div>
      <div className="text-center mt-4">
        Semaine du {formatDate(startDate)} au {formatDate(endDate)}
      </div>
    </div>
  );
};

const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}/${month}`;
};

export default PlanningWeek;
