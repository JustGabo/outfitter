import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { CreateInput } from '../../components/CreateInput';

type StylePreset = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  prompt: string;
};

export default function CreatePage() {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const handleAddImages = () => {
    // Handle image selection
  };

  const recentPrompts = [
    "Casual summer outfit with denim",
    "Business casual for meeting",
    "Street style with sneakers",
  ];

  const stylePresets: StylePreset[] = [
    { 
      icon: "sunny", 
      label: "Summer",
      prompt: "Create a light and breezy summer outfit perfect for warm weather"
    },
    { 
      icon: "briefcase", 
      label: "Business",
      prompt: "Design a professional business outfit suitable for office meetings"
    },
    { 
      icon: "shirt", 
      label: "Casual",
      prompt: "Put together a comfortable casual outfit for everyday wear"
    },
    { 
      icon: "star", 
      label: "Party",
      prompt: "Create a stylish party outfit that stands out"
    },
  ];

  const handleStyleSelect = (style: StylePreset) => {
    setSelectedStyle(style.label);
    // You can handle the prompt here or pass it to CreateInput
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Create Outfit</Text>
          <TouchableOpacity style={styles.helpButton}>
            <Ionicons name="help-circle-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Style Presets */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Styles</Text>
          <View style={styles.presetGrid}>
            {stylePresets.map((preset, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.presetButton,
                  selectedStyle === preset.label && styles.presetButtonSelected
                ]}
                onPress={() => handleStyleSelect(preset)}
              >
                <Ionicons 
                  name={preset.icon} 
                  size={24} 
                  color={selectedStyle === preset.label ? "#fff" : "#000"} 
                />
                <Text style={[
                  styles.presetLabel,
                  selectedStyle === preset.label && styles.presetLabelSelected
                ]}>
                  {preset.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Prompts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Prompts</Text>
          <View style={styles.promptList}>
            {recentPrompts.map((prompt, index) => (
              <TouchableOpacity key={index} style={styles.promptItem}>
                <Ionicons name="time-outline" size={16} color="#666" />
                <Text style={styles.promptText}>{prompt}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tips Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips for Better Results</Text>
          <View style={styles.tipsList}>
            <View style={styles.tipItem}>
              <Ionicons name="bulb-outline" size={16} color="#666" />
              <Text style={styles.tipText}>Be specific about occasion and style</Text>
            </View>
            <View style={styles.tipItem}>
              <Ionicons name="color-palette-outline" size={16} color="#666" />
              <Text style={styles.tipText}>Mention preferred colors or patterns</Text>
            </View>
            <View style={styles.tipItem}>
              <Ionicons name="image-outline" size={16} color="#666" />
              <Text style={styles.tipText}>Add reference images for inspiration</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Create Input at Bottom */}
      <View style={styles.createInputContainer}>
        <CreateInput onAddImages={handleAddImages} />
      </View>
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
    paddingBottom: 180, // Extra space for CreateInput
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  helpButton: {
    padding: 4,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  presetGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  presetButton: {
    width: '47%',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  presetButtonSelected: {
    backgroundColor: '#000',
  },
  presetLabel: {
    fontSize: 16,
    color: '#000',
  },
  presetLabelSelected: {
    color: '#fff',
  },
  promptList: {
    gap: 12,
  },
  promptItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
  },
  promptText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  tipsList: {
    gap: 12,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#666',
  },
  createInputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
}); 