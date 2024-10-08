export function Main({picture, name , email , location , gender ,dob}){
    return(
        <div className="cardWrapper">
            <div className="cardMain">
                <div className="cardHeader">
                    <img src={picture?.large} alt={name?.first} />
                    <h1>{name?.first} {name?.last}</h1>
                </div>
                <div className="cardBottom">
                    <h3>{email}</h3>
                    <h5> <span>Country:</span> {location?.country} || <span>State:</span> {location?.state}</h5>
                    <h5><span>Gender:</span> {gender}</h5>
                    <h5><span>Born In:</span> {new Date(dob?.date).toLocaleDateString()}</h5>
                </div>
            </div>
            
        </div>
    );
}