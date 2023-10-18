import {
  Box,
  Typography,
  makeStyles,
  Grid,
  FormControl,

  Paper,
  InputLabel,
  Select,
  MenuItem,

  TextField,
} from "@material-ui/core";
import React, { useContext, useState, } from "react";



import Page from "src/component/Page";


import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'; //dollar
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined'; //document
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined'; //balance
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined'; //bag

import BarChart from './Chart1';

import Pie from './Pie';
import BasicTable from "./Table";
const useStyles = makeStyles((theme) => ({
  dashboardBox: {
    position: "relative",
    zIndex: "999",
    "& .mainBox": {
      borderRadius: "5px !important",
      padding: "30px",

      "& .apexcharts-canvas": {
        width: "100% !important",
      },
      "& .apexcharts-legend": {
        display: "none",
      },
      "& .apexcharts-toolbar": {
        display: "none !important",
      },
    },
    "& .countBox": {
      background: "rgba(255, 255, 255, 0.04)",
      borderRadius: "0px",
      padding: "30px 10px",
      transition: "0.5s",
      "&:hover": {
        transform: "translateY(-5px)",
      },
    },
    "& .countBox1": {
      background: theme.palette.background.card,
      borderRadius: "10px",
      padding: "30px 10px",
      transition: "0.5s",
      "&:hover": {
        transform: "translateY(-5px)",
      },
    },
    "& .tabButtonBox": {
      background: theme.palette.background.tab,
      borderRadius: "5px",
      padding: "6px 25px",
      marginLeft: "10px",
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        padding: "6px 15px",
      },
    },
    "& .tabActive": {
      background: "linear-gradient(102.31deg, #2F8BBE -5.05%, #0D9C7A 87.59%)",
      borderRadius: "5px",
      padding: "6px 25px",
      color: "#fff !important",
      marginLeft: "10px",
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        padding: "6px 15px",
      },
      "&:hover": {
        color: "#ffffff",
        background: "transparent",
        border: "2px solid #0D9C7A",
        backgroundColor: "transparent",
      },
    },
    "& .pieBox": {
      padding: "20px 0px 12px",
    },
    "& .piedata": {
      padding: "6px",
      borderRadius: "5px",
      [theme.breakpoints.down("xs")]: {
        padding: "5px",
      },
    },
    "& .filterBox": {
      position: "relative",
      background: "rgba(255, 255, 255, 0.04)",
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.03)",
      borderRadius: "0px",
      "& .MuiOutlinedInput-input": {
        color: "rgba(255, 255, 255, 0.6)",
      },
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
      [theme.breakpoints.down("xs")]: {
        margin: "7px 0px !important",
      },
    },
    "& .datepickerBox": {
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
      "& .MuiSvgIcon-root": {
        color: theme.palette.text.gray,
      },
      "& .buttonBox": {
        margin: "0px 14px",
        [theme.breakpoints.down("xs")]: {
          margin: "10px 0px",
        },
      },
    },
  },
  DashboardGridBox1: {
    background: '#FFF',
    width: "100%",
    maxHeight: "100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "10px",
    padding: "9% 1% 9% 1% !important",
    "@media (max-width: 959px)": {
      padding: "5% 0% !important",
    },
  },
  formControlW: {
    "& .MuiSelect-filled.MuiSelect-filled": {
      // padding:"10px 40px"
      // width:"150px"
    },
    width: "150px",
    color: "#000"
  },
  Fields: {
    display: "flex", padding: "10px", flexDirection: "row", gap: "10px",

  },
  MFields: {
    display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    "@media (max-width:600px)": {
      flexDirection: "column"
    }
  },
  Black: {
    "& .MuiInputBase-input": {
      color: "#000 !important"
    },
  },
  blackM: {
    "& .MuiInputBase-input": {
      color: "#fff !important"
    }
  },
}));

const piedata = [
  {
    img: "images/vec1.png",
    color: "#57FFBC",
    titile: "Total Profit",
    text1: "$285.99",
  },
  {
    img: "images/vec2.png",
    color: "#F4AAA4",
    titile: "Total Loss",
    text1: "$285.99",
  },
  {
    img: "images/vec2.png",
    color: "#B695FF",
    titile: "Goals Year",
    text1: "$285.99",
  },
];

const Data = [
  {
    count: "162.9k",
    title: "Total Arbitrage Count",
  },
  {
    count: "4.3k",
    title: "Total Profit",
  },
  {
    count: "2.1k",
    title: "Highest Profit",
  },
  {
    count: "2 USDT",
    title: "Total Loss",
  },
  {
    count: "3",
    title: "Connected Exchange",
  },
];


const DashboardGrid1 = [
  {
    "SubHeader": "Earning",
    "Header": "198k",
    "Decompression": "37.8% this month"
  },
  {
    "SubHeader": "Orders",
    "Header": "2.4k",
    "Decompression": "2% this month"
  },
  {
    "SubHeader": "Balance",
    "Header": "2.4k",
    "Decompression": "2% this month"
  },
  {
    "SubHeader": "Total Sales",
    "Header": "89k",
    "Decompression": "11% this month"
  }
]

