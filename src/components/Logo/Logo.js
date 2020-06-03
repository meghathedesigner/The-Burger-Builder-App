import React from 'react';
import classes from './Logo.module.css';
import burgerlogo from '../../assests/logo/original.png';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerlogo}  alt={'MyBurger'} />
    </div>
);

export default logo;