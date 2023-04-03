import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
    Dialog,
  } from "@material-tailwind/react";
import { useMemo } from "react";
import { useLoginAdminMutation } from "../../services/Auth";
import { Spinner } from "../../common/components/spinner";
import { useCookies } from 'react-cookie';


  const SingIn=() => {
    const [
        updatePost, 
        {  isLoading , isSuccess , data }, 
      ] = useLoginAdminMutation()

    const [cookies, setCookie] = useCookies(['token']);
    const handleModal =async (e:any)=>{
        e.preventDefault()
        await updatePost({
            personnelID:+e.target.personnelId.value,
            password:e.target.password.value
        })
    }

    const openModal = useMemo(()=>{
        if(cookies.token) return false
        if(isSuccess){
            setCookie("token" , data)
            return false
        } else {
            return true
        }
    },[isSuccess])
    
    return(
        <>
            <Dialog open={openModal} handler={()=>{}}>
                    <form onSubmit={handleModal} className="max-h-screen h-3/4 flex justify-center items-center">
                    <Card className="w-96  ">
                        <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center text-center"
                        >
                        <Typography variant="h3" color="white">
                            پنل مدیریت سایت دیان‌همراه فردا
                        </Typography>
                        </CardHeader>
                        <CardBody className="flex flex-col gap-4">
                        <Input label="شماره پرسنلی" size="lg" name="personnelId" type="number"/>
                        <Input label="رمزعبور" size="lg" name="password" type="password"/>
                        </CardBody>
                        <CardFooter className="pt-0">
                        <Button variant="gradient" fullWidth type="submit" className="h-12" >
                            {
                                isLoading ? 
                                <div className="flex items-center justify-center">
                                    <Spinner/>
                                </div>
                                :("وارد شوید")
                            }
                        </Button>
                        </CardFooter>
                    </Card>
                    </form>

            </Dialog>


        </>
    )}
  
  export default SingIn