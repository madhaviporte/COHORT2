import { useEffect, useRef, useState } from "react";
import {
  FaceLandmarker,
  FilesetResolver
} from "@mediapipe/tasks-vision";

export default function FaceExpression() {
  const videoRef = useRef(null);
  const faceLandmarkerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [expression, setExpression] = useState("Loading...");

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      // Load MediaPipe WASM
      const filesetResolver = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
      );

      // Create Face Landmarker
      faceLandmarkerRef.current = await FaceLandmarker.createFromOptions(
        filesetResolver,
        {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task"
          },
          outputFaceBlendshapes: true,
          runningMode: "VIDEO",
          numFaces: 1
        }
      );

      startCamera();
    };

    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }
      });

      if (!isMounted) return;

      videoRef.current.srcObject = stream;
      await videoRef.current.play();

      detect();
    };

    const detect = () => {
      const video = videoRef.current;

      if (!video || !faceLandmarkerRef.current) return;

      const results = faceLandmarkerRef.current.detectForVideo(
        video,
        performance.now()
      );

      if (results.faceBlendshapes?.length > 0) {
        const blendshapes = results.faceBlendshapes[0].categories;
        const detectedExpression = getExpression(blendshapes);
        setExpression(detectedExpression);
      }

      animationFrameRef.current = requestAnimationFrame(detect);
    };

    const getExpression = (blendshapes) => {
      const getScore = (name) =>
        blendshapes.find((b) => b.categoryName === name)?.score || 0;

      const smile =
        (getScore("mouthSmileLeft") + getScore("mouthSmileRight")) / 2;

      const jawOpen = getScore("jawOpen");
      const browDown =
        (getScore("browDownLeft") + getScore("browDownRight")) / 2;
      const eyeBlink =
        (getScore("eyeBlinkLeft") + getScore("eyeBlinkRight")) / 2;

      if (smile > 0.6) return "😊 Happy";
      if (jawOpen > 0.7) return "😲 Surprised";
      if (browDown > 0.6) return "😠 Angry";
      if (eyeBlink > 0.8) return "😉 Blinking";

      return "😐 Neutral";
    };

    init();

    return () => {
      isMounted = false;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Live Face Expression Detection</h2>

      <video
        ref={videoRef}
        style={{
          width: "400px",
          borderRadius: "10px",
          transform: "scaleX(-1)"
        }}
        playsInline
      />

      <h3 style={{ marginTop: "20px" }}>
        Expression: {expression}
      </h3>
    </div>
  );
}