import React, {memo, useMemo} from 'react';
import {ActivityIndicator, FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import Modal, {Direction} from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Input from '../ui/Input';

type Props = {
  visible: boolean;
  handleClose: () => void;
  data?: any[];
  renderItem: ListRenderItem<any>;
  keyExtractor: (item: any) => string;
  onChangeText?: (text: string) => void;
  isLoading?: boolean;
};

const swipeDirection: Direction[] = ['down'];

const ModalInputSelector: React.FC<Props> = ({
  visible,
  isLoading,
  data,
  handleClose,
  keyExtractor,
  onChangeText,
  renderItem,
}) => {
  const insets = useSafeAreaInsets();

  const containerStyle = useMemo(
    () => [styles.container, {flex: 1, paddingBottom: insets.bottom, marginTop: insets.top + 50}],
    [insets.bottom, insets.top]
  );
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={handleClose}
      swipeDirection={swipeDirection}
      onSwipeComplete={handleClose}
      useNativeDriverForBackdrop
      avoidKeyboard
      propagateSwipe={true}
      style={styles.view}>
      <View style={containerStyle}>
        <View style={styles.drag} />
        <View style={styles.content}>
          <Input
            placeholder={'Search'}
            onChangeText={onChangeText}
            style={styles.input}
            autoCorrect={false}
            autoFocus
          />
          {isLoading ? (
            <ActivityIndicator size="small" />
          ) : (
            <FlatList
              style={styles.resultsContainer}
              data={data}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}
              keyboardDismissMode={'on-drag'}
              keyboardShouldPersistTaps={'handled'}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default memo(ModalInputSelector);

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  drag: {
    width: 80,
    height: 4,
    backgroundColor: '#e0e0e0',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 22,
    paddingBottom: 20,
  },
  input: {
    borderWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
  },
  resultsContainer: {
    paddingTop: 6,
  },
  textInfo: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    marginTop: 10,
  },
});
