export function Header({user}){
    return(
        <div className="header">
            <img src={user?.picture?.medium} alt="" />
            <h4>{user?.name?.first} {user?.name?.last}</h4>
        </div>
    );
}