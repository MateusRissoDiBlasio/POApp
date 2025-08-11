/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { useEffect, useState, useRef } from 'react'
import '../css/index.css'
import '../css/App.css'
import '../css/gears-animationnew.css'
import '../css/responsive.css'
import workers from '../imgs/workers-logo.png'
// import LoginButton from './components/LoginButton'
// import LogoutButton from './components/LogoutButton'
export const POapp = () => {

const [input1, setInput1] = useState('');
const [input2, setInput2] = useState('');
const [input3, setInput3] = useState('');
const [input4, setInput4] = useState('');
const [input5, setInput5] = useState('');
const [load, setLoad] = useState(false);


const [debouncedValue1, setDebouncedValue1] = useState('');
const [debouncedValue2, setDebouncedValue2] = useState('');
const [debouncedValue3, setDebouncedValue3] = useState('');
const [debouncedValue4, setDebouncedValue4] = useState('');
const [debouncedValue5, setDebouncedValue5] = useState('');

const timeoutRef = useRef(null);

const handleChange1 = (event) => {
    // setInput1(event.target.value);
    const newValue = parseInt(event.target.value, 10)
    setInput1(Math.min(Math.max(newValue, 0), 10000));
    setLoad(true);
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
      timeoutRef.current = setTimeout(() => {
        
        setDebouncedValue1(event.target.value);
        // Perform your action here, e.g., make an API call
        // console.log('Debounced value:', event.target.value);
      }, 300); // 500ms debounce delay
}

useEffect(() => {
        // Cleanup on unmount
        return () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        };
}, []);


const handleChange2 = (event) => {
    // setInput2(event.target.value);
    const newValue2 = parseInt(event.target.value, 10)
    setInput2(Math.min(Math.max(newValue2, 0), 5000));
    setLoad(true);
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
      timeoutRef.current = setTimeout(() => {
        
        setDebouncedValue2(event.target.value);
        // Perform your action here, e.g., make an API call
        // console.log('Debounced value:', event.target.value);
      }, 300); // 500ms debounce delay
}

useEffect(() => {
        // Cleanup on unmount
        return () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        };
}, []);


const handleChange3 = (event) => {
    // setInput3(event.target.value);
    const newValue3 = parseInt(event.target.value, 10)
    setInput3(Math.min(Math.max(newValue3, 0), 10000));
    setLoad(true);
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
      timeoutRef.current = setTimeout(() => {
        setDebouncedValue3(event.target.value);
        // Perform your action here, e.g., make an API call
        // console.log('Debounced value:', event.target.value);
      }, 300); // 500ms debounce delay
}

useEffect(() => {
        // Cleanup on unmount
        return () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        };
}, []);


const handleChange4 = (event) => {
    // setInput4(event.target.value);
    const newValue4 = parseInt(event.target.value, 10)
    setInput4(Math.min(Math.max(newValue4, 0), 10000));
    setLoad(true);
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
      timeoutRef.current = setTimeout(() => {
        
        setDebouncedValue4(event.target.value);
        // Perform your action here, e.g., make an API call
        // console.log('Debounced value:', event.target.value);
      }, 300); // 500ms debounce delay
}

useEffect(() => {
        // Cleanup on unmount
        return () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        };
}, []);


const handleChange5 = (event) => {
    // setInput4(event.target.value);
    const newValue4 = parseInt(event.target.value, 10)
    setInput5(Math.min(Math.max(newValue4, 0), 200));
    setLoad(true);
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
      timeoutRef.current = setTimeout(() => {
        
        setDebouncedValue5(event.target.value);
        // Perform your action here, e.g., make an API call
        // console.log('Debounced value:', event.target.value);
      }, 300); // 500ms debounce delay
}

useEffect(() => {
        // Cleanup on unmount
        return () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        };
}, []);

const [sumInput3Input4, setSumInput3Input4] = useState(0);
const [sumR1, setSumR1] = useState(0);
const [sumR2, setSumR2] = useState(0);
const [sumR3, setSumR3] = useState(0);
const [sumColaboradores, setSumColaboradores] = useState(0);
const [sumProdutividade, setSumProdutividade] = useState(0);

const sumR1Arrendondado = sumR1.toPrecision(2);
const sumR2Arrendondado = sumR2.toPrecision(2);
const sumR3Arrendondado = sumR3.toPrecision(2);
const sumColaboradoresArrendondado = sumColaboradores.toPrecision(2);
const sumProdutividadeArredondado = sumProdutividade.toPrecision(3);






let prePreparo = [{Triturador_pesagem: "recheios-frios", Tempo:10*60, Rendimento:25, percentual:0}, 
                  {Triturador_pesagem: "pure-de-batata", Tempo:5*60, Rendimento:21, percentual:0},
                  {Triturador_pesagem: "aipim", Tempo:30*60, Rendimento:95, percentual:0},
                  {Triturador_pesagem: "soja", Tempo:1800, Rendimento:14*5, percentual:0},
                  {Triturador_pesagem: "recheios-quentes", Tempo:3000, Rendimento:30, percentual:0},
                  {Quantidade_De_Funcionarios_Necessarios:0},
                  {Masseiras_salgadinhos: "massa-salgadinhos", Tempo:20*60, Rendimento:137, percentual:0},
                  {Masseiras_salgadinhos: "abrir-arrumar-massa", Tempo: 8*2*60, Rendimento:137, percentual:0},
                  {Masseiras_salgadinhos: "massa-para-churros", Tempo: 1200, Rendimento:165, percentual:0},
                  {Masseiras_salgadinhos: "massa-de-aipim", Tempo: 3600, Rendimento:140, percentual:0}, 
                  {Masseiras_salgadinhos: "massa-de-quibe", Tempo: 90*60, Rendimento:84, percentual:0},
                  {Quantidade_De_Funcionarios_Necessarios:0}];

// console.log(prePreparo);

let processoDeAcabamento = [{AcabamentoLancheFritoAssado: "tempo-de-ultracongelador", Tempo:7200, Rendimento:1080/20, percentual:0}, 
                            {AcabamentoLancheFritoAssado: "transbordo-na-embaladora", Tempo:300, Rendimento:1080/20, percentual:0},
                            {AcabamentoLancheFritoAssado: "tempo-de-embalagem", Tempo:3*(13*60+20), Rendimento:1080/20, percentual:0},
                            {AcabamentoLancheFritoAssado: "informacao-de-datacao-e-lote", Tempo:(60*21+12)*2, Rendimento:1080/20, percentual:0},
                            {AcabamentoLancheFritoAssado: "transporte-ate-camaras", Tempo:180, Rendimento:1080, percentual:0},
                            {Quantidade_De_Funcionarios_Necessarios:0},
                            {AcabamentoSalgadinhos4KG: "tempo-de-ultracongelador", Tempo:6000, Rendimento:4*22, percentual:0},
                            {AcabamentoSalgadinhos4KG: "transbordo-na-embaladora", Tempo: 400, Rendimento:4*22, percentual:0},
                            {AcabamentoSalgadinhos4KG: "tempo-de-embalagem", Tempo: 3*10*60+25, Rendimento:4*22, percentual:0},
                            {AcabamentoSalgadinhos4KG: "transporte-ate-camaras", Tempo: 60*4, Rendimento:4*22, percentual:0}, 
                            {Quantidade_De_Funcionarios_Necessarios:0} ];


let Empadas = [ {SetorDeEmpadas: "setup-de-maquinas", Tempo:1200, Rendimento:38*20, percentual:0}, 
                {SetorDeEmpadas: "bater-massa-empada", Tempo:60*10, Rendimento:38*20, percentual:0},
                {SetorDeEmpadas: "pesagem-dos-ingredientes", Tempo:200, Rendimento:38*20, percentual:0},
                {SetorDeEmpadas: "preencher-forminhas (maquina)", Tempo:80, Rendimento:1*20, percentual:0},
                {SetorDeEmpadas: "limpeza-de-excesso-de-massa", Tempo:110, Rendimento:1*20, percentual:0},
                {SetorDeEmpadas: "rechear-empada", Tempo:320, Rendimento:1*20, percentual:0},
                {SetorDeEmpadas: "forrar-a-massa (maquina)", Tempo: 80, Rendimento:1*20, percentual:0},
                {SetorDeEmpadas: "fechar massa", Tempo: 130, Rendimento:1*20, percentual:0},
                {SetorDeEmpadas: "embalar empadas", Tempo: 120, Rendimento:1*20, percentual:0}, 
                {Quantidade_De_Funcionarios_Necessarios:0} ];

let SalgadinhosBralyxSuper = [{SalgadinhosBralyxSuper: "setup-de-maquinas", Tempo:900, Rendimento:200, percentual:0}, 
                              {SalgadinhosBralyxSuper: "tempo-de-processo", Tempo:3600, Rendimento:20000*0.017, percentual:0},
                              {SalgadinhosBralyxSuper: "arrumar-nas-placas", Tempo:3600, Rendimento:340, percentual:0},
                              {SalgadinhosBralyxSuper: "transporte-ate-o-ultra", Tempo:2*3*60, Rendimento:22*4, percentual:0},
                              {Quantidade_De_Funcionarios_Necessarios:0} ];    

let Lanche140gBralyxDuploRecheio = [{Lanche140gBralyxDuploRecheio: "setup-de-maquinas", Tempo:900, Rendimento:20*50, percentual:0}, 
                                    {Lanche140gBralyxDuploRecheio: "tempo-de-processo", Tempo:2*38, Rendimento:10, percentual:0},
                                    {Lanche140gBralyxDuploRecheio: "arrumar-nas-placas", Tempo:3*32, Rendimento:10, percentual:0},
                                    {Lanche140gBralyxDuploRecheio: "transporte-ate-o-ultra", Tempo:180, Rendimento:1080, percentual:0},
                                    {Quantidade_De_Funcionarios_Necessarios:0} ];  


let ProducaoSalgadoLancheForno = [{SalgadoLancheForno: "pesagem-ingredientes+masseira", Tempo:20*60, Rendimento:67*15, percentual:0}, 
                                  {SalgadoLancheForno: "corte-e-pesagem-da-massa", Tempo:3*20*60, Rendimento:67*15, percentual:0},
                                  {SalgadoLancheForno: "bolear+placas", Tempo:3*41*60, Rendimento:67*15, percentual:0},
                                  {SalgadoLancheForno: "montagem-do-produto", Tempo:12780, Rendimento:67*15, percentual:0},
                                  {SalgadoLancheForno: "transporte-ate-o-ultra", Tempo:60*3, Rendimento:67*15, percentual:0},
                                  {Quantidade_De_Funcionarios_Necessarios:0} ];  


