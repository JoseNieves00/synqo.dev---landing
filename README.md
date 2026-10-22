# synqo.dev

> **Syncing code, traffic and sales.**  
> Landing page corporativa de ultra-alto rendimiento para el estudio de ingeniería web y software CRM con Inteligencia Artificial.

---

## ⚡ Stack Tecnológico

- **Framework**: [Astro 4](https://astro.build/) (Static Site Generation / Carga en <0.8s)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Gestión de Contenido**: Centralizada en `src/data/siteContent.json`
- **Integraciones**: WhatsApp Business API (WABA) para captación directa de leads

---

## 📂 Edición de Textos y Contenidos

Todos los textos, enlaces, métricas, FAQs y datos de contacto se editan en un solo archivo:

```text
src/data/siteContent.json
```

Modificar un titular, un servicio o el número de WhatsApp no requiere tocar componentes ni código de maquetación.

---

## 🧱 Estructura de Secciones

1. **Header / Navbar**: Logo oficial, estado `STATUS: 24/7 ACTIVE` y menú móvil.
2. **Hero**: Punchline comercial (`Tu mejor vendedor opera en la web 24/7.`) y métricas técnicas.
3. **Sobre Synqo**: Filosofía de ingeniería (concepto *Sync*, código limpio y propiedad de activos).
4. **Comparativa**: El modelo tradicional vs. el estándar Synqo.
5. **Demo Interactiva**: Demostración en 3 pasos (Impacto Web ➔ Conversación IA ➔ Control en CRM).
6. **Catálogo de Soluciones**: Selector por pestañas (Synqo Core, AI Agents & CRM, Web y Módulos).
7. **Mercados Clave**: Casos de uso e industrias con alta tracción.
8. **FAQ**: Preguntas frecuentes técnicas y comerciales.
9. **Cierre / Contacto**: Formulario con derivación automática prellenada a WhatsApp.
10. **Footer**: Identidad institucional y créditos.

---

## 🛠️ Comandos Rápidos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local (http://localhost:4321)
npm run dev

# Compilar para producción (carpeta dist/)
npm run build

# Previsualizar el build de producción
npm run preview
```
