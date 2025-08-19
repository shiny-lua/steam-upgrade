import React, { useState, ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={`flex flex-col justify-between h-full min-h-screen w-full bg-primary pb-8`}>
            <Header />
            <div className="pt-20">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
