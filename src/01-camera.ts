import { Camera, CameraDirection, CameraResultType } from "@capacitor/camera";

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 100,
    allowEditing: true,
    resultType: CameraResultType.Uri, //enum CameraResultType { Uri = "uri", Base64 = "base64", DataUrl = "dataUrl" }
    direction: CameraDirection.Front, //enum CameraDirection { Rear = "REAR", Front = "FRONT" }
  });
};
