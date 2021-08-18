import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomIcon from '../../CustomIcon';
import {COLORS, CONSTANTS} from '../constants/Constant';

const NavigationHeader = ({title, isShow}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
      {isShow && (
        <TouchableOpacity
          onPress={() => {
            handleBackPress();
          }}
          style={styles.arrow}>
          <CustomIcon name={CONSTANTS.ARROW} size={20} color={COLORS.WHITE} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: COLORS.PRIMARY,
  },
  headerText: {
    fontSize: 18,
    width: '100%',
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    color: COLORS.WHITE,
  },
  arrow: {
    width: 50,
    marginStart: 10,
    alignSelf: 'center',
  },
});

export default NavigationHeader;
