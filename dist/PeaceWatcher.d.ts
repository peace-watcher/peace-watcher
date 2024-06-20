declare class PeaceWatcher {
    static initialize(): void;
    static registerCCTV(cctvData: {
        id: string;
        location: string;
    }): Promise<void>;
    static onDangerDetected(callback: (info: {
        location: string;
    }) => void): void;
}
export default PeaceWatcher;
