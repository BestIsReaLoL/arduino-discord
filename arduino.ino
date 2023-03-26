int ledpin = 12;
void setup() {
 Serial.begin(9600);
 pinMode(ledpin,OUTPUT);
}
void loop() {
 if(Serial.available())
  {
  char data = Serial.read();
  if(data == '1')
     digitalWrite(ledpin,HIGH);
  else
   if(data == '0')  
     digitalWrite(ledpin,LOW); 
 }
}