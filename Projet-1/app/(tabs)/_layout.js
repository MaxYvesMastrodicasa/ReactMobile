import { Tabs } from "expo-router";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabLayout(){
    return(
        <Tabs>
            <Tabs.Screen name="Home" 
                options={{title:"Home", tabBarIcon:({focused,color,size})=>(
                    <MaterialCommunityIcons name="home" color={color} size={size}/>
                    ), 
                }}
            />
            <Tabs.Screen name="Settings" options={{title: "Settings", tabBarIcon:({focused,color,size})=>(
                <MaterialCommunityIcons name="cog" color={color} size={size}/>
            ), 
            }}/>
        </Tabs>
    );
}