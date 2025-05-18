import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

export default function Auth() {
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
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  if (showOtpInput) {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Button
        title={loading ? "Loading..." : "Sign in with Email"}
        onPress={handleSignIn}
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: "#fff",
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
});
