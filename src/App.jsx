/* App.jsx */

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import React                                      from 'react';
import HeaderBar                                  from './HeaderBar';
import HomeView                                   from './HomeView';
import PackageView                                from './PackageView';
import { SuccessMessage, ErrorMessage }           from './Alerts';
import { MOCKFILE_CONTENTS }                      from './MockData.jsx';
import { getPackages, InvalidPoetryFileError }    from './api/ParsePoetry';

export default class App extends React.Component
{
    state = { 
        packages       : null, 
        successMessage : null, 
        errorMessage   : null 
    };

    handleUpload(uploadEvent)
    {
        const reader = new FileReader();

        reader.onload = (readEvent) => {

            var packages = null;
            var successMessage = null;
            var errorMessage = null;

            try {
                const poetryFileContents = readEvent.target.result;
                packages = getPackages(poetryFileContents);

                if (packages.length > 0) { 
                    successMessage = `Successfully parsed ${packages.length} package`
                                   + (packages.length > 1 ? 's' : '');
                } else {
                    errorMessage = "The uploaded Poetry File did not contain any packages...";
                    packages = null;
                }
            } catch (error) {                
                errorMessage = error instanceof InvalidPoetryFileError
                             ? "The uploaded lockfile is not a valid Poetry file."
                             : "An unexpected error occured: " + error.toString();
                console.error(errorMessage);
            } finally {
                this.setState({ 
                    packages: packages, 
                    successMessage: successMessage, 
                    errorMessage: errorMessage
                });
            }  
        };

        reader.readAsText(uploadEvent.target.files[0]);
    }

    useMockPoetryFile()
    {
        this.setState({packages: getPackages(MOCKFILE_CONTENTS)});
    }

    render() 
    {
        const homeView = (
            <HomeView 
              packages={this.state.packages} 
              onUpload={(event) => this.handleUpload(event)}
              useMockFile={() => this.useMockPoetryFile()}
            />
        );

        const packageView = <PackageView data-testid="package-view" />;

        const routes = (
            <Routes>
                <Route 
                  path="/" 
                  element={homeView} 
                />
                <Route 
                  path="/package" 
                  element={packageView} 
                />
            </Routes>
        );

        return (
            <>
                <HeaderBar />

                <Router children={routes} />

                <SuccessMessage 
                  message={this.state.successMessage} 
                  onClose={(e)=>this.setState({successMessage:null})} 
                />

                <ErrorMessage 
                  message={this.state.errorMessage} 
                  onClose={(e)=>this.setState({errorMessage:null})} 
                />
            </>
        );
    }
}
