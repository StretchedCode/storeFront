import { BackpackIcon } from "@radix-ui/react-icons"
import { Button } from "./button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu"
import { useNavigate, Link } from "react-router-dom"
import { Skeleton } from "./skeleton"



function Taskbar(){

    const components: { title: string; href: string; description: string }[] = [
        {
          title: "Alert Dialog",
          href: "/docs/primitives/alert-dialog",
          description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
          title: "Hover Card",
          href: "/docs/primitives/hover-card",
          description:
            "For sighted users to preview content available behind a link.",
        },
        {
          title: "Progress",
          href: "/docs/primitives/progress",
          description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
          title: "Scroll-area",
          href: "/docs/primitives/scroll-area",
          description: "Visually or semantically separates content.",
        },
        {
          title: "Tabs",
          href: "/docs/primitives/tabs",
          description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
          title: "Tooltip",
          href: "/docs/primitives/tooltip",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
      ]

      const renderMenu = () =>{
        
        const componentArray: React.ReactElement[] = []

        for (let i = 0; i < 3; i++){
            const component = <div>
                <NavigationMenuLink>
                    <Link to='/shop' className="flex gap-2 gap-x-4 p-2 hover:bg-slate-100 rounded-md">
                        <div className="self-center">
                            <Skeleton className="rounded-full h-12 w-12"></Skeleton>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <div className="text-m font-semibold">{components[i].title}</div>
                            <div className="text-sm">{components[i].description}</div>
                        </div>
                        
                    </Link>
                </NavigationMenuLink>
            </div>
            componentArray.push(component)
        }
        return componentArray
      }

    const navigate = useNavigate()

    return (
        <div className="flex justify-between items-center p-6">
            <Button variant="ghost" className="text-xl hover:bg-white" onClick={() => {navigate("/")}}>Home Bar</Button>
            <div className="flex gap-3">
                <NavigationMenu className="mr-48" orientation="horizontal">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-m">
                                Shop
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="">
                                <div className="grid grid-cols-1 w-[300px] gap-2 p-2">
                                    {renderMenu()}
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