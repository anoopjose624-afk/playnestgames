#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

#define PI 3.141592653589793
#define INTERACTIONS 5
#define PI2 PI * 2.0

uniform vec3  backgroundColor;
uniform vec3  spikesColor;
uniform float deltaTime;

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

  #ifdef VOLUMETRIC_FOG
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
  #else
    in float vFogDepth;
  #endif
#endif

out vec4 fragColor;
in  vec2 vUv;

void main (void)
{
  float ammount = 1.0;
  const float inten = 0.005;
  float time = deltaTime + 23.0;

  vec2 point = mod(vUv * PI2, PI2) - 250.0;
  vec2 p = vec2(point);

  for (int i = 0; i < INTERACTIONS; i++)
  {
    float t = time * (1.0 - 3.5 / float(i + 1));

    p = point + vec2(
      cos(t - p.x) + sin(t + p.y),
      sin(t - p.y) + cos(t + p.x)
    );

    ammount += 1.0 / length(vec2(
      point.x / (sin(p.x + t) / inten),
      point.y / (cos(p.y + t) / inten)
    ));
  }

  ammount /= float(INTERACTIONS);
  ammount = 1.17 - pow(ammount, 1.4);

  float source = length(abs(vUv - vec2(0.5)));
  float alphaFactor = smoothstep(0.0, 1.0, source) * 2.0;

  vec3 color = vec3(pow(abs(ammount), 8.0)) * spikesColor;
  color = clamp(color + backgroundColor, 0.0, 1.0);
  fragColor = vec4(color, mix(0.0, 1.0, alphaFactor));

  #ifdef USE_FOG
    #ifdef VOLUMETRIC_FOG
      #ifndef saturate
  #define saturate(a) clamp(a, 0.0, 1.0)
#endif

const int FBM_OCTAVES = 8;
const float heightFactor = 0.08;

vec3 sampleCoord = vWorldPosition * 0.00025 + vec3(
  fogTime * 0.025, 0.0, fogTime * 0.025
);

float noiseSample = fBmTex(sampleCoord + fBmTex(
    sampleCoord, FBM_OCTAVES
  ), FBM_OCTAVES
) * 0.5 + 0.5;

float fogDepth = distance(vWorldPosition, cameraPosition);
vec3 fogDirection = normalize(vWorldPosition - cameraPosition);

fogDepth *= mix(noiseSample, 1.0, saturate((fogDepth - 5000.0) / 5000.0));
fogDepth *= fogDepth;

float fogFactor = saturate(heightFactor * exp(-cameraPosition.y * fogDensity) * (
  1.0 - exp(-fogDepth * fogDirection.y * fogDensity)
) / fogDirection.y);

fragColor.rgb = mix(fragColor.rgb, fogColor, fogFactor);
    #else
      float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
fragColor.rgb = mix(fragColor.rgb, fogColor, fogFactor);
    #endif
  #endif
}