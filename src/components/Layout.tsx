import { Box } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      align-content='center'
      justifyContent={{ xs: 'flex-start', md: 'center' }}
      minHeight={'calc(100vh - (2*64px))'}
      pb={1}
    >
      {children}
    </Box>
  );
};

export default Layout;
