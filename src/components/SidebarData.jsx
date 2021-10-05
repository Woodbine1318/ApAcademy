import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PhoneIcon from '../images/phone.svg';
import MailIcon from '../images/send.svg';

export const SidebarDataMenu = [
  {
    title: 'How it works',
    path: '#how-it-works',
  },
  {
    title: 'Experience',
    path: '#experience',
  },
  {
    title: 'Academy Support',
    path: '#academy-support',
  },
  {
    title: 'Blog',
    path: '#blog',
  },
];

export const SidebarDataContact = [
  {
    title: 'Phone',
    icon: <PhoneIcon />,
  },
  {
    title: 'Email',
    icon: <MailIcon />,
  },
];
