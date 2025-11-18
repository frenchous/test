import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GridLeft from './GridLeft';
import GridCenter from './GridCenter';


// 1. Создаём компонент для изображения
const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius, // опционально: скругление углов
  objectFit: 'cover', // сохраняет пропорции
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#000000ff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  boxShadow: 'none', // ← убирает тень (основная "обводка")
  border: 'none',    // ← на всякий случай убирает явную границу
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
    boxShadow: 'none', // и в тёмной теме тоже
  }),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: 6 }}>
      <Grid container spacing={2}>
        <Grid size={7.5}>
          <Item>
            <GridLeft />
          </Item>
        </Grid>
        <Grid size={4}>
          {/* 2. Вставляем изображение */}
          <Image
            src="/img/planeta.png" // ← замените на путь к вашему изображению
            alt="Описание изображения"
          />
        </Grid>
         <Grid size={10}>
          <Item>
            <GridCenter />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}