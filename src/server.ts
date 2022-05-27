import { app } from "./app";
const port = 3333;

app.listen(port, () => {
    console.log(`> API is running on port '${port}'`);
});