# 🍃 Curso de MongoDB - De Cero a Experto

![MongoDB Banner](./assets/imgMongo.png)

<div align="center">

### 🚀 Domina la Base de Datos NoSQL más Popular del Mundo

**Aprende a diseñar, desarrollar y escalar aplicaciones modernas con MongoDB**

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 📚 ¿Qué es MongoDB?

**MongoDB** es una base de datos **NoSQL** orientada a documentos que revolucionó la forma en que almacenamos y gestionamos datos en el mundo moderno. A diferencia de las bases de datos relacionales tradicionales (SQL), MongoDB almacena información en documentos flexibles similares a JSON llamados **BSON** (Binary JSON).

### 🎯 Características Principales

```javascript
{
  "flexibilidad": "Esquemas dinámicos que evolucionan con tu aplicación",
  "escalabilidad": "Horizontal scaling mediante sharding automático",
  "rendimiento": "Consultas ultra-rápidas con índices optimizados",
  "consultas_poderosas": "Agregaciones complejas y pipeline operators"
}
```

---

## 🔧 ¿Para Qué Se Usa MongoDB?

MongoDB se ha convertido en la elección preferida para una amplia variedad de aplicaciones modernas:

<table>
<tr>
<td width="50%">

### 📱 **Aplicaciones Web y Móviles**
- Redes sociales y plataformas de contenido
- E-commerce y marketplaces
- Apps de mensajería en tiempo real
- Plataformas de streaming

</td>
<td width="50%">

### 🔄 **Big Data & Analytics**
- Análisis de datos en tiempo real
- Sistemas de logging y monitoreo
- Internet of Things (IoT)
- Machine Learning pipelines

</td>
</tr>
<tr>
<td width="50%">

### 🎮 **Gaming & Entertainment**
- Perfiles de usuario y progreso
- Leaderboards y estadísticas
- Gestión de inventarios
- Sistemas de matchmaking

</td>
<td width="50%">

### 💼 **Empresas & Startups**
- CMS (Content Management Systems)
- CRM (Customer Relationship Management)
- Catálogos de productos
- Sistemas de recomendación

</td>
</tr>
</table>

---

## 🌟 Importancia en la Industria

> "MongoDB es la base de datos NoSQL #1 del mundo, utilizada por millones de desarrolladores y empresas líderes globalmente."

### 📊 Datos Relevantes

![Industry Stats](./assets/mongodb-stats.png)

- 🏆 **Top 5** en el ranking de bases de datos más populares (DB-Engines)
- 💼 **+45,000 clientes** empresariales en más de 100 países
- 👨‍💻 **Millones de desarrolladores** la utilizan diariamente
- 📈 **30%+ crecimiento** año tras año en adopción empresarial

### 🏢 Empresas que Confían en MongoDB

<div align="center">

![Companies using MongoDB](./assets/companies-grid.png)

**Adobe** • **eBay** • **Google** • **Forbes** • **Cisco** • **EA Sports** • **MetLife** • **The Weather Channel** • **Uber** • **Toyota**

</div>

### 💡 ¿Por Qué MongoDB es Tan Demandada?

| Ventaja | Impacto en la Industria |
|---------|-------------------------|
| ⚡ **Velocidad de Desarrollo** | Reduce el tiempo de desarrollo en 50% vs SQL tradicional |
| 🔄 **Flexibilidad** | Permite cambios de esquema sin downtime |
| 📈 **Escalabilidad** | Soporta desde startups hasta millones de usuarios |
| 💰 **Costo-Efectividad** | Reduce costos de infraestructura mediante escalado horizontal |
| 🌐 **Cloud-Ready** | Integración nativa con AWS, Azure, Google Cloud |

---

## 🎓 ¿Qué Aprenderás en Este Curso?

```
┌─────────────────────────────────────────────────────────┐
│  📘 MÓDULO 1: Fundamentos                               │
│  ├─ Instalación y configuración                         │
│  ├─ CRUD Operations                                     │
│  └─ Modelado de datos                                   │
├─────────────────────────────────────────────────────────┤
│  📗 MÓDULO 2: Consultas Avanzadas                       │
│  ├─ Aggregation Framework                               │
│  ├─ Índices y optimización                              │
│  └─ Consultas geoespaciales                             │
├─────────────────────────────────────────────────────────┤
│  📕 MÓDULO 3: Desarrollo Profesional                    │
│  ├─ Mongoose & ODM                                      │
│  ├─ Integración con Node.js                             │
│  └─ Patrones de diseño                                  │
├─────────────────────────────────────────────────────────┤
│  📙 MÓDULO 4: Producción & Escalado                     │
│  ├─ Replicación y Alta Disponibilidad                   │
│  ├─ Sharding                                            │
│  ├─ Seguridad y autenticación                           │
│  └─ MongoDB Atlas (Cloud)                               │
└─────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tecnologías que Usaremos

<p align="center">
  <img src="./assets/tech-stack.png" alt="Tech Stack" width="80%">
</p>

- **MongoDB 7.x** - La última versión estable
- **MongoDB Shell (mongosh)** - CLI interactiva
- **MongoDB Compass** - GUI oficial
- **Node.js & Express** - Backend development
- **Mongoose** - ODM elegante para MongoDB
- **MongoDB Atlas** - Database-as-a-Service

---

## 🚦 Antes de Comenzar

### ✅ Requisitos Previos

- [ ] Conocimientos básicos de JavaScript
- [ ] Familiaridad con línea de comandos
- [ ] Node.js instalado (v16 o superior)
- [ ] Editor de código (VS Code recomendado)
- [ ] Ganas de aprender y experimentar 🔥

### 📦 Instalación Rápida

```bash
# 1. Verifica tu versión de Node.js
node --version

