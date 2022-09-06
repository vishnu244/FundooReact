import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { create } from '@mui/material/styles/createTransitions';
import { addColor } from '../../Services/DataService';


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
            addColor(data).then((response) => {console.log(response)})
            .catch ((error) => console.log(error))
        }
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const colors = ["green", "blue", "yellow", "grey", "purple", "brown", "orange", "pink", "black", "silver", "teal", "white"]
    
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
