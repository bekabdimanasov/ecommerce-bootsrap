import React from "react";
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .jumbo {
        background: url("https://images.pexels.com/photos/5560376/pexels-photo-5560376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500") no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        
    }
`

const Jumbotron = props => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Web Developer Blog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti, dolorum minus molestias
                    obcaecati perferendis porro possimus ratione soluta sunt velit voluptas? Aliquid est illo quis sed
                    sequi sunt, ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti, dolorum minus molestias
                    obcaecati perferendis porro possimus ratione soluta sunt velit voluptas? Aliquid est illo quis sed
                    sequi sunt, ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti, dolorum minus molestias
                    obcaecati perferendis porro possimus ratione soluta sunt velit voluptas? Aliquid est illo quis sed
                    sequi sunt, ullam?
                </p>
            </Container>
        </Jumbo>
    </Styles>
)

export default Jumbotron;