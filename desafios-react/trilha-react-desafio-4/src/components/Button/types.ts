export interface IButtonProps {
    title?: string,
    disabled?: boolean,
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

