

type HorizontalPosition = 'left' | 'center' | 'right'

type VerticcalPosition = 'top' | 'center' | 'bottom'



type ToastProps = {
    position: `${HorizontalPosition}-${VerticcalPosition}`
}

const Toast = ({position} : ToastProps) => {
    return(
        <div>
            {position}
        </div>
    )
}

export default Toast;