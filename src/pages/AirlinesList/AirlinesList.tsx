import "./AirlinesList.sass"
import SearchBar from "../../components/SearchBar/SearchBar";
import React, {useEffect, useState} from "react";
import AirlineCard from "./AirlineCard/AirlineCard";
import {iAirlinesMock, requestTime} from "../../utils/consts";
import {Airline} from "../../utils/types";

const AirlinesList = () => {

    const [Airlines, setAirlines] = useState<Airline[]>([]);

    const [query, setQuery] = useState<string>("");

    const [isMock, setIsMock] = useState<boolean>(false);

    const searchAirlines = async () => {

        try {

            const response = await fetch(`http://127.0.0.1:8000/api/airlines/search?&query=${query}`, {
                method: "GET",
                signal: AbortSignal.timeout(requestTime)
            })

            if (!response.ok){
                createMock();
                return;
            }

            const raw = await response.json()
            const airlines: Airline[] = raw["airlines"]

            setAirlines(airlines)
            setIsMock(false)

        } catch (e) {

            createMock()

        }
    }

    const createMock = () => {

        setIsMock(true);
        setAirlines(iAirlinesMock)

    }

    useEffect(() => {
        searchAirlines()
    }, [])

    const cards = Airlines.map(airline  => (
        <AirlineCard airline={airline} key={airline.id} isMock={isMock}/>
    ))

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchAirlines()
    }

    return (
        <div className="cards-list-wrapper">

            <form className="top" onSubmit={(e) => handleSubmit(e)}>

                <h2>Поиск авиакомпаний</h2>

                <SearchBar query={query} setQuery={setQuery} />

            </form>

            <div className="bottom">

                { cards }

            </div>

        </div>
    )
}

export default AirlinesList;