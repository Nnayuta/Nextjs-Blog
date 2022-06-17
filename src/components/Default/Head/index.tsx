import { NextSeo } from 'next-seo';
import React from 'react';

interface IHeadProps {
    title: string;
    url: string;
}


const HeadSEO: React.FC<IHeadProps> = ({ title, url }) => {
    return (
        <NextSeo
            title={`DizzProject & Nayuta | ${title}`}
            description="Blog about programming and design, and other things."
            canonical={`https://nizzy.vercel.app${url}`}
            openGraph={{
                url: 'https://nizzy.vercel.app/',
                title: '`DizzProject & Nayuta',
                description: 'Blog about programming and design, and other things.',
                images: [
                    {
                        url: 'https://nizzy.vercel.app/images/og-image.png',
                        width: 800,
                        height: 600,
                        alt: 'blog image',
                        type: 'image/jpeg',
                    },
                    {
                        url: 'https://nizzy.vercel.app/images/og-image.png',
                        width: 900,
                        height: 800,
                        alt: 'blog image',
                        type: 'image/jpeg',
                    },
                    { url: 'https://nizzy.vercel.app/images/og-image.png' },
                    { url: 'https://nizzy.vercel.app/images/og-image.png' },
                ],
                site_name: 'Nizzy Blog',
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_imagew3',
            }}
        />
    );
}

export default HeadSEO;