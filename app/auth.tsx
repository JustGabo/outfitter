import { supabase } from "@/lib/supabase";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { RootStackParamList } from "./navigation/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Auth">;

export default function Auth() {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: "outfitter://auth/callback",
          shouldCreateUser: true,
        },
      });
      if (error) throw error;
      setShowOtpInput(true);
      Alert.alert("Check your email", "We sent you a verification code");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      });
      if (error) throw error;
      navigation.replace("Outfit");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  if (showOtpInput) {
    return (

      <View style={styles.container}>
        <View style={styles.codeHeader}>
          <Text style={styles.codeHeaderText}>We just sent a code</Text>
          <Text style={styles.codeHeaderSubtitle}>Enter the security code we sent to</Text>
          <Text style={styles.codeHeaderSubtitle}>{email}</Text>
        </View>
        <OtpInput
          numberOfDigits={6}
          onFilled={handleVerifyOtp}
          focusColor="#000"
          theme={{
            containerStyle: styles.otpContainer,
            pinCodeContainerStyle: styles.otpInput,
            pinCodeTextStyle: styles.otpText,
          }}
        />
        <View style={styles.codeFooter}>
          <Text style={styles.codeFooterText}>Didn't receive a code?</Text>
          <View style={styles.codeFooterButtonContainer}>
            <Button
              onPress={handleSignIn}
              disabled={loading}
              style={styles.codeFooterButton}
            >
              Resend
            </Button>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign in to Outfitter</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        placeholderTextColor="#666"
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignIn}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? "Loading..." : "Sign in with Email"}</Text>
      </TouchableOpacity>
      {/* <Button
        title="Sign in with Email"
        onPress={handleSignIn}
        disabled={loading}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
    color: "#000",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "600",
  },
  codeHeader: {
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 5,
    justifyContent: "space-between",
  },
  codeHeaderText: {
    fontSize: 22,
    fontWeight: "600",
  },
  codeHeaderSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#888",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 25,
    color: "#000",
  },
  otpContainer: {
    width: "100%",
    gap: 10,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: 45,
    height: 45,
  },
  otpText: {
    fontSize: 20,
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    padding: 2,
    fontWeight: "500",
  },
  codeFooter: {
    alignItems: "center",
    marginTop: 20,
  },
  codeFooterText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#888",
  },
  codeFooterButton: {
    backgroundColor: "transparent",
    padding: 0,
    margin: 0,
  },
  codeFooterButtonContainer: {
    marginTop: 8,
  },
  codeFooterButtonText: {
    color: "#fff",
    backgroundColor: "transparent",
    fontSize: 14,
    fontWeight: "500",
  },
});
