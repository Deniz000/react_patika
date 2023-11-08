import { useState, useEffect } from 'react'
import { Cities } from './listOfCities';
import './style.css'

export default function WeatherComponent() {

    const API_KEY = '512a13264086638f777e39dffb0a5285'

    const [selectedCity, setSelectedCity] = useState(
        localStorage.getItem('selectedCity') || 'Adana');
    const [weekly, setWeekly] = useState([]);

    useEffect(() => {
        async function fetchWeatherData() {
            const path = `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&units=metric&lang=tr&appid=${API_KEY}`
            const response = await fetch(path);
            let data = await response.json();
            const getData = []
            getData.push(data.list[0]) //40 günlük verinin olduğumuz gününü aldık
            getData.push(data.list[7]) //40 günlük verinin olduğumuz gününü aldık
            getData.push(data.list[15]) //40 günlük verinin olduğumuz gününü aldık
            getData.push(data.list[23]) //40 günlük verinin olduğumuz gününü aldık
            getData.push(data.list[31]) //40 günlük verinin olduğumuz gününü aldık
            getData.push(data.list[39]) //40 günlük verinin olduğumuz gününü aldık

            let updatedCityWeather = []
            getData.map(data =>
                updatedCityWeather.push({
                    day: day(new Date(data.dt * 1000).getDay()),
                    temp_max: data.main.temp_max,
                    temp_min: data.main.temp_min,
                    imageSize: data.weather[0].icon,
                    description: data.weather[0].description,
                    date: data.dt_txt
                }),
            )
            setWeekly(updatedCityWeather)
        }

        fetchWeatherData();
        localStorage.setItem('selectedCity', selectedCity);

    }, [selectedCity]);



    const day = (day) => {
        switch (day) {
            case 0:
                return 'Pazar'
            case 1:
                return 'Pazartesi'
            case 2:
                return 'Salı'
            case 3:
                return 'Çarşamba'
            case 4:
                return 'Perşembe'
            case 5:
                return 'Cuma'
            case 6:
                return 'Cumartesi'
        }
    }
    return (
        <div className='weather-app'>
            <div className='entering-city'>
                <span>Şehir: </span>
                <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
                    {Cities.map(city =>
                        <option key={city} value={`${city}`}>{city}</option>
                    )}
                </select>
            </div>
            <div className='dashboard'>
                {weekly.map((daily, i) =>
                    <div key={i} className='card'>
                        <p>{daily.day}</p>
                        <img src={`https://openweathermap.org/img/wn/${daily.imageSize}@2x.png`} />
                        <p>{daily.description}</p>
                        <span>{Math.round(daily.temp_max)}&#176;</span>
                        <span>{Math.round(daily.temp_min)}&#176;</span>
                    </div>
                )
                }
            </div>

        </div >
    )
}
