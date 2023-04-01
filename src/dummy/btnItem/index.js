import {FaUserPlus, FaUsersCog} from "react-icons/fa"
import {TbCertificate, TbBrandBlogger} from "react-icons/tb"
import {BsChatLeftTextFill, BsFillEaselFill} from "react-icons/bs"
import {BiLibrary} from "react-icons/bi"


export const btnItemPanel = [
    {text:"افزودن کاربر", icon:<FaUserPlus/>, path:"/addUser"},
    {text:"کاربران", icon:<FaUsersCog/>,path:"/manageUser"},
    {text:" پشتیبانی ", icon:<BsChatLeftTextFill/>,path:"/supporterUser"},
    {text:" مدیریت دوره ها ", icon:<BsFillEaselFill/>,path:"/courses"},
    {text:" مدیریت بلاگ و اخبار ", icon:<TbBrandBlogger/>,path:"/blog"},
    {text:" مدیریت کتابخانه ", icon:<BiLibrary/>,path:"/libraryAndLow"}
]