export default function DashdoardHome() {
  const classes = useStyles();



  const icons = [MonetizationOnOutlinedIcon, AssignmentOutlinedIcon, AccountBalanceWalletOutlinedIcon, LocalMallOutlinedIcon];
  const colors = ["#deffec", "#e7dbff", "#ccf4fe", "#fdbae1"]; // Define your desired colors
  const sym_colors = ["#0f9f4d", "#8c19c6", "#1c559b", "#b31329"]

  return (
    <Page title="Dashboard">
      <Box className={classes.dashboardBox}>
        <Grid container spacing={3}>
          <Grid item xs={11} >
            <Typography variant="h4" color="#fff">
              Hello Shahrukh 👋,
            </Typography>
          </Grid>
          <Grid item xs={1} sm={6} md={1}></Grid>


        </Grid>
        <Box mt={2.5}>
          {/* <Paper elevation={2} className="mainBox"> */}
          <Grid container spacing={4}>
            {DashboardGrid1.map((Grid1, index) => (
              <Grid item lg={3} xs={12} sm={6} md={3} key={index} style={{}}>
                <Box sx={{}} className={classes.DashboardGridBox1}>
                  <Box style={{ background: colors[index % colors.length], borderRadius: "72%", alignItems: "center", display: "flex", justifyContent: "center", maxWidth: "67px", height: "69px" }}>
                    {React.createElement(icons[index % icons.length], { style: { width: "50%", height: "auto", padding: "10px", color: sym_colors[index % sym_colors.length] } })}
                  </Box>
                  <Box style={{ display: "flex", flexDirection: "column" }}>
                    <Typography style={{ fontSize: "12px", fontFamily: "lexend", fontWeight: "400", color: "gray" }}>{Grid1.SubHeader}</Typography>
                    <Typography style={{ fontSize: "25px", fontFamily: "lexend", fontWeight: "600", color: "#000" }}>${Grid1.Header}</Typography>
                    <Typography style={{ fontSize: "12px", fontFamily: "lexend", fontWeight: "400", color: "#000" }}>{Grid1.Decompression}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          {/* </Paper> */}
        </Box>

        <Box mt={2.5}>
          <Grid container spacing={3} >
            <Grid item xs={12} sm={12} md={6} lg={8}>
              <Paper elevation={2} className="mainBox" style={{ background: "#fff" }} >
                <Box className="displaySpacebetween">

                </Box>

                <div style={{ flex: 1, }}>
                  <div style={{ padding: "10px 12px" }}>
                    <Typography variant='h6' style={{ fontWeight: "600", color: "#000" }}>Overview</Typography>
                    <Typography variant='p' style={{ fontWeight: "400", color: "gray" }}>Monthly Earninig</Typography>
                  </div>
                  <BarChart />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Paper elevation={2} className="mainBox" style={{ background: "#fff", height: "88%" }} align="center">
                <Box>
                  <div style={{ flex: 1 }}>
                    <div style={{ padding: "10px 12px", textAlign: "start" }}>
                      <Typography variant='h6' style={{ fontWeight: "600", color: "#000" }}>Customers </Typography>
                      <Typography variant='p' style={{ fontWeight: "400", color: "gray" }}>Customers that buys products </Typography>
                    </div>
                    <Pie />
                  </div>
                </Box>
              </Paper>
            </Grid>

            <Grid item lg={12} md={12} sm={12} xs={12} style={{ padding: "3% 2% !important", width: "100%", background: "#fff", boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)" }}>
              <div style={{}} className={classes.MFields}>
                <Typography variant="h4" >Product Sell</Typography>
                <div style={{}} className={classes.Fields}>
                  <TextField id="outlined-basic" placeholder="Search" variant="filled" color="#000" className={classes.Black} />
                  <FormControl className={classes.formControlW} variant="filled" >
                    <InputLabel style={{ color: "#000" }} id="demo-simple-select-helper-label">Last 30 Days</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      // value={age}
                      // onChange={handleChange}
                      style={{ color: "black !important" }}
                    >
                      <MenuItem value="" disabled>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem className={classes.blackM} value={20}>Monday</MenuItem>
                      <MenuItem className={classes.blackM} value={30}>Thuesday</MenuItem>
                      <MenuItem className={classes.blackM} value={30}>Wednesday</MenuItem>
                      <MenuItem className={classes.blackM} value={30}>Thursday</MenuItem>
                      <MenuItem className={classes.blackM} value={30}>Friday</MenuItem>
                      <MenuItem className={classes.blackM} value={30}>Saturday</MenuItem>
                      <MenuItem className={classes.blackM} value={10}>Sunday</MenuItem>
                    </Select>

                  </FormControl>
                </div>

              </div>
              <BasicTable />
            </Grid>


          </Grid>
        </Box>
      </Box>
    </Page>
  );
}
