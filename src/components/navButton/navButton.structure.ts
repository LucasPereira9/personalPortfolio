import React from "react"

export interface INavButtonProps {
    title?: string
    buttonFunction: () => void
    selectedButton?: boolean
    icon?: React.ReactNode
}