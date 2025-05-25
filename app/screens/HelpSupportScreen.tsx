import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'How do I create an outfit?',
    answer: 'To create an outfit, go to the home screen and tap on "Outfit Creator". You can either upload photos or describe your desired style to generate outfit suggestions.',
  },
  {
    question: 'How does the Try-On feature work?',
    answer: 'The Try-On feature allows you to visualize clothing items on yourself. Simply upload a photo of yourself and the garment you want to try on, and our AI will show you how it looks.',
  },
  {
    question: 'Can I save outfits for later?',
    answer: 'Yes! When viewing an outfit, tap the heart icon to save it to your favorites. You can find all your saved outfits in the "Saved" tab.',
  },
  {
    question: 'How do I share my outfits?',
    answer: 'Each outfit has a share button that allows you to share it through various platforms like social media or messaging apps.',
  },
];

const supportOptions = [
  {
    icon: 'mail-outline' as const,
    title: 'Email Support',
    description: 'Get help via email',
    action: () => Linking.openURL('mailto:support@outfitter.com'),
  },
  {
    icon: 'chatbubbles-outline' as const,
    title: 'Live Chat',
    description: 'Chat with our support team',
    action: () => Alert.alert('Coming Soon', 'Live chat support will be available soon!'),
  },
  {
    icon: 'document-text-outline' as const,
    title: 'Documentation',
    description: 'Read our user guides',
    action: () => Linking.openURL('https://docs.outfitter.com'),
  },
];

export default function HelpSupportScreen() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Support Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Support</Text>
          <View style={styles.supportGrid}>
            {supportOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.supportCard}
                onPress={option.action}
              >
                <View style={styles.supportIconContainer}>
                <Ionicons name={option.icon} size={20} color="#000" />
                <Text style={styles.supportTitle}>{option.title}</Text>
                </View>
                <Text style={styles.supportDescription}>{option.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* FAQs */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          <View style={styles.faqList}>
            {faqs.map((faq, index) => (
              <TouchableOpacity
                key={index}
                style={styles.faqItem}
                onPress={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <View style={styles.faqHeader}>
                  <Text style={styles.faqQuestion}>{faq.question}</Text>
                  <Ionicons
                    name={expandedFaq === index ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color="#666"
                  />
                </View>
                {expandedFaq === index && (
                  <Text style={styles.faqAnswer}>{faq.answer}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  supportGrid: {
    gap: 16,
  },
  supportCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  supportIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  supportTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  supportDescription: {
    fontSize: 14,
    color: '#666',
  },
  faqList: {
    gap: 12,
  },
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    overflow: 'hidden',
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    marginRight: 16,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
    padding: 16,
    paddingTop: 0,
    lineHeight: 20,
  },
}); 