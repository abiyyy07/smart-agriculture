export default function CodeComponents() {
    return (
        <div className="container mx-auto mt-12">
            <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Source Code</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <pre>
                    <code>
                        {`#define BLYNK_TEMPLATE_ID "TMPL6RkLDHOZc"
#define BLYNK_TEMPLATE_NAME "smart agriculture"
#define BLYNK_AUTH_TOKEN "your_token"

#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>
#include <SimpleTimer.h>
#include <DHT.h>

#define DHTPIN D7
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2); 
int sensorPin = A0; 
int pump = 2;

char auth[] = "4cN6vbgCAuYsjlgLb0JGtxeTqrwWyyYR";
char ssid[] = "your hostpot or wifi";
char pass[] = "your password";

SimpleTimer timer;

void sendSensor();

void setup() {
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
  lcd.clear();
  lcd.setCursor(2, 0);
  lcd.print("CONNECTING!");
  lcd.begin(16, 2);

  Blynk.begin(auth, ssid, pass);
  timer.setInterval(1000L, sendSensor);

  pinMode(pump, OUTPUT);
  digitalWrite(pump, HIGH);
}

void loop() {
  Blynk.run();
  timer.run();
  delay(100);
}

void sendSensor() {
  int moisture = analogRead(sensorPin); // 
  int humidity = dht.readHumidity();
  int temperature = dht.readTemperature();

  Serial.print(temperature);
  Serial.print(humidity);

  Serial.print("Oil Moisture: ");
  Serial.print(moisture);
  Serial.println("%");

  Blynk.virtualWrite(V0, moisture);
  Blynk.virtualWrite(V7, humidity);
  Blynk.virtualWrite(V1, temperature);

  if (moisture > 1000) {
    Serial.println("KERING");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("KERING");
    lcd.setCursor(0, 1);
    lcd.print("PUMP: ON");
    lcd.setCursor(10, 0);
    lcd.print("H:");
    lcd.setCursor(13, 0);
    lcd.print(humidity);
    lcd.setCursor(10, 1);
    lcd.print("T:");
    lcd.setCursor(13, 1);
    lcd.print(temperature);
    digitalWrite(pump, LOW);
  } else if (moisture > 600 && moisture < 1000) {
    Serial.println("NORMAL");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("NORMAL");
    lcd.setCursor(0, 1);
    lcd.print("PUMP: OFF");
    lcd.setCursor(10, 0);
    lcd.print("H:");
    lcd.setCursor(13, 0);
    lcd.print(humidity);
    lcd.setCursor(10, 1);
    lcd.print("T:");
    lcd.setCursor(13, 1);
    lcd.print(temperature);
    digitalWrite(pump, HIGH);
  } else if (moisture < 600) {
    Serial.println("BASAH");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("BASAH");
    lcd.setCursor(0, 1);
    lcd.print("PUMP: OFF");
    lcd.setCursor(10, 0);
    lcd.print("H:");
    lcd.setCursor(13, 0);
    lcd.print(humidity);
    lcd.setCursor(10, 1);
    lcd.print("T:");
    lcd.setCursor(13, 1);
    lcd.print(temperature);
    lcd.setCursor(14, 1);
    digitalWrite(pump, HIGH);
  }
  Blynk.virtualWrite(V6, digitalRead(pump) ? "OFF" : "ON");
}`}
                    </code>
                </pre>
            </div>
        </div>
    );
}
