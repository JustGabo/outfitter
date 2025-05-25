import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Image, Linking, ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const appVersion = '1.0.0';

const legalLinks = [
  {
    icon: 'document-text-outline' as const,
    title: 'Terms of Service',
    action: () => Linking.openURL('https://outfitter.com/terms'),
  },
  {
    icon: 'shield-checkmark-outline' as const,
    title: 'Privacy Policy',
    action: () => Linking.openURL('https://outfitter.com/privacy'),
  },
  {
    icon: 'information-circle-outline' as const,
    title: 'Cookie Policy',
    action: () => Linking.openURL('https://outfitter.com/cookies'),
  },
];

const socialLinks = [
  {
    icon: 'logo-twitter' as const,
    title: 'Twitter',
    action: () => Linking.openURL('https://twitter.com/outfitter'),
  },
  {
    icon: 'logo-instagram' as const,
    title: 'Instagram',
    action: () => Linking.openURL('https://instagram.com/outfitter'),
  },
  {
    icon: 'logo-linkedin' as const,
    title: 'LinkedIn',
    action: () => Linking.openURL('https://linkedin.com/company/outfitter'),
  },
];

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* App Info */}
        <View style={styles.appInfo}>
          <Image
            source={require('../../assets/images/mock/MockImage.jpeg')}
            style={styles.appLogo}
          />
          <Text style={styles.appName}>Outfitter</Text>
          <Text style={styles.appVersion}>Version {appVersion}</Text>
          <Text style={styles.appDescription}>
            Your personal AI-powered fashion assistant that helps you discover, try on, and create amazing outfits.
          </Text>
        </View>

        {/* Legal Links */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Legal</Text>
          <View style={styles.linkList}>
            {legalLinks.map((link, index) => (
              <TouchableOpacity
                key={index}
                style={styles.linkItem}
                onPress={link.action}
              >
                <View style={styles.linkLeft}>
                  <Ionicons name={link.icon} size={20} color="#000" />
                  <Text style={styles.linkTitle}>{link.title}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#666" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Social Links */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Follow Us</Text>
          <View style={styles.socialGrid}>
            {socialLinks.map((link, index) => (
              <TouchableOpacity
                key={index}
                style={styles.socialButton}
                onPress={link.action}
              >
                <Ionicons name={link.icon} size={20} color="#000" />
                <Text style={styles.socialButtonText}>{link.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Copyright */}
        <Text style={styles.copyright}>
          © {new Date().getFullYear()} Outfitter. All rights reserved.
        </Text>
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
  appInfo: {
    alignItems: 'center',
    marginVertical: 32,
  },
  appLogo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  appVersion: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  appDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 32,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  linkList: {
    gap: 12,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
  },
  linkLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  socialGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    minWidth: '45%',
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  copyright: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
}); 