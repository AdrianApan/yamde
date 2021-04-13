import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  yamde: {
    margin: '16px 0',
    width: '100%',

    '& > textarea': {
      borderRadius: 0,
      border: '1px solid #ddd',
      marginTop: '-1px',
      width: '100%',
      display: 'table',
      padding: '0.85em',

      '&:active, &:focus': {
        border: '1px solid #fff',
        outline: 'none',
      },
    },
  },
  toolbar: {
    display: 'flex',
    marginBottom: 0,
    maxHeight: '36px',
    width: '100%',
  },
  viewSwitch: {
    marginLeft: 'auto',
    display: 'flex',
  },
  viewButton: {
    cursor: 'pointer',
    fontSize: '16px',
    backgroundColor: 'whitesmoke',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #dddddd',
    transition: 'background-color 0.2s ease',
    fontWeight: 400,
    padding: '0 10px',
    width: '65px',
    height: '36px',
    color: '#a0a0a0',
    fontFamily: 'Helvetica, Arial, sans-serif',

    '&:first-child': {
      borderRight: 0,
    },

    '&:hover': {
      color: '#333',
      backgroundColor: '#dcdcdc',
      transition: 'background-color 0.2s ease',
    },
  },
  preview: {
    background: '#fff',
    border: '1px solid #ddd',
    width: '100%',
    padding: '0.85em',
    minHeight: '50px',
    fontSize: '1rem',
    marginTop: '-1px',
    fontWeight: 400,
    fontFamily: 'Helvetica, Arial, sans-serif',

    '& > p': {
      color: '#333 !important',
      fontFamily: 'inherit',
      textAlign: 'left',
      fontSize: '16px',
      fontWeight: 400,
      marginBottom: '1rem',
      marginTop: 0,
    },

    '& > h1, & > h2, & > h3, & > h4, & > h5, & > h6': {
      color: '#333 !important',
      fontFamily: 'inherit',
      textAlign: 'left',
    },

    // '& > h1': { fontSize: '2.90em' },
    // '& > h2': { fontSize: '2.55em' },
    // '& > h3': { fontSize: '2.20em' },
    // '& > h4': { fontSize: '1.85em' },
    // '& > h5': { fontSize: '1.50em' },
    // '& > h6': { fontSize: '1.15em' },

    '& > a': {
      textDecoration: 'underline',
      fontFamily: 'inherit',
    },
  },
  activeView: {
    borderBottom: '1px solid #fff',
    color: '#333',
    backgroundColor: '#fff',

    '&:hover': {
      backgroundColor: '#fff',
    },
  },
})
