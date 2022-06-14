import React from 'react';
import * as S from './styled';
import Link from 'next/link';

interface ILinkProps {
    children: React.ReactNode;
    href?: string;
    isActive?: boolean;
    className?: string;
}

const LinkIcon: React.FC<ILinkProps> = ({ children, href = '#', isActive, className }) => {
    return (
        <Link href={href}>
            <S.Button className={className} id={isActive ? 'Active' : ''}  >{children}</S.Button>
        </Link>
    );
}

export default LinkIcon;
