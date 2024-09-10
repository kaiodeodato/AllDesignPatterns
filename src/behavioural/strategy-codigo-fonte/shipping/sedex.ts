import ITax from "../iTax";

class Sedex implements ITax {
    shippingPriceCalculator(peso: number): number {
        let amount = 10;

        if(peso > 10){
            amount += 1.00;
        }
        return amount;
    }
}

export default Sedex;