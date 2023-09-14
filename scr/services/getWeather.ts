import {ICity} from '../interfaces /ICity';
import axios from 'axios';

import dayjs from 'dayjs';
import Normalises from '../utils/normalises';

const dateFormat = 'YYYY-MM-DD';

export async function getWeatherSeveralDay(city: ICity) {
  const normalise = new Normalises();
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${
    city.longitude
  }&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,cloudcover,windspeed_10m&start_date=${dayjs()
    .add(1, 'day')
    .format(dateFormat)}&end_date=${dayjs().add(7, 'day').format(dateFormat)}`;
  const response = await axios.get(apiUrl);
  const forecast = normalise.normaliseForecast(response.data.hourly);

  if (forecast) {
    return forecast;
  }
}

export async function getCurrentWeather(city: ICity) {
  const normalise = new Normalises();
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,cloudcover,windspeed_10m,&forecast_days=1`;
  const response = await axios.get(apiUrl);
  const currentWeather = normalise.normaliseWeather(response.data.hourly);

  if (currentWeather) {
    return currentWeather;
  }
}
