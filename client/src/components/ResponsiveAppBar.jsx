import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, useNavigate } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { CART } from '../ContextApi/CartProvider';

import logo from '../assets/logo.png'
import { MODEL } from '../ContextApi/ModelProvider';
import { USERS } from '../ContextApi/UserProvider';
import SearchBar from './SearchBar';
import apiUrl from '../helpers/API_URL';
import { PRODUCTS } from '../ContextApi/ProductProvider';

const pages = [['', '/products']];
// const pages = [['Products', '/products'], ['Add Product', '/addnewproduct'], ];
// const settings = ['Profile', 'Account', 'Dashboard'];
const settings = [['Profile', "/user/profile"], ['Account', '/user/account'], ['Dashboard', '/user/dashboard']];


function ResponsiveAppBar() {
    const [categories, setCategories] = React.useState([]);
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { isloggedin,  userProfile, logout} = USERS()
    const { setIsSignupOpen, setIsLoginOpen } = MODEL()
    const {searchProductByCategory} = PRODUCTS()

    const { cart } = CART()

    const logoutHandler = () => {
        setIsLoginOpen(true);
        logout();
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    React.useEffect(()=>{
        //fetch categories
        const url = `${apiUrl}/product/category/all`
        fetch(url)
        .then((res)=>res.json())
        .then((json)=> setCategories(json.data)) //setCategories(json)
        .catch((err)=> console.log(err))
    }, [])

    return (
        <AppBar position="static" >
            <Container maxWidth={'xl'}>
                <Toolbar disableGutters style={{ height: '50px' }} >
                    {/*Logo for large screen*/}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <img src={logo} height='50px' />
                    </Box>
                    {/* Title of website */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        e-Commerce
                    </Typography>

                    {/* Menus for small screens */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {categories.map((category) => (
                                // <NavLink to={category} key={category}>
                                    <MenuItem onClick={()=>{handleCloseNavMenu(); searchProductByCategory(category) }}>
                                        <Typography textAlign="center">{category}</Typography>
                                    </MenuItem>
                                // </NavLink>

                            ))}
                        </Menu>
                        {/* logo for small screen size */}
                        <Box sx={{ display: { xs: 'block', md: 'none' }, justifySelf: 'start' }}>
                            <img src={logo} height='50px' />
                        </Box>
                    </Box>

                    {/* menus display in center for large screen */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* {categories.map((category) => (
                            <NavLink
                                to={category}
                                key={category}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {category}
                                </Button>
                            </NavLink>
                        ))} */}

                        {/* Search Feature */}
                        <Box
                            sx={{
                                alignSelf: 'center',
                            }}>
                            <SearchBar />
                        </Box>
                    </Box>



                    {/* cart */}
                    <NavLink to='/viewCart' style={{ position: 'relative' }}>
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}  >
                            {cart.length > 0 && <h4 className='cart-item-count' style={{ position: 'absolute', top: -5, right: 10, color: 'white', fontSize: '1rem' }}>{cart.length}</h4>}
                            <BsFillCartCheckFill style={{ fontSize: '30px', color: 'white' }} />
                        </Button>
                    </NavLink>

                    {/*sign up and login */}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {!isloggedin ? <>
                            <button type="button" onClick={() => setIsSignupOpen(true)}>signup</button>
                            <button type="button" onClick={() => setIsLoginOpen(true)}>login</button>
                        </> :
                            <button type="button" onClick={() => { logoutHandler() }}>logout</button>
                        }
                    </Box>

                    {/* profile */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={userProfile.avatar ?? "https://cdn-icons-png.flaticon.com/512/147/147142.png"} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" onClick={() => navigate(setting[1])}>{setting[0]}</Typography>
                                </MenuItem>
                            ))}
                            <Box sx={{ display: { xs: 'display', sm: 'none' } }}>
                                {!isloggedin ? <>
                                    <MenuItem onClick={() => { handleCloseUserMenu(); setIsSignupOpen(true) }}>Signup</MenuItem>
                                    <MenuItem onClick={() => { handleCloseUserMenu(); setIsLoginOpen(true) }}>Login</MenuItem>
                                </> :
                                    <MenuItem onClick={() => { handleCloseUserMenu(); logoutHandler(); }}>Logout</MenuItem>
                                }
                            </Box>

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default ResponsiveAppBar;