import React from "react"

export default function Badge({ children, color, shape }) {
    return (
        <div className={`badge ${color} ${shape}`}>
            {children}
        </div>
    )
}