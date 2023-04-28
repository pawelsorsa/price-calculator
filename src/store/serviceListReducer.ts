import { ServiceType } from "../models/models";

export const serviceListReducer = (state: ServiceType[], action: { type: "Select" | "Deselect"; service: ServiceType }) => {
    switch (action.type) {
        case 'Select': {
            return [...state, action.service];
        }
        case 'Deselect': {
            const result = state.filter(f => f !== action.service);
            return result.filter(f => f !== 'TwoDayEvent' || (f === 'TwoDayEvent' && (result.includes('Photography') || result.includes('VideoRecording'))))
        }
        default:
            return state;
    }
};