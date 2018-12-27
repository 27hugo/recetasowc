CREATE TABLE IF NOT EXISTS `recetasowc`.`ingredientes` (
  `ing_id` INT NOT NULL AUTO_INCREMENT,
  `ing_nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ing_id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `recetasowc`.`administradores` (
  `adm_rut` VARCHAR(12) NOT NULL,
  `adm_nombre` VARCHAR(45) NOT NULL,
  `adm_apellido` VARCHAR(45) NULL,
  `adm_correo` VARCHAR(45) NULL,
  `adm_password` VARCHAR(20) NOT NULL,
  `adm_nivel_permiso` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`adm_rut`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `recetasowc`.`recetas` (
  `rec_id` INT NOT NULL AUTO_INCREMENT,
  `rec_imageurl` VARCHAR(255) NULL,
  `rec_nombre` VARCHAR(45) NOT NULL,
  `rec_descripcion` VARCHAR(45) NOT NULL,
  `rec_porciones` INT NULL,
  `rec_duracion` INT NULL,
  `rec_preparacion` TEXT NOT NULL,
  `adm_rut` VARCHAR(12) NULL,
  `rec_fecha_creacion` TIMESTAMP NULL,
  `rec_ultima_modif` TIMESTAMP NULL,
  PRIMARY KEY (`rec_id`),  
  CONSTRAINT `adm_rut` 
  FOREIGN KEY (`adm_rut`) 
  REFERENCES `recetasowc`.`administradores` (`adm_rut`) 
  ON DELETE NO ACTION 
  ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `recetasowc`.`ingredientes_receta` (
  `rec_id` INT NOT NULL,
  `ing_id` INT NOT NULL,
  `ing_cantidad` VARCHAR(45) NOT NULL,
  CONSTRAINT `rec_id`
    FOREIGN KEY (`rec_id`)
    REFERENCES `recetasowc`.`recetas` (`rec_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `ing_id`
    FOREIGN KEY (`ing_id`)
    REFERENCES `recetasowc`.`ingredientes` (`ing_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO  ingredientes(ing_nombre) VALUES('pepinillos');
INSERT INTO  ingredientes(ing_nombre) VALUES('atun');
INSERT INTO  ingredientes(ing_nombre) VALUES('carne de vacuno');
INSERT INTO  ingredientes(ing_nombre) VALUES('carne de pollo');
INSERT INTO  ingredientes(ing_nombre) VALUES('carne de cerdo');
INSERT INTO  ingredientes(ing_nombre) VALUES('pimenton');
INSERT INTO  ingredientes(ing_nombre) VALUES('palta');
INSERT INTO  ingredientes(ing_nombre) VALUES('cilantro');
INSERT INTO  ingredientes(ing_nombre) VALUES('aji de color');
INSERT INTO  ingredientes(ing_nombre) VALUES('aceite');
INSERT INTO  ingredientes(ing_nombre) VALUES('pimienta');
INSERT INTO  ingredientes(ing_nombre) VALUES('aceitunas');
INSERT INTO  ingredientes(ing_nombre) VALUES('canela');
INSERT INTO  ingredientes(ing_nombre) VALUES('champiñones');
INSERT INTO  ingredientes(ing_nombre) VALUES('mayonesa');
INSERT INTO  ingredientes(ing_nombre) VALUES('sal');
INSERT INTO  ingredientes(ing_nombre) VALUES('azucar');
INSERT INTO  ingredientes(ing_nombre) VALUES('harina');

INSERT INTO  administradores(
  adm_rut,adm_nombre,adm_apellido,adm_correo,adm_password,adm_nivel_permiso) 
VALUES('17720994-5','Hugo Fernando','Mancilla Tellez','hugo@gmail.com','1234',3);

INSERT INTO  recetas(
  rec_nombre,
  rec_duracion,
  rec_porciones,
  rec_preparacion,
  rec_imageurl,
  rec_fecha_creacion,
  rec_ultima_modif
  ) VALUES(
    'Panqueque de huevo',
    15,
    12,
    'Mezclar todo y luego formar bolitas y echar al refrigerador por 15r min',
    'http://localhost/harina.png',
    '2018-07-23 13:13:43',
    '2018-07-23 17:53:23'
  );

  INSERT INTO  recetas(
  rec_nombre,
  rec_duracion,
  rec_porciones,
  rec_preparacion,
  rec_imageurl,
  rec_fecha_creacion,
  rec_ultima_modif
  ) VALUES(
    'Carne a las brasas',
    120,
    8,
    'Primero cortar carne a gusto y colocar sal luego echar al carbon por una hora y media',
    'http://localhost/carne.png',
    '2017-02-02 18:22:19',
    '2018-07-18 23:53:23'
  );


  INSERT INTO  recetas(
  rec_nombre,
  rec_duracion,
  rec_porciones,
  rec_preparacion,
  rec_imageurl,
  rec_fecha_creacion,
  rec_ultima_modif
  ) VALUES(
    'Pollo Parmesano',
    55,
    4,
    'Primero mezcle el pollo con la pimienta y la sal, luego hornee por 40 min a temperatura media',
    'http://localhost/pollo.png',
    '2018-07-12 13:43:23',
    '2018-07-12 13:43:23'
  );

INSERT INTO ingredientes_receta(rec_id,ing_id,ing_cantidad)VALUES(1,3,'2');
INSERT INTO ingredientes_receta(rec_id,ing_id,ing_cantidad)VALUES(1,9,'1');
INSERT INTO ingredientes_receta(rec_id,ing_id,ing_cantidad)VALUES(1,4,'1/2');
INSERT INTO ingredientes_receta(rec_id,ing_id,ing_cantidad)VALUES(1,5,'5');
INSERT INTO ingredientes_receta(rec_id,ing_id,ing_cantidad)VALUES(1,7,'3/4');

INSERT INTO ingredientes_receta(rec_id,ing_id,ing_cantidad)VALUES(2,11,'2');
INSERT INTO ingredientes_receta(rec_id,ing_id,ing_cantidad)VALUES(2,1,'1');
INSERT INTO ingredientes_receta(rec_id,ing_id,ing_cantidad)VALUES(2,8,'3/4');

INSERT INTO ingredientes_receta(rec_id,ing_id,ing_cantidad)VALUES(3,7,'1');
INSERT INTO ingredientes_receta(rec_id,ing_id,ing_cantidad)VALUES(3,1,'3');
INSERT INTO ingredientes_receta(rec_id,ing_id,ing_cantidad)VALUES(3,6,'1');
INSERT INTO ingredientes_receta(rec_id,ing_id,ing_cantidad)VALUES(3,10,'8');
INSERT INTO ingredientes_receta(rec_id,ing_id,ing_cantidad)VALUES(3,12,'1/4');