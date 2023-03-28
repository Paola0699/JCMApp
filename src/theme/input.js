export const InputStyles = {
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&.disabled': {
      color: '#CBCCCB',
      backgroundColor: '#F4F4F4'
    },
    '&$disabled': {
      color: '#CBCCCB',
      backgroundColor: '#F4F4F4'
    },
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: '16px',
    borderRadius: '2px',
    textTransform: 'none',
    padding: '12px 16px',
    fontFamily: 'helvetica-neue-bold,Helvetica Neue,Helvetica,Arial,sans-serif',
    textShadow: 'none',
    textDecoration: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    lineHeight: '1em',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contained: {
    color: '#ffffff',
    backgroundColor: '#f96302',
    height: '44px',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#f96302',
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none'
    },
    '&$disabled': {
      backgroundColor: '#f4f4f4'
    },
    '&.disabled': {
      backgroundColor: '#f4f4f4'
    }
  },
  text: {
    fontWeight: 'normal',
    padding: '0',
    fontFamily: 'helvetica-neue,Helvetica Neue,Helvetica,Arial,sans-serif',
    '&$disabled': {
      color: '#cccccb',
      backgroundColor: 'transparent'
    },
    '&.disabled': {
      color: '#cccccb',
      backgroundColor: 'transparent'
    },
    '& > span': {
      textDecoration: 'underline'
    }
  },
  textSecondary: {
    color: 'white'
  },
  sizeSmall: {
    fontSize: '12px',
    padding: 'inherit',
    '& > span': {
      padding: '0px 10px'
    }
  },
  sizeLarge: {
    fontSize: '22px',
    padding: '0 0 17px 0',
    '& > span': {
      padding: '10px 44px'
    },
    '&$outlined': {
      height: '58px',
      padding: '0px'
    }
  },
  outlined: {
    height: '44px',
    color: '#f96302',
    border: '2px solid #f96302',
    padding: '12px 16px',
    '&$disabled': {
      border: '2px solid #cccccb',
      backgroundColor: 'transparent'
    },
    '&.disabled': {
      border: '2px solid #cccccb',
      backgroundColor: 'transparent'
    }
  },
  outlinedSecondary: {
    color: '#666',
    border: '2px solid #666',
    '&:hover': {
      backgroundColor: '#666',
      border: '2px solid #666'
    }
  }
};
