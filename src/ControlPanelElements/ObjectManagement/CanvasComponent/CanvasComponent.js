import React from 'react';

class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Рисуем красный прямоугольник
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Рисуем зелёную линию
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(190, 10);
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Рисуем синий круг
        ctx.beginPath();
        ctx.arc(100, 50, 40, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();

        // Добавляем чёрный текст
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Привет, Canvas!', 50, 80);

    }

    render() {
        return (
            <canvas ref={this.canvasRef} width="200" height="100"></canvas>
        );
    }
}



export default CanvasComponent;