/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */

/**
 * 自定义图形块
 */

/*
liquid block
*/
//% weight=80 color=#66FFFF icon="\uf043" block="liquid"
namespace Liquid {
    let pin = AnalogPin.P0
    let volt = 0;
    let adc = 0;


    /**
     * Set pin at which the Liquid Level Senor AOUT line is connected;
     * @param pin_arg pin at which the Liquid Level Senor AOUT line is connected;
     */
    //% blockId=Liquid_setPin
    //% block="set liquid pin |%pinarg|"
    //% weight = 85
    export function setPin(pin_arg: AnalogPin): void {
        pin = pin_arg;
    }


    /**
     * Return the adc value from the AnalogPin;
     */
    //% blockId=Liquid_getADCValue
    //% block="get liquid adc value"
    //% weight = 75
    export function getADCValue(): number {
        adc = pins.analogReadPin(pin);
        return adc;
    }

    /**
     * Return the volt value from the AnalogPin;
     */
    //% blockId=Liquid_getVoltValue
    //% block="get liquid volt value"
    //% weight = 65
    export function getVoltValue(): number {
        adc = pins.analogReadPin(pin);
        volt = adc * 3300 / 1024;
        return volt;
    }
}



/*
sound block
*/
//% weight=70 color=#CC6633 icon="\uf001" block="sound"
namespace Sound {
    let Apin = AnalogPin.P0;
    let Dpin = DigitalPin.P1;

    let noise = 0;
    let volt = 0;
    let adc = 0;


    /**
     * Set the Apin connected to Sound Sensor;
     * @param a_pin_arg Sound Sensor analog connected pin;
     */
    //% blockId=Sound_setApin
    //% block="sound sensor analog pin connect to |%a_pin_arg|"
    //% weight = 85
    export function setApin(a_pin_arg: AnalogPin): void {
        Apin = a_pin_arg;
    }


    /**
     * Set the Dpin connected to Sound Sensor;
     * @param d_pin_arg Sound Sensor digital connected pin;
     */
    //% blockId=Sound_setDpin
    //% block="sound sensor digital pin connect to |%d_pin_arg|"
    //% weight = 75
    export function setDpin(d_pin_arg: DigitalPin): void {
        Dpin = d_pin_arg;
        pins.setPull(Dpin, PinPullMode.PullUp);
    }


    /**
     * Return the sound sensor adc value from the AnalogPin;
     */
    //% blockId=Sound_getADCValue
    //% block="get sound adc value"
    //% weight = 65
    export function getADCValue(): number {
        adc = pins.analogReadPin(Apin);
        return adc;
    }

    /**
     * Return the sound sensor volt value from the AnalogPin;
     */
    //% blockId=Sound_getVoltValue
    //% block="get sound volt value"
    //% weight = 55
    export function getVoltValue(): number {
        adc = pins.analogReadPin(Apin);
        volt = adc * 3300 / 1024;
        return volt;
    }

    /**
     * Return the sound sensor volt value from the DigitalPin;
     */
    //% blockId=Sound_getNoise
    //% block="get whether noise is loud"
    //% weight = 45
    export function getNoise(): number {
        noise = pins.digitalReadPin(Dpin);
        if (noise) {
            return 0;
        } else {
            return 1;
        }
    }
}






/*
infrared  block
*/
//% weight=60 color=#FF0000 icon="\uf0eb" block="infrared"
namespace Infrared {
    let Apin = AnalogPin.P0;
    let Dpin = DigitalPin.P1;

    let close = 0;
    let volt = 0;
    let adc = 0;


    /**
     * Set the Apin connected to Infrared Sensor;
     * @param a_pin_arg Infrared Sensor analog connected pin;
     */
    //% blockId=Infrared_setApin
    //% block="infrared sensor analog pin connect to |%a_pin_arg|"
    //% weight = 85
    export function setApin(a_pin_arg: AnalogPin): void {
        Apin = a_pin_arg;
    }


    /**
     * Set the Dpin connected to Infrared Sensor;
     * @param d_pin_arg Infrared Sensor digital connected pin;
     */
    //% blockId=Infrared_setDpin
    //% block="infrared sensor digital pin connect to |%d_pin_arg|"
    //% weight = 75
    export function setDpin(d_pin_arg: DigitalPin): void {
        Dpin = d_pin_arg;
        pins.setPull(Dpin, PinPullMode.PullUp);
    }


