import React, { useState } from 'react';
import dayjs from 'dayjs';
import { ConfigProvider, Calendar, Table, Space, CalendarProps, Badge, BadgeProps } from 'antd';
import frFR from 'antd/locale/fr_FR';
import Link from 'next/link'
const CalendrierEtapeReservation: React.FC = () => {
  const [value, setValue] = useState(() => dayjs('2024-03-8'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2024-03-8'));

  const onSelect = (newValue: dayjs.Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: dayjs.Dayjs) => {
    setValue(newValue);
  };

  interface DataType {
    key: React.Key;
    date: string;
    horaires: string;
    tarif: number;
  }
  interface ListDataItem {
    type: 'success' | 'warning';
    content: string;
  }
  const data: DataType[] = [
    {
      key: '1',
      date: '14/03/24',
      horaires: '8h30 à 19h',
      tarif: 70,
    },
    {
      key: '2',
      date: '15/03/24',
      horaires: '8h30 à 19h',
      tarif: 70,      
    },
  ];
  
  const getListData = (value: dayjs.Dayjs) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
       
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'plus de place' },
        
        ];
        break;
      case 15:
        listData = [
          {type: 'success', content: 'Il reste 4 place'}
        ];
        break;
      default:
    }
    return listData || [];
  };
  
  
  
  const dateCellRender = (value: dayjs.Dayjs) => {
    const listData: ListDataItem[] = getListData(value);
  
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<dayjs.Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  };

  return (
    <>
      <div className='flex flex-row' style={{margin:'20px'}}>
        <div className='w-2/4' style={{marginRight:'10px'}}>
          <h1 className='flex justify-center'>Sélectionner une date</h1>
          <ConfigProvider locale={frFR}>
            <Calendar cellRender={cellRender}  value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
          </ConfigProvider>
        </div>
        <div className='w-2/4' >
          <h1 className='flex justify-center'>Mes dates de réservations</h1>
          <ConfigProvider theme={{
            components: {
              Table: {
                headerColor: '#FFFFFF',
                headerBg: '#000000', 
              },
            },
          }}>
          <Table dataSource={data}>
            <Table.ColumnGroup>
              <Table.Column title="Date" dataIndex="date" key="date" />
              <Table.Column title="Horaires" dataIndex="horaires" key="horaires" />
              <Table.Column title="Tarif" dataIndex="tarif" key="tarif" />
              <Table.Column
                title="Action"
                key="action"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <a><img src='/x-circle-red.svg' alt="" /></a>
                  </Space>
                )}
              />
            </Table.ColumnGroup>
          </Table>
          </ConfigProvider>
          <div className='flex flex-row justify-end' style={{margin:'10px'}}>
            <div className=''style={{marginRight:''}}>
            <Link className='bg-black text-white text-lg rounded no-underline' style={{padding:'9px'}} href='/boutique/boutique'>Annuler</Link>
            </div>
            <div style={{marginLeft:'2%'}}>
            <Link className='bg-black text-white text-lg rounded no-underline' style={{padding:'9px'}} href='/boutique/location/panier-location'>Continuer</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendrierEtapeReservation;
