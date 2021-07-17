import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      borderRadius: '0.25rem',
      padding: theme.spacing(2, 4, 3),
      outline: 'none'
    },
  }));