import Tax from "./Tax";
import Sedex from "./shipping/sedex";
import Dhl from "./shipping/dhl";

const tax = new Tax();

const sedex = new Sedex();
const dhl = new Dhl();

const peso = 12;

try{
    console.log("Preço Sedex:" + tax.calcula(sedex, peso))
    console.log("Preço Dhl:" + tax.calcula(dhl, peso))
} catch (error){
    console.log("Erro ao calcular o frete")
}
