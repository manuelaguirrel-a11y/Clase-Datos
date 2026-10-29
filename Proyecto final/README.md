# Proyecto final · Abandono escolar en México (ENAPE 2021)

**Pregunta 12:** ¿Qué factores socioeconómicos (ingreso del hogar, escolaridad de los padres, zona) se asocian con el abandono escolar, y cuáles son las razones más frecuentes reportadas por sexo del estudiante?

Autor: Manuel Aguirre · UDEM · Fuente: INEGI, ENAPE 2021 (datos abiertos oficiales).

## Contenido de la carpeta

| Archivo | Entregable |
|---|---|
| `datos_crudos/TMODULO.csv`, `datos_crudos/TVIVIENDA.csv` | Base oficial de INEGI, sin modificar |
| `limpieza_1.ipynb` | Código de limpieza: carga, diagnóstico, selección y clasificación de variables, limpieza estilo Data Wrangler, variables derivadas, validaciones contra INEGI, exportación |
| `datos_limpios/ENAPE2021_abandono_escolar.xlsx` | **Base de datos final** (solo variables usadas) + diccionario, catálogos, bitácora de limpieza y validaciones |
| `datos_limpios/enape2021_abandono_limpia.csv` | Misma base final en CSV (insumo del análisis) |
| `analisis_2.ipynb` | Código de estadísticas, patrones, modelo y visualizaciones |
| `graficas/` | 9 gráficas en PNG |
| `Reporte_Estadistico.html` | **Reporte estadístico** de la base final |
| `Presentacion_Abandono_Escolar_ENAPE2021.pptx` | **Presentación** (8 diapositivas, gráficas editables y notas del orador) |

## Cómo correrlo en GitHub Codespaces

1. Sube esta carpeta a tu repositorio de GitHub (arrastra la carpeta `Proyecto final` en *Add file → Upload files*, o con `git add "Proyecto final" && git commit && git push`).
2. Abre el repositorio en **Code → Codespaces → Create codespace**.
3. En la terminal: `pip install pandas numpy matplotlib scipy xlsxwriter openpyxl`.
4. Instala las extensiones **Jupyter** y **Data Wrangler** (Microsoft) desde el panel de extensiones.
5. Abre `limpieza_1.ipynb`, elige el kernel de Python y ejecuta todo (*Run All*). Después `analisis_2.ipynb`.

Los notebooks usan rutas relativas: deben ejecutarse con la carpeta `Proyecto final` como directorio de trabajo (es lo normal al abrirlos en VS Code).

## Data Wrangler

En `limpieza_1.ipynb`, sección 5:

1. Ejecuta las celdas hasta la que crea `df`.
2. Bajo la salida del DataFrame aparece **Open 'df' in Data Wrangler** (también desde *Jupyter: Variables*).
3. Revisa el panel **Summary**: tipo, % de faltantes, valores únicos y distribución de cada columna.
4. Las operaciones aplicadas son las de la función `clean_data(df)`: *Change column type*, *Find and replace*, *New column by formula*, *Rename column*. Si las haces en la interfaz, **Export to notebook** genera una función equivalente.
5. Abre también `df_clean` en Data Wrangler para mostrar el antes y el después.

## Decisiones clave

- **Abandono reciente:** personas de 6-29 años inscritas en 2020-21 que no se inscribieron en 2021-22, excluyendo a quien "logró su meta educativa".
- **Proxies** (la ENAPE no capta ingreso, escolaridad de los padres ni urbano/rural): bienes TIC del hogar → nivel socioeconómico; informante madre/padre → entorno familiar; entidad, región y "no hay servicio de internet en la zona" → zona.
- Todas las cifras están **ponderadas** con el factor de expansión. La base reproduce las cifras oficiales de INEGI (60.0 M de personas de 0-29 años, 50.2 % hombres, 22.3 M no inscritos en 2021-22, 28.6 % piensa retomar).
