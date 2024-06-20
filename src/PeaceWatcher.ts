import { registerCCTV } from './api';

class PeaceWatcher {
  static initialize() {
    console.log('PeaceWatcher initialized');
  }

  static async registerCCTV(cctvData: { id: string; location: string }) {
    try {
      await registerCCTV(cctvData);
      alert('CCTV가 성공적으로 등록되었습니다.');
    } catch (error) {
      console.error('CCTV 등록 중 오류 발생: ', error);
      alert('CCTV 등록에 실패했습니다.');
    }
  }

  static onDangerDetected(callback: (info: { location: string }) => void) {
    // Mock implementation for receiving danger alerts
    setTimeout(() => {
      const mockInfo = { location: 'Seoul, South Korea' };
      callback(mockInfo);
    }, 5000);
  }
}

export default PeaceWatcher;
