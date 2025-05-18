import { Stack } from "expo-router";
import { Fragment } from "react";
import { Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <Fragment>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Text>This screen does not exist.</Text>
    </Fragment>
  );
}
