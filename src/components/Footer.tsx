import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <Box color="transparent" component="footer">
      <Container maxWidth="md">
        <Typography
          variant="caption"
          color="text.primary"
          className="typography"
        >
          Copyright ©{" 2023"} | Made by
          <Link className="href" color="inherit" href="https://github.com/JuliaThTranNguyen" sx={{ mx: 1, fontSize: 16 }}>
           <GitHubIcon fontSize="small"/> TH.JuliaThTranNguyen
          </Link>
          
        </Typography>
      </Container>
    </Box>
  );
}