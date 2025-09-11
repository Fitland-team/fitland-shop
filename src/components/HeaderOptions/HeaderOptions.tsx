import type { ReactNode } from 'react'
import './HeaderOptions.css'

type Options = {
    title: string,
    content: string,
    children: ReactNode,
}

export default function HeaderOptions({ title, content, children }: Options) {
    return (
        <div className='header-options'>
            <div className="header-options__icon">
                {children}
            </div>
            <div className="header-options__desc">
                <h1 className="header-options__desc-title">{title}</h1>
                <span className="heaer-options__desc-content">{content}</span>
            </div>
        </div>
    )
}
