/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_TOMTOM_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface IdConfiguration {
  client_id: string;
  callback: (response: { credential: string }) => void;
  auto_select?: boolean;
  ux_mode?: 'popup' | 'redirect';
}

interface GsiButtonConfig {
  type?: 'standard' | 'icon';
  theme?: 'outline' | 'filled_blue' | 'filled_black';
  size?: 'large' | 'medium' | 'small';
  text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
  shape?: 'rectangular' | 'pill' | 'circle' | 'square';
  width?: number | string;
  logo_alignment?: 'left' | 'center';
}

interface Window {
  google?: {
    accounts: {
      id: {
        initialize: (config: IdConfiguration) => void;
        renderButton: (el: HTMLElement, config: GsiButtonConfig) => void;
        prompt: () => void;
      };
    };
  };
}
