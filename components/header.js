import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { signOut, useSession } from "next-auth/client"

function Header() {
    const [session] = useSession();
    return (
        <header className="sticky top-0 z-40 flex items-center px-4 py-2 shadow-md bg-white">
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="h-15 w-15 mr-3 border-0"
            >
                <Icon name="menu" size="2xl" />
            </Button>
            <Icon name="description" size="4xl" color="blue" />
            <h1 className=" ml-2 text-gray-700 text-2xl">Docs</h1>
            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md focus-within:bg-white">
                <Icon name="search" size="2xl" color="gray" />
                <input type="text"
                    placeholder="Search"
                    className="flex-grow px-5 text-base bg-transparent outline-none"
                />
            </div>
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="ml-5 md:ml-20 h-15 w-15 mr-3 border-0"
            >
                <Icon name="apps" size="2xl" color="gray"/>
            </Button>
            <img 
            onClick={signOut}
            loading="lazy"
            className="cursor-pointer h-8 w-8 rounded-full mx-2" 
            src={session?.user?.image}/>
        </header>
    )
}

export default Header
