import { processCPUData } from "../database/db"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/card"
import { Skeleton } from "../components/skeleton"
import { render } from "@testing-library/react"
import { Button } from "../components/button"
import { Separator } from "../components/separator"
import { useAppDispatch } from "../app/hooks"
import { addProduct } from "../features/shopSlice"
import { Routes, Route } from "react-router-dom"

function Shop(){
    const dispatch = useAppDispatch()
    const data = processCPUData()

    const renderCPUData = () => {
        const dataVis: React.ReactElement[] = []

        data.forEach((obj) => {
            const dataCard = <>
            <Card className="flex flex-col justify-center">
                <CardHeader className="flex justify-center">
                    <CardTitle className="">{obj.name}</CardTitle>
                    <CardDescription>{obj.type}</CardDescription>
                    <Separator></Separator>
                </CardHeader>
                <CardContent className="flex flex-col gap-6 justify-center">
                    <img src={obj.imgSrc}></img>
                    <Separator></Separator>
                    <div className="flex justify-between">
                        <div>${obj.price}</div>
                        <Button variant="outline" onClick={() => {dispatch(addProduct(obj))}}>Purchase</Button>
                    </div>
                </CardContent>
            </Card>
            </>

            dataVis.push(dataCard)
        })
        return dataVis
    }

    return(
        <div className="grid grid-cols-5 min-h-[90vh]">
            <div className="cols-span-1">
                Col 1
            </div>

            <div className="flex flex-col col-span-4">
                <div className="shadow-sm py-4"></div>

                <div className="bg-slate-50 grid grid-cols-3 gap-5 p-5">
                    <Routes>
                        <Route path="/processors" element={renderCPUData()}></Route>
                    </Routes>
                </div>

            </div>

        </div>
    )
}

export default Shop