int ledpin = 12;
void setup() {
 Serial.begin(9600);
 pinMode(ledpin,OUTPUT);
}
void loop() {
 if(Serial.available())
  {
  char data = Serial.read();
  if(data == 'led_1')
     digitalWrite(ledpin,HIGH);
  else
   if(data == 'led_0')  
     digitalWrite(ledpin,LOW); 
 }
}
