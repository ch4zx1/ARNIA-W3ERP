import './others.css'
import * as S from './styles'
import Sidemenu from '@/components/ui/sidemenu'
import Topmenu from '@/components/ui/topmenu'
import Search from '@/components/subcomponents/search'
import Card from '@/components/ui/cards'
import { Scrollbars } from 'react-custom-scrollbars-2'

function Predicoes() {
  return (
    <S.Body>
      <Sidemenu></Sidemenu>
      <S.ContainerContent>
        <Topmenu></Topmenu>
        <S.ContainerBase>
          <S.ContainerHeader>
            <h1>Predições</h1>
          </S.ContainerHeader>
          <S.ContainerSearch>
            <Search></Search>
          </S.ContainerSearch>
          <S.ContainerCards>
            <Scrollbars
              renderTrackVertical={props => (
                <div {...props} className="track-vertical" />
              )}
              renderThumbVertical={props => (
                <div {...props} className="thumb-vertical" />
              )}
            >
              <S.ContainerCards2>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
              </S.ContainerCards2>
            </Scrollbars>
          </S.ContainerCards>
        </S.ContainerBase>
      </S.ContainerContent>
    </S.Body>
  )
}

export default Predicoes
