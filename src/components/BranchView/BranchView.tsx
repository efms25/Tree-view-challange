import {
  Container,
  Icon,
  TitleBox,
  ArrowButton,
  ChildrenContainer,
  ParentContaier
} from "./BranchView.styles";
import BoltIcon from "../../assets/icons/bolt.svg";
import GreenDotIcon from "../../assets/icons/Ellipse6.svg";
import GoLocationIcon from "../../assets/icons/GoLocation.svg";
import IoCubeOutline from "../../assets/icons/IoCubeOutline.svg";
import CodepenIcon from "../../assets/icons/Codepen.svg";
import DownIcon from "../../assets/icons/Down.svg";
import { ReactSVG } from "react-svg";

function BranchView({
  type,
  children,
  status,
  branchType = "",
  isActive,
  title,
  onClick,
  expanded,
  onExpandClick
}: any) {
  let branchIcon;

  switch (branchType) {
    case "location":
      branchIcon = GoLocationIcon;
      break;

    case "asset":
      branchIcon = IoCubeOutline;
      break;
    default:
      branchIcon = CodepenIcon;
      break;
  }

  return (
    <Container>
      <ParentContaier>
        {(children && children.length) ? (
          <ArrowButton className={expanded ? 'expanded' : ''} onClick={onExpandClick} type="button">
            <ReactSVG src={DownIcon} />
          </ArrowButton>
        ) : <span className="arrow-button-space"></span>}
        <TitleBox isActive={isActive} onClick={onClick}>
          <span>
            <ReactSVG src={branchIcon} />
          </span>
          <div>
            <span>{title}</span>
            {type && (
              <Icon status={status}>
                <ReactSVG src={type === "energy" ? BoltIcon : GreenDotIcon} />
              </Icon>
            )}
          </div>
        </TitleBox>
      </ParentContaier>
      <ChildrenContainer expanded={expanded}>
        { children && <span className="marker-line"/>}
        <div>{children}</div>
      </ChildrenContainer>
    </Container>
  );
}

export default BranchView;
