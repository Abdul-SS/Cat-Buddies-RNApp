import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {removeCats} from '../redux/actions/actions';
import {CONSTANTS, SCREEN_NAMES, COLORS} from '../constants/Constant';
import CustomIcon from '../../CustomIcon';
import catProfile from '../assets/Cat.jpeg';

const CardItem = ({item, expandedIdex, index, setExpandedIndex}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const deleteItem = item => {
    dispatch(removeCats(item));
  };

  const handleOnExpandCollabse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setExpandedIndex(expandedIdex === index ? null : index);
  };

  const deletePopup = () => {
    Alert.alert(
      'Are you Sure ?',
      'You want to remove this cat detail',
      [
        {
          text: 'CANCEL',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'YES', onPress: () => deleteItem(item)},
      ],
      {
        cancelable: true,
      },
    );
  };

  const renderImageContainer = () => {
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SCREEN_NAMES.ADD_OR_EDIT_SCREEN, {item: item});
          }}>
          <CustomIcon
            name={CONSTANTS.EDIT}
            color={COLORS.PRIMARY}
            size={18}
            style={styles.edit}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={deletePopup}>
          <CustomIcon
            name={CONSTANTS.DELETE}
            color={COLORS.RED}
            size={18}
            style={styles.delete}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderTextContainer = ({title, description}) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.headertitle}>{`${title} - `}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={[styles.container, {height: expandedIdex === index ? 'auto' : 95}]}
      onPress={handleOnExpandCollabse}>
      <View style={styles.flexContainer}>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImageStyles} source={catProfile} />
          {expandedIdex !== index && (
            <View style={styles.weightContainer}>
              <Text numberOfLines={1} style={styles.weightTextStyles}>
                {`${item?.weight} Kg`}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.containerText}>
          <Text style={styles.title}>{item.name} </Text>
          {renderTextContainer({
            title: CONSTANTS.BREED,
            description: item.breed,
          })}
          <Text
            style={[
              styles.description,
              {color: expandedIdex === index ? COLORS.PRIMARY : COLORS.GRAY},
            ]}
            numberOfLines={2}>
            {expandedIdex !== index
              ? item.description
              : `${item?.weight} ${CONSTANTS.KG}`}
          </Text>
        </View>
        {renderImageContainer()}
      </View>
      {expandedIdex === index && (
        <Text
          style={[
            styles.description,
            {paddingLeft: expandedIdex === index ? 5 : 0},
          ]}
          numberOfLines={expandedIdex === index ? null : 2}>
          {item.description}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
    elevation: 2,
    height: 90,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
  containerText: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 5,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  headertitle: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
  description: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.GRAY,
    justifyContent: 'center',
  },
  photo: {
    height: 50,
    width: 50,
  },
  delete: {
    height: 20,
    width: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  edit: {
    height: 20,
    width: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  imageContainer: {
    flexDirection: 'column',
    margin: 5,
  },
  profileImageStyles: {
    height: 55,
    width: 55,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
  },
  flexContainer: {flexDirection: 'row', flex: 1, justifyContent: 'center'},
  profileImageContainer: {width: 60, alignItems: 'center'},
  weightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
    width: '80%',
    borderRadius: 3,
    padding: 2,
    position: 'absolute',
    top: 48,
  },
  weightTextStyles: {fontSize: 10, fontWeight: 'bold', color: COLORS.WHITE},
});
