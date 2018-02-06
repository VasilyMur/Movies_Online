import Link from 'next/link';


const Logo = () => {
    return (
        <div className="main-header-left">
            <Link href="/">
                <a><h1>Movies Online</h1></a>
            </Link>
            <style jsx>{`
                h1 {
                    margin: 0;
                }
            `}</style> 
        </div>
    )
}

const Nav = () => {
    return (
        <div className="main-header-right">
            <nav>
                <ul>
                    {getPages().map((page, key) => {
                    return <PostLink key={key} page={page} />
                    })}
                </ul>
            </nav>

        <style jsx>{`
            nav ul {
                display: flex;
                justify-content: center;
                margin: 0;
                padding: 0;
                list-style: none;
            }

            `}</style> 
        </div>
    )
}


function getPages () {
    return [
      { id: 'contacts', title: 'Contacts'},
      { id: 'about', title: 'About'}
    ]
  }

  
const PostLink = ({page}) => {
    return  <li>
                <Link href={`/${page.id}`}>
                    <a>{page.title}</a>
                </Link>

                <style jsx>{`
                    li {
                        list-style: none;
                    }
                    a {
                        display: inline-block;
                        padding: 2rem;
                        text-transform: uppercase;
                        transition: background-color 0.2s;
                    }
                `}</style>    
            </li>
}

const Header = () => {
    return (
        

        <header>
            <div className="main-header">
                <Logo />
                <Nav />
            </div>

            <style jsx>{`
                header {
                    margin-bottom: 2rem;
                }

                .main-header {
                    display: flex;
                    justify-content: space-between;
                    padding: 0 2%;
                    background: #193549;
                    border-bottom: 5px solid #ffc600;
                    box-shadow: 0 2px 2px rgba(38,38,38,0.1);
                    align-items: center;
                }

            `}</style> 
        </header>


    )
}




export default Header;
