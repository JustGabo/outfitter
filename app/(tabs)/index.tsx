import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CreateInput } from '../../components/CreateInput';

const outfits = [
  {
    id: 1,
    title: 'Blue shirt aesthetic style',
    image: require('../../assets/images/mock/MockImage.jpeg'),
  },
  {
    id: 2,
    title: 'Blue shirt aesthetic style',
    image: require('../../assets/images/mock/MockImage.jpeg'),
  },  
  {
    id: 3,
    title: 'Blue shirt aesthetic style',
    image: require('../../assets/images/mock/MockImage.jpeg'),
  },
  {
    id: 4,
    title: 'Blue shirt aesthetic style',
    image: require('../../assets/images/mock/MockImage.jpeg'),
  },
];

export default function HomePage() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Home</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="search" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="person-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Outfit Grid */}
        <View style={styles.grid}>
          {outfits.map((outfit) => (
            <View key={outfit.id} style={styles.outfitCard}>
              <Image source={outfit.image} style={styles.outfitImage} />
              <Text style={styles.outfitTitle}>{outfit.title}</Text>
            </View>
          ))}
        </View>
        {/* <Text style={styles.caption}>Street wear outfit for racing meetup at NYC</Text> */}
      </ScrollView>

      {/* Bottom Actions */}
      <CreateInput 
        onAddImages={() => {
          // Handle add images
        }}
        onCreateOutfit={() => {
          // Handle create outfit
        }}
      />
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
    paddingTop: 70,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    gap: 8,
  },
  outfitCard: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 8,
  },
  outfitImage: {
    width: '100%',
    height: 225,
    borderRadius: 8,
  },
  outfitTitle: {
    fontSize: 12,
    marginTop: 8,
    marginHorizontal: 8,
  },
  rating: {
    fontSize: 12,
    marginTop: 4,
    marginBottom: 8,
    marginHorizontal: 8,
  },
  caption: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 16,
  },
});
