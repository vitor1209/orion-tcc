export type CameraProps = {
    isStreamActive: boolean;
    onStart: () => void;
    onStop: () => void;
    ultimaNota: string | null;
    statusConexao: string;
};