

import cpuData from "./tableExportCPU.json"
import gpuData from "./tableExportGPU.json"
import cpuImage from "../assets/processorImg.jpeg"

// Mock database file for loading shop components

interface product{
    type: 'cpu' | 'gpu';
    name: string,
    price: number,
    id: number,
    imgSrc?: string
}

const processCPUData = () => {
    const processorData: product[] = []

    for(let i = 1; i <= 21; i++){
        const dataObj:product = {
            type: 'cpu',
            name: (cpuData.data[i].Model).toString(),
            price: 500,
            id: i,
            imgSrc: cpuImage
        }
        processorData.push(dataObj)
    }

    return processorData
}


export default function seeData(){
    console.log(cpuData)
    console.log(gpuData)
}

export {processCPUData}
export type {product as productType}