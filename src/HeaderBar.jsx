/* HeaderBar.jsx */

import { ReactComponent as PoetryIcon } from './svg/poetry-logo.svg';
import { ReactComponent as GithubIcon } from './svg/github-logo.svg';
import AppBar                           from '@mui/material/AppBar';
import Typography                       from '@mui/material/Typography';
import SvgIcon                          from '@mui/material/SvgIcon';
import Grid                             from '@mui/material/Grid';

function SVGLink({ icon, link, size })
{
    return (
        <a href={link}> 
            <SvgIcon inheritViewBox component={icon} fontSize={size} />
        </a>
    );
}

function WebsiteTitleGridItem(props)
{
    const websiteTitle = (
        <Typography 
          variant="h6" 
          component="span" 
          pb='2px'
          children="Poetry File Parser"
        />
    );

    return (
        <Grid item xs
          display="flex" 
          alignItems="center" 
          justify="center" 
          justifyContent="flex-start"
          children={websiteTitle}
        />
    );
}

function GithubIconGridItem(props)
{
    const githubSvg = (
        <SVGLink 
          icon={GithubIcon} 
          size="small" 
          link="https://github.com/perintyler" // TODO: replace with repo link
        />
    );

    return (
        <Grid item xs
          display="flex" 
          justifyContent="center"
          children={githubSvg}
        />
    );
}

function PoetryIconGridItem(props)
{
    const poetrySvg = (
        <SVGLink
          icon={PoetryIcon} 
          size="medium" 
          link="https://python-poetry.org/"
        />
    );

    return (
        <Grid item xs 
          display="flex" 
          justifyContent="flex-end"
          children={poetrySvg}
        />
    );
}

function HeaderBarGrid(props) 
{
    return (
        <Grid container 
          p={2} 
          mt={0.5} 
          mb={0.5} 
          direction="row" 
          alignItems="center" 
          justifyContent="space-between" 
          sx={{ width: '100%' }}
          {...props}
        />
    )
}

function HeaderBarContainer(props)
{
    return (
        <AppBar
          position="static" 
          sx={{ bgcolor: "#10172A" }}
          {...props}
        />
    );
}

export default function HeaderBar()
{
    return (
        <HeaderBarContainer>
            <HeaderBarGrid>
                <WebsiteTitleGridItem />
                <GithubIconGridItem />
                <PoetryIconGridItem />
            </HeaderBarGrid>
        </HeaderBarContainer>
    );
}

