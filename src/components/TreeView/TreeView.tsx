import { produce } from "immer";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { fetchAssets, fetchLocations } from "../../services/contentService";
import { IAssets, ILocations } from "../../types/content.type";
import { isLocation } from "../../utils/handleInstances";
import BranchView from "../BranchView/BranchView";
import { Container } from "./TreeView.styles";

function TreeView() {
  const [branchs, setBranchs] = useState<Array<ILocations | IAssets>>([]);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState<boolean>(false);
  const appContext = useContext(AppContext);

  useEffect(() => {
    if (appContext && appContext.companyId) {
      const fetchBranchs = async () => {
        try {
          setLoading(true);
          const locations: Array<ILocations> = await fetchLocations(
            appContext.companyId
          );
          const assets: Array<IAssets> = await fetchAssets(
            appContext.companyId
          );

          //Create a map of modes with its childrens
          const childrenBranch = (data: Array<ILocations | IAssets>) => {
            const branchMap = new Map<string, ILocations | IAssets>();
            data.forEach((node) => {
              if (node.parentId) {
                if (!branchMap.has(node.parentId)) {
                  branchMap.set(node.parentId, { ...node, children: [] });
                }
                branchMap.get(node.parentId)!.children!.push(node);
              } else if (!node.parentId && !branchMap.has(node.id)) {
                branchMap.set(node.id, { ...node, children: [] });
              }
            });
            return branchMap;
          };

          //Generate the map of the assets and the locations
          //with its childrens
          const childrenLocations = childrenBranch(locations);
          const childrenAssets = childrenBranch(assets);

          //Function to return an entire tree of a given root parent
          const buildTree = (
            node: ILocations | IAssets,
            childrenList: Map<string, ILocations | IAssets>,
            isLocation: boolean = false,
            assetTrees: Array<IAssets> | null = null
          ): ILocations | IAssets => {
            const branch = childrenList.get(node.id);
            let children =
              branch && branch.children?.length
                ? branch.children!.map((c) => buildTree(c, childrenList))
                : [];

            if (isLocation && assetTrees) {
              const assetsChildren = assetTrees.filter(
                (asset) => asset.locationId === node.id
              );
              children = [...children, ...assetsChildren];
            }

            return {
              ...node,
              children,
            };
          };

          const assetsTree = assets
            .filter((f) => !f.parentId)
            .map((node) => {
              const asset = childrenAssets.get(node.id);
              return {
                ...node,
                children: asset
                  ? asset.children!.map((n) => buildTree(n, childrenAssets))
                  : [],
              };
            });

          const locationTree = locations
            .filter((f) => !f.parentId)
            .map((node) => {
              const location = childrenLocations.get(node.id);
              let children = location
                ? location.children!.map((n) =>
                    buildTree(n, childrenLocations, true, assetsTree)
                  )
                : [];
              if (assetsTree) {
                const assetsChildren = assetsTree.filter(
                  (asset) => asset.locationId === node.id
                );
                children = [...children, ...assetsChildren];
              }

              return {
                ...node,
                children,
              };
            });

          setBranchs([
            ...locationTree,
            ...assetsTree.filter((f) => !f.locationId),
          ]);
          // console.log(assetsTree, 'tree assets')
          // console.log(childrenAssets, 'childrenAssets')
          // console.log(childrenLocations, 'childrenLocations')
          console.log([...locations], "[ ...locations]");
          // console.log([...assets], '[...assets]')
        } catch (err) {
          console.log("fethcing branchs error!");
          throw err;
        } finally {
          setLoading(false);
        }
      };
      fetchBranchs();
    }
  }, [appContext?.companyId]);

  const handleExpandToggle = (node: string) => {
    setExpanded(
      produce((draft: any) => {
        if (draft.has(node)) {
          draft.delete(node);
          return;
        }
        draft.add(node);
      })
    );
  };

  const handleSelectBranch = (node: ILocations | IAssets) => {
    setActiveNode(node?.id);
    appContext!.setSelectedBranch(node);
  };

  const renderTree = (node: ILocations | IAssets) => {
    let branchType: string = "";

    if (isLocation(node)) {
      branchType = "location";
    } else if (node.children && node.children.length) {
      branchType = "asset";
    }

    return (
      <BranchView
        key={node.id}
        title={node.name}
        type={(node as IAssets).sensorType}
        status={(node as IAssets).status}
        isActive={activeNode === node.id}
        expanded={expanded.has(node.id)}
        onExpandClick={() => handleExpandToggle(node.id)}
        branchType={branchType}
        onClick={() => handleSelectBranch(node)}
      >
        {node.children && node.children.map((n) => renderTree(n))}
      </BranchView>
    );
  };
  return (
    <Container>
      <div>{appContext?.companyId && branchs.map((n) => renderTree(n))}</div>
    </Container>
  );
}

export default TreeView;
