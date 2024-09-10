import ITax from "../iTax";

class Dht implements ITax {
    shippingPriceCalculator(peso: number): number {
        let amount = 10;

        if(peso > 10){
            amount += 4.00;
        }
        return amount;
    }
}

export default Dht;