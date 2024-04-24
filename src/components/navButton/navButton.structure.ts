export interface INavButtonProps {
    title: string
    buttonFunction: () => void
    selectedButton: boolean
    setSelectedButton: () => void
}