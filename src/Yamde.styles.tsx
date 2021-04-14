import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  yamde: {
    margin: '16px 0',
    width: '100%',

    '& > textarea': {
      borderRadius: 0,
      border: '1px solid #ddd',
      width: 'calc(100% - 34px)',
      padding: '16px',
      resize: 'none',

      '&:active, &:focus': {
        border: '1px solid #ddd',
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
    fontSize: '14px',
    backgroundColor: 'whitesmoke',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #dddddd',
    transition: 'background-color 0.2s ease',
    fontWeight: 400,
    padding: '0 10px',
    width: '65px',
    height: '35px',
    color: '#a0a0a0',
    zIndex: 1,
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
    width: 'calc(100% - 34px)',
    padding: '16px',
    minHeight: '50px',
    fontSize: '1rem',
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

    '& > a': {
      textDecoration: 'underline',
      fontFamily: 'inherit',
    },

    '& > blockquote': {
      padding: '2px 24px',
      lineHeight: '1em',
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      marginInlineStart: 0,
      marginInlineEnd: 0,
      fontStyle: 'italic',
      borderLeft: '5px solid #b9b9b9',
      fontSize: '1.15em',
    },

    '& > p > code': {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      fontSize: '12px',
      background: '#ececec',
      padding: '4px 8px',
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
