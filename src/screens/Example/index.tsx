import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Text } from 'react-native';

import { I18n, translate } from '../../lib';
import { typedUseSelector } from '../../store';
import { getExample } from '../../store/ducks/example/actions';

import * as S from './styles';

const ExampleScreen: React.FC = () => {
  const {
    example: { example },
  } = typedUseSelector((state) => state);

  const dispatch = useDispatch();
  const dispatchGetExample = () => dispatch(getExample());

  useEffect(() => {
    dispatchGetExample();
  }, []);

  return (
    <S.Container>
      <Text>{translate('example')}</Text>
      <Text>{example}</Text>
    </S.Container>
  );
};

export default React.memo(ExampleScreen);
