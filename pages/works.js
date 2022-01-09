import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbPlanteria from '../public/images/works/laplanteria.png'
import thumbGenesis from '../public/images/works/genesis.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Mis Proyectos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="laplanteria" title="La Plantería" thumbnail={thumbPlanteria}>
            Plataforma enfocada en la venta de plantas, con el fin de ayudar a los 
            a generar espacios de vida más productivos.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="genesis"
            title="Génesis"
            thumbnail={thumbGenesis}
          >
            Plataforma para gestión documentaría dentro de una parroquía.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
