import { configureStore } from '@reduxjs/toolkit';
import iconChat from '../assets/icon-chat.png';
import iconMoney from '../assets/icon-money.png';
import iconTrust from '../assets/icon-security.png';

let state = {
  user: {
    firstName: '',
    lastName: '',
    token: '',
    isAuthentified: false,
  },
  bank: {
    features: [
      {
        id: 'priority',
        icon: iconChat,
        alt: 'chat icon',
        title: 'You are our #1 priority',
        text:
          'Need to talk to a representative ? You can get in touch through' +
          'our 24/7 chat or through a phone call in less than 5 minutes.',
      },
      {
        id: 'rates',
        icon: iconMoney,
        alt: 'money icon',
        title: 'More savings means higher rates',
        text: 'The more you save with us, the higher your interest rate will be !',
      },
      {
        id: 'trust',
        icon: iconTrust,
        alt: 'trust icon',
        title: 'Security you can trust',
        text: 'We use top of the line encryption to make sure your data and money is always safe',
      },
    ],
  },
};

export const store = configureStore({
  preloadedState: state,
  reducer: (state) => state,
});
