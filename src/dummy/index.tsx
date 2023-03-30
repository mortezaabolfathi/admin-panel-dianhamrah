//icons
import path from "path"
import {FaUserPlus, FaUsersCog} from "react-icons/fa"
import {TbCertificate} from "react-icons/tb"
import {BsChatLeftTextFill} from "react-icons/bs"


export const btnItemPanel = [
    {text:"افزودن کاربر", icon:<FaUserPlus/>, path:"/addUser"},
    {text:"کاربران", icon:<FaUsersCog/>,path:"/manageUser"},
    {text:"گواهی نامه ", icon:<TbCertificate/>,path:"/addCertification"},
    {text:" پشتیبانی ", icon:<BsChatLeftTextFill/>,path:"/supporterUser"}
]