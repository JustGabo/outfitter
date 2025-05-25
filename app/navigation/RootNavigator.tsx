import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../auth';
import EditProfileScreen from '../screens/EditProfileScreen';
import OutfitScreen from '../screens/OutfitScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen 
          name="Auth" 
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Outfit" 
          component={OutfitScreen}
          options={{ 
            headerShown: true,
            headerTitle: "Outfit Details",
            headerBackTitle: "Back"
          }}
        />
        <Stack.Screen 
          name="EditProfile" 
          component={EditProfileScreen}
          options={{ 
            headerShown: true,
            headerTitle: "Edit Profile",
            headerBackTitle: "Back"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 