import DataTable from "react-data-table-component";
import { customStyles } from "./customStyleTable";
import { Direction } from "react-data-table-component";
import React,{useEffect, useState} from "react"
import { MdOutlineManageAccounts} from "react-icons/md"

type DataTable = {
    id:number,
    title:string,
    year: string | number
}

const columns = [
  {
    name: "نام کاربران",
    selector: (row: any) => row.title,
  },
  {
    name: "شماره تماس",
    selector: (row: any) => row.phoneNumber,
  },
  {
    name: "وضعیت گواهی",
    selector: (row: any) => row.certificationStory,
  },
  {
    name: "مدیریت کاربر",
    selector: (row: any) => row.manageUser,
  },
];

const data = [
  {
    id: 1,
    title: "مرتضی ابوالفتحی",
    phoneNumber: "09359919333",
    certificationStory : "بارگذاری/عدم بارگذاری",
    manageUser: <MdOutlineManageAccounts/>
  }

];

function ManageUser() {

  return (
    <DataTable
      direction={Direction.RTL}
      customStyles={customStyles}
      columns={columns}
      data={data}
      pagination
    //   noDataComponent="موردی برای نمایش وجود ندارد ؟!"
      />
  );
}

export default ManageUser;
