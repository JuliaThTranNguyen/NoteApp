import { AppBar, Toolbar, Typography } from "@mui/material"
import logo from "/logo.svg"
import Link from "@mui/material/Link";
import GitHubIcon from '@mui/icons-material/GitHub';

export const Header = () => {
  return (
<AppBar color="transparent" position="absolute">
        <Toolbar >
        <a href="/" target="_blank">
          <img src={logo} className="logo" alt="app logo" />
        </a>
        <Typography variant="h6">JuJu - NoteApp</Typography>

        <Link className="href" color="inherit" href="https://github.com/JuliaThTranNguyen" sx={{ mx: 1}}>
           <GitHubIcon fontSize="small"/> 
          </Link>
        </Toolbar>
   </AppBar>
  )
}
