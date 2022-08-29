import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { create } from '@mui/material/styles/createTransitions';


export default function ColorPopper(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const takeColor = (color) => {
        if (props.action === "create") {
            props.ListenToPopper(color)
        } else if (props.action === "update") {
            // props.ListenToPopper(color)
            let data = {id : props.id, color:color}

        }
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]

    return (
        <div>
            <PaletteOutlinedIcon style={{ cursor: "pointer" }} onClick={handleClick} />

            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: "flex", }}>
                    {
                        colors.map((color) => (
                            <div style={{ width: 35, height: 35, borderRadius: 50, backgroundColor: color, marginRight: 10 }} onClick={() => takeColor(color)}>

                            </div>
                        ))
                    }
                </Box>
            </Popper>
        </div>
    );
}
