import styled from 'styled-components'
const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--borderColor);
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .info {
    padding: 4rem 0;
  }
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--brand);
    background: var(--brand-muted);
    border: 1px solid rgba(13, 122, 95, 0.15);
    border-radius: 100px;
    padding: 0.25rem 0.75rem;
    margin-bottom: 1.5rem;
  }
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 300;
    line-height: 1.1;
    margin-bottom: 1.25rem;
    color: var(--slate-900);
  }
  h1 em {
    font-style: italic;
    color: var(--brand);
  }
  .sub {
    font-size: 1.0625rem;
    color: var(--slate-500);
    line-height: 1.7;
    max-width: 42ch;
    margin-bottom: 2.5rem;
  }
  .cta-group {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .btn-outline {
    color: var(--slate-600);
    background: transparent;
    border: 1px solid var(--slate-300);
    border-radius: var(--borderRadius);
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    font-family: var(--bodyFont);
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
  }
  .btn-outline:hover {
    border-color: var(--slate-500);
    color: var(--slate-800);
  }
  .trust-bar {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--borderColor);
    flex-wrap: wrap;
  }
  .trust-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8125rem;
    color: var(--slate-500);
    font-weight: 500;
  }
  .trust-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--brand);
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 5rem;
    }
    .main-img {
      display: block;
    }
  }
`
export default Wrapper
