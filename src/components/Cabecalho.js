import React, { Fragment } from 'react';
import './Cabecalho.css';
const Cabecalho = () => {

  return (
    <Fragment>

        <section>

          <nav >

            <div className=" navegaccao nav-wrapper grey darken-4" >
              <a href="/" className="brand-logo center" style={{ textDecoration: 'none',}}>Portal de Noticias</a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li>
                  <a href="/" style={{ textDecoration: 'none' }}>HOME</a>

                </li>
              </ul>
            </div>

          </nav>
        </section>
    </Fragment>
  );
}
export default Cabecalho;