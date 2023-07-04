import { BackpackIcon } from "@radix-ui/react-icons"
import { Button } from "./button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu"
import { useNavigate, Link } from "react-router-dom"
import cpuImage from "../assets/cpu.png"



function Taskbar(){

    const navigate = useNavigate()

    return (
        <div className="flex justify-between items-center p-6 shadow-sm">
            <Button variant="ghost" className="text-xl hover:bg-white" onClick={() => {navigate("/")}}>Home Bar</Button>
            <div className="flex gap-3">
                <NavigationMenu className="mr-48" orientation="horizontal">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-m">
                                Shop
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="">
                                <div className="grid grid-cols-1 w-[400px] gap-2 p-2">
                                    <NavigationMenuLink href="/shop/processors" className="flex gap-2 gap-x-4 p-2 hover:bg-slate-100 rounded-md">
                                        <div className="self-center">
                                            <img className="h-16 min-w-[64px]" alt="processor" src={cpuImage}></img>
                                        </div>
                                        
                                        <div className="flex flex-col gap-2">
                                            <div className="text-m font-semibold">Processors</div>
                                            <div className="text-sm">The backbone of any computer, processors manage all of the components and data that passes through your computer.</div>
                                        </div>
                                    </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Button variant="outline">Sign In</Button>
                <Button variant="outline" className="bg-white" size="icon"><BackpackIcon color="black"></BackpackIcon></Button>
            </div>
        </div>
    )
}

export default Taskbar