import { View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { CartItem } from '../../components';
import { CART } from '../../constants/data';
import { styles } from './styles';

const Cart = ({ navigation }) => {
  const total = 1400;
  const onDelete = (id) => {
    console.warn('Delete', id);
  };

  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={CART}
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
