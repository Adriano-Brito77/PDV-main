import { useState } from "react";
import style from "./teste.module.css"; // Importação do CSS modular

const arraySaffado = [
    {
        id: 1,
        numero: 1,
        cor: "verde",
        altura: 1.7,
        carros: [
            { id: 1, marca: "fiat", roda: 17 },
            { id: 2, marca: "chevrolet", roda: 20 },
        ],
    },
    {
        id: 2,
        numero: 2,
        cor: "azul",
        altura: 1.8,
        carros: [
            { id: 3, marca: "ford", roda: 16 },
            { id: 4, marca: "toyota", roda: 18 },
        ],
    },
];

const Teste = () => {
    const [expandedIds, setExpandedIds] = useState([]); // IDs dos itens expandidos

    const toggleExpand = (id) => {
        setExpandedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

 

    console.log(expandedIds)

    return (
       <div className={style.back}>
         <div className={style.container}>
            <div className={style.container_sale_list}>
                {arraySaffado.map((dono) => {
                    const isExpanded = expandedIds.includes(dono.id); // Verifica se está expandido
                    return (
                        <div
                            key={dono.id}
                            className={`${style.container_sale} ${isExpanded ? style.expanded : ""
                            }`}
                            
                        >
                            <div className={style.container_sale_user}>
                                <button
                                    className={style.toggle_button}
                                    onClick={() => toggleExpand(dono.id)}
                                >
                                    {isExpanded ? "Contrair" : "Expandir"}
                                </button>
                                <span>
                                    <p>Descrição: {dono.numero}</p>
                                    <p>Cor: {dono.cor}</p>
                                    <p>Altura: {dono.altura}m</p>
                                </span>
                            </div>
                            <div
                                className={`${style.container_sale_car} ${
                                    isExpanded ? style.visible : ""
                                }`}
                            >
                                {dono.carros.map((car) => (
                                    <footer key={car.id}>
                                        <p>ID: {car.id}</p>
                                        <p>Marca: {car.marca}</p>
                                        <p>Roda: {car.roda}"</p>
                                    </footer>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
       </div>
    );
};

export default Teste;
