import './others.css'
import Input from '@/components/subcomponents/input'
import * as S from './styles'
import Sidemenu from '@/components/ui/sidemenu'
import Topmenu from '@/components/ui/topmenu'
import { Button } from '@/components/ui'
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
            <Input placeholder=""> </Input>
            <Button>
              <img src=".\src\images\search.svg"></img>
            </Button>
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
