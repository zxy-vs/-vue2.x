export let option = {
    backgroundColor: '#000',
    globe: {
        baseTexture: require('../../public/static/3Decharts/3dglobe1.jpg'),
        heightTexture: require('../../public/static/3Decharts/3dglobe1.jpg'),
        displacementScale: 0.04,
        shading: 'realistic',
        environment: require('../../public/static/3Decharts/3dglobe2.jpg'),
        realisticMaterial: {
            roughness: 0.9
        },
        postEffect: {
            enable: true
        },
        light: {
            main: {
                intensity: 5,
                shadow: true
            },
            ambientCubemap: {
                texture: '../EChartsData/3DeChartsData/3dGlobe.hdr',
                diffuseIntensity: 0.2
            }
        }
    }
};