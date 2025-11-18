import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Grid/Grid.css';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" className='button1'>

    <Button className = 'button-move' variant="outlined"  sx={{ 
           backgroundColor: 'none', 
          color: '#d8d6d6ff',
          border: '1px solid #ffffffff'          
        }}>Sounds of space</Button>
    <Button className = 'button-move' variant="outlined"  sx={{ 
          backgroundColor: 'none', 
          color: '#d8d8d8ff',
          border: '1px solid #ffffffff'          
        }}>Photos of space</Button>
    </Stack>
  );
}