# 2. Instala MongoDB Community Edition
# Windows: Descarga desde mongodb.com/download-center
# macOS: brew install mongodb-community
# Linux: apt-get install mongodb-org

# 3. Verifica la instalación
mongod --version

# 4. Inicia MongoDB
mongod

# 5. Conéctate con el shell
mongosh
```

---

## 📂 Estructura del Repositorio

```
📦 mongodb-course
 ┣ 📂 01-fundamentos
 ┃ ┣ 📄 introduccion.md
 ┃ ┣ 📄 instalacion.md
 ┃ ┗ 📂 ejercicios
 ┣ 📂 02-crud-operations
 ┃ ┣ 📄 create.md
 ┃ ┣ 📄 read.md
 ┃ ┣ 📄 update.md
 ┃ ┗ 📄 delete.md
 ┣ 📂 03-aggregation
 ┃ ┣ 📄 pipeline-stages.md
 ┃ ┗ 📂 ejemplos
 ┣ 📂 04-modelado-datos
 ┃ ┣ 📄 embedded-vs-referenced.md
 ┃ ┗ 📄 patrones-diseno.md
 ┣ 📂 05-indices
 ┃ ┗ 📄 tipos-indices.md
 ┣ 📂 06-mongoose
 ┃ ┣ 📂 schemas
 ┃ ┗ 📂 proyectos
 ┣ 📂 07-replicacion-sharding
 ┃ ┗ 📄 configuracion.md
 ┣ 📂 08-proyectos-finales
 ┃ ┣ 📂 blog-api
 ┃ ┣ 📂 ecommerce
 ┃ ┗ 📂 social-network
 ┣ 📂 assets
 ┃ ┗ 🖼️ [Imágenes del curso]
 ┣ 📄 README.md
 ┗ 📄 CONTRIBUTING.md
```

---

## 🎯 Proyectos Prácticos

Durante el curso desarrollarás proyectos reales que podrás agregar a tu portafolio:

### 1️⃣ **Blog API RESTful**
![Blog Project](./assets/project-blog.png)
- CRUD completo de posts y comentarios
- Sistema de autenticación con JWT
- Búsqueda de texto completo
- Paginación y filtros avanzados

### 2️⃣ **E-Commerce Backend**
![Ecommerce Project](./assets/project-ecommerce.png)
- Catálogo de productos con categorías
- Carrito de compras persistente
- Sistema de órdenes y pagos
- Gestión de inventario en tiempo real

### 3️⃣ **Red Social Básica**
![Social Network](./assets/project-social.png)
- Perfiles de usuario con relaciones
- Timeline de publicaciones
- Sistema de likes y comentarios
- Notificaciones en tiempo real

---

## 📖 Recursos Adicionales

### 📚 Documentación Oficial
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [MongoDB University](https://university.mongodb.com/) - Cursos gratuitos
- [MongoDB Blog](https://www.mongodb.com/blog)

### 🎥 Videos y Tutoriales
- Canal oficial de MongoDB en YouTube
- MongoDB World Conference talks
- Playlist del curso (próximamente)

### 💬 Comunidad
- [MongoDB Community Forums](https://www.mongodb.com/community/forums/)
- [Stack Overflow - MongoDB Tag](https://stackoverflow.com/questions/tagged/mongodb)
- Discord del curso (link en descripción)

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes sugerencias:

1. 🍴 Fork el repositorio
2. 🌿 Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push a la rama (`git push origin feature/AmazingFeature`)
5. 🔄 Abre un Pull Request

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

---

## 🌟 Agradecimientos

Gracias por elegir este curso para aprender MongoDB. Recuerda:

> "El conocimiento es poder, pero la práctica es maestría. No solo leas el código, ¡escríbelo!" 💪

---

<div align="center">

### 🚀 ¡Comencemos este Viaje Juntos!

[![Comenzar Curso](https://img.shields.io/badge/▶️_Comenzar_Curso-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](./01-fundamentos/introduccion.md)

**Hecho con 💚 y mucho ☕**

⭐ **Si te gusta este curso, no olvides darle una estrella**

[GitHub](https://github.com/tu-usuario) • [LinkedIn](https://linkedin.com/in/tu-usuario) • [Twitter](https://twitter.com/tu-usuario)

</div>

---

<div align="center">
  <sub>Última actualización: Febrero 2026</sub>
</div>
