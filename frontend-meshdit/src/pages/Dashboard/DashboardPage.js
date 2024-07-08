import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import classes from './dashboardPage.module.css';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className={classes.container}>
      <Title title='Dashboard'/>
      <div className={classes.menu}>
        {allItems
          .filter(item => user.isAdmin || !item.forAdmin)
          .map(item => (
            <Link
              key={item.title}
              to={item.URL}
              style={{
                backgroundImage: `linear-gradient(45deg, ${item.bgColor1}, ${item.bgColor2})`,
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
    bgColor1: '#ff7e5f',
    bgColor2: '#e72929',
    color: 'white',
  },
  {
    title: 'Profile',
    imageURL: '/icons/profile.svg',
    URL: '/profile',
    bgColor1: '#00c6ff',
    bgColor2: '#0072ff',
    color: 'white',
  },
  {
    title: 'Users',
    imageURL: '/icons/users.svg',
    URL: '/admin/users',
    forAdmin: true,
    bgColor1: '#3feee6',
    bgColor2: '#28c76f',
    color: 'white',
  },
  {
    title: 'Foods',
    imageURL: '/icons/foods.svg',
    URL: '/admin/foods',
    forAdmin: true,
    bgColor1: '#f9d423',
    bgColor2: '#ff4e50',
    color: 'white',
  },
];