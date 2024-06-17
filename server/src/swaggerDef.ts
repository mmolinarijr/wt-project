/**
 * @swagger
 * /api/weather:
 *   get:
 *     summary: Get weather data for a country capital city
 *     parameters:
 *       - in: query
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: The identifier of the city to get weather data for
 *     responses:
 *       200:
 *         description: Weather data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 location:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     region:
 *                       type: string
 *                     country:
 *                       type: string
 *                     localtime:
 *                       type: string
 *                 current:
 *                   type: object
 *                   properties:
 *                     temp_c:
 *                       type: number
 *                     condition:
 *                       type: object
 *                       properties:
 *                         text:
 *                           type: string
 *                         icon:
 *                           type: string
 *       400:
 *         description: Invalid country parameter
 *       500:
 *         description: Failed to fetch weather data
 */
