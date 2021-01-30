import React, { Fragment } from 'react';
const Cabecalho = () => {

  return (
    <Fragment>

        <section>

          <nav>

            <div class="nav-wrapper grey darken-4">
              <a href="/" class="brand-logo center" style={{ textDecoration: 'none' }}>Portal de Noticias</a>
              <ul id="nav-mobile" class="left hide-on-med-and-down">
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