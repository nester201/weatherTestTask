import {ICity} from '../interfaces /ICity';
import axios from 'axios';
import {normaliseWeather} from '../utils/normalises';
import dayjs from 'dayjs';

const dateFormat = 'YYYY-MM-DD';

export async function getWeatherSeveralDay(city: ICity) {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${
    city.longitude
  }&hourly=temperature_2m,precipitation_probability,windspeed_10m,cloudcover&start_date=${dayjs().format(
    dateFormat
  )}&end_date=${dayjs().add(7, 'day').format(dateFormat)}`;
  const response = await axios.get(apiUrl);
  const weather = normaliseWeather(response.data.hourly);

  if (weather) {
    return weather;
  }
}

export async function getCurrentWeather(city: ICity) {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,cloudcover,windspeed_10m,&forecast_days=1`;
  const response = await axios.get(apiUrl);
  const currentWeather = normaliseWeather(response.data.hourly);

  if (currentWeather) {
    return currentWeather;
  }
}
