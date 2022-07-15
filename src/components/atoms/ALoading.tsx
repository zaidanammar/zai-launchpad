import  { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

interface Props {
  color?: string;
  height?: number;
  width?: number;
}

const ALoading: React.FC<Props> = ({
  color = "#f95997",
  height = 20,
  width = 20,
}) => {
  return <TailSpin color={color} height={height} width={width} />;
};

export default ALoading;
