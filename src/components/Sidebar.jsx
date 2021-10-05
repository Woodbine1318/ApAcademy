import React, { useState, Component } from 'react';
import { useSiteMetadata } from '../hooks/queryData';
import PhoneIcon from '../images/phone.svg';
import MailIcon from '../images/send.svg';
import { SidebarDataMenu, SidebarDataContact } from './SidebarData';

const Sidebar = (props) => {
  const sidebar = props.change;

  const { phone, email } = useSiteMetadata();

  return (
    <div className={'sidebar rounded-br-2xl rounded-tr-2xl md:hidden' + (sidebar ? ' flex' : ' hidden')}>
      <div className="flex-grow items-center w-48 text-center">
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <p className="mt-5 font-black" style={{ fontSize: '1.8rem' }}>
            Menu
          </p>
          {SidebarDataMenu.map((item, index) => {
            return (
              <li key={index} className="relative m-2">
                <a className="text-center" href={item.path}>
                  {item.title}
                </a>
              </li>
            );
          })}
          <p className="mt-5 font-black mb-2" style={{ fontSize: '1.8rem' }}>
            Contact
          </p>

          <li className="relative flex flex-row flex-nowrap items-center">
            <PhoneIcon className="mr-2" style={{ width: '25', height: '25' }} />
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
          <li className="relative flex flex-row flex-nowrap items-center mt-5 ">
            <MailIcon className="mr-2" style={{ width: '45', height: '45' }} />
            <a href={`mailto:${email}`} className="break-all">
              {email}
            </a>
          </li>
          {/* {SidebarDataContact.map((item, index) => {
            return (
              <li key={index} className="relative m-2 flex flex-row items-center justify-center">
                {item.icon}
                <a>{item.title}</a>
              </li>
            );
          })} */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
