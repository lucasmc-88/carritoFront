// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        Home
                    </Typography>
                    <Button component={Link} to="/" color="inherit">
                        Order
                    </Button>
                    <Button component={Link} to="/product" color="inherit">
                        Products
                    </Button>
                    <Button component={Link} to="/category" color="inherit">
                        Categories
                    </Button>
                    <Button component={Link} to="/orderaddproduct" color="inherit">
                        Add Order
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;

/*<Button component={Link} to="/orderupdate" color="inherit">
                        Update Order
                    </Button>*/