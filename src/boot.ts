import server from './server';
import { createConnection } from 'typeorm';

(async function() {
    await createConnection();
    server.listen(4000, "0.0.0.0", () => console.log("App running on port 4000"));
})();
