import {ICity} from '../interfaces /ICity';
import {IWeather} from '../interfaces /IWeather';

interface IWeatherData {
  time: string[];
  temperature_2m: number[];
  relativehumidity_2m: number[];
  precipitation_probability: number[];
  windspeed_10m: number[];
  cloudcover: number[];
}

export function normaliseCityData(cities: any[]): ICity[] {
  return cities.map(city => ({
    id: city.id,
    name: city.name,
    country: city.country,
    latitude: city.latitude,
    longitude: city.longitude,
  }));
}

export function normaliseWeather(weather: IWeatherData) {
  const time: string[] = weather.time;
  const temperature: number[] = weather.temperature_2m;
  const relativehumidity: number[] = weather.relativehumidity_2m;
  const precipitation: number[] = weather.precipitation_probability;
  const windspeed: number[] = weather.windspeed_10m;
  const cloudcover: number[] = weather.cloudcover;

  const combinedArray: IWeather[] = [];

  for (let i = 0; i < time.length; i++) {
    const weatherObject = {
      time: time[i],
      temperature: temperature[i],
      relativehumidity: relativehumidity[i],
      precipitation: precipitation[i],
      windspeed_10m: windspeed[i],
      cloudcover: cloudcover[i],
    };
    combinedArray.push(weatherObject);
  }

  return combinedArray;
}
