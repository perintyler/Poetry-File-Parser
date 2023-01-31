import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';

import { ReactComponent as PoetryIcon }       from './svg/poetry-logo.svg';
import { ReactComponent as GithubIcon }       from './svg/github-logo.svg';

function SVGIconLink({ icon, link })
{
    return (
        <a href={link}> 
            <SvgIcon sx={{ pr: 2, pt: '4px'}} component={icon} inheritViewBox />
        </a>
    );
}

export default function HeaderBar()
{
    const website_title = (
        <Typography 
          variant="h5" 
          component="span" 
          sx={{ pt: '2px', flexGrow: 1 }}
          children="Poetry File Parser"
        />
    );

    const poetry_logo = <SVGIconLink icon={PoetryIcon} link="https://python-poetry.org/" />;
    const github_logo = <SVGIconLink icon={GithubIcon} link="https://github.com/perintyler"/>;

    const toolbar = <Toolbar>{ github_logo }{ website_title }{ poetry_logo }</Toolbar>;

    return (
        <AppBar 
          position="static" 
          sx={{ bgcolor: "#10172A" }} 
          children={toolbar} 
        />
    );
}