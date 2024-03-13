import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    minHeight: '96vh',
  },
  leftPanel: {
    flex: '80%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  rightPanel: {
    flex: '0 0 20%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  footer: {
    marginTop: 'auto',
    textAlign: 'left',
  },
  cardContainer: {
    flex: '1',
    overflowY: 'auto',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    maxHeight: 'calc(100vh - 200px)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    border: '2px solid black',
    borderRadius: '5px',
    padding: '50px',
    margin: '10px',
    width: 'calc(50% - 20px)',
    height: '300px',
    boxSizing: 'border-box',
    position: 'relative',
  },
  deleteButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor: 'pointer',
  },
  buttons: {
    padding: "10px",
    margin: "0 20px",
    backgroundColor: "transparent",
    border: "1px solid blue",
    cursor: "pointer",
    transition: "background-color 0.3s",
    '&:hover': {
      backgroundColor: "blue",
    },
  },
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column',
    },
    leftPanel: {
      flex: 'none',
      width: '100%',
    },
    rightPanel: {
      flex: 'none',
      width: '100%',
    },
    card: {
      width: 'calc(100% - 40px)',
    },
  },
});


export  default useStyles;