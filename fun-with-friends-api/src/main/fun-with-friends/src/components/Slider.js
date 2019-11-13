import React, { Component } from "react";
import styled from 'styled-components';

const sliderThumbStyles = (props) => (`
  width: 25px;
  height: 25px;
  background: ${props.color};
  cursor: pointer;
  outline: 5px solid #333;
  -webkit-transition: .2s;
  transition: opacity .2s;
`);


const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .value {
    flex: 1;
    font-size: 2rem;
  }
  .slider {
    flex: 1;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

class Slider extends Component{
    state = {
        value: 50
    }

    handleChange = (e) => {
        // this.value = e.target.value
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <Styles color = {this.props.color}>
                <input type='range' min={0} max={1000} className='slider' onChange={this.handleChange}/>
                <div className="value">{this.state.value}</div>
            </Styles>
        )
    }
}

export default Slider;