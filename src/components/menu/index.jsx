/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Menu = ({ data, ...props }) => (
    <nav>
        <ul className={styles.menu_mobile_close}>
            <li className={styles.menu_item}>
                <a href="#" className={styles.menu_item_link}>Tasks</a>
            </li>
            <li className={styles.menu_item}>
                <a href="#" className={styles.menu_item_link}>Members</a>
            </li>
            <li className={styles.menu_item}>
                <a href="#" className={styles.menu_item_link}>Settings</a>
            </li>
            <li className={styles.menu_item}>
                <a href="#" className={styles.menu_item_link}>Contacts</a>
            </li>
            <li className={styles.menu_item}>
                <a href="#" className={styles.menu_item_link}>Tutorial</a>
            </li>
        </ul>
        <div className={styles.burger_menu}>
            <div className={styles.burger_menu_icon}></div>
            <div className={styles.burger_menu_icon}></div>
            <div className={styles.burger_menu_icon}></div>
        </div>
    </nav>
    //   <ul className={styles.list}>
//     {data.map(item => (
//       <li key={item.id} className={styles.item}>
//           <Todo {...item} {...props} />
//       </li>
//     ))}
//   </ul>
);


// List.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//   ).isRequired
// };

export default Menu;

