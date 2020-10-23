var mousePos = {x: 0, y: 0}; // Position of the cursor

var mouseButton = { // Buttons on the mouse
	left  : {code: 0 , held: false},
	middle: {code: 1 , held: false},
	right : {code: 2 , held: false}
};

var keyboard = { // Each key on the keyboard and its keyboard code
	BACKSPACE    : {code: 8 ,  held: false} ,
	TAB          : {code: 9 ,  held: false} ,
	ENTER        : {code: 13,  held: false} ,
	SHIFT        : {code: 16,  held: false} ,
	CTRL         : {code: 17,  held: false} ,
	ALT          : {code: 18,  held: false} ,
	PAUSE        : {code: 19,  held: false} ,
	CAPS_LOCK    : {code: 20,  held: false} ,
	ESCAPE       : {code: 27,  held: false} ,
	SPACE        : {code: 32,  held: false} ,
	PAGE_UP      : {code: 33,  held: false} ,
	PAGE_DOWN    : {code: 34,  held: false} ,
	END          : {code: 35,  held: false} ,
	HOME         : {code: 36,  held: false} ,
	LEFT_ARROW   : {code: 37,  held: false} ,
	UP_ARROW     : {code: 38,  held: false} ,
	RIGHT_ARROW  : {code: 39,  held: false} ,
	DOWN_ARROW   : {code: 40,  held: false} ,
	INSERT       : {code: 45,  held: false} ,
	DELETE       : {code: 46,  held: false} ,
	KEY_0        : {code: 48,  held: false} ,
	KEY_1        : {code: 49,  held: false} ,
	KEY_2        : {code: 50,  held: false} ,
	KEY_3        : {code: 51,  held: false} ,
	KEY_4        : {code: 52,  held: false} ,
	KEY_5        : {code: 53,  held: false} ,
	KEY_6        : {code: 54,  held: false} ,
	KEY_7        : {code: 55,  held: false} ,
	KEY_8        : {code: 56,  held: false} ,
	KEY_9        : {code: 57,  held: false} ,
	KEY_A        : {code: 65,  held: false} ,
	KEY_B        : {code: 66,  held: false} ,
	KEY_C        : {code: 67,  held: false} ,
	KEY_D        : {code: 68,  held: false} ,
	KEY_E        : {code: 69,  held: false} ,
	KEY_F        : {code: 70,  held: false} ,
	KEY_G        : {code: 71,  held: false} ,
	KEY_H        : {code: 72,  held: false} ,
	KEY_I        : {code: 73,  held: false} ,
	KEY_J        : {code: 74,  held: false} ,
	KEY_K        : {code: 75,  held: false} ,
	KEY_L        : {code: 76,  held: false} ,
	KEY_M        : {code: 77,  held: false} ,
	KEY_N        : {code: 78,  held: false} ,
	KEY_O        : {code: 79,  held: false} ,
	KEY_P        : {code: 80,  held: false} ,
	KEY_Q        : {code: 81,  held: false} ,
	KEY_R        : {code: 82,  held: false} ,
	KEY_S        : {code: 83,  held: false} ,
	KEY_T        : {code: 84,  held: false} ,
	KEY_U        : {code: 85,  held: false} ,
	KEY_V        : {code: 86,  held: false} ,
	KEY_W        : {code: 87,  held: false} ,
	KEY_X        : {code: 88,  held: false} ,
	KEY_Y        : {code: 89,  held: false} ,
	KEY_Z        : {code: 90,  held: false} ,
	LEFT_META    : {code: 91,  held: false} ,
	RIGHT_META   : {code: 92,  held: false} ,
	SELECT       : {code: 93,  held: false} ,
	NUMPAD_0     : {code: 96,  held: false} ,
	NUMPAD_1     : {code: 97,  held: false} ,
	NUMPAD_2     : {code: 98,  held: false} ,
	NUMPAD_3     : {code: 99,  held: false} ,
	NUMPAD_4     : {code: 100, held: false},
	NUMPAD_5     : {code: 101, held: false},
	NUMPAD_6     : {code: 102, held: false},
	NUMPAD_7     : {code: 103, held: false},
	NUMPAD_8     : {code: 104, held: false},
	NUMPAD_9     : {code: 105, held: false},
	MULTIPLY     : {code: 106, held: false},
	ADD          : {code: 107, held: false},
	SUBTRACT     : {code: 109, held: false},
	DECIMAL      : {code: 110, held: false},
	DIVIDE       : {code: 111, held: false},
	F1           : {code: 112, held: false},
	F2           : {code: 113, held: false},
	F3           : {code: 114, held: false},
	F4           : {code: 115, held: false},
	F5           : {code: 116, held: false},
	F6           : {code: 117, held: false},
	F7           : {code: 118, held: false},
	F8           : {code: 119, held: false},
	F9           : {code: 120, held: false},
	F10          : {code: 121, held: false},
	F11          : {code: 122, held: false},
	F12          : {code: 123, held: false},
	NUM_LOCK     : {code: 144, held: false},
	SCROLL_LOCK  : {code: 145, held: false},
	SEMICOLON    : {code: 186, held: false},
	EQUALS       : {code: 187, held: false},
	COMMA        : {code: 188, held: false},
	DASH         : {code: 189, held: false},
	PERIOD       : {code: 190, held: false},
	FORWARD_SLASH: {code: 191, held: false},
	GRAVE_ACCENT : {code: 192, held: false},
	OPEN_BRACKET : {code: 219, held: false},
	BACK_SLASH   : {code: 220, held: false},
	CLOSE_BRACKET: {code: 221, held: false},
	SINGLE_QUOTE : {code: 222, held: false}
};
