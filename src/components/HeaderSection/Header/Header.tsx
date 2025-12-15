import * as S from "./Header.styled";

export function Header() {
  return (
    <S.Header>
      <S.Link>
        <S.LogoIcon />
        Abstractly
      </S.Link>
      <nav>Menu</nav>
    </S.Header>
  );
}

export default Header;
