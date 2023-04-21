import "../style/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100"
        rel="stylesheet"
      />
      <div className="home">
        <a href="/" className="material-symbols-outlined">
          Home
        </a>
      </div>
      <div className="search">
        <a href="/search" className="material-symbols-outlined">
          Search
        </a>
      </div>
      <div className="favorite">
        <a href="/favorite" className="material-symbols-outlined">
          Favorite
        </a>
      </div>
      <ButtonToTopButton />
    </div>
  );
}

export function ButtonToTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      id="buttonToTop"
      className="material-symbols-outlined"
    >
      arrow_upward
    </button>
  );
}
