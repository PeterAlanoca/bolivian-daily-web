# Bolivian Daily - Sistema Full Stack de Gestión de Noticias

![Bolivian Daily Logo](https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg)

## 1. Resumen Ejecutivo
El presente proyecto aborda el desarrollo de un sistema **Full Stack** orientado a la automatización de la recopilación y publicación de noticias digitales, mediante la integración de tecnologías de web scraping y servicios externos basados en inteligencia artificial.

La propuesta surge ante la problemática asociada a los procesos manuales de búsqueda, selección y publicación de noticias, los cuales generan ineficiencias operativas. El sistema optimiza estos procesos mediante una arquitectura estructurada y escalable que articula el frontend, backend y servicios automatizados de recolección de datos.

---

## 2. Objetivos

### Objetivo General
Desarrollar un sistema Full Stack orientado a la recopilación, procesamiento y publicación de noticias digitales mediante la integración de tecnologías de web scraping y el uso de una API externa de inteligencia artificial para reducir la intervención manual.

### Objetivos Específicos
- Diseñar una arquitectura Full Stack desacoplada (Frontend, Backend, Base de Datos).
- Implementar un módulo de extracción automatizada de noticias.
- Construir una interfaz web para la administración y visualización de contenidos.
- Integrar servicios de IA para el análisis y clasificación de la información.

---

## 3. Arquitectura del Sistema (MVC)
La plataforma web está construida sobre el framework **Laravel**, siguiendo el patrón de diseño **Modelo-Vista-Controlador (MVC)**:

- **Modelos (`app/Models`)**: Gestionan la lógica de datos y las relaciones mediante Eloquent ORM.
- **Vistas (`resources/views`)**: Implementadas con el motor de plantillas Blade para una interfaz dinámica y responsiva.
- **Controladores (`app/Http/Controllers`)**: Orquestan las peticiones del usuario, procesan la lógica de negocio y devuelven las respuestas adecuadas.

---

## 4. Stack Tecnológico
- **Core**: Laravel 12 / PHP 8.2
- **Base de Datos**: MySQL (para la plataforma web)
- **Frontend**: HTML5, Blade, Vanilla CSS, Alpine.js
- **Contenedores**: Docker (Laravel Sail)
- **Servidor Local**: XAMPP / Apache
- **Integración**: API REST para recibir datos del Worker de Scraping (.NET 8)

---

## 5. Estructura de la Base de Datos
El esquema principal consta de las siguientes tablas:

1.  **users**: Información de administradores y editores del sistema.
2.  **categories**: Clasificación temática de las noticias (Nacional, Economía, etc.).
3.  **sources**: Orígenes o medios de prensa de donde se extrae la información.
4.  **news**: Almacena el contenido principal de los artículos (Título, Cuerpo, Slug, Fecha).
5.  **multimedia**: Gestiona imágenes y videos asociados a cada noticia, incluyendo tipos de MIME y descripciones.

---

## 6. Instalación y Configuración

### Requisitos Previos
- PHP >= 8.2
- Composer
- MySQL o MariaDB
- Node.js & NPM

### Opción A: Instalación con XAMPP
1.  Clonar el repositorio en `htdocs`.
2.  Instalar dependencias de PHP:
    ```bash
    composer install
    ```
3.  Configurar el entorno:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```
4.  Configurar tus credenciales de base de datos en el archivo `.env`.
5.  Ejecutar migraciones y seeders:
    ```bash
    php artisan migrate --seed
    ```
6.  Instalar dependencias de frontend:
    ```bash
    npm install && npm run build
    ```
7.  Iniciar servidor:
    ```bash
    php artisan serve
    ```

### Opción B: Instalación con Docker (Laravel Sail)
1.  Levantar los contenedores:
    ```bash
    ./vendor/bin/sail up -d
    ```
2.  Ejecutar migraciones:
    ```bash
    ./vendor/bin/sail artisan migrate --seed
    ```
3.  Acceder a la aplicación en `http://localhost`.

---

## 7. Autor y Licencia
- **Autor**: Peter Alanoca
- **Proyecto**: Académico / Especialidad en Desarrollo Full Stack
- **Licencia**: [MIT License](https://opensource.org/licenses/MIT) (Software Libre)

---
*Este proyecto es parte de un prototipo funcional para la gestión automatizada de medios digitales.*
