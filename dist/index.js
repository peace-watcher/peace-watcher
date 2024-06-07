"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPushNotificationTrigger = exports.RealTimeDetection = void 0;
var RealtimeDetection_1 = require("./RealtimeDetection");
Object.defineProperty(exports, "RealTimeDetection", { enumerable: true, get: function () { return __importDefault(RealtimeDetection_1).default; } });
var api_1 = require("./api");
Object.defineProperty(exports, "postPushNotificationTrigger", { enumerable: true, get: function () { return api_1.postPushNotificationTrigger; } });
