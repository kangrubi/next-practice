import Head from 'next/head'

const HeadInfo = ({title, keyword, contents}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta keyword={keyword} />
        <meta contents={contents} />
    </Head>
  )
}

HeadInfo.defaultProps = {
    title: 'my blog',
    keyword: 'blog powered by next js',
    contents: 'practice next js'
}

export default HeadInfo