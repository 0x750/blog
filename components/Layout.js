const Layout = ({children}) => {


    return (
        <div style={{
            maxWidth: '960px',
            border: '3px solid black',
            margin: 'auto',
            backgroundColor: 'white',
            marginTop: '60px',
            padding: '3em 1em 3em 1em',
            minHeight: '2000px',
        }}>{children}</div>
    )
}

export default Layout;