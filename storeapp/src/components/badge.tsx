
interface badgeProps{
    total: number
}

function Badge(props: badgeProps){

    return (
        <div className="flex m-0 justify-center items-center absolute bottom-[94.5vh] right-[25px] rounded-full bg-red-600 h-5 w-5 text-white text-xs font-semibold motion-safe:animate-bounce">
        
        {props.total}
        
        </div>
    )
}

export default Badge