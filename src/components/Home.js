import { useEffect, useState } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap'
import BerneImage from './assets/berne2.jpg'



const Home = () => {
    const [state, setState] = useState({})

    const api = 'http://api.openweathermap.org/data/2.5/weather?zip=46711,US&APPID=c1aa59cdab2ccdf722d44bb8fda6643b'
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setState({ data }))
    }, [])

    useEffect(() => {
        console.log(state.data)
    }, [state])

    return (
        <div className='main'>
            <div className='mainDiv'>
                <div>
                    <Card className="card">
                        <CardImg className="cardImg" src={BerneImage} alt="clock Tower" />
                        <CardBody>
                            <CardTitle tag="h5">{state.data.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Longitude: {state.data.coord.lon} Latitude: {state.data.coord.lat}</CardSubtitle>
                            <CardText>
                                Current Temprature: {state.data.main.temp}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home;