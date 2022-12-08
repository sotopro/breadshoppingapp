import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { CartItem } from '../../components';
import { styles } from './styles';

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const onDelete = (id) => {
    console.warn('Delete', id);
  };

  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          style={styles.listContainer}
          keyExtractor={keyExtractor}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => null}>
          <Text style={styles.textButtonConfirm}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.textTotalTitle}>Total</Text>
            <Text style={styles.textTotal}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
