import DataTable from "react-data-table-component";
import { customStyles } from "./customStyleTable";
import { Direction } from "react-data-table-component";
import { MdEdit, MdOutlineDeleteForever } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { toFarsiNumber } from "../../utils";
import { useState } from "react";
import { Avatar, Tooltip } from "@material-tailwind/react";

const columns = [
  { name: "عکس", selector: (rwo: any) => rwo.img, grow: 1, center: true },
  {
    name: "نام کاربران",
    selector: (row: any) => row.title,
    grow: 2,
    center: true,
  },
  {
    name: "کدملی",
    selector: (row: any) => toFarsiNumber(row.personalId),
    grow: 2,
    center: true,
  },
  {
    name: "شماره تماس",
    selector: (row: any) => toFarsiNumber(row.phoneNumber),
    grow: 2,
    center: true,
  },

  {
    name: "مدیریت",
    selector: (row: any) => (
      <div className="flex gap-4">
        <Tooltip content="گواهی نامه">
          <div
            className="cursor-pointer text-2xl  hover:text-blue-500"
            onClick={(e) => {
              console.log("certificatied");
            }}
          >
            {row.certificationStory}
          </div>
        </Tooltip>
        <Tooltip content="حذف کاربر">
          <div
            className="cursor-pointer text-2xl  hover:text-blue-500"
            onClick={(e) => {
              console.log("certificatied");
            }}
          >
            {row.deleteUSer}
          </div>
        </Tooltip>
        <Tooltip content="ویرایش">
          <div
            className="cursor-pointer text-2xl  hover:text-blue-500"
            onClick={(e) => {
              console.log("certificatied");
            }}
          >
            {row.editUser}
          </div>
        </Tooltip>
      </div>
    ),
    grow: 1,
    center: true,
  },
];

const data = [
  {
    id: 1,
    img: <Avatar src="" alt="avatar" />,
    title: "مرتضی ابوالفتحی",
    phoneNumber: "09359919333",
    personalId: "4120422771",
    certificationStory: <TbCertificate />,
    deleteUSer: <MdOutlineDeleteForever />,
    editUser: <MdEdit />,
  },
];

function ManageUser() {
  const [deleteModal, setDeleteModal] = useState(false);
  const ModalHandler = () => {
    setDeleteModal(!deleteModal);
    console.log(deleteModal);
  };
  return (
    <div>
      <DataTable
        direction={Direction.RTL}
        customStyles={customStyles("", "", "4px")}
        columns={columns}
        data={data}
        pagination
      />
      {/* {deleteModal? (<DeleteModal/>) : ("")} */}
    </div>
  );
}

export default ManageUser;
