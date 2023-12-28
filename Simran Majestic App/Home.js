import * as react from react;
import {Text, View, Stylesheet, TouchableOpacity, SafeAreaView, Image} from 'react-native';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        return(
            <safeAreaView style = {styles.containers}>
                <View style = {styles.container}>
                    <Text style = {styles.headingText}> Simran Majestic App</Text>
                </View>
            </safeAreaView>
        );
    }
}

const styles=StyleSheet.create({



    container:{
        alignItems:'center',
        height:100,
        width:Dimensions.get('window').width,
        backgroundColor:'#A020F0',
        
    },
    headingText : {
        fontSize:35,
        fontweieght:'bold',
        fontfamily:'monospace',
        marginTop:'20',
        color:'#FFFFFF'
    }

    
})