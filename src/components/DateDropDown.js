import React,{useState,useEffect, useContext} from 'react';
import{RiHotelBedFill ,RiArrowDownSLine,RiArrowUpSLine, RiMailUnreadFill} from 'react-icons/ri';
import{Menu} from '@headlessui/react';

import { HouseContext } from './HouseContext';
const DateRangeDropdown = () => {
  const{room,setRoom}=useContext(HouseContext);

  const[isOpen,SetIsOpen]=useState(false);
  const rooms=[
    {
      value: 'Bedrooms (any)',
    },
    {
      value: '2'
    },
    {
      value: '3'
    },
    {
      value: '4'
    },
    {
      value: '5'
    },
    {
      value: '6'
    },
    
  ]
  return <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={()=>SetIsOpen(!isOpen)} 
    className='dropdown-btn w-full text-left'>
      <RiHotelBedFill className='dropdown-icon-primary'/>
      <div>
       <div className='text-[15px] font-medium leading-tight'>
      {room}</div>
        <div className='text-[13px] '>
          How many Rooms
        </div>
        </div>
        {
          isOpen? (
            <RiArrowUpSLine className='dropdown-icon-secondary'/>
          ):(
            <RiArrowDownSLine className='dropdown-icon-secondary'/> 
          )
        }
     
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {rooms.map((room,index)=>{
        return(
          <Menu.Item
          onClick={()=>setRoom(room.value)} 
          className='cursor-pointer hover:text-violet-700 transition' 
          as='li' key={index}>
            {room.value}
          </Menu.Item>
        )
      }) }
    </Menu.Items>
  </Menu>
};

export default DateRangeDropdown;
