import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo size="small" />

    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="primary">
          Contato
        </Heading>
        <a href="mailto:sac@zoombikes.com.br">sac@zoombikes.com.br</a>
      </S.Column>

      <S.Column aria-labelledby="media-social">
        <Heading color="black" lineColor="primary" lineBottom size="small">
          Fale conosco
        </Heading>

        <nav id="social-media">
          <a
            href="https://www.instagram.com/zoom-bikes"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/zoom-bikes"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/zoom-bikes"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/zoom-bikes"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="paginas">
        <Heading color="black" lineColor="primary" lineBottom size="small">
          Links
        </Heading>

        <nav id="paginas">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/bikes">
            <a>Loja</a>
          </Link>
          <Link href="/buscar">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="localizacao">
        <Heading color="black" lineColor="primary" lineBottom size="small">
          Localização
        </Heading>
        <span>Brasília-DF, Brasil</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Zoom Bikes 2021 © Todos os direitos reservados.</S.Copyright>
  </S.Wrapper>
)

export default Footer
