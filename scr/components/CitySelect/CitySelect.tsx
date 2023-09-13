import React, {memo, useCallback, useState} from 'react';
import {ListRenderItem, Pressable, StyleProp, ViewStyle} from 'react-native';
import useToggle from '../../hooks/useToggle';
import {ICity} from '../../interfaces /ICity';
import ModalInputSelector from '../ModalSelector/ModalInputSelector';
import Input from '../ui/Input';
import {getKeyExtractorIds} from '../../utils/keyExtractor';
import {useCityAutofill} from '../../hooks/useCityAutofill';
import CitySelectItem from './CitySelectItem';

type Props = {
  city?: ICity | null;
  style?: StyleProp<ViewStyle>;
};

const CitySelect: React.FC<Props> = ({city, style}) => {
  const [searchCity, setSearchCity] = useState<string>('');
  const {cities, isLoadingCities} = useCityAutofill(searchCity);
  const {on, toggleOff, toggleOn} = useToggle();

  const onChangeText = useCallback((text: string) => {
    if (text.length >= 2) {
      setSearchCity(text);
    }
  }, []);

  const renderResults: ListRenderItem<ICity> = useCallback(
    ({item}) => {
      return <CitySelectItem item={item} onClose={toggleOff} />;
    },
    [toggleOff]
  );

  return (
    <>
      <Pressable onPress={toggleOn} style={style}>
        <Input value={city?.name || ''} editable={false} placeholder={'City'} pointerEvents={'none'} />
      </Pressable>
      <ModalInputSelector
        visible={on}
        handleClose={toggleOff}
        data={cities}
        renderItem={renderResults}
        keyExtractor={getKeyExtractorIds}
        onChangeText={onChangeText}
        isLoading={isLoadingCities}
      />
    </>
  );
};

export default memo(CitySelect);
