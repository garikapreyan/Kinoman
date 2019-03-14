export default {
  movie: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    width: "190px",
    margin: '-10px 10px',
    '&:hover': {
      textDecoration: 'none',
      '&>p': {
        opacity: 1
      }
    }
  },

  img: {
    height: '280px',
    width: '190px',
    borderRadius: '5px'
  },

  movieName: {
    width: '190px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    bottom: '50px',
    color: 'red',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    opacity: 0,
    transition: 'opacity .5s',
    borderRadius: '0 0 5px 5px'
  },

  icon: {
    height: '30px',
    width: '30px',
    position: 'relative',
    bottom: '7px',
    right: '45px',
    fontSize: '30px',
    color: 'red',
    cursor: 'pointer'
  }
}