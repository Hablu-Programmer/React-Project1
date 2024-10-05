import { Search } from "../assets/icon";

const Type = () => (
  <div className="d-flex justify-content-center align-items-center">
    <label>
      <span className="fw-normal fs-7 text-start filter-search-label">
        Type
      </span>
      <select
        className="form-select outline-none fw-bold fs-6 filter-search-select"
        aria-label="Used Card"
      >
        <option className="fw-bold fs-6" selected>
          Used Card
        </option>
        <option className="fw-bold fs-6" value="1">
          One
        </option>
        <option className="fw-bold fs-6" value="2">
          Two
        </option>
        <option className="fw-bold fs-6" value="3">
          Three
        </option>
      </select>
    </label>
    <div className="vertical-line" />
  </div>
);
const Make = () => (
  <div className="d-flex justify-content-center align-items-center">
    <label>
      <span className="fw-normal fs-7 text-start filter-search-label">
        Make
      </span>
      <select
        className="form-select outline-none fw-bold fs-6 filter-search-select"
        aria-label="Infiniti"
      >
        <option className="fw-bold fs-6" selected>
          Infiniti
        </option>
        <option className="fw-bold fs-6" value="1">
          One
        </option>
        <option className="fw-bold fs-6" value="2">
          Two
        </option>
        <option className="fw-bold fs-6" value="3">
          Three
        </option>
      </select>
    </label>
    <div className="vertical-line" />
  </div>
);
const Year = () => (
  <div className="d-flex justify-content-center align-items-center">
    <label>
      <span className="fw-normal fs-7 text-start filter-search-label">
        Year
      </span>
      <select
        className="form-select outline-none fw-bold fs-6 filter-search-select"
        aria-label="Infiniti"
      >
        <option className="fw-bold fs-6" selected value="1">
          One
        </option>
        <option className="fw-bold fs-6" value="2">
          Two
        </option>
        <option className="fw-bold fs-6" value="3">
          Three
        </option>
      </select>
    </label>
    <div className="vertical-line" />
  </div>
);
const Model = () => (
  <div className="d-flex justify-content-center align-items-center">
    <label>
      <span className="fw-normal fs-7 text-start filter-search-label">
        Model
      </span>
      <select
        className="form-select outline-none fw-bold fs-6 filter-search-select"
        aria-label="Infiniti"
      >
        <option className="fw-bold fs-6" selected value="1">
          One
        </option>
        <option className="fw-bold fs-6" value="2">
          Two
        </option>
        <option className="fw-bold fs-6" value="3">
          Three
        </option>
      </select>
    </label>
    <div className="vertical-line" />
  </div>
);
const Price = () => (
  <label>
    <span className="fw-normal fs-7 text-start filter-search-label">Price</span>
    <select
      className="form-select outline-none fw-bold fs-6 filter-search-select"
      aria-label="Infiniti"
    >
      <option className="fw-bold fs-6" selected value="1">
        1000
      </option>
      <option className="fw-bold fs-6" value="2">
        2000
      </option>
      <option className="fw-bold fs-6" value="3">
        3000
      </option>
    </select>
  </label>
);

/**
 * add section title and custom class: filter-search-section-title
 * design Type Select full design complete and duplicate: Make-Year-Model-Price
 * create Primary Icon Button
 */
export const FilterAndSearch = () => {
  return (
    <section>
      <h1 className="text-center fw-bold fs-2 filter-search-section-title">
        Which vehicles you are looking for?
      </h1>

      <div className="d-flex justify-content-center align-items-center gap-3 filter-search-box">
        <Type />
        <Make />
        <Year />
        <Model />
        <Price />

        <button className="btn btn-primary search-button">
          <Search />
          &nbsp;Search
        </button>
      </div>
    </section>
  );
};
