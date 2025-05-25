import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

/* Commented for later use
const outfits = [
  {
    id: 1,
    title: "Blue shirt aesthetic style",
    image: require("../../assets/images/mock/MockImage.jpeg"),
  },
  {
    id: 2,
    title: "Blue shirt aesthetic style",
    image: require("../../assets/images/mock/MockImage.jpeg"),
  },
  {
    id: 3,
    title: "Blue shirt aesthetic style",
    image: require("../../assets/images/mock/MockImage.jpeg"),
  },
  {
    id: 4,
    title: "Blue shirt aesthetic style",
    image: require("../../assets/images/mock/MockImage.jpeg"),
  },
];
*/

export default function HomePage() {
  const handleCreateOutfit = () => {
    router.push('/(tabs)/create');
  };

  const handleTryOn = () => {
    router.push('/(tabs)/try-on');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Home</Text>
          {/* <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="search" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="person-outline" size={24} color="black" />
            </TouchableOpacity>
          </View> */}
        </View>

        {/* Feature Cards */}
        <View style={styles.featureCards}>
          <TouchableOpacity style={styles.featureCard} onPress={handleTryOn}>
            <View style={[styles.iconContainer, styles.tryOnIcon]}>
              <Ionicons name="camera-outline" size={24} color="black" />
            </View>
            <Text style={styles.featureTitle}>Clothing Try-On</Text>
            <Text style={styles.featureDescription}>
              Visualize how a clothing item looks in you using a single garment reference image
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#666" style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard} onPress={handleCreateOutfit}>
            <View style={[styles.iconContainer, styles.outfitIcon]}>
              <Ionicons name="create-outline" size={24} color="black" />
            </View>
            <Text style={styles.featureTitle}>Outfit Creator</Text>
            <Text style={styles.featureDescription}>
              Create a complete outfit by uploading a photo or describing your desired style
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#666" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        {/* Commented out original outfit grid for later use
        <View style={styles.grid}>
          {outfits.map((outfit) => (
            <View key={outfit.id} style={styles.outfitCard}>
              <Image source={outfit.image} style={styles.outfitImage} />
              <Text style={styles.outfitTitle}>{outfit.title}</Text>
            </View>
          ))}
        </View>
        */}
      </ScrollView>

      {/* Commented out for later use
      <CreateInput
        onAddImages={() => {
          // Handle add images
        }}
      />
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 16,
    // paddingBottom: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  headerIcons: {
    flexDirection: "row",
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  featureCards: {
    // padding: 16,
    gap: 16,
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  tryOnIcon: {
    backgroundColor: '#FFF9E6',
  },
  outfitIcon: {
    backgroundColor: '#F0E6FF',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  arrowIcon: {
    alignSelf: 'flex-end',
  },
  // Preserved original styles for later use
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
    gap: 8,
  },
  outfitCard: {
    width: "48%",
    marginBottom: 16,
    borderRadius: 8,
  },
  outfitImage: {
    width: "100%",
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
    textAlign: "center",
    color: "#666",
    marginVertical: 16,
  },
});
