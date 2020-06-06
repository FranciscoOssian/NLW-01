import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './styles.css';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta"></img>
                </header>

                <main>
                    <h1>Cadastro realizado com sucesso</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                    
                    <Link to="/">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Voltar a Home</strong>
                    </Link>
                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastrar outro ponto</strong>
                    </Link>
                </main>
            </div>
        </div>
    );
};

export default Home;