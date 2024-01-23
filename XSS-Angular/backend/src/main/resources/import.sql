INSERT INTO ROLE_T VALUES('de2860a3-f56d-48ff-88aa-ac21b98b85d9', 'ADMIN');
INSERT INTO ROLE_T VALUES('4fd6f920-13e4-4a45-ac13-1f2ad6364ce1', 'CUSTOMER');

INSERT INTO USER_T VALUES('97b691d2-8eb5-11ee-b9d1-0242ac120002', 'jkowalski', 'Jan', '$2a$10$HEQShakS1hz1MGYH/kswMOZDwEhOATnRjGjdIVoIY22Pj0jsLlTfe', 'Kowalski');
INSERT INTO USER_ROLE_T VALUES('de2860a3-f56d-48ff-88aa-ac21b98b85d9', '97b691d2-8eb5-11ee-b9d1-0242ac120002');

INSERT INTO USER_T VALUES('60701538-8eb8-11ee-b9d1-0242ac120002', 'tmalinowski', 'Tadeusz', '$2a$10$fPO3p56Rh4Q.phHgyRpkpuj4e5fpSedxvKyT4sVfhqCABVNT1afbC', 'Malinowski');
INSERT INTO USER_ROLE_T VALUES('de2860a3-f56d-48ff-88aa-ac21b98b85d9', '60701538-8eb8-11ee-b9d1-0242ac120002');

INSERT INTO USER_T VALUES('1c8c18b0-4252-4957-b91c-d1fd8c795f8f','ajakubowska', 'Agnieszka','$2a$10$Tbn5DE4lw0hAYo4rW0xzgeZ17FWMV0JmzfGKmDtT8j9BM37UTk9X2','Jakubowska');
INSERT INTO ADDRESS_T VALUES('Warszawa','Poland','21','d9253106-6fe1-4d4b-ba5e-cca81bafd6e1','Jutrzenki 11' );
INSERT INTO CUSTOMER_T VALUES ('d9253106-6fe1-4d4b-ba5e-cca81bafd6e1', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '4e62e966-3c0f-4aaa-97c1-395db7848657','34061171313','BOY873021','1c8c18b0-4252-4957-b91c-d1fd8c795f8f');
INSERT INTO USER_ROLE_T VALUES('4fd6f920-13e4-4a45-ac13-1f2ad6364ce1','1c8c18b0-4252-4957-b91c-d1fd8c795f8f');

INSERT INTO USER_T VALUES('0b62de0f-7b36-421a-b5b4-1ab83e68101e','bjasicka','Bogusława','$2a$10$eaZuP8S1XaKA2CQb1nYFLOLCYnn7EQA2kFSkYCy.S/47xN0jp/uFG','Jasicka');
INSERT INTO ADDRESS_T VALUES('Warszawa','Poland','22','d9f54d825-9377-471f-9f38-b37105f1d67a','Nutki 14');
INSERT INTO CUSTOMER_T VALUES ('d9f54d825-9377-471f-9f38-b37105f1d67a', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '87057d50-3ef4-4034-96ae-afdc2cbcec20','38040133259','RRY713467', '0b62de0f-7b36-421a-b5b4-1ab83e68101e');
INSERT INTO USER_ROLE_T VALUES('4fd6f920-13e4-4a45-ac13-1f2ad6364ce1','0b62de0f-7b36-421a-b5b4-1ab83e68101e');

INSERT INTO USER_T VALUES('5576f198-1c21-4853-8fa5-64e889ba2e26','apietrzak','Anna','$2a$10$VjU3NMKYYWrZNQ4Bhn6jLujYyFC8Mxw7occGt8l9Mh4hi6WQayhHG','Pietrzak');
INSERT INTO ADDRESS_T VALUES('Lublin','Poland','23','88f96c0f-0b8c-4022-92a0-49d42b3183a8','Ciekawa 10');
INSERT INTO CUSTOMER_T VALUES ('88f96c0f-0b8c-4022-92a0-49d42b3183a8', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '6bdbc89d-3f3e-46ed-b187-4dccfed31285','06213182887','CEK233633', '5576f198-1c21-4853-8fa5-64e889ba2e26');
INSERT INTO USER_ROLE_T VALUES('4fd6f920-13e4-4a45-ac13-1f2ad6364ce1','5576f198-1c21-4853-8fa5-64e889ba2e26');

INSERT INTO USER_T VALUES('b9d41de6-8330-46d2-b9be-b04da4bfc39e','apawlak','Agnieszka','$2a$10$JULItrD1wf7UbeDtGxNbreRAh22JUNQfhD0HAA0OCcMQPC1VZy7MC','Pawlak');
INSERT INTO ADDRESS_T VALUES('Warszawa','Poland','24','ad281d21-3413-427d-9007-02020d4247d5','Taborowa 12');
INSERT INTO CUSTOMER_T VALUES ('ad281d21-3413-427d-9007-02020d4247d5', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '55d96d21-797f-4066-8dd1-4ea1d9922119','49081672445','VDF933545', 'b9d41de6-8330-46d2-b9be-b04da4bfc39e');
INSERT INTO USER_ROLE_T VALUES('4fd6f920-13e4-4a45-ac13-1f2ad6364ce1','b9d41de6-8330-46d2-b9be-b04da4bfc39e');

