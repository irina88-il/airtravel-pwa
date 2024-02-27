import "./Breadcrumbs.sass"
import { Link, useLocation } from "react-router-dom";
import { IoIosAirplane } from "react-icons/io";
import {Airline} from "../../Types";
import {Dispatch} from "react";
import { FaPlaneDeparture } from "react-icons/fa";

const Breadcrumbs = ({ selectedAirline, setSelectedAirline }: { selectedAirline: Airline| undefined, setSelectedAirline: Dispatch<Airline | undefined> }) => {

    const location = useLocation()

    let currentLink = ''

    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => {

        currentLink += `/${crumb}`

        if (crumb == "")
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink} onClick={() => setSelectedAirline(undefined)}>
                        Авиакомпании
                    </Link>

                    <IoIosAirplane className={"chevron-icon"}/>

                </div>
            )
        }

        if (currentLink.match(new RegExp('airlines/(d*)')))
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink}>
                        { selectedAirline?.name }
                    </Link>

                    <IoIosAirplane className={"chevron-icon"}/>

                </div>
            )
        }
    });

    return (
        <div className="breadcrumbs-wrapper">
            <div className="breadcrumbs">

                <div className="crumb">

                    <Link to={"/"}>
                        <FaPlaneDeparture className="home-icon" />
                    </Link>

                    <IoIosAirplane className="chevron-icon" />

                    <div className={"crumb"}>

                        <Link to={currentLink} onClick={() => setSelectedAirline(undefined)}>
                            Авиакомпании
                        </Link>

                        <IoIosAirplane className={"chevron-icon"}/>

                    </div>

                </div>

                {crumbs}

            </div>
        </div>
    )
}

export default Breadcrumbs;