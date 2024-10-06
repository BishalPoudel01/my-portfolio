import React from 'react';
import { Link, Tooltip, IconButton, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IoLogoLinkedin } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    margin: theme.spacing(0.3),
    fontSize: '24px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)', // Slight scale on hover for feedback
    },
  },
  socialIcons: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    right: theme.spacing(2),
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

export const SocialIcons = () => {
  const classes = useStyles();

  // Social media profiles
  const socialItems = [
    {
      network: 'Facebook',
      username: 'Facebook Profile',
      url: 'https://facebook.com/your-profile',
    },
    {
      network: 'Instagram',
      username: 'Instagram Profile',
      url: 'https://instagram.com/your-profile',
    },
    {
      network: 'LinkedIn',
      username: 'LinkedIn Profile',
      url: 'https://linkedin.com/in/your-profile',
    },
    {
      network: 'GitHub',
      username: 'GitHub Profile',
      url: 'https://github.com/your-profile',
    },
  ];

  const iconMapper = {
    Facebook: <FaFacebook className={classes.icon} />,
    Instagram: <BsInstagram className={classes.icon} />,
    LinkedIn: <IoLogoLinkedin className={classes.icon} />,
    GitHub: <AiFillGithub className={classes.icon} />,
  };

  return (
    <div className={classes.socialIcons}>
      {socialItems.map(({ network, username, url }) => (
        <Link
          href={url}
          key={network}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color="inherit"
        >
          <Tooltip title={username} placement="left" TransitionComponent={Zoom}>
            <IconButton
              color="inherit"
              aria-label={`Link to ${network} profile`}
              className={classes.iconButton}
            >
              {iconMapper[network] || <i className="fas fa-question-circle" />}
            </IconButton>
          </Tooltip>
        </Link>
      ))}
    </div>
  );
};
