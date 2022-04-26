import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './assets/styles/common/index.less'

function initFontSize() {
  const doc = document.documentElement
  const width = doc.clientWidth
  const ratio = width / 375
  let fontSize = 75 * ratio
  if (fontSize > 150) fontSize = 150
  doc.style.fontSize = fontSize + 'px'
}
initFontSize()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
