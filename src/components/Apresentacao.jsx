import React from "react";
import { Text, View } from "react-native";
import { Component } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import FlipCard from "react-native-flip-card-plus";
import { styles } from "../../style/style";

const BASE_SIZE = { width: 400, height: 700 };

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flip: false,
    };
  }
  render() {
    return (
      <View style={styles.apresContainer}>
        <View style={styles.baseSize}>
          <FlipCard
            style={styles.card}
            flipHorizontal={false}
            flipVertical
            friction={10}
            perspective={2000}
            pressable={true}
            pressableCustomFunc={true}
            onPress={() => {
              this.setState({ flip: !this.state.flip });
            }}
            flip={this.state.flip}
          >
            <View style={styles.face}>
              <View>
                <Image
                  style={styles.flipImg}
                  source={require("../../images/logo.png")}
                />
              </View>
            </View>

            <View style={styles.back}>
              <View>
                <Image
                  style={styles.flipImg}
                  source={require("../../images/logo1.png")}
                />
              </View>
            </View>
          </FlipCard>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({ flip: !this.state.flip });
            }}
          >
            <Text style={styles.buttonText}>Parceiros</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
