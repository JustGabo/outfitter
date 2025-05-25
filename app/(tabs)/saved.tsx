import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Mock data for saved outfits
const savedOutfits = [
  {
    id: 1,
    title: "Summer Beach Day",
    description: "Light and breezy outfit for beach activities",
    image: require("../../assets/images/mock/MockImage.jpeg"),
    likes: 24,
  },
  {
    id: 2,
    title: "Business Meeting",
    description: "Professional attire for important meetings",
    image: require("../../assets/images/mock/MockImage.jpeg"),
    likes: 18,
  },
  {
    id: 3,
    title: "Casual Weekend",
    description: "Comfortable outfit for weekend activities",
    image: require("../../assets/images/mock/MockImage.jpeg"),
    likes: 32,
  },
];

export default function SavedPage() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Saved Outfits</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.outfitGrid}>
          {savedOutfits.map((outfit) => (
            <TouchableOpacity key={outfit.id} style={styles.outfitCard}>
              <Image source={outfit.image} style={styles.outfitImage} />
              <View style={styles.outfitInfo}>
                <Text style={styles.outfitTitle}>{outfit.title}</Text>
                <Text style={styles.outfitDescription} numberOfLines={2}>
                  {outfit.description}
                </Text>
                <View style={styles.outfitStats}>
                  <View style={styles.likesContainer}>
                    <Ionicons name="heart" size={16} color="#FF4B4B" />
                    <Text style={styles.likesText}>{outfit.likes}</Text>
                  </View>
                  <TouchableOpacity style={styles.shareButton}>
                    <Ionicons name="share-outline" size={16} color="#666" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  outfitGrid: {
    gap: 16,
  },
  outfitCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  outfitImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  outfitInfo: {
    padding: 16,
  },
  outfitTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  outfitDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  outfitStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  likesText: {
    fontSize: 14,
    color: '#666',
  },
  shareButton: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
}); 