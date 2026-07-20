
import'./styles/UserCard.css'
interface UserCardProps{
    occupation?: string,
    name?: string
}

function UserOccupationSection({occupation}:UserCardProps){
    return(
        <p>{occupation}</p>
    )
}
function UserNameSection({name}:UserCardProps){
    return(
    <h2 className='user-card-name'>{name}</h2>
    )
}
function UserCard({name , occupation}:UserCardProps){
    return (
        <div className= "user-card" >
            <UserNameSection name={name}/>
            <UserOccupationSection occupation={occupation}/>
        </div>

    )
}

export { UserCard }