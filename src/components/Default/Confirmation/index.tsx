import React from 'react';
import Draggable from 'react-draggable';
import { ButtonIcon } from '../ButtonIcon';
import { Loading } from '../Loading';
import * as S from './styled';

interface ConfirmationProps {
  title: string
  toConfirm: string,
  deleteConfirm?: () => Promise<void>,
  deleteCancel?: () => void,
  deleting?: boolean
}

export const Confirmation: React.FC<ConfirmationProps> = (props) => {

  return (
    <Draggable
      handle='.handle'
    >
      <S.Container>
        <S.Wrapper>
          {!props.deleting ?
            <>
              <S.WrapperTitle className='handle'>
                <strong>Caixa de Confirmação</strong>
              </S.WrapperTitle>
              <S.WrapperInfo>
                <div>
                  {props.title}
                </div>
                <div>
                  <strong>{`"${props.toConfirm}"`}</strong>
                </div>
              </S.WrapperInfo>
              <S.ConfirmArea>
                <ButtonIcon onClick={props.deleteConfirm} hoverActive >check</ButtonIcon>
                <ButtonIcon onClick={props.deleteCancel} hoverActive>close</ButtonIcon>
              </S.ConfirmArea>
            </>
            :
            <Loading />}
        </S.Wrapper>
      </S.Container>
    </Draggable>
  )
}