import "./AirlinePage.sass"
import {Dispatch, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {iAirlinesMock, requestTime} from "../../utils/consts";
import {Airline} from "../../utils/types";
import mockImage from "/src/assets/mock.png"

const AirlinePage = ({ selectedAirline, setSelectedAirline }: { selectedAirline:Airline | undefined, setSelectedAirline: Dispatch<Airline| undefined>}) => {

    const { id } = useParams<{id: string}>();

    const [isMock, setIsMock] = useState<boolean>(false);

    useEffect(() => {
        fetchData()
    }, [])

    if (id == undefined){
        return;
    }

    const fetchData = async () => {

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/airlines/${id}`, {
                method: "GET",
                signal: AbortSignal.timeout(requestTime)
            });

            if (!response.ok)
            {
                CreateMock()
                return;
            }

            const service: Airline = await response.json()

            setSelectedAirline(service)

            setIsMock(false)

        } catch
        {
            CreateMock()
        }

    };

    const CreateMock = () => {
        setSelectedAirline(iAirlinesMock.find((service:Airline) => service?.id == parseInt(id)))
        setIsMock(true)
    }

    const img = `http://127.0.0.1:8000/api/airlines/${id}/image/`

    if (selectedAirline == undefined) {
        return (
            <div className="page-details-wrapper">

                <Link className="return-link" to="/">
                    Назад
                </Link>

            </div>
        )
    }

    return (
        <div className="page-details-wrapper">

            <Link className="return-link" to="/">
                Назад
            </Link>

            <div className="left">

                <img src={isMock ? mockImage : img}  alt=""/>

            </div>

            <div className="right">

                <div className="info-container">

                    <h2>{selectedAirline?.name}</h2>

                    <br/>

                    <span>Описаник: {selectedAirline?.description}</span>

                </div>

            </div>

        </div>
    )
}

export default AirlinePage;