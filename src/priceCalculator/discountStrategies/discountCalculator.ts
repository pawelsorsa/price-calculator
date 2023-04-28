import { ServiceType, ServiceYear } from "../../models/models";
import { DiscountStrategy } from "./discountStrategy";

export class DiscountCalculator {
    private strategy: DiscountStrategy;
    private year: ServiceYear
    totalDiscount = 0;

    constructor(year: ServiceYear) {
        this.year = year;        
    }

    setDiscountStrategy(strategy: DiscountStrategy) {
        this.strategy = strategy;
    }

    applyDiscount(items: ServiceType[]) {
        this.totalDiscount += this.strategy.applyDiscount(items, this.year);
    }
}