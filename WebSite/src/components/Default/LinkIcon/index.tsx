import React from 'react';
import * as S from './styled';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    isActive?: boolean;
}

const LinkIcon = ({ children, href = '#', isActive }: ButtonProps) => {
    return (
        <Link href={href}>
            <S.Button className="material-icons" id={isActive ? 'Active' : ''}  >{children}</S.Button>
        </Link>
    );
}

export default LinkIcon;
