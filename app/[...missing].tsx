import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="screens/EditProfileScreen"
        options={{
          title: 'Edit Profile',
        }}
      />
      <Stack.Screen
        name="screens/HelpSupportScreen"
        options={{
          title: 'Help & Support',
        }}
      />
      <Stack.Screen
        name="screens/AboutScreen"
        options={{
          title: 'About',
        }}
      />
    </Stack>
  );
} 