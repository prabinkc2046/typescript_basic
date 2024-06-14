import React from 'react'
import { StyledComponentProp } from './StyledComponent.types'
export default function StyledComponent({style} : StyledComponentProp) {
  return (
    <div >
        <header>
            Header goes here
        </header>

        <main>
            main part goes here
        </main>

        <footer>
            footer goes here
        </footer>
    </div>
  )
}
