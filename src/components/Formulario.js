import React, { Component } from 'react';

class Formulario extends Component {
    render() {
        const {
            estado,
            onChangeHandler
        } = this.props
        return (
            <form action="">
                <input
                    type="text"
                    onChange={onChangeHandler}
                    value={estado.name}
                />
            </form>
        );
    }
}

export default Formulario;