export type AlertProps = {
    openError: boolean,
    onClose: () => void,
    description: string | undefined,
    type: 'error' | 'success' | undefined,
}
