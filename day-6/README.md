## Day 6: Probably a Fire Hazard

Because your neighbors keep defeating you in the holiday house decorating contest year after year, you've decided to deploy one million lights in a 1000x1000 grid.

Furthermore, because you've been especially nice this year, Santa has mailed you instructions on how to display the ideal lighting configuration.

Lights in your grid are numbered from `0` to `999` in each direction; the lights at each corner are at `0,0`, `0,999`, `999,999`, and `999,0` . The instructions include whether to turn on, turn off, or toggle various inclusive ranges given as coordinate pairs. Each coordinate pair represents opposite corners of a rectangle, inclusive; a coordinate pair like `0,0` through `2,2` therefore refers to` 9 lights` in a `3x3` square. The lights all start turned off.

To defeat your neighbors this year, all you have to do is set up your lights by doing the instructions Santa sent you in order.

For example:

- `turn on 0,0 through 999,999` would `turn on` (or leave on) every light.
- `toggle 0,0 through 999,0` would `toggle` the first line of `1000` lights, turning off the ones that were on, and turning on the ones that were off.
- `turn off 499,499 through 500,500` would turn off (or leave off) the middle four lights.

After following the instructions, how many lights are lit?

---

### grid structure:

```
0,0   0,1   0,2   0,3   ...   0,999
1,0   1,1   1,2   1,3   ...   1,999
.     .     .     .     ...   .
.     .     .     .     ...   .
.     .     .     .     ...   .
998,0 998,1 998,2 998,3 ...   998,999
999,0 999,1 999,2 999,3 ...   999,999
```

---

###instructions :

#### raw :

```
  turn on 489,959 through 759,964
  turn off 820,516 through 871,914
  toggle 120,314 through 745,489
```

#### desired data format:

```js
[
  {
    instruction: "turn on",
    startingCoordinate: { x: 489, y: 959 },
    endingCoordinate: { x: 759, y: 964 },
  },
  {
    instruction: "turn off",
    startingCoordinate: { x: 820, y: 516 },
    endingCoordinate: { x: 871, y: 914 },
  },
  {
    instruction: "toggle",
    startingCoordinate: { x: 120, y: 314 },
    endingCoordinate: { x: 745, y: 489 },
  },
];
```

---

### Names :

- ideal lighting
- configuration
- instructions
- display
- grid
- direction
- corners of rectangle
- coordinatePair
- set up lights
- holiday house decorating contest
- deploy
- inclusive ranges given in pair
- refers to

---

### Recognizing entities:

- light (represents individual light).
- circuitBoard/switchBoard (represents light controller).
- lights (represents group of lights)

### light :-

enclosed value:

- state of light (on/off)

methods:

```js
light = new Light();
light.turnOn;
light.turnOff;
light.toggle;
light.state;
```

### switchBoard :-

enclosed value:

- list of lights

methods:

```js
lightController = new lightController(lights);
lightController.instruct(instructions);
lightController.status;
```

---

### Pseudo main :

```js
const grid = new Array(1000).fill("").map((a) => new Array(1000).fill(""));
const lights = grid.map((line) => line.map(() => new Light()));
const lightController = new lightController(lights);
lightController.instruct(instructions);
const { onLightCount, offLightCount } = lightController.status;
```
#TODO

- [x] Write test for `light.state` class.
- [x] write corresponding code for the test.
- [x] Git commit.
- [x] add more test if needed and commit.
- [x] write test for `light.turnOn()`.
- [x] write corresponding code to pass the test.
- [x] git commit.
- [x] add more test if needed and commit.
- [x] write test for `light.turnOff()`.
- [x] write corresponding code to pass the test.
- [ ] git commit.
- [ ] write test for `light.toggle()`.
- [ ] write corresponding code to pass those test.
- [ ] git commit.
- [ ] write more test.
- [ ] git commit.