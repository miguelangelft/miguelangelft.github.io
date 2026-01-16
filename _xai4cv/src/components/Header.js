// Copyright (c) Facebook, Inc. and its affiliates.
import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import '../css/academicons.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import MoreVert from '@material-ui/icons/MoreVert';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import theme from '../styles';

const styles = {
    root: {
      width: '100%',
      flexGrow: 1
    },
    buttonLink: {
        color: theme['palette']['primary']['contrastText'],
        textDecoration: 'none'
    },
    buttonsSide: {
        textAlign: 'right',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        flex: 1,
        flexDirection: 'row-reverse'
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        flex: 1,
        flexDirection: 'row-reverse'
    },
  };

class Header extends React.Component {
    state = {
        mobileMoreAnchorEl: null,
        dialogOpen: false
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { mobileMoreAnchorEl } = this.state;
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <ClickAwayListener onClickAway={this.handleMobileMenuClose}>
                    <MenuList>
                        <MenuItem onClick={this.handleMobileMenuClose}>
                            <Link
                                underline="none"
                                className={[classes.buttonLink, classes.buttonsSide].join(' ')}
                                href="mailto:xai4cv2025@googlegroups.com"
                            >
                                <Button disableRipple={true} disableFocusRipple={true} color="default">
                                    <i className="fa fa-envelope fa-lg"></i>
                                </Button>
                            </Link>
                        </MenuItem>
                    </MenuList>

                </ClickAwayListener>
            </Menu>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Link
                            underline="none"
                            align="left"
                            className={[classes.buttonLink, classes.grow].join(' ')}
                            href={'.'}
                        >
                            <b>XAI4CV</b>
                        </Link>
                        <div className={classes.sectionDesktop}>
                            <Link
                                underline="none"
                                className={[classes.buttonLink, classes.buttonsSide].join(' ')}
                                href="mailto:xai4cv2025@googlegroups.com"
                            >
                                <Button disableRipple={true} disableFocusRipple={true} color="inherit">
                                    <i className="fa fa-envelope fa-lg"></i>
                                </Button>
                            </Link>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreVert />
                            </IconButton>
                        </div>
                        {renderMobileMenu}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
