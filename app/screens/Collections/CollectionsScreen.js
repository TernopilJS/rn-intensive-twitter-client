import React from 'react';
import T from 'prop-types';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
} from 'react-native';
import R from 'ramda';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import CollectionItem from '../../components/CollectionItem';
import Separator from '../../components/Separator';
import { headerStyle } from '../../styles';
import { getParamOr } from '../../utils/navHelper';
// import Text from '../../components/Text';
import s from './styles';


const CollectionsScreen = ({
  collections,
  showModal,
  collectionName,
  setCollectionName,
  addCollection,
  toggleShowModal,
  removeCollection,
  navigation,
}) => (
  <View style={s.container}>
    <FlatList
      ListEmptyComponent={(
        <Text style={s.empty}>No collections yet</Text>
      )}
      style={s.container}
      data={collections}
      keyExtractor={R.prop('id')}
      ItemSeparatorComponent={() => (
        <Separator small />
      )}
      ListFooterComponent={collections.length === 0 ? undefined : (
        <Separator withBorderTop withBorderBottom={false} />
      )}
      renderItem={({ item }) => <CollectionItem remove={removeCollection} onPress={() => navigation.navigate('Collection', { collection: item })} {...item} />}
    />

    <Modal
      isVisible={showModal}
      onBackdropPress={toggleShowModal}
    >
      <View style={s.modal}>
        <TextInput
          placeholder='Collection name'
          style={s.input}
          value={collectionName}
          onChangeText={setCollectionName}
        />
        <Button title='Add' onPress={addCollection} />
      </View>

    </Modal>
  </View>
);

CollectionsScreen.propTypes = {
  collections: T.array,
  showModal: T.bool,
  collectionName: T.string,
  setCollectionName: T.func,
  addCollection: T.func,
  toggleShowModal: T.func,
  removeCollection: T.func,
  navigation: T.object,
};

CollectionsScreen.navigationOptions = ({ navigation }) => ({
  title: 'Collections',
  headerLeft: <MaterialIcons
    name='menu'
    size={35}
    onPress={() => navigation.navigate('DrawerOpen')}
  />,
  headerRight: <MaterialCommunityIcons
    name='plus'
    size={35}
    onPress={getParamOr(undefined, 'toggleShowModal')(navigation)}
  />,
  ...headerStyle,
});

export default CollectionsScreen;
