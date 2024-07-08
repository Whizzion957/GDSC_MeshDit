import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import classes from './dashboardPage.module.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        {allItems
          .filter(item => user.isAdmin || !item.forAdmin)
          .map(item => (
            <Link
              key={item.title}
              to={item.URL}
              style={{
                backgroundColor: item.bgColor,
                color: item.color,
              }}
            >
              <img src={item.imageURL} alt={item.title} />
              <h2>{item.title}</h2>
            </Link>
          ))}
      </div>
    </div>
  );
}

const allItems = [
  {
    title: 'Orders',
    imageURL: '/icons/orders.svg',
    URL: '/orders',
    bgColor: '#ec407a',
    color: 'white',
  },
  {
    title: 'Profile',
    imageURL: '/icons/profile.svg',
    URL: '/profile',
    bgColor: '#1565c0',
    color: 'white',
  },
  {
    title: 'Users',
    imageURL: '/icons/users.svg',
    URL: '/admin/users',
    forAdmin: true,
    bgColor: '#00bfa5',
    color: 'white',
  },
  {
    title: 'Foods',
    imageURL: '/icons/foods.svg',
    URL: '/admin/foods',
    forAdmin: true,
    bgColor: '#e040fb',
    color: 'white',
  },
];