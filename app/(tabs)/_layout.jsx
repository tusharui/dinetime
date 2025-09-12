import { Tabs } from 'expo-router'
import { Colors } from '../../assets/color'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
    return (
        <Tabs screenOptions ={{headerShown:false , tabBarActiveTintColor: Colors.PRIMARY , tabBarInActiveTintColor: Colors.dark.text,
            tabBarStyle:{
                backgroundColor : Colors.SECONDARY,
                paddingBottom:14,
                height:105,

            },
            tabBarLabelStyle:{
                fontSize:12,
                fontWeight :"bold"
            }
         }}>
            <Tabs.Screen name= "home"  options = {{title:"Home" , tabBarIcon:({color})=>(
                <Ionicons name = "home-outline" size={24} color ={color}/>
            )}}/>
            <Tabs.Screen  name="history" options ={{title : "History",
                tabBarIcon:({color})=>(
                <Ionicons name = "time" size={24} color ={color}/>
    )}}/>
            <Tabs.Screen name = "profile" options={{title:"Profile", tabBarIcon:({color})=>(
                <Ionicons name = "person" size={24} color ={color}/>
            )}}/>
        </Tabs>

    )
}

export default TabsLayout