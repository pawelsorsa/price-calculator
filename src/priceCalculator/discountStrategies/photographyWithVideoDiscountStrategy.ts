import { ServiceType, ServiceYear } from "../../models/models";
import { getServicePrice } from "../getServicePrice";
import { DiscountStrategy } from "./discountStrategy";

export class PhotographyWithVideoDiscountStrategy implements DiscountStrategy {
    applyDiscount(items: ServiceType [], year: ServiceYear): number {
        if (items.includes('VideoRecording') && items.includes('Photography')) {
            switch (year) {
                case 2020:
                    return this.getBasePrice(year) - 2200;
                case 2021:
                    return this.getBasePrice(year) - 2300;
                case 2022:
                    return this.getBasePrice(year) - 2500;
                default:
                    return 0;
            }
        }

        return 0;        
    }

    private getBasePrice = (year: ServiceYear): number =>
        getServicePrice('VideoRecording', year) + getServicePrice('Photography', year);
}