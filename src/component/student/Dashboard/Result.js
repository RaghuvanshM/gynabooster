import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
 class Result extends Component {
    render() {
        const data = {
            labels: ['Total', 'Correct', 'Incorrect'],
            datasets: [
                {
                    data: [20, 12, 7],
                },
            ],
        };
        const piechartdata = [
        
            {
                name: 'Correct',
                number: 100,
                color: 'green',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },
            {
                name: 'InCorrect',
                number: 50,
                color: 'red',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },

        ];
        return (
            <View style={styles.container}>
                <View style={styles.scoreboard}>
                    <Text style={{ fontSize: 20, marginHorizontal: 30 }}> score</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20,color:'green' }}>20</Text>
                        <Text style={{ fontSize: 20 }}>/50</Text>
                    </View>
                </View>
                <View style={styles.barchart}>
                    <BarChart
                        data={data}
                        width={Dimensions.get("window").width - 50}
                        showValuesOnTopOfBars
                        fromZero
                        height={220}
                        chartConfig={chartConfig}
                        withHorizontalLabels={false}
                        withInnerLines={false}
                        backgroundColor={'transparent'}
                    />

                </View>

                <View
                    style={styles.piechart}
                >
                    <PieChart
                        data={piechartdata}
                        width={Dimensions.get("window").width}
                        height={220}
                        resizeMode='contain'
                        chartConfig={chartConfig}
                        accessor={'number'}
                        backgroundColor={'transparent'}
                    />
                </View>
                <View style={styles.viewsolutintext}>
                    <TouchableOpacity
                     style={styles.solutionbutton}
                     onPress={()=>{this.props.navigation.navigate('CorrectIncorrect')}}
                    >
                        <Text style={{ fontSize: 20,color:'white' }}>View Solution</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Result;
const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'white',
    backgroundGradientToOpacity: 0.5,
    // color: (opacity = 1) => `rgba(220,20,60, ${opacity})`,
    color: () => `red`,
    labelColor: (opacity = 1) => `rgba(51, 139, 161, ${opacity})`,
    strokeWidth: 4, // optional, default 3
    barPercentage: 1,
    //useShadowColorFromDataset: false // optional
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    barchart: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    piechart: {
        flex: 1
    },
    viewsolutintext: {
        flex: 0.3,
       
    },
    scoreboard: {
        flex: 0.3,
        flexDirection: 'row',
    },
    solutionbutton:{
        backgroundColor:'rgb(51, 139, 161)',
        paddingHorizontal:30,
        paddingVertical:10,
        borderRadius:10
    }
})