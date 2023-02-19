import React,{useState,useEffect, useContext} from 'react';
import{RiWallet3Line ,RiArrowDownSLine,RiArrowUpSLine, RiMailUnreadFill} from 'react-icons/ri';
import{Menu} from '@headlessui/react';

import { HouseContext } from './HouseContext';
const PriceRangeDropdown = () => {
  const{price,setPrice}=useContext(HouseContext);

  const[isOpen,SetIsOpen]=useState(false);
  const prices=[
    {
      value: 'Price range (any)',
    },
    {
      value: '100000 - 150000'
    },
    {
      value: '150000 - 200000'
    },
    {
      value: '200000 - 250000'
    },
    {
      value: '250000 - 300000'
    },
    {
      value: '10000 - 30000'
    },
    {
      value: '30000 - 40000'
    },
  ]
  return <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={()=>SetIsOpen(!isOpen)} 
    className='dropdown-btn w-full text-left'>
      <RiWallet3Line className='dropdown-icon-primary'/>
      <div>
       <div className='text-[15px] font-medium leading-tight'>
      {price}</div>
        <div className='text-[13px] '>
          Choose Price 
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
      {prices.map((price,index)=>{
        return(
          <Menu.Item
          onClick={()=>setPrice(price.value)} 
          className='cursor-pointer hover:text-violet-700 transition' 
          as='li' key={index}>
            {price.value}
          </Menu.Item>
        )
      }) }
    </Menu.Items>
  </Menu>
};

export default PriceRangeDropdown;
