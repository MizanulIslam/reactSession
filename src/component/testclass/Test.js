// import mix from ".../Images/mix.jpg"
let message="";
let age=12;

function testAge(){
    if(age<18)
        message="SORRY YOU ARE NOT ALLOWED..";
    else
        message="WELCOME!!!! for Voting"
    return message;
}

export function Test() {
    let ordertype = "i";
    let imageObject ={
        imagePath : "https://newsinhealth.nih.gov/sites/nihNIH/files/styles/featured_media_breakpoint-large/public/2018/December/illustration-healthy-foods.jpg?itok=WVedeJYT",
        height: 200,
        width: 500,
        message : "food"

    }
    let message =""
    return (
        <>
            <ol type="{ordertype}">
                <li>Veg</li>
                <li>Veg</li>

            </ol>
            <figure>
                <img src={imageObject.imagePath} alt={imageObject.message} height={imageObject.height} width= {imageObject.width}></img>
                <img src={require("../Resources/mix2.jpg")} alt={imageObject.altMessage} height={imageObject.height} width={imageObject.width}></img>
                {/* <img src={mix} alt={imageObject.altMessage} height={imageObject.height} width={imageObject.width}></img> */}
            </figure>
            
            <b>{message}</b>
            <p>{testAge()}</p>
            <i>{ age<18 ? "SORRY YOU ARE NOT ALLOWED.." : "WELCOME!!!! for Voting" }</i>
        </>
    );

}