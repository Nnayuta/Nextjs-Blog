import SidebarButton from '../SidebarButton';
import * as S from './styled';

const sideBarItems = [
    {
        title: 'Painel',
    },
    {
        title: 'Artigos',
    },
    {
        title: 'Multimidia',
    },
    {
        title: 'Configurações',
    }
];

const SideBar = ({ active, onClick }) => {

    return (
        <S.SideContainer>
            <S.Container>
                {sideBarItems.map((item, index) => (
                    <SidebarButton
                        key={index}
                        isActive={index === active}
                        onclick={() => onClick(index)}
                    >{item.title}
                    </SidebarButton>
                ))}
            </S.Container>
            <S.Logout>Logout</S.Logout>
        </S.SideContainer>
    );
}

export default SideBar;
