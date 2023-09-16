//
#include <Wire.h>
#include "Adafruit_TCS34725.h"
int moisture = 0;
Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_4X);




void setup()
{
  pinMode(A0, OUTPUT);
  pinMode(A1, INPUT);
  Serial.begin(9600);




}




void loop()
{
    float red, green, blue;
 
  tcs.setInterrupt(false);  // turn on LED




  delay(60);  // takes 50ms to read




  tcs.getRGB(&red, &green, &blue);
 
  if(blue > 210){
    Serial.println("hydrated");
  }
    else{
      if(blue > 120){
        Serial.println("average");
      }
        else{
          Serial.println("dehydrated");
        }
    }
   
 




 
 
  tcs.setInterrupt(true);  // turn off LED




  Serial.print("R:\t"); Serial.print(int(red));
  Serial.print("\tG:\t"); Serial.print(int(green));
  Serial.print("\tB:\t"); Serial.print(int(blue));




//  Serial.print("\t");
//  Serial.print((int)red, HEX); Serial.print((int)green, HEX); Serial.print((int)blue, HEX);
  Serial.print("\n");
  // Apply power to the soil moisture sensor
  digitalWrite(A0, HIGH);
  delay(10); // Wait for 10 millisecond(s)
  moisture = analogRead(A1);
  // Turn off the sensor to reduce metal corrosion
  // over time
  digitalWrite(A0, LOW);








  if (moisture < 350) {
    Serial.println("compaction");




  } else {
    if (moisture < 600) {
      Serial.println("constipation");




    } else {
      if (moisture < 700) {
        Serial.println("normal");




      } else {
        if (moisture < 1000) {
          Serial.println("diarrhea");




        } else {




        }
      }
    }
  }
  delay(100); // Wait for 100 millisecond(s)
}

