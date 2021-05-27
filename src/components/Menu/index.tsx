import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/bootstrap/Search'
import { Cart2 as ShoppingCartIcon } from '@styled-icons/bootstrap/Cart2'
import { Close as CloseIcon } from '@styled-icons/remix-fill/Close'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Abre menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Bikes</S.MenuLink>
          <S.MenuLink href="#">Componentes</S.MenuLink>
          <S.MenuLink href="#">Acessórios</S.MenuLink>
          <S.MenuLink href="#">Ventuário</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Buscar" />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Carrinho de compras" />
        </S.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Entrar</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Fecha menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Pesquisar</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">Minha conta</S.MenuLink>
              <S.MenuLink href="#">Lista de desejos</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Login
            </Button>
            <span>or</span>
            <S.CreateAccount href="#" title="Criar conta">
              Criar conta
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
