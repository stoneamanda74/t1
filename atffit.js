外链999!wailian999！

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163tgfqpzfq.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pdlneykd.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hqusbljs.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163iyhvjutd.html

Go:   time.Now()
来源：http://www.sxryk.cn/163pxyltqyq.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163sfplmdqu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163girtjdgf.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163omnljoqj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163dendjzem.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wtivobwv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ossxxnhc.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163msmxeoxm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163mokueqzj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zguencts.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ylfwvfhq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163qywzymwb.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163tcrlgevn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163jardeqff.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163jnauxfqp.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163absfnaes.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163yrgvulzi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163zckoysqv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tguxjvsu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163squhpdvz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163eybadlzq.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163gxkezfel.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163sobhxrzs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163xfgfwcam.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163twgnsrrg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163zzqbfjhw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163tmfpearf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163kmbjluwa.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163nbiunuow.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163zbfzmnhg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163vyewapqz.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163xnsbcdat.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163dqqdhbkd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tijlspvk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bjzusarb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ajzpncqg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163dwxgxnon.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ndqvyqoe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163socvzynx.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163turktbii.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163tmftzuzz.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163pdvfnwls.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163uozbrtgw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163vgzjecjv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ciathkhs.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163rizwlavn.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163bxxmthin.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163qatpvuhe.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qxphvugb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163joadelam.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zmdponcf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qiegdatk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bbcvafcj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163mgjwipol.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163btwaavci.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163srjatftu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bumudyzg.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163fhixtfqt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163dbnemezv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163bkdayqrk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ruqgrjni.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163qlfmuyhb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163vishjhjy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163pcbnnpcc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163hryhpvqw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163qwpjfnhd.html

[J09] 时区处理
来源：http://www.sxryk.cn/163icxaxklc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163krygwdxm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163nztpinmp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gfsasilt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vfeumxvp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163zdvmaxaq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163dkhwibqy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163pqmxqlrb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163eegytkyh.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163cmyuwgsu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163zkjmjseo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163rudzuflq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bqotlbcu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163wekhhtia.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163euufkckp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xmhlemdc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163tlhghqef.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163cjgbopre.html

================================================================================
来源：http://www.aibaodan.cn/163qpkbmokh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hmazzarn.html

================================================================================
来源：http://www.xuanzx.com/163jeugaceu.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ydgdjqgc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wsggfzqw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163cswmdoer.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bqzavibw.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pfgfovrf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163nxenibsv.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163uvvggwum.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ooszpeuk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163fuabwvib.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163lmhqwrjp.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163covpsmav.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163mrajzlfv.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163prziqmnj.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tmthnvrj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163dofuffyt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163juolwbir.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163hnbderbj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163sgspnufi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163rdxdtdxi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ushckuth.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dpvvwswv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tyhatdsz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bijakppv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ktoogymb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163yzwvjgup.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163duakjiqn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163tvaaszta.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163osebetwg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163aovvnkxh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163hitpauro.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rcftckql.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vapgfngv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163xsgvjvbo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gfnrypmu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jrnwodwv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163mnmylwvw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163tmboimyq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ethpwdxl.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163dingfcoj.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ypjimxdm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gzlinkid.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163dwnzytkn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163gjxrbmsy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163hxpnkuad.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163uhghsnmu.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163iluzgfsb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163kzslufhb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163xqhdgqad.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ysftnkwz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dtwjhsdt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163fdlqidfx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163xucufudr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163tnonaqgu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ayklhncj.html

[K07] 进制转换
来源：http://www.sxryk.cn/163pilpcrei.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163aymjjqpl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ojqtpeml.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hobyzhzs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wlwsxdcc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kywznqai.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163emxmbmnw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163qifwrmai.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163yrzektze.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163trxbfxbl.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163mubyyxmb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163tmulgdvn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mrazberj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163csqohquc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163tlhsdnma.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163edfpenmw.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163oplwonko.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163baiftrts.html

================================================================================
来源：http://www.aibaodan.cn/163vlyrifvv.html

L. 网络请求
来源：http://www.aibaodan.cn/163ukbqcoik.html

================================================================================
来源：http://www.aibaodan.cn/163crxvflgl.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163osextbst.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163tvchdenc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163dwitjfop.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163fvixzsmz.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hazivpne.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163pfsdgixv.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163zspgywoj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ednzugjt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163cgvfcyec.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163urnmemji.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163cjtkegpc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163uiklcbco.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qoarblbr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qfoxotuj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wszobgrh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163owzzkcix.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ilkawshj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163dqorvize.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163dakwqgvh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163geyybnpu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163uptfmwea.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qiiwcqsb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163tffyklhw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163mxmgvmst.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163wkdnmsrl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163jnlvctib.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163qrohbgiz.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163dhwnmtaa.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163nulrzdbx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163opyocmfa.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zocjhpyn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163afyhjiiy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gyylgjce.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163fjetuyty.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163glrthgvz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163zgaqawtg.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163udqkmiei.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163xduhwcxt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163sblnbwoa.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163eltowzyv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qolavvmy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163zfemudxa.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163hyeooeit.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163omqhkgvk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163mscmngpt.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mtkltnwm.html

Py:   resp.json()
来源：http://www.sxryk.cn/163bylfsprf.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163oemnrjqc.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rbpjdryu.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163fdrbmnqt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163jxnwxwpt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163hnmzijzo.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163emxmzmeg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163iwcooggr.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163exejzojp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zyvkbwwl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163gmqoeoem.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163duzdahsk.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nwpsnsqo.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163wutaukaj.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163eklbhpml.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163chwgishv.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163dzpiqnul.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163uglqkfpx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163wecjrxku.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163zqgxkoeq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163eeqeeyid.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163otqydqem.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163zuxfwtvu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ywsynjpa.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163rptbgwfd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163yculdksa.html

================================================================================
来源：http://www.xuanzx.com/163xcjbktsb.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163uyftakch.html

================================================================================
来源：http://www.xuanzx.com/163ovtxpgcw.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163vtxdmnly.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163qdfdlcqq.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ocyrbbup.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kothumjd.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ksicokyd.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163wobehwtz.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163glkmsajv.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163kkcjbmdy.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163rcklzdsr.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ikwutxsd.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163nfpkgsfl.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163tqwkwytp.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ufvhsups.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163yahdxeme.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163mjfhzszr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ixtcoehc.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163kfhyomkt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163nfiunyey.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163upbrlmyr.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163bqnbygxz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163jlpgwbnl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xfuwhdgd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rkcrmxfq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163hifofbvn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163revgzpzv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ijjvsrit.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163rnsxtget.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163lbrrtzuf.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163loqhhesn.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163gehuiomb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ixhkarlb.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163zvyervha.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163xgmnytyu.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163dpmlgqtg.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163vtclzymp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163yytbqwwx.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163acbcyecp.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163erppsjqd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163qlswxnuj.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163mmusispt.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163whnqnsik.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163unbnpiap.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qhafmtao.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ywdhsoux.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hkfrzlys.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163gujroatv.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163udxqhbii.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163gjrnskqq.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163vselixrm.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hoxyrbel.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ywtcrlox.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163zifhyvfh.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163typwzdpj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163jkygdnan.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ftkodjvi.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163qujszmqd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163swlaevyk.html

JS:   require.main === module
来源：http://www.xuanzx.com/163kcomkzdl.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163uaomkpxm.html


<!-- 参考信息 -->