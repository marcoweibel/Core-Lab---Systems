#include <RFduinoGZLL.h> // include rfduino library
device_t role = HOST; // set Device name... DEVICE2 to DEVICE7 / HOST

String sstr;
void setup()
{
  Serial.begin(9600); // begin serial communications
  // start the GZLL stack  
  RFduinoGZLL.begin(role); // begin BLE communications
}

void loop()
{


}

void RFduinoGZLL_onReceive(device_t device, int rssi, char *data, int len) // this function receives BLE communications
{

  if (data[0]==109){ // if first character is m (ascci code 109) then print out the data
  

    //Serial.print(data);
sstr=data; // print out data
   Serial.println(sstr);
  
  
  if (device == DEVICE4)  // if device name is DEVICE1 relay the last known state to DEVICE1
    RFduinoGZLL.sendToDevice(device, "data from host");
}
}
