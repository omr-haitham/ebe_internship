interface AboutProps{ name?:string}

export function AboutPage({name}:AboutProps){
    return(
        <div>
            Hello {name}! this is where you can learn more about Task Tracker and the engineers behind it.
        </div>
    )   
}