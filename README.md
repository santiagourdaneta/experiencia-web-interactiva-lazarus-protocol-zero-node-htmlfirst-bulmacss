# 💀 Protocolo Lazarus

[![Deploy to GitHub Pages](https://github.com/santiagourdaneta/lazarus-protocol/actions/workflows/deploy.yml/badge.svg)](https://github.com/santiagourdaneta/lazarus-protocol)

> "El código no miente, pero a veces, el código sangra."

**Protocolo Lazarus** es una experiencia web interactiva de *dark-mystery* y *horror psicológico*. El usuario asume el rol de Santiago, un desarrollador que descubre que su sistema ha sido infectado por una entidad que trasciende los bits y los bytes.

## 🕹️ Características
- **Arquitectura MVC Pura:** Separación estricta entre el Modelo (historia), la Vista (Bulma CSS) y el Controlador (lógica de juego).
- **Zero Node.js:** Construido sin dependencias de NPM para una carga instantánea y máxima compatibilidad con GitHub Pages.
- **Backend en Go:** Servidor de desarrollo ligero con headers de seguridad inyectados.
- **Inmersión Total:** Efectos de *scanlines*, ruido visual y un sistema de "Muerte de UX" cuando el sistema colapsa.
- **Seguridad por Diseño:** Protección activa contra XSS mediante sanitización de nodos y bloqueo de `innerHTML`.

## 🛠️ Stack Técnico
- **Frontend:** HTML5, Bulma CSS, Vanilla JavaScript.
- **Backend (Dev):** Golang 1.21+.
- **Despliegue:** GitHub Actions & GitHub Pages.
- **Automatización:** Makefile.

## 🚀 Instalación y Uso Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/santiagourdaneta/experiencia-web-interactiva-lazarus-protocol-zero-node-htmlfirst-bulmacss](https://github.com/santiagourdaneta/experiencia-web-interactiva-lazarus-protocol-zero-node-htmlfirst-bulmacss)
   cd experiencia-web-interactiva-lazarus-protocol-zero-node-htmlfirst-bulmacss

Ejecutar el servidor de desarrollo (Go):

make run

Acceder al terminal:
Abre tu navegador en http://localhost:8080.

📂 Estructura del Proyecto

├── index.html          # Vista principal y UI de la terminal
├── main.go             # Backend de desarrollo e IDS ficticio
├── Makefile            # Comandos de automatización
├── css/
│   └── style.css       # Estilos de horror y efectos visuales
└── js/
    ├── model.js        # Motor de estados e inventario
    └── controller.js   # Manejador de eventos y renderizado seguro
    
🔒 Seguridad

Este proyecto implementa medidas de seguridad básicas para demostrar buenas prácticas:

XSS Prevention: Uso de .textContent para evitar la ejecución de scripts maliciosos.
CSP Headers: Configurados en el servidor Go para restringir el origen de los recursos.
No-DB Design: Al ser un proyecto estático, es inmune a inyecciones SQL por diseño.    

Desarrollado con fines creativos por Santiago Urdaneta.
