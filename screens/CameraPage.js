import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, Modal, Image } from "react-native";
import { Camera, Permissions } from "expo-camera";
import { Dimensions } from "react-native";
import { useHeaderHeight } from "react-navigation-stack";
import * as FileSystem from "expo-file-system";

export default function CameraPage() {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);
  const headerHeight = useHeaderHeight();
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  const state = {
    hasCameraPermission: "granted",
    type: Camera.Constants.Type.back,
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>null</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  }

  // async function takePicture() {
  //   if (this.camera) {
  //     this.camera
  //       .takePictureAsync({ skipProcessing: true })
  //       .then((capturephoto) => {
  //         this.setState({ photo: capturephoto.uri });
  //         alert(this.state.photo);
  //       })
  //       .then((capturephoto) => {
  //         FileSystem.moveAsync({
  //           from: capturephoto.uri,
  //           to: `${FileSystem.documentDirectory}photos/Photo_${this.state.photoId}.jpg`,
  //         });
  //       });
  //   }
  //   console.log("Picture Taken.");
  // }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{
          flex: 1,
          marginTop: (screenHeight - headerHeight - screenWidth * 1.3) / 2,
        }}
        ref={camRef}
        type={state.type}
        // type={type}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>

          {capturedPhoto && (
            <Modal animationType="slide" transparent={false} visible={open}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 20,
                }}
              >
                <TouchableOpacity
                  style={{ margin: 10 }}
                  onPress={() => setOpen(false)}
                >
                  <Text>Exit [X]</Text>
                </TouchableOpacity>
                <Image
                  style={{
                    width: 500,
                    height: 500,
                    borderRadius: 20,
                  }}
                  source={{ uri: capturedPhoto }}
                />
              </View>
            </Modal>
          )}
        </View>
      </Camera>
      <TouchableOpacity
        style={{
          justifyContent: "flex-end",
          marginBottom:
            (screenHeight - headerHeight - screenWidth * 1.3 - 75) / 4,
          marginTop: (screenHeight - headerHeight - screenWidth * 1.3 - 75) / 4,
          alignItems: "center",
        }}
        onPress={takePicture}
      >
        <Image
          source={require("../assets/Camera.png")}
          style={{ width: 75, height: 75 }}
        />
      </TouchableOpacity>
    </View>
  );
}
