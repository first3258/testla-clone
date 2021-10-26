import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Fade from 'react-reveal/Fade';
function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

            <Buttons >
                <Fade bottom>

                <ButtonGroup>
                    <LeftButton className="buttons">
                        {leftBtnText}
                    </LeftButton>

                    <RightButton className="buttons">
                        {rightBtnText}
                    </RightButton>

                </ButtonGroup>
                </Fade>

                
        
            
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>   
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    // background-image: url('/images/model-s.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url('/images/${props.bgImage}')`}
    
`

const ItemText = styled.div`
    text-align: center;
    padding-top: 15vh;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
    
`

const LeftButton = styled.div`
    background-color: #393c41;
    color: white;
    width: 256px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: #393c41;
    opacity: 0.9;
`

const DownArrow = styled.img`
    height: 50px;  
    width: 100%;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
    
`


export default Section
