import { ServiceType, ServiceYear } from "../models/models";

const priceList = new Map<ServiceYear, { type: ServiceType, price: number } []>()
.set(
    2020, 
    [
        { type: 'Photography', price: 1700 },        
        { type: 'VideoRecording', price: 1700 },
        { type: 'BlurayPackage', price: 300 },
        { type: 'TwoDayEvent', price: 400 },
        { type: 'WeddingSession', price: 600 }
    ]
).set(
    2021, 
    [
        { type: 'Photography', price: 1800 },        
        { type: 'VideoRecording', price: 1800 },
        { type: 'BlurayPackage', price: 300 },
        { type: 'TwoDayEvent', price: 400 },
        { type: 'WeddingSession', price: 600 }
    ]
).set(
    2022, 
    [
        { type: 'Photography', price: 1900 },        
        { type: 'VideoRecording', price: 1900 },
        { type: 'BlurayPackage', price: 300 },
        { type: 'TwoDayEvent', price: 400 },
        { type: 'WeddingSession', price: 600 }
    ]
);

export const getServicePrice = (serviceType: ServiceType, serviceYear: ServiceYear): number => {
    return (priceList.get(serviceYear).find(f => f.type === serviceType).price) 
}