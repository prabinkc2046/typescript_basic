import React from 'react'

type PageLayoutProp = {
    header: React.ReactNode,
    footer: React.ReactNode,
    children?: React.ReactNode,
}
export default function PageLayout({header, footer, children}: PageLayoutProp) {
  return (
    <div>
        <header>
            {header}
        </header>
        
        <main>
            {children}
        </main>
        
        <footer>
            {footer}
        </footer>
    </div>
  )
}
