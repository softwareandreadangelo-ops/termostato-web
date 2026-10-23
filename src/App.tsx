import { useEffect, useState } from 'react'
import { getDeviceState, setTargetTemperature, type DeviceState } from './device'

export default function App() {
  const [device, setDevice] = useState<DeviceState | null>(null)
  useEffect(() => { getDeviceState().then(setDevice) }, [])
  const changeTarget = async (delta: number) => {
    if (!device) return
    const targetTemperature = Math.min(30, Math.max(5, device.targetTemperature + delta))
    await setTargetTemperature(targetTemperature)
    setDevice({ ...device, targetTemperature })
  }

  if (!device) return <main className="page"><p>Connessione al termostato…</p></main>
  return <main className="page">
    <header className="top"><div className="brand"><span className="brand-icon">⌂</span><span>CASA<span className="muted"> / CLIMA</span></span></div><span className="online"><i /> {device.online ? 'ONLINE' : 'OFFLINE'}</span></header>
    <section className="intro"><p className="eyebrow">CONTROLLO AMBIENTE</p><h1>Buonasera, Alex</h1><p>Il comfort di casa, sotto controllo.</p></section>
    <section className="thermostat card"><div className="card-head"><div><p className="eyebrow">SOGGIORNO</p><h2>Termostato principale</h2></div><span className="dots">•••</span></div>
      <div className="dial"><div className="dial-inner"><span className="current">{device.temperature.toFixed(1)}<small>°C</small></span><span className="caption">TEMPERATURA ATTUALE</span><div className="divider"/><span className="desired-label">TEMPERATURA DESIDERATA</span><div className="controls"><button onClick={() => changeTarget(-0.5)} aria-label="Diminuisci temperatura">−</button><strong>{device.targetTemperature.toFixed(1)}°</strong><button onClick={() => changeTarget(0.5)} aria-label="Aumenta temperatura">+</button></div></div></div>
      <div className="mode"><span className="flame">♨</span><div><strong>Riscaldamento</strong><span>Attivo · modalità comfort</span></div><span className="switch"/></div>
    </section>
    <section className="bottom-grid"><article className="card info"><p className="eyebrow">QUALITÀ DELL’ARIA</p><div className="info-value">Ottima <span>●</span></div><p>Umidità relativa <b>46%</b></p><div className="bar"><i/></div><small>Valori ideali per il tuo benessere</small></article><article className="card info"><p className="eyebrow">PROGRAMMA</p><div className="info-value">Comfort <span className="sun">☼</span></div><p>Prossimo cambio <b>22:30</b></p><small>Passaggio alla modalità notte</small></article></section>
    <footer>TERMOSTATO WEB <span>VERSIONE 0.1 · DEMO</span></footer>
  </main>
}
