"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCCTV = exports.postPushNotificationTrigger = exports.PeaceWatcher = exports.RealTimeDetection = void 0;
var RealtimeDetection_1 = require("./RealtimeDetection");
Object.defineProperty(exports, "RealTimeDetection", { enumerable: true, get: function () { return __importDefault(RealtimeDetection_1).default; } });
var PeaceWatcher_1 = require("./PeaceWatcher");
Object.defineProperty(exports, "PeaceWatcher", { enumerable: true, get: function () { return __importDefault(PeaceWatcher_1).default; } });
var api_1 = require("./api");
Object.defineProperty(exports, "postPushNotificationTrigger", { enumerable: true, get: function () { return api_1.postPushNotificationTrigger; } });
Object.defineProperty(exports, "registerCCTV", { enumerable: true, get: function () { return api_1.registerCCTV; } });
