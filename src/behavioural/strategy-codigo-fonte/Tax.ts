import ITax from "./iTax";

class Tax {
    calcula(servico: ITax, peso: number): number{
        return servico.shippingPriceCalculator(peso);
    }
}
export default Tax;