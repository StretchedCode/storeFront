import { useAppSelector } from "../app/hooks"
import { Button } from "./button"
import { BackpackIcon } from "@radix-ui/react-icons"
import Badge from "./badge"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetDescription } from "./sheet"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"
import { Separator } from "./separator"
import { useDispatch } from "react-redux"
import { removeProduct } from "../features/shopSlice"

function ShoppingCart(){

    const itemCount = useAppSelector(state => state.shop.totalProducts)
    const cart = useAppSelector(state => state.shop.products)
    const dispatch = useDispatch()

    const renderCart = () => {
        const itemArray: React.ReactElement[] = []

        cart.forEach((item) => {
            const itemCard = <div>
                <Card className="flex gap-2 p-4 items-center">
                    <div>
                        <img src={item.imgSrc} alt="" className="max-w-[96px]" />
                    </div>

                    <div className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{item.name}</CardTitle>
                            <CardContent className="flex flex-col">
                                <div className="flex gap-2">
                                    <div>{item.type}</div>
                                    <div>x{item.count}</div>
                                </div>
                                <div>Total Price: ${item.count * item.price}</div>
                                <Button variant="destructive" className="bg-red-600" onClick={() => {dispatch(removeProduct(item))}}>Remove</Button>
                            </CardContent>
                        </CardHeader>
                    </div>
                </Card>
            </div>
            itemArray.push(itemCard)
        })
        return itemArray
    }

    const calcTotal = () => {
        const totalCost = cart.reduce((total: number, currPrice) => {
            return total + (currPrice.count * currPrice.price)
        }, 0)

        return totalCost
    }

    return(
        <>
            <Sheet>
                <SheetTrigger asChild className="flex">
                    <Button variant="outline" className="bg-white" size="icon">
                            <BackpackIcon color="black"></BackpackIcon>
                            {itemCount > 0 ? <Badge total={itemCount}></Badge> : <></>}
                    </Button>
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-2">
                    <SheetHeader>
                        <SheetTitle>Shopping Cart</SheetTitle>
                        <Separator></Separator>
                    </SheetHeader>
                    <SheetDescription className="flex gap-2 flex-col overflow-scroll">
                        {itemCount > 0 ? renderCart() : <div className="self-center text-xl font-bold text-black mt-20">...Nothing to look at here!</div>}
                    </SheetDescription>
                    <Separator></Separator>
                    <SheetFooter className="flex items-center gap-32 py-2 self-start">
                        <div>Total: $ {calcTotal()}</div>
                        <div>
                            <Button variant="default">Checkout</Button>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
            
        </>
    )
}

export default ShoppingCart