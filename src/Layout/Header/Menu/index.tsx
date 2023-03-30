import {
  Navbar,
  Typography,
  Input,
} from "@material-tailwind/react";

import { HiUserCircle } from "react-icons/hi";
export default function Example() {
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center gap-4  text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal flex flex-row-reverse "
        >
          <span>نام و نشان ادمین</span>
          <span className="text-xl px-1.5 opacity-70">
            <HiUserCircle />
          </span>
        </Typography>
        <div className="w-72">
          <Input label="جستجوی کاربر" />
        </div>
      </div>
    </Navbar>
  );
}
