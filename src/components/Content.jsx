import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstElementActive: false,
            isSecondElementActive: false,
        };
    }

    toggleFirstElement = () => {
        this.setState((prevState) => ({
            isFirstElementActive: !prevState.isFirstElementActive,
        }));
    };

    toggleSecondElement = () => {
        this.setState((prevState) => ({
            isSecondElementActive: !prevState.isSecondElementActive,
        }));
    };

    render() {
        return (
            <div>
                <p
                    className={this.state.isFirstElementActive ? 'highlight-1' : ''}
                    onClick={this.toggleFirstElement}
                    style={{ cursor: 'pointer' }}
                >
                    Місце народження: 11 жовтня 2006 року, м. Житомир
                </p>

                <p
                    className={this.state.isSecondElementActive ? 'highlight-2' : ''}
                    onClick={this.toggleSecondElement}
                    style={{ cursor: 'pointer' }}
                >
                    Освіта: Малинський ліцей №1 ім. Ніни Сосніної, м. Малин;<br />
                    НТУУ "КПІ", м. Київ
                </p>

                <p>Хобі:</p>
                <ul>
                    <li>Шахи</li>
                    <li>Програмування (C#, Python)</li>
                    <li>Відеоігри (Balatro)</li>
                </ul>

                <p>Улюблені фільми:</p>
                <ol>
                    <li>"La La Land", 2016</li>
                    <li>"Fallen Angels", 1995</li>
                    <li>"The Departed", 2006</li>
                </ol>

                <p>Київ — столиця та найбільше місто України, розташоване на річці Дніпро. Це одне з найстаріших міст Європи, багате
                    на історичні пам'ятки, архітектуру та культурну спадщину. Київ вражає своїми зеленими парками, старовинними
                    церквами та швидким ритмом сучасного життя.</p>
            </div>
        );
    }
}

export default Content;