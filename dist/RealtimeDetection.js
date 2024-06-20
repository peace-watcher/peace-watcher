"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const api_1 = require("./api");
const RealTimeDetection = ({ setIsModalOpen, }) => {
    const videoRef = (0, react_1.useRef)(null);
    const imgRef = (0, react_1.useRef)(null);
    const wsRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const ws = new WebSocket('ws://35.234.40.146:8000/ws');
        wsRef.current = ws;
        ws.onopen = () => {
            console.log('WebSocket is open now.');
            startVideo();
        };
        ws.onmessage = (event) => {
            if (imgRef.current) {
                imgRef.current.src = 'data:image/jpeg;base64,' + event.data;
            }
            console.log('event.data', event.data);
            if (event.data === 'ALERT' ||
                event.data.includes('a knife') ||
                event.data.includes('fallen person') ||
                event.data.includes('fork') ||
                event.data.includes('person running away')) {
                setIsModalOpen(true);
                (0, api_1.postPushNotificationTrigger)();
            }
        };
        ws.onclose = () => {
            console.log('WebSocket is closed now.');
        };
        ws.onerror = (error) => {
            console.log('WebSocket Error: ' + error);
        };
        return () => {
            ws.close();
        };
    }, []);
    const startVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
                videoRef.current.onloadedmetadata = () => {
                    console.log('Video metadata loaded');
                    sendFrame();
                };
            }
        })
            .catch((err) => {
            console.log('An error occurred: ' + err);
        });
    };
    const sendFrame = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 640;
        canvas.height = 480;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        const frameRate = 3;
        const captureFrame = () => {
            if (context && videoRef.current) {
                if (frameCount % Math.floor(30 / frameRate) === 0) {
                    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.5);
                    const data = dataUrl.split(',')[1];
                    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                        wsRef.current.send(data);
                    }
                }
                frameCount++;
                requestAnimationFrame(captureFrame);
            }
        };
        captureFrame();
    };
    return (react_1.default.createElement(StWrapper, null,
        react_1.default.createElement(StImage, { id: "outputElement", ref: imgRef, style: { border: '1px solid black' }, alt: "Real-time detection result" }),
        react_1.default.createElement(StVideo, { id: "videoElement", ref: videoRef, width: "640", height: "480", style: { border: '1px solid black' }, autoPlay: true })));
};
exports.default = RealTimeDetection;
const StWrapper = styled_components_1.default.div ``;
const StVideo = styled_components_1.default.video ``;
const StImage = styled_components_1.default.img `
  width: 100%;
  height: auto;
  margin-bottom: 30rem;
`;
