
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const InformationRight = (props: any) => {
 
    return (
        <section>
            <Row className="justify-content-center flex-row align-items-center" style={{ minWidth: '376px' }}>
                <Col md={6}>
                    <div className="w-100 py-5 px-5">
                        <Image 
                            src={props.context.image} 
                            width="100%" 
                            height="100%" 
                            />
                    </div>
                </Col>
                <Col md={6} >
                    <div style={{ maxWidth: '376px' }}>
                        <h1>
                           {props.context.titulo}
                        </h1>
                        <span className="text-muted">
                            {props.context.subtitulo}
                        </span>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default InformationRight;