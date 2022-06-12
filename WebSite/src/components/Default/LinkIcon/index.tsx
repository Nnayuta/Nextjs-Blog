import React from 'react';
import * as S from './styled';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    isActive?: boolean;
    className?: string;
}

const LinkIcon = ({ children, href = '#', isActive, className }: ButtonProps) => {
    return (
        <Link href={href}>
            <S.Button className={className} id={isActive ? 'Active' : ''}  >{children}</S.Button>
        </Link>
    );
}

export default LinkIcon;
