#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

#ifdef USE_FOG
  in vec3 vWorldPosition;
uniform float fogTime;
uniform vec3 fogColor;

#ifdef FOG_EXP2
  uniform float fogDensity;
#else
  uniform float fogNear;
  uniform float fogFar;
#endif

  #ifdef FOG_EXP2
    /**
 * Fractional Brownian Motion by Inigo Quilez:
 * https:
 * https:
 */

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

uniform sampler2D noise;

float fBmTex (vec3 point, int octaves)
{
  float value = 0.0;
  float amplitude = 0.5;

  for (int o = 0; o < octaves; o++)
  {
    vec3 p = fract(point);

    /**
     * Use the green channel when sampling this texture due
     * to the extra bit of precision provided for green in
     * DXT-compressed and uncompressed RGB 565 formats.
     */
    float t1 = texture(noise, p.yx).g;
    float t2 = texture(noise, p.yz).g;

    float v = (t1 + t2) * 0.5;
    value += amplitude * v;

    amplitude *= 0.5;
    point *= 2.0;

    /**
     * Alternatively, \"snoise.glsl\" can also be used
     * in this loop to generate noise at runtime:
     *
     * value += amplitude * snoise(point);
     * amplitude *= 0.5;
     * point *= 2.0;
     */
  }

  return value;
}
  #endif
#endif