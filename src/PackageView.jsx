/* PackageView.jsx */

import { Link, useLocation } from 'react-router-dom';
import PropTypes             from 'prop-types';
import Box                   from '@mui/material/Box';
import Divider               from '@mui/material/Divider';
import Package               from './api/Package';

function GoBackButton()
{
    return (
        <Link to="/" style={{ textDecoration: 'none', textColor:"#F26518" }}>
            <Box 
              border={1} 
              borderRadius={2}
              mt={1}
              borderColor="#F26518" 
              display="flex" 
              justifyContent="center" 
              alignItems="center" 
              width="100%" 
              align="center" 
              height={60}
              color="#F26518"
              children="Go Back to Package Grid"
            />
        </Link>
    );
}

function PackageViewContainer(props)
{
    return (
        <Box m={1} p={2}>
            <Box 
              border={1} 
              borderColor="#86EFAB" 
              borderRadius={2} 
              sx={{ padding: 4, paddingRight: 0 }} 
              {...props} 
            />
            <GoBackButton />
        </Box>
    );
}

function DependencyListItem({ name })
{
    const dependency = Package.getByName(name);

    const dependencyLink = (
        <Link 
          to="/package" 
          state={{ pkg: dependency }} 
          children={name}
          style={{color: 'white', fontSize: '1.2em'}}
        />
    );

    return <li children={dependency === null ? `${name} (optional)` : dependencyLink} />;
}

DependencyListItem.propTypes = {
    name: PropTypes.string.isRequired
};

function DependenciesBox({ boxTitle, dependencyNames })
{
    if (dependencyNames.length === 0) { return <Box />; }

    const dependencyList = (
        <ul>
            {dependencyNames.map((name) => <DependencyListItem name={name} key={name}/>)}
        </ul>
    );

    return (
        <Box color="#D0D4FC" pb={1}>
            <h2 style={{fontSize:'1.7em'}}> {boxTitle} </h2>
            <Box ml={1}>{dependencyList}</Box>
        </Box>
    );
}

DependenciesBox.propTypes = {
    boxTitle: PropTypes.string.isRequired,
    dependencyNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

function PackageViewHeader({ pkg })
{
    const packageTitle = (
        <h1 style={{textAlign:"center", color: "#F26518"}}>
            {pkg.name}
        </h1>
    );

    const packageDescription = (
        <h4 style={{textAlign:"center", color: "#A663CC"}}>
            {'"' + pkg.description + '"'}
        </h4>
    );

    return (
        <Box 
          alignItems="center" 
          backgroundColor="#10172A" 
          padding="2%" 
          width="65%" 
          margin="12.5%"
          marginBottom={3}
          marginTop={0}
          borderRadius={3}
          children={<>{packageTitle}{packageDescription}</>}
        />
    );
}

PackageViewHeader.propTypes = {
    pkg: PropTypes.object.isRequired,
};

export default function PackageView()
{
    const location = useLocation();
    const { pkg } = location.state;

    console.assert(typeof pkg === 'object');

    return (
        <PackageViewContainer>

            <PackageViewHeader pkg={pkg} data-testid="package-view-header" />

            <Divider />

            <DependenciesBox 
              boxTitle="☝ Dependencies ☝"
              dependencyNames={pkg.dependencyNames.concat(pkg.optionalDependencyNames)} 
              data-testid="package-view-dependency-box"
            />

            <Divider />

            <DependenciesBox 
              boxTitle="👇 Reverse Dependencies👇" 
              dependencyNames={pkg.reverseDependencyNames} 
              data-testid="package-view-reverse-dependency-box"
            />


        </PackageViewContainer>
    );
}
