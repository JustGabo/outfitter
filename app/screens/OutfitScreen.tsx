import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

type OutfitItem = {
  name: string;
  price: string;
};

interface OutfitSection {
  title: string;
  items: OutfitItem[];
}

export default function OutfitScreen() {
  const outfitData: OutfitSection[] = [
    {
      title: 'Tops',
      items: [
        { name: "Tommy Hilfiger's blue shirt Exo Blue", price: '$9.99' },
        { name: 'Golden Necklace', price: '$9.99' },
      ],
    },
    {
      title: 'Bottoms',
      items: [
        { name: "Tommy Hilfiger's blue shirt Exo Blue", price: '$9.99' },
        { name: 'Golden Necklace', price: '$9.99' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Street wear for racing meetup</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://placeholder.com/400x500' }}
          style={styles.mainImage}
        />
        <View style={styles.imagePagination}>
          <View style={[styles.paginationDot, styles.activeDot]} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>
      </View>

      {outfitData.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.items.map((item, itemIndex) => (
            <View key={itemIndex} style={styles.item}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 3/4,
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imagePagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    gap: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
  },
  activeDot: {
    backgroundColor: '#000',
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  item: {
    marginBottom: 8,
  },
  itemName: {
    fontSize: 14,
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
}); 