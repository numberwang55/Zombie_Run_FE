import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

export default function ZombieSetup({ navigation }) {
  const [zombiePace, setZombiePace] = useState(0);
  const [zombieDistance, setZombieDistance] = useState(0);
  return (
    <View>
      <Text>Set Zombie Pace:</Text>
      <TextInput
        onSubmitEditing={({ nativeEvent: { text } }) => setZombiePace(text)}
        value={zombiePace}
        keyboardType="numeric"
      />
      <Text>km/hr</Text>
      <Text>Chase Distance:</Text>
      <TextInput
        onChangeText={setZombieDistance}
        value={zombieDistance}
        keyboardType="numeric"
      />
      <Text>km</Text>

      <TouchableOpacity onPress={navigation.navigate("ZombieChase")}>
        <Text>START CHASE</Text>
      </TouchableOpacity>
    </View>
  );
}