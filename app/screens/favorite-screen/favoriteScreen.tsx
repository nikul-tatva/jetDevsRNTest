import * as React from 'react';
import {Image, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';

import {colors} from '../../utils/theme';
import {styles} from './styles';
import { Icon } from '@rneui/themed';
import { horizontalScale } from '../../utils/scaling';
import { removeFromFavorite } from '../../redux-store/manage-favorites/favorite.actions';
import { userItem } from '../../redux-store/manage-favorites/root-reducer';

interface FavoriteProps {
    item: userItem,
    removeFromFavorite: (e: userItem) => void
}

const FavoriteScreen = ({}) => {
  const favData = useSelector((state: any) => state.favoriteItems);
  const dispatch = useDispatch();

  const removeFromFav = (item: userItem) => {
    dispatch(removeFromFavorite(item));
  };

  const renderItem = (item: userItem) => {
    return <FavoriteUser item={item} removeFromFavorite={removeFromFav} />;
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.listView}>
        <FlatList
          data={favData}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  );
};

const renderSeparator = () => <View style={styles.separator} />;

const FavoriteUser = (props: FavoriteProps) => {
  return (
    <View style={styles.UserWrapper}>
      <View style={styles.ImageWrapper}>
        <Image
          style={styles.imageCircle}
          source={{
            uri: props.item?.picture?.medium,
          }}
        />
      </View>
      <View style={styles.DetailsWrapper}>
        <Text
          style={styles.title}>{`${props.item.name?.first} ${props.item.name?.last}`}</Text>
      </View>
      <View style={styles.favoriteWrapper}>
        <TouchableOpacity
          onPress={() => {
            props.removeFromFavorite(props.item);
          }}>
          <Icon
            name="star-fill"
            type="octicon"
            color={colors.primary}
            size={horizontalScale(24)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavoriteScreen;