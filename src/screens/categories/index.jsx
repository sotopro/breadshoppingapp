import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

import { CategoryItem } from '../../components';
import { styles } from './styles';

const Categories = ({ navigation, route }) => {
  const categories = useSelector((state) => state.category.categories);
  const onSelected = (item) => {
    navigation.navigate('Products', { categoryId: item.id, title: item.title, color: item.color });
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.containerList}
      />
    </SafeAreaView>
  );
};

export default Categories;
