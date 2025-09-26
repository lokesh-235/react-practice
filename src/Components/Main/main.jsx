import './main.css';

export function Home(){
    return (
        <div className="home">
            <h1>Home Page</h1>
        </div>
    );
}

export function Login(){
    return (
        <div className="login">
            <form action="post">
                <input type="text" name="name" id="" placeholder='Enter name '/>
                <input type="password" name="name" id="" placeholder='Enter password '/>
            </form>
        </div>
    );
}

export function About(){
    return (
        <div className="about">
            <h1>About Page</h1>
        </div>
    );
}

export function Contact(){
    return (
        <div className='contact'>
            <h1>Contact Page</h1>
        </div>
    );
}