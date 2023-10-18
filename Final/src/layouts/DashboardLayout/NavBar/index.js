import React, { useEffect, useState, useContext } from "react";
import { useLocation, matchPath, useHistory } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FaBarcode, FaBars, FaSquarespace } from "react-icons/fa";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  Hidden,
  List,
  Button,
  ListSubheader,
  makeStyles,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
} from "@material-ui/core";
import { AiFillDashboard, AiFillHome, AiOutlineFileDone } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { TbSquareKey } from "react-icons/tb";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { PiUserSquareBold } from "react-icons/pi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdOutlineLiveHelp } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";
import { TbHexagonLetterO } from "react-icons/tb";
import NavItem from "./NavItem";
import { MdHistory } from "react-icons/md";
import { RiWallet3Line, RiSettingsLine } from "react-icons/ri";
import { AuthContext } from "src/context/Auth";


import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'; //user
const sections = [
  {
    items: [
      // {
      //   title: "Home",
      //   modules: "",
      //   icon: AiFillHome,
      //   href: "/",
      // },
      {
        title: "Dashboard",
        modules: "dashboard",
        icon: TbSquareKey,
        href: "/dashboard",
      },
      {
        title: "Product",
        modules: "Product",
        icon: AiFillCodeSandboxSquare,
        // img: <img src="images/dash1.png"/>,
        href: "/Product-first",
      },
      {
        title: "Customers",
        modules: "",
        icon: PiUserSquareBold,
        // img: <img src="images/dash1.png"/>,
        href: "/pair-details",
      },

      {
        title: "Income",
        modules: "Income",
        icon: MdAccountBalanceWallet,
        // img: "images/dash2.png",

        items: [
          // {
          //   title: "Direct",
          //   href: "/direct",
          // },
          // {
          //   title: "Intra Product",
          //   href: "/intra",
          // },
          {
            title: "Triangular",
            href: "/triangular",
          },
          // {
          //   title: "Loop",
          //   href: "/loop",
          // },
          {
            title: "Martingale",
            href: "/select-coin",
          },
          // {
          //   title: "Grid",
          //   href: "/loop",
          // },
          // {
          //   title:"DCA",
          //   href: "/loop",
          // },
        ],
      },
      {
        title: "Promote",
        modules: "",
        icon: TbHexagonLetterO,
        // img: <img src="images/dash1.png"/>,
        href: "/prediction",
      },
      {
        title: "Help",
        modules: "Help",
        icon: MdOutlineLiveHelp,
        href: "/my-wallet",
      },

      // {
      //   title: "Subscriptions",
      //   icon: BsFillPersonCheckFill,
      //   href: "/subscription",
      // },
    ],
  },
];

