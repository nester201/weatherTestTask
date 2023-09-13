import {ICity} from '../interfaces /ICity';
import {IWeather} from '../interfaces /IWeather';

interface IWeatherData {
  time: string[];
  temperature_2m: number[];
  precipitation: number[];
  rain: number[];
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
  const precipitation: number[] = weather.precipitation;
  const rain: number[] = weather.rain;
  const cloudcover: number[] = weather.cloudcover;

  const combinedArray: IWeather[] = [];

  for (let i = 0; i < time.length; i++) {
    const weatherObject = {
      time: time[i],
      temperature: temperature[i],
      precipitation: precipitation[i],
      rain: rain[i],
      cloudcover: cloudcover[i],
    };
    combinedArray.push(weatherObject);
  }

  return combinedArray;
}
