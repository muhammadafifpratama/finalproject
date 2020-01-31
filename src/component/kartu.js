import React from 'react';
import { Card, CardImg, CardTitle, CardColumns } from 'reactstrap';

const Kartu = (props) => {
    return (
        <div className='col-4'>
            <CardColumns>
                <Card>
                        <CardImg img src={props.image} alt='products' />
                    <CardTitle>
                        {props.judul}W
                    </CardTitle>
                </Card>
            </CardColumns>
        </div>
    );
}

export default Kartu