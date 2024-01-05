import { Stack } from '@mui/material';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Stack minHeight='100vh'>{children}</Stack>;
};

export default Layout;
