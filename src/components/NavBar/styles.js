export default {
  navbarItem: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: 'rgb(255, 255, 255, .5)',
      textDecoration: 'none'
    }
  },
  form: {
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    width: '250px',
    height: '30px',
    border: 'none',
    position: 'fixed',
    right: '100px',
    borderRadius: '1000px',
    padding: '0 10px',
    transition: 'width 1s',
    '&:focus': {
      outline: 0,
      width: '300px'
    }
  },
  floatLeft: {
    marginRight: 'auto'
  }
};