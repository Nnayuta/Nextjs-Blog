import React from 'react';
import * as S from './styled'

interface LoadingProps {
    style?: React.CSSProperties
}

export const Loading: React.FC<LoadingProps> = (props) => {
    return (
        <S.Container style={props.style}>sync</S.Container>
    )
}
