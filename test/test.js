QUnit.module('masodfokuEgyenletMegoldasa', function() {
    QUnit.test('létezik-e', function(assert) {
      assert.ok(masodfokuEgyenletMegoldasa, "Létezik-e a masodfokuEgyenletMegoldasa?");
    });

    QUnit.test('függvény-e', function(assert) {
        assert.ok(typeof(masodfokuEgyenletMegoldasa) === "function", "Függvény-e?");
    });

    QUnit.test('masodfokuEgyenletMegoldasa()', function(assert) {
        let test = [
            //1
            {
                a: 0, 
                b: 4, 
                c: 4,
                vart: {"X1": "Nem egy szám", "X2": "- Végtelen"},
            },
            //2
            {
                a: 4, 
                b: 0, 
                c: 4,
                vart: {"X1": "Diszkriminánsa negatív", "X2": "Diszkriminánsa negatív"},
            },
            //3
            {
                a: 4, 
                b: 4, 
                c: 0,
                vart: {"X1": 0, "X2": -1},
            },
            //4
            {
                a: 0, 
                b: 0, 
                c: 4,
                vart: {"X1": "Nem egy szám", "X2": "Nem egy szám"},
            },
            //5
            {
                a: 0, 
                b: 4, 
                c: 0,
                vart: {"X1": "Nem egy szám", "X2": "- Végtelen"},
            },
            //6
            {
                a: 4, 
                b: 0, 
                c: 0,
                vart: {"X1": 0, "X2": 0},
            },
            //7
            {
                a: 0, 
                b: 0, 
                c: 0,
                vart: {"X1": "Nem egy szám", "X2": "Nem egy szám"},
            },


            //8
            {
                a: 1,
                b: 4,
                c: 4,
                vart : {"X1": -2, "X2": -2},
            },


            //9
            {
                a: "a", 
                b: 2, 
                c: 5,
                vart: {"X1": "Nem egy szám", "X2": "Nem egy szám"},
            },
            //10
            {
                a: 1, 
                b: "2", 
                c: 5,
                vart: {"X1": "Nem egy szám", "X2": "Nem egy szám"},
            },
            //11
            {
                a: 1, 
                b: 2, 
                c: "5",
                vart: {"X1": "Nem egy szám", "X2": "Nem egy szám"},
            },
            //12
            {
                a: "a", 
                b: "2", 
                c: 5,
                vart: {"X1": "Nem egy szám", "X2": "Nem egy szám"},
            },
            //13
            {
                a: "a", 
                b: 2, 
                c: "5",
                vart: {"X1": "Nem egy szám", "X2": "Nem egy szám"},
            },
            //14
            {
                a: 2, 
                b: "2", 
                c: "5",
                vart: {"X1": "Nem egy szám", "X2": "Nem egy szám"},
            },
            //15
            {
                a: "a", 
                b: "2", 
                c: "5",
                vart: {"X1": "Nem egy szám", "X2": "Nem egy szám"},
            },


            //16
            {
                a: -1,
                b: 4,
                c: 4,
                vart : {"X1": -0.8284271247461903, "X2": 4.82842712474619},
            },
            //17
            {
                a: 1,
                b: -4,
                c: 4,
                vart : {"X1": 2, "X2": 2},
            },
            //18
            {
                a: 1,
                b: 4,
                c: -4,
                vart : {"X1": 0.8284271247461903, "X2": -4.82842712474619},
            },
            //19
            {
                a: -1,
                b: -4,
                c: 4,
                vart : {"X1": -4.82842712474619, "X2": 0.8284271247461903},
            },
            //20
            {
                a: -1,
                b: 4,
                c: -4,
                vart : {"X1": 2, "X2": 2},
            },
            //21
            {
                a: -1,
                b: -4,
                c: -4,
                vart : {"X1": -2, "X2": -2},
            },
            //22
            {
                a: 1,
                b: -4,
                c: -4,
                vart : {"X1": 4.82842712474619, "X2": -0.8284271247461903},
            },


            //23
            {
                a: 4,
                b: 4,
                c: 4,
                vart : {"X1": "Diszkriminánsa negatív", "X2": "Diszkriminánsa negatív"},
            },
            //24
            {
                a: null,
                b: 4,
                c: 4,
                vart : {"X1": "Nem egy szám", "X2": "- Végtelen"},
            },
            //25
            {
                a: 1,
                b: null,
                c: 4,
                vart : {"X1": "Diszkriminánsa negatív", "X2": "Diszkriminánsa negatív"},
            },
            //26
            {
                a: 1,
                b: 4,
                c: null,
                vart : {"X1": "Diszkriminánsa negatív", "X2": "Diszkriminánsa negatív"},
            },
            //27
            {
                a: null,
                b: null,
                c: 4,
                vart : {"X1": "Diszkriminánsa negatív", "X2": "Diszkriminánsa negatív"},
            },
            //28
            {
                a: 1,
                b: null,
                c: null,
                vart : {"X1": "Diszkriminánsa negatív", "X2": "Diszkriminánsa negatív"},
            },
            //29
            {
                a: null,
                b: 4,
                c: null,
                vart : {"X1": "Diszkriminánsa negatív", "X2": "Diszkriminánsa negatív"},
            },
            //30
            {
                a: null,
                b: null,
                c: null,
                vart : {"X1": "Diszkriminánsa negatív", "X2": "Diszkriminánsa negatív"},
            },
            //31
            {
                a: 2,
                b: 4,
                c: 2,
                vart : {"X1": -1, "X2": -1},
            },

            //32
            {
                a: 2,
                b: 5,
                c: 2,
                vart : {"X1": -0.5, "X2": -2},
            },
            //33
            {
                a: 2,
                b: 3,
                c: 2,
                vart : {"X1": "Diszkriminánsa negatív", "X2": "Diszkriminánsa negatív"},
            },
        ];

        test.forEach(test => {
            assert.deepEqual(masodfokuEgyenletMegoldasa(test.a, test.b, test.c), test.vart, `${test.a}, ${test.b}, ${test.c}`);
        });
        
    });

  });