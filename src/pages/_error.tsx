import React from 'react';
import HeadSEO from "../components/Default/Head"
import LinkIcon from '../components/Default/LinkIcon';
import Header from '../components/Main/Header';

const pages: React.FC = () => {
    return (
        <>
            <HeadSEO title="Error" url={'?'} />
            <LinkIcon href='/' > home </LinkIcon>
            <Header />
            <Header />
            <Header />
        </>
    )
}

export default pages;