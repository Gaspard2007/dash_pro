import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import { Modal } from 'antd';
import '@/ui/calendrierPlanningMonth.css';
import ReservationsPro from './modelReservationPro';

const Home: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const events = [
    {
      id: '0',
      title: 'Nom du service',
      start: '2024-04-18T15:00:00',
      end: '2024-04-18T15:45:00',
      statut: 'workIn',
      client: 'Miss kitty',
      statutClient: 'flair',
      img: '',
      anneDinscription:'2023',
      email:'lunaberc@gmail.com',
      numerosTel: '060101030405',
      lieu:' 02 rue des Alpes, 75000 Paris, France',
      tarifs:60,
      notesClient:'Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.'
        
    },
    {
      id:1,
      title: 'Nom du service',
      start: '2024-04-01T08:00:00',
      end: '2024-04-01T09:45:00',
      statut: 'finish',
      client:'Aïsha',
      statutClient: 'flair',
      img: '',
      anneDinscription:'2023',
      email:'lunaberc@gmail.com',
      numerosTel: '060101030405',
      lieu:' 02 rue des Alpes, 75000 Paris, France',
      tarifs:60,
      notesClient:'Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.'
      
    },
    {
      id:2,
      title: 'Nom du service',
      start: '2024-04-17T15:00:00',
      end: '2024-04-17T17:00:00',
      statut: 'cancel',
      client:'Eulalie',
      statutClient: 'flair',
      img: '',
      anneDinscription:'2023',
      email:'lunaberc@gmail.com',
      numerosTel: '060101030405',
      lieu:' 02 rue des Alpes, 75000 Paris, France',
      tarifs:60,
      notesClient:'Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.'
    },
    {
      id:3,
      title: 'Nom du service',
      start: '2024-04-18T10:00:00',
      end: '2024-04-18T12:30:00',
      statut: 'finish',
      client:'Lila',
      statutClient: 'boutique',
      img: '',
      anneDinscription:'2023',
      email:'lunaberc@gmail.com',
      numerosTel: '060101030405',
      lieu:' 02 rue des Alpes, 75000 Paris, France',
      tarifs:60,
      notesClient:'Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.'
   
    },
    {
      id:4,
      title: 'Nom du service',
      start: '2024-04-18T12:30:00',
      end: '2024-04-18T14:30:00',
      statut: 'workIn',
      client:'Jeanne',
      statutClient: 'boutique',
      img: '',
      anneDinscription:'2023',
      email:'lunaberc@gmail.com',
      numerosTel: '060101030405',
      lieu:' 02 rue des Alpes, 75000 Paris, France',
      tarifs:60,
      notesClient:'Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.'
      
    },
    {
      id:5,
      title: 'Nom du service',
      start: '2024-04-18T08:00:00',
      end: '2024-04-18T09:30:00',
      statut: 'cancel',
      client:'Aïsha',
      statutClient: 'flair',
      img: '',
      anneDinscription:'2023',
      email:'lunaberc@gmail.com',
      numerosTel: '060101030405',
      lieu:' 02 rue des Alpes, 75000 Paris, France',
      tarifs:60,
      notesClient:'Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.'
     
    },
    {
      id:6,
      title: 'Nom du service',
      start: '2024-04-19T16:00:00',
      end: '2024-04-19T18:00:00',
      statut: 'workIn',
      client:'Violette',
      statutClient: 'flair',
      img: '',
      anneDinscription:'2023',
      email:'lunaberc@gmail.com',
      numerosTel: '060101030405',
      lieu:' 02 rue des Alpes, 75000 Paris, France',
      tarifs:60,
      notesClient:'Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.'
      
    },
    {
      id:8,
      title: 'Nom du service',
      start: '2024-04-18T08:00:00',
      end: '2024-04-18T09:30:00',
      statut: 'cancel',
      client:'Aïsha',
      statutClient: 'flair',
      img: '',
      anneDinscription:'2023',
      email:'lunaberc@gmail.com',
      numerosTel: '060101030405',
      lieu:' 02 rue des Alpes, 75000 Paris, France',
      tarifs:60,
      notesClient:'Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.'
     
    },
    
  ];

  const handleEventClick = (clickInfo: any) => {
    const { event } = clickInfo;
    const { title, start, end, extendedProps } = event;
    const statut = extendedProps.statut;
    const nomParticulier = extendedProps.client;
    const statutClient = extendedProps.statutClient
    const anneDinscription = extendedProps.anneDinscription
    const email = extendedProps.email
    const numerosTel = extendedProps.numerosTel
    const lieu = extendedProps.lieu
    const tarifs = extendedProps.tarifs
    const notesClient = extendedProps.notesClient
    const formattedStartTime= new Date(start).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    const formattedEndTime = new Date(end).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    setSelectedEvent({
      title,
      start,
      end,
      statut,
      nomParticulier,
      statutClient,
      anneDinscription,
      email,
      numerosTel,
      lieu,
      tarifs,
      notesClient,
      formattedStartTime,
      formattedEndTime
    });

    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const renderEventContent = (info: any) => {
    const { view } = info;
    const { title, start, end, extendedProps } = info.event;
    const statut = extendedProps.statut;
    const nomParticulier = extendedProps.client;
    const formattedStartTime = new Date(start).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

    let eventStyle = {};
    if (statut === 'finish') eventStyle = { background: '#C0FFCA', color: '#2DB742' };
    else if (statut === 'cancel') eventStyle = { background: '#F6B3B3', color: '#FF0000' };
    else if (statut === 'workIn') eventStyle = { background: '#9E99DD', color: '#4C40ED' };
    let eventStyleForWeekSee = {};
    if (statut === 'finish') eventStyleForWeekSee = { background: '#2DB742', color:'white' };
    else if (statut === 'cancel') eventStyleForWeekSee = { background: '#FF0000', color:'white' };
    else if (statut === 'workIn') eventStyleForWeekSee = { background: '#4C40ED', color:'white' };
    if (view.type === 'dayGridMonth') {
      return (
        <div
          style={{ ...eventStyle, borderRadius: '5%', width:'100%' }}
          className="event-month text-sm flex"
          onClick={() => handleEventClick(info)}
        >
          {formattedStartTime}
          <div style={{ marginLeft: '3px' }}>{title}</div>
        </div>
      );
    } else if (view.type === 'timeGridWeek' || view.type === 'timeGridDay') {
      const formattedEndTime = new Date(end).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

      return (
        <div
        className="event-weekday rounded"
        style={{
          ...eventStyleForWeekSee,
          height: '100%',
          scrollBehavior: 'smooth',
          paddingLeft: '2%'
        }}
        onClick={() => handleEventClick(info)}
      >
       <div className='flex items-center'>
        <span
          style={{
            borderRadius: '50%', 
            height: '10px',
            width: '10px',
            background: 'white',
            display: 'flex', 
            marginRight: '5px' 
          }}
        ></span>
        <p className='text-sm'>{title}</p>
        </div>
        <div className="flex items-center">
          <img
            className="h-[39px] w-[39px] relative rounded-[50%] object-cover"
            src={'/profil.avif'}
            alt="Event Image"
          />
          <p className="text-sm" style={{ marginLeft: '7px' }}>
            {nomParticulier}
          </p>
        </div>
        <div className='flex items-center'>
          <img src="/clockWhite.svg" alt="" />
          <p style={{ marginLeft: '5px' }} className="text-sm">
            {formattedStartTime} - {formattedEndTime}
          </p>
        </div>
      </div>
 
      );
    }

    return null;
  };

  return (
    <>
     
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-gray-700">Calendrier</h1>
</nav>
    <div>
      <img src="" alt="" />
    </div>


    <div>
    <FullCalendar
    plugins={[dayGridPlugin, timeGridPlugin]}
    locale={frLocale}
    themeSystem={'standard'}
    headerToolbar={{
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    }}
    initialView="dayGridMonth"
    allDaySlot={false}
    height={'auto'}
    eventContent={renderEventContent}
    dayMaxEvents={3}
    
  />
        
  

      </div>

 
      {selectedEvent && (
   <Modal
   title="Rendez-vous :"
   visible={isModalOpen}
   onCancel={handleOk}
   footer={null}
   width={800}
 >
   <div>
     <div className="flex" key={selectedEvent.id} style={{marginTop:'4%'}}>
       <div className="flex flex-col rounded" style={{ border: 'solid 2px #EAEAEA', padding: '3%' }}>
         {selectedEvent.statutClient === 'boutique' && (
           <button className="text-base rounded" style={{ padding: '11px', background: '#DEDEFF', color: '#4C40ED' }}>Client boutique</button>
         )}
         {selectedEvent.statutClient === 'flair' && (
           <button className="text-base rounded" style={{ padding: '11px', background: '#EAEAEA', color: 'black' }}>Client Flair</button>
         )}
         <br />
         <div className="flex justify-center">
           <div className="rounded-full" style={{ width: '100px', height: '100px', overflow: 'hidden' }}>
             <img
               src="/profil.avif"
               alt=""
               className="rounded-full"
               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
             />
           </div>
         </div>
         <br />
         <span className="flex justify-center">{selectedEvent.nomParticulier}</span>
         <p className="text-base flex justify-center">Membre depuis {selectedEvent.anneDinscription}</p>
         <p className="text-base flex justify-center">{selectedEvent.email}</p>
         <p className="text-base flex justify-center">{selectedEvent.numerosTel}</p>
         {selectedEvent.statut === 'boutique' && (<button className="bg-black text-white text-lg rounded" style={{ padding: '9px' }}>Modifier</button>)}
       </div>
       <div style={{ border: 'solid 2px #EAEAEA', width: '70%', marginLeft:'5%' }}>
         <br />
         <div className="flex justify-end" style={{ marginRight: '2%' }}>
           {selectedEvent.statut === 'workIn' && (<button className="flex items-center text-base rounded py-1 px-3" style={{ background: '#DEDEFF', color: '#4C40ED' }}>
             <div className="rounded-full h-2 w-2 mr-2" style={{ background: '#4C40ED' }}></div>En cours
           </button>)}
           {selectedEvent.statut === 'cancel' && (<button className="flex items-center text-base rounded py-1 px-3" style={{ background: '#FEE9E9', color: '#FF0000' }}>
             <div className="rounded-full h-2 w-2 mr-2" style={{ background: '#FF0000' }}></div>Annulée
           </button>)}
           {selectedEvent.statut === 'finish' && (<button className="flex items-center text-base rounded py-1 px-3" style={{ background: '#C0FFCA', color: '#2DB742' }}>
             <div className="rounded-full h-2 w-2 mr-2" style={{ background: '#2DB742' }}></div>Terminé
           </button>)}
         </div>
         <div className="flex flex-row" style={{ marginTop: '15px', marginLeft: '40px' }}>
           <div className="text-base text-darkslategray-300">Service réservé</div>
           <span className="text-base text-slategray" style={{ marginLeft: '100px', marginRight: '30px' }}>: {selectedEvent.title}</span>
         </div>
         <div className="flex flex-row" style={{ marginTop: '35px', marginLeft: '40px' }}>
           <div className="text-base text-darkslategray-300">Date de reservations</div>
           <span className="text-base text-slategray" style={{ marginLeft: '70px', marginRight: '30px' }}>: de {selectedEvent.formattedStartTime} à {selectedEvent.formattedEndTime}</span>
         </div>
         <div className="flex flex-row" style={{ marginTop: '35px', marginLeft: '40px' }}>
           <div className="text-base text-darkslategray-300">Lieu</div>
           <span className="text-base text-slategray" style={{ marginLeft: '175px', marginRight: '30px' }}>: {selectedEvent.lieu}</span>
         </div>
         <div className="flex flex-row" style={{ marginTop: '35px', marginLeft: '40px' }}>
           <div className="text-base text-darkslategray-300">Tarifs</div>
           <span className="text-base text-slategray" style={{ marginLeft: '170px', marginRight: '30px' }}>: {selectedEvent.tarifs} €</span>
         </div>
         <div className="flex flex-row" style={{ marginTop: '35px', marginLeft: '40px' }}>
           <div className="text-base text-darkslategray-300">Notes client</div>
           <span className="text-base text-slategray" style={{ marginLeft: '170px', marginRight: '30px' }}>: {selectedEvent.notesClient}</span>
         </div>
         {selectedEvent.statut === 'workIn' && (
           <div className="flex flex-row justify-end" style={{ marginTop: '20px', marginRight: '20px', marginBottom:'6%' }}>
             <div className="flex">
               <button className="rounded text-lg" style={{ padding: '10px', color: '#FF0000', background: '#FEE9E9' }}>Annuler la réservation</button>
               <button className="bg-black text-white rounded text-lg" style={{ padding:'10px', marginLeft:'20px' }}>Supprimer</button>
             </div>
           </div>
         )}
         {selectedEvent.statut === 'cancel' && (
           <div className="flex flex-row justify-end" style={{ marginTop: '20px', marginRight: '20px', marginBottom:'6%' }}>
             <div className="flex">
               <button className="rounded text-lg" style={{ padding: '10px', background:'#EAEAEA', color:'black' }}>Raison</button>
               <button className="bg-black text-white rounded text-lg" style={{ padding:'10px', marginLeft:'20px' }}>Supprimer</button>
             </div>
           </div>
         )}
         {selectedEvent.statut === 'finish' && (
           <div className="flex flex-row justify-end" style={{ marginTop: '20px', marginRight: '20px', marginBottom:'6%' }}>
             <div className="flex">
               <button className="bg-black text-white rounded text-lg" style={{ padding:'10px', marginLeft:'20px' }}>Supprimer</button>
             </div>
           </div>
         )}
       </div>
     </div>
   </div>
 </Modal>
      )}
    </>
  );
};

export default Home;
