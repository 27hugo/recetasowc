-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 26-12-2018 a las 19:05:45
-- Versión del servidor: 5.5.55-0+deb8u1
-- Versión de PHP: 5.6.33-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `recetasowc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE IF NOT EXISTS `administradores` (
  `adm_rut` varchar(12) COLLATE utf8_spanish_ci NOT NULL,
  `adm_nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `adm_apellido` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `adm_correo` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `adm_password` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `adm_nivel_permiso` enum('normal','moderador','admin') COLLATE utf8_spanish_ci NOT NULL DEFAULT 'normal'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `administradores`
--

INSERT INTO `administradores` (`adm_rut`, `adm_nombre`, `adm_apellido`, `adm_correo`, `adm_password`, `adm_nivel_permiso`) VALUES
('14156881-7', 'Hector', 'Rivera', 'alejandro.rivera.orellana@gmail.com', '123', 'moderador'),
('17720994-5', 'Hugo Fernando', 'Mancilla Tellez', 'hugo@gmail.com', '1234', 'admin'),
('19013770-8', 'javierillo', 'pizarrillo', 'javier@gmail.com', '1234', 'moderador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE IF NOT EXISTS `categorias` (
`cat_id` int(2) NOT NULL,
  `cat_nombre` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `cat_imageurl` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`cat_id`, `cat_nombre`, `cat_imageurl`) VALUES
