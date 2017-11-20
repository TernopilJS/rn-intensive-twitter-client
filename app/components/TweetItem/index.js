import React from 'react';
import T from 'prop-types';
import { withProps } from 'recompose';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import moment from 'moment';
import { Entypo } from '@expo/vector-icons';
import Avatar from '../Avatar';
import { colors } from '../../styles';
import s from './styles';

const calendar = {
  sameDay: 'H:mm',
  nextDay: '[Tomorrow]',
  nextWeek: 'dddd',
  lastDay: '1d',
  lastWeek: 'DD/MM/YYYY',
  sameElse: 'DD/MM/YYYY',
};

const TweetItem = ({
  text,
  createdAt,
  displayName,
  userName,
  avatar,
  addToCollection,
}) => (
  <View
    style={s.container}
  >
    <View style={s.left}>
      <Avatar source={avatar} />
    </View>
    <View style={s.right}>
      <View style={s.headingContainer}>
        <Text style={s.heading} numberOfLines={1}>
          <Text style={s.displayName}>
            {displayName}{' '}
          </Text>
          <Text style={s.userName}>
            @{userName}{' - '}
          </Text>
          <Text style={s.date}>
            {createdAt}
          </Text>
        </Text>
      </View>
      <View style={s.textContainer}>
        <Text style={s.tweetText}>
          {text}
        </Text>
      </View>
      <View style={s.buttonsContainer}>
        <TouchableWithoutFeedback onPress={addToCollection}>
          <View style={s.button}>
            <Text style={s.buttonText}>
              Add to collection
            </Text>
            <Entypo
              name='add-to-list'
              size={20}
              hitSlop={8}
              color={colors.black}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  </View>
);

TweetItem.propTypes = {
  avatar: T.string,
  text: T.string,
  createdAt: T.string,
  displayName: T.string,
  userName: T.string,
  addToCollection: T.func,
};

export default withProps(props => ({
  avatar: props.user.profile_image_url,
  createdAt: moment(new Date(props.created_at)).calendar(null, calendar),
  userName: props.user.name,
  displayName: props.user.screen_name,
  addToCollection: () => {},
}))(TweetItem);
