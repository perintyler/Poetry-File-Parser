/* HomeView.jsx */

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box                            from '@mui/material/Box';
import Button                         from '@mui/material/Button';
import PropTypes                      from 'prop-types';
import Package                        from './api/Package';
import PackageGrid                    from './PackageGrid';

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
function UploadButton({ title, onUpload })
{    
    const lockfileInput = (
        <div> 
            {title}
            <input hidden accept=".lock" type="file" onChange={onUpload} data-testid="lockfile-input" /> 
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

UploadButton.propTypes = {
    title: PropTypes.string.isRequired,
    onUpload: PropTypes.func.isRequired
};

function NoUploadYetView({ uploadDefaultFile })
{
    const boxContents = (
        <>
            <h3>No Poetry file to display yet...</h3>
            <Button 
              onClick={uploadDefaultFile} 
              data-testid="auto-upload-button"
              children="upload one for me"
            />
        </>
    );

    return (
        <Box 
          display="flex"
          justifyContent="center" 
          alignItems="center"
          flexDirection="column"
          color="#86EFAB"
          m={10}
          p={5}
          textAlign="center"
          border={4}
          borderLeft={0}
          borderRight={0}
          children={boxContents}
        />
    );
}

NoUploadYetView.propTypes = {
    uploadDefaultFile: PropTypes.func.isRequired
};


export default function HomeView({ packages, onUpload, uploadDefaultFile })
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
                   ? (<NoUploadYetView uploadDefaultFile={uploadDefaultFile} />) 
                   : (<PackageGrid packages={packages} />);

    const sizing = { margin: 1, height: '100%' };

    return <Box sx={sizing}>{ uploadButtonBox }{ fileView }</Box>;
}

HomeView.propTypes = {
    packages: PropTypes.arrayOf(PropTypes.instanceOf(Package)),
    onUpload: PropTypes.func.isRequired,
    uploadDefaultFile: PropTypes.func.isRequired
};

