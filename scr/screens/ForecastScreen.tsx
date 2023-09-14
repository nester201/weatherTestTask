import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCity} from '../redux/city/selectors';
import {getWeatherSeveralDay} from '../services/getWeather';
import BackButton from '../components/ui/BackButton';
import {IWeather} from '../interfaces /IWeather';
import ForecastSlider from '../components/Forecast/ForecastSlider';
import colors from '../theme/colors';
import BackgroundGradient from '../components/ui/BackgroundGradient';

const ForecastScreen = () => {
  const city = useSelector(selectCity.getCity);
  const [forecast, setForecast] = useState<IWeather[][]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (city) {
      setLoading(true);
      const getForecast = async () => {
        const forecast = await getWeatherSeveralDay(city);
        if (forecast) {
          setForecast(forecast);
        }
      };
      getForecast();
      setLoading(false);
    }
  }, [city]);

  return (
    <BackgroundGradient style={styles.container}>
      <BackButton />
      {!loading && forecast ? (
        <ForecastSlider forecast={forecast} />
      ) : (
        <ActivityIndicator color={colors.white} size="large" />
      )}
    </BackgroundGradient>
  );
};

export default ForecastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    gap: 10,
  },
});
