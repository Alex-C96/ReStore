import { AppBar, Box, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Timer from "../../features/catalog/Timer";

export default function Header () {
    return (
        <div>
            <AppBar position='static' sx={{mb: 4}}>
            <Toolbar className='appbar-container'>
                <Box display='flex' flexGrow={1}>
                    <Typography variant='h6'>
                        RE-STORE
                    </Typography>    
                </Box>
                <Typography>
                    <Timer />
                </Typography>
            </Toolbar>
            </AppBar>
        </div>
        
    )
}