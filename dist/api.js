"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPushNotificationTrigger = exports.registerCCTV = void 0;
const axios_1 = __importDefault(require("axios"));
const client = axios_1.default.create({
    baseURL: 'https://peacewatcher.shop',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});
const registerCCTV = (cctvData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield client.post(`/alert/registerCCTV`, cctvData);
        return response.data;
    }
    catch (error) {
        throw new Error(`CCTV registration failed: ${error.message}`);
    }
});
exports.registerCCTV = registerCCTV;
const postPushNotificationTrigger = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield client.post(`/alert/send`);
        console.log('Push notification sent:', response.data);
    }
    catch (error) {
        console.error('Error sending push notification:', error);
    }
});
exports.postPushNotificationTrigger = postPushNotificationTrigger;
