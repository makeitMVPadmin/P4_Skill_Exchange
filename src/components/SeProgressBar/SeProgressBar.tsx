import "./SeProgressBar.scss";

type ProgressBarProps = {
  value: number;
  size?: string;
  colorScheme?: string; 
  height?: number;
  isIntermediate?: boolean;
}
function SeProgressBar({ value, size, colorScheme, height, isIntermediate }: ProgressBarProps) {
  return (
    <div>SeProgressBar</div>
  )
}

export default SeProgressBar