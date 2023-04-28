import { ServiceType } from "../../models/models";

export interface StateValidator {
    validate(state: ServiceType []): string [];
}