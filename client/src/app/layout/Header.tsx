import { AppBar, Switch, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

interface Props {
    darkMode: boolean;
    switchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function Header ({darkMode, switchHandler} : Props) {
    return (
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                </Typography>
                <Switch checked={darkMode} onChange={switchHandler} />
            </Toolbar>
        </AppBar>
    )
}