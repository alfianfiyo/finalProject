// store.js
import { createStore, combineReducers } from 'redux';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TAMBAH_PESANAN':
      const { menu, jumlah, hargaPerItem } = action;
      const jumlahPesanan = state[menu] ? state[menu].jumlahPesanan : 0;
      const jumlahHarga = state[menu] ? state[menu].jumlahHarga : 0;

      return {
        ...state,
        [menu]: {
          jumlahPesanan: jumlahPesanan + jumlah,
          jumlahHarga: jumlahHarga + (jumlah * hargaPerItem),
        },
      };
    case 'KURANGI_PESANAN':
      const { menu: menuKurang, jumlah: jumlahKurang, hargaPerItem: hargaPerItemKurang } = action;
      const jumlahPesananKurang = state[menuKurang] ? state[menuKurang].jumlahPesanan : 0;
      const jumlahHargaKurang = state[menuKurang] ? state[menuKurang].jumlahHarga : 0;

      // Memastikan jumlahPesananKurang tidak kurang dari 0
      const newJumlahPesanan = Math.max(0, jumlahPesananKurang - jumlahKurang);

      return {
        ...state,
        [menuKurang]: {
          jumlahPesanan: newJumlahPesanan,
          jumlahHarga: jumlahHargaKurang - (jumlahKurang * hargaPerItemKurang),
        },
      };
    case 'RESET_PESANAN':
      return initialState;
    default:
      return state;
  }
};

const totalReducer = (state = { totalNominal: 0, totalJumlah: 0 }, action) => {
  switch (action.type) {
    case 'UPDATE_TOTAL':
      const { jumlah, hargaPerItem } = action;

      const totalNominal = state.totalNominal + (jumlah * hargaPerItem);
      const totalJumlah = state.totalJumlah + jumlah;

      return {
        totalNominal,
        totalJumlah,
      };
    case 'UPDATE_TOTAL_KURANG':
      const { jumlah: kurangJumlah, hargaPerItem: kurangHargaPerItem } = action;

      const totalNominalKurang = state.totalNominal - (kurangJumlah * kurangHargaPerItem);
      const totalJumlahKurang = state.totalJumlah - kurangJumlah;

      return {
        totalNominal: totalNominalKurang >= 0 ? totalNominalKurang : 0, // Pastikan tidak negatif
        totalJumlah: totalJumlahKurang >= 0 ? totalJumlahKurang : 0, // Pastikan tidak negatif
      };
    case 'RESET_TOTAL':
      return { totalNominal: 0, totalJumlah: 0 };
    default:
      return state;
  }
};

const dataGlobal = (state= { dataArray: [] }, action) => {
  switch (action.type) {
    case 'DATA_MENU':
      const { data } = action;
      const dataMenu = data;
      return{
        dataArrayMenu: dataMenu
      };
    
    case 'RESET_DATA_MENU':
      return{
        dataArrayMenu: []
      }

  
    default:
      return state;
  }
}

const dataCart = (state= { dataArrayCart: [] }, action) => {
  switch (action.type) {
    case 'DATA_CART':
      const { data } = action;
      const updatedArray = state.dataArrayCart.map(item => {
        const newItemIndex = data.findIndex(newItem =>
          newItem.id === item.id &&
          newItem.menu === item.menu &&
          newItem.date_order === item.date_order
        );

        if (newItemIndex !== -1) {
          // Item exists, update jumlahPesanan and nominalPesanan
          return {
            ...item,
            jumlahPesanan: data[newItemIndex].jumlahPesanan,
            nominalPesanan: data[newItemIndex].nominalPesanan
          };
        }

        return item; // Item remains unchanged
      });

      // Add new items that are not present in the existing state
      data.forEach(newItem => {
        const existingItem = updatedArray.find(item =>
          item.id === newItem.id &&
          item.menu === newItem.menu &&
          item.date_order === newItem.date_order
        );

        if (!existingItem) {
          updatedArray.push(newItem);
        }
      });

      return {
        dataArrayCart: updatedArray
      };
    case 'RESET_DATA_CART' :
      return {
        dataArrayCart:[]
      };
  
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  menu: reducer,
  total:totalReducer,
  dataGlobal : dataGlobal,
  dataCart : dataCart
  // ... tambahkan reducer untuk entitas lain jika diperlukan
});

const store = createStore(rootReducer);

export default store;
