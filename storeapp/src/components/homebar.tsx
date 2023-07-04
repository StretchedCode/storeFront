import { BackpackIcon } from "@radix-ui/react-icons"
import { Button } from "./button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu"



function Taskbar(){
    return (
        <div className="flex justify-between items-center p-6">
            <div className="text-xl">Home Bar</div>
            <div className="flex gap-3">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Shop
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>
                                    Placeholder one
                                </NavigationMenuLink>
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