import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {BackHandler, FlatList, SafeAreaView, View} from 'react-native';
import CustomIcon from '../../../CustomIcon';
import NavigationHeader from '../../components/NavigationHeader';
import CardItem from '../../components/CardItem';
import {COLORS, CONSTANTS, SCREEN_NAMES} from '../../constants/Constant';
import styles from './style';
import RippleAnimation from '../../components/RippleAnimation';

const HomeScreen = () => {
  const navigation = useNavigation();
  const catBuddies = useSelector(state => state.data.catBuddies);
  const [expandedIdex, setExpandedIndex] = useState(null);

  const onBack = () => {
    BackHandler.exitApp();

    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener(CONSTANTS.HARDWARE_BACK_PRESS, onBack);

    return () => {
      BackHandler.removeEventListener(CONSTANTS.HARDWARE_BACK_PRESS, onBack);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader isShow={false} title={CONSTANTS.CAT_BUDDIES} />
      <FlatList
        data={catBuddies}
        contentContainerStyle={styles.flatContainer}
        renderItem={({item, index}) => (
          <CardItem
            item={item}
            expandedIdex={expandedIdex}
            index={index}
            setExpandedIndex={setExpandedIndex}
          />
        )}
      />
      <View
        style={styles.addIconButton}
        onStartShouldSetResponder={() => {
          navigation.navigate(SCREEN_NAMES.ADD_OR_EDIT_SCREEN);
        }}>
        <RippleAnimation startValue={60} endValue={80} />
        <CustomIcon name={CONSTANTS.ADD} size={25} color={COLORS.WHITE} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
