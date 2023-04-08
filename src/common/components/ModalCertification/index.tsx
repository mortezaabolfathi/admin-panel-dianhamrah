import React from "react";
import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio
} from "@material-tailwind/react";
import { toast } from "react-toastify";


interface DeleteBtn {
  handleOpen: any;
  open: boolean
}
const DeleteModal: React.FC<DeleteBtn> = (props) => {

  return (
    <Fragment>
      <Dialog open={props.open} handler={props.handleOpen}>
        <DialogHeader>بارگذاری گواهی‌نامه کاربر</DialogHeader>
        <DialogBody divider>
          نوع گواهی را برای بارگذاری انتخاب کنید
        </DialogBody>
        <div className="flex gap-10 justify-center h-16">
          <Radio
            id="ripple-on"
            name="type"
            label="نام گواهی اصلی"
            ripple={true}
          />
          <Radio
            id="ripple-off"
            name="type"
            label=" سایر گواهی ها "
            ripple={false}
          />
        </div>
        <DialogFooter>
          <Button variant="gradient" color="blue" onClick={() => {
            props.handleOpen()
          }}>
            <span>تایید </span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

export default DeleteModal