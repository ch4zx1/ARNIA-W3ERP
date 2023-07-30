import * as S from './style'
import { Button } from '@/components/ui'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Sidemenu() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeButton, setActiveButton] = useState(0)

  function handleClick({ page }: { page: number }) {
    setActiveButton(page)

    if (page === 1) {
      navigate('/dashboard')
    } else if (page === 2) {
      navigate('/predicoes')
    } else if (page == 3) {
      navigate('/produtos')
    }
  }

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      setActiveButton(1)
    } else if (location.pathname === '/predicoes') {
      setActiveButton(2)
    } else if (location.pathname === '/produtos') {
      setActiveButton(3)
    }
  }, [location])

  return (
    <S.Body>
      <S.Sidemenu>
        <S.ContainerImg>
          <img src=".\src\images\logo.svg" />
        </S.ContainerImg>
        <S.ContainerButtons>
          <Button
            onClick={() => handleClick({ page: 1 })}
            style={{ backgroundColor: activeButton === 1 ? '#7682C1' : '' }}
          >
            <img src=".\src\images\pie-two.svg"></img>Dashboard
          </Button>
          <Button
            onClick={() => handleClick({ page: 2 })}
            style={{ backgroundColor: activeButton === 2 ? '#7682C1' : '' }}
          >
            <img src=".\src\images\chart-line.svg"></img>Predições
          </Button>
          <Button
            onClick={() => handleClick({ page: 3 })}
            style={{ backgroundColor: activeButton === 3 ? '#7682C1' : '' }}
          >
            <img src=".\src\images\facial-cleanser.svg"></img>Produtos
          </Button>
        </S.ContainerButtons>
        <S.ContainerHelp>
          <img src=".\src\images\saly.svg"></img>
          <h2>
            Precisando de <span>ajuda ou suporte</span> em algo?
          </h2>
          <button>Fale conosco</button>
        </S.ContainerHelp>
      </S.Sidemenu>
    </S.Body>
  )
}

export default Sidemenu
