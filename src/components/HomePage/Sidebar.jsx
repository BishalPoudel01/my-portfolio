import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip, IconButton, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHistory } from 'react-icons/ai';
import { FaFolder, FaCogs } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import { BiHome, BiInfoCircle } from 'react-icons/bi';
import paths from '../Path';



// Styles for the component
const useStyles = makeStyles((theme) => ({
  iconButton: {
    margin: theme.spacing(0.3),
    fontSize: '24px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  sidebarIcons: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: theme.spacing(2),
    top: '30%',
    zIndex: 1000,
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  icon: {
    fontSize: '1.7rem',
    color: 'black',
  },
}));

const SidebarComponent = () => {
  const classes = useStyles();

  // Sidebar items with their respective paths
  const sidebarItems = [
    {
      network: 'Home',
      label: 'Home',
      url: paths.home,
      icon: <BiHome className={classes.icon} />,
    },
    {
      network: 'About',
      label: 'About',
      url: paths.about,
      icon: <BiInfoCircle className={classes.icon} />,
    },
    {
      network: 'Skills',
      label: 'Skills',
      url: paths.skills,
      icon: <FaCogs className={classes.icon} />,
    },
    {
      network: 'Experience',
      label: 'Experience',
      url: paths.experience,
      icon: <AiOutlineHistory className={classes.icon} />,
    },
    {
      network: 'Projects',
      label: 'Projects',
      url: paths.projects,
      icon: <FaFolder className={classes.icon} />,
    },
    {
      network: 'Contact',
      label: 'Contact',
      url: paths.contact,
      icon: <MdContactMail className={classes.icon} />,
    },
  ];

  return (
    <div className={classes.sidebarIcons}>
      {sidebarItems.map(({ network, label, url, icon }) => (
        <NavLink
          to={url} // Using the centralized paths here
          key={network}
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'blue' : 'black', // Change color when active
          })}
        >
          <Tooltip title={label} placement="right" TransitionComponent={Zoom}>
            <IconButton
              color="inherit"
              aria-label={`${network} link`}
              className={classes.iconButton}
            >
              {icon}
            </IconButton>
          </Tooltip>
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarComponent;
