import "./SeProgressBar.scss";

type ProgressBarProps = {
  value: number;
  size?: string;
  colorScheme?: string; 
  height?: number;
  isIntermediate?: boolean;
}

function SeProgressBar({ 
    value = 25, 
    size = 'md', 
    colorScheme = "black", 
    height = 10, 
    isIntermediate = false 
  }: ProgressBarProps) {

  return (
    <div 
      className="progress__bar" 
      style={{
        height: height,
      }}
    >
      <div 
        className="progress__bar-inner"
        style={{
          width: value + '%',
          backgroundColor: colorScheme
        }}
      >
      </div>
    </div>
  )
}

export default SeProgressBar