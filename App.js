import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

export default class App extends Component {
    render() {
        return (
            //Bai 2

            // <SafeAreaView style={{
            //     flex: 1,
            //     flexDirection: 'column',
            //     alignItems: 'stretch'

            // }}>
            //     <View style={{ flex: 1 }}>
            //         <View style={{
            //             flex: 1, backgroundColor: 'blue', justifyContent: 'center',
            //             alignItems: 'center'
            //         }}>
            //             <Text>A</Text>
            //         </View>
            //         <View style={{
            //             flex: 1, backgroundColor: 'yellow', justifyContent: 'center',

            //             alignItems: 'center'
            //         }}>
            //             <Text>B</Text>
            //         </View>
            //         <View style={{
            //             flex: 1, backgroundColor: 'red', justifyContent: 'center'
            //             ,
            //             alignItems: 'center'
            //         }}>
            //             <Text>C</Text>
            //         </View>
            //         <View style={{
            //             flex: 1, backgroundColor: 'brown', justifyContent: 'center'
            //             ,
            //             alignItems: 'center'
            //         }}>
            //             <Text>D</Text>
            //         </View>
            //     </View>
            //     <View style={{ flex: 1, flexDirection: 'row' }}>
            //         <View style={{
            //             flex: 1, backgroundColor: 'blue', justifyContent: 'center'
            //             ,
            //             alignItems: 'center'
            //         }}>
            //             <Text>E</Text>
            //         </View>
            //         <View style={{
            //             flex: 1, backgroundColor: 'yellow', justifyContent: 'center'
            //             ,
            //             alignItems: 'center'
            //         }}>
            //             <Text>F</Text>
            //         </View>
            //         <View style={{
            //             flex: 1, backgroundColor: 'red', justifyContent: 'center'
            //             ,
            //             alignItems: 'center'
            //         }}>
            //             <Text>G</Text>
            //         </View>
            //         <View style={{
            //             flex: 1, backgroundColor: 'brown', justifyContent: 'center'
            //             ,
            //             alignItems: 'center'
            //         }}>
            //             <Text>H</Text>
            //         </View>
            //     </View>

            // </SafeAreaView>

            //Bai 1
            // <SafeAreaView style={{
            //     flex: 1, flexDirection: 'column'
            //     , alignItems: 'stretch'
            // }}>
            //     <View style={{
            //         flex: 0.25, backgroundColor: 'red',
            //         justifyContent: 'center'
            //         , alignItems: 'center',
            //         borderWidth: 5
            //     }}>
            //         <Text>1</Text>
            //     </View>

            //     <View style={{
            //         flex: 0.75,
            //         flexDirection: 'row',
            //         alignItems: 'stretch'

            //     }}>
            //         <View style={{
            //             flex: 0.25, backgroundColor: 'green',
            //             justifyContent: 'center'
            //             , alignItems: 'center',
            //             borderWidth: 5
            //         }}>
            //             <Text>2</Text>
            //         </View>
            //         <View style={{
            //             flex: 0.75, backgroundColor: 'yellow',
            //             flexDirection: 'column',
            //             alignItems: 'stretch'
            //         }}>
            //             <View style={{
            //                 flex: 0.7, backgroundColor: 'brown',
            //                 justifyContent: 'center'
            //                 , alignItems: 'center',
            //                 borderWidth: 5
            //             }}>
            //                 <Text>3</Text>
            //             </View>
            //             <View style={{
            //                 flex: 0.3, backgroundColor: 'green',
            //                 flexDirection: 'row'
            //             }}>
            //                 <View style={{
            //                     flex: 0.7, backgroundColor: 'pink',
            //                     justifyContent: 'center'
            //                     , alignItems: 'center',
            //                     borderWidth: 5
            //                 }}>
            //                     <Text>4</Text>
            //                 </View>
            //                 <View style={{
            //                     flex: 0.7, backgroundColor: 'white',
            //                     justifyContent: 'center'
            //                     , alignItems: 'center',
            //                     borderWidth: 5
            //                 }}>
            //                     <Text>5</Text>
            //                 </View>
            //             </View>
            //         </View>

            //     </View>

            // </SafeAreaView>
            //BAI 3
            // <SafeAreaView style={{
            //     flex: 1, flexDirection: 'column',
            //     alignItems: 'stretch'
            // }}>
            //     <View style={{ flex: 0.5, flexDirection: 'row' }}>
            //         <View style={{
            //             flex: 0.1,
            //             backgroundColor: 'green',
            //             justifyContent: 'center'
            //             , alignItems: 'center'
            //         }}>
            //             <Text>1</Text>
            //         </View>
            //         <View style={{
            //             flex: 0.9, flexDirection: 'column',
            //             alignItems: 'stretch'
            //         }}>
            //             <View style={{
            //                 flex: 0.5,
            //                 backgroundColor: 'red',
            //                 justifyContent: 'center',
            //                 alignItems: 'center'
            //             }}>
            //                 <Text>2</Text>
            //             </View>
            //             <View style={{
            //                 flex: 0.5,
            //                 backgroundColor: 'pink',
            //                 justifyContent: 'center',
            //                 alignItems: 'center'
            //             }}>
            //                 <Text>3</Text>
            //             </View>
            //         </View>
            //     </View>
            //     <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'stretch' }}>
            //         <View style={{
            //             flex: 0.1, backgroundColor: 'yellow',
            //             alignItems: 'center',
            //             justifyContent: 'center'
            //         }}>
            //             <Text>2</Text>
            //         </View>
            //         <View style={{ flex: 0.6, flexDirection: 'column' }}>
            //             <View style={{
            //                 flex: 0.5, backgroundColor: 'blue',
            //                 alignItems: 'center',
            //                 justifyContent: 'center'
            //             }}>
            //                 <Text>5</Text>
            //             </View>
            //             <View style={{
            //                 flex: 0.5, backgroundColor: 'purple',
            //                 alignItems: 'center',
            //                 justifyContent: 'center'
            //             }}>
            //                 <Text>5</Text>
            //             </View>
            //         </View>
            //         <View style={{ flex: 0.3, flexDirection: 'column' }}>
            //             <View style={{
            //                 flex: 1, backgroundColor: 'yellow', alignItems: 'center',
            //                 justifyContent: 'center'
            //             }}>
            //                 <Text>7</Text>
            //             </View>
            //             <View style={{
            //                 flex: 1, backgroundColor: 'red', alignItems: 'center',
            //                 justifyContent: 'center'
            //             }}>
            //                 <Text>8</Text>
            //             </View>
            //             <View style={{
            //                 flex: 1, backgroundColor: 'green', alignItems: 'center',
            //                 justifyContent: 'center'
            //             }}>
            //                 <Text>9</Text>
            //             </View>
            //         </View>
            //     </View>

            // </SafeAreaView>
            //Bai 4
            <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 0.2, flexDirection: 'row' }}>
                    <View style={{
                        flex: 0.3, backgroundColor: 'red'
                        , alignItems: 'center'
                        , justifyContent: 'center'
                        , borderWidth: 5
                    }}>
                        <Text>1</Text>
                    </View>
                    <View style={{
                        flex: 0.7, backgroundColor: 'yellow'
                        , alignItems: 'center'
                        , justifyContent: 'center'
                        , borderWidth: 5
                    }}>
                        <Text>2</Text>
                    </View>
                </View>
                <View style={{ flex: 0.6, flexDirection: 'row' }}>
                    <View style={{ flex: 0.8, flexDirection: 'column' }}>
                        <View style={{
                            flex: 1, backgroundColor: 'green'
                            , justifyContent: 'center',
                            alignItems: 'center'
                            , borderWidth: 5
                        }}>
                            <Text>3</Text>
                        </View>
                        <View style={{
                            flex: 1, backgroundColor: 'red'
                            , justifyContent: 'center',
                            alignItems: 'center'
                            , borderWidth: 5
                        }}>
                            <Text>4</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 0.2, backgroundColor: 'purple'
                        , justifyContent: 'center'
                        , alignItems: 'center'
                        , borderWidth: 5
                    }}>
                        <Text>5</Text>
                    </View>
                </View>
                <View style={{ flex: 0.2, flexDirection: 'row' }}>
                    <View style={{
                        flex: 0.5, backgroundColor: 'orange'
                        , alignItems: 'center'
                        , justifyContent: 'center'
                        , borderWidth: 5
                    }}>
                        <Text>6</Text>
                    </View>
                    <View style={{
                        flex: 0.5, backgroundColor: 'blue'
                        , alignItems: 'center'
                        , justifyContent: 'center'
                        , borderWidth: 5
                    }}>
                        <Text>7</Text>
                    </View>
                </View>

            </SafeAreaView>
        )
    }
}