if(input1 !== 0 || input2 !== 0 || input3 !== 0 || input4 !== 0 ){

// PRE PREPARO

prePreparo[0].percentual = 0.71*(debouncedValue2*0.003*60*prePreparo[0].Tempo/prePreparo[0].Rendimento/(8.5*3600))+0.14*(debouncedValue1*0.04*prePreparo[0].Tempo/prePreparo[0].Rendimento/(8.5*3600))+0.54*debouncedValue3*0.4*prePreparo[0].Tempo/prePreparo[0].Rendimento/(8.5*3600)+0.15*0.4*prePreparo[0].Tempo/prePreparo[0].Rendimento/(8.5*3600);

prePreparo[1].percentual = 0.01*debouncedValue2*0.01*100*prePreparo[1].Tempo/prePreparo[1].Rendimento/(8.5*3600);

prePreparo[2].percentual = 0.002*debouncedValue2*0.013*60*prePreparo[2].Tempo/prePreparo[2].Rendimento/(8.5*3600);

prePreparo[3].percentual = 0.23*0.17*debouncedValue2*0.03*60*prePreparo[3].Tempo/prePreparo[3].Rendimento/(8.5*3600)+0.16*0.17*debouncedValue2*0.16*60*prePreparo[3].Tempo/prePreparo[3].Rendimento/(8.5*3600);

prePreparo[4].percentual = 0.29*(debouncedValue2*0.003*60*prePreparo[4].Tempo/prePreparo[4].Rendimento/(8.5*3600))+0.86*(debouncedValue1*0.04*prePreparo[4].Tempo/prePreparo[4].Rendimento/(8.5*3600))+0.46*debouncedValue3*0.4*prePreparo[4].Tempo/prePreparo[4].Rendimento/(8.5*3600)+0.85*0.4*prePreparo[4].Tempo/prePreparo[4].Rendimento/(8.5*3600);

prePreparo[5].Quantidade_De_Funcionarios_Necessarios = prePreparo[0].percentual+prePreparo[1].percentual+prePreparo[2].percentual+prePreparo[3].percentual+prePreparo[4].percentual;

prePreparo[6].percentual = 0.76*debouncedValue2*0.013*60*prePreparo[6].Tempo/prePreparo[6].Rendimento/(8.5*3600)+0.87*debouncedValue3*0.04*prePreparo[6].Tempo/prePreparo[6].Rendimento/(8.5*3600);

prePreparo[7].percentual = 0.76*debouncedValue2*0.013*60*prePreparo[7].Tempo/prePreparo[7].Rendimento/(8.5*3600)+0.87*debouncedValue3*0.04*prePreparo[7].Tempo/prePreparo[7].Rendimento/(8.5*3600);

prePreparo[8].percentual = 0.04*debouncedValue2*0.013*60*prePreparo[8].Tempo/prePreparo[8].Rendimento/(8.5*3600);

prePreparo[9].percentual = 0.02*debouncedValue2*0.013*60*prePreparo[9].Tempo/prePreparo[9].Rendimento/(8.5*3600);

prePreparo[10].percentual = 0.18*debouncedValue2*0.018*60*prePreparo[10].Tempo/prePreparo[10].Rendimento/(8.5*3600);

prePreparo[11].Quantidade_De_Funcionarios_Necessarios = prePreparo[6].percentual+prePreparo[7].percentual+prePreparo[8].percentual+prePreparo[9].percentual+prePreparo[10].percentual;


// PROCESSO DE ACABAMENTO

processoDeAcabamento[0].percentual = (processoDeAcabamento[0].Rendimento/processoDeAcabamento[0].Tempo)*(sumInput3Input4)/(8.5*3600);

processoDeAcabamento[1].percentual = (processoDeAcabamento[1].Rendimento/processoDeAcabamento[1].Tempo)*(sumInput3Input4)/(8.5*3600);

processoDeAcabamento[2].percentual = (processoDeAcabamento[2].Rendimento/processoDeAcabamento[2].Tempo)*(sumInput3Input4)/(8.5*3600);

processoDeAcabamento[3].percentual = (processoDeAcabamento[3].Rendimento/processoDeAcabamento[3].Tempo)*(sumInput3Input4)/(8.5*3600);

processoDeAcabamento[4].percentual = (processoDeAcabamento[4].Rendimento/processoDeAcabamento[4].Tempo)*(sumInput3Input4)/(8.5*3600);

processoDeAcabamento[5].Quantidade_De_Funcionarios_Necessarios = processoDeAcabamento[0].percentual + processoDeAcabamento[1].percentual + processoDeAcabamento[2].percentual + processoDeAcabamento[3].percentual + processoDeAcabamento[4].percentual


processoDeAcabamento[6].percentual = processoDeAcabamento[6].Rendimento/processoDeAcabamento[6].Tempo*debouncedValue2/(8.5*3600);

processoDeAcabamento[7].percentual = processoDeAcabamento[7].Rendimento/processoDeAcabamento[7].Tempo*debouncedValue2/(8.5*3600);

processoDeAcabamento[8].percentual = processoDeAcabamento[8].Rendimento/processoDeAcabamento[8].Tempo*debouncedValue2/(8.5*3600);

processoDeAcabamento[9].percentual = processoDeAcabamento[9].Rendimento/processoDeAcabamento[9].Tempo*debouncedValue2/(8.5*3600);

processoDeAcabamento[10].Quantidade_De_Funcionarios_Necessarios = processoDeAcabamento[6].percentual + processoDeAcabamento[7].percentual + processoDeAcabamento[8].percentual + processoDeAcabamento[9].percentual


// EMPADAS

Empadas[0].percentual = Empadas[0].Tempo/Empadas[0].Rendimento*debouncedValue1/(8.5*3600);
Empadas[1].percentual = Empadas[1].Tempo/Empadas[1].Rendimento*debouncedValue1/(8.5*3600);
Empadas[2].percentual = Empadas[2].Tempo/Empadas[2].Rendimento*debouncedValue1/(8.5*3600);
Empadas[3].percentual = Empadas[3].Tempo/Empadas[3].Rendimento*debouncedValue1/(8.5*3600);
Empadas[4].percentual = Empadas[4].Tempo/Empadas[4].Rendimento*debouncedValue1/(8.5*3600);
Empadas[5].percentual = Empadas[5].Tempo/Empadas[5].Rendimento*debouncedValue1/(8.5*3600);
Empadas[6].percentual = Empadas[6].Tempo/Empadas[6].Rendimento*debouncedValue1/(8.5*3600);
Empadas[7].percentual = Empadas[7].Tempo/Empadas[7].Rendimento*debouncedValue1/(8.5*3600);
Empadas[8].percentual = Empadas[8].Tempo/Empadas[8].Rendimento*debouncedValue1/(8.5*3600);
Empadas[9].Quantidade_De_Funcionarios_Necessarios = Empadas[0].percentual+Empadas[1].percentual+Empadas[2].percentual+Empadas[3].percentual+Empadas[4].percentual+Empadas[5].percentual+Empadas[6].percentual+Empadas[7].percentual+Empadas[8].percentual;

// SALGADINHOS BRALYX SUPER

SalgadinhosBralyxSuper[0].percentual = SalgadinhosBralyxSuper[0].Tempo/SalgadinhosBralyxSuper[0].Rendimento*debouncedValue2/(8.5*3600);
SalgadinhosBralyxSuper[1].percentual = SalgadinhosBralyxSuper[1].Tempo/SalgadinhosBralyxSuper[1].Rendimento*debouncedValue2/(8.5*3600);
SalgadinhosBralyxSuper[2].percentual = SalgadinhosBralyxSuper[2].Tempo/SalgadinhosBralyxSuper[2].Rendimento*debouncedValue2/(8.5*3600);
SalgadinhosBralyxSuper[3].percentual = SalgadinhosBralyxSuper[3].Tempo/SalgadinhosBralyxSuper[3].Rendimento*debouncedValue2/(8.5*3600);

SalgadinhosBralyxSuper[4].Quantidade_De_Funcionarios_Necessarios = SalgadinhosBralyxSuper[0].percentual + SalgadinhosBralyxSuper[1].percentual + SalgadinhosBralyxSuper[2].percentual + SalgadinhosBralyxSuper[3].percentual;


// LANCHE BRALYX DUPLO RECHEIO

Lanche140gBralyxDuploRecheio[0].percentual = Lanche140gBralyxDuploRecheio[0].Tempo/Lanche140gBralyxDuploRecheio[0].Rendimento*debouncedValue3/(3600*8.5);
Lanche140gBralyxDuploRecheio[1].percentual = Lanche140gBralyxDuploRecheio[1].Tempo/Lanche140gBralyxDuploRecheio[1].Rendimento*debouncedValue3/(3600*8.5);
Lanche140gBralyxDuploRecheio[2].percentual = Lanche140gBralyxDuploRecheio[2].Tempo/Lanche140gBralyxDuploRecheio[2].Rendimento*debouncedValue3/(3600*8.5);
Lanche140gBralyxDuploRecheio[3].percentual = Lanche140gBralyxDuploRecheio[3].Tempo/Lanche140gBralyxDuploRecheio[3].Rendimento*debouncedValue3/(3600*8.5);

Lanche140gBralyxDuploRecheio[4].Quantidade_De_Funcionarios_Necessarios = Lanche140gBralyxDuploRecheio[0].percentual + Lanche140gBralyxDuploRecheio[1].percentual + Lanche140gBralyxDuploRecheio[2].percentual + Lanche140gBralyxDuploRecheio[3].percentual;


// SALGADO LANCHE FORNO

ProducaoSalgadoLancheForno[0].percentual = ProducaoSalgadoLancheForno[0].Tempo/ProducaoSalgadoLancheForno[0].Rendimento*debouncedValue4/(8.5*3600);
ProducaoSalgadoLancheForno[1].percentual = ProducaoSalgadoLancheForno[1].Tempo/ProducaoSalgadoLancheForno[1].Rendimento*debouncedValue4/(8.5*3600);
ProducaoSalgadoLancheForno[2].percentual = ProducaoSalgadoLancheForno[2].Tempo/ProducaoSalgadoLancheForno[2].Rendimento*debouncedValue4/(8.5*3600);
ProducaoSalgadoLancheForno[3].percentual = ProducaoSalgadoLancheForno[3].Tempo/ProducaoSalgadoLancheForno[3].Rendimento*debouncedValue4/(8.5*3600);
ProducaoSalgadoLancheForno[4].percentual = ProducaoSalgadoLancheForno[4].Tempo/ProducaoSalgadoLancheForno[4].Rendimento*debouncedValue4/(8.5*3600);

ProducaoSalgadoLancheForno[5].Quantidade_De_Funcionarios_Necessarios = ProducaoSalgadoLancheForno[0].percentual + ProducaoSalgadoLancheForno[1].percentual + ProducaoSalgadoLancheForno[2].percentual + ProducaoSalgadoLancheForno[3].percentual + ProducaoSalgadoLancheForno[4].percentual;


// console.log(prePreparo[0].percentual);
// console.log(prePreparo[1].percentual);
// console.log(prePreparo[2].percentual);
// console.log(prePreparo[3].percentual);
// console.log(prePreparo[4].percentual);
// console.log(prePreparo[5].Quantidade_De_Funcionarios_Necessarios);

// console.log(prePreparo[6].percentual);
// console.log(prePreparo[7].percentual);
// console.log(prePreparo[8].percentual);
// console.log(prePreparo[9].percentual);
// console.log(prePreparo[10].percentual);
// console.log(prePreparo[11].Quantidade_De_Funcionarios_Necessarios);


// console.log(processoDeAcabamento[0].percentual);
// console.log(processoDeAcabamento[1].percentual);
// console.log(processoDeAcabamento[2].percentual);
// console.log(processoDeAcabamento[3].percentual);
// console.log(processoDeAcabamento[4].percentual);
// console.log(processoDeAcabamento[5].Quantidade_De_Funcionarios_Necessarios);

// console.log(processoDeAcabamento[6].percentual);
// console.log(processoDeAcabamento[7].percentual);
// console.log(processoDeAcabamento[8].percentual);
// console.log(processoDeAcabamento[9].percentual);
// console.log(processoDeAcabamento[10].Quantidade_De_Funcionarios_Necessarios);


// console.log(Empadas[0].percentual);
// console.log(Empadas[1].percentual);
// console.log(Empadas[2].percentual);
// console.log(Empadas[3].percentual);
// console.log(Empadas[4].percentual);
// console.log(Empadas[5].percentual);
// console.log(Empadas[6].percentual);
// console.log(Empadas[7].percentual);
// console.log(Empadas[8].percentual);
// console.log(Empadas[9].Quantidade_De_Funcionarios_Necessarios);


// console.log(SalgadinhosBralyxSuper[0].percentual);
// console.log(SalgadinhosBralyxSuper[1].percentual);
// console.log(SalgadinhosBralyxSuper[2].percentual);
// console.log(SalgadinhosBralyxSuper[3].percentual);

// console.log(SalgadinhosBralyxSuper[4].Quantidade_De_Funcionarios_Necessarios);


// console.log(Lanche140gBralyxDuploRecheio[0].percentual);
// console.log(Lanche140gBralyxDuploRecheio[1].percentual);
// console.log(Lanche140gBralyxDuploRecheio[2].percentual);
// console.log(Lanche140gBralyxDuploRecheio[3].percentual);

// console.log(Lanche140gBralyxDuploRecheio[4].Quantidade_De_Funcionarios_Necessarios);

// console.log(ProducaoSalgadoLancheForno[0].percentual);
// console.log(ProducaoSalgadoLancheForno[1].percentual);
// console.log(ProducaoSalgadoLancheForno[2].percentual);
// console.log(ProducaoSalgadoLancheForno[3].percentual);
// console.log(ProducaoSalgadoLancheForno[4].percentual);

// console.log(ProducaoSalgadoLancheForno[5].Quantidade_De_Funcionarios_Necessarios);


// CHECKING SUMS

// console.log(sumR1);
// console.log(sumR2);
// console.log(sumR3);

// console.log(sumR1Arrendondado);


// SUM R1

// setSumR1(0.14*Number(prePreparo[0].percentual)+Number(Empadas[9].Quantidade_De_Funcionarios_Necessarios));

// 0.14
// console.log(Number(prePreparo[0].percentual));
// console.log(Number(Empadas[9].Quantidade_De_Funcionarios_Necessarios));


// SUM COLABORADORES

// console.log(Number(prePreparo[5].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(prePreparo[11].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(processoDeAcabamento[5].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(processoDeAcabamento[10].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(Empadas[9].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(SalgadinhosBralyxSuper[4].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(Lanche140gBralyxDuploRecheio[4].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(ProducaoSalgadoLancheForno[5].Quantidade_De_Funcionarios_Necessarios));



// console.log(sumColaboradores);
// console.log(sumColaboradoresArrendondado);

// CHECKING PRODUTIVIDADE
// console.log(debouncedValue5);
// console.log(sumProdutividade);
// console.log(sumProdutividadeArredondado);

// console.log(isNaN(input1) && isNaN(input2));
// console.log(isNaN(input1));
// console.log(input1);

// console.log(((input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3))));
// console.log(input1 === 0 || isNaN(input1));
// console.log(input2 === 0 || isNaN(input2));
// console.log(input3 === 0 || isNaN(input3));

// console.log(input1);
// console.log(sumColaboradoresArrendondado);

// console.log((input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) && (input4 === 0 || isNaN(input4)))


// console.log(Number(prePreparo[5].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(prePreparo[11].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(processoDeAcabamento[5].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(processoDeAcabamento[10].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(Empadas[9].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(SalgadinhosBralyxSuper[4].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(Lanche140gBralyxDuploRecheio[4].Quantidade_De_Funcionarios_Necessarios));
// console.log(Number(ProducaoSalgadoLancheForno[5].Quantidade_De_Funcionarios_Necessarios));

// console.log((input1 !== 0 || !isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) && (input4 === 0 || isNaN(input4)))
// console.log(sumR1)
// console.log(sumColaboradores)
// console.log((input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)))

console.log(debouncedValue1);
console.log(debouncedValue2);
console.log(debouncedValue3);
console.log(debouncedValue4);

console.log(sumR1);
console.log(sumR2);
console.log(sumR3);
console.log(sumInput3Input4);
console.log(sumColaboradores);


}

