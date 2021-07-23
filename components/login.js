import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import Image from "@material-tailwind/react/Image"
import { signIn } from "next-auth/client"

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Image
                src="https://links.papareact.com/1ui"
                height="200"
                width="380"
                objectfir="contain"
            />
            <Button className="w-44 mt-10"
                color="blue"
                buttonType="filled"
                ripple="light"
                onClick={signIn}
                >
                    SignIn
            </Button>
        </div>
    )
}

export default Login
