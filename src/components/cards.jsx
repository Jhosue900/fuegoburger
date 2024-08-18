import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  ButtonGroup,
  Button,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import "../styles.css";

import law from "../images/law.png";
import labandida from "../images/labandida.png";
import lapampara from "../images/lapampara.png";
import laclasica from "../images/laclasica.png";
import labomba from "../images/labomba.png";

function CardsItem() {
  return (
    <div>
      <center><h1 className="menutext">MENÚ</h1></center>
      <SimpleGrid columns={[1, null, 3]} spacing="10" mx="5" className="cards">
      
        <Card maxW="sm" boxShadow="lg">
          <CardBody>
            <Image
              src={law}
              alt="Green double couch with wooden legs"
              borderRadius="3px"
              className="imagecard"
            />
            <Stack mt="6" spacing="7">
              <Heading size="md" className="titulocard">
                LA W
              </Heading>
              <Text>
                Combina el sabor de dos hamburguesas la de pollo y la carne, con
                un toquecito de bbq picante que hace que la sinergia de estos
                sabores combine perfectamente.
              </Text>
              <Text color="#f8213f" fontSize="2xl" className="titulocard">
                35.900 $COP
              </Text>
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <ButtonGroup spacing="2">
              <Button variant="solid" background="#f8213f" color="#ffffff">
                Pedir Ahora
              </Button>
              <Button variant="solid" background="black" color="#ffffff">
                Añadir al carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="sm" boxShadow="lg">
          <CardBody>
            <Image
              src={labandida}
              alt="Green double couch with wooden legs"
              borderRadius="3px"
              className="imagecard"
            />
            <Stack mt="6" spacing="7">
              <Heading size="md" className="titulocard">
                LA BANDIDA
              </Heading>
              <Text>
                Pan brioche, carne de res 150 gr, queso philadelphia, queso
                cheddar, tocineta caramelizada en bbq maple, lechuga, tomate, bbq
                maple y mayonesa de pimentón.
              </Text>
              <Text color="#f8213f" fontSize="2xl" className="titulocard">
                29.900 $COP
              </Text>
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <ButtonGroup spacing="2">
              <Button variant="solid" background="#f8213f" color="#ffffff">
                Pedir Ahora
              </Button>
              <Button variant="solid" background="black" color="#ffffff">
                Añadir al carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="sm" boxShadow="lg">
          <CardBody>
            <Image
              src={lapampara}
              alt="Green double couch with wooden legs"
              borderRadius="3px"
              className="imagecard"
            />
            <Stack mt="6" spacing="4">
              <Heading size="md" className="titulocard">
                LA PÁMPARA
              </Heading>
              <Text>
                Pan brioche, con filete de pechuga apanado en panko 150 gr, queso
                mozzarella, sour cream de ajo, tocineta caramelizada en bbq maple,
                lechuga, tomate, bbq maple, mayonesa de pimentón.
              </Text>
              <Text color="#f8213f" fontSize="2xl" className="titulocard">
                29.000 $COP
              </Text>
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <ButtonGroup spacing="2">
              <Button variant="solid" background="#f8213f" color="#ffffff">
                Pedir Ahora
              </Button>
              <Button variant="solid" background="black" color="#ffffff">
                Añadir al carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="sm" boxShadow="lg">
          <CardBody>
            <Image
              src={laclasica}
              alt="Green double couch with wooden legs"
              borderRadius="3px"
              className="imagecard"
            />
            <Stack mt="6" spacing="7">
              <Heading size="md" className="titulocard">
                LA CLÁSICA
              </Heading>
              <Text>
                Pan brioche, carne de res 150 gr, queso cheddar, cebolla caramelizada, lechuga, tomate, bbq maple y mayonesa de pimentón.
              </Text>
              <Text color="#f8213f" fontSize="2xl" className="titulocard">
                28.000 $COP
              </Text>
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <ButtonGroup spacing="2">
              <Button variant="solid" background="#f8213f" color="#ffffff">
                Pedir Ahora
              </Button>
              <Button variant="solid" background="black" color="#ffffff">
                Añadir al carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="sm" boxShadow="lg">
          <CardBody>
            <Image
              src={labomba}
              alt="Green double couch with wooden legs"
              borderRadius="3px"
              className="imagecard"
            />
            <Stack mt="6" spacing="4">
              <Heading size="md" className="titulocard">
                LA BOMBA
              </Heading>
              <Text>
                Pan brioche, carne de res 150 gr, doble queso cheddar, costilla de cerdo en miel de naranja, tocineta, cebolla crujiente, lechuga, tomate, salsa bbq maple, mayonesa de pimentón y garlic.
              </Text>
              <Text color="#f8213f" fontSize="2xl" className="titulocard">
                30.000 $COP
              </Text>
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <ButtonGroup spacing="2">
              <Button variant="solid" background="#f8213f" color="#ffffff">
                Pedir Ahora
              </Button>
              <Button variant="solid" background="black" color="#ffffff">
                Añadir al carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        
      </SimpleGrid><br/><br/>
    </div>
  );
}

export default CardsItem;
