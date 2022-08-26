import React from 'react'
import './header.css'
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import keepheader from '../../Assets/keep_header.png'
import SearchIcon from '@mui/icons-material/Search';
import Clear from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        // padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        // transition: theme.transitions.create('width'),
        // width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '35ch',
            '&:focus': {
                width: '40ch',
            },
        },
    },
}));


function Header() {
    return (
        <div >
            <div class='headerContainer'>
                <div class='icon1'>
                    <div><DehazeOutlinedIcon /> </div>
                    <img src={keepheader} style={{ width: "33px", height: "33px", flexDirection: "row" }} />
                    <div class="keeptext">Keep</div>
                </div>
                <div class='icon2'>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase 
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    {/* <SearchIcon /> */}
                    {/* <input type="text" placeholder="Search..."  ></input> */}
                    <Clear />
                </div>
                <div class='icon3'>
                    <RefreshIcon style={{ width: "33px", height: "33px", flexDirection: "row" }} />
                    <SettingsOutlinedIcon style={{ width: "33px", height: "33px", flexDirection: "row" }} />
                </div>
                <div class='icon4'>
                    <AppsRoundedIcon style={{ width: "33px", height: "33px", flexDirection: "row" }} />
                    <AccountCircleIcon style={{ width: "33px", height: "33px", flexDirection: "row" }} />
                </div>
            </div>
        </div>
    )
}

export default Header