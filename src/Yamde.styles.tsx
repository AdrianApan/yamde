import { createUseStyles } from 'react-jss'

interface Theme extends Jss.Theme {
  buttonBackgroundColor: string
  buttonBorderColor: string
  buttonColorHover: string
  buttonBackgroundColorHover: string
  buttonColorView: string
  buttonColorActiveView: string
  buttonBackgroundColorActiveView: string
  buttonBorderColorActiveView: string
  buttonColor: string
}

export const useStyles = createUseStyles((theme: Theme) => ({
  yamde: {
    margin: '16px 0',
    width: '100%',
    boxSizing: 'initial',
  },
  toolbar: {
    display: 'flex',
    marginBottom: '-1px',
    maxHeight: '36px',
    width: '100%',
  },
  viewSwitch: {
    marginLeft: 'auto',
    display: 'flex',
    marginTop: '-1px',
  },
  viewButton: {
    cursor: 'pointer',
    fontSize: '14px',
    backgroundColor: theme.buttonBackgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${theme.buttonBorderColor}`,
    transition: 'background-color 0.2s ease',
    fontWeight: 400,
    padding: '0 10px',
    width: '65px',
    height: '35px',
    color: theme.buttonColorView,
    zIndex: 1,
    fontFamily: 'Helvetica, Arial, sans-serif',

    '&:first-child': {
      borderRight: 0,
    },

    '&:hover': {
      color: theme.buttonColorHover,
      backgroundColor: theme.buttonBackgroundColorHover,
      transition: 'background-color 0.2s ease',
    },
  },
  activeView: {
    borderBottom: `1px solid ${theme.buttonBorderColorActiveView}`,
    color: theme.buttonColorActiveView,
    backgroundColor: theme.buttonBackgroundColorActiveView,

    '&:hover': {
      backgroundColor: theme.buttonBackgroundColorActiveView,
    },
  },
  contentArea: {
    marginTop: '-1px',

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

      '& > img': {
        maxWidth: '100%',
      },
    },

    '& code': {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      fontSize: '12px',
      background: '#ececec',
      padding: '4px 8px',
    },

    '& pre': {
      width: 'auto',
      background: '#ececec',
      padding: '4px 8px',
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
      padding: '8px 24px',
      lineHeight: '1em',
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      marginInlineStart: 0,
      marginInlineEnd: 0,
      fontStyle: 'italic',
      borderLeft: '5px solid #b9b9b9',
      fontSize: '1.15em',

      '& > p': {
        color: '#333 !important',
      },
    },

    '& > table': {
      borderCollapse: 'collapse',

      '& th, & td': {
        border: '1px solid #ddd',
        padding: '4px',
      },
    },
  },
  button: {
    cursor: 'pointer',
    backgroundColor: '#fff',
    fontSize: '13px',
    fontFamily: 'Courier, Helvetica, Arial, sans-serif',
    fontWeight: 400,
    width: '34px',
    height: '34px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ddd',
    transition: 'background-color 0.2s ease',
    marginRight: '-1px',
    color: '#212121',

    '&:hover': {
      backgroundColor: '#dcdcdc',
      transition: 'background-color 0.2s ease',
    },

    '& > svg': {
      width: '16px',
      height: '16px',
    },
  },
}))
