import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  padding: 56px 40px;
`;

export const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 180px;


  @media (max-width: 680px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const BrandBlock = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  text-align: center;
`;

export const Logo = styled.img`
  height: 64px;
  object-fit: contain;
  align-self: center;
  margin-bottom: 2px;
`;

export const Tagline = styled.p`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #111;
  text-transform: uppercase;
  margin: 0;
`;

export const Description = styled.p`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  color: #555;
  line-height: 1.7;
  max-width: 340px;
  margin: 0;
`;

export const LinksBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CollabBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ColumnTitle = styled.h4`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #111;
  margin: 0;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkItem = styled.li`
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 0.95rem;
  color: #555;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #111;
  }
`;

export const CollabList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CollabItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 0.95rem;
  color: #555;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #111;
  }

  svg {
    flex-shrink: 0;
  }
`;
