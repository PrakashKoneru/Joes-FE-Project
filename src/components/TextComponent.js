import React from 'react'

export default function TextComponent({ item, index }) {
  return (
    <div style={{ marginTop: '30px' }}>
      {item.text} {index}
    </div>
  )
}