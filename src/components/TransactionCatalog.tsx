"use client";
import Link from "next/link";
import React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, alpha } from "@mui/material/styles";
import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["Default", "Rejected", "Pending", "Completed"];

export default function TransactionCatalog() {
  //THIS IS MOCK INTERFACE
  interface MyObject {
    property1: string;
    property2: number;
    property3: boolean;
    property4: string[];
    property5: Date;
  }

  // *THIS IS MOCK DATA* Generate an array of objects
  const arrayOfObjects: MyObject[] = [
    {
      property1: "value1",
      property2: 42,
      property3: true,
      property4: ["array", "of", "strings"],
      property5: new Date(),
    },
    {
      property1: "anotherValue",
      property2: 123,
      property3: false,
      property4: ["more", "strings", "here"],
      property5: new Date(),
    },
    {
      property1: "Korn",
      property2: 123,
      property3: false,
      property4: ["more", "strings", "here"],
      property5: new Date(),
    },
    // Add more objects as needed...
  ];

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <main className="text-center">
      <div className="text-4xl font-bold m-10 text-left">User Transaction</div>
      <div className="rounded-b-[50px] shadow-lg">
        <div className="flex grid grid-cols-5 bg-cadetblue text-xl h-20 items-center justify-center rounded-t-[50px]  font-semibold">
          <div className="">User</div>
          <div className="">Campground</div>
          <div className="">Date</div>
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ bgcolor: "background.paper" }}
            >
              <ListItemButton
                id="lock-button"
                aria-haspopup="listbox"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText primary={options[selectedIndex]} />
              </ListItemButton>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
        <div className=""></div>
      </div>

      {arrayOfObjects.map((obj) => (
        <div
          key={obj.property1}
          className=" grid grid-cols-5 flex rounded-b-[50px] p-5 items-center justify-center text-lg"
        >
          <div className="">Property 1: {obj.property1}</div>
          <div className="">Property 2: {obj.property2}</div>
          <div className="">Property 3: {obj.property3.toString()}</div>
          {obj.property1 === "value1" ? (
            <div className=" grid grid-cols-2">
              <div className="rounded-[100%] bg-red-600 p-1 w-5 h-5 ml-20"></div>
              <div className="text-start text-red-600">{obj.property1}</div>
            </div>
          ) : obj.property1 === "anotherValue" ? (
            <div className="flex grid grid-cols-2 items-center justify-center">
              <div className="rounded-[100%] bg-green-600 p-1 w-5 h-5 ml-20"></div>
              <div className="text-start text-green-600">{obj.property1}</div>
            </div>
          ) : (
            <div className="flex grid grid-cols-2 items-center justify-center">
              <div className="rounded-[100%] bg-customGray p-1 w-5 h-5 ml-20"></div>
              <div className="text-start text-customGray">{obj.property1}</div>
            </div>
          )}
          <div className="">
            <Link href={`/transaction/${obj._id}`}>
              <button className="bg-white border-[2px] border-fern px-8 py-1 mr-10 text-fern font-medium rounded-full hover:bg-fern hover:text-white">
                Detail
              </button>
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}
