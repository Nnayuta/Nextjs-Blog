import React from 'react';

const SideBarConfig = () => {
    return (
        <div>
            <div>
                <h1>Dados Pessoais</h1>
                <div>
                    <div>
                        <div>
                            <label htmlFor="">E-mail:</label>
                            <div>
                                <p>nayutagay@hotmail.com</p>
                                <input type="email" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Senha:</label>
                            <div>
                                <p>*****</p>
                                <input type="password" />
                            </div>
                        </div>
                        <div>
                            <picture>
                                <source media='(min-width:177px)' srcSet="" />
                                <source media='(min-width:128px)' srcSet="" />
                                <img src="" alt="" />
                            </picture>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Nome de Exibição:</label>
                            <div>
                                <p>Birolinha</p>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBarConfig;
