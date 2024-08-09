import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import { LineChart, ProgressChart, BarChart, StackedBarChart, PieChart } from 'react-native-chart-kit';

const MyChart = () => {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Adjust the color
          strokeWidth: 2, // Adjust the line width
        },
      ],
    };
  
    const chartConfig = {
      backgroundColor: '#fff',
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      decimalPlaces: 2, // number of decimal places for data values
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Adjust the color of the axis and labels
      style: {
        borderRadius: 16,
      },
    };

    //
    const data2 = {
      labels: ["Swim", "Bike", "Run"], // optional
      data: [0.4, 0.6, 0.8]
    };

    //
    const data3 = {
      labels: ["Test1", "Test2"],
      legend: ["L1", "L2", "L3"],
      data: [
        [60, 60, 60],
        [30, 30, 60]
      ],
      barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
    };

    //
    const data4 = [
      {
        name: "Seoul",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Toronto",
        population: 2800000,
        color: "green",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Beijing",
        population: 527612,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "New York",
        population: 8538000,
        color: "#ffffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Moscow",
        population: 11920000,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      }
    ];
  
    return (
      <ScrollView>
        <View style={{ alignItems:'center', marginTop:10 }}>
          <LineChart
            data={data}
            width={300}
            height={200}
            yAxisLabel="$"
            yAxisSuffix="k"
            chartConfig={chartConfig}
            bezier
          />
        </View>
        <View style={{ alignItems:'center',  }}>
          <ProgressChart
            data={data2}
            width={300}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
          />
        </View>
        <View style={{ alignItems:'center',  }}>
          <BarChart
            data={data}
            width={300}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
          />
        </View>
        <View style={{ alignItems:'center',  }}>
          <StackedBarChart
            data={data3}
            width={300}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
          />
        </View>
        <View style={{ alignItems:'center', marginBottom:30 }}>
          <PieChart
            data={data4}
            width={350}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            // paddingLeft={"5"}
            center={[10, 10]}
            absolute
          />
        </View>
      </ScrollView>
    );
  };
  
  export default MyChart;
  

const styles = StyleSheet.create({})