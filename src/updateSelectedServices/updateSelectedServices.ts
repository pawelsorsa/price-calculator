import { ServiceType } from "../models/models";
import { serviceListReducer } from "../store/serviceListReducer";
import { validateState } from "./validators/validateState";

export const updateSelectedServices = (
    prev: ServiceType[],
    action: { type: "Select" | "Deselect"; service: ServiceType }
): ServiceType[] => {
    if (validateState(serviceListReducer([...prev], action)).length > 0) return prev;
    return serviceListReducer([...prev], action);
}