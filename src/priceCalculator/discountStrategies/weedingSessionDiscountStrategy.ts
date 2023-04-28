import { ServiceType, ServiceYear } from "../../models/models";
import { getServicePrice } from "../getServicePrice";
import { DiscountStrategy } from "./discountStrategy";

export class WeedingSessionDiscountStrategy implements DiscountStrategy {
    applyDiscount(items: ServiceType [], year: ServiceYear): number {
        if (items.includes('WeddingSession') && (items.includes('Photography') || items.includes('VideoRecording'))) {
            switch (year) {
                case 2020:
                    return 300;
                case 2021:
                    return 300
                case 2022:
                    return items.includes('Photography') ? getServicePrice('WeddingSession', year) : 300;
                default:
                    return 0;
            }
        }
        
        return 0;
    }
}