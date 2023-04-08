import DataTable from "react-data-table-component";
import { customStyles } from "./customStyleTable";
import { Direction } from "react-data-table-component";
import { MdEdit, MdOutlineDeleteForever } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { toFarsiNumber } from "../../utils";
import { useState } from "react";
import { Avatar, Tooltip } from "@material-tailwind/react";
import DeleteModal from "../../common/components/ModalDelete";
import EditModal from "../../common/components/ModalEditUser";
import { useDeleteUserMutation, useGetUsersQuery } from "../../services/User";
import { TableColumnBase } from "react-data-table-component/dist/src/DataTable/types";



function ManageUser() {

 
  const {data:users , refetch} = useGetUsersQuery("" );
  const [deleteUser] = useDeleteUserMutation()

  
  
  const columns:any = [
    {name:"نام ", selector: (rwo: any) =><span className="text-[16px]">{rwo.firstName}</span> , center: true },
    {name:"نام خانوادگی", selector: (rwo: any) => <span className="text-[16px] font-bold">{rwo.lastName}</span>, center: true },
    {name:"کد ملی", selector: (rwo: any) =>toFarsiNumber(rwo.nationalCode) , center: true },
    {name:"شماره تماس", selector: (rwo: any) =>  toFarsiNumber(rwo.phoneNumber), center: true },
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
              <TbCertificate/>
            </div>
          </Tooltip>
          <Tooltip content="حذف کاربر">
            <div
              className="cursor-pointer text-2xl  hover:text-blue-500"
              onClick={() => {
                ModalDelete();
                setUserSelect(row)
              }}
            >
              <MdOutlineDeleteForever/>
            </div>
          </Tooltip>
          <Tooltip content="ویرایش">
            <div
              className="cursor-pointer text-2xl  hover:text-blue-500"
              onClick={() => {
                ModalEdit();
                setUserSelect(row)
              }}
            >
              <MdEdit/>
            </div>
          </Tooltip>
        </div>
      ),
      grow: 1,
      center: true,
    },
 
  ]
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [userSelect, setUserSelect]= useState()
 

  const ModalDelete = () => {
    setOpenDeleteModal(!openDeleteModal);
  };
  const ModalEdit = () => {
    setOpenEditModal(!openEditModal);
  };

  
  return (
    <div>
      <DataTable
        direction={Direction.RTL}
        customStyles={customStyles("", "", "4px")}
        columns={columns}
        data={users ?? []  }
        pagination
      />
      {openDeleteModal? <DeleteModal deleteUser={deleteUser} refetch={refetch} userSelect={userSelect}open={openDeleteModal} handleOpen={ModalDelete}/> : ("")}
      {openEditModal? <EditModal userSelect={userSelect}  refetch={refetch} open={openEditModal} handleOpen={ModalEdit}/> : ("")}
    </div>
  );
}

export default ManageUser;