    /**
     * Return the infrared sensor adc value from the AnalogPin;
     */
    //% blockId=Infrared_getADCValue
    //% block="get infrared adc value"
    //% weight = 65
    export function getADCValue(): number {
        adc = pins.analogReadPin(Apin);
        return adc;
    }

    /**
     * Return the infrared sensor volt value from the AnalogPin;
     */
    //% blockId=Infrared_getVoltValue
    //% block="get infrared volt value"
    //% weight = 55
    export function getVoltValue(): number {
        adc = pins.analogReadPin(Apin);
        volt = adc * 3300 / 1024;
        return volt;
    }

    /**
     * Return the infrared sensor level value from the DigitalPin;
     */
    //% blockId=Infrared_getClose
    //% block="get whether infrared near obstacles"
    //% weight = 45
    export function getClose(): number {
        close = pins.digitalReadPin(Dpin);
        if (close) {
            return 0;
        } else {
            return 1;
        }
    }
}




/*
Gas block
*/
//% weight=50 color=#0099FF icon="\uf069" block="gas"
namespace Gas {
    let Apin = AnalogPin.P0;
    let Dpin = DigitalPin.P1;

    let polluted = 0;
    let volt = 0;
    let adc = 0;


    /**
     * Set the Apin connected to Gas Sensor;
     * @param a_pin_arg Gas Sensor analog connected pin;
     */
    //% blockId=Gas_setApin
    //% block="gas sensor analog pin connect to |%a_pin_arg|"
    //% weight = 85
    export function setApin(a_pin_arg: AnalogPin): void {
        Apin = a_pin_arg;
    }


    /**
     * Set the Dpin connected to Gas Sensor;
     * @param d_pin_arg Gas Sensor digital connected pin;
     */
    //% blockId=Gas_setDpin
    //% block="gas sensor digital pin connect to |%d_pin_arg|"
    //% weight = 75
    export function setDpin(d_pin_arg: DigitalPin): void {
        Dpin = d_pin_arg;
        pins.setPull(Dpin, PinPullMode.PullUp);
    }


    /**
     * Return the gas sensor adc value from the AnalogPin;
     */
    //% blockId=Gas_getADCValue
    //% block="get gas adc value"
    //% weight = 65
    export function getADCValue(): number {
        adc = pins.analogReadPin(Apin);
        return adc;
    }

    /**
     * Return the gas sensor volt value from the AnalogPin;
     */
    //% blockId=Gas_getVoltValue
    //% block="get gas volt value"
    //% weight = 55
    export function getVoltValue(): number {
        adc = pins.analogReadPin(Apin);
        volt = adc * 3300 / 1024;
        return volt;
    }

    /**
     * Return the gas sensor level value from the DigitalPin;
     */
    //% blockId=Gas_getPolute
    //% block="get whether air polluted"
    //% weight = 45
    export function getPolluted(): number {
        polluted = pins.digitalReadPin(Dpin);
        if (polluted) {
            return 0;
        } else {
            return 1;
        }
    }
}






/*
flame block
*/
//% weight=40 color=#FF6633 icon="\uf06d" block="flame"
namespace Flame {
    let Apin = AnalogPin.P0;
    let Dpin = DigitalPin.P1;

    let far = 0;
    let volt = 0;
    let adc = 0;


    /**
     * Set the Apin connected to Flame Sensor;
     * @param a_pin_arg Flame Sensor analog connected pin;
     */
    //% blockId=Flame_setApin
    //% block="flame sensor analog pin connect to |%a_pin_arg|"
    //% weight = 85
    export function setApin(a_pin_arg: AnalogPin): void {
        Apin = a_pin_arg;
    }


    /**
     * Set the Dpin connected to Flame Sensor;
     * @param d_pin_arg Flame Sensor digital connected pin;
     */
    //% blockId=Flame_setDpin
    //% block="flame sensor digital pin connect to |%d_pin_arg|"
    //% weight = 75
    export function setDpin(d_pin_arg: DigitalPin): void {
        Dpin = d_pin_arg;
        pins.setPull(Dpin, PinPullMode.PullUp);
    }


