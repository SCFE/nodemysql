create procedure AGREGAR_EDITAR 
(
	IN _id INT,
    IN _name varchar(50),
    IN _salary INT
)

BEGIN

	IF _id = 0 THEN
    
		INSERT INTO empleados (name, salary)
        VALUES (_name, _salary);
        SET _id = LAST_INSERT_ID();
	
    ELSE
		UPDATE empleados
        SET
			name = _name,
            salary = _salary,
            WHERE id = _id
	END IF
    
	SELECT _id AS id

END