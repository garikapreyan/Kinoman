import backgroundImage from '../../images/login-back.jpg';

export default {
  popular: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    position: 'relative',
    paddingTop: '100px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  },
  empty: {
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }
};