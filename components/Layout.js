const Layout = ({children}) => {
    return (
        <article style={{
            maxWidth: '960px',
            border: '3px solid black',
            margin: 'auto',
            backgroundColor: 'white',
            marginTop: '60px',
            padding: '3em 1em 3em 1em',
            // minHeight: '1000px',
        }}>{children}</article>
    )
}

export default Layout;