    /**
     * Return the Flame sensor adc value from the AnalogPin;
     */
    //% blockId=Flame_getADCValue
    //% block="get flame adc value"
    //% weight = 65
    export function getADCValue(): number {
        adc = pins.analogReadPin(Apin);
        return adc;
    }

    /**
     * Return the flame sensor volt value from the AnalogPin;
     */
    //% blockId=Flame_getVoltValue
    //% block="get flame volt value"
    //% weight = 55
    export function getVoltValue(): number {
        adc = pins.analogReadPin(Apin);
        volt = adc * 3300 / 1024;
        return volt;
    }

    /**
     * Return the flame sensor level value from the DigitalPin;
     */
    //% blockId=Flame_getPolute
    //% block="get whether far from fire"
    //% weight = 45
    export function getFar(): number {
        far = pins.digitalReadPin(Dpin);
        return far;
    }
}




/*
moisture block
*/
//% weight=30 color=#FF9900 icon="\uf275" block="moisture"
namespace Moisture {
    let pin = AnalogPin.P0
    let volt = 0;
    let adc = 0;


    /**
     * Set pin at which the Moisture Senor AOUT line is connected;
     * @param pin_arg pin at which the Moisture Senor AOUT line is connected;
     */
    //% blockId=Moisture_setPin
    //% block="set moisture pin |%pinarg|"
    //% weight = 85
    export function setPin(pin_arg: AnalogPin): void {
        pin = pin_arg;
    }


    /**
     * Return the adc value from the AnalogPin;
     */
    //% blockId=Moisture_getADCValue
    //% block="get moisture adc value"
    //% weight = 75
    export function getADCValue(): number {
        adc = pins.analogReadPin(pin);
        return adc;
    }

    /**
     * Return the volt value from the AnalogPin;
     */
    //% blockId=Moisture_getVoltValue
    //% block="get moisture volt value"
    //% weight = 65
    export function getVoltValue(): number {
        adc = pins.analogReadPin(pin);
        volt = adc * 3300 / 1024;
        return volt;
    }
}







/*
mcp23017 block
*/
//% weight=20 color=#9900CC icon="\uf13d" block="mcp23017"
namespace MCP23017 {


    const MCP23017_IODIRA = 0x00
    const MCP23017_IPOLA = 0x02
    const MCP23017_GPINTENA = 0x04
    const MCP23017_DEFVALA = 0x06
    const MCP23017_INTCONA = 0x08
    const MCP23017_IOCONA = 0x0A
    const MCP23017_GPPUA = 0x0C
    const MCP23017_INTFA = 0x0E
    const MCP23017_INTCAPA = 0x10
    const MCP23017_GPIOA = 0x12
    const MCP23017_OLATA = 0x14

    const MCP23017_IODIRB = 0x01
    const MCP23017_IPOLB = 0x03
    const MCP23017_GPINTENB = 0x05
    const MCP23017_DEFVALB = 0x07
    const MCP23017_INTCONB = 0x09
    const MCP23017_IOCONB = 0x0B
    const MCP23017_GPPUB = 0x0D
    const MCP23017_INTFB = 0x0F
    const MCP23017_INTCAPB = 0x11
    const MCP23017_GPIOB = 0x13
    const MCP23017_OLATB = 0x15


    export enum REGISTER {
        IODIRA = 0x00,
        IODIRB = 0x01,
        IPOLA = 0x02,
        IPOLB = 0x03,
        GPINTENA = 0x04,
        GPINTENB = 0x05,
        DEFVALA = 0x06,
        DEFVALB = 0x07,
        INTCONA = 0x08,
        INTCONB = 0x09,
        IOCONA = 0x0A,
        IOCONB = 0x0B,
        GPPUA = 0x0C,
        GPPUB = 0x0D,
        INTFA = 0x0E,
        INTFB = 0x0F,
        INTCAPA = 0x10,
        INTCAPB = 0x11,
        GPIOA = 0x12,
        GPIOB = 0x13,
        OLATA = 0x14,
        OLATB = 0x15
    }

    export enum PIN {
        A = 0,
        B = 1
    }


    export enum MCP23017_I2C_ADDRESS {
        ADDR_0x20 = 0x20,
        ADDR_0x21 = 0x21,
        ADDR_0x22 = 0x22,
        ADDR_0x23 = 0x23,
        ADDR_0x24 = 0x24,
        ADDR_0x25 = 0x25,
        ADDR_0x26 = 0x26,
        ADDR_0x27 = 0x27
    }

