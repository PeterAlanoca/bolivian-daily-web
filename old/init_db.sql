-- Script de Inicialización para Bolivian Daily
-- Base de Datos: bolivian_daily

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- 1. Crear Base de Datos
CREATE DATABASE IF NOT EXISTS `bolivian_daily` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `bolivian_daily`;

-- 2. Estructura de Tablas

-- Usuarios
CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `access` varchar(10) NOT NULL DEFAULT 'admin',
  `state` varchar(1) NOT NULL DEFAULT 'A',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Fuentes (Sources)
CREATE TABLE `sources` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `state` varchar(1) NOT NULL DEFAULT 'A',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Categorías
CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `state` varchar(1) NOT NULL DEFAULT 'A',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `categories_user_id_foreign` (`user_id`),
  CONSTRAINT `categories_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Noticias
CREATE TABLE `news` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `source_id` bigint(20) UNSIGNED NOT NULL,
  `intranet_id` int(11) DEFAULT NULL,
  `url` text NOT NULL,
  `pretitle` text DEFAULT NULL,
  `title` text NOT NULL,
  `path` text NOT NULL,
  `subtitle` text DEFAULT NULL,
  `enter` text DEFAULT NULL,
  `body` longtext NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `publication_date` datetime NOT NULL,
  `state` varchar(1) NOT NULL DEFAULT 'A',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `news_user_id_foreign` (`user_id`),
  KEY `news_category_id_foreign` (`category_id`),
  KEY `news_source_id_foreign` (`source_id`),
  CONSTRAINT `news_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `news_source_id_foreign` FOREIGN KEY (`source_id`) REFERENCES `sources` (`id`),
  CONSTRAINT `news_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Multimedia
CREATE TABLE `multimedia` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `news_id` bigint(20) UNSIGNED NOT NULL,
  `description` text DEFAULT NULL,
  `url` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `state` varchar(1) NOT NULL DEFAULT 'A',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `multimedia_news_id_foreign` (`news_id`),
  CONSTRAINT `multimedia_news_id_foreign` FOREIGN KEY (`news_id`) REFERENCES `news` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Inserción de Datos Iniciales

-- Usuario Administrador (Password: 123456)
INSERT INTO `users` (`id`, `name`, `email`, `password`, `access`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Admin Bolivian Daily', 'admin@boliviandaily.org', '$2y$10$WvhxFxJcpdVo2qfU3wtQGe/5FvB3ntCEktg3.cWA0f6EeHx68xQ.C', 'admin', 'A', NOW(), NOW());

-- Categorías (Basado en imagen proporcionada)
INSERT INTO `categories` (`id`, `user_id`, `name`, `url`, `state`, `created_at`, `updated_at`) VALUES
(1, 1, 'Nacional', 'nacional', 'A', '2026-03-21 22:45:00', '2026-03-21 22:45:00'),
(2, 1, 'Economía', 'economia', 'A', '2026-03-21 22:45:00', '2026-03-21 22:45:00'),
(3, 1, 'Internacional', 'internacional', 'A', '2026-03-21 22:45:00', '2026-03-21 22:45:00'),
(4, 1, 'Seguridad', 'seguridad', 'A', '2026-03-21 22:45:00', '2026-03-21 22:45:00'),
(5, 1, 'Sociedad', 'sociedad', 'A', '2026-03-21 22:45:00', '2026-03-21 22:45:00'),
(6, 1, 'Cultura', 'cultura', 'A', '2026-03-21 22:45:00', '2026-03-21 22:45:00'),
(7, 1, 'Tecnología', 'tecnologia', 'A', '2026-03-21 22:45:00', '2026-03-21 22:45:00'),
(8, 1, 'Deportes', 'deportes', 'A', '2026-03-21 22:45:00', '2026-03-21 22:45:00'),
(9, 1, 'Salud', 'salud', 'A', '2026-03-21 22:45:00', '2026-03-21 22:45:00'),
(10, 1, 'Interesante', 'interesante', 'A', '2026-03-21 22:45:00', '2026-03-21 22:45:00');

-- Fuentes (Basado en imagen proporcionada - Sin columna alias)
INSERT INTO `sources` (`id`, `name`, `url`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Jornada', 'https://jornada.com.bo/', 'A', '2026-03-21 12:22:28', '2026-03-21 12:22:28');

COMMIT;
