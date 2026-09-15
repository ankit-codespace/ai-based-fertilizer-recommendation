import { SoilTelemetry } from '../types';

let simulatedSoilMoisture = 28.5;
let simulatedTemperature = 31.4;
let simulatedHumidity = 66.0;

export async function fetchESP32Telemetry(deviceIp?: string): Promise<SoilTelemetry> {
  if (deviceIp && deviceIp.trim() !== '') {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const res = await fetch(`http://${deviceIp}/telemetry`, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) {
        const json = await res.json();
        return {
          moisturePercent: json.soil_moisture ?? 30,
          temperatureC: json.temperature ?? 30,
          humidityPercent: json.humidity ?? 65,
          timestamp: new Date().toLocaleTimeString(),
          isSimulated: false
        };
      }
    } catch {
      // Fallback to simulation if probe is unreachable
    }
  }

  // Smooth realistic fluctuating simulation
  simulatedSoilMoisture = Math.max(10, Math.min(95, simulatedSoilMoisture + (Math.random() * 2 - 1)));
  simulatedTemperature = Math.max(18, Math.min(42, simulatedTemperature + (Math.random() * 0.4 - 0.2)));
  simulatedHumidity = Math.max(30, Math.min(90, simulatedHumidity + (Math.random() * 1.5 - 0.75)));

  return {
    moisturePercent: Number(simulatedSoilMoisture.toFixed(1)),
    temperatureC: Number(simulatedTemperature.toFixed(1)),
    humidityPercent: Number(simulatedHumidity.toFixed(1)),
    timestamp: new Date().toLocaleTimeString(),
    isSimulated: true
  };
}

export async function captureESP32Image(deviceIp: string): Promise<string> {
  const res = await fetch(`http://${deviceIp}/capture`);
  if (!res.ok) throw new Error('ESP32-CAM capture failed');
  const blob = await res.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
