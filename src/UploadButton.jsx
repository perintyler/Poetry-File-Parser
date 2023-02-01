/* UploadButton.jsx */

import Button                         from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        secondary: {
            dark:         "#A663CC",
            main:         "#F26518",
            light:        "#FCDDF2",
            contrastText: "#FFFFFF"
        }
    }
});

// File Input Button that only accepts lockfiles (.lock)
export default function UploadButton({ title, onUpload })
{    
    const lockfileInput = (
        <div> 
            {title}
            <input hidden accept=".lock" type="file" onChange={onUpload} /> 
        </div>
    );

    const uploadButton = (
        <Button
          fullWidth
          size="large" 
          color="secondary" 
          variant="contained" 
          component="label"
          children={lockfileInput}
        />
    );

    return <ThemeProvider theme={theme}>{ uploadButton }</ThemeProvider>;
}