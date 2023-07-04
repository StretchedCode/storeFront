

function Shop(){

    return(
        <div className="grid grid-cols-5 min-h-[90vh]">
            <div className="cols-span-1">
                Col 1
            </div>

            <div className="flex flex-col col-span-4">
                <div className="shadow-md">
                    Top of Col 2
                </div>

                <div className="bg-slate-50">Col 2</div>

            </div>

        </div>
    )
}

export default Shop