import React from "react";
import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 

interface DeleteBtn {
  open:boolean,
  handleOpen:any
}
const DeleteModal:React.FC<DeleteBtn> = (props) => {

  return (
    <Fragment>
      <Dialog open={props.open} handler={props.handleOpen}>
        <DialogHeader>حذف کاربر</DialogHeader>
        <DialogBody divider>
            آیا از حذف کاربر با نام و نشان فلان مطمئن هستید؟
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="blue"
            onClick={props.handleOpen}
            className="ml-1"
          >
            <span>خیر</span>
          </Button>
          <Button variant="gradient" color="red" onClick={()=>props.handleOpen}>
            <span>بله</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

export default DeleteModal