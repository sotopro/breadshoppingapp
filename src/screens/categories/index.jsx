import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { CategoryItem } from '../../components';
import { CATEGORIES } from '../../constants/data/index';
import { styles } from './styles';

const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    console.warn('onSelected', item);
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.containerList}
      />
    </SafeAreaView>
  );
};

export default Categories;
