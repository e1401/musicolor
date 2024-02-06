import { Box } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      flexWrap='wrap'
      sx={(theme) => ({
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'flex-start',
          pt: 12,
        },
      })}
      minHeight={'calc(100vh - (2*64px))'}
      pb={1}
    >
      {children}
    </Box>
  );
};

export default Layout;
