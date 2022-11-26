import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';


export default function App() {
  const [running, setrunning] = useState(false);

  useEffect(() => {
    setrunning(true)
  }, []);

  return (
    <View style={styles.container}>
      <GameEngine
        running={running}
        style={styles.game_engine}
      />

      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  game_engine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
