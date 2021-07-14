import express from 'express';

const index = express();

index.get('/', (_, res) => {
  res.send('Hello world');
});

index.listen(3000, () => console.log('Server is running'));