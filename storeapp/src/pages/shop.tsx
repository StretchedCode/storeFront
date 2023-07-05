import { processData, productType } from "../database/db"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/card"
import { Button } from "../components/button"
import { Separator } from "../components/separator"
import { useAppDispatch } from "../app/hooks"
import { addProduct } from "../features/shopSlice"
import { Routes, Route } from "react-router-dom"
import { useLocation } from "react-router-dom"

function Shop(){
    const dispatch = useAppDispatch()
    const data = processData()
    const linkState = useLocation().state
    const linkData = linkState === null ? "all" : linkState.type

    const filterCheck = (obj: productType, filterType: string) => {
        console.log('called')
        if (filterType === "all"){
            return true
        } else if (obj.type !== filterType){
            return false
        } else {
            return true
        }
    }

    const renderData = (filterType: 'cpu' | 'gpu' | 'all') => {
        const dataVis: React.ReactElement[] = []
        console.log(filterType)
        const filteredData = data.filter((obj) => filterCheck(obj, filterType))
        console.log(filteredData)
        filteredData.forEach((obj) => {
            const dataCard = <>
            <Card className="flex flex-col justify-center transition ease-in-out delay-50 hover:-translate-y-4 duration-150">
                <CardHeader className="flex justify-center">
                    <CardTitle className="">{obj.name}</CardTitle>
                    <CardDescription>{obj.type}</CardDescription>
                    <Separator></Separator>
                </CardHeader>
                <CardContent className="flex flex-col gap-6 justify-center">
                    <img src={obj.imgSrc} alt={obj.name}></img>
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
                
            </div>

            <div className="flex flex-col col-span-4">
                <div className="shadow-sm py-4"></div>

                <div className="bg-slate-50 grid grid-cols-3 gap-5 p-5 animate-in">
                    <Routes>
                        <Route index element={renderData(linkData)}></Route>
                        <Route path="/processors" element={renderData(linkData)}></Route>
                        <Route path="/gpus" element={renderData(linkData)}></Route>
                    </Routes>
                </div>

            </div>

        </div>
    )
}

export default Shop