useEffect(() => {
  setTimeout(() => {
    // if((input3 === 0 || isNaN(input3)) && (input4 === 0 || isNaN(input4) )){
    if(((input3 === 0 || isNaN(input3)) && (input4 === 0 || isNaN(input4))) || (input3 === 0 && input4 === 0) || (input3 === '' && input4 === 0) || (input3 === 0 && input4 === '') || (input3 === '' && input4 === '')){
      setSumInput3Input4(0);
    }else{
      setSumInput3Input4(Number(debouncedValue3) + Number(debouncedValue4));  
    }

    // if((input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) ){
    if((input1 === '' && input2 === '' && input3 === '' && input4 === '') || (debouncedValue1 === '' && debouncedValue2 === '' && debouncedValue3 === '' && debouncedValue4 === '') || (input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) && (input4 === 0 || isNaN(input4)) || 
    (input1 === 0 || isNaN(input1)) && (input2 !== 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) && (input4 === 0 || isNaN(input4)) || (input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 !== 0 || isNaN(input3)) && (input4 === 0 || isNaN(input4)) || (input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) && (input4 !== 0 || isNaN(input4)) || (input1 === 0 || isNaN(input1)) && (input2 !== 0 || isNaN(input2)) && (input3 !== 0 || isNaN(input3)) && (input4 === 0 || isNaN(input4)) || (input1 === 0 || isNaN(input1)) && (input2 !== 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) && (input4 !== 0 || isNaN(input4)) || (input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 !== 0 || isNaN(input3)) && (input4 !== 0 || isNaN(input4)) ||(debouncedValue1 === '' && debouncedValue2 !== '' && debouncedValue3 === '' && debouncedValue4 === '') || (debouncedValue1 === '' && debouncedValue2 === '' && debouncedValue3 !== '' && debouncedValue4 === '') || (debouncedValue1 === '' && debouncedValue2 === '' && debouncedValue3 === '' && debouncedValue4 !== '') || (debouncedValue1 === '' && debouncedValue2 !== '' && debouncedValue3 !== '' && debouncedValue4 === '') || (debouncedValue1 === '' && debouncedValue2 !== '' && debouncedValue3 === '' && debouncedValue4 !== '') || (debouncedValue1 === '' && debouncedValue2 === '' && debouncedValue3 !== '' && debouncedValue4 !== '') || (debouncedValue1 === '' && debouncedValue2 !== '' && debouncedValue3 !== '' && debouncedValue4 !== '') || (debouncedValue1 === 0 && debouncedValue2 === '' && debouncedValue3 === '' && debouncedValue4 === '') || (debouncedValue1 === 0 && debouncedValue2 !== '' && debouncedValue3 === '' && debouncedValue4 === '') || (debouncedValue1 === 0 && debouncedValue2 === '' && debouncedValue3 !== '' && debouncedValue4 === '') || (debouncedValue1 === 0 && debouncedValue2 === '' && debouncedValue3 === '' && debouncedValue4 !== '') || (debouncedValue1 === 0 && debouncedValue2 !== '' && debouncedValue3 !== '' && debouncedValue4 === '') || (debouncedValue1 === 0 && debouncedValue2 !== '' && debouncedValue3 === '' && debouncedValue4 !== '') || (debouncedValue1 === 0 && debouncedValue2 === '' && debouncedValue3 !== '' && debouncedValue4 !== '') || (debouncedValue1 === 0 && debouncedValue2 !== '' && debouncedValue3 !== '' && debouncedValue4 !== '')){
      setSumR1(0);
    }else{    
        setSumR1(0.14*Number(prePreparo[0].percentual)+Number(Empadas[9].Quantidade_De_Funcionarios_Necessarios));
    }
    
    // CORRIGIR ESSA PARTE DO INPUT
    // if((input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3))){
    if((input1 === '' && input2 === '' && input3 === '' && input4 === '') || (debouncedValue1 === '' && debouncedValue2 === '' && debouncedValue3 === '' && debouncedValue4 === '') || (input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) || (input1 !== 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) || (input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 !== 0 || isNaN(input3)) || (input1 !== 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 !== 0 || isNaN(input3)) || (debouncedValue1 !== '' && debouncedValue2 === '' && debouncedValue3 === '' && debouncedValue4 === '') || (debouncedValue1 === '' && debouncedValue2 === '' && debouncedValue3 !== '' && debouncedValue4 === '') || (debouncedValue1 === '' && debouncedValue2 === '' && debouncedValue3 === '' && debouncedValue4 !== '') || (debouncedValue1 !== '' && debouncedValue2 === '' && debouncedValue3 !== '' && debouncedValue4 === '') || (debouncedValue1 !== '' && debouncedValue2 === '' && debouncedValue3 === '' && debouncedValue4 !== '') || (debouncedValue1 === '' && debouncedValue2 === '' && debouncedValue3 !== '' && debouncedValue4 !== '') || (debouncedValue1 !== '' && debouncedValue2 === '' && debouncedValue3 !== '' && debouncedValue4 !== '')){
        setSumR2(0);
    }else{
        setSumR2(Number(prePreparo[5].Quantidade_De_Funcionarios_Necessarios)-Number(prePreparo[4].percentual)+Number(prePreparo[11].Quantidade_De_Funcionarios_Necessarios)+Number(SalgadinhosBralyxSuper[4].Quantidade_De_Funcionarios_Necessarios)+Number(Lanche140gBralyxDuploRecheio[4].Quantidade_De_Funcionarios_Necessarios)+Number(ProducaoSalgadoLancheForno[5].Quantidade_De_Funcionarios_Necessarios)+Number(processoDeAcabamento[10].Quantidade_De_Funcionarios_Necessarios)+Number(processoDeAcabamento[5].Quantidade_De_Funcionarios_Necessarios));
    }

    // CORRIGIR ESSA PARTE DO INPUT
    // if((input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) && (input4 === 0 || isNaN(input4))){
    if((input1 === '' && input2 === '' && input3 === '' && input4 === '') || (debouncedValue1 === '' && debouncedValue2 === '' && debouncedValue3 === '' && debouncedValue4 === '') || (input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) || (input1 !== 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) || (input1 === 0 || isNaN(input1)) && (input2 !== 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) || (input1 !== 0 || isNaN(input1)) && (input2 !== 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3))){
        setSumR3(0);
    }else{
        setSumR3(Number(Lanche140gBralyxDuploRecheio[4].Quantidade_De_Funcionarios_Necessarios)+0.5*Number(prePreparo[11].Quantidade_De_Funcionarios_Necessarios)+Number(processoDeAcabamento[5].Quantidade_De_Funcionarios_Necessarios));
    }   
 
    // setSumR1(0.14*Number(prePreparo[0].percentual)+Number(Empadas[9].Quantidade_De_Funcionarios_Necessarios));

    // setSumR2(Number(prePreparo[5].Quantidade_De_Funcionarios_Necessarios)-Number(prePreparo[4].percentual)+Number(prePreparo[11].Quantidade_De_Funcionarios_Necessarios)+Number(SalgadinhosBralyxSuper[4].Quantidade_De_Funcionarios_Necessarios)+Number(Lanche140gBralyxDuploRecheio[4].Quantidade_De_Funcionarios_Necessarios)+Number(ProducaoSalgadoLancheForno[5].Quantidade_De_Funcionarios_Necessarios)+Number(processoDeAcabamento[10].Quantidade_De_Funcionarios_Necessarios)+Number(processoDeAcabamento[5].Quantidade_De_Funcionarios_Necessarios));
    
    // setSumR3(Number(Lanche140gBralyxDuploRecheio[4].Quantidade_De_Funcionarios_Necessarios)+0.5*Number(prePreparo[11].Quantidade_De_Funcionarios_Necessarios)+Number(processoDeAcabamento[5].Quantidade_De_Funcionarios_Necessarios));
    if((input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) && (input4 === 0 || isNaN(input4)) || (debouncedValue1 === '' && debouncedValue2 === '' && debouncedValue3 === '' && debouncedValue4 === '') || (input1 === '' && input2 === '' && input3 === '' && input4 === '') || (debouncedValue1 === 0 && debouncedValue2 === 0 && debouncedValue3 === 0 && debouncedValue4 === 0) || (debouncedValue1 === 0 && debouncedValue2 === '' && debouncedValue3 === '' && debouncedValue4 === '') || (debouncedValue1 === '' && debouncedValue2 === 0 && debouncedValue3 === '' && debouncedValue4 === '') || (debouncedValue1 === '' && debouncedValue2 === '' && debouncedValue3 === 0 && debouncedValue4 === '') || (debouncedValue1 === '' && debouncedValue2 === '' && debouncedValue3 === '' && debouncedValue4 === 0) || (debouncedValue1 === 0 && debouncedValue2 === 0 && debouncedValue3 === '' && debouncedValue4 === '') || (debouncedValue1 === 0 && debouncedValue2 === '' && debouncedValue3 === 0 && debouncedValue4 === '') || (debouncedValue1 === 0 && debouncedValue2 === '' && debouncedValue3 === '' && debouncedValue4 === 0) || (debouncedValue1 === 0 && debouncedValue2 === 0 && debouncedValue3 === 0 && debouncedValue4 === '') || (debouncedValue1 === 0 && debouncedValue2 === 0 && debouncedValue3 === '' && debouncedValue4 === 0) || (debouncedValue1 === 0 && debouncedValue2 === '' && debouncedValue3 === 0 && debouncedValue4 === 0) || (debouncedValue1 === '' && debouncedValue2 === 0 && debouncedValue3 === 0 && debouncedValue4 === 0) || (debouncedValue1 === '' && debouncedValue2 === 0 && debouncedValue3 === 0 && debouncedValue4 === '') || (debouncedValue1 === '' && debouncedValue2 === 0 && debouncedValue3 === '' && debouncedValue4 === 0) ||(debouncedValue1 === '' && debouncedValue2 === '' && debouncedValue3 === 0 && debouncedValue4 === 0)
    ){
        setSumColaboradores(0);
        setLoad(false);
    // }else if((input1 !== 0 || !isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 === 0 || isNaN(input3)) && (input4 === 0 || isNaN(input4))){
    //   setSumColaboradores(Number(sumR1Arrendondado));
    // }else if((input1 === 0 || isNaN(input1)) && (input2 !== 0 || !isNaN(input2)) && (input3 === 0 || isNaN(input3)) && (input4 === 0 || isNaN(input4))){
    //   setSumColaboradores(Number(sumR2Arrendondado));
    // }else if((input1 === 0 || isNaN(input1)) && (input2 === 0 || isNaN(input2)) && (input3 !== 0 || !isNaN(input3)) && (input4 === 0 || isNaN(input4))){
    //   setSumColaboradores(Number(sumR3Arrendondado));
    }else{
        setSumColaboradores(Number(prePreparo[5].Quantidade_De_Funcionarios_Necessarios)+Number(prePreparo[11].Quantidade_De_Funcionarios_Necessarios)+Number(processoDeAcabamento[5].Quantidade_De_Funcionarios_Necessarios)+Number(processoDeAcabamento[10].Quantidade_De_Funcionarios_Necessarios)+Number(Empadas[9].Quantidade_De_Funcionarios_Necessarios)+Number(SalgadinhosBralyxSuper[4].Quantidade_De_Funcionarios_Necessarios)+Number(Lanche140gBralyxDuploRecheio[4].Quantidade_De_Funcionarios_Necessarios)+Number(ProducaoSalgadoLancheForno[5].Quantidade_De_Funcionarios_Necessarios));
    }
    setSumProdutividade((Number(sumColaboradoresArrendondado)/Number(debouncedValue5))*100);
    setLoad(false);
    
  }, 500);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue1, debouncedValue2, debouncedValue3, debouncedValue4, debouncedValue5, sumR1, sumR2, sumR3, sumColaboradoresArrendondado]);

  // console.log(debouncedValue5)
  // console.log(sumColaboradoresArrendondado)
  // console.log(sumColaboradoresArrendondado/debouncedValue5)
  // console.log(((sumColaboradoresArrendondado/debouncedValue5)*100).toPrecision(3))
  

  return (
    <>
    <div id='roottry'>
      <h1 className='title'>Simulador De Produção</h1>
        <div className='boxes'>

          <div className='box1'>
            <p>PRODUÇÃO DIÁRIA</p>
            <div className='lines'>
              <div className='inputs'>
                <h3>EMPADA und</h3>
                <input type="number" placeholder='<=10000' min="0" max="10000" step="1" value={input1} onChange={handleChange1} name="" id="input1" />
              </div>
              <div className='inputs'>
                <h3>SALGADINHOS Kg</h3>
                <input type="number" placeholder='<= 5000' min="0" max="5000" step="1" value={input2} onChange={handleChange2} name="" id="input2" />
              </div>
              <div className='inputs'>
                <h3>LANCHE FRITO und</h3>
                <input type="number" placeholder='<=10000' min="0" max="10000" step="1" value={input3} onChange={handleChange3} name="" id="input3" />
              </div>
              <div className='inputs'>
                <h3>LANCHE ASSADO und</h3>
                <input type="number" placeholder='<=10000' min="0" max="10000" step="1" value={input4} onChange={handleChange4} name="" id="input4" />
              </div>
            </div>
          </div>

          <div className='box2'>
            <p>OPERADORES POR PROCESSO</p>
            <div className='lines'>
              <div className='results'>
                { load ? <h3>aguarde</h3> :
                <h3> {isNaN(sumR1Arrendondado) || sumR1Arrendondado === '0.0' || debouncedValue1 === '0' || input1 === 0 ? 0 : sumR1Arrendondado} </h3>}

              </div>
              <div className='results'>
                { load ? <h3>aguarde</h3> :
                <h3> {isNaN(sumR2Arrendondado) || sumR2Arrendondado === '0.0' || debouncedValue2 === '0' || input2 === 0 ? 0 : sumR2Arrendondado} </h3>}

              </div>
              <div className='results'>
                { load ? <h3 >aguarde</h3> :
                <h3> {isNaN(sumR3Arrendondado) || sumR3Arrendondado === '0.0' || (input3 === 0 && input4 === 0) ? 0 : sumR3Arrendondado} </h3>}

              </div>
              {/* <div className='results'>
              </div> */}
            </div>
          </div>
          <div className='animation'>
            <div className="gear">
                <svg
                    viewBox="0 0 165 165"
                    version="1.1"
                    id="svg1"
                >
                    <defs
                        id="GEARS" />
                    <g
                        id="CAMADA-1">
                        <path
                        d="m 75.783591,156.94152 c -0.0877,-0.23319 -0.25846,-1.01758 -0.37954,-1.74309 -2.14229,-12.83641 -2.47756,-14.67296 -2.75932,-15.1147 -0.28986,-0.45445 -0.83346,-0.63275 -3.32682,-1.0912 -0.90686,-0.16674 -2.89637,-0.71586 -4.42113,-1.22026 -2.688405,-0.88935 -2.787802,-0.90757 -3.284492,-0.60225 -0.281711,0.17316 -2.723165,2.98601 -5.425457,6.25078 -2.702291,3.26475 -5.153931,6.16271 -5.448088,6.43989 -0.688565,0.64882 -0.895589,0.5934 -3.476805,-0.9309 -1.978462,-1.16836 -2.519415,-1.48237 -6.068362,-3.52254 -1.087282,-0.62504 -1.586855,-1.02734 -1.665496,-1.34118 -0.06988,-0.27887 0.117183,-1.0732 0.494867,-2.10145 0.333961,-0.90922 0.982255,-2.67071 1.44065,-3.91444 0.458397,-1.24371 1.075566,-2.93969 1.371489,-3.76883 0.295922,-0.82915 0.93404,-2.56753 1.41804,-3.86307 0.484,-1.29554 0.924387,-2.5039 0.978638,-2.68526 0.07174,-0.23983 -0.769282,-1.19048 -3.084184,-3.48618 -1.750552,-1.73605 -3.503092,-3.51685 -3.894533,-3.95734 -0.465621,-0.52394 -0.868668,-0.80087 -1.165643,-0.80087 -0.249663,0 -1.618249,0.43008 -3.041302,0.95573 -1.423054,0.52564 -3.370829,1.24549 -4.32839,1.59965 -0.957562,0.35416 -2.566103,0.94736 -3.574535,1.31821 -1.008433,0.37085 -2.486898,0.923 -3.285479,1.22698 -2.055998,0.78263 -2.491621,0.74756 -3.083153,-0.24818 -3.450542,-5.80839 -5.535906,-9.6249 -5.434311,-9.94553 0.06371,-0.20114 0.512742,-0.68447 0.997789,-1.07407 0.485046,-0.38959 2.955071,-2.44732 5.488944,-4.57271 2.533873,-2.12539 5.008806,-4.18323 5.499852,-4.57297 1.595381,-1.26626 1.596626,-1.2728 0.731629,-3.8462 -0.413254,-1.229447 -1.045872,-3.531471 -1.405817,-5.115636 -0.359946,-1.584161 -0.751397,-2.99731 -0.869892,-3.140318 -0.266122,-0.321183 -1.040852,-0.49139 -6.493347,-1.426574 -2.379886,-0.408182 -5.258331,-0.904095 -6.39654,-1.102022 -1.138208,-0.197926 -2.5073816,-0.417355 -3.0426136,-0.487616 -1.753683,-0.230219 -1.647096,0.208924 -1.607511,-6.622829 0.03982,-6.872349 -0.05355,-6.517876 1.779935,-6.758749 0.5438719,-0.07146 1.9201206,-0.29204 3.0583276,-0.490187 1.138209,-0.198148 3.804999,-0.656592 5.926203,-1.018757 6.449346,-1.101142 6.879681,-1.208908 7.03579,-1.761949 0.04805,-0.170228 0.185033,-0.818301 0.304401,-1.440157 0.400887,-2.088436 1.142389,-4.88544 1.781653,-6.720538 0.348902,-1.001563 0.588756,-1.995734 0.533009,-2.209258 -0.08977,-0.343839 -4.599899,-4.234704 -10.902055,-9.405154 -1.174533,-0.963616 -2.220704,-1.911463 -2.324816,-2.10632 -0.243914,-0.456499 -0.158801,-0.667467 1.180289,-2.925567 2.038523,-3.437554 2.332287,-3.944694 3.251175,-5.612657 1.460358,-2.650839 1.570726,-2.711422 3.529602,-1.937465 0.638489,0.252268 2.473118,0.938104 4.076956,1.524079 1.603837,0.585976 3.339368,1.226985 3.856735,1.424463 3.53071,1.347671 6.19397,2.246055 6.658429,2.246055 0.641339,0 0.837238,-0.164868 2.668883,-2.246112 0.76796,-0.872609 2.285221,-2.387649 3.371692,-3.366753 1.086471,-0.979105 2.048076,-1.931496 2.136899,-2.116424 0.109237,-0.227427 0.0086,-0.72343 -0.310996,-1.532745 -0.259872,-0.65808 -0.605228,-1.578105 -0.767458,-2.044499 -0.30301,-0.871124 -0.938887,-2.619613 -3.308319,-9.096992 -0.928203,-2.53745 -1.326766,-3.871463 -1.249184,-4.181083 0.08376,-0.334277 0.599539,-0.724234 1.947595,-1.472488 1.008516,-0.559787 3.2382,-1.837064 4.954856,-2.83839 1.731395,-1.009925 3.335043,-1.820595 3.601454,-1.820595 0.380896,0 0.805549,0.398033 2.052476,1.923821 0.864719,1.058101 1.874413,2.266486 2.243765,2.6853 0.369352,0.418816 1.717356,2.033467 2.995563,3.588115 3.707393,4.509198 3.989409,4.830296 4.41162,5.022984 0.308417,0.140756 1.003987,-0.01733 3.027703,-0.688111 1.44502,-0.478965 3.47391,-1.040251 4.50864,-1.247301 2.75485,-0.551245 3.26768,-0.709846 3.45479,-1.068461 0.0927,-0.177722 0.31397,-1.171121 0.49165,-2.207553 0.2965,-1.729491 0.71425,-4.121979 2.07299,-11.871861 0.33964,-1.9371742 0.59186,-2.900755 0.80153,-3.062186 0.22953,-0.1767138 1.75378,-0.2355533 6.10213,-0.2355533 5.54534,0 5.81246,0.01631 6.17245,0.3768846 0.20694,0.2072867 0.37627,0.536961 0.37627,0.7326092 0,0.195649 0.20594,1.4464342 0.45765,2.7795225 0.25171,1.33309 0.63255,3.483788 0.84631,4.779328 1.15414,6.994827 1.4655,8.511029 1.82089,8.866997 0.23627,0.236658 0.93655,0.459415 2.05042,0.652225 1.8212,0.315254 5.781052,1.399142 7.294379,1.996612 0.51214,0.202202 1.08776,0.317861 1.27914,0.257019 0.3516,-0.111772 1.54377,-1.408065 3.39526,-3.691776 0.55596,-0.685746 2.15375,-2.605539 3.55064,-4.266207 1.39689,-1.660667 2.95781,-3.537572 3.46871,-4.170902 0.72207,-0.895104 1.04189,-1.151506 1.43632,-1.151506 0.30383,0 1.89376,0.807646 3.96257,2.012868 1.90033,1.107078 4.13242,2.402974 4.96021,2.879769 1.32394,0.762577 1.51199,0.937647 1.56264,1.454791 0.0377,0.384494 -0.50647,2.110123 -1.57269,4.987694 -0.89665,2.419891 -1.92468,5.205393 -2.28453,6.190003 -0.35985,0.984611 -0.90087,2.433411 -1.20228,3.219555 -0.30141,0.786144 -0.54801,1.609219 -0.54801,1.829053 0,0.608057 7.59571,8.142348 8.20871,8.142348 0.25402,0 1.24126,-0.290555 2.19387,-0.645679 0.95262,-0.355123 3.17124,-1.162276 4.93029,-1.793674 1.75905,-0.631397 3.36758,-1.225696 3.57453,-1.320665 0.20695,-0.09497 1.05355,-0.40416 1.88134,-0.687094 0.82778,-0.282933 1.87189,-0.670064 2.32023,-0.860289 1.02189,-0.433577 1.58776,-0.438253 1.94674,-0.01609 0.15423,0.181377 0.82056,1.304963 1.48076,2.49686 0.66019,1.191897 1.90143,3.354271 2.75832,4.805276 0.85688,1.451011 1.55822,2.774683 1.55853,2.9415 6.6e-4,0.358974 -0.60346,0.949677 -3.00958,2.942711 -9.41894,7.801913 -10.34734,8.627358 -10.34734,9.19997 0,0.221887 0.29381,1.258804 0.65292,2.304268 0.59029,1.718536 1.54925,5.432022 1.87269,7.2518 0.20515,1.154242 -0.0175,1.084053 7.6336,2.406198 1.81077,0.312907 4.30826,0.737228 5.54994,0.94294 3.92024,0.649461 4.32157,0.743417 4.56223,1.068127 0.17619,0.237718 0.23517,1.773277 0.23517,6.122984 0,6.632024 0.0503,6.42669 -1.63261,6.655783 -1.00795,0.137202 -3.05491,0.481691 -6.17493,1.039197 -1.1382,0.203382 -3.17004,0.546852 -4.5152,0.76326 -3.31461,0.533263 -5.00359,0.896717 -5.29576,1.139592 -0.13432,0.111655 -0.29914,0.512487 -0.36626,0.890734 -0.33605,1.893771 -1.29055,5.618293 -1.8959,7.397907 -0.42542,1.25064 -0.63729,2.16785 -0.5659,2.44976 0.10481,0.41382 3.75041,3.58063 10.83144,9.40891 2.80269,2.30686 2.79358,2.25879 0.99813,5.2691 -0.71087,1.19189 -1.90618,3.26947 -2.65622,4.61683 -0.75004,1.34736 -1.50299,2.60519 -1.67322,2.79518 -0.43396,0.48431 -1.17476,0.35234 -3.98559,-0.70998 -1.29341,-0.48885 -3.1136,-1.16811 -4.04486,-1.50947 -0.93126,-0.34137 -3.22824,-1.18296 -5.10439,-1.87018 -1.87615,-0.68723 -3.62123,-1.24952 -3.87796,-1.24952 -0.35776,0 -0.88533,0.47618 -2.25889,2.03882 -0.98565,1.12135 -2.69735,2.83838 -3.80378,3.81562 -2.38195,2.10385 -2.3307,1.81196 -0.95713,5.45209 0.48887,1.29554 1.08634,2.90672 1.32774,3.58041 0.2414,0.67368 0.8328,2.28486 1.31423,3.5804 2.14578,5.77436 2.24081,6.1425 1.70144,6.59088 -0.15217,0.1265 -1.57023,0.97179 -3.15124,1.87844 -1.58101,0.90664 -3.68628,2.12791 -4.67838,2.71393 -1.10723,0.65404 -2.02084,1.0655 -2.36582,1.0655 -0.59008,0 -0.44846,0.16015 -9.61171,-10.86919 -2.17495,-2.61786 -2.15834,-2.61005 -4.09786,-1.92589 -2.393609,0.84435 -5.622549,1.68745 -7.463679,1.94882 -1.54868,0.21984 -1.64175,0.38432 -2.25425,3.98375 -2.00284,11.76974 -2.32183,13.53926 -2.48977,13.81145 -0.0926,0.14992 -1.94396,0.21186 -6.33269,0.21186 h -6.20195 z m 9.85757,-35.75392 c 3.31356,-0.3043 6.86296,-1.10874 9.93291,-2.25121 13.944329,-5.18931 23.616419,-17.51215 25.358569,-32.3083 0.33066,-2.808237 0.12961,-8.743778 -0.38374,-11.329174 -1.59032,-8.009422 -4.91856,-14.480955 -10.355,-20.134519 -6.0774,-6.320121 -14.158229,-10.374768 -23.001589,-11.54132 -2.85306,-0.376358 -8.76217,-0.277309 -11.3341,0.189982 -8.0756,1.467252 -15.022556,4.983028 -20.664257,10.457946 C 47.918081,61.331788 43.76,70.713482 43.27723,81.158192 c -0.169581,3.668859 0.498722,8.524207 1.726242,12.541491 5.382314,17.614637 22.448269,29.158287 40.637689,27.487917 z"
                        id="gear-1" />
                    </g>
                </svg>
            </div>
            <div className="engineer">
                <svg
                    viewBox="10 50 145 145"
                    version="1.1"
                    id="svg2"
                >
                    <defs
                        id="ENGINEERS" />
                        <animate attributeName="viewBox" from="10 -15 145 145" to="10 50 145 145" dur="5s" begin="3s" />
                    <g
                        id="CAMADA-2">
                        <path
                        d="m 67.7288,120.22631 v -3.03485 h -2.34533 c -2.04439,0 -2.55754,-0.30623 -3.99928,-2.38665 -0.99066,-1.42953 -1.51615,-2.82917 -1.31034,-3.49007 0.53031,-1.70295 -0.33173,-2.50767 -2.97487,-2.77708 l -2.42001,-0.24668 2.5438,-0.10204 c 3.08649,-0.12381 3.88028,-1.118 2.01562,-2.52452 -0.76276,-0.57536 -1.23103,-1.42147 -1.04567,-1.88937 0.24295,-0.61324 0.34895,-0.55388 0.38363,0.21479 0.0264,0.58421 0.35027,1.06219 0.71983,1.06219 0.36955,0 0.51804,-0.40095 0.32999,-0.89101 -0.18805,-0.49006 -0.0495,-1.07175 0.30791,-1.29264 0.37564,-0.23216 0.51687,-1.39286 0.33471,-2.75094 -0.17836,-1.329732 -0.0767,-2.202002 0.23412,-2.009882 0.56007,0.34614 0.81949,-0.89156 0.64357,-3.07053 -0.0807,-0.99932 0.008,-1.05297 0.5015,-0.30348 0.36211,0.54992 0.60319,0.62419 0.6088,0.18756 0.0117,-0.91852 -1.00061,-1.54604 -2.8158,-1.74529 -1.12702,-0.12373 -1.42368,0.13523 -1.42368,1.24275 0,0.76947 -0.4097,1.55625 -0.91046,1.74841 -0.50074,0.19215 -0.90626,0.69937 -0.90115,1.12713 0.007,0.55269 0.19883,0.51429 0.66423,-0.13269 0.54468,-0.7572 0.5942,-0.7233 0.29418,0.2014 -0.19841,0.61151 -0.36073,1.33847 -0.36073,1.61546 0,0.75472 -2.02235,0.3102 -2.29382,-0.5042 -0.12936,-0.38812 0.0288,-0.70567 0.35154,-0.70567 0.32271,0 0.7296,-0.54628 0.90421,-1.21394 0.42545,-1.62694 -0.85455,-1.57168 -3.5152,0.15174 l -2.10836,1.36569 -0.008,7.180132 -0.008,7.18014 1.66916,-0.35063 c 0.91804,-0.19284 2.07887,-0.0822 2.57962,0.24596 0.61968,0.40606 -1.78728,0.59957 -7.53653,0.60589 -4.64584,0.005 -8.28251,-0.15517 -8.0815,-0.35619 0.201,-0.201 2.43169,-0.39578 4.95706,-0.43282 5.0275,-0.0737 5.12276,-0.15267 4.89723,-4.05746 -0.0675,-1.16841 -0.16393,-3.96808 -0.21433,-6.22146 -0.0504,-2.253382 -0.30992,-4.097052 -0.57672,-4.097052 -0.2668,0 -0.41682,1.02426 -0.33339,2.276142 0.1339,2.00918 0.10181,2.06844 -0.27362,0.50529 -0.23393,-0.973952 -0.80476,-1.897082 -1.26852,-2.051392 -0.562,-0.18699 -0.68254,-0.0206 -0.36144,0.49894 0.3217,0.52052 0.24073,0.63054 -0.24369,0.33115 -0.41581,-0.25699 -0.55762,-0.97711 -0.33224,-1.68722 0.28894,-0.91036 0.18765,-1.11184 -0.38194,-0.75981 -0.54405,0.33625 -0.66463,0.19108 -0.40444,-0.48696 0.30835,-0.80354 0.0195,-0.90902 -1.71776,-0.62712 -1.84054,0.29868 -2.08846,0.18311 -2.08846,-0.9735 0,-1.96049 -1.65628,-2.24754 -3.41811,-0.59238 -0.84449,0.79336 -1.65,1.37418 -1.79002,1.29073 -0.73879,-0.44034 -0.71435,0.0523 0.0992,1.99936 0.49433,1.18312 0.75647,2.38139 0.58253,2.662842 -0.17394,0.28144 0.14939,0.47427 0.71853,0.4285 1.20155,-0.0966 2.06175,2.96411 1.28228,4.56253 -0.26925,0.55215 -0.37226,2.5324 -0.2289,4.40055 l 0.26065,3.39663 -1.995029,-1.15036 -0.253886,-2.73956 c 0.0399,-5.02561 -2.752919,-12.602446 -1.945589,-13.834586 0.49244,-0.75156 0.941764,-1.717536 2.873174,-2.615286 4.80618,-2.23399 7.4515,-4.06767 7.43382,-5.15296 -0.008,-0.50074 -0.68664,-2.27613 -1.50773,-3.94529 -0.82109,-1.66917 -1.49539,-3.64941 -1.49844,-4.40053 -0.003,-0.75112 -0.27869,-1.36568 -0.61252,-1.36568 -0.79625,0 -0.76731,-2.72493 0.0612,-5.7662 0.95971,-3.52267 6.0116,-8.19408 8.86149,-8.19408 3.13831,0 8.08339,5.15191 9.20738,9.59247 0.7206,2.84693 0.70209,3.34389 -0.16006,4.29657 -0.53621,0.5925 -0.97493,1.49978 -0.97493,2.01616 0,0.51639 -0.69574,2.51206 -1.54608,4.43485 l -1.54608,3.49597 1.30231,1.38624 c 0.71628,0.76245 2.63772,1.96073 4.26988,2.66287 l 2.96756,1.27661 2.2837,-1.46681 c 1.25603,-0.80674 3.78594,-1.80272 5.62202,-2.21329 3.44882,-0.77121 6.06969,-2.55944 6.06969,-4.14139 0,-0.49829 -0.95597,-2.64516 -2.12439,-4.77083 -1.16842,-2.12568 -2.1244,-4.5383 -2.1244,-5.36139 0,-0.9256 -0.34733,-1.49653 -0.91045,-1.49653 -1.11876,0 -1.19131,-2.22984 -0.18531,-5.69577 0.98496,-3.39345 3.17179,-6.79871 5.19073,-8.08283 0.91918,-0.58465 1.88967,-1.41096 2.15663,-1.83626 0.28187,-0.44906 1.68955,-0.77329 3.35733,-0.77329 2.69546,0 3.0869,0.21725 6.37036,3.53531 2.51418,2.5407 3.74687,4.36084 4.38152,6.46964 1.01198,3.36257 1.15372,6.3832 0.29953,6.3832 -0.32097,0 -0.89852,1.16083 -1.28346,2.57962 -0.6367,2.34672 -0.55703,2.85361 0.88248,5.61446 0.8703,1.66917 1.65271,4.10628 1.73869,5.4158 0.13468,2.05146 0.4083,2.46242 1.97723,2.96965 1.00149,0.32378 2.56238,1.10775 3.46865,1.74216 1.6259,1.13819 1.68748,1.13639 4.64429,-0.1356 1.6481,-0.70899 3.60706,-1.93894 4.35325,-2.73324 l 1.35673,-1.44417 -1.60049,-3.27128 c -0.88027,-1.7992 -1.60049,-3.89679 -1.60049,-4.66129 0,-0.76451 -0.46405,-1.72934 -1.03122,-2.14407 -0.91957,-0.6724 -0.94494,-1.04111 -0.2343,-3.40524 1.21767,-4.0509 1.8881,-5.20887 4.53066,-7.82528 3.39753,-3.3639 5.72107,-3.32047 9.58226,0.17908 3.5415,3.20981 5.84429,8.68129 4.43617,10.54043 -0.47124,0.62217 -0.86549,1.71138 -0.87611,2.42046 -0.0106,0.70907 -0.72196,2.54644 -1.58078,4.08301 -2.40307,4.29957 -1.99314,5.13985 3.96742,8.13256 2.82552,1.41865 5.53338,2.97544 6.01748,3.45954 0.81445,0.81445 -2.22753,9.184012 -2.1354,14.238232 -1.48367,1.9883 0.82294,3.03963 -1.56039,3.31474 -2.65304,0.30624 -3.51365,0.14066 -3.51365,-0.15608 0,-0.29674 0.47798,-0.50159 1.06219,-0.45523 0.87508,0.0694 1.08137,-0.47704 1.17106,-3.10229 0.0927,-2.71227 -0.0549,-3.18661 -0.9914,-3.18661 -1.00988,0 -2.18815,-2.29088 -1.52127,-2.95777 0.15368,-0.15368 0.29861,0.10752 0.32207,0.58047 0.0262,0.52704 0.2647,0.38999 0.6163,-0.35407 0.47477,-1.00471 0.51773,-0.92625 0.24926,0.45523 -0.19947,1.02644 -0.0606,1.66917 0.36056,1.66917 0.42538,0 0.59096,-0.80504 0.43693,-2.1244 -0.1679,-1.43825 -2e-4,-2.1244 0.51921,-2.1244 0.76697,0 2.02386,-1.824672 2.02386,-2.938122 0,-0.32453 -0.54627,-0.44719 -1.21393,-0.2726 -1.35028,0.35311 -1.6057,1.15806 -0.48592,1.53132 0.45536,0.1518 0.3417,0.39092 -0.30348,0.6385 -0.7461,0.286302 -1.03151,0.0789 -1.03151,-0.74942 0,-2.24558 0.58064,-2.78423 2.88448,-2.67587 2.07964,0.0978 2.16482,0.0391 1.08737,-0.74869 -1.35525,-0.99098 -2.39277,-1.13017 -1.84746,-0.24785 0.20633,0.33384 0.21569,0.60698 0.0208,0.60698 -0.19488,0 -0.60036,-0.64711 -0.90106,-1.43802 -0.32668,-0.8592 -1.19424,-1.5618 -2.1554,-1.74554 -1.02793,-0.1965 -1.39826,-0.0971 -1.02587,0.27527 0.32053,0.32053 0.43905,1.13241 0.26338,1.80418 -0.25859,0.98888 -0.65912,1.15346 -2.10387,0.8645 -1.73917,-0.34783 -3.66544,0.31234 -5.10148,1.74838 -0.77591,0.77591 -1.55758,13.099092 -0.89853,14.165462 0.22624,0.36608 2.03138,0.5919 4.17757,0.52261 2.07854,-0.0671 3.77917,0.0448 3.77917,0.24877 0,0.20391 -2.25338,0.40291 -5.0075,0.44219 l -5.00749,0.0714 0.19174,-6.77561 c 0.21183,-7.485752 -0.28169,-9.206842 -2.84916,-9.936112 -2.35829,-0.66985 -2.70507,-0.68012 -3.86749,-0.11458 -1.09561,0.53301 -1.19536,0.34133 -1.22163,-2.34747 -0.0115,-1.17019 -0.19098,-1.24195 -1.74867,-0.69894 -1.8146,0.63257 -2.90302,1.69956 -1.73371,1.69956 0.37324,0 0.52422,0.24981 0.33552,0.55513 -0.1887,0.30532 -0.0409,0.65584 0.32836,0.77894 0.36929,0.12309 0.67145,1.25802 0.67145,2.52206 0,1.40999 0.32842,2.424262 0.84975,2.624312 0.46737,0.17936 0.84976,0.58613 0.84976,0.90395 0,0.31782 -0.27314,0.40905 -0.60697,0.20273 -0.80642,-0.4984 -0.76026,0.97499 0.0666,2.1244 0.55282,0.76849 0.60165,0.74483 0.31324,-0.15176 -0.18793,-0.5842 -0.0771,-1.06219 0.24623,-1.06219 0.32336,0 0.58792,0.54627 0.58792,1.21394 0,0.71333 -0.40465,1.21395 -0.98124,1.21395 -0.72139,0 -0.88432,0.36166 -0.61526,1.36568 0.20128,0.75113 0.36971,2.11682 0.37427,3.03487 0.006,1.26175 0.30459,1.66916 1.22223,1.66916 0.66766,0 1.21394,0.28511 1.21394,0.63358 0,0.34846 -0.37203,0.55332 -0.82674,0.45523 -0.4547,-0.0981 -1.76776,1.05075 -2.9179,2.553 -1.80872,2.36244 -2.41441,2.74521 -4.48424,2.83386 -1.31619,0.0563 -2.71879,0.12467 -3.11689,0.15175 -0.39925,0.0271 -0.82799,1.20592 -0.95615,2.62887 l -0.23234,2.57961 -0.10604,-2.80878 c -0.12451,-3.29847 -0.69456,-3.88421 -4.35482,-4.47484 -1.50225,-0.24241 -3.02542,-0.67714 -3.38484,-0.96608 -0.37672,-0.30283 -1.46928,-0.21741 -2.57962,0.2017 -1.85755,0.70114 -1.92613,0.85196 -1.92613,4.23577 0,1.93451 -0.27232,3.50874 -0.60697,3.50874 -0.33383,0 -0.60696,-1.32016 -0.60696,-2.93368 0,-1.61353 -0.11361,-3.04749 -0.25244,-3.18659 -0.13884,-0.13908 -2.85297,10e-4 -6.03139,0.31194 -5.38323,0.52614 -5.80405,0.66477 -6.14526,2.02426 -0.20147,0.80269 -0.2003,1.98248 0.003,2.62175 0.25633,0.80765 0.0786,1.16232 -0.58245,1.16232 -0.73698,0 -0.95135,-0.68386 -0.95135,-3.03484 z m 34.70116,-4.64634 c 2.2273,-2.01568 1.04501,-14.41802 -1.93043,-20.250372 -0.78784,-1.54428 -2.07652,-2.83518 -3.61268,-3.61887 l -2.38799,-1.21825 -0.94217,1.34514 c -1.2496,1.78405 -1.19489,3.90569 0.12002,4.65428 0.84199,0.47934 0.92368,0.83163 0.39402,1.69932 -1.43901,2.357372 -7.55361,1.14453 -8.44876,-1.67583 -0.22105,-0.69649 -0.53567,-1.13258 -0.69915,-0.9691 -0.16348,0.16347 0.01,0.87096 0.38507,1.57217 0.55446,1.03602 0.49533,1.34668 -0.31556,1.65785 -0.56253,0.21585 -1.23192,0.0133 -1.5343,-0.46423 -0.35054,-0.5536 -0.53964,0.25707 -0.54572,2.339432 -0.005,1.75263 -0.28242,3.18661 -0.61626,3.18661 -0.33383,0 -0.60696,-1.37171 -0.60696,-3.04824 0,-2.955102 -0.0841,-3.101562 -2.75374,-4.794572 -2.40877,-1.5276 -2.97615,-1.66243 -4.52911,-1.07625 -2.28573,0.86277 -2.85522,0.23952 -1.95657,-2.14128 0.39641,-1.0502 0.59366,-2.03654 0.43835,-2.19185 -0.15531,-0.15531 -1.71078,0.0998 -3.45658,0.56694 -2.60944,0.69823 -3.45613,1.28129 -4.75895,3.27721 -2.294,3.51442 -3.01338,6.672302 -3.01338,13.227982 0,5.60782 0.0563,5.84779 1.66917,7.11773 1.54968,1.22017 2.21228,1.29837 9.25627,1.09236 4.95006,-0.14478 8.109,-0.51346 9.08866,-1.06077 1.47444,-0.82376 1.4361,-0.85802 -2.12439,-1.89815 -1.99427,-0.58259 -5.67446,-1.71174 -8.1782,-2.50923 l -4.55227,-1.44998 -0.17949,-4.07338 c -0.14746,-3.34707 -0.0121,-4.07339 0.75872,-4.07339 0.67475,0 0.93818,0.6215 0.93818,2.21347 v 2.21346 l 4.65533,-0.39352 c 2.56043,-0.21645 7.00138,-0.0927 9.86879,0.27508 5.07319,0.65062 5.29329,0.62615 8.18141,-0.90949 1.63237,-0.86794 3.33698,-1.57808 3.78801,-1.57808 0.47008,0 0.82005,-0.6476 0.82005,-1.51743 0,-0.83459 0.27314,-1.517422 0.60697,-1.517422 0.33383,0 0.60697,0.697042 0.60697,1.548992 0,1.17541 0.43918,1.7021 1.8209,2.18378 1.61781,0.56398 1.82091,0.90815 1.82091,3.08578 v 2.45102 l -2.88311,-0.40806 c -18.81824,-2.66344 -20.93591,-2.74291 -22.27167,-0.83583 -1.18175,1.68719 -1.1943,2.29283 -0.0475,2.29283 0.49355,0 4.13717,1.08696 8.09695,2.41546 13.27792,4.45474 17.00212,5.09207 19.03021,3.25668 z M 70.76364,101.7403 c 0,-0.76237 0.85802,-0.93705 4.60285,-0.93705 3.41143,0 4.53791,0.19639 4.35197,0.75871 -0.16185,0.48945 -1.79541,0.82202 -4.60285,0.93706 -3.59566,0.14734 -4.35197,0.0156 -4.35197,-0.75872 z m 13.96028,-0.33008 c 0,-0.34684 1.82091,-0.60697 4.24879,-0.60697 2.42787,0 4.24877,0.26013 4.24877,0.60697 0,0.34685 -1.8209,0.60698 -4.24877,0.60698 -2.42788,0 -4.24879,-0.26013 -4.24879,-0.60698 z m -11.6538,6.5553 c 0.40061,-0.4006 0.72836,-0.94687 0.72836,-1.21395 0,-0.71974 -2.31559,-0.58837 -3.81991,0.21673 -1.2825,0.68637 -1.28503,0.71292 -0.11184,1.17128 1.73959,0.67966 2.38475,0.6446 3.20339,-0.17405 z m 26.20134,-2.34333 c -0.48938,-0.91441 -1.26864,-1.1728 -3.49172,-1.1578 -1.57396,0.0106 -3.36136,0.39796 -3.972,0.86077 -0.99851,0.75678 -0.75414,0.8817 2.42787,1.24109 1.94598,0.21979 3.81127,0.47842 4.14511,0.57475 1.13317,0.32696 1.5229,-0.33758 0.89074,-1.51881 z m 30.83637,-5.41435 c 0,-1.138823 0.93441,-1.050012 0.58426,-0.699862 -0.31137,0.31135 -0.384,1.139872 -0.16141,1.841142 0.55209,1.73953 -0.42285,1.02785 -0.42285,-1.14128 z M 91.44138,96.959448 c -0.90385,-0.90384 -0.80755,-2.90916 0.26268,-5.47059 1.17052,-2.80146 1.14628,-3.31579 -0.15145,-3.21277 -0.68605,0.0545 -1.13378,-0.42291 -1.26498,-1.34874 -0.12095,-0.85339 0.0454,-1.27948 0.41123,-1.05338 1.11247,0.68754 1.39686,-1.97553 0.39612,-3.70943 -0.91047,-1.57752 -0.95692,-1.59367 -0.67156,-0.23342 0.39535,1.88459 -0.87029,4.82444 -2.87121,6.66925 -0.86732,0.79964 -1.43148,1.68927 -1.25369,1.97693 0.17779,0.28767 -0.0696,0.67379 -0.5498,0.85805 -0.48018,0.18426 -0.87306,0.95734 -0.87306,1.71794 0,1.16303 0.25335,1.33597 1.59329,1.08766 0.87631,-0.1624 1.78606,-0.59254 2.02165,-0.95587 0.2356,-0.36333 0.38182,-0.0427 0.32493,0.71236 -0.0681,0.90335 -0.39338,1.26171 -0.95116,1.04766 -0.58152,-0.22314 -0.73121,-0.0215 -0.47668,0.64168 0.20408,0.53183 0.37526,1.14949 0.38036,1.37256 0.005,0.22307 0.25744,0.0135 0.56071,-0.46584 0.45523,-0.71942 0.71713,-0.7339 1.50145,-0.083 0.52252,0.43366 0.80228,1.02752 0.6217,1.3197 -0.18059,0.29218 0.11393,0.36153 0.65445,0.15412 0.69645,-0.26726 0.79405,-0.56586 0.33501,-1.0249 z m -2.70298,-5.75575 c -0.2511,-0.4063 -0.70768,-0.58351 -1.01462,-0.39381 -0.30694,0.18969 -0.39745,-0.0737 -0.20114,-0.58527 0.44175,-1.1512 3.11548,-1.02049 3.57412,0.17472 0.44881,1.16955 -0.24276,1.77224 -0.86966,0.75789 -0.41067,-0.66448 -0.5482,-0.66669 -0.76632,-0.0124 -0.20452,0.61356 -0.37114,0.62711 -0.72239,0.0588 z m -37.46103,1.20059 c 1.91454,-2.98354 2.61375,-5.31974 1.15582,-3.86181 -0.89419,0.8942 -4.39503,0.95268 -5.98819,0.10005 -0.64572,-0.34558 -1.17404,-0.42714 -1.17404,-0.18123 0,0.41835 3.76639,6.87925 4.01026,6.87925 0.0616,0 0.95985,-1.32131 1.99615,-2.93624 z m 68.03006,-3.91351 c 0.008,-0.26212 -0.51461,-0.19385 -1.16033,0.15175 -1.59317,0.85264 -5.094,0.79415 -5.9882,-0.10004 -1.46801,-1.46802 -0.75264,0.88773 1.18793,3.91183 l 1.91627,2.98626 2.01531,-3.23661 c 1.10842,-1.78013 2.02147,-3.45106 2.02902,-3.71318 z m -39.81716,4.27013 c -2.17717,-4.22698 -2.66151,-4.71143 -3.9228,-3.92374 -0.66452,0.415 -1.16202,1.40673 -1.16202,2.31642 0,1.33138 0.22702,1.54733 1.39233,1.32457 0.83326,-0.15928 1.99093,0.23198 2.8831,0.97443 1.96566,1.63577 1.99518,1.61054 0.80939,-0.69168 z m 3.41274,0.47635 c 0,-0.82296 0.84835,-2.46252 1.88522,-3.64344 1.21626,-1.38524 1.74765,-2.50565 1.49753,-3.15746 -0.29549,-0.77004 -0.55619,-0.84183 -1.09617,-0.30186 -0.90661,0.90663 -5.11651,0.9241 -5.67307,0.0235 -0.2919,-0.4723 -0.58772,-0.39111 -0.95297,0.26155 -0.36559,0.65327 0.0835,2.08444 1.44967,4.6201 2.13944,3.97081 2.88979,4.54141 2.88979,2.19756 z m -27.77493,-1.14505 c 0.38677,0.23903 0.47149,0.11397 0.2097,-0.3096 -0.51644,-0.83563 -1.59058,-0.33388 -1.52134,0.71064 0.0343,0.51741 0.1353,0.50615 0.35533,-0.0396 0.16906,-0.41937 0.59941,-0.58202 0.95631,-0.36144 z m -3.24329,-5.00519 c 1.69408,-1.00072 4.3116,-5.85981 4.3116,-8.00392 0,-1.1444 -0.40339,-1.2146 -6.98013,-1.2146 -7.98723,0 -7.95072,-0.0329 -5.52572,4.97486 2.35171,4.85639 4.91219,6.18241 8.19425,4.24366 z m 66.76518,-0.79105 c 1.03681,-0.96853 1.88511,-2.30076 1.88511,-2.96053 0,-0.65977 0.4097,-1.5396 0.91045,-1.95519 0.50074,-0.41558 0.91045,-1.37574 0.91045,-2.13367 0,-1.3529 -0.12753,-1.37808 -6.98014,-1.37808 -8.01593,0 -8.14158,0.11789 -5.64105,5.29277 2.49908,5.17184 5.57618,6.25379 8.91518,3.1347 z m -26.03545,0.547 c 0.50074,-0.3236 0.63731,-0.58838 0.30348,-0.58838 -0.33383,0 -1.01668,0.26478 -1.51742,0.58838 -0.50075,0.32361 -0.63732,0.58838 -0.30349,0.58838 0.33384,0 1.01667,-0.26477 1.51743,-0.58838 z m -6.09525,-3.54783 c 1.34939,-1.28364 2.45344,-2.88901 2.45344,-3.56749 0,-0.67848 0.4097,-1.57363 0.91045,-1.98921 0.50074,-0.41559 0.91045,-1.57501 0.91045,-2.57652 0,-1.62711 -0.10741,-1.73225 -1.00916,-0.98787 -0.78675,0.64944 -1.06544,0.66582 -1.26452,0.0743 -0.18114,-0.53822 -1.9899,-0.75871 -6.22388,-0.75871 -4.18134,0 -6.07455,0.22718 -6.3226,0.75871 -0.28325,0.60697 -0.42487,0.60697 -0.70812,0 -0.19474,-0.41729 -0.60444,-0.75871 -0.91045,-0.75871 -0.8176,0 -0.67744,2.30307 0.25285,4.15513 0.44509,0.88609 1.20324,2.42433 1.68478,3.41832 1.04295,2.15285 4.41012,4.56592 6.37122,4.56592 0.79636,0 2.46205,-1.0083 3.85554,-2.33389 z m 1.65412,1.00615 c -0.19375,-0.4842 -0.33758,-0.34037 -0.3667,0.36671 -0.0264,0.63985 0.11711,0.99834 0.31879,0.79664 0.20169,-0.20169 0.22325,-0.72519 0.0479,-1.16335 z m 34.56121,-11.55343 c -0.52118,-1.79284 -1.60224,-3.87469 -2.40234,-4.62634 l -1.45473,-1.36664 -0.38516,1.92583 c -0.21184,1.05922 -0.38518,2.84768 -0.38518,3.97436 0,1.30346 -0.29463,2.04852 -0.81007,2.04852 -0.63204,0 -0.74768,-1.07777 -0.5262,-4.90385 l 0.28389,-4.90386 -1.74994,0.19985 -1.74994,0.19986 0.20727,4.70401 c 0.12186,2.76554 -0.0344,4.70401 -0.37936,4.70401 -0.69257,0 -1.34532,-2.9015 -1.34532,-5.98002 v -2.18647 l -1.65712,1.65711 c -0.91141,0.91141 -2.09963,3.01456 -2.6405,4.67368 l -0.98339,3.01656 8.25496,0.16827 c 4.54023,0.0926 8.34852,0.12025 8.46286,0.0616 0.11434,-0.0587 -0.21853,-1.5736 -0.73972,-3.36643 z m -65.89997,0.0662 c -0.55645,-1.70693 -1.67881,-3.79987 -2.49414,-4.65099 l -1.48242,-1.54748 -0.15774,2.07137 c -0.29685,3.89826 -0.8078,6.01667 -1.45118,6.01667 -0.4165,0 -0.56737,-1.65916 -0.42773,-4.70401 l 0.21573,-4.70401 h -1.80061 c -1.77641,0 -1.79857,0.0408 -1.64827,3.03484 0.0838,1.66917 0.30122,3.78597 0.48317,4.70401 0.24892,1.25601 0.0935,1.66917 -0.62787,1.66917 -0.71372,0 -0.97414,-0.65913 -1.01918,-2.57962 -0.0333,-1.41879 -0.24808,-3.25243 -0.47734,-4.07476 l -0.41683,-1.49514 -1.56323,2.10211 c -1.41056,1.89682 -2.94482,5.41094 -2.94482,6.74495 0,0.28402 3.78544,0.51639 8.4121,0.51639 h 8.41209 z m 35.77989,-1.33859 c 0,-2.13223 -1.97356,-7.01263 -3.60356,-8.91122 -1.52334,-1.77437 -1.92523,-1.97438 -2.43918,-1.21393 -0.33843,0.50075 -0.62252,1.72986 -0.63131,2.73135 -0.0268,3.05792 -0.73503,6.37318 -1.36144,6.37318 -0.37548,0 -0.43366,-2.22659 -0.15859,-6.06969 l 0.43443,-6.06969 h -2.54999 -2.54999 l 0.42654,5.68933 c 0.26441,3.52675 0.20121,5.8286 -0.16625,6.05571 -0.61203,0.37826 -1.36094,-3.62641 -1.36094,-7.27749 0,-4.21478 -3.72671,-1.00437 -5.68436,4.89685 -1.6197,4.88251 -2.20134,4.59588 9.32617,4.59588 8.13604,0 10.31847,-0.16928 10.31847,-0.80028 z M 55.89291,112.33573 c 0.20633,-0.33383 0.90528,-0.60696 1.55324,-0.60696 0.64797,0 1.17812,0.27313 1.17812,0.60696 0,0.33384 -0.69896,0.60697 -1.55324,0.60697 -0.88093,0 -1.39087,-0.26272 -1.17812,-0.60697 z m 53.56499,0.17862 c 0.75112,-0.14466 1.98023,-0.14466 2.73136,0 0.75112,0.14469 0.13656,0.26304 -1.36569,0.26304 -1.50224,0 -2.1168,-0.11837 -1.36567,-0.26304 z m -68.57142,-4.26566 c 1.42761,-0.12821 3.6127,-0.1264 4.85575,0.004 1.24305,0.13042 0.075,0.23535 -2.59566,0.23314 -2.67066,-0.002 -3.6877,-0.10894 -2.26009,-0.23715 z m 10.94733,0.0306 c 0.43815,-0.17533 0.96166,-0.15376 1.16335,0.0479 0.2017,0.20171 -0.15679,0.34516 -0.79664,0.3188 -0.70709,-0.0291 -0.85091,-0.17294 -0.36671,-0.36671 z m 57.02799,-0.0253 c 1.09093,-0.1351 2.72975,-0.1323 3.64181,0.006 0.91206,0.1385 0.0195,0.24903 -1.98352,0.24563 -2.003,-0.003 -2.74923,-0.11674 -1.65829,-0.25182 z m 9.7115,0 c 1.09093,-0.1351 2.72975,-0.1323 3.64181,0.006 0.91206,0.1385 0.0195,0.24903 -1.98352,0.24563 -2.003,-0.003 -2.74923,-0.11674 -1.65829,-0.25182 z m 6.09675,0.0253 c 0.43815,-0.17533 0.96166,-0.15376 1.16335,0.0479 0.2017,0.20171 -0.15679,0.34516 -0.79664,0.3188 -0.70709,-0.0291 -0.85091,-0.17294 -0.36671,-0.36671 z m -85.73231,-4.89638 c 0.11856,-1.72505 -0.16127,-2.53007 -1.1557,-3.32485 -1.31218,-1.048752 -0.78393,-1.492312 0.67474,-0.566572 1.27814,0.811182 2.19701,6.167562 1.05802,6.167562 -0.47074,0 -0.67745,-0.81535 -0.57706,-2.27614 z m 7.85064,1.66916 c 0.20633,-0.33383 0.49558,-0.60697 0.64279,-0.60697 0.14721,0 0.26767,0.27314 0.26767,0.60697 0,0.33384 -0.28926,0.60698 -0.6428,0.60698 -0.35353,0 -0.47398,-0.27314 -0.26766,-0.60698 z m 5.55902,-0.27139 c -0.26467,-0.68974 0.0267,-0.94254 1.08611,-0.94254 0.79628,0 1.59995,-0.34142 1.78592,-0.75873 0.18598,-0.41729 0.27702,-0.0759 0.20232,0.75873 -0.15792,1.76439 -2.48519,2.4779 -3.07436,0.94254 z m 57.02369,-0.0817 c -0.49703,-1.29526 -0.469,-1.46779 0.23855,-1.46779 0.33383,0 0.60697,0.38694 0.60697,0.85988 0,0.47293 0.34141,0.99763 0.75871,1.16601 0.47911,0.19333 0.3912,0.32382 -0.23855,0.35408 -0.54849,0.0264 -1.16304,-0.38414 -1.36568,-0.91218 z m 3.27339,0.35312 c 0,-0.33383 -0.4097,-0.60696 -0.91045,-0.60696 -0.50075,0 -0.91046,-0.26457 -0.91046,-0.58793 0,-0.32336 0.44123,-0.4186 0.9805,-0.21167 0.798,0.30622 0.89607,0.11025 0.52689,-1.05295 -0.3938,-1.24074 -0.34012,-1.31287 0.4071,-0.54704 0.98573,1.01028 1.32841,3.61352 0.47567,3.61352 -0.31309,0 -0.56925,-0.27313 -0.56925,-0.60697 z m 4.26737,0.30349 c 0,-0.33384 0.23235,-0.97356 0.51632,-1.42163 0.43065,-0.67946 0.73129,-0.68042 1.81162,-0.006 1.62583,1.01535 1.65946,1.73086 0.0813,1.73086 -0.66767,0 -1.21812,-0.34142 -1.22323,-0.75873 -0.006,-0.50579 -0.20543,-0.45521 -0.59768,0.15175 -0.3236,0.50076 -0.58837,0.63734 -0.58837,0.3035 z m -74.02084,-1.87148 c 0.0291,-0.70709 0.17294,-0.85092 0.3667,-0.36672 0.17534,0.43816 0.15378,0.96168 -0.0479,1.16336 -0.20169,0.2017 -0.34515,-0.1568 -0.31879,-0.79664 z m 1.38551,0.0506 c -0.49797,-1.29769 0.18451,-2.73138 1.30023,-2.73138 0.78172,0 0.82794,0.22967 0.25986,1.29115 -0.53897,1.00707 -0.51028,1.40564 0.1304,1.81161 0.63505,0.40242 0.57611,0.5226 -0.25987,0.52978 -0.59468,0.005 -1.23846,-0.40041 -1.43061,-0.90116 z m 75.32507,-1.07008 c -0.55384,-1.19369 -0.46214,-1.35781 0.75872,-1.35781 0.76378,0 1.3887,0.20486 1.3887,0.45523 0,0.25038 -0.25311,0.45523 -0.56247,0.45523 -0.30935,0 -0.65077,0.40617 -0.7587,0.90258 -0.13981,0.643 -0.37744,0.51208 -0.82625,-0.45523 z m -2.15696,0.008 c -0.0306,-0.0835 -0.18234,-1.03945 -0.33721,-2.1244 -0.21424,-1.500822 -0.0558,-1.972652 0.66257,-1.972652 0.5193,0 0.94,0.47799 0.93488,1.06219 -0.008,0.913742 -0.0966,0.934952 -0.63413,0.15176 -0.4941,-0.71996 -0.5874,-0.59297 -0.44593,0.606962 0.0984,0.83459 0.45204,1.71811 0.78588,1.96337 0.37589,0.27617 0.31812,0.44947 -0.15176,0.45523 -0.41729,0.005 -0.78374,-0.059 -0.81432,-0.14244 z m -64.28308,-0.76958 c 0,-0.4913 1.73949,-0.71801 2.39598,-0.31227 0.49136,0.30368 0.19793,0.47495 -0.81376,0.47495 -0.87022,0 -1.58222,-0.0732 -1.58222,-0.16268 z m -10.62514,-1.43077 c 0.29916,-0.987552 0.22504,-1.310862 -0.23527,-1.026372 -0.3696,0.22842 -0.672,0.0968 -0.672,-0.29241 0,-0.38925 0.39206,-0.55728 0.87125,-0.3734 0.47917,0.18387 1.02293,0.008 1.20833,-0.39029 0.1854,-0.39854 0.17235,-0.0418 -0.029,0.7928 -0.20135,0.83459 -0.63923,1.790562 -0.97307,2.124402 -0.40464,0.40464 -0.46139,0.12639 -0.17024,-0.83473 z m 9.03885,-0.690472 c 0.0957,-1.6983 1.11668,-1.80557 1.37026,-0.14397 0.12938,0.847802 -0.10397,1.365682 -0.61536,1.365682 -0.45307,0 -0.79278,-0.54978 -0.7549,-1.221712 z m 61.06922,0.008 c -0.49727,-0.92916 -0.4616,-1.21395 0.15207,-1.21395 0.44097,0 0.80175,0.54627 0.80175,1.21395 0,0.667662 -0.0684,1.213932 -0.15208,1.213932 -0.0836,0 -0.44442,-0.54627 -0.80174,-1.213932 z m 7.28363,-0.18748 c 0,-0.56456 0.27313,-1.02646 0.60697,-1.02646 0.87363,0 0.74912,-1.66239 -0.15176,-2.02589 -0.57058,-0.23024 -0.55649,-0.31803 0.0568,-0.35407 0.44855,-0.0264 0.96895,0.53874 1.15646,1.25577 0.32615,1.24723 0.37626,1.25535 1.1571,0.18747 0.44892,-0.61391 0.8162,-0.84308 0.8162,-0.50924 0,0.33383 -0.40102,1.13716 -0.89115,1.78517 -0.68423,0.90463 -0.90012,0.9668 -0.92976,0.26775 -0.0296,-0.69905 -0.24553,-0.63687 -0.92975,0.26775 -0.77708,1.027392 -0.89115,1.046822 -0.89115,0.15175 z M 36.0374,97.314218 c -0.20018,-0.75079 -0.0983,-1.52926 0.2264,-1.72993 0.84636,-0.5231 0.9722,-0.14724 0.52818,1.57759 -0.38877,1.51022 -0.39234,1.51095 -0.75458,0.15234 z"
                        id="engineer" />
                    </g>
                </svg>
            </div>
            <div className="gear-2">
                <svg
                    viewBox="0 0 165 165"
                    version="1.1"
                    id="svg3"
                >
                    <defs
                        id="GEAR-2" />
                    <g
                        id="CAMADA-3">
                        <path
                        d="m 75.783591,156.94152 c -0.0877,-0.23319 -0.25846,-1.01758 -0.37954,-1.74309 -2.14229,-12.83641 -2.47756,-14.67296 -2.75932,-15.1147 -0.28986,-0.45445 -0.83346,-0.63275 -3.32682,-1.0912 -0.90686,-0.16674 -2.89637,-0.71586 -4.42113,-1.22026 -2.688405,-0.88935 -2.787802,-0.90757 -3.284492,-0.60225 -0.281711,0.17316 -2.723165,2.98601 -5.425457,6.25078 -2.702291,3.26475 -5.153931,6.16271 -5.448088,6.43989 -0.688565,0.64882 -0.895589,0.5934 -3.476805,-0.9309 -1.978462,-1.16836 -2.519415,-1.48237 -6.068362,-3.52254 -1.087282,-0.62504 -1.586855,-1.02734 -1.665496,-1.34118 -0.06988,-0.27887 0.117183,-1.0732 0.494867,-2.10145 0.333961,-0.90922 0.982255,-2.67071 1.44065,-3.91444 0.458397,-1.24371 1.075566,-2.93969 1.371489,-3.76883 0.295922,-0.82915 0.93404,-2.56753 1.41804,-3.86307 0.484,-1.29554 0.924387,-2.5039 0.978638,-2.68526 0.07174,-0.23983 -0.769282,-1.19048 -3.084184,-3.48618 -1.750552,-1.73605 -3.503092,-3.51685 -3.894533,-3.95734 -0.465621,-0.52394 -0.868668,-0.80087 -1.165643,-0.80087 -0.249663,0 -1.618249,0.43008 -3.041302,0.95573 -1.423054,0.52564 -3.370829,1.24549 -4.32839,1.59965 -0.957562,0.35416 -2.566103,0.94736 -3.574535,1.31821 -1.008433,0.37085 -2.486898,0.923 -3.285479,1.22698 -2.055998,0.78263 -2.491621,0.74756 -3.083153,-0.24818 -3.450542,-5.80839 -5.535906,-9.6249 -5.434311,-9.94553 0.06371,-0.20114 0.512742,-0.68447 0.997789,-1.07407 0.485046,-0.38959 2.955071,-2.44732 5.488944,-4.57271 2.533873,-2.12539 5.008806,-4.18323 5.499852,-4.57297 1.595381,-1.26626 1.596626,-1.2728 0.731629,-3.8462 -0.413254,-1.229447 -1.045872,-3.531471 -1.405817,-5.115636 -0.359946,-1.584161 -0.751397,-2.99731 -0.869892,-3.140318 -0.266122,-0.321183 -1.040852,-0.49139 -6.493347,-1.426574 -2.379886,-0.408182 -5.258331,-0.904095 -6.39654,-1.102022 -1.138208,-0.197926 -2.5073816,-0.417355 -3.0426136,-0.487616 -1.753683,-0.230219 -1.647096,0.208924 -1.607511,-6.622829 0.03982,-6.872349 -0.05355,-6.517876 1.779935,-6.758749 0.5438719,-0.07146 1.9201206,-0.29204 3.0583276,-0.490187 1.138209,-0.198148 3.804999,-0.656592 5.926203,-1.018757 6.449346,-1.101142 6.879681,-1.208908 7.03579,-1.761949 0.04805,-0.170228 0.185033,-0.818301 0.304401,-1.440157 0.400887,-2.088436 1.142389,-4.88544 1.781653,-6.720538 0.348902,-1.001563 0.588756,-1.995734 0.533009,-2.209258 -0.08977,-0.343839 -4.599899,-4.234704 -10.902055,-9.405154 -1.174533,-0.963616 -2.220704,-1.911463 -2.324816,-2.10632 -0.243914,-0.456499 -0.158801,-0.667467 1.180289,-2.925567 2.038523,-3.437554 2.332287,-3.944694 3.251175,-5.612657 1.460358,-2.650839 1.570726,-2.711422 3.529602,-1.937465 0.638489,0.252268 2.473118,0.938104 4.076956,1.524079 1.603837,0.585976 3.339368,1.226985 3.856735,1.424463 3.53071,1.347671 6.19397,2.246055 6.658429,2.246055 0.641339,0 0.837238,-0.164868 2.668883,-2.246112 0.76796,-0.872609 2.285221,-2.387649 3.371692,-3.366753 1.086471,-0.979105 2.048076,-1.931496 2.136899,-2.116424 0.109237,-0.227427 0.0086,-0.72343 -0.310996,-1.532745 -0.259872,-0.65808 -0.605228,-1.578105 -0.767458,-2.044499 -0.30301,-0.871124 -0.938887,-2.619613 -3.308319,-9.096992 -0.928203,-2.53745 -1.326766,-3.871463 -1.249184,-4.181083 0.08376,-0.334277 0.599539,-0.724234 1.947595,-1.472488 1.008516,-0.559787 3.2382,-1.837064 4.954856,-2.83839 1.731395,-1.009925 3.335043,-1.820595 3.601454,-1.820595 0.380896,0 0.805549,0.398033 2.052476,1.923821 0.864719,1.058101 1.874413,2.266486 2.243765,2.6853 0.369352,0.418816 1.717356,2.033467 2.995563,3.588115 3.707393,4.509198 3.989409,4.830296 4.41162,5.022984 0.308417,0.140756 1.003987,-0.01733 3.027703,-0.688111 1.44502,-0.478965 3.47391,-1.040251 4.50864,-1.247301 2.75485,-0.551245 3.26768,-0.709846 3.45479,-1.068461 0.0927,-0.177722 0.31397,-1.171121 0.49165,-2.207553 0.2965,-1.729491 0.71425,-4.121979 2.07299,-11.871861 0.33964,-1.9371742 0.59186,-2.900755 0.80153,-3.062186 0.22953,-0.1767138 1.75378,-0.2355533 6.10213,-0.2355533 5.54534,0 5.81246,0.01631 6.17245,0.3768846 0.20694,0.2072867 0.37627,0.536961 0.37627,0.7326092 0,0.195649 0.20594,1.4464342 0.45765,2.7795225 0.25171,1.33309 0.63255,3.483788 0.84631,4.779328 1.15414,6.994827 1.4655,8.511029 1.82089,8.866997 0.23627,0.236658 0.93655,0.459415 2.05042,0.652225 1.8212,0.315254 5.781052,1.399142 7.294379,1.996612 0.51214,0.202202 1.08776,0.317861 1.27914,0.257019 0.3516,-0.111772 1.54377,-1.408065 3.39526,-3.691776 0.55596,-0.685746 2.15375,-2.605539 3.55064,-4.266207 1.39689,-1.660667 2.95781,-3.537572 3.46871,-4.170902 0.72207,-0.895104 1.04189,-1.151506 1.43632,-1.151506 0.30383,0 1.89376,0.807646 3.96257,2.012868 1.90033,1.107078 4.13242,2.402974 4.96021,2.879769 1.32394,0.762577 1.51199,0.937647 1.56264,1.454791 0.0377,0.384494 -0.50647,2.110123 -1.57269,4.987694 -0.89665,2.419891 -1.92468,5.205393 -2.28453,6.190003 -0.35985,0.984611 -0.90087,2.433411 -1.20228,3.219555 -0.30141,0.786144 -0.54801,1.609219 -0.54801,1.829053 0,0.608057 7.59571,8.142348 8.20871,8.142348 0.25402,0 1.24126,-0.290555 2.19387,-0.645679 0.95262,-0.355123 3.17124,-1.162276 4.93029,-1.793674 1.75905,-0.631397 3.36758,-1.225696 3.57453,-1.320665 0.20695,-0.09497 1.05355,-0.40416 1.88134,-0.687094 0.82778,-0.282933 1.87189,-0.670064 2.32023,-0.860289 1.02189,-0.433577 1.58776,-0.438253 1.94674,-0.01609 0.15423,0.181377 0.82056,1.304963 1.48076,2.49686 0.66019,1.191897 1.90143,3.354271 2.75832,4.805276 0.85688,1.451011 1.55822,2.774683 1.55853,2.9415 6.6e-4,0.358974 -0.60346,0.949677 -3.00958,2.942711 -9.41894,7.801913 -10.34734,8.627358 -10.34734,9.19997 0,0.221887 0.29381,1.258804 0.65292,2.304268 0.59029,1.718536 1.54925,5.432022 1.87269,7.2518 0.20515,1.154242 -0.0175,1.084053 7.6336,2.406198 1.81077,0.312907 4.30826,0.737228 5.54994,0.94294 3.92024,0.649461 4.32157,0.743417 4.56223,1.068127 0.17619,0.237718 0.23517,1.773277 0.23517,6.122984 0,6.632024 0.0503,6.42669 -1.63261,6.655783 -1.00795,0.137202 -3.05491,0.481691 -6.17493,1.039197 -1.1382,0.203382 -3.17004,0.546852 -4.5152,0.76326 -3.31461,0.533263 -5.00359,0.896717 -5.29576,1.139592 -0.13432,0.111655 -0.29914,0.512487 -0.36626,0.890734 -0.33605,1.893771 -1.29055,5.618293 -1.8959,7.397907 -0.42542,1.25064 -0.63729,2.16785 -0.5659,2.44976 0.10481,0.41382 3.75041,3.58063 10.83144,9.40891 2.80269,2.30686 2.79358,2.25879 0.99813,5.2691 -0.71087,1.19189 -1.90618,3.26947 -2.65622,4.61683 -0.75004,1.34736 -1.50299,2.60519 -1.67322,2.79518 -0.43396,0.48431 -1.17476,0.35234 -3.98559,-0.70998 -1.29341,-0.48885 -3.1136,-1.16811 -4.04486,-1.50947 -0.93126,-0.34137 -3.22824,-1.18296 -5.10439,-1.87018 -1.87615,-0.68723 -3.62123,-1.24952 -3.87796,-1.24952 -0.35776,0 -0.88533,0.47618 -2.25889,2.03882 -0.98565,1.12135 -2.69735,2.83838 -3.80378,3.81562 -2.38195,2.10385 -2.3307,1.81196 -0.95713,5.45209 0.48887,1.29554 1.08634,2.90672 1.32774,3.58041 0.2414,0.67368 0.8328,2.28486 1.31423,3.5804 2.14578,5.77436 2.24081,6.1425 1.70144,6.59088 -0.15217,0.1265 -1.57023,0.97179 -3.15124,1.87844 -1.58101,0.90664 -3.68628,2.12791 -4.67838,2.71393 -1.10723,0.65404 -2.02084,1.0655 -2.36582,1.0655 -0.59008,0 -0.44846,0.16015 -9.61171,-10.86919 -2.17495,-2.61786 -2.15834,-2.61005 -4.09786,-1.92589 -2.393609,0.84435 -5.622549,1.68745 -7.463679,1.94882 -1.54868,0.21984 -1.64175,0.38432 -2.25425,3.98375 -2.00284,11.76974 -2.32183,13.53926 -2.48977,13.81145 -0.0926,0.14992 -1.94396,0.21186 -6.33269,0.21186 h -6.20195 z m 9.85757,-35.75392 c 3.31356,-0.3043 6.86296,-1.10874 9.93291,-2.25121 13.944329,-5.18931 23.616419,-17.51215 25.358569,-32.3083 0.33066,-2.808237 0.12961,-8.743778 -0.38374,-11.329174 -1.59032,-8.009422 -4.91856,-14.480955 -10.355,-20.134519 -6.0774,-6.320121 -14.158229,-10.374768 -23.001589,-11.54132 -2.85306,-0.376358 -8.76217,-0.277309 -11.3341,0.189982 -8.0756,1.467252 -15.022556,4.983028 -20.664257,10.457946 C 47.918081,61.331788 43.76,70.713482 43.27723,81.158192 c -0.169581,3.668859 0.498722,8.524207 1.726242,12.541491 5.382314,17.614637 22.448269,29.158287 40.637689,27.487917 z"
                        id="gear-2" />
                    </g>
                </svg>
            </div>
            <div className="workers">
                <svg
                    viewBox="25 35 145 145"
                    version="1.1"
                    id="svg4"
                >
                    <defs
                        id="WORKER" />
                    <animate attributeName="viewBox" from="110 35 145 145" to="25 35 145 145" dur="3s" begin="6.6s" />
                    <g                        
                        id="CAMADA-4">
                        <path
                        d="m 94.199518,104.34529 c -1.31428,-0.74494 -1.44426,-2.64939 -1.44426,-21.16228 0,-14.27657 -0.25981,-20.08388 -0.87117,-19.47252 -0.47913,0.47914 -1.09335,4.30081 -1.36493,8.4926 -0.35938,5.54712 -0.8188,7.74617 -1.688,8.07971 -2.12946,0.81716 -2.78782,-1.6882 -2.37208,-9.02711 0.45436,-8.02073 2.5517,-13.95157 5.48983,-15.524 1.13396,-0.60687 4.46188,-0.86793 8.790402,-0.68956 6.28104,0.25884 7.12268,0.48982 8.56393,2.35028 2.29129,2.95772 3.26446,7.15923 3.42684,14.79494 0.1466,6.893 -0.62125,8.94919 -3.00088,8.03604 -1.03195,-0.396 -1.30514,-1.96134 -1.35142,-7.74352 -0.0319,-3.98596 -0.37718,-7.98996 -0.76729,-8.89778 -0.42283,-0.984 -0.7327,6.57458 -0.76728,18.71642 -0.0494,17.36257 -0.24932,20.55831 -1.35489,21.66388 -0.71329,0.71329 -1.61521,1.29689 -2.00428,1.29689 -0.38907,0 -1.29099,-0.5836 -2.00428,-1.29689 -1.05216,-1.05215 -1.32979,-3.73861 -1.47129,-14.23626 l -0.174392,-12.93938 -0.44457,13.10599 c -0.40445,11.92323 -0.59353,13.20368 -2.09516,14.18857 -1.15425,0.75706 -2.08486,0.83643 -3.09483,0.26398 z m -12.81791,-4.65673 c -0.32619,-0.79433 -0.59308,-9.15026 -0.59308,-18.56873 0,-9.41845 -0.22679,-17.12461 -0.50401,-17.12478 -0.5768,-3.6e-4 -1.54136,7.22283 -1.55204,11.62253 -0.008,3.35326 -0.49001,4.13729 -2.15109,3.49988 -1.43433,-0.55041 -1.59484,-10.59499 -0.24824,-15.53537 1.4365,-5.27024 3.58097,-7.01498 8.62216,-7.01498 h 4.2917 l -1.73956,3.50749 c -1.85194,3.73406 -1.98682,7.5907 -1.0146,29.01136 0.23614,5.20262 0.0643,9.64106 -0.40745,10.52246 -1.03319,1.93055 -3.92372,1.9798 -4.70379,0.0801 z m 6.92285,0.13883 c -0.80403,-2.09522 -0.57626,-18.50154 0.25684,-18.50154 0.4168,0 1.2524,-0.1898 1.85691,-0.42177 0.87919,-0.33738 1.09911,1.64417 1.09911,9.90349 0,9.02725 -0.17046,10.32526 -1.35596,10.32526 -0.74577,0 -1.58138,-0.58745 -1.8569,-1.30544 z m -18.10715,-1.72063 c -0.30262,-0.30261 -0.5502,-8.16351 -0.5502,-17.46866 0,-17.35241 -0.6544,-21.1547 -1.55517,-9.03607 -0.39393,5.29982 -0.78615,6.8353 -1.746,6.8353 -1.65107,0 -2.12241,-7.54289 -0.83703,-13.39478 1.19746,-5.45154 3.72934,-7.65014 8.8098,-7.65014 h 3.6237 l -1.46546,2.68219 c -1.249,2.28606 -1.49177,5.17357 -1.64367,19.5512 -0.098,9.27796 -0.3649,17.35549 -0.59307,17.95009 -0.43376,1.13039 -3.09407,1.47971 -4.0429,0.53087 z m 6.60232,0 c -0.58781,-0.58781 -0.78601,-17.60621 -0.20504,-17.60621 0.18984,0 0.93259,-0.22542 1.65058,-0.50094 1.14418,-0.43906 1.30543,0.68234 1.30543,9.0782 0,7.43242 -0.24659,9.57914 -1.10037,9.57914 -0.60523,0 -1.34799,-0.24758 -1.6506,-0.55019 z m -16.06566,-2.09074 c -0.69275,-0.69275 -1.01507,-5.59061 -1.07261,-16.2995 -0.0481,-8.95627 -0.35646,-14.45295 -0.74303,-13.24591 -0.36341,1.13477 -0.69778,4.19867 -0.74303,6.80865 -0.0601,3.46425 -0.39232,4.74542 -1.23073,4.74542 -3.49578,0 -1.72743,-16.17559 1.9856,-18.16273 0.84163,-0.45043 2.89422,-0.81896 4.5613,-0.81896 2.56012,0 2.93988,0.2244 2.44417,1.44426 -1.8295,4.50213 -2.06358,7.54306 -1.55468,20.19642 0.42643,10.60264 0.3125,14.09264 -0.49162,15.06156 -1.26175,1.52031 -1.85494,1.57122 -3.15537,0.27079 z m 5.7441,-0.0329 c -0.58735,-0.58734 -0.95741,-3.88688 -0.95741,-8.53635 0,-6.88488 0.15115,-7.61848 1.65058,-8.01059 1.57204,-0.4111 1.65058,-0.0253 1.65058,8.10795 0,8.47361 -0.50192,10.28084 -2.34375,8.43899 z m -9.82929,-1.22008 c -0.72605,-0.26045 -1.03161,-2.67191 -1.03161,-8.14154 0,-7.2213 0.11685,-7.77149 1.65058,-7.77149 1.53403,0 1.65058,0.55019 1.65058,7.79156 0,7.75111 -0.30085,8.82767 -2.26955,8.12147 z m -6.22364,-0.74789 c -0.32175,-0.32174 -0.58501,-6.89848 -0.58501,-14.61495 0,-13.87761 -0.67485,-18.44961 -1.10238,-7.46842 -0.16767,4.30675 -0.51014,5.68029 -1.41628,5.68029 -0.94395,0 -1.18657,-1.34313 -1.15435,-6.39012 0.0533,-8.35156 1.64889,-10.82397 7.222,-11.19083 l 3.79554,-0.24985 -1.40271,2.72572 c -1.16282,2.25956 -1.40272,5.19572 -1.40272,17.16831 0,13.91069 -0.062,14.45147 -1.68454,14.68373 -0.9265,0.13262 -1.9478,-0.0222 -2.26955,-0.34388 z m -8.85056,-14.54617 c -0.008,-8.96368 -0.27793,-13.00046 -0.81265,-12.17305 -0.44001,0.68087 -0.8057,3.18769 -0.81265,5.57072 -0.01,3.43067 -0.28978,4.33278 -1.34371,4.33278 -1.12571,0 -1.28193,-0.86953 -1.0126,-5.63602 0.42374,-7.49912 2.05749,-10.04451 6.44704,-10.04451 h 3.24003 l -1.27203,3.04438 c -1.04076,2.49089 -1.1662,5.02006 -0.68998,13.91154 0.6387,11.92512 0.27099,14.40513 -2.13584,14.40513 -1.51048,0 -1.59564,-0.71042 -1.60761,-13.41097 z m 4.96439,6.4843 c 0,-5.39572 0.27361,-7.03168 1.23793,-7.40172 1.04368,-0.4005 1.23794,0.68643 1.23794,6.92668 0,6.02911 -0.22957,7.40171 -1.23794,7.40171 -1.00205,0 -1.23793,-1.31982 -1.23793,-6.92667 z m -13.28692,-6.89695 c -0.0499,-7.38067 -0.3424,-11.36077 -0.74303,-10.10981 -0.36342,1.13477 -0.69778,3.4559 -0.74302,5.15806 -0.14134,5.31722 -1.73359,3.40799 -1.72069,-2.06323 0.017,-7.19362 1.19645,-9.21938 5.5529,-9.53707 l 3.46322,-0.25255 -1.20789,2.31578 c -0.90027,1.72601 -1.20919,5.41597 -1.21298,14.48882 -0.005,11.62115 -0.0799,12.17305 -1.65567,12.17305 -1.57226,0 -1.65448,-0.57762 -1.73284,-12.17305 z m 4.89541,6.31093 c -0.28238,-6.04042 0.15632,-7.93907 1.62469,-7.03155 1.27257,0.78648 0.97678,12.89367 -0.315,12.89367 -0.70775,0 -1.12241,-1.85602 -1.30969,-5.86212 z m -7.56412,4.48672 c -0.30261,-0.30262 -0.55019,-3.08797 -0.55019,-6.18969 0,-4.46269 0.25832,-5.63949 1.23793,-5.63949 0.99036,0 1.23794,1.23794 1.23794,6.18968 0,5.69228 -0.47673,7.08844 -1.92568,5.6395 z m 4.89356,-29.41285 c -1.79441,-1.31211 -1.49344,-4.57416 0.53961,-5.84862 3.23308,-2.02669 6.52278,3.58576 3.42812,5.84862 -0.81073,0.59282 -1.70346,1.07786 -1.98386,1.07786 -0.2804,0 -1.17314,-0.48504 -1.98387,-1.07786 z m 7.48581,-1.12292 c -1.20474,-1.20474 -0.51277,-5.1888 1.04613,-6.0231 2.36786,-1.26724 3.17917,-1.06524 4.63298,1.15356 1.79277,2.73611 0.39661,5.41973 -2.81963,5.41973 -1.27011,0 -2.55688,-0.24759 -2.85948,-0.55019 z m 8.91803,-1.95068 c -1.19929,-1.3252 -1.35229,-2.1449 -0.73169,-3.92012 1.43796,-4.11323 7.76928,-3.21787 7.76928,1.0987 0,4.09386 -4.31904,5.82539 -7.03759,2.82142 z m 9.98507,-1.27189 c -1.76631,-1.7663 -1.62889,-4.14815 0.35368,-6.13073 1.98643,-1.98641 3.16927,-2.06377 5.5934,-0.36585 1.98027,1.38703 2.33922,3.65721 0.9799,6.19714 -1.05184,1.96536 -5.08665,2.13978 -6.92698,0.29944 z m 10.99623,-0.58943 c -3.69007,-2.81051 -2.01659,-8.84247 2.45323,-8.84247 4.53854,0 6.62159,5.04136 3.41005,8.25291 -1.86628,1.86629 -3.91634,2.07242 -5.86328,0.58956 z m 10.99865,-1.87428 c -3.87237,-2.71232 -1.02332,-9.85459 3.70488,-9.28773 2.77122,0.33224 5.55328,4.00029 4.81007,6.34194 -1.30314,4.10587 -5.02192,5.39239 -8.51495,2.94579 z m 11.43035,-2.54038 c -2.23219,-2.83776 -2.16574,-5.36299 0.19961,-7.58511 3.85276,-3.61947 9.919082,-1.18379 9.919082,3.9826 0,5.4182 -6.789172,7.83531 -10.118692,3.60251 z"
                        id="workers" />
                    </g>
                </svg>
            </div>
            <div className="gear-3">
                <svg
                    viewBox="0 0 165 165"
                    version="1.1"
                    id="svg5"
                >
                    <defs
                        id="GEARS-3" />
                    <g                
                        id="CAMADA-5">
                        <path
                        d="m 75.783591,156.94152 c -0.0877,-0.23319 -0.25846,-1.01758 -0.37954,-1.74309 -2.14229,-12.83641 -2.47756,-14.67296 -2.75932,-15.1147 -0.28986,-0.45445 -0.83346,-0.63275 -3.32682,-1.0912 -0.90686,-0.16674 -2.89637,-0.71586 -4.42113,-1.22026 -2.688405,-0.88935 -2.787802,-0.90757 -3.284492,-0.60225 -0.281711,0.17316 -2.723165,2.98601 -5.425457,6.25078 -2.702291,3.26475 -5.153931,6.16271 -5.448088,6.43989 -0.688565,0.64882 -0.895589,0.5934 -3.476805,-0.9309 -1.978462,-1.16836 -2.519415,-1.48237 -6.068362,-3.52254 -1.087282,-0.62504 -1.586855,-1.02734 -1.665496,-1.34118 -0.06988,-0.27887 0.117183,-1.0732 0.494867,-2.10145 0.333961,-0.90922 0.982255,-2.67071 1.44065,-3.91444 0.458397,-1.24371 1.075566,-2.93969 1.371489,-3.76883 0.295922,-0.82915 0.93404,-2.56753 1.41804,-3.86307 0.484,-1.29554 0.924387,-2.5039 0.978638,-2.68526 0.07174,-0.23983 -0.769282,-1.19048 -3.084184,-3.48618 -1.750552,-1.73605 -3.503092,-3.51685 -3.894533,-3.95734 -0.465621,-0.52394 -0.868668,-0.80087 -1.165643,-0.80087 -0.249663,0 -1.618249,0.43008 -3.041302,0.95573 -1.423054,0.52564 -3.370829,1.24549 -4.32839,1.59965 -0.957562,0.35416 -2.566103,0.94736 -3.574535,1.31821 -1.008433,0.37085 -2.486898,0.923 -3.285479,1.22698 -2.055998,0.78263 -2.491621,0.74756 -3.083153,-0.24818 -3.450542,-5.80839 -5.535906,-9.6249 -5.434311,-9.94553 0.06371,-0.20114 0.512742,-0.68447 0.997789,-1.07407 0.485046,-0.38959 2.955071,-2.44732 5.488944,-4.57271 2.533873,-2.12539 5.008806,-4.18323 5.499852,-4.57297 1.595381,-1.26626 1.596626,-1.2728 0.731629,-3.8462 -0.413254,-1.229447 -1.045872,-3.531471 -1.405817,-5.115636 -0.359946,-1.584161 -0.751397,-2.99731 -0.869892,-3.140318 -0.266122,-0.321183 -1.040852,-0.49139 -6.493347,-1.426574 -2.379886,-0.408182 -5.258331,-0.904095 -6.39654,-1.102022 -1.138208,-0.197926 -2.5073816,-0.417355 -3.0426136,-0.487616 -1.753683,-0.230219 -1.647096,0.208924 -1.607511,-6.622829 0.03982,-6.872349 -0.05355,-6.517876 1.779935,-6.758749 0.5438719,-0.07146 1.9201206,-0.29204 3.0583276,-0.490187 1.138209,-0.198148 3.804999,-0.656592 5.926203,-1.018757 6.449346,-1.101142 6.879681,-1.208908 7.03579,-1.761949 0.04805,-0.170228 0.185033,-0.818301 0.304401,-1.440157 0.400887,-2.088436 1.142389,-4.88544 1.781653,-6.720538 0.348902,-1.001563 0.588756,-1.995734 0.533009,-2.209258 -0.08977,-0.343839 -4.599899,-4.234704 -10.902055,-9.405154 -1.174533,-0.963616 -2.220704,-1.911463 -2.324816,-2.10632 -0.243914,-0.456499 -0.158801,-0.667467 1.180289,-2.925567 2.038523,-3.437554 2.332287,-3.944694 3.251175,-5.612657 1.460358,-2.650839 1.570726,-2.711422 3.529602,-1.937465 0.638489,0.252268 2.473118,0.938104 4.076956,1.524079 1.603837,0.585976 3.339368,1.226985 3.856735,1.424463 3.53071,1.347671 6.19397,2.246055 6.658429,2.246055 0.641339,0 0.837238,-0.164868 2.668883,-2.246112 0.76796,-0.872609 2.285221,-2.387649 3.371692,-3.366753 1.086471,-0.979105 2.048076,-1.931496 2.136899,-2.116424 0.109237,-0.227427 0.0086,-0.72343 -0.310996,-1.532745 -0.259872,-0.65808 -0.605228,-1.578105 -0.767458,-2.044499 -0.30301,-0.871124 -0.938887,-2.619613 -3.308319,-9.096992 -0.928203,-2.53745 -1.326766,-3.871463 -1.249184,-4.181083 0.08376,-0.334277 0.599539,-0.724234 1.947595,-1.472488 1.008516,-0.559787 3.2382,-1.837064 4.954856,-2.83839 1.731395,-1.009925 3.335043,-1.820595 3.601454,-1.820595 0.380896,0 0.805549,0.398033 2.052476,1.923821 0.864719,1.058101 1.874413,2.266486 2.243765,2.6853 0.369352,0.418816 1.717356,2.033467 2.995563,3.588115 3.707393,4.509198 3.989409,4.830296 4.41162,5.022984 0.308417,0.140756 1.003987,-0.01733 3.027703,-0.688111 1.44502,-0.478965 3.47391,-1.040251 4.50864,-1.247301 2.75485,-0.551245 3.26768,-0.709846 3.45479,-1.068461 0.0927,-0.177722 0.31397,-1.171121 0.49165,-2.207553 0.2965,-1.729491 0.71425,-4.121979 2.07299,-11.871861 0.33964,-1.9371742 0.59186,-2.900755 0.80153,-3.062186 0.22953,-0.1767138 1.75378,-0.2355533 6.10213,-0.2355533 5.54534,0 5.81246,0.01631 6.17245,0.3768846 0.20694,0.2072867 0.37627,0.536961 0.37627,0.7326092 0,0.195649 0.20594,1.4464342 0.45765,2.7795225 0.25171,1.33309 0.63255,3.483788 0.84631,4.779328 1.15414,6.994827 1.4655,8.511029 1.82089,8.866997 0.23627,0.236658 0.93655,0.459415 2.05042,0.652225 1.8212,0.315254 5.781052,1.399142 7.294379,1.996612 0.51214,0.202202 1.08776,0.317861 1.27914,0.257019 0.3516,-0.111772 1.54377,-1.408065 3.39526,-3.691776 0.55596,-0.685746 2.15375,-2.605539 3.55064,-4.266207 1.39689,-1.660667 2.95781,-3.537572 3.46871,-4.170902 0.72207,-0.895104 1.04189,-1.151506 1.43632,-1.151506 0.30383,0 1.89376,0.807646 3.96257,2.012868 1.90033,1.107078 4.13242,2.402974 4.96021,2.879769 1.32394,0.762577 1.51199,0.937647 1.56264,1.454791 0.0377,0.384494 -0.50647,2.110123 -1.57269,4.987694 -0.89665,2.419891 -1.92468,5.205393 -2.28453,6.190003 -0.35985,0.984611 -0.90087,2.433411 -1.20228,3.219555 -0.30141,0.786144 -0.54801,1.609219 -0.54801,1.829053 0,0.608057 7.59571,8.142348 8.20871,8.142348 0.25402,0 1.24126,-0.290555 2.19387,-0.645679 0.95262,-0.355123 3.17124,-1.162276 4.93029,-1.793674 1.75905,-0.631397 3.36758,-1.225696 3.57453,-1.320665 0.20695,-0.09497 1.05355,-0.40416 1.88134,-0.687094 0.82778,-0.282933 1.87189,-0.670064 2.32023,-0.860289 1.02189,-0.433577 1.58776,-0.438253 1.94674,-0.01609 0.15423,0.181377 0.82056,1.304963 1.48076,2.49686 0.66019,1.191897 1.90143,3.354271 2.75832,4.805276 0.85688,1.451011 1.55822,2.774683 1.55853,2.9415 6.6e-4,0.358974 -0.60346,0.949677 -3.00958,2.942711 -9.41894,7.801913 -10.34734,8.627358 -10.34734,9.19997 0,0.221887 0.29381,1.258804 0.65292,2.304268 0.59029,1.718536 1.54925,5.432022 1.87269,7.2518 0.20515,1.154242 -0.0175,1.084053 7.6336,2.406198 1.81077,0.312907 4.30826,0.737228 5.54994,0.94294 3.92024,0.649461 4.32157,0.743417 4.56223,1.068127 0.17619,0.237718 0.23517,1.773277 0.23517,6.122984 0,6.632024 0.0503,6.42669 -1.63261,6.655783 -1.00795,0.137202 -3.05491,0.481691 -6.17493,1.039197 -1.1382,0.203382 -3.17004,0.546852 -4.5152,0.76326 -3.31461,0.533263 -5.00359,0.896717 -5.29576,1.139592 -0.13432,0.111655 -0.29914,0.512487 -0.36626,0.890734 -0.33605,1.893771 -1.29055,5.618293 -1.8959,7.397907 -0.42542,1.25064 -0.63729,2.16785 -0.5659,2.44976 0.10481,0.41382 3.75041,3.58063 10.83144,9.40891 2.80269,2.30686 2.79358,2.25879 0.99813,5.2691 -0.71087,1.19189 -1.90618,3.26947 -2.65622,4.61683 -0.75004,1.34736 -1.50299,2.60519 -1.67322,2.79518 -0.43396,0.48431 -1.17476,0.35234 -3.98559,-0.70998 -1.29341,-0.48885 -3.1136,-1.16811 -4.04486,-1.50947 -0.93126,-0.34137 -3.22824,-1.18296 -5.10439,-1.87018 -1.87615,-0.68723 -3.62123,-1.24952 -3.87796,-1.24952 -0.35776,0 -0.88533,0.47618 -2.25889,2.03882 -0.98565,1.12135 -2.69735,2.83838 -3.80378,3.81562 -2.38195,2.10385 -2.3307,1.81196 -0.95713,5.45209 0.48887,1.29554 1.08634,2.90672 1.32774,3.58041 0.2414,0.67368 0.8328,2.28486 1.31423,3.5804 2.14578,5.77436 2.24081,6.1425 1.70144,6.59088 -0.15217,0.1265 -1.57023,0.97179 -3.15124,1.87844 -1.58101,0.90664 -3.68628,2.12791 -4.67838,2.71393 -1.10723,0.65404 -2.02084,1.0655 -2.36582,1.0655 -0.59008,0 -0.44846,0.16015 -9.61171,-10.86919 -2.17495,-2.61786 -2.15834,-2.61005 -4.09786,-1.92589 -2.393609,0.84435 -5.622549,1.68745 -7.463679,1.94882 -1.54868,0.21984 -1.64175,0.38432 -2.25425,3.98375 -2.00284,11.76974 -2.32183,13.53926 -2.48977,13.81145 -0.0926,0.14992 -1.94396,0.21186 -6.33269,0.21186 h -6.20195 z m 9.85757,-35.75392 c 3.31356,-0.3043 6.86296,-1.10874 9.93291,-2.25121 13.944329,-5.18931 23.616419,-17.51215 25.358569,-32.3083 0.33066,-2.808237 0.12961,-8.743778 -0.38374,-11.329174 -1.59032,-8.009422 -4.91856,-14.480955 -10.355,-20.134519 -6.0774,-6.320121 -14.158229,-10.374768 -23.001589,-11.54132 -2.85306,-0.376358 -8.76217,-0.277309 -11.3341,0.189982 -8.0756,1.467252 -15.022556,4.983028 -20.664257,10.457946 C 47.918081,61.331788 43.76,70.713482 43.27723,81.158192 c -0.169581,3.668859 0.498722,8.524207 1.726242,12.541491 5.382314,17.614637 22.448269,29.158287 40.637689,27.487917 z"
                        id="gear-3" />
                    </g>
                </svg>
            </div>
            <div className="graphwrapper">
                <svg width="280px" height="107px" viewBox="0 0 315 107" version="1.1" style={{overflow:"visible"}}>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path d="m 13.577413,52.688444 c 0.718773,-0.693124 4.445385,-4.286618 8.281344,-7.985545 l 6.974484,-6.725326 4.479961,-2.102058 4.479958,-2.102062 2.189074,-4.29408 2.189066,-4.29408 0.661812,-0.224843 c 0.364001,-0.123663 3.250519,-1.073536 6.414494,-2.110833 l 5.752669,-1.885997 4.989046,-6.688917 c 2.74398,-3.678901 5.045904,-6.7609905 5.115388,-6.8490795 0.102667,-0.130147 0.113882,-0.04645"
                        id="Path-1" stroke="grey" strokeWidth="6" className="path"></path>

                        {/* <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch:type="MSPage">
                        <path  d="m 13.577413,52.688444 c 0.718773,-0.693124 4.445385,-4.286618 8.281344,-7.985545 l 6.974484,-6.725326 4.479961,-2.102058 4.479958,-2.102062 2.189074,-4.29408 2.189066,-4.29408 0.661812,-0.224843 c 0.364001,-0.123663 3.250519,-1.073536 6.414494,-2.110833 l 5.752669,-1.885997 4.989046,-6.688917 c 2.74398,-3.678901 5.045904,-6.7609905 5.115388,-6.8490795 0.102667,-0.130147 0.113882,-0.04645" id="Path-1" stroke="grey" strokeWidth="5" sketch:type="MSShapeGroup" className="path"></path> */}


                        <polyline id="arrow" points="0,-10 10.5,0 0,10 -0.2,0" fill="grey">
                            <animateMotion rotate="auto" begin="14s" dur="2.8s" repeatCount="1" fill="freeze">
                            <mpath xlinkHref="#Path-1" />
                            </animateMotion>
                        </polyline>

                    </g>
                </svg>
            </div>
            <div className="text-info">
                <h3 className='focus-in-expand'>Otimização<br></br>de<br></br>processos</h3>
            </div>
          </div>
        </div>

      <div>
        {/* <LoginButton />
        <LogoutButton /> */}
        <div className='finalresults'>
          <div className='finalresultstext'>
            <div className='ativos'>
              <p>COLABORADORES ATIVOS</p>
              <input type="number" placeholder='<= 50' min="0" max="50" step="1" value={input5} onChange={handleChange5} name="" id="input5" />
            </div>
            <div className='qtdcolaboradores'>
              <p>PRODUTIVIDADE</p>
              <div className='qtdcolaboradoresresult'>

                {load ? <h3 className='prodload'>aguarde</h3> : ''}
                {load === false && isNaN(sumProdutividadeArredondado) || load === false && sumProdutividadeArredondado === '0.0' || load === false && input5 === 0 || load === false && sumProdutividadeArredondado === 'Infinity' ? <h2> 0 </h2> : ''}
                {load === false && sumProdutividadeArredondado !== 0 && sumProdutividadeArredondado !== 'Infinity' && sumProdutividadeArredondado >= 100 ? <h2 className='positivo'>{sumProdutividadeArredondado}%</h2> : ''}
                {load === false &&  sumProdutividadeArredondado !== 0 && sumColaboradoresArrendondado !== '0.0' && sumProdutividadeArredondado < 100 ? <h2 className='negativo'>{sumProdutividadeArredondado}%</h2> : ''}
              </div>
            </div>
          </div>

          <div className='finalresultstext'>
            <p>CÁLCULO HOMEM/MÁQUINA</p>
            <div className='qtdcolaboradores necessarios'>
              <p className='test'>COLABORADORES<br></br>NECESSÁRIOS</p>
              <div className='qtdcolaboradoresresult'>
                <img src={workers} id='workers-logo' alt="" />
                {isNaN(sumColaboradoresArrendondado) || sumColaboradoresArrendondado === '0.0' ? <h2> 0 </h2> : ''}
                {sumColaboradoresArrendondado > '0.00001' && sumColaboradoresArrendondado < '1.0' ? <h2> 1 </h2> :''}
                {sumColaboradoresArrendondado > '1.00001' ? <h2> {sumColaboradoresArrendondado} </h2> : ''}             
              </div>
            </div>          
          </div>
        </div>
      </div> 
    </div>       
    </>
  )
}