import Contacts from "./models/Contacts";
import Projects from "./models/Projects";

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () =>{
    Projects.sync({ alter: isDev });
    Contacts.sync({ alter: isDev });
};

export default dbInit;