import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {COLORS} from '../constants/Constant';

const RippleAnimation = ({startValue = 60, endValue = 80, duration = 1000}) => {
  const heightWidthFirstCircle = useRef(new Animated.Value(startValue)).current;
  const heightWidthSecondCircle = useRef(
    new Animated.Value(startValue),
  ).current;
  const borderRadiusFirst = useRef(new Animated.Value(startValue / 2)).current;
  const borderRadiusSecond = useRef(new Animated.Value(startValue / 2)).current;
  const opacityFirstCircle = useRef(new Animated.Value(1)).current;
  const opacitySecondCircle = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    rippleAnimation();
  }, []);

  const rippleAnimation = () => {
    Animated.loop(
      Animated.stagger(600, [
        Animated.parallel([
          Animated.timing(heightWidthFirstCircle, {
            toValue: endValue,
            duration: duration,
            useNativeDriver: false,
          }),
          Animated.timing(opacityFirstCircle, {
            toValue: 0.5,
            duration: duration + 1500,
            useNativeDriver: false,
          }),
          Animated.timing(borderRadiusFirst, {
            toValue: endValue / 2,
            duration: duration,
            useNativeDriver: false,
          }),
        ]),
        Animated.parallel([
          Animated.timing(heightWidthSecondCircle, {
            toValue: endValue,
            duration: duration,
            useNativeDriver: false,
          }),
          Animated.timing(opacitySecondCircle, {
            toValue: 1,
            duration: duration + 1500,
            useNativeDriver: false,
          }),
          Animated.timing(borderRadiusSecond, {
            toValue: endValue / 2,
            duration: duration,
            useNativeDriver: false,
          }),
        ]),
      ]),
    ).start();
  };

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          backgroundColor: COLORS.PRIMARY_THREE_A,
          borderRadius: borderRadiusFirst,
          opacity: opacityFirstCircle,
          width: heightWidthFirstCircle,
          height: heightWidthFirstCircle,
        }}
      />
      <Animated.View
        style={{
          position: 'absolute',
          backgroundColor: COLORS.PRIMARY_ONE_A,
          borderRadius: borderRadiusSecond,
          opacity: opacitySecondCircle,
          height: heightWidthSecondCircle,
          width: heightWidthSecondCircle,
        }}
      />
    </>
  );
};

export default RippleAnimation;
