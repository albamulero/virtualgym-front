import React from 'react'
import { Form, Input, Button, Divider } from 'antd';

function Pago() {
  
    return (
        
        <div style={{margin:15}}>
            <Form action="/process_payment" method="post" id="paymentForm">
                <h1>Detalles del comprador</h1>
                <div>
                    <div>
                        <label for="email">E-mail</label>
                        <Input id="email" name="email" type="text" value="test@test.com" />
                    </div>
                    <div>
                        <label for="docNumber">Número de documento</label>
                        <Input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"  value='5474925432670366'/>
                    </div>
                </div>
                <h1>Detalles de la tarjeta</h1>
                <div>
                    <div>
                        <label for="cardholderName">Titular de la tarjeta</label>
                        <Input id="cardholderName" data-checkout="cardholderName" type="text" />
                    </div>
                    <div>
                        <label for="">Fecha de vencimiento</label>
                    <div>
                        <Input type="text" placeholder="MM" id="cardExpirationMonth" data-checkout="cardExpirationMonth"
                        onselectstart="return false" onpaste="return false"
                        oncopy="return false" oncut="return false"
                        ondrag="return false" ondrop="return false" autocomplete='off' 
                        value='11'
                        />
                        <span class="date-separator">/</span>
                        <Input type="text" placeholder="YY" id="cardExpirationYear" data-checkout="cardExpirationYear"
                        onselectstart="return false" onpaste="return false"
                        oncopy="return false" oncut="return false"
                        ondrag="return false" ondrop="return false" autocomplete='off' 
                        value='25'
                        />
                    </div>
                </div>
                <div>
                    <label for="cardNumber">Número de la tarjeta</label>
                    <input type="text" id="cardNumber" data-checkout="cardNumber"
                    onselectstart="return false" onpaste="return false"
                    oncopy="return false" oncut="return false"
                    ondrag="return false" ondrop="return false" autocomplete='off' />
                </div>
                <div>
                    <label for="securityCode">Código de seguridad</label>
                    <input id="securityCode" data-checkout="securityCode" type="text"
                    onselectstart="return false" onpaste="return false"
                    oncopy="return false" oncut="return false"
                    ondrag="return false" ondrop="return false" autocomplete='off' 
                    value='123'
                    />
                </div>
                <div>
                    <input type="hidden" name="transactionAmount" id="transactionAmount" value="24" />
                    <input type="hidden" name="paymentMethodId" id="paymentMethodId" />
                    <input type="hidden" name="description" id="description" />
                    <br />
                    <p>Total a pagar 24$</p>
                    <button type="submit">Pagar</button>
                    <br />
                </div>
            </div>
        
            </Form> 
            
        </div>
    ) 

    window.Mercadopago.setPublishableKey("TEST-ba11dd48-2b63-4d5c-82e5-e43bf45ca71c");
}

export default Pago