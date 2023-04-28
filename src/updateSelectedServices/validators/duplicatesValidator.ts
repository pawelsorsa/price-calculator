import { ServiceType } from "../../models/models";
import { StateValidator } from "./stateValidator";

export class DuplicatesValidator implements StateValidator {
    validate(state: ServiceType []): string[] {
        const duplicates = this.findDuplicates(state);
        if (duplicates.length > 0)
            return [`${duplicates.join(', ')} is already added.`];

        return [];
    }

    private findDuplicates = (arr: ServiceType[]) => {
        return arr.reduce((d: ServiceType[], val: ServiceType, i: number) => {
          if (arr.indexOf(val) !== i && d.indexOf(val) === -1) {
            d.push(val);
          }
          return d;
        }, []);
      }
}