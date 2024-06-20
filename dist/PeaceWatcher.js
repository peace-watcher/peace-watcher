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
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
class PeaceWatcher {
    static initialize() {
        console.log('PeaceWatcher initialized');
    }
    static registerCCTV(cctvData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, api_1.registerCCTV)(cctvData);
                alert('CCTV가 성공적으로 등록되었습니다.');
            }
            catch (error) {
                console.error('CCTV 등록 중 오류 발생: ', error);
                alert('CCTV 등록에 실패했습니다.');
            }
        });
    }
    static onDangerDetected(callback) {
        // Mock implementation for receiving danger alerts
        setTimeout(() => {
            const mockInfo = { location: 'Seoul, South Korea' };
            callback(mockInfo);
        }, 5000);
    }
}
exports.default = PeaceWatcher;