INSERT INTO USER_T VALUES('9cb68ba6-bbf1-47d4-a0ea-d98a99d2b959','akowalik','Artur','$2a$10$GCfRKSju2UrcRKxqdZkIJO23qvkHLHBxExdN6DlZ4T.UVQ.bDKU3K','Kowalik');
INSERT INTO ADDRESS_T VALUES('Opole','Poland','25','b930ed86-b812-4942-930e-a5fa49136905','Nowa 11');
INSERT INTO CUSTOMER_T VALUES ('b930ed86-b812-4942-930e-a5fa49136905', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '0ba70534-7536-4fd4-a8f3-0abc78e3944f','63112579866','URU417669', '9cb68ba6-bbf1-47d4-a0ea-d98a99d2b959');
INSERT INTO USER_ROLE_T VALUES('4fd6f920-13e4-4a45-ac13-1f2ad6364ce1','9cb68ba6-bbf1-47d4-a0ea-d98a99d2b959');

INSERT INTO USER_T VALUES('11e539f9-2502-4642-b73c-507aa34f339b','klis','Krzysztof','$2a$10$s8d5ZJAB1XYiLfnTxHrnMeh2Ezfj1y4B3ghERxA4G.c0l9EX5NP/e','Lis');
INSERT INTO ADDRESS_T VALUES('Warszawa','Poland','26','3520941f-3ff5-4c2b-a9ba-4b016f96e1b9','Brzozowa 18');
INSERT INTO CUSTOMER_T VALUES ('3520941f-3ff5-4c2b-a9ba-4b016f96e1b9', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '50db20e3-1b62-4fe4-896e-b3c1923179ca','46121739856','RWA037045', '11e539f9-2502-4642-b73c-507aa34f339b');
INSERT INTO USER_ROLE_T VALUES('4fd6f920-13e4-4a45-ac13-1f2ad6364ce1','11e539f9-2502-4642-b73c-507aa34f339b');

INSERT INTO USER_T VALUES('bc7319e6-9f00-4430-b552-c9821c69190c','wsadowska','Wiktoria','$2a$10$UB.D6c9qJ0uUbpz9uEBJBecoUgCpZpLNWh4JCfziUaaXqtGDoDFhC','Sadowska');
INSERT INTO ADDRESS_T VALUES('Wrocław','Poland','27','344ceff2-d65c-49f3-8614-118a0001ebda','Polna 11');
INSERT INTO CUSTOMER_T VALUES ('344ceff2-d65c-49f3-8614-118a0001ebda', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', 'e171a4ec-7ece-4b84-9f9a-fbbe4418a9d4','96100839659','LZQ742175', 'bc7319e6-9f00-4430-b552-c9821c69190c');
INSERT INTO USER_ROLE_T VALUES('4fd6f920-13e4-4a45-ac13-1f2ad6364ce1','bc7319e6-9f00-4430-b552-c9821c69190c');

INSERT INTO USER_T VALUES('1e370fbf-3762-48ad-ba99-1f287b35416d','ikomin','Izabela','$2a$10$7oWZGyZ6vahhESMza5VYXOkFpCDiq73K7UNZdFfEEzcGVsxMSzFNi','Komin');
INSERT INTO ADDRESS_T VALUES('Warszawa','Poland','28','37d603a6-18b3-40b7-9b58-276573c4d27e', 'Jutrzenki 11');
INSERT INTO CUSTOMER_T VALUES ('37d603a6-18b3-40b7-9b58-276573c4d27e', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', 'cf4eb4be-2f56-4292-925d-e468bce69a08','55091826303','SES093565', '1e370fbf-3762-48ad-ba99-1f287b35416d');
INSERT INTO USER_ROLE_T VALUES('4fd6f920-13e4-4a45-ac13-1f2ad6364ce1','1e370fbf-3762-48ad-ba99-1f287b35416d');

INSERT INTO USER_T VALUES('748df58c-03ed-429c-815c-b076af5486b8','rkwiatkowski','Robert','$2a$10$ckyyxPccxyBb5VWisNXSDO72ZnroF8Ml5Me4eVQst3/qwjV2pnz42','Kwiatkowski');
INSERT INTO ADDRESS_T VALUES('Gdańsk','Poland','29','d1620eeb-9f1c-4620-8df9-667d971d69c9', 'Stara 11');
INSERT INTO CUSTOMER_T VALUES ('d1620eeb-9f1c-4620-8df9-667d971d69c9', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf','606afce6-c409-4fba-be35-a8d4113da86d','87122102577','NXD690996', '748df58c-03ed-429c-815c-b076af5486b8');
INSERT INTO USER_ROLE_T VALUES('4fd6f920-13e4-4a45-ac13-1f2ad6364ce1','748df58c-03ed-429c-815c-b076af5486b8');

INSERT INTO USER_T VALUES('2a17ec9c-c1f3-42f9-96ce-008fd17eb518','bgowacki','Bartosz','$2a$10$gAw03pNkSyIdlfEEufJSguA6ONgKDNRow23/sUEJYlOduxHdLvE.q','Gowacki');
INSERT INTO ADDRESS_T VALUES('Warszawa','Poland','30','da9a5b41-25f7-48bf-bbc9-71ad0ca9790b', 'Projektowana 16');
INSERT INTO CUSTOMER_T VALUES ('da9a5b41-25f7-48bf-bbc9-71ad0ca9790b', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '3ae0dd3b-5225-4067-a45c-899fd7a0474b','10252081447','RPQ953430', '2a17ec9c-c1f3-42f9-96ce-008fd17eb518');
INSERT INTO USER_ROLE_T VALUES('4fd6f920-13e4-4a45-ac13-1f2ad6364ce1','2a17ec9c-c1f3-42f9-96ce-008fd17eb518');

