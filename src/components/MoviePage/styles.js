import backgroundImage from '../../images/login-back.jpg';

export default {
  root: {
    height: '100%',
    padding: '100px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid gray',
    borderRadius: '10px',
    background: 'rgba(46, 46, 46, .8)',
    color: 'red'
  },

  title: {
    marginTop: '20px'
  },

  description: {
    display: 'flex'
  },

  overview: {
    margin: '70px 20px 0 0'
  },

  image: {
    width: '250px',
    alignSelf: 'flex-start',
    margin: '50px',
    borderRadius: '10px'
  }
};