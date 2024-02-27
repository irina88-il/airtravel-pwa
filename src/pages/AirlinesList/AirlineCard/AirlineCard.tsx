import "./AirlineCard.sass"
import {Airline} from "../../../utils/types";
import {Link} from "react-router-dom";
import mockImage from "/src/assets/mock.png"

const AirlineCard = ({ airline, isMock }: {airline:Airline, isMock:boolean }) => {

    return (
        <div className="card-wrapper">

            <div className="preview">
                <img src={isMock ? mockImage : airline.image}  alt=""/>
            </div>

            <div className="card-content">

                <div className="content-top">

                    <h3 className="title">{airline.name}</h3>

                </div>

                <div className="content-bottom">

                    <Link to={`/airlines/${airline.id}`}>
                        Подробнее
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default AirlineCard;