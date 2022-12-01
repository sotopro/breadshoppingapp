import { View, Text, FlatList } from 'react-native';

import { OrderItem } from '../../components';
import { ORDERS } from '../../constants/data';
import { styles } from './styles';

const Orders = ({ navigation }) => {
  const onDelete = (id) => {
    console.warn('Delete', id);
  };

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;
  return (
    <View style={styles.container}>
      <FlatList data={ORDERS} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

export default Orders;
