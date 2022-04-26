const _scene = new Entity("_scene");
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
_scene.addComponentOrReplace(transform);

const entity = new Entity("entity");
engine.addEntity(entity);
entity.setParent(_scene);
const gltfShape = new GLTFShape(
  "c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb"
);
gltfShape.withCollisions = true;
gltfShape.isPointerBlocker = true;
gltfShape.visible = true;
entity.addComponentOrReplace(gltfShape);
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity.addComponentOrReplace(transform2);

const stairsGlassPanelCorner = new Entity("stairsGlassPanelCorner");
engine.addEntity(stairsGlassPanelCorner);
stairsGlassPanelCorner.setParent(_scene);
const transform3 = new Transform({
  position: new Vector3(3, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
stairsGlassPanelCorner.addComponentOrReplace(transform3);
const gltfShape2 = new GLTFShape(
  "730ddd1e-3520-414d-a1e1-9398fd630841/glassPanelStairs_corner.glb"
);
gltfShape2.withCollisions = true;
gltfShape2.isPointerBlocker = true;
gltfShape2.visible = true;
stairsGlassPanelCorner.addComponentOrReplace(gltfShape2);

const stairsGlassPanelCorner2 = new Entity("stairsGlassPanelCorner2");
engine.addEntity(stairsGlassPanelCorner2);
stairsGlassPanelCorner2.setParent(_scene);
stairsGlassPanelCorner2.addComponentOrReplace(gltfShape2);
const transform4 = new Transform({
  position: new Vector3(11, 4, 3),
  rotation: new Quaternion(
    -8.775275097839944e-16,
    0.7071068286895752,
    -8.429368847373553e-8,
    -0.7071067690849304
  ),
  scale: new Vector3(1, 1, 1),
});
stairsGlassPanelCorner2.addComponentOrReplace(transform4);

const stairsGlassPanelCorner4 = new Entity("stairsGlassPanelCorner4");
engine.addEntity(stairsGlassPanelCorner4);
stairsGlassPanelCorner4.setParent(_scene);
stairsGlassPanelCorner4.addComponentOrReplace(gltfShape2);
const transform5 = new Transform({
  position: new Vector3(13, 8, 11),
  rotation: new Quaternion(
    -5.7769201308201495e-15,
    -1,
    1.1920928244535389e-7,
    0
  ),
  scale: new Vector3(1, 1, 1),
});
stairsGlassPanelCorner4.addComponentOrReplace(transform5);

const greyFloorPanel = new Entity("greyFloorPanel");
engine.addEntity(greyFloorPanel);
greyFloorPanel.setParent(_scene);
const transform6 = new Transform({
  position: new Vector3(7, 4, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
greyFloorPanel.addComponentOrReplace(transform6);
const gltfShape3 = new GLTFShape(
  "13b9f9e1-7b20-40fc-a21b-ca2103026096/FloorSciFiPanel_01/FloorSciFiPanel_01.glb"
);
gltfShape3.withCollisions = true;
gltfShape3.isPointerBlocker = true;
gltfShape3.visible = true;
greyFloorPanel.addComponentOrReplace(gltfShape3);

const greyFloorPanel2 = new Entity("greyFloorPanel2");
engine.addEntity(greyFloorPanel2);
greyFloorPanel2.setParent(_scene);
greyFloorPanel2.addComponentOrReplace(gltfShape3);
const transform7 = new Transform({
  position: new Vector3(9, 4, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
greyFloorPanel2.addComponentOrReplace(transform7);

const greyFloorPanel3 = new Entity("greyFloorPanel3");
engine.addEntity(greyFloorPanel3);
greyFloorPanel3.setParent(_scene);
greyFloorPanel3.addComponentOrReplace(gltfShape3);
const transform8 = new Transform({
  position: new Vector3(11, 4, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
greyFloorPanel3.addComponentOrReplace(transform8);

const greyFloorPanel4 = new Entity("greyFloorPanel4");
engine.addEntity(greyFloorPanel4);
greyFloorPanel4.setParent(_scene);
greyFloorPanel4.addComponentOrReplace(gltfShape3);
const transform9 = new Transform({
  position: new Vector3(15, 8, 5),
  rotation: new Quaternion(
    -4.0440727798819515e-16,
    -0.7071068286895752,
    8.429369557916289e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
greyFloorPanel4.addComponentOrReplace(transform9);

const greyFloorPanel5 = new Entity("greyFloorPanel5");
engine.addEntity(greyFloorPanel5);
greyFloorPanel5.setParent(_scene);
greyFloorPanel5.addComponentOrReplace(gltfShape3);
const transform10 = new Transform({
  position: new Vector3(15, 8, 7),
  rotation: new Quaternion(
    -4.0440727798819515e-16,
    -0.7071068286895752,
    8.429369557916289e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
greyFloorPanel5.addComponentOrReplace(transform10);

const greyFloorPanel6 = new Entity("greyFloorPanel6");
engine.addEntity(greyFloorPanel6);
greyFloorPanel6.setParent(_scene);
greyFloorPanel6.addComponentOrReplace(gltfShape3);
const transform11 = new Transform({
  position: new Vector3(15, 8, 9),
  rotation: new Quaternion(
    -4.0440727798819515e-16,
    -0.7071068286895752,
    8.429369557916289e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
greyFloorPanel6.addComponentOrReplace(transform11);

const greyFloorPanel7 = new Entity("greyFloorPanel7");
engine.addEntity(greyFloorPanel7);
greyFloorPanel7.setParent(_scene);
greyFloorPanel7.addComponentOrReplace(gltfShape3);
const transform12 = new Transform({
  position: new Vector3(7, 12, 15),
  rotation: new Quaternion(8.025718702155669e-16, 0, 1.088531040241566e-15, -1),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
greyFloorPanel7.addComponentOrReplace(transform12);

const greyFloorPanel8 = new Entity("greyFloorPanel8");
engine.addEntity(greyFloorPanel8);
greyFloorPanel8.setParent(_scene);
greyFloorPanel8.addComponentOrReplace(gltfShape3);
const transform13 = new Transform({
  position: new Vector3(9, 12, 15),
  rotation: new Quaternion(8.025718702155669e-16, 0, 1.088531040241566e-15, -1),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
greyFloorPanel8.addComponentOrReplace(transform13);

const greyFloorPanel9 = new Entity("greyFloorPanel9");
engine.addEntity(greyFloorPanel9);
greyFloorPanel9.setParent(_scene);
greyFloorPanel9.addComponentOrReplace(gltfShape3);
const transform14 = new Transform({
  position: new Vector3(11, 12, 15),
  rotation: new Quaternion(8.025718702155669e-16, 0, 1.088531040241566e-15, -1),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
greyFloorPanel9.addComponentOrReplace(transform14);

const roofGlass2 = new Entity("roofGlass2");
engine.addEntity(roofGlass2);
roofGlass2.setParent(_scene);
const gltfShape4 = new GLTFShape(
  "af9aa90e-f9bf-4363-bb8b-447c15ef908e/GlassRoof.glb"
);
gltfShape4.withCollisions = true;
gltfShape4.isPointerBlocker = true;
gltfShape4.visible = true;
roofGlass2.addComponentOrReplace(gltfShape4);
const transform15 = new Transform({
  position: new Vector3(5, 0, 3),
  rotation: new Quaternion(
    -5.837277581059123e-15,
    1,
    -1.1920928244535389e-7,
    0
  ),
  scale: new Vector3(1.264572262763977, 1, 1),
});
roofGlass2.addComponentOrReplace(transform15);

const roofGlass = new Entity("roofGlass");
engine.addEntity(roofGlass);
roofGlass.setParent(_scene);
roofGlass.addComponentOrReplace(gltfShape4);
const transform16 = new Transform({
  position: new Vector3(10, 0, 3.000000238418579),
  rotation: new Quaternion(
    -5.837277581059123e-15,
    1,
    -1.1920928244535389e-7,
    0
  ),
  scale: new Vector3(1.3203250169754028, 1, 0.9999999403953552),
});
roofGlass.addComponentOrReplace(transform16);

const roofGlass3 = new Entity("roofGlass3");
engine.addEntity(roofGlass3);
roofGlass3.setParent(_scene);
roofGlass3.addComponentOrReplace(gltfShape4);
const transform17 = new Transform({
  position: new Vector3(10, 0, 7),
  rotation: new Quaternion(
    -5.837277581059123e-15,
    1,
    -1.1920928244535389e-7,
    0
  ),
  scale: new Vector3(1.3203250169754028, 1, 0.9999999403953552),
});
roofGlass3.addComponentOrReplace(transform17);

const roofGlass4 = new Entity("roofGlass4");
engine.addEntity(roofGlass4);
roofGlass4.setParent(_scene);
roofGlass4.addComponentOrReplace(gltfShape4);
const transform18 = new Transform({
  position: new Vector3(10, 0, 11),
  rotation: new Quaternion(
    -5.837277581059123e-15,
    1,
    -1.1920928244535389e-7,
    0
  ),
  scale: new Vector3(1.3203250169754028, 1, 0.9999999403953552),
});
roofGlass4.addComponentOrReplace(transform18);

const roofGlass5 = new Entity("roofGlass5");
engine.addEntity(roofGlass5);
roofGlass5.setParent(_scene);
roofGlass5.addComponentOrReplace(gltfShape4);
const transform19 = new Transform({
  position: new Vector3(
    13.133068084716797,
    3.721280336380005,
    5.103331565856934
  ),
  rotation: new Quaternion(
    -4.127578846475997e-15,
    0.7071068286895752,
    -8.429370268459024e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.2645713090896606, 1, 1.0000011920928955),
});
roofGlass5.addComponentOrReplace(transform19);

const roofGlass6 = new Entity("roofGlass6");
engine.addEntity(roofGlass6);
roofGlass6.setParent(_scene);
roofGlass6.addComponentOrReplace(gltfShape4);
const transform20 = new Transform({
  position: new Vector3(
    13.13306713104248,
    3.721280813217163,
    10.10333251953125
  ),
  rotation: new Quaternion(
    -4.127578846475997e-15,
    0.7071068286895752,
    -8.429370268459024e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.3197107315063477, 1, 1.0000014305114746),
});
roofGlass6.addComponentOrReplace(transform20);

const roofGlass7 = new Entity("roofGlass7");
engine.addEntity(roofGlass7);
roofGlass7.setParent(_scene);
roofGlass7.addComponentOrReplace(gltfShape4);
const transform21 = new Transform({
  position: new Vector3(
    9.13306713104248,
    3.721280336380005,
    10.103330612182617
  ),
  rotation: new Quaternion(
    -4.127578846475997e-15,
    0.7071068286895752,
    -8.429370268459024e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.3197102546691895, 1, 1.0000014305114746),
});
roofGlass7.addComponentOrReplace(transform21);

const roofGlass8 = new Entity("roofGlass8");
engine.addEntity(roofGlass8);
roofGlass8.setParent(_scene);
roofGlass8.addComponentOrReplace(gltfShape4);
const transform22 = new Transform({
  position: new Vector3(
    5.133066177368164,
    3.721280097961426,
    10.103330612182617
  ),
  rotation: new Quaternion(
    -4.127578846475997e-15,
    0.7071068286895752,
    -8.429370268459024e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.3197102546691895, 1, 1.0000014305114746),
});
roofGlass8.addComponentOrReplace(transform22);

const roofGlass9 = new Entity("roofGlass9");
engine.addEntity(roofGlass9);
roofGlass9.setParent(_scene);
roofGlass9.addComponentOrReplace(gltfShape4);
const transform23 = new Transform({
  position: new Vector3(
    10.942740440368652,
    7.721281051635742,
    13.033567428588867
  ),
  rotation: new Quaternion(3.098256573917809e-15, 0, -8.193957868446976e-15, 1),
  scale: new Vector3(1.2645715475082397, 1, 1.0000019073486328),
});
roofGlass9.addComponentOrReplace(transform23);

const roofGlass10 = new Entity("roofGlass10");
engine.addEntity(roofGlass10);
roofGlass10.setParent(_scene);
roofGlass10.addComponentOrReplace(gltfShape4);
const transform24 = new Transform({
  position: new Vector3(
    5.942739486694336,
    7.721280574798584,
    13.033565521240234
  ),
  rotation: new Quaternion(3.098256573917809e-15, 0, -8.193957868446976e-15, 1),
  scale: new Vector3(1.264754056930542, 1, 1.0000019073486328),
});
roofGlass10.addComponentOrReplace(transform24);

const roofGlass11 = new Entity("roofGlass11");
engine.addEntity(roofGlass11);
roofGlass11.setParent(_scene);
roofGlass11.addComponentOrReplace(gltfShape4);
const transform25 = new Transform({
  position: new Vector3(
    5.942741394042969,
    7.721279621124268,
    9.033565521240234
  ),
  rotation: new Quaternion(3.098256573917809e-15, 0, -8.193957868446976e-15, 1),
  scale: new Vector3(1.264753818511963, 1, 1.0000019073486328),
});
roofGlass11.addComponentOrReplace(transform25);

const roofGlass12 = new Entity("roofGlass12");
engine.addEntity(roofGlass12);
roofGlass12.setParent(_scene);
roofGlass12.addComponentOrReplace(gltfShape4);
const transform26 = new Transform({
  position: new Vector3(
    5.942742347717285,
    7.721278667449951,
    5.033563613891602
  ),
  rotation: new Quaternion(3.098256573917809e-15, 0, -8.193957868446976e-15, 1),
  scale: new Vector3(1.264754056930542, 1, 1.0000019073486328),
});
roofGlass12.addComponentOrReplace(transform26);

const wallPlainGlass4 = new Entity("wallPlainGlass4");
engine.addEntity(wallPlainGlass4);
wallPlainGlass4.setParent(_scene);
const gltfShape5 = new GLTFShape(
  "e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb"
);
gltfShape5.withCollisions = true;
gltfShape5.isPointerBlocker = true;
gltfShape5.visible = true;
wallPlainGlass4.addComponentOrReplace(gltfShape5);
const transform27 = new Transform({
  position: new Vector3(1, 0, 0.5),
  rotation: new Quaternion(
    4.8894820179159245e-15,
    0.7071068286895752,
    -8.429371689544496e-8,
    0.7071068286895752
  ),
  scale: new Vector3(7.201804161071777, 2.973330497741699, 1.0000008344650269),
});
wallPlainGlass4.addComponentOrReplace(transform27);

const wallPlainTurquoise = new Entity("wallPlainTurquoise");
engine.addEntity(wallPlainTurquoise);
wallPlainTurquoise.setParent(_scene);
const transform28 = new Transform({
  position: new Vector3(5.051537036895752, 4, 6.723638534545898),
  rotation: new Quaternion(
    8.016157182488826e-15,
    -1,
    1.1920928244535389e-7,
    -2.2351741790771484e-8
  ),
  scale: new Vector3(2.551593780517578, 0.2863989472389221, 0.9999999403953552),
});
wallPlainTurquoise.addComponentOrReplace(transform28);
const gltfShape6 = new GLTFShape(
  "7728c7b8-9f31-4c7d-ae9e-d767fed3b76b/PlainTurquoiseWall.glb"
);
gltfShape6.withCollisions = true;
gltfShape6.isPointerBlocker = true;
gltfShape6.visible = true;
wallPlainTurquoise.addComponentOrReplace(gltfShape6);

const wallPlainTurquoise2 = new Entity("wallPlainTurquoise2");
engine.addEntity(wallPlainTurquoise2);
wallPlainTurquoise2.setParent(_scene);
wallPlainTurquoise2.addComponentOrReplace(gltfShape6);
const transform29 = new Transform({
  position: new Vector3(5.275684833526611, 4, 2.950932502746582),
  rotation: new Quaternion(
    5.668279685005313e-15,
    -0.7071068286895752,
    8.429370268459024e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(2.033113718032837, 0.2863989472389221, 1.000001072883606),
});
wallPlainTurquoise2.addComponentOrReplace(transform29);

const wallPlainTurquoise3 = new Entity("wallPlainTurquoise3");
engine.addEntity(wallPlainTurquoise3);
wallPlainTurquoise3.setParent(_scene);
wallPlainTurquoise3.addComponentOrReplace(gltfShape6);
const transform30 = new Transform({
  position: new Vector3(10.248459815979004, 4, 6.707765579223633),
  rotation: new Quaternion(
    5.668279685005313e-15,
    -0.7071068286895752,
    8.429370268459024e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(
    4.2226152420043945,
    0.2863989472389221,
    1.0000029802322388
  ),
});
wallPlainTurquoise3.addComponentOrReplace(transform30);

const wallPlainPink = new Entity("wallPlainPink");
engine.addEntity(wallPlainPink);
wallPlainPink.setParent(_scene);
const transform31 = new Transform({
  position: new Vector3(12.941838264465332, 8, 5.118020057678223),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.91483473777771, 0.3225681185722351, 1),
});
wallPlainPink.addComponentOrReplace(transform31);
const gltfShape7 = new GLTFShape(
  "74776d39-3df7-4841-8f3f-43e8a946a76a/PlainPinkWall.glb"
);
gltfShape7.withCollisions = true;
gltfShape7.isPointerBlocker = true;
gltfShape7.visible = true;
wallPlainPink.addComponentOrReplace(gltfShape7);

const wallPlainPink2 = new Entity("wallPlainPink2");
engine.addEntity(wallPlainPink2);
wallPlainPink2.setParent(_scene);
wallPlainPink2.addComponentOrReplace(gltfShape7);
const transform32 = new Transform({
  position: new Vector3(9.139078140258789, 8, 10.268139839172363),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.026106834411621, 0.3225681185722351, 1),
});
wallPlainPink2.addComponentOrReplace(transform32);

const wallPlainPink3 = new Entity("wallPlainPink3");
engine.addEntity(wallPlainPink3);
wallPlainPink3.setParent(_scene);
wallPlainPink3.addComponentOrReplace(gltfShape7);
const transform33 = new Transform({
  position: new Vector3(9.416842460632324, 8, 4.844245433807373),
  rotation: new Quaternion(
    1.9058190491244922e-15,
    0.7071066498756409,
    -8.429368136830817e-8,
    0.7071069478988647
  ),
  scale: new Vector3(2.7080318927764893, 0.3225681185722351, 1),
});
wallPlainPink3.addComponentOrReplace(transform33);

const wallPlainPistachio = new Entity("wallPlainPistachio");
engine.addEntity(wallPlainPistachio);
wallPlainPistachio.setParent(_scene);
const transform34 = new Transform({
  position: new Vector3(
    10.99868106842041,
    11.77914810180664,
    8.700582504272461
  ),
  rotation: new Quaternion(
    -1.3079226320966784e-15,
    0.7071067690849304,
    -8.429367426288081e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.1866424083709717, 0.3352786898612976, 1),
});
wallPlainPistachio.addComponentOrReplace(transform34);
const gltfShape8 = new GLTFShape(
  "71bba827-1721-4afc-a521-e75344c63f0f/PlainPistachioWall.glb"
);
gltfShape8.withCollisions = true;
gltfShape8.isPointerBlocker = true;
gltfShape8.visible = true;
wallPlainPistachio.addComponentOrReplace(gltfShape8);

const wallPlainPistachio3 = new Entity("wallPlainPistachio3");
engine.addEntity(wallPlainPistachio3);
wallPlainPistachio3.setParent(_scene);
wallPlainPistachio3.addComponentOrReplace(gltfShape8);
const transform35 = new Transform({
  position: new Vector3(15.5, 11.77914810180664, 1),
  rotation: new Quaternion(
    1.2303677025230116e-14,
    0,
    -6.384733186077943e-15,
    -1
  ),
  scale: new Vector3(7.275115489959717, 0.3352786898612976, 0.9999999403953552),
});
wallPlainPistachio3.addComponentOrReplace(transform35);

const floorLightDisc = new Entity("floorLightDisc");
engine.addEntity(floorLightDisc);
floorLightDisc.setParent(_scene);
const transform36 = new Transform({
  position: new Vector3(7.454422473907471, 0, 8.203082084655762),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.200987339019775, 2.142503499984741, 4.200987339019775),
});
floorLightDisc.addComponentOrReplace(transform36);
const gltfShape9 = new GLTFShape(
  "0845fe62-9876-4e6a-a9c2-e001667c455b/Light_04/Light_04.glb"
);
gltfShape9.withCollisions = true;
gltfShape9.isPointerBlocker = true;
gltfShape9.visible = true;
floorLightDisc.addComponentOrReplace(gltfShape9);

const greyFloorPanel10 = new Entity("greyFloorPanel10");
engine.addEntity(greyFloorPanel10);
greyFloorPanel10.setParent(_scene);
greyFloorPanel10.addComponentOrReplace(gltfShape3);
const transform37 = new Transform({
  position: new Vector3(5, 12, 15),
  rotation: new Quaternion(8.025718702155669e-16, 0, 1.088531040241566e-15, -1),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
greyFloorPanel10.addComponentOrReplace(transform37);

const greyFloorPanel11 = new Entity("greyFloorPanel11");
engine.addEntity(greyFloorPanel11);
greyFloorPanel11.setParent(_scene);
greyFloorPanel11.addComponentOrReplace(gltfShape3);
const transform38 = new Transform({
  position: new Vector3(3, 12, 15),
  rotation: new Quaternion(8.025718702155669e-16, 0, 1.088531040241566e-15, -1),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
greyFloorPanel11.addComponentOrReplace(transform38);

const wallPlainPistachio4 = new Entity("wallPlainPistachio4");
engine.addEntity(wallPlainPistachio4);
wallPlainPistachio4.setParent(_scene);
wallPlainPistachio4.addComponentOrReplace(gltfShape8);
const transform39 = new Transform({
  position: new Vector3(
    1.036299228668213,
    11.77914810180664,
    0.7532234191894531
  ),
  rotation: new Quaternion(
    -1.3079226320966784e-15,
    0.7071067690849304,
    -8.429367426288081e-8,
    0.7071068286895752
  ),
  scale: new Vector3(7.038313388824463, 0.3352786898612976, 1),
});
wallPlainPistachio4.addComponentOrReplace(transform39);

const roofGlass13 = new Entity("roofGlass13");
engine.addEntity(roofGlass13);
roofGlass13.setParent(_scene);
roofGlass13.addComponentOrReplace(gltfShape4);
const transform40 = new Transform({
  position: new Vector3(11, 7.721281051635742, 5),
  rotation: new Quaternion(3.098256573917809e-15, 0, -8.193957868446976e-15, 1),
  scale: new Vector3(1.2645715475082397, 1, 1.0000019073486328),
});
roofGlass13.addComponentOrReplace(transform40);

const roofGlass14 = new Entity("roofGlass14");
engine.addEntity(roofGlass14);
roofGlass14.setParent(_scene);
roofGlass14.addComponentOrReplace(gltfShape4);
const transform41 = new Transform({
  position: new Vector3(11, 7.721280574798584, 1),
  rotation: new Quaternion(
    -1.5927904001701403e-15,
    1,
    -1.1920928244535389e-7,
    -3.725290298461914e-8
  ),
  scale: new Vector3(1.1444573402404785, 1, 1.0000019073486328),
});
roofGlass14.addComponentOrReplace(transform41);

const roofGlass16 = new Entity("roofGlass16");
engine.addEntity(roofGlass16);
roofGlass16.setParent(_scene);
roofGlass16.addComponentOrReplace(gltfShape4);
const transform42 = new Transform({
  position: new Vector3(11, 7.721281051635742, 9),
  rotation: new Quaternion(3.098256573917809e-15, 0, -8.193957868446976e-15, 1),
  scale: new Vector3(1.2645715475082397, 1, 1.0000019073486328),
});
roofGlass16.addComponentOrReplace(transform42);

const wallPlainPistachio2 = new Entity("wallPlainPistachio2");
engine.addEntity(wallPlainPistachio2);
wallPlainPistachio2.setParent(_scene);
wallPlainPistachio2.addComponentOrReplace(gltfShape8);
const transform43 = new Transform({
  position: new Vector3(15.5, 11.77914810180664, 1),
  rotation: new Quaternion(
    -1.3079226320966784e-15,
    0.7071067690849304,
    -8.429367426288081e-8,
    0.7071068286895752
  ),
  scale: new Vector3(3.942790985107422, 0.3352786898612976, 1),
});
wallPlainPistachio2.addComponentOrReplace(transform43);

const wallPlainPistachio5 = new Entity("wallPlainPistachio5");
engine.addEntity(wallPlainPistachio5);
wallPlainPistachio5.setParent(_scene);
wallPlainPistachio5.addComponentOrReplace(gltfShape8);
const transform44 = new Transform({
  position: new Vector3(15.5, 11.77914810180664, 9),
  rotation: new Quaternion(
    1.2303677025230116e-14,
    0,
    -6.384733186077943e-15,
    -1
  ),
  scale: new Vector3(
    2.3480746746063232,
    0.3352786898612976,
    0.9999999403953552
  ),
});
wallPlainPistachio5.addComponentOrReplace(transform44);

const wallPlainPistachio6 = new Entity("wallPlainPistachio6");
engine.addEntity(wallPlainPistachio6);
wallPlainPistachio6.setParent(_scene);
wallPlainPistachio6.addComponentOrReplace(gltfShape8);
const transform45 = new Transform({
  position: new Vector3(11, 11.77914810180664, 15),
  rotation: new Quaternion(
    1.2303677025230116e-14,
    0,
    -6.384733186077943e-15,
    -1
  ),
  scale: new Vector3(5.13648796081543, 0.3352786898612976, 0.9999999403953552),
});
wallPlainPistachio6.addComponentOrReplace(transform45);

const wallPlainGlass = new Entity("wallPlainGlass");
engine.addEntity(wallPlainGlass);
wallPlainGlass.setParent(_scene);
wallPlainGlass.addComponentOrReplace(gltfShape5);
const transform46 = new Transform({
  position: new Vector3(1, 0, 0.5),
  rotation: new Quaternion(
    -1.7791107129183636e-14,
    1,
    -1.1920930376163597e-7,
    0
  ),
  scale: new Vector3(7.20180606842041, 2.973330497741699, 1.000001072883606),
});
wallPlainGlass.addComponentOrReplace(transform46);

const whiteFloorPanel = new Entity("whiteFloorPanel");
engine.addEntity(whiteFloorPanel);
whiteFloorPanel.setParent(_scene);
const transform47 = new Transform({
  position: new Vector3(7.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(
    6.7138566970825195,
    0.6253830790519714,
    6.7138566970825195
  ),
});
whiteFloorPanel.addComponentOrReplace(transform47);
const gltfShape10 = new GLTFShape(
  "0046ae53-1ef6-43de-b0ad-e29f98c89d75/FloorModuleSciFi_01/FloorModuleSciFi_01.glb"
);
gltfShape10.withCollisions = true;
gltfShape10.isPointerBlocker = true;
gltfShape10.visible = true;
whiteFloorPanel.addComponentOrReplace(gltfShape10);

const wallPlainGlass2 = new Entity("wallPlainGlass2");
engine.addEntity(wallPlainGlass2);
wallPlainGlass2.setParent(_scene);
wallPlainGlass2.addComponentOrReplace(gltfShape5);
const transform48 = new Transform({
  position: new Vector3(0.9618024826049805, 0, 15.022305488586426),
  rotation: new Quaternion(
    -1.7791107129183636e-14,
    1,
    -1.1920930376163597e-7,
    0
  ),
  scale: new Vector3(7.20180606842041, 2.973330497741699, 1.000001072883606),
});
wallPlainGlass2.addComponentOrReplace(transform48);

const wallPlainGlass3 = new Entity("wallPlainGlass3");
engine.addEntity(wallPlainGlass3);
wallPlainGlass3.setParent(_scene);
wallPlainGlass3.addComponentOrReplace(gltfShape5);
const transform49 = new Transform({
  position: new Vector3(15.5, 3.6394505500793457, 0.5),
  rotation: new Quaternion(
    4.8894820179159245e-15,
    0.7071068286895752,
    -8.429371689544496e-8,
    0.7071068286895752
  ),
  scale: new Vector3(7.447340965270996, 2.042159080505371, 1.0000022649765015),
});
wallPlainGlass3.addComponentOrReplace(transform49);

const hallwayDoorOpen = new Entity("hallwayDoorOpen");
engine.addEntity(hallwayDoorOpen);
hallwayDoorOpen.setParent(_scene);
const transform50 = new Transform({
  position: new Vector3(15.5, 0, 8),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582),
});
hallwayDoorOpen.addComponentOrReplace(transform50);
const gltfShape11 = new GLTFShape(
  "1c2952f6-41d1-49e9-a6a0-78f7868b4332/Hallway_Module_Door_02/Hallway_Module_Door_02.glb"
);
gltfShape11.withCollisions = true;
gltfShape11.isPointerBlocker = true;
gltfShape11.visible = true;
hallwayDoorOpen.addComponentOrReplace(gltfShape11);

const roofGlass15 = new Entity("roofGlass15");
engine.addEntity(roofGlass15);
roofGlass15.setParent(_scene);
roofGlass15.addComponentOrReplace(gltfShape4);
const transform51 = new Transform({
  position: new Vector3(
    11.01853084564209,
    7.721280574798584,
    5.028722763061523
  ),
  rotation: new Quaternion(
    -1.5927904001701403e-15,
    1,
    -1.1920928244535389e-7,
    -3.725290298461914e-8
  ),
  scale: new Vector3(1.1444573402404785, 1, 1.0000019073486328),
});
roofGlass15.addComponentOrReplace(transform51);

const wallPlainGlass5 = new Entity("wallPlainGlass5");
engine.addEntity(wallPlainGlass5);
wallPlainGlass5.setParent(_scene);
wallPlainGlass5.addComponentOrReplace(gltfShape5);
const transform52 = new Transform({
  position: new Vector3(15.5, 0, 0.5),
  rotation: new Quaternion(
    4.8894820179159245e-15,
    0.7071068286895752,
    -8.429371689544496e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.3337883949279785, 0.9281612038612366, 1.000003457069397),
});
wallPlainGlass5.addComponentOrReplace(transform52);

const wallPlainGlass6 = new Entity("wallPlainGlass6");
engine.addEntity(wallPlainGlass6);
wallPlainGlass6.setParent(_scene);
wallPlainGlass6.addComponentOrReplace(gltfShape5);
const transform53 = new Transform({
  position: new Vector3(15.68293571472168, 0, 10.931146621704102),
  rotation: new Quaternion(
    4.8894820179159245e-15,
    0.7071068286895752,
    -8.429371689544496e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.191108465194702, 0.9281612038612366, 1.0000039339065552),
});
wallPlainGlass6.addComponentOrReplace(transform53);
