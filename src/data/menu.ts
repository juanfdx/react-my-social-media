import friends from '../assets/images/icons/1.png'
import groups from '../assets/images/icons/2.png'
import marketPlace from '../assets/images/icons/3.png'
import watch from '../assets/images/icons/4.png'
import memories from '../assets/images/icons/5.png'

import events from '../assets/images/icons/6.png'
import gaming from '../assets/images/icons/7.png'
import gallery from '../assets/images/icons/8.png'
import videos from '../assets/images/icons/9.png'
import messages from '../assets/images/icons/10.png'

import fundraiser from '../assets/images/icons/11.png'
import tutorials from '../assets/images/icons/12.png'
import courses from '../assets/images/icons/13.png'





export interface Menu {
  id: string;
  label: string;
  image: string;
  link: string;
}


export const menuItems : Menu[] = [
  {
    id: '2',
    label: 'Friends',
    image: friends,
    link: '/'
  },
  {
    id: '3',
    label: 'Groups',
    image: groups,
    link: '/'
  },
  {
    id: '4',
    label: 'Marketplace',
    image: marketPlace,
    link: '/'
  },
  {
    id: '5',
    label: 'Watch',
    image: watch,
    link: '/'
  },
  {
    id: '6',
    label: 'Memories',
    image: memories,
    link: '/'
  },
]


export const shortCuts : Menu[] = [
  {
    id: '7',
    label: 'Events',
    image: events,
    link: '/'
  },
  {
    id: '8',
    label: 'Gaming',
    image: gaming,
    link: '/'
  },
  {
    id: '9',
    label: 'Gallery',
    image: gallery,
    link: '/'
  },
  {
    id: '10',
    label: 'Videos',
    image: videos,
    link: '/'
  },
  {
    id: '11',
    label: 'Messages',
    image: messages,
    link: '/'
  },
]


export const others : Menu[] = [
  {
    id: '12',
    label: 'Fundraiser',
    image: fundraiser,
    link: '/'
  },
  {
    id: '13',
    label: 'Tutorials',
    image: tutorials,
    link: '/'
  },
  {
    id: '14',
    label: 'Courses',
    image: courses,
    link: '/'
  }
]