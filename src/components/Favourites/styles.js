import backgroundImage from "../../images/login-back.jpg";

export default {
  popular: {
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: '100px'
  },
  noMovies: {
    height: '95%',
    display: 'flex',
    alignItems: 'center',
    color: 'red'
  }
};