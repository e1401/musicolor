import { Box } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        [theme.breakpoints.up('lg')]: { width: '80%' },
      })}
      minHeight={'calc(100vh - (2*64px))'}
      pb={1}
    >
      {children}
    </Box>
  );
};

export default Layout;
