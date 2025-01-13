let fragment = `
uniform sampler2D uTexture;
uniform vec2 uMouse;
varying vec2 vUv;

float circle(vec2 uv, vec2 circlePosition, float radius) {
	float dist = distance(circlePosition, uv);
	return 1. - smoothstep(0.0, radius, dist);
}

void main() {
	vec4 finalTexture = texture2D(uTexture, vUv);
	csm_DiffuseColor = finalTexture;
}
`

fragment = `
uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
    vec4 finalTexture = texture2D(uTexture, vUv);
    gl_FragColor = finalTexture; // Output the texture color
}
`
export default fragment;