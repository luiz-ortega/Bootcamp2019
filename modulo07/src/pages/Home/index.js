import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://images.evo.com/imgp/700/76904/625497/vans-old-skool-shoes-color-block-true-white-black.jpg"
                    alt="Tênnis"
                />
                <strong>Tênnis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>

            <li>
                <img
                    src="https://images.evo.com/imgp/700/76904/625497/vans-old-skool-shoes-color-block-true-white-black.jpg"
                    alt="Tênnis"
                />
                <strong>Tênnis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>

            <li>
                <img
                    src="https://images.evo.com/imgp/700/76904/625497/vans-old-skool-shoes-color-block-true-white-black.jpg"
                    alt="Tênnis"
                />
                <strong>Tênnis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
}
