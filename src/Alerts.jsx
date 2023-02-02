/* Alerts.jsx */

import * as React from 'react';
import Snackbar   from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon  from '@mui/icons-material/Close';
import MuiAlert   from '@mui/material/Alert';

const ALERT_DURATION = 7000; // 7 seconds

function Alert({ severity, message, onClose })
{
    const closeAlertButton = (
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={onClose}
          children={<CloseIcon fontSize="small" />}
        />
    );

    const alertElement = (
        <MuiAlert onClose={onClose} severity={severity}>
            { message }
        </MuiAlert>
    );

    return (
        <Snackbar
          open={message !== null}
          autoHideDuration={ALERT_DURATION}
          onClose={onClose}
          action={<React.Fragment>{ closeAlertButton }</React.Fragment>}
          anchorOrigin={{ vertical:'bottom', horizontal:'left' }}
          children={alertElement}
        />
    );
}

export function SuccessMessage({ message, onClose })
{
    return <Alert severity="success" message={message} onClose={onClose} />;
}

export function ErrorMessage({ message, onClose })
{
    return <Alert severity="error" message={message} onClose={onClose} />;
}

