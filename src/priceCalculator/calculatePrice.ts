import { ServiceType, ServiceYear } from "../models/models";
import { DiscountCalculator } from "./discountStrategies/discountCalculator";
import { PhotographyWithVideoDiscountStrategy } from "./discountStrategies/photographyWithVideoDiscountStrategy";
import { WeedingSessionDiscountStrategy } from "./discountStrategies/weedingSessionDiscountStrategy";
import { getServicePrice } from "./getServicePrice";

const calculatBasePrice = (services: ServiceType[], year: ServiceYear): number => {
    let basePrice = 0;
    services.forEach(service => basePrice += getServicePrice(service, year));
    return basePrice;
}

const calculateDiscounts = (services: ServiceType[], year: ServiceYear): number => {
    const discountCalculator = new DiscountCalculator(year);
    [new PhotographyWithVideoDiscountStrategy(), new WeedingSessionDiscountStrategy()].forEach(discount => {
        discountCalculator.setDiscountStrategy(discount);
        discountCalculator.applyDiscount(services);
    });
    return discountCalculator.totalDiscount;
}


export const calculatePrice = (services: ServiceType[], year: ServiceYear) => {
    const basePrice = calculatBasePrice(services, year);
    const discountPrice = calculateDiscounts(services, year);
    return { basePrice, finalPrice: basePrice - discountPrice }
}