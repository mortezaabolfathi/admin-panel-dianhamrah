import DataTable from "react-data-table-component";
import { customStyles } from "./customStyleTable";
import { Direction } from "react-data-table-component";
import { MdEdit, MdOutlineDeleteForever} from "react-icons/md"
import {TbCertificate} from "react-icons/tb"
import { toFarsiNumber } from "../../../utils";


const columns = [
  {
    name: "نام کاربران",
    selector: (row: any) => row.title,
  },
  {
    name: "شماره تماس",
    selector: (row: any) => toFarsiNumber(row.phoneNumber),
  },
  {
    name: "وضعیت گواهی",
    selector: (row: any) => row.certificationStory,
  },
  {
    name: "حذف کاربر",
    selector: (row: any) => row.deleteUSer,
  },
  {
    name: "ویرایش کاربر",
    selector: (row: any) => row.editUser,
  }
];

const data = [
  {
    id: 1,
    title: "مرتضی ابوالفتحی",
    phoneNumber: "09359919333",
    certificationStory : <TbCertificate/>,
    deleteUSer: <MdOutlineDeleteForever/>,
    editUser: <MdEdit/>
  }

];

function ManageUser() {

  return (
    <DataTable
      direction={Direction.RTL}
      customStyles={customStyles("","","4px")}
      columns={columns}
      data={data}
      pagination
    //   noDataComponent="موردی برای نمایش وجود ندارد ؟!"
      />
  );
}

export default ManageUser;
