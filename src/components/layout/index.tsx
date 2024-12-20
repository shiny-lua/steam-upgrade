import React, { useState, ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: { children: ReactNode }) => {

    return (
        <div className="h-full w-full bg-primary pt-5 pb-8">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
