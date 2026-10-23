export type DeviceState = { temperature: number; targetTemperature: number; mode: 'caldo' | 'freddo' | 'spento'; online: boolean }

// Mock locale: in futuro questa funzione potrà essere sostituita con una chiamata al dispositivo.
export async function getDeviceState(): Promise<DeviceState> {
  return { temperature: 20.5, targetTemperature: 21, mode: 'caldo', online: true }
}

export async function setTargetTemperature(value: number): Promise<void> {
  console.info('Temperatura desiderata impostata a', value, '°C (demo)')
}
