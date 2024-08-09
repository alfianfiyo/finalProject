import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler'
import Root from './src/navigations/rootNavigation'
import { Provider } from 'react-redux'
import store from './src/helpers/reducer/reducerMenu'

import { QueryClient, QueryClientProvider } from 'react-query';
import MyChart from './src/screens/chart'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000, // Misalnya, waktu data cache sebelum di-refresh
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Root/>
        {/* <MyChart/> */}
      </Provider>
    </QueryClientProvider>
  )
}

const styles = StyleSheet.create({})