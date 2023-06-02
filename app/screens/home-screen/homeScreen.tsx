import React, {useEffect, useState} from 'react';
import {View, RefreshControl, ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import { addToFavorite, removeFromFavorite } from '../../redux-store/manage-favorites/favorite.actions';
import { userItem } from '../../redux-store/manage-favorites/root-reducer';
import ListItem from '../../components/UserListItem';

const HomeScreen = ({}) => {
  const favoriteReducerData = useSelector((state:any) => state.favoriteItems);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setuserData] = useState<userItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const addToFav = (item: any) => {
    dispatch(addToFavorite(item))
  };
  const removeFromFav = (item: any) => {
    dispatch(removeFromFavorite(item))
  };

  const getUserData = async (isRefresh: boolean, pageNumber: number) => {
    isRefresh ? setRefreshing(true) : setIsLoading(true);
    fetch(`https://randomuser.me/api/?results=10&page=${currentPage}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        setuserData(
          pageNumber === 1
            ? responseJson.results
            : [...userData, ...responseJson.results],
        );
      })
      .catch(error => {
        console.log('Error: ' + error);
      });
      isRefresh ? setRefreshing(false) : setIsLoading(false);
  };
  const LoadMoreRandomData = () => {
    setIsLoading(true);
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUserData(false, currentPage);
  }, [currentPage]);

  const renderItem = (item: userItem) => {
    return (
      <ListItem
        item={item}
        addTofavorite={addToFav}
        removeFromFavorite={removeFromFav}
        isFavorite={favoriteReducerData?.includes(item)}
      />
    );
  };
  const renderFooter = () => (
    <View style={styles.footerText}>{isLoading && <ActivityIndicator />}</View>
  );

  return (
    <View style={styles.mainView}>
      <View style={styles.listView}>
        <FlatList
          data={userData}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.email}
          onEndReachedThreshold={0.5}
          onEndReached={LoadMoreRandomData}
          refreshControl={
            <RefreshControl 
                refreshing={refreshing} 
                onRefresh={() => {
                    setCurrentPage(1)
                    getUserData(false, 1)
                }} 
            />
          }
          ListFooterComponent={renderFooter}
        />
      </View>
    </View>
  );
};

export default HomeScreen;