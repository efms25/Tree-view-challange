import { ReactSVG } from "react-svg";
import { Box, Text, Icon } from "./AssetTag.styles";
import ThunderIcon from "../../assets/icons/Thunderbolt.svg";
import ExclamationCircle from "../../assets/icons/ExclamationCircle.svg";

function AssetTag({
  children,
  isActive,
  icon = null,
  isCritical,
  isSensor,
  onClick
}: any) {
  let componentIcon: string = icon;

  if (!icon) {
    if (isCritical) componentIcon = ExclamationCircle;
    if (isSensor) componentIcon = ThunderIcon;
  }

  return (
    <Box isActive={isActive} onClick={onClick}>
      {componentIcon && (
        <Icon  isActive={isActive}>
            <ReactSVG src={componentIcon} />
        </Icon>
      )}
      <Text>{children}</Text>
    </Box>
  );
}

export default AssetTag;
