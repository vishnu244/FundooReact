import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import {connect} from 'react-redux';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    marginTop: "10vh",
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: 70,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



export function MiniDrawer(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };


    const handleNotes = () => {
        props.dispatch({type : "SET_Title_as_Notes"})
        props.listenToDrawer("Notes")
    }
    const handleReminders = () => {
        props.dispatch({type : "SET_Title_as_Reminder"})
    }
    const handleEditLabels = () => {
        props.dispatch({type : "SET_Title_as_EditLabels"})
    }
    const handleArchive = () => {
        props.dispatch({type : "SET_Title_as_Archive"})
        props.listenToDrawer("Archive")
    }
    const handleTrash = () => {
        props.dispatch({type : "SET_Title_as_Trash"})
        props.listenToDrawer("Trash")
    }
    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />

            <Drawer variant="permanent" open={props.drawer}>

                <List>
                    <ListItem button onClick={handleNotes}>
                        <ListItemIcon>
                            <LightbulbOutlinedIcon  style={{ cursor: "pointer" }} />
                        </ListItemIcon>
                        <ListItemText primary="Notes" />
                    </ListItem>
                    <ListItem button onClick={handleReminders}>
                        <ListItemIcon>
                            <NotificationsNoneIcon style={{ cursor: "pointer" }}/>
                        </ListItemIcon>
                        <ListItemText primary="Reminders" />
                    </ListItem>
                    <ListItem button onClick={handleEditLabels}>
                        <ListItemIcon>
                            <EditOutlinedIcon style={{ cursor: "pointer" }}/>
                        </ListItemIcon>
                        <ListItemText primary="Edit Labels" />
                    </ListItem>
                    <ListItem button onClick={handleArchive} >
                        <ListItemIcon>
                            <ArchiveOutlinedIcon style={{ cursor: "pointer" }}/>
                        </ListItemIcon>
                        <ListItemText primary="Archive" />
                    </ListItem>
                    <ListItem button onClick={handleTrash}>
                        <ListItemIcon>
                            <DeleteOutlineOutlinedIcon style={{ cursor: "pointer" }}/>
                        </ListItemIcon>
                        <ListItemText primary="Trash" />
                    </ListItem>

                </List>
            </Drawer>

        </Box>
    );
}


export default connect()(MiniDrawer);