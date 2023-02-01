/* PackageGrid.jsx */

import Typography from '@mui/material/Button';
import Grid       from '@mui/material/Grid';
import { Link }   from "react-router-dom";

function PackageLink({ pkg })
{
    return (
        <Link to="/package" state={{ pkg: pkg }}>
            <Typography color="primary">{ pkg.name }</Typography>
        </Link>
    );
}

function PackageGridItem({ pkg })
{
    return (
        <Grid item 
          display="flex"
          alignItems="center"
          justifyContent="center" 
          border={2}
          borderColor="#86EFAB"
          color="white" 
          align="center" 
          minWidth="120px"
          xs={4} 
          height='85px'
          children={<PackageLink pkg={pkg} />}
        />
    );
}

function NavigationGrid(props)
{
    return (
        <nav>
            <Grid container {...props} />
        </nav>
    );
}

export default function PackageGrid({ packages })
{
    return (
        <NavigationGrid
          justifyContent="flex-start" 
          alignItems="flex-start"
          mt={2} 
          spacing={0}
          children={packages.map((pkg) => <PackageGridItem pkg={pkg} key={pkg.name} />)}
        />
    );
}
