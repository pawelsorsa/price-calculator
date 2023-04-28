import { ServiceType, ServiceYear } from "../../models/models";

export interface DiscountStrategy {
    applyDiscount(items: ServiceType [], year: ServiceYear): number;
}