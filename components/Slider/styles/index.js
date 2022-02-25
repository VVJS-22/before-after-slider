import styled from 'styled-components'

export const Wrapper = styled.section`
    height: ${({ tWidth }) => `${+tWidth/2}px`};
    border-radius: 20px;
    overflow: hidden;
    #b-image {
        width: ${({ tWidth }) => `${+tWidth}px`};
        height: 100%;
        background: ${({aImage}) => `url(${aImage})`};
        background-repeat: no-repeat;
        background-size: cover;

        position: relative;

        #a-image {
            width: ${({aWidth}) => `${aWidth}%`};
            height: 100%;
            background: ${({bImage}) => `url(${bImage})`};
            background-repeat: no-repeat;
            background-size: ${({ tWidth }) => `${+tWidth}px`};
            border-right: 0.25rem solid #e5e4e3;
        }

        #handle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            background: #fff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 10px;
                height: 10px;
            }
        }

        input[type=range]{
            -webkit-appearance:none;
            -moz-appearance:none;
            background-color: transparent;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            z-index: 10;
        
            &:focus,
            &:active {
            border: none;
            outline: none;
            }
        }
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            border: none;
            width: 50px;
            height: 50px;
        }
        input[type=range]::-moz-range-track {
            -moz-appearance:none;
            height:100%;
            width: 100%;
            outline: none;    
        }
    }

`