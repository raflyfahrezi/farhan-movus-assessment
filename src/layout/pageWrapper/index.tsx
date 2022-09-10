import React from 'react'
import { Helmet } from 'react-helmet'

import { sPageWrapper } from './styles'
import { PageWrapperProps } from './types'

import Header from '../header'
import Footer from '../footer'

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <>
            <Helmet>
                <title>Admin Dashboard</title>
            </Helmet>
            <div className={sPageWrapper}>
                <div>
                    <Header />
                    <div>{children}</div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PageWrapper
