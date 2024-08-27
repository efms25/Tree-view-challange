import BranchView from "../BranchView/BranchView";
import { Container } from "./TreeView.styles";

function TreeView() {
  return (
    <Container>
      <BranchView title="MOTORS H120 - Stage 3" branchType="location">
        <BranchView title="MOTORS 111">
          <BranchView title="MOTORS 111"></BranchView>
          <BranchView title="MOTORS 111"></BranchView>
          <BranchView title="MOTORS 111"></BranchView>
        </BranchView>
        <BranchView title="MOTORS 111"></BranchView>
        <BranchView title="MOTORS 111"></BranchView>
      </BranchView>
    </Container>
  );
}

export default TreeView;
