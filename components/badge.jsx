import React from "react"

export default function Badge({ children, color, shape }) {
    return (
        <div className={`badge ${shape} ${color}`}>
            {children}
        </div>
    )
}