import mongoose from 'mongoose';

const ExpedienteSchema = new mongoose.Schema({
    id_expediente: { type: Number, required: true, unique: true },
    id_profesional: { type: Number, required: true, ref: 'Profesional' }, // Relación con Profesional
    titulos: { type: [String] }, // Varios titulos o ninguno
    experiencia_laboral: { type: [String] } //Varias experiencias laborales o ninguna
});

const Expediente = mongoose.model('Expediente', ExpedienteSchema);

export default Expediente;
