import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {

    const tableStyle = {
        textAlign: "center",
        padding: "10.7rem 5.5rem"
    }
    return (
        <div  >
            <h1><center> H O M E </center></h1>
            <h5><center> Post´s de los datos mas curiosos en el mundo... </center></h5>
            <table className="table" style={tableStyle}>
                <thead>
                    <tr><br /><br /></tr>
                    <tr >
                        <th >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg" />
                                <Card.Body>
                                    <Card.Title>Grandes Felinos</Card.Title>
                                    <Card.Text>
                                        <h6>" Tienen una flexibilidad y agilidad impresionante, pueden saltar desde más de 3 metros de altura.
                                            Los gatos pueden rotar sus orejas 180 grados. Los gatos pueden pasar hasta 14 horas dormidos.
                                            Debido a su naturaleza nocturna, los gatos suelen ser mucho más hiperactivos en la tarde."
                                        </h6>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </th>
                        <th >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i0.wp.com/vardeportivo.com/wp-content/uploads/2021/03/49465126_997752920426244_4103827915454545920_o.jpg?fit=1084%2C720&ssl=1" />
                                <Card.Body>
                                    <Card.Title>Beisbol</Card.Title>
                                    <Card.Text>
                                        <h6>" Las pelotas de béisbol fueron hechas originalmente de los prepucios de los caballos. El deporte estatal de Alabama es el patinaje artístico. Un coche de carreras con motor de combustión de madera terminó 3º en las 500 millas de Indianápolis de 1927. La leyenda del boxeo Rocky Marciano inventó el fax. "</h6>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </th>
                        <th>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://topdriverz.nxtstatic.com/2009/conversions/curiosidades-formula-1-default.jpg" />
                                <Card.Body>
                                    <Card.Title>¡Autos veloces!</Card.Title>
                                    <Card.Text>
                                        <h6>" Cuando un auto de la F1 corre por encima de los 160 km/h, logra generar suficiente carga aerodinámica para igualar su propio peso, es decir, podría mantenerse por sí sólo en el techo de un túnel y conducirse de cabeza." </h6>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </th>
                        <th>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://ichef.bbci.co.uk/news/1024/branded_mundo/9144/production/_110388173_6-1.jpg" />
                                <Card.Body>
                                    <Card.Title>Tecnologia </Card.Title>
                                    <Card.Text>
                                        <h6>" Hay 1.940 millones de usuarios en Facebook y es la red social más usada en el planeta. Le siguen WhatsApp y Facebook Messenger, con 1.200 millones. YouTube tiene 1.000 millones y le siguen WeChat, con 889 millones y QQ con 868 millones. Instagram ya alcanzó los 700 millones."</h6>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Home;