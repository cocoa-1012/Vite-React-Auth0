import React from 'react'
import { Helmet } from 'react-helmet'

import { Props } from './types'

function ScreenWrapper({
  children,
  meta,
  metaDescription = '',
  metaKeywords = '',
  styles,
  title = 'Board Game Night',
}: Props): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={metaDescription} />
        <meta name='keywords' content={metaKeywords} />
        <meta name='robots' content='noindex, nofollow' />

        {meta}

        {styles && <style type='text/css'>{styles}</style>}
      </Helmet>
      {children}
    </>
  )
}

export default ScreenWrapper
