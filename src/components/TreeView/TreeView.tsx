import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { fetchAssets, fetchLocations } from "../../services/contentService";
import { IAssets, ILocations } from "../../types/content.type";
import BranchView from "../BranchView/BranchView";
import { Container } from "./TreeView.styles";

function TreeView() {
  const [locations, setlocations] = useState<ILocations | null>(null);
  const [assets, setAssets] = useState<IAssets | null>(null);
  const [loading, setLoading] = useState<boolean>(false)
  const appContext  = useContext(AppContext);

  useEffect(() => {
    if(appContext && appContext.companyId) {
      const fetchLocationBranchs = async () => {
        try {
          setLoading(true)

          const locations = await fetchLocations(appContext.companyId)
          setlocations(locations)
        } catch(err) {
          console.log("fethcing branchs error!");
          throw err
        } finally {
          setLoading(false)
        }
      }
      fetchLocationBranchs();
    }
  }, [appContext?.companyId]);
  return (
    <Container>
      {appContext?.companyId && 'BranchView'}
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
