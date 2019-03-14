import backgroundImage from '../../../images/login-back.jpg';

export default {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },

  inputs: {
    width: '300px',
    margin: '25px 0',
    '&:focus': {
      boxShadow: 'none',
      border: 'gray'
    }
  },

  button: {
    width: '100px',
    '&:focus': {
      boxShadow: 'none'
    }
  }
}