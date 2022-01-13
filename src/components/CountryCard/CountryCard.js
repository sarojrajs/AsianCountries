import Label from "../Labels/Labels";
import './CountryCard.css'
function CountryCard(props){
    console.log(props.languages)
    const {borders,languages}=props;
    const formattedBorders=borders?borders.join(', ') : "NA"
    const formattedLanguages=Object.values(languages).join(', ')
    return(
        <div className="countryCard">
            <div className="countryCardImage">
                <img src={props.flag} alt=''/>
            </div>
            
            <div className="countryCardDetails">
                <div className="countryCardDetailsTitle">
                    <h1>{props.name}</h1>
                </div>
                <Label label='Capital:' text={props.capital}/>
                <Label label='Region:' text={props.region}/>
                <Label label='SubRegion:' text={props.subRegion}/>
                <Label label='Population:' text={props.population}/>
                <Label label='Borders:' text={formattedBorders}/>
                <Label label='Languages:' text={formattedLanguages}/>
            </div>

        </div>
    )
}

export default CountryCard;