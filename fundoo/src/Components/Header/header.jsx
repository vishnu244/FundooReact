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
import { connect } from 'react-redux';


function Header(props) {


    
    const handleDrawer = () => {props.listenToHeader()} 
    return (
        <div >
            <div class='headerContainer'>
                <div class='icon1'>
                    <div><DehazeOutlinedIcon onClick={handleDrawer} /> </div>
                    <img src={keepheader} style={{ width: "33px", height: "33px", flexDirection: "row" }} />
                    <div class="keeptext">{props.title}</div>
                </div>
                <div class='icon2'>
                    <SearchIcon />
                    <input type="text" placeholder="Search..."  ></input>
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
const mapStateToProps = (state) => {
    console.log(state)
	return {
		title: state.drawerReducer.title,
	};
};

//export default Header
export default connect(mapStateToProps)(Header);