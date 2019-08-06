import React from 'react';
const scaleRatio = 1;
function fetchDom(dom, callback) {
    if (dom) {
        callback()
    } else {
        setTimeout(() => {
            fetchDom(dom, callback)
        }, 0)
    }
}
class Canvas extends React.Component {
    canvas = null;
    componentDidMount() {
        fetchDom(this.canvas, this.initCanvas.bind(this));
    }

    initCanvas() {
        const styleDom = window.getComputedStyle(this.canvas.parentNode);
        const width = (window.parseFloat(styleDom.getPropertyValue('width')));
        const height = (window.parseFloat(styleDom.getPropertyValue('height')));
        this.canvas.style.width = `${width}px`;
        this.canvas.style.height = `${height}px`;
        this.canvas.width = width * scaleRatio;
        this.canvas.height = height * scaleRatio;
        this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    render() {
        const { style } = this.props;
        let s = style || {}
        return <canvas ref={r => this.canvas = r} style={{ ...s }} />
    }
}

export default Canvas;