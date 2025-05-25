import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function TryOnPage() {
  const [modelImage, setModelImage] = useState<string | null>(null);
  const [garmentImage, setGarmentImage] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Virtual Try-On</Text>
          <Link href="/" asChild>
            <TouchableOpacity style={styles.watchButton}>
              <Ionicons name="videocam-outline" size={20} color="#0066FF" />
              <Text style={styles.watchButtonText}>Watch Tutorial</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.uploadSection}>
          <View style={styles.uploadContainer}>
            <Text style={styles.sectionTitle}>
              Select Model
              <TouchableOpacity>
                <Ionicons name="help-circle-outline" size={16} color="#666" />
              </TouchableOpacity>
            </Text>
            <TouchableOpacity 
              style={styles.uploadArea}
              onPress={() => {
                // Handle model image selection
              }}
            >
              {modelImage ? (
                <Image source={{ uri: modelImage }} style={styles.previewImage} />
              ) : (
                <>
                  <View style={styles.uploadIcon}>
                    <Ionicons name="cloud-upload-outline" size={24} color="#666" />
                  </View>
                  <Text style={styles.uploadText}>Paste/drop image here</Text>
                  <Text style={styles.uploadOr}>OR</Text>
                  <TouchableOpacity style={styles.chooseButton}>
                    <Ionicons name="image-outline" size={20} color="#000" />
                    <Text style={styles.chooseButtonText}>Choose file</Text>
                  </TouchableOpacity>
                </>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.uploadContainer}>
            <Text style={styles.sectionTitle}>
              Select Garment
              <TouchableOpacity>
                <Ionicons name="help-circle-outline" size={16} color="#666" />
              </TouchableOpacity>
            </Text>
            <TouchableOpacity 
              style={styles.uploadArea}
              onPress={() => {
                // Handle garment image selection
              }}
            >
              {garmentImage ? (
                <Image source={{ uri: garmentImage }} style={styles.previewImage} />
              ) : (
                <>
                  <View style={styles.uploadIcon}>
                    <Ionicons name="cloud-upload-outline" size={24} color="#666" />
                  </View>
                  <Text style={styles.uploadText}>Paste/drop image here</Text>
                  <Text style={styles.uploadOr}>OR</Text>
                  <TouchableOpacity style={styles.chooseButton}>
                    <Ionicons name="image-outline" size={20} color="#000" />
                    <Text style={styles.chooseButtonText}>Choose file</Text>
                  </TouchableOpacity>
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          style={[styles.tryOnButton, (!modelImage || !garmentImage) && styles.tryOnButtonDisabled]}
          disabled={!modelImage || !garmentImage}
        >
          <Text style={styles.tryOnButtonText}>Try It On</Text>
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
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  watchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  watchButtonText: {
    color: '#0066FF',
    fontSize: 14,
  },
  uploadSection: {
    gap: 24,
  },
  uploadContainer: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  uploadArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    height: 240,
  },
  uploadIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  uploadText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  uploadOr: {
    fontSize: 12,
    color: '#999',
    marginVertical: 8,
  },
  chooseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  chooseButtonText: {
    fontSize: 14,
    color: '#000',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  tryOnButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 32,
  },
  tryOnButtonDisabled: {
    backgroundColor: '#999',
  },
  tryOnButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 