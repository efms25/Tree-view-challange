import { IAssets, ILocations } from "../types/content.type";

export function isLocation(obj: any): obj is ILocations {
    const requiredKeys: (keyof ILocations)[] = ["id", "name"];
    const optionalKeys: (keyof ILocations)[] = ["parentId", "children"];
    const objKeys = Object.keys(obj);
  
    const hasAllRequiredKeys = requiredKeys.every((key) => objKeys.includes(key));
    const hasNoExtraKeys = objKeys.every(
      (key) =>
        requiredKeys.includes(key as keyof ILocations) ||
        optionalKeys.includes(key as keyof ILocations)
    );
  
    const hasCorrectTypes =
      typeof obj.id === "string" &&
      typeof obj.name === "string" &&
      (typeof obj.parentId === "string" || !obj.parentId) &&
      (Array.isArray(obj.children)
        ? obj.children.every(
            (child:any) => isLocation(child) || isIAssets(child)
          )
        : !obj.children);
  
    return hasAllRequiredKeys && hasNoExtraKeys && hasCorrectTypes;
  }
  
  export function isIAssets(obj: any): obj is IAssets {
    const requiredKeys: (keyof IAssets)[] = ["id", "name"];
    const optionalKeys: (keyof IAssets)[] = [
      "parentId",
      "sensorId",
      "sensorType",
      "status",
      "gatewayId",
      "locationId",
      "children"
    ];
    const objKeys = Object.keys(obj);
  
    const hasAllRequiredKeys = requiredKeys.every((key) => objKeys.includes(key));
    const hasNoExtraKeys = objKeys.every(
      (key) =>
        requiredKeys.includes(key as keyof IAssets) ||
        optionalKeys.includes(key as keyof IAssets)
    );
  
    const hasCorrectTypes =
      typeof obj.id === "string" &&
      typeof obj.name === "string" &&
      (typeof obj.parentId === "string" || !obj.parentId) &&
      (typeof obj.sensorId === "string" || !obj.sensorId) &&
      (typeof obj.sensorType === "string" || !obj.sensorType) &&
      (typeof obj.status === "string" || !obj.status) &&
      (typeof obj.gatewayId === "string" || !obj.gatewayId) &&
      (typeof obj.locationId === "string" || !obj.locationId) &&
      (Array.isArray(obj.children) || !obj.children);
  
    return hasAllRequiredKeys && hasNoExtraKeys && hasCorrectTypes;
  }