function renderNavItems({ items, pathname, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }
  return acc;
}
const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 290,
    background:
      "linear-gradient(0deg, rgba(145,79,80,1) 0%, rgba(93,33,90,1) 26%, rgba(35,38,45,1) 95%)",
  },
  desktopDrawer: {
    top: "0px",
    width: "256px",
    height: "100%",
    // margin: "5px 10px 10px 15px",
    background: "#040440",
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.03)",
    borderRadius: "0px",
    // marginTop: "21px",
    paddingTop: "21px",
    // marginLeft: "13px",
    // paddingLeft: "13px",
    "&::before": {
      position: "absolute",
      backdropFilter: "blur(10px)",
      content: "'' ",
      height: "100%",
      width: "100%",
      top: "0",
      left: "0",
      zIndex: "-1",
    },
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
  socialIcon: {
    cursor: "pointer",
    marginRight: 5,
  },
  button: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    height: "45px",
    paddingLeft: "17px",
    borderRadius: "12px",
    marginTop: "-30px",
    "&:hover": {
      color: "#F5C843",
    },
    "& svg": {
      color: "#F5C843",
      fontSize: "20px",
    },
  },
  btnBox: {
    position: "relative",
    left: "30%",
    bottom: "-250px",
  },
  logoutButton: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    position: "absolute",
    bottom: "19px",
    left: "9px",
    // background: "transparent",
    background: "rgba(255, 255, 255, 0.20)",

    fontWeight: "400",
    fontSize: "13px",
  },
  sideMenuBox: {
    "& .MuiCollapse-wrapperInner": {
      marginLeft: "45px",
    },
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  let permission = auth.userData.permissions;
  let connectedProduct = auth.userData?.connectedProduct?.length;
  const location = useLocation();
  const history = useHistory();
  // const [open, setOpen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  const confirmHandler = () => {
    history.push("/");
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location?.pathname]);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Box pb={2}>


          <Box style={{paddingLeft:"8%", paddingBottom:"10px"}}>
            <Typography variant="h5" style={{color:"#fff", display:"flex", gap:"10px", flexDirection:"row", alignItems:"center"}}><TbHexagonLetterO style={{color:"#fff"}}/>Dashboard</Typography>
          </Box>
          <Box className="sideMenuBox">
            {sections.map((section, i) => {
              let item;
              let item1 = section?.items?.map((data, i) => {
                // eslint-disable-next-line
                if (section?.items[i]?.modules == "") {
                  return section.items[i];
                }
                if (
                  section?.items[i]?.modules == "dashboard" && // eslint-disable-line
                  permission?.dashboard
                ) {
                  return section.items[i];
                } else if (
                  section?.items[i]?.modules == "Product" && // eslint-disable-line
                  permission?.Product
                ) {
                  // eslint-disable-next-line
                  if (connectedProduct == 0) {
                    return section.items[i];
                  } else {
                    return {
                      title: "Product",
                      modules: "Product",
                      icon: FaSquarespace,
                      // img: <img src="images/dash1.png"/>,
                      href: "/Product",
                    };
                  }
                } else if (
                  section?.items[i]?.modules == "Help" && // eslint-disable-line
                  permission?.Help
                ) {
                  return section.items[i];
                } else if (
                  section?.items[i]?.modules == "subscription" && // eslint-disable-line
                  permission?.subscription
                ) {
                  return section.items[i];
                } else if (
                  section?.items[i]?.modules == "Income" && // eslint-disable-line
                  permission?.Income
                ) {
                  return section.items[i];
                } else if (
                  section?.items[i]?.modules == "subscription" && // eslint-disable-line
                  permission?.subscription
                ) {
                  return section.items[i];
                } else {
                  return false;
                }
              });
              for (let k = 1; k < item1.length + 1; k++) {
                if (!item1[k]) {
                  item1.splice(k, 1);
                }
              }
              for (let l = 1; l < item1.length + 1; l++) {
                if (!item1[l]) {
                  item1.splice(l, 1);
                }
              }
              for (let m = 1; m < item1.length + 1; m++) {
                if (!item1[m]) {
                  item1.splice(m, 1);
                }
              }
              // eslint-disable-next-line
              if (auth.userData.userType == "SUBADMIN") {
                item = item1; // eslint-disable-line
              } else {
                item = section.items; // eslint-disable-line
              }
              return (
                <List
                  key={`menu${i}`}
                  subheader={
                    <ListSubheader disableGutters disableSticky>
                      {section.subheader}
                    </ListSubheader>
                  }
                >
                  {renderNavItems({
                    img: section.img,
                    items: item,
                    pathname: location?.pathname,
                  })}
                </List>
              );
            })}
          </Box>
        </Box>


        
        <Box style={{  display: "flex", justifyContent: "flex-start", width: "100%",  alignItems: "flex-end", textAlign: "start",padding:"0px !important" }}  className={classes.logoutButton} >
          <Button style={{
            background: "#2d2d69", color: "#ffffff", textTransform: "none", width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start"
          }} className="">
            <AccountCircleOutlinedIcon style={{ width: "40px", height: "auto" }} /> &nbsp;
            <div style={{ display: "flex", flexDirection: "column", textAlign: "start" }}>
              <Typography variant='p' style={{ fontWeight: "600", color: "#fff" }}>Evano</Typography>
              <Typography variant='p' style={{ fontWeight: "200", color: "#fff" }}>Project Manager</Typography>
            </div>
          </Button>
        </Box>

      
        {isLogout && (
          <Dialog
            maxWidth="sm"
            fullWidth
            className={classes.dailogOpen}
            open={isLogout}
            // TransitionComponent={Transition}
            keepMounted
            onClose={() => setIsLogout(false)}
          >
            <DialogContent>
              <Box className={classes.dialougTitle} align="center">
                <Typography variant="h6" color="primary">
                  Are you sure want to logout?
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions
              style={{
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Box mt={2}>
                <Button
                  className="modelbtn"
                  color="primary"
                  variant="contained"
                  style={{ padding: "8px 21px", background: "#4F4F4F" }}
                  onClick={() => setIsLogout(false)}
                >
                  No
                </Button>
                &nbsp; &nbsp;
                <Button
                  className="modelbtnyes"
                  style={{
                    padding: "8px 21px",
                  }}
                  color="primary"
                  variant="contained"
                  onClick={() => confirmHandler()}
                >
                  Yes
                </Button>
              </Box>
            </DialogActions>
          </Dialog>
        )}
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <Box p={2}>{content}</Box>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
