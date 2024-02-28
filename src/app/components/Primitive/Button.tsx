import cx from 'classnames'

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  active?: boolean;
  size?: 'small' | 'medium' | 'large'
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, active, size="medium" }) => {
  const sizeClassMap = {
    small: 'px-4 py-1 text-sm',
    medium: 'px-8 py-2 text-md',
    large: 'px-12 py-3 text-lg',
  }

  return (
    <button
      onClick={onClick}
      className={cx(
        'px-8 py-2 outline bg-black-500 rounded-md font-bold transition-colors',
        "hover:bg-blue-600 active:bg-blue-700",
        active && "bg-blue-600",
        sizeClassMap[size],
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button;