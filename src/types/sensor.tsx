export interface Sensor {
  id: number; 
  tipoSensor: string;
  codigo: number;
  localizacao: {
    id: number;
    cultura?: string;
  };
}