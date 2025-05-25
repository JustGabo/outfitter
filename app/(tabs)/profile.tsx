import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const menuItems = [
  {
    icon: "person" as const,
    title: 'Edit Profile',
    description: 'Change your profile information',
    route: '/screens/EditProfileScreen',
  },
  {
    icon: "lock-closed" as const,
    title: 'Privacy',
    description: 'Control your privacy settings',
    route: null,
  },
  {
    icon: "color-palette" as const,
    title: 'Appearance',
    description: 'Customize app appearance',
    route: null,
  },
  {
    icon: "help-circle" as const,
    title: 'Help & Support',
    description: 'Get help or contact support',
    route: '/screens/HelpSupportScreen',
  },
  {
    icon: "information-circle" as const,
    title: 'About',
    description: 'App information and legal',
    route: '/screens/AboutScreen',
  },
];

export default function ProfilePage() {
  const handleMenuPress = (route: string | null) => {
    if (route) {
      router.push(route as any); // Using type assertion for now
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileInfo}>
            <Image
              source={require('../../assets/images/mock/MockImage.jpeg')}
              style={styles.profileImage}
            />
            <View style={styles.profileText}>
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileEmail}>john.doe@example.com</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton} onPress={() => handleMenuPress('/screens/EditProfileScreen')}>
            <Ionicons name="create-outline" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Outfits</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>48</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={() => handleMenuPress(item.route)}
            >
              <View style={styles.menuItemLeft}>
                <Ionicons name={item.icon} size={24} color="#000" />
                <View style={styles.menuItemText}>
                  <Text style={styles.menuItemTitle}>{item.title}</Text>
                  <Text style={styles.menuItemDescription}>{item.description}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={20} color="#FF4B4B" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  profileText: {
    gap: 4,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#ddd',
  },
  menuContainer: {
    gap: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuItemText: {
    gap: 4,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  menuItemDescription: {
    fontSize: 12,
    color: '#666',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 32,
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FFF1F1',
    borderRadius: 12,
  },
  logoutText: {
    color: '#FF4B4B',
    fontSize: 16,
    fontWeight: '500',
  },
}); 