import React from 'react';
import * as S from './styled';
import Link from 'next/link';

interface ILinkProps {
    children: React.ReactNode;
    href?: string;
    isActive?: boolean;
    className?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
}

export const LinkIcon: React.FC<ILinkProps> = ({ children, href = '#', isActive, className, target }) => {
    return (
        <Link href={href} target={target}>
            <S.Button className={className} id={isActive ? 'Active' : ''}  >{children}</S.Button>
        </Link>
    );
}
