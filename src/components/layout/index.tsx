import React, { useState, ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: { children: ReactNode }) => {

    return (
        <div className="h-full w-full bg-primary pb-8">
            <Header />
            <div className="pt-20">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
