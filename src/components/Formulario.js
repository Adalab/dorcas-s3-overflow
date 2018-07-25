import React from 'react';
class Formulario extends React.Component {

    render() {
  
      return (
        
    <div class="container-izquierda">
    <!-- diseña - MariaV -->

    <div class="colapsable1 colapsable">
      <div class="form__fill" data-donde="0">
        <div class="container__rectangle_title_arrow colapsable-titulo">
          <div class="container__rectangle_title">
            <i class=" far fa-object-ungroup rectangle_2"></i>
            <legend class="form__title-principal titulo-colapsable">DISEÑA</legend>
          </div>
          <div class="arrowup">
            <i class="arrow-second arrow fas fa-angle-down turn-arrow" data-id="0"></i>
          </div>
        </div>
        <div class="contenido-colapsable">
          <form class="form" action="/signup" method="post">



            <fieldset class="fieldset-colors">

              <div class="container-legend-label-input">
                <legend class="form__subtitle">COLORES</legend>
                <div class="container__input__labels">
                  <label class="container_input_div" for="form__subtitle__first-color">

                    <input class="clikable local--palette radio-color" data-donde="greenTarget" id="form__subtitle__first-color" type="radio"
                      value="1" name="palette" checked/>

                    <span class="checkmark"></span>
                    <div class="container__square">
                      <div class="first-color__square1"></div>
                      <div class="first-color__square2"></div>
                      <div class="first-color__square3"></div>
                    </div>
                  </label>
                  <label class="container_input_div" for="form__subtitle__second-color">

                    <input class="clikable local--palette radio-color" data-donde="redTarget" id="form__subtitle__second-color" type="radio"
                      value="2" name="palette" />

                    <span class="checkmark"></span>
                    <div class="container__square">
                      <div class="second-color__square1"></div>
                      <div class="second-color__square2"></div>
                      <div class="second-color__square3"></div>
                    </div>
                  </label>
                  <label class="container_input_div" for="form__subtitle__third-color">

                    <input class="clikable local--palette radio-color" data-donde="greyTarget" id="form__subtitle__third-color" type="radio"
                      value="3" name="palette" />

                    <span class="checkmark"></span>
                    <div class="container__square group-square2">
                      <div class="third-color__square1"></div>
                      <div class="third-color__square2"></div>
                      <div class="third-color__square3"></div>
                    </div>
                  </label>
                </div>
              </div>
            </fieldset>

            <div class="fieldset-font">

              <div class="container-legend-label-input">
                <legend class="form__subtitle">FUENTES</legend>
                <div class="container__input__labels ">
                  <label class="font1 container_input_font container_input_div" for="form__subtitle__first-font">

                    <input class="clikable local--typography radio-font" data-donde="ubuntuFont" id="form__subtitle__first-font" type="radio"
                      value="1" name="typography" />

                    <span class="checkmark"></span>
                    <div class="container__font">
                      Ubuntu
                    </div>
                  </label>
                  <label class="font2 container_input_font container_input_div" for="form__subtitle__second-font">

                    <input class="clikable local--typography radio-font" data-donde="comicFont" id="form__subtitle__second-font" type="radio"
                      value="2" name="typography" checked/>
                    <span class="checkmark"></span>
                    <div class="container__font">
                      Comic Sans
                    </div>
                  </label>
                  <label class="font3 container_input_div" for="form__subtitle__third-font">

                    <input class="clikable local--typography radio-font" data-donde="montFont" id="form__subtitle__third-font" type="radio" value="3"
                      name="typography" />

                    <span class="checkmark"></span>
                    <div class="container__font">
                      Montserrat
                    </div>
                  </label>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>

    <!-- rellena - Irene -->
    <div class="colapsable2 colapsable">

      <div class="form__fill" data-donde="1">
        <div class="contenedor-icono colapsable-titulo">
          <div class="container__rectangle_title">
            <i class="far fa-keyboard icono-teclado"></i>
            <h1 class="form__title">Rellena</h1>
          </div>
          <div class="arrowup__second-option">
            <i class="arrow-second arrow fas fa-angle-down turn-arrow" data-id="1"></i>
          </div>
        </div>

        <div class="contenido-colapsable">
          <div class="form__container">
            <!-- Campos JS -->
            <label class="form__label" for="nombre">Nombre completo</label>
            <input class="form__input form__input--nombre local--input--name" id="nombre" type="text" name="name" placeholder="Ej. Martirio" maxlength="19"
              data-donde="element-nombre">
            <label class="form__label" for="puesto">Puesto</label>
            <input class="form__input form__input--puesto local--input--job" id="puesto" type="text" name="job" placeholder="Ej. Reina de la canción" maxlength="22"
              data-donde="element-puesto">

            <label class="form__label">Imagen de perfil</label>
            <div class="form__container--imagen">

              <div class="action form__container--imagen">
                <button class="action__upload-btn boton__añadir-imagen" type="button">Añadir imagen</button>
                <input type="file" name="photo" id="img-selector" class="action__hiddenField">
              </div>
              <div class="profile-image contenedor--imagen">
                <img class="profile-image__item" src="https://image.flaticon.com/icons/png/512/16/16363.png" alt="Foto de perfil">
              </div>
            </div>

              <label class="form__label" for="email">Email</label>
              <input class="form__input inputhref form__mail local--input--email" id="email" type="mail" name="email" placeholder="Ej. reinadelacancion@ole.es" data-donde="element-email" href="">

            <label class="form__label" for="telefono">Teléfono</label>
            <input class="form__input inputhref form__telefono local--input--phone" id="telefono" type="number" name="phone" placeholder="Ej. 982938437" data-donde="element-telefono">
            <label class="form__label " for="linkedin">Linkedin</label>
            <input class="form__input inputhref form__linkedin local--input--linkedin" id="linkedin" type="text" name="linkedin" placeholder="Ej. martirio.reina" data-donde="element-linkedin">
            <label class="form__label" for="github">Github</label>
            <input class="form__input inputhref form__github local--input--github" id="github" type="text" name="github" placeholder="Ej. martirio-reina" data-donde="element-github">

<div class="form__container--habilidades">
              <label class="form__label" for="habilidades">Habilidades (máximo 3)</label>


            </div>
          </div>

          <!-- SKILLS -->
          <div class="form__container--habilidad">
            <div id="mama">
              <button type="button" id="fetch" class="button">
                <div class="content-button-habilities"> + </div>
              </button>
            </div>
            <!-- SKILLS -->

          </div>
        </div>
      </div>
    </div>
    <div class="colapsable3 colapsable">

      <div class="form__fill" data-donde="2">
        <div class="titleshare colapsable-titulo">

          <div class="icon__Third-title container__rectangle_title">
            <i class="icono-teclado fas fa-share-alt"></i>
            <h1 class="form_title3 titulo-colapsable">Comparte</h1>
          </div>
          <div class="arrowup__second-option">
            <i class="arrow-second arrow fas fa-angle-down turn-arrow" data-id="2"></i>
          </div>
        </div>
        <div class="contenido-colapsable">
          <div class="contenedor-boton">
            <a href="#" class="makecard submit" id="submit">&nbsp;&nbsp;CREAR TARJETA
              <i class="far fa-address-card"></i>
            </a>
            <span class="rectangl2"></span>
          </div>
          <div class="contenedor-twitter">
            <h2 class="titletarjeta response parraphtarjeta"></h2>

            <a href="" class="maketwitter" target="_blank">&nbsp;&nbsp;Compartir en Twitter
              <i class="fab fa-twitter"></i>
            </a>
            <span class="rectangl2"></span>
          </div>
        </div>
      </div>
      </form>
    </div>

  </div>
</div>
</div>
  
        
      );
    }
  }
  export default Formulario;
  