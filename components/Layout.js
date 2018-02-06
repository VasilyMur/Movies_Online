import Header from '../components/Header';
import Head from '../components/Head';

const Layout = (props) => {
    return (
        <div>
            <Head />
            <Header />
            <div className="inner">
                {props.children}
            </div>
            
        </div>
    )
}

export default Layout;