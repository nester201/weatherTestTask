import axios from 'axios';
import {useEffect, useState} from 'react';
import Normalises from '../utils/normalises';
import {ICity} from '../interfaces /ICity';

export const useCityAutofill = (value: string) => {
  const [cities, setCities] = useState<ICity[]>();
  const [isLoadingCities, setIsLoadingCities] = useState<boolean>(false);

  useEffect(() => {
    setIsLoadingCities(true);
    const normalise = new Normalises();
    const apiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=10&language=ru&format=json`;
    axios
      .get(apiUrl)
      .then(res => normalise.normaliseCityData(res.data.results))
      .then(cities => setCities(cities));
    setIsLoadingCities(false);
  }, [value]);

  return {cities, isLoadingCities};
};
