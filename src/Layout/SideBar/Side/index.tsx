
import { Navbar, Typography, Button } from "@material-tailwind/react";
import { RxDashboard } from "react-icons/rx";
import { btnItemPanel } from "./../../../dummy"
import { Link } from "react-router-dom";
export default function Example() {
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col h-full items-center gap-6">
      {btnItemPanel.map((itemBtn) => {
        return (
          <Link to={itemBtn.path}   className="w-3/4" >
            <Button
              variant="gradient"
              // variant="text"
              className="w-full	 flex items-center gap-4 text-white"
            >
              {itemBtn.icon}
              {itemBtn.text}
            </Button>
          
          </Link>
        );
      })}
    </ul>
  );

  return (
    <Navbar className="max-h-screen px-0 h-full py-4 bg-gray-900 ">
      <div className="container  h-full w-full  flex flex-col items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          variant="small"
          className=" cursor-pointer p-1 h-20 font-normal flex flex-row justify-center gap-4 text-2xl border-b-2 border-gray-600 shadow-xl	 w-full"
        >
          <span className="font-semibold">پنل مدیریت سایت</span>
          <span className="text-4xl">
            <RxDashboard />
          </span>
        </Typography>
        <div className=" h-3/4 w-full">{navList}</div>
        <Button variant="outlined" size="sm">
          <span>خروج از پنل</span>
        </Button>
      </div>
    </Navbar>
  );
}
