import { Context, createContext } from 'react';
import { getURL, getUserAgent } from './BrowserUtils';

export interface IsomorphicContextProps {
  getURL(): URL;
  getUserAgent(): string;
  // getLocation
}

export const browserContext: IsomorphicContextProps = {
  getURL,
  getUserAgent,
};

const IsomorphicContext: Context<IsomorphicContextProps> =
  createContext(browserContext);

export default IsomorphicContext;
