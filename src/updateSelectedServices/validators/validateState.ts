import { ServiceType } from "../../models/models";
import { BlueRayPackageValidator } from "./blueRayPackageValidator";
import { DuplicatesValidator } from "./duplicatesValidator";
import { TwoDayEventValidator } from "./twoDayEventValidator";

export const validateState = (state: ServiceType[]): string[] => {
    const validationErrors: string[] = [];
    [
        new BlueRayPackageValidator(),
        new TwoDayEventValidator(),
        new DuplicatesValidator(),
    ].forEach(v => validationErrors.push(...v.validate(state)));
    return validationErrors;
}