    let initialized = false
    let MCP23017_ADDRESS = MCP23017_I2C_ADDRESS.ADDR_0x27


    function i2cWrite(addr: number, reg: number, value: number): void {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(addr, buf);
    }

    function i2cRead(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    function initMCP23017(): void {
        for (let regAddr = 0; regAddr < 22; regAddr++) {
            if (regAddr == 0 || regAddr == 1) {
                i2cWrite(MCP23017_ADDRESS, regAddr, 0xFF);
            }
            else {
                i2cWrite(MCP23017_ADDRESS, regAddr, 0x00);
            }
        }

        initialized = true;
    }


	/**
	 * WriteData to PinA or PinB
	 * @param addr [0-7] choose address; eg: MCP23017.MCP23017_I2C_ADDRESS.ADDR_0x27
	*/
    //% blockId="MCP23017_setAddress"
    //% block="set mcp23017 device address %addr"
    //% weight=85
    export function setAddress(addr: MCP23017_I2C_ADDRESS) {
        MCP23017_ADDRESS = addr
    }



    /**
	 *Read data from MCP23017 register
	 * @param reg [0-21] register of mcp23017; eg: 0, 15, 23
	*/
    //% blockId=MCP23017_readReg 
    //% block="read register |%reg| data"
    //% weight=75
    export function readReg(reg: REGISTER): number {
        let val = i2cRead(MCP23017_ADDRESS, reg);
        return val;
    }


	/**
	 * WriteData to MCP23017 PinAx or PinBx
	 * @param pin [0-1] choose PinA or PinB; eg: 0, 1
     * @param value [0-255] the pin value; eg: 128, 0, 255
	*/
    //% blockId=MCP23017_writePin
    //% block="set P|%pin| value |%value|"
    //% weight=65
    //% value.min=0 value.max=255
    export function writePin(pin: PIN, value: number): void {
        if (!initialized) {
            initMCP23017();
        }
        if (pin == 0) {
            i2cWrite(MCP23017_ADDRESS, MCP23017_IODIRA, 0x00);
            i2cWrite(MCP23017_ADDRESS, MCP23017_GPIOA, value);
        }
        else {
            i2cWrite(MCP23017_ADDRESS, MCP23017_IODIRB, 0x00);
            i2cWrite(MCP23017_ADDRESS, MCP23017_GPIOB, value);
        }
    }

	/**
	 *ReadData From PinA or PinB 
	 * @param pin [0-1] choose PinA or PinB; eg: 0, 1
	*/
    //% blockId=MCP23017_readPin
    //% block="read data from P|%pin|"
    //% weight=55
    export function readPin(pin: PIN): number {
        if (!initialized) {
            initMCP23017();
        }
        if (pin == 0) {

            //configue all PinA input
            i2cWrite(MCP23017_ADDRESS, MCP23017_IODIRA, 0xFF);

            //configue all PinA pullUP
            i2cWrite(MCP23017_ADDRESS, MCP23017_GPPUA, 0xFF);

            let val = i2cRead(MCP23017_ADDRESS, MCP23017_GPIOA);

            return val;
        }
        else {

            //configue all PinB input
            i2cWrite(MCP23017_ADDRESS, MCP23017_IODIRB, 0xFF);

            //configue all PinB pullUP
            i2cWrite(MCP23017_ADDRESS, MCP23017_GPPUB, 0xFF);

            let val = i2cRead(MCP23017_ADDRESS, MCP23017_GPIOB);

            return val;
        }
    }
}






/*
For more information,please refer to :
https://github.com/BoschSensortec/BME280_driver
*/


/**
 * BME280 block
 */
//% weight=15 color=#CC00CC icon="\uf0c2" block="BME280"
namespace BME280 {

    export enum BME280_I2C_ADDRESS {
        //% block="0x76"
        ADDR_0x76 = 0x76,
        //% block="0x77"
        ADDR_0x77 = 0x77
    }

    let BME280_I2C_ADDR = BME280_I2C_ADDRESS.ADDR_0x77

    function setreg(reg: number, value: number): void {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(BME280_I2C_ADDR, buf);
    }

