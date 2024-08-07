import mongoose from 'mongoose';

const ProfesionalSchema = new mongoose.Schema({
    id_profesional: { type: Number, required: true, unique: true },
    cedula: { type: String, required: true, maxlength: 20, unique: true },
    nombre: { type: String, required: true, maxlength: 255 },
    apellido: { type: String, required: true, maxlength: 255 },
    direccion: { type: String, required: true, maxlength: 255 },
    telefono: { type: String, required: true, maxlength: 255 },
    email: { type: String, required: true, maxlength: 255 },
    fecha_nacimiento: { type: Date, required: true }
});

const Profesional = mongoose.model('Profesional', ProfesionalSchema);

export default Profesional;
