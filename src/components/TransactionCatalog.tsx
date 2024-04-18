"use client";
import React, { useState } from "react";
import { Session } from "next-auth";
import TransactionCard from "./TransactionCard";
import { PaymentJson, PaymentItem } from "interface";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function TransactionCatalog({
  transactionJson,
  session,
  role,
}: {
  transactionJson: PaymentJson;
  session: Session;
  role: string;
}) {
  const transactionJsonReady = transactionJson;

  const [statusFilter, setStatusFilter] = useState("Default");
  const statusList = ["Default", "PENDING", "REJECTED", "COMPLETE"];

  //For mui drop down list
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setStatusFilter(statusList[index]);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <main className="text-center">
      {session?.user.role === "admin" ? (
        <div className="text-4xl font-bold m-10 text-left">
          User Transaction
        </div>
      ) : session?.user.role === "user" ? (
        <div className="text-4xl font-bold m-10 text-left">My Booking</div>
      ) : null}
      <div className="rounded-b-[50px] items-center justify-center">
        <div className="flex flex-row bg-cadetblue text-xl h-20 items-center rounded-t-[50px] font-semibold">
          <div className="w-1/5">User</div>
          <div className="w-1/5">Campground</div>
          <div className="w-1/5">Date</div>
          <div className="w-1/5">
              <List component="nav" aria-label="Transaction Status">
              
              <ListItemText primary="Transaction Status" className="text-xl items-center font-semibold "/>
                <ListItemButton
                  id="lock-button"
                  aria-haspopup="listbox"
                  aria-controls="lock-menu"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClickListItem}
                ></ListItemButton>
                
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
                {statusList.map((statusList, index) => (
                  <MenuItem
                    key={statusList}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    {statusList}
                  </MenuItem>
                ))}
              </Menu>
              <KeyboardArrowDownIcon />
          </div>
          <div className="w-1/5"></div>
        </div>
        {/*.filter((transactionItem:PaymentItem) => transactionItem.status === "REJECTED")*/}
        {transactionJsonReady.data.map((transactionItem: PaymentItem) =>
          transactionItem.status === statusFilter ||
          statusFilter === "Default" ? (
            <TransactionCard
              key={transactionItem._id}
              tid={transactionItem._id}
              user={transactionItem.user.name}
              campground={transactionItem.campground}
              date={new Date(transactionItem.rent_date)}
              status={transactionItem.status}
              submitImage={transactionItem.submitted_slip_images}
              role={role}
            />
          ) : null
        )}
      </div>
    </main>
  );
}
