import {ICity} from '../interfaces /ICity';
import axios from 'axios';
import {normaliseWeather} from '../utils/normalises';
import dayjs from 'dayjs';

const dateFormat = 'YYYY-MM-DD';

export async function getWeather(city: ICity) {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${
    city.longitude
  }&hourly=temperature_2m,precipitation,rain,cloudcover&start_date=${dayjs().format(dateFormat)}&end_date=${dayjs()
    .add(7, 'day')
    .format(dateFormat)}`;
  const response = await axios.get(apiUrl);
  const weather = normaliseWeather(response.data.hourly);

  if (weather) {
    return weather;
  }
}
