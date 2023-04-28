import { ServiceType } from "../../models/models";
import { StateValidator } from "./stateValidator";

export class TwoDayEventValidator implements StateValidator {
    validate(state: ServiceType[]): string[] {
        if (state.indexOf('TwoDayEvent') !== -1 &&
            (state.indexOf('VideoRecording') === -1 && state.indexOf('Photography') === -1))
            return ['TwoDayEvent is not applicable because VideoRecording or Photography is not selected.'];

        return [];
    }
}