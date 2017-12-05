import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { compose, withState, withProps, withHandlers } from 'recompose';
import { Text, View, TouchableWithoutFeedback, TouchableHighlight, Animated } from 'react-native';
import Modal from 'react-native-modal';
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

const animatedOpacity = new Animated.Value(1);

const TweetItem = ({
  text,
  createdAt,
  displayName,
  userName,
  avatar,
  addToCollection,
  removeFromCollection,
  showModal,
  setShowModal,
  collections,
  isCollection,
  showOpacity,
  hideOpacity,
}) => (
  <View style={s.container}>
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

        <TouchableWithoutFeedback
          onPress={removeFromCollection}
          onPressIn={showOpacity}
          onPressOut={hideOpacity}
        >
          <Animated.View style={[s.button, { opacity: animatedOpacity }]}>
            <Text style={s.buttonText}>
              {isCollection ? 'Remove from collection' : 'Add to collection'}
            </Text>
            <Entypo
              name='add-to-list'
              size={20}
              hitSlop={8}
              color={colors.black}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>

    <Modal onBackdropPress={() => setShowModal(false)} isVisible={showModal}>
      <View style={s.modalContent}>
        <Text>Choose collection</Text>
        {collections.collectionIds && collections.collectionIds.map(c => (
          <TouchableHighlight key={c} onPress={() => addToCollection(c)}>
            <Text>{collections.collections[c].collectionName}</Text>
          </TouchableHighlight>
        ))}
      </View>
    </Modal>

  </View>
);

TweetItem.propTypes = {
  showModal: T.bool,
  setShowModal: T.func,
  collections: T.object,
  avatar: T.string,
  text: T.string,
  createdAt: T.string,
  displayName: T.string,
  userName: T.string,
  addToCollection: T.func,
  removeFromCollection: T.func,
  isCollection: T.bool,
  showOpacity: T.func,
  hideOpacity: T.func,
};

const mapStateToProps = state => ({
  collections: state.collections,
});

const enhance = compose(
  connect(mapStateToProps),
  withState('showModal', 'setShowModal', false),
  withProps(props => ({
    avatar: props.user.profile_image_url,
    createdAt: moment(new Date(props.created_at)).calendar(null, calendar),
    userName: props.user.name,
    displayName: props.user.screen_name,
    id: props.id,
    addToCollection: props.addToCollection,
    removeFromCollection: props.removeFromCollection,
  })),
  withHandlers({
    addToCollection: props => c => {
      props.addToCollection(props.collections.collections[c].id);

      props.setShowModal(false);
    },
    removeFromCollection: props => () => {
      if (props.removeFromCollection) {
        props.removeFromCollection(props.id);
      } else {
        props.setShowModal(true);
      }
    },
  }),
  withHandlers({
    showOpacity: () => () => {
      Animated.timing(
        animatedOpacity,
        {
          toValue: 0.4,
          duration: 300,
          useNativeDriver: true,
        },
      ).start();
    },
    hideOpacity: () => () => {
      Animated.timing(
        animatedOpacity,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        },
      ).start();
    },
  }),
);

export default enhance(TweetItem);
