import "./styles/main.sass"
import "./styles/reset.sass"
import { useState } from 'react'
import Header from "./components/Header/Header";
import {Airline} from "./utils/types";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import AirlinePage from "./pages/AirlinePage/AirlinePage";
import AirlinesList from "./pages/AirlinesList/AirlinesList";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HomePage from "./pages/HomePage/HomePage";

function App() {

    const [selectedAirline, setSelectedAirline] = useState<Airline | undefined>(undefined)

    return (
        <BrowserRouter basename="/airtravel-frontend">

            <div className="App">

                <div className="wrapper">

                    <Header />

                    <div className="content-wrapper">

                        <Breadcrumbs selectedAirline={selectedAirline} setSelectedAirline={setSelectedAirline}/>

                        <Routes>

                            <Route path="/" element={<Navigate to="/home" replace />} />

                            <Route path="/home" element={<HomePage />} />

                            <Route path="/profile" element={<ProfilePage />} />

                            <Route path="/airlines" element={<AirlinesList />} />

                            <Route path="/airlines/:id" element={<AirlinePage selectedAirline={selectedAirline} setSelectedAirline={setSelectedAirline} />} />

                        </Routes>

                    </div>

                </div>

            </div>

        </BrowserRouter>
    )
}

export default App
