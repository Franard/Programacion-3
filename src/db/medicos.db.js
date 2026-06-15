// Código de Angel C.
import { pool } from './connection.js';

class MedicosDB {
    // Obtener todos (Browse)
    obtenerTodos = async () => {
        const [resultado] = await pool.query(
            `SELECT m.id_medico, m.matricula, m.descripcion, m.valor_consulta, 
                    u.nombres, u.apellido, u.documento, u.email,
                    e.nombre as especialidad
             FROM medicos m
             INNER JOIN usuarios u ON m.id_usuario = u.id_usuario
             INNER JOIN especialidades e ON m.id_especialidad = e.id_especialidad
             WHERE u.activo = 1`
        );
        return resultado;
    };

    // Obtener por ID
    obtenerPorId = async (id) => {
        const [resultado] = await pool.query(
            `SELECT m.*, u.nombres, u.apellido, u.documento 
             FROM medicos m
             INNER JOIN usuarios u ON m.id_usuario = u.id_usuario
             WHERE m.id_medico = ? AND u.activo = 1`,
            [id]
        );
        return resultado[0];
    };

    // Agregar
    crear = async (medico) => {
        const [resultado] = await pool.query(
            'INSERT INTO medicos (id_usuario, id_especialidad, matricula, descripcion, valor_consulta) VALUES (?, ?, ?, ?, ?)',
            [medico.id_usuario, medico.id_especialidad, medico.matricula, medico.descripcion, medico.valor_consulta]
        );
        return resultado.insertId;
    };

    // Editar
    actualizar = async (id, medico) => {
        const [resultado] = await pool.query(
            'UPDATE medicos SET id_usuario = ?, id_especialidad = ?, matricula = ?, descripcion = ?, valor_consulta = ? WHERE id_medico = ?',
            [medico.id_usuario, medico.id_especialidad, medico.matricula, medico.descripcion, medico.valor_consulta, id]
        );
        return resultado.affectedRows;
    };

    // Baja lógica
    borrar = async (id) => {
        const [medico] = await pool.query(
            'SELECT id_usuario FROM medicos WHERE id_medico = ?',
            [id]
        );
        if (medico.length === 0)
            return 0;
        const [resultado] = await pool.query(
            'UPDATE usuarios SET activo = 0 WHERE id_usuario = ?',
            [medico[0].id_usuario]
        );
        return resultado.affectedRows;
    };
}

export default new MedicosDB();