    function getreg(reg: number): number {
        pins.i2cWriteNumber(BME280_I2C_ADDR, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(BME280_I2C_ADDR, NumberFormat.UInt8BE);
        return val;
    }

    function getInt8LE(reg: number): number {
        pins.i2cWriteNumber(BME280_I2C_ADDR, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(BME280_I2C_ADDR, NumberFormat.Int8LE);
        return val;
    }

    function getUInt16LE(reg: number): number {
        pins.i2cWriteNumber(BME280_I2C_ADDR, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(BME280_I2C_ADDR, NumberFormat.UInt16LE);
        return val;
    }

    function getInt16LE(reg: number): number {
        pins.i2cWriteNumber(BME280_I2C_ADDR, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(BME280_I2C_ADDR, NumberFormat.Int16LE);
        return val;
    }

    let dig_T1 = getUInt16LE(0x88)
    let dig_T2 = getInt16LE(0x8A)
    let dig_T3 = getInt16LE(0x8C)
    let dig_P1 = getUInt16LE(0x8E)
    let dig_P2 = getInt16LE(0x90)
    let dig_P3 = getInt16LE(0x92)
    let dig_P4 = getInt16LE(0x94)
    let dig_P5 = getInt16LE(0x96)
    let dig_P6 = getInt16LE(0x98)
    let dig_P7 = getInt16LE(0x9A)
    let dig_P8 = getInt16LE(0x9C)
    let dig_P9 = getInt16LE(0x9E)
    let dig_H1 = getreg(0xA1)
    let dig_H2 = getInt16LE(0xE1)
    let dig_H3 = getreg(0xE3)
    let a = getreg(0xE5)
    let dig_H4 = (getreg(0xE4) << 4) + (a % 16)
    let dig_H5 = (getreg(0xE6) << 4) + (a >> 4)
    let dig_H6 = getInt8LE(0xE7)
    setreg(0xF2, 0x04)
    //Force Mode
    setreg(0xF4, 0x2F)
    setreg(0xF5, 0x0C)
    let T = 0
    let P = 0
    let H = 0


    function calData(): void {
        let adc_T = (getreg(0xFA) << 12) + (getreg(0xFB) << 4) + (getreg(0xFC) >> 4)
        let var1 = (((adc_T >> 3) - (dig_T1 << 1)) * dig_T2) >> 11
        let var2 = (((((adc_T >> 4) - dig_T1) * ((adc_T >> 4) - dig_T1)) >> 12) * dig_T3) >> 14
        let t = var1 + var2
        T = ((t * 5 + 128) >> 8) / 100
        var1 = (t >> 1) - 64000
        var2 = (((var1 >> 2) * (var1 >> 2)) >> 11) * dig_P6
        var2 = var2 + ((var1 * dig_P5) << 1)
        var2 = (var2 >> 2) + (dig_P4 << 16)
        var1 = (((dig_P3 * ((var1 >> 2) * (var1 >> 2)) >> 13) >> 3) + (((dig_P2) * var1) >> 1)) >> 18
        var1 = ((32768 + var1) * dig_P1) >> 15
        if (var1 == 0)
            return; // avoid exception caused by division by zero
        let adc_P = (getreg(0xF7) << 12) + (getreg(0xF8) << 4) + (getreg(0xF9) >> 4)
        let _p = ((1048576 - adc_P) - (var2 >> 12)) * 3125
        _p = (_p / var1) * 2;
        var1 = (dig_P9 * (((_p >> 3) * (_p >> 3)) >> 13)) >> 12
        var2 = (((_p >> 2)) * dig_P8) >> 13
        P = _p + ((var1 + var2 + dig_P7) >> 4)
        let adc_H = (getreg(0xFD) << 8) + getreg(0xFE)
        var1 = t - 76800
        var2 = (((adc_H << 14) - (dig_H4 << 20) - (dig_H5 * var1)) + 16384) >> 15
        var1 = var2 * (((((((var1 * dig_H6) >> 10) * (((var1 * dig_H3) >> 11) + 32768)) >> 10) + 2097152) * dig_H2 + 8192) >> 14)
        var2 = var1 - (((((var1 >> 15) * (var1 >> 15)) >> 7) * dig_H1) >> 4)
        if (var2 < 0) var2 = 0
        if (var2 > 419430400) var2 = 419430400
        H = (var2 >> 12) / 1024
    }

    /**
     * get pressure(Pa)
     */
    //% blockId="BME280_pressure" 
    //% block="pressure"
    //% weight=80 
    //% blockGap=8
    export function pressure(): number {
        calData();
        return P;
    }

    /**
     * get temperature(*C)
     */
    //% blockId="BME280_temperature" 
    //% block="temperature"
    //% weight=80 
    //% blockGap=8
    export function temperature(): number {
        calData();
        return T;
    }

    /**
     * get humidity(%RH)
     */
    //% blockId="BME280_hunidity" 
    //% block="humidity"
    //% weight=80 
    //% blockGap=8
    export function hunidity(): number {
        calData();
        return H;
    }

    /**
     * power on
     */
    //% blockId="BME280_forceMode" 
    //% block="force mode on"
    //% weight=61 
    //% blockGap=8
    //% advanced=true
    export function forceMode() {
        setreg(0xF4, 0x2F)
    }

    /**
     * power off
     */
    //% blockId="BME280_normalMode" 
    //% block="normal mode on"
    //% weight=60 
    //% blockGap=8
    //% advanced=true
    export function normalMode() {
        setreg(0xF4, 0)
    }

    /**
     * set I2C address
     * @param addr [6-7] choose address; eg: BME280.BME280_I2C_ADDRESS.ADDR_0x77
     */
    //% blockId="BME280_setAddress" 
    //% block="set bme280 device address %addr"
    //% weight=50 
    //% blockGap=8
    export function setAddress(addr: BME280_I2C_ADDRESS) {
        BME280_I2C_ADDR = addr
    }
}







/*
UV Sensor block
*/
//% weight=15 color=#6600FF icon="\uf185" block="UV"
namespace UV {
    let pin = AnalogPin.P0
    let volt = 0;
    let adc = 0;


    /**
     * Set pin at which the UV Senor AOUT line is connected;
     * @param pin_arg pin at which the UV Senor AOUT line is connected;
     */
    //% blockId=UV_setPin
    //% block="set UV pin |%pinarg|"
    //% weight = 85
    export function setPin(pin_arg: AnalogPin): void {
        pin = pin_arg;
    }


    /**
     * Return the adc value from the AnalogPin;
     */
    //% blockId=UV_getADCValue
    //% block="get UV adc value"
    //% weight = 75
    export function getADCValue(): number {
        adc = pins.analogReadPin(pin);
        return adc;
    }

    /**
     * Return the volt value from the AnalogPin;
     */
    //% blockId=UV_getVoltValue
    //% block="get UV volt value"
    //% weight = 65
    export function getVoltValue(): number {
        adc = pins.analogReadPin(pin);
        volt = adc * 3300 / 1024;
        return volt;
    }
}





/*
Tilt Sensor block
*/
//% weight=10 color=#33FF99 icon="\uf033" block="Tilt"
namespace Tilt{
    let pin = DigitalPin.P0
    let result = 0;


    /**
     * Set pin at which the Tilt Senor DOUT line is connected;
     * @param pin_arg pin at which the Tilt Senor DOUT line is connected;
     */
    //% blockId=Tilt_setPin
    //% block="set Tilt pin |%pin_arg|"
    //% weight = 85
    export function setPin(pin_arg: DigitalPin): void {
        pin = pin_arg;
    }


    /**
     * Return the output data;
     */
    //% blockId=UV_getWhetherShaking
    //% block="get whether shaking"
    //% weight = 75
    export function getWhetherShaking(): number {
        result = pins.digitalReadPin(pin);
        return result;
    }
}



/*
Ultrasonic block
*/
//% weight=8 color=#FF0000 icon="\uf0fb" block="Ultrasonic"
namespace Ultrasonic{

    //% blockId=Ultrasonic_getDistance
    //% block="get distance"
    //% weight=80
    export function getDistance(): number {

        // send pulse
        pins.setPull(DigitalPin.P0, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P0, 0);
        control.waitMicros(2);
        //the high level duration is 10 ms
        pins.digitalWritePin(DigitalPin.P0, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P0, 0);
        // read pulse
        let d = pins.pulseIn(DigitalPin.P1, PulseValue.High, 11600);
        return d / 58;
    }
}

