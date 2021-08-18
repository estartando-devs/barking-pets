import { Link } from "react-router-dom";
import { useState } from "react";
import * as C from "../../components/index";
import { patinhaBrown, pontoBrown } from "../../assets/icons";
import { allBusiness } from "../../services/api";
import * as S from "./search.module.scss";
import { states } from "../../services/mockLocations";

const SearchResults = () => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <C.Header />
      <C.Menu />
      <C.MenuDesktop />
      <h3 className={S.searchTitle}>
        {filter ? `Opções para ${filter}` : "  "}
      </h3>
      <C.Search classSearch={S.SearchBar} suggestions={states} />
      <C.Filter filter={filter} setFilter={setFilter} />
      <div className={S.searchTotal}>
        <p className={S.searchTotalText}>
          Resultados da pesquisa:
          {allBusiness.length}
        </p>
      </div>
      <div className={S.searchContainer}>
        <div className={S.searchTotalCard}>
          {allBusiness.map(({ id, name, image, nota, valor }) => {
            return (
              <C.CardHotel
                styles={{
                  container: S.cardSearch,
                  footer: S.cardFooter,
                  picture: S.cardImage,
                  text: S.cardText,
                  link: S.cardLink,
                  paw: S.cardPaw,
                }}
                key={id}
                name={name}
                image={image}
                nota={nota}
                valor={valor}
                classFooter={S.searchFooter}
              >
                <p className={S.cardText}>{name}</p>
                <div className={S.searchNota}>
                  <img src={patinhaBrown} className={S.cardPaw} alt="patinha" />
                  <img src={pontoBrown} alt="ponto" />
                  <p className={S.cardGrade}>{nota}</p>
                </div>
                <div className={S.searchPrice}>
                  <p>{valor}</p>
                  <Link
                    to={`/description_hotel/${id}`}
                    className="card__footer--link"
                  >
                    Ver mais...
                  </Link>
                </div>
                <C.Favorite classFavorite={S.cardFavorite} />
              </C.CardHotel>
            );
          })}
        </div>
      </div>

      <C.Pagination />
      <p className={S.searchTotalText}>
        1-10 de
        {allBusiness.length}
        resultados
      </p>
      <C.Footer classFooter={S.searchFooter} />
    </>
  );
};

export default SearchResults;
