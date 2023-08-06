
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://github.com/gabrieldev071/lolsquad" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/gabriel-albuquerque-souza-desenvolvedor/" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
                </a>
            </li>
        </ul>
       </section>
       <section>
       <p>Desenvolvido por <a className='container--link' href="https://www.linkedin.com/in/gabriel-albuquerque-souza-desenvolvedor/" target="_blank" rel="noopener noreferrer"> Gabriel Souza</a> - Copyright 2023 ©.</p>
       </section>
    </footer>)
}

export default Rodape