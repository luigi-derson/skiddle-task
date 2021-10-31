import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Home } from "react-feather";

const Layout = ({ children }) => {
  return (
    <div>
      <Container>
        <StyledNav>
          <Link href="/">
            <a>
              <Image
                src="/skiddle-logo-black-landscape.png"
                alt="Skiddle Logo"
                width={128}
                height={50}
              />
            </a>
          </Link>
        </StyledNav>
      </Container>

      <>{children}</>
    </div>
  );
};

export default Layout;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;

  @media (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const StyledNav = styled.nav`
  text-align: center;
  padding-top: 0.875rem;
  margin-bottom: 1rem;

  & > a {
    display: inline-block;
  }
`;
