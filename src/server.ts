import app from './app.ts';


const PORT = process.env.PORT ?? 5000;

app.listen(PORT, () => {
    console.log(`
    POC API na porta ${PORT},
    Url: http://localhost:${PORT} 
`);
});
