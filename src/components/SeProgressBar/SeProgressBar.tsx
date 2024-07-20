import "./SeProgressBar.scss";

type ProgressBarProps = {
  value: number;
  colorScheme?: string; 
  height?: number;
}

function SeProgressBar({ 
    value = 25,
    colorScheme = "black", 
    height = 10, 
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