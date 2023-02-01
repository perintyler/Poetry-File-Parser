/* HomeView.jsx */

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box                            from '@mui/material/Box';
import Button                         from '@mui/material/Button';
import PackageGrid                    from './PackageGrid';

const NO_FILE_WARNING_BOX = (
    <Box 
      display="flex"
      justifyContent="center" 
      alignItems="center"
      color="#86EFAB"
      m={10}
      p={5}
      textAlign="center"
      border={4}
      borderLeft={0}
      borderRight={0}
      children={<h3>No Poetry File to display yet...</h3>}
    />
);

const UPLOAD_BUTTON_THEME = createTheme({
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
function UploadButton({ title, onUpload })
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

    return <ThemeProvider theme={UPLOAD_BUTTON_THEME}>{ uploadButton }</ThemeProvider>;
}

export default function HomeView({ packages, onUpload })
{
    const buttonTitle = packages === null 
                      ? "Upload Poetry File" 
                      : "Upload A Different Poetry File";
    
    const uploadButtonBox = (
        <Box align="center" pt={1}>
            <UploadButton onUpload={onUpload} title={buttonTitle} />
        </Box>
    );

    const fileView = (packages === null)
                   ? (NO_FILE_WARNING_BOX) 
                   : (<PackageGrid packages={packages} />);

    const sizing = { margin: 1, height: '100%' };

    return <Box sx={sizing}>{ uploadButtonBox }{ fileView }</Box>;
}
