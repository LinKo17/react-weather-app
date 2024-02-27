import NotFound from "../assets/b.png"
function Weather(props) {
    let { result } = props


    return (

        <>
            {Object.keys(result).length > 0 ? //data include or not


                <>
                    {result.cod == 404 // data separate 
                        ?
                        <div className="weather-show-container">
                            <img src={NotFound} alt="" className="not-found-image" />
                        </div>
                        :
                        <div className="weather-show-container">

                            <div className="left-container">
                                <div className="weather-card">
                                    <div className="weather-image">
                                        <img src={`https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`} />
                                    </div>

                                    <div className="weather-situation text-mute">
                                        {result.weather[0].description}
                                    </div>

                                    <h1 className="temp-show">{result.main.temp.toFixed()}°C</h1>

                                    <div className="location-show">{result.name},{result.sys.country}</div>

                                </div>
                            </div>

                            <div className="right-container">

                                <div className="mini-weather-card">
                                    <div className="card-up">

                                        <div className="up-left">
                                            <div>
                                                <div> Feel Like</div>
                                                <div>{result.main.feels_like} °C</div>
                                            </div>
                                            <div>
                                                <div>Pressure</div>
                                                <div>{result.main.pressure}mb</div>
                                            </div>

                                            <div>
                                                <div>Humidity</div>
                                                <div>{result.main.humidity}%</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card-down">

                                        <div className="down-left">
                                            <div>
                                                <div>Wind Speed</div>
                                                <div>{result.wind.speed} mph</div>
                                            </div>
                                            <div>
                                                <div>Cloud</div>
                                                <div>{result.clouds.all} %</div>
                                            </div>
                                            <div>
                                                <div>Rain</div>
                                                <div>{result.rain ? result.rain['1h'] + "mm" : "N/A"}</div>
                                            </div>
                                            <div>
                                                <div>Snow</div>
                                                <div>{result.snow ? result.snow['1h'] + " mm" : "N/A"}</div>
                                            </div>
                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>

                    }
                </>


                :
                <div className="wait-show">
                    <div className="loader"></div>
                </div>
            }
        </>
    )
}
export default Weather;