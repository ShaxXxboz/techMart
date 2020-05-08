import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import {
  IconButton,
  Toolbar,
  Typography,
  Badge,
  AppBar,
  Paper,
  MenuItem,
  MenuList,
  Popper,
  Grow,
  ClickAwayListener,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    flexGrow: 1,
  },
  textLink: {
    textDecoration: "none",
    color: "inherit",
  },
  menuPopper: {
    width: "15em",
  },
}));

const Header = ({ logo, logoLink, cartLink }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const { categories, loading, error } = useSelector(
    (state) => state.categoriesList
  );
  const { cartItems } = useSelector((state) => state.shoppingCart);
  const hasCategories = !(loading || error);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {hasCategories ? (
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              className={classes.menuPopper}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        {categories.map(({ title, url }, idx) => (
                          <MenuItem
                            key={idx}
                            onClick={handleClose}
                            component={Link}
                            to={url}
                          >
                            {title}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          ) : null}
          <Typography variant="h6" className={classes.logo}>
            <Link to={logoLink} className={classes.textLink}>
              {logo}
            </Link>
          </Typography>
          <IconButton color="inherit" component={Link} to={cartLink}>
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
