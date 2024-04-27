'use client'
import React, { useState } from 'react';
import '../ui/horairesRDV.css';

const horaires = [
    { id: 1, horaire: '09:00' },
    { id: 2, horaire: '09:30' },
    { id: 3, horaire: '10:00' },
    { id: 4, horaire: '10:30' },
    { id: 5, horaire: '11:00' },
    { id: 6, horaire: '11:30' },
    { id: 7, horaire: '12:00' },
    { id: 8, horaire: '12:30' },
    { id: 9, horaire: '13:00' },
    { id: 10, horaire: '13:30' },
    { id: 11, horaire: '14:00' },
    { id: 12, horaire: '14:30' },
    { id: 13, horaire: '15:00' },
    { id: 14, horaire: '15:30' },
    { id: 15, horaire: '16:00' },
    { id: 16, horaire: '16:30' },
    { id: 17, horaire: '17:00' },
    { id: 18, horaire: '17:30' },
    { id: 19, horaire: '18:00' },
    { id: 20, horaire: '18:30' },
    { id: 21, horaire: '19:00' },
    { id: 22, horaire: '19:30' },
    { id: 23, horaire: '20:00' },
    { id: 24, horaire: '20:30' },
    { id: 25, horaire: '21:00' },
    { id: 26, horaire: '21:30' },
    { id: 27, horaire: '22:00' },
    { id: 28, horaire: '22:30' },
    { id: 29, horaire: '23:00' },
    { id: 30, horaire: '23:30' }
];

const horaireIndisponible = [
    { id: 6, horaire: '11:30' },
    { id: 7, horaire: '12:00' },
    { id: 9, horaire: '13:00' },
    { id: 23, horaire: '20:00' },
    { id: 27, horaire: '22:00' },
    { id: 28, horaire: '22:30' },
    { id: 29, horaire: '23:00' },
    { id: 30, horaire: '23:30' }
];

const Horaire: React.FC<{ id: number; horaire: string; onClick: () => void; isSelected: boolean; disabled: boolean }> = ({
    id,
    horaire,
    onClick,
    isSelected,
    disabled
}) => {
    const isHoraireIndisponible = horaireIndisponible.some((item) => item.id === id);

    return (
        
        <button
            id={`horaire-${id}`}
            className={`text-lg rounded ${isHoraireIndisponible ? 'horaireIndisponible' : ''}`}
            style={{
                backgroundColor: isHoraireIndisponible ? 'red' : isSelected ? 'black' : '#F7F7F7',
                color: isSelected ? 'white' : isHoraireIndisponible ? 'white': 'black',
                padding: '11px',
                paddingLeft: '18px',
                paddingRight: '18px'
            }}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
        >
            {horaire}
        </button>
     
    );
};

const HoraireList: React.FC = () => {
    const [selectedHoraire, setSelectedHoraire] = useState<number | null>(null);

    const handleHoraireClick = (id: number) => {
        setSelectedHoraire(id === selectedHoraire ? null : id); // Toggle selection
    };

    return (
        <div>
            <br />
            <br />
            <div className="horaireContainer">
                {horaires.map((horaireObj) => (
                    <Horaire
                        key={horaireObj.id}
                        id={horaireObj.id}
                        horaire={horaireObj.horaire}
                        isSelected={selectedHoraire === horaireObj.id}
                        onClick={() => handleHoraireClick(horaireObj.id)}
                        disabled={horaireIndisponible.some((item) => item.id === horaireObj.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HoraireList;
