/* eslint-disable */
import React from 'react';
import {FlatList, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Gist from './Gist';

const GistList = ({
  gists,
  onFetchNewGists,
  onRefreshList,
  refreshing,
  avatarShow,
}) => {
  const renderItem = ({item}) => {
    const filename = Object.keys(item.files)[0];
    return (
      <TouchableOpacity onPress={() => avatarShow(item.owner.avatar_url)}>
        <Gist url={item.owner.avatar_url} text={filename} />
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: '#C8C7CC',
        }}
      />
    );
  };

  const ListHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>Gists</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={gists}
      keyExtractor={(item, index) => index}
      onEndReached={onFetchNewGists}
      ListHeaderComponent={ListHeader}
      onEndReachedThreshold={0.5}
      initialNumToRender={10}
      onRefresh={onRefreshList}
      refreshing={refreshing}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

const styles = StyleSheet.create({
  listHeader: {
    padding: 5,
    paddingLeft: 16,
    backgroundColor: '#F3F3F3',
  },
  listHeaderText: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 17,
  },
});

export default GistList;
