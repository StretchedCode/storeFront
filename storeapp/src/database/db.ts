

import cpuData from "./tableExportCPU.json"
import gpuData from "./tableExportGPU.json"
import cpuImage from "../assets/processorImg.jpeg"
import gpuImage from "../assets/gpuImage.jpg"

// Mock database file for loading shop components

interface product{
    type: 'cpu' | 'gpu';
    name: string,
    price: number,
    id: number,
    imgSrc?: string
}

const processData = () => {
    const data: product[] = []

    for(let i = 1; i <= 6; i++){
        const dataObj:product = {
            type: 'cpu',
            name: (cpuData.data[i].Model).toString(),
            price: 500,
            id: i,
            imgSrc: cpuImage
        }
        data.push(dataObj)
    }

    for(let i = 1; i <= 6; i++){
        const dataObj:product = {
            type: 'gpu',
            name: (gpuData.data[i].Model).toString(),
            price: 500,
            id: i,
            imgSrc: gpuImage
        }
        data.push(dataObj)
    }

    return data
}


export default function seeData(){
    console.log(cpuData)
    console.log(gpuData)
}

export {processData}
export type {product as productType}