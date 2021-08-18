import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  SafeAreaView,
  Platform,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {addCats, editCats} from '../../redux/actions/actions';
import NavigationHeader from '../../components/NavigationHeader';
import {validateText} from '../../utils/Utils';
import styles from './style';
import {COLORS, CONSTANTS} from '../../constants/Constant';

const AddOrEditScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const item = route.params?.item ?? {
    id: null,
    name: '',
    description: '',
    breed: '',
    weight: '',
  };
  const catBuddies = useSelector(state => state.data.catBuddies);
  const [name, setName] = useState(item.name);
  const [invalidName, setInvalidName] = useState(false);
  const [description, setDescription] = useState(item.description);
  const [invalidWeight, setInvalidWeight] = useState(false);
  const [breed, setBreed] = useState(item.breed);
  const [weight, setWeight] = useState(item?.weight);
  const [invalidBreed, setInvalidBreed] = useState(false);

  const onBack = () => {
    navigation.goBack();

    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener(CONSTANTS.HARDWARE_BACK_PRESS, onBack);

    return () => {
      BackHandler.removeEventListener(CONSTANTS.HARDWARE_BACK_PRESS, onBack);
    };
  }, []);

  const ConfirmButton = () => (
    <TouchableOpacity
      style={styles.confirmButton}
      onPress={() => {
        submitData();
      }}>
      <Text style={styles.confirmButtonText}>{CONSTANTS.SAVE}</Text>
    </TouchableOpacity>
  );

  const submitData = () => {
    if (validateText(name) && validateText(weight) && validateText(breed)) {
      let id = 1;

      if (item.id == null) {
        if (catBuddies && catBuddies.length > 0) {
          id = catBuddies[catBuddies.length - 1].id + 1;
        }
      } else {
        id = item.id;
      }

      const data = {
        id: id,
        name: name.trim(),
        description: description.trim(),
        breed: breed.trim(),
        weight: weight,
      };

      if (item.id == null) {
        dispatch(addCats(data));
      } else {
        dispatch(editCats(data));
      }
      navigation.goBack();
    } else {
      setInvalidName(!validateText(name));
      setInvalidBreed(!validateText(breed));
      setInvalidWeight(!validateText(weight, true));
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavigationHeader
        isShow={true}
        title={item.id == null ? CONSTANTS.ADD_DETAIL : CONSTANTS.EDIT_DETAIL}
      />
      <KeyboardAvoidingView
        enabled={true}
        style={styles.keyboardContainer}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView
          keyboardShouldPersistTaps={CONSTANTS.KEYBOARD_TAP_HANDLED}
          contentContainerStyle={styles.scrollContainer}>
          <View style={styles.viewContainer}>
            <View style={styles.textInputContainerStyle}>
              <TextInput
                style={[
                  styles.textInputStyles,
                  {borderColor: invalidName ? COLORS.RED : COLORS.GRAY},
                ]}
                placeholder={CONSTANTS.ENTER_PET_NAME}
                keyboardType={CONSTANTS.KEYBOARD_DEFAULT}
                blurOnSubmit={false}
                onChangeText={text => {
                  setName(text);
                }}
                value={name}
                onEndEditing={() => {
                  setInvalidName(!validateText(name));
                }}
                returnKeyType={CONSTANTS.KEYBOARD_RTNEXT}
              />
              {Boolean(invalidName) && (
                <Text style={styles.invalidTextStyle}>
                  {CONSTANTS.INVALID_NAME}
                </Text>
              )}
            </View>

            <View style={styles.textInputContainerStyle}>
              <TextInput
                style={[
                  styles.textInputStyles,
                  {borderColor: invalidBreed ? COLORS.RED : COLORS.GRAY},
                ]}
                placeholder={CONSTANTS.ENTER_BREED_NAME}
                value={breed}
                keyboardType={CONSTANTS.KEYBOARD_DEFAULT}
                blurOnSubmit={false}
                onChangeText={text => {
                  setBreed(text);
                }}
                onEndEditing={() => {
                  setInvalidBreed(!validateText(breed));
                }}
                returnKeyType={CONSTANTS.KEYBOARD_RTNEXT}
              />
              {Boolean(invalidBreed) && (
                <Text style={styles.invalidTextStyle}>
                  {CONSTANTS.INVALID_BREED}
                </Text>
              )}
            </View>

            <View style={styles.textInputContainerStyle}>
              <TextInput
                style={[
                  styles.textInputStyles,
                  {borderColor: invalidWeight ? COLORS.RED : COLORS.GRAY},
                ]}
                placeholder={CONSTANTS.ENTER_WEIGHT_IN_KG}
                value={weight}
                keyboardType={CONSTANTS.NUMERIC_KEYBOARD}
                blurOnSubmit={false}
                onChangeText={text => {
                  if (
                    !text.includes(' ') &&
                    text.indexOf('.') === text.lastIndexOf('.')
                  ) {
                    setWeight(text);
                  }
                }}
                onEndEditing={() => {
                  setInvalidWeight(!validateText(weight, true));
                }}
                returnKeyType={CONSTANTS.KEYBOARD_RTNEXT}
              />
              {Boolean(invalidWeight) && (
                <Text style={styles.invalidTextStyle}>
                  {CONSTANTS.INVALID_WEIGHT}
                </Text>
              )}
            </View>
            <View style={styles.textInputContainerStyle}>
              <TextInput
                style={[styles.textInputStyles, {minHeight: 150}]}
                placeholder={CONSTANTS.ENTER_DESCRIPTION}
                keyboardType={CONSTANTS.KEYBOARD_DEFAULT}
                blurOnSubmit={false}
                onChangeText={text => {
                  setDescription(text);
                }}
                multiline
                returnKeyType={CONSTANTS.KEYBOARD_RTNEXT}
                value={description}
              />
            </View>
            <ConfirmButton />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddOrEditScreen;