(1, 'Para el dia a dia', 'http://recetatube.com/wp-content/uploads/2015/03/tipicas.jpg'),
(2, 'Cocinar en menos de 30 minutos', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKk2v2HH3MfPvugRnMKGDI1y7OvxOJ3HQ50P_i2As-cKg4Yyqp'),
(3, 'Postres dulces', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuvP98UInrt7xRKkoS6iTj4Olvnrfry_EJUyrOyiGssqZ_1A4'),
(4, 'Para ocasiones especiales', 'https://www.redribera.es/img/stuff/cocinar-y-comida-banner.jpg'),
(5, 'Altos en calorias', 'http://www.comerentreasturianos.com/imagenes/recursos/banner-recetas.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes_receta`
--

CREATE TABLE IF NOT EXISTS `ingredientes_receta` (
`ing_id` int(11) NOT NULL,
  `rec_id` int(11) NOT NULL,
  `ing_nombre` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=179 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ingredientes_receta`
--

INSERT INTO `ingredientes_receta` (`ing_id`, `rec_id`, `ing_nombre`) VALUES
(122, 82, '1 Pechuga de pollo'),
(123, 82, '1 Cebolla'),
(124, 82, 'Sal'),
(125, 82, 'Aceite'),
(126, 82, 'Aji de Color'),
(127, 106, '2 Huevos'),
(128, 106, '2 Cebollas'),
(129, 106, '1 Kg de carne molida'),
(130, 106, 'Aji de color'),
(131, 106, 'Aceite'),
(132, 106, 'Sal'),
(133, 106, 'Pimienta'),
(134, 106, 'Perejil'),
(135, 106, '12 Aceitunas'),
(136, 107, '1 Kg de Carne molida'),
(137, 107, '2 Cebollas'),
(138, 107, '3 Huevo'),
(139, 107, 'Sal'),
(140, 107, 'Pimienta'),
(141, 107, 'Aji de color'),
(142, 107, 'Perejil'),
(143, 108, '1 bolsa de cacao'),
(144, 108, '1/2 taza de azucar'),
(145, 109, 'nada'),
(146, 109, 'todo'),
(147, 110, 'nada'),
(148, 110, 'todo'),
(149, 111, 'algo'),
(150, 111, 'todo'),
(151, 112, '22'),
(152, 112, '22'),
(153, 112, '22'),
(154, 115, 'asda'),
(155, 116, 'asda'),
(156, 117, 'asda'),
(157, 118, 'ddf'),
(158, 119, 'asdad'),
(159, 120, 'dsjksdjkl'),
(160, 121, 'klkj'),
(161, 122, 'kkjlk'),
(162, 122, 'kjlk'),
(163, 123, 'wea1'),
(164, 123, 'wea2'),
(165, 124, 'Harina'),
(166, 124, 'Huevos'),
(167, 124, 'Leche'),
(168, 124, 'Mantequilla'),
(169, 124, 'Polvos de Hornear'),
(170, 125, 'adasd'),
(171, 127, 'Nada njeco'),
(172, 128, '250 g Queso Parmesano Sorprole'),
(173, 129, 'asdsasd'),
(174, 130, 'sdds'),
(175, 131, '1 vaso'),
(176, 131, '1 gato'),
(177, 133, 'sdadasd'),
(178, 135, 'Algo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas`
--

CREATE TABLE IF NOT EXISTS `recetas` (
`rec_id` int(11) NOT NULL,
  `rec_imageurl` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `rec_nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `rec_descripcion` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `rec_porciones` int(2) DEFAULT NULL,
  `rec_duracion` int(3) DEFAULT NULL,
  `rec_preparacion` text COLLATE utf8_spanish_ci NOT NULL,
  `adm_rut` varchar(12) COLLATE utf8_spanish_ci DEFAULT NULL,
  `rec_fecha_creacion` timestamp NULL DEFAULT NULL,
  `rec_ultima_modif` timestamp NULL DEFAULT NULL,
  `rec_categoria` int(2) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `recetas`
--

INSERT INTO `recetas` (`rec_id`, `rec_imageurl`, `rec_nombre`, `rec_descripcion`, `rec_porciones`, `rec_duracion`, `rec_preparacion`, `adm_rut`, `rec_fecha_creacion`, `rec_ultima_modif`, `rec_categoria`) VALUES
(82, 'http://api.recetas.owc.cl/uploads/descarga.jpg', 'Pollo Parmesano', 'Una deliciosa receta para preparar cuando te ', 2, 25, 'Primero picar la cebolla en cuadritos, luego echar a freir las cebollas en una sarten. Luego echar la sal con el aju de color hasta que las cebollas esten un tanto doradas. Luego picar el pollo del tamaño de una bolita y echar al sarten. Adicionalmente echar un toque de oregano a gusto. Echar agua y dejar cocer por unos 20 minutos. \nLuego dejar reposar unos 5 minutos mas y servir tibio.', '17720994-5', '2018-12-19 06:06:02', NULL, 2),
(107, 'http://api.recetas.owc.cl/uploads/Empanadas de Carne.jpeg', 'Empanadas de Carne', 'Ricas empanadas fritas para servir de inmedia', 12, 120, 'Primero se debe cortar la cebolla en cubitos. Luego echar a freir al sarten con una gotita de aceite. Esperar a que se dore y luego colocar el aji de color con la sal y la pimienta. Luego de esto de echa a cocer la carne y se va agregando agua a medida que se vaya secando.\n\nFinalmente agregar la mezcla a las masitas y echar a freir por unos 5 minutos por cada una y retirar en una fuente absorbente. Luego servir inmediatamente calientes y a disfrutar.', '17720994-5', '2018-12-19 05:46:46', NULL, 5),
(124, 'http://api.recetas.owc.cl/uploads/HotCakes.jpeg', 'HotCakes', 'Deliciosas y suaves tortillas para un dulce d', 4, 20, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,', '14156881-7', '2018-12-21 03:23:25', NULL, 1),
(131, 'http://api.recetas.owc.cl/uploads/Agua de la llave.jpeg', 'Agua de la llave', 'filtrar 5 veces antes de tomar', 100, 120, 'WAAAAAAAAAAAAAAA', '19013770-8', '2018-12-21 23:25:20', NULL, 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
 ADD PRIMARY KEY (`adm_rut`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
 ADD PRIMARY KEY (`cat_id`);

--
-- Indices de la tabla `ingredientes_receta`
--
ALTER TABLE `ingredientes_receta`
 ADD PRIMARY KEY (`ing_id`);

--
-- Indices de la tabla `recetas`
--
ALTER TABLE `recetas`
 ADD PRIMARY KEY (`rec_id`), ADD KEY `adm_rut` (`adm_rut`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
MODIFY `cat_id` int(2) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `ingredientes_receta`
--
ALTER TABLE `ingredientes_receta`
MODIFY `ing_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=179;
--
-- AUTO_INCREMENT de la tabla `recetas`
--
ALTER TABLE `recetas`
MODIFY `rec_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=137;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `recetas`
--
ALTER TABLE `recetas`
ADD CONSTRAINT `adm_rut` FOREIGN KEY (`adm_rut`) REFERENCES `administradores` (`adm_rut`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
