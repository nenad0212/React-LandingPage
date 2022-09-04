import React from 'react'
import Header from '../../components/header/header'
import './home.scss'
import LimitIcon from '../../image/limit-icon.svg'
import ButterflyIcon from '../../image/butterfly-icon.svg'
import Ox from '../../image/ox.png'
import Jack from '../../image/jack.png'
import Ghost from '../../image/ghost.png'
import Cris from '../../image/cris.png'
import Twitter from '../../image/twitter.png'
import Discord from '../../image/discord.png'
import SingleBear from '../../image/single-bear.png'
import { Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Homepage() {

    const history = useHistory();

    const goToSadBear = () => {
        history.push('/sadBear');
    }

    return (
        <div className='homepage'>

            <Header />

            <div className='title-section'>
                <Container>
                    <p className='title'>7LABS</p>
                    <p className='description'>7 PROJECTS-7 INITAL DROPS-7 OPORTUNITIES TO COLLECT</p>
                </Container>
            </div>

            <div className='sad-bears-section'>
                <Container>
                    <p className='title'>SAD BEARS</p>
                    <p className='description'>10000 BEARS DROPPING SOON</p>
                    <button className='collect-button' onClick={() => goToSadBear()}>Collect</button>
                    <div className='sad-bears-wrapper'>
                        <img src={SingleBear} alt={'single-bear'} className='mw-100 single-bear'/>
                        <div className='join-link'>
                            <div className='join-title'>
                                <img src={LimitIcon} alt={'limit-icon'} />
                                <p className='join-title-content'>Join the club</p>
                            </div>
                            <p className='join-description'>SOLANA BEARS is a</p>
                            <p className='join-description'>parody NFT colection</p>
                            <p className='join-description margin-b-45'>waiting to find its home</p>
                            <div className='join-title'>
                                <img src={ButterflyIcon} alt={'butterfly-icon'} />
                                <p className='join-title-content'>10 levels of rarity</p>
                            </div>
                            <p className='join-description'>BLURB ABOUT RARITY</p>
                            <p className='join-description'>BLURB ABOUT RARITY</p>
                            <p className='join-description'>BLURB ABOUT RARITY</p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className='bulls-section'>
                <Container>
                    <p className='title'>BULLS</p>
                    <p className='description'>IN RPOGRESS</p>
                    <div className='image-container'>
                        <p className='image-title'>SAD BEAR’S SISTER PROJECT</p>
                        <p className='image-description'>A collection of 10000 3D bulls</p>
                        <img src={Ox} alt={'ox'} className='mw-100'/>
                    </div>
                </Container>
            </div>

            <div className='tnx-section'>
                <Container>
                    <p className='title'>TNX</p>
                    <p className='description'>Thanking 7Labs community with free generative NFT drops. Tnx is a holiday themed NFT project.</p>
                    <div>
                        <Row>
                            <Col md={6} lg={4}>
                                <div className='overflow-hidden image-content'>
                                    <img src={Jack} className='mw-100 image-filter' alt={'jack'} />
                                    <p className='image-title'>JACK-0’-LANTERNS</p>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className='overflow-hidden image-content'>
                                    <img src={Ghost} className='mw-100 image-filter' alt={'ghost'} />
                                    <p className='image-title'>GHOSTS (COMMING SOON)</p>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className='overflow-hidden image-content'>
                                    <img src={Cris} className='mw-100 image-filter' alt={'cris'} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className='road-map-section'>
                <Container>
                    <p className='title'>ROAD MAP</p>
                    <p className='description'>7Labs intends to release seven projects. Holders of NFTs from early projects will receive privileges for purchases of NFTs from later projects. One of the seven projects, Tnx, is dedicated to free NFT giveaways to holders of 7Labs NFTs. The long term plan is to turn the 7Labs community into a DAO, in which a person's voting power is determined by the number of 7Labs NFTs within that person's wallet.</p>
                </Container>
            </div>

            
            <div className='connect-section'>
                <Container>
                    <p className='title'>CONNECT</p>
                    <img src={Twitter} className='p-5' alt={'ox'} />
                    <img src={Discord} className='p-5' alt={'ox'} />
                </Container>
            </div>
        </div>
    );
}