import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function EditProfileScreen() {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Fashion enthusiast and style creator',
    location: 'New York, USA',
    website: 'www.johndoe.com',
  });

  const handleSave = () => {
    // Here you would typically make an API call to update the profile
    Alert.alert('Success', 'Profile updated successfully');
    router.back();
  };

  const handleImagePick = () => {
    // Here you would implement image picking functionality
    Alert.alert('Coming Soon', 'Image upload functionality will be available soon');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Profile Image Section */}
        <View style={styles.imageSection}>
          <Image
            source={require('../../assets/images/mock/MockImage.jpeg')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.changePhotoButton} onPress={handleImagePick}>
            <Ionicons name="camera-outline" size={20} color="#fff" />
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.formSection}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={formData.fullName}
              onChangeText={(text) => setFormData({ ...formData, fullName: text })}
              placeholder="Enter your full name"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              placeholder="Enter your email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={[styles.input, styles.bioInput]}
              value={formData.bio}
              onChangeText={(text) => setFormData({ ...formData, bio: text })}
              placeholder="Write something about yourself"
              placeholderTextColor="#666"
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              value={formData.location}
              onChangeText={(text) => setFormData({ ...formData, location: text })}
              placeholder="Enter your location"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Website</Text>
            <TextInput
              style={styles.input}
              value={formData.website}
              onChangeText={(text) => setFormData({ ...formData, website: text })}
              placeholder="Enter your website"
              placeholderTextColor="#666"
              autoCapitalize="none"
              keyboardType="url"
            />
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  imageSection: {
    alignItems: 'center',
    marginVertical: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  changePhotoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    gap: 8,
  },
  changePhotoText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  formSection: {
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#000',
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
}); 