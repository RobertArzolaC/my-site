import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin, IoLogoGitlab } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hola, soy un full-stack developer en Perú!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Robert Arzola C.
          </Heading>
          <p>Intereses ( Backend / Frontend / DevOps )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Hola! soy Robert, un desarrollador de software Full Stack, tengo 4 años de experiencia como desarrollador profesional.
        Empece en el mundo de la programación a los 19 años cuando cree mi primer ¡Hola Mundo! en HTML, fue allí cuando encontré mi pasión por el desarrollo de software.
        He trabajado por varios años en el desarrollo de software tanto en backend como en frontend.
        Apasionado por el Desarrollo de Software!
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experiencia
        </Heading>
        <BioSection>
          <BioYear>20201-Actualidad</BioYear>
          Backend Developer.
        </BioSection>
        <BioSection>
          <BioYear>2019-2021</BioYear>
          FullStack Developer.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Backend Developer
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          FullStack Developer.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Me gusta ♥
        </Heading>
        <Paragraph>Fútbol, Conducir, Programar</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          En Internet
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/RobertArzolaC" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @robertarzolac
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/robert-arzola-castillo/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @robertarzolac
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://gitlab.com/robert.arzola.c" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGitlab} />}
              >
                @robertarzolac
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
