import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface CreateInputProps {
  onAddImages?: () => void;
}

export function CreateInput({ onAddImages }: CreateInputProps) {
  const [description, setDescription] = useState('');

  const handleCreateOutfit = () => {
    if (description.trim()) {
      router.push('/(tabs)/outfit');
    }
  };

  return (
    <View style={styles.container}>
        {/* <Text style={styles.caption}>Street wear outfit for racing meetup at NYC</Text> */}
        <TextInput
            style={styles.caption}
            placeholder="Describe your outfit"
            placeholderTextColor="#666"
            value={description}
            onChangeText={setDescription}
        />
      <View style={styles.actionContainer}>
      <TouchableOpacity style={styles.addButton} onPress={onAddImages}>
        <Ionicons name="images-outline" size={12} color="black" />
        <Text style={styles.buttonText}>Add images</Text>
      </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.createButton, !description.trim() && styles.createButtonDisabled]} 
          onPress={handleCreateOutfit}
          disabled={!description.trim()}
        >
        <Text style={styles.createButtonText}>Create outfit</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '95%',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
    borderRadius: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#F1F1F1',
    borderWidth: 1,
    borderColor: '#E4E4E4',
  },
  caption: {
    fontSize: 12,
    color: '#666',
    padding: 4,
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  addButton: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    width: "35%",
    height: 30,
    borderWidth: 1,
    borderColor: '#E4E4E4',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    gap: 8,
  },
  createButton: {
    borderRadius: 20,
    width: "35%",
    height: 30,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButtonDisabled: {
    backgroundColor: '#999',
  },
  buttonText: {
    fontSize: 12,
    color: '#000',
  },
  createButtonText: {
    fontSize: 12,
    color: '#fff',
  },
});
