import Header from './components/Header';
import { Container } from './components/styles/Container.styled';

export default function MyApp() {
  return (
    <>
      <Header />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </>
  );
}
