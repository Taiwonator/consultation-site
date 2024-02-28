
import cx from 'classnames'

interface ProgressBarProps {
    value: number;
    max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max }) => {
  const roundedPercentage = Math.ceil(((value / max) * 100) / 10) * 10;
  return (
    <div className="flex flex-col items-center space-y-4 px-4 font-mono">
      <div className={cx(
        'flex max-w-full mx-auto relative w-full h-2 bg-gray-200 rounded-md',
        'md:max-w-32'
      )}>
          <div
            className="absolute top-0 left-0 h-full bg-blue-600 rounded-md transition-width"
            style={{ width: `${(value / max) * 100}%` }}
          />
      </div>
          <p>{roundedPercentage}%</p>
    </div>
  );
}

export default ProgressBar;