import { ServiceType } from "../../models/models";
import { StateValidator } from "./stateValidator";

export class BlueRayPackageValidator implements StateValidator {
    validate(state: ServiceType []): string[] {
        if (state.indexOf('BlurayPackage') !== -1 && state.indexOf('VideoRecording') === -1)
        return ['BlueRayPackage is not applicable because VideoRecording is not selected.'];

        return [];
    }
}