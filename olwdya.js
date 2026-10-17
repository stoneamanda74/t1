外链999!wailian999！

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163thexkhyt.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nbckjbwg.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ekiftwod.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hpyciytb.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163eygeoyzx.html

Ruby: Time.now
来源：http://www.xuanzx.com/163kjasregc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163bnxbxfaw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163abrdadvk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ljeaeuxh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ivvgopqj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163rjxhcacp.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163mnzieyrt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163njocmuhr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163tixjhsch.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163iayzyxnn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163frvdolaw.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163jracdzbt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ukyrvrfl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163jvqmuhfd.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zdjlassf.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163midkgjrp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163fqvwywte.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163blmfqmju.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jtifgddx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ceukhrjo.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163lujjsdtp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163gnhlrsaj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163kuhwaztf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163gjzsckgt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163townfvem.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163etzpwrss.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163mxuvhwyn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ygqxgilv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163updjgpxa.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ceoabpfm.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163tsdxcnps.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163mqzpawnf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rubsfaah.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163nrrtwxje.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ufmthggy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163gakrgznn.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163nesojczb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163bsvyfvar.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ysbbtift.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163fckxrcer.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163qshuimrl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163cqmngzvp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163lbystvsd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163fumjwmif.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163hrwirmyw.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163xpjkodzv.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163pngqxwcb.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163yyzsyctj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163guliqzvq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163drranyym.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rbbqjyum.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163khbubqas.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163kynevhxf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163bncxblnl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gzelixot.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163texntgfx.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jsvpxqlg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163songivco.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163pkwwwjqy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163fvgxqavg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163bkyeghgb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163nhcveinl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163nyludrix.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163icyprizg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163hiuguuqd.html

[J09] 时区处理
来源：http://www.sxryk.cn/163hwpwjtjx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xtxidtfh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163kpekyhzq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jkllqykw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zvmsiqir.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163bjcamkvf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163lwvbqgbc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163cqcdwqqv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163zltkuiuu.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163wpnhghkl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163toahwhmf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163yxqnhtqp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163iqijppfl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163hrfpgsdc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163euuzdjdf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163igswlxgl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ykrlossy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163rifnaple.html

================================================================================
来源：http://www.xuanzx.com/163lyrjhiqc.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163wahxraoj.html

================================================================================
来源：http://www.sxryk.cn/163kcxkbcns.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163eilxgrkr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163yjgdkapn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kbnljfyg.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zptgxbmx.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nmoyirud.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163pylvokiv.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163bexnygds.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163jqhyaubw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163wvjpxpkp.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163valasbuu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163etogwgli.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163qazkyxiq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163imvdpvjs.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163juzugxgm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163yqhkqdis.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ueslykok.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lxntyysa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163hpivlokg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163rvxtthsb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kblaxhdg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kdjlqgcp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uaagdkcr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vcteymwn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163oyzecwvg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163izgeoetx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163hnaiwmtr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163anoztqcm.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163qnhgwcwm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163nqnjyasb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163kytjncfj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163csjjqaot.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ctzrpgxh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wptmtowj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bdnkwfzx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163zxknaupd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ovsjiucc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163eikteeag.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163srezxmll.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163sizoytft.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fneconlz.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163unzxgpxd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163fiqobxuc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163mddktmif.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qsdczaay.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lblebmuf.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163hphxwtrv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163uumcdmox.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163hzobfmzs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pbgauqwy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163tgbgqeqw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163cqeisanr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163hdgmhtov.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163xdbeedkz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163mixczpyv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163qaupcjom.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163nepltbdl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163jmkqcszn.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bqtqmjac.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zoeuazyv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qdhaqbjh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163gycjtqqg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163zlgixhkx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163cdnbtqld.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xgvieqnw.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ihiyxagc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163agkprnci.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163svwfamhe.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dbwraufg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jioizixu.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ncgncyip.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163jfknnenm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hcaxmmlm.html

================================================================================
来源：http://www.aibaodan.cn/163eamekrdr.html

L. 网络请求
来源：http://www.aibaodan.cn/163necvquyq.html

================================================================================
来源：http://www.sxryk.cn/163bcqaadyz.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163acpioawi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163swjjihyz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163tmvbdwmd.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163afrpdpny.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163yucnjfmr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ghvatljp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163mfpotmct.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163dwfozkig.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163nwhfbdxa.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163hiiqdvgx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ucrgamjv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hafpyumm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163okcthbkd.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lpdrcdav.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163efbnksdg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ohzuipod.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163zuvtmter.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163angqtudq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163sqskvuzs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163dncgqlfc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163bcddefud.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zbxusznz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rjhgrysd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163neglnpxv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163txezmqsc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163nqxegwvo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163avtiklrk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163fznbycjb.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163yhlcgpcp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ohxyhlmk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mznohvwu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qfblpbbw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163dpvajgqc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163vwzqadqu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163jhqjlgoc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163olxglyib.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163mysgreit.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163vlpxivuv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163lpainnws.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pginbrac.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163iufnbzvy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163qmvdzpzk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ukdmotsp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pqncwnks.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163pkppxoam.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163vfgykvba.html

Py:   resp.json()
来源：http://www.xuanzx.com/163bciamyia.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163gmtdctxd.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ddeilgfa.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ogbdnial.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163aejhcuaw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163otefwxen.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ztnqwolm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163lfsohpqn.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163yquftrst.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163zsqsxaus.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163sasqbcrw.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cddmthno.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pyvqkstw.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163clbnurvw.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163syzyanyk.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163anfrvxpe.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163octropkb.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ecnymzlt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163npiygcfo.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163frzniqys.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cpebdyjj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rbchnoje.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163tpugxuqc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163iwqzeuwn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ddcchlaz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163tecqdvfn.html

================================================================================
来源：http://www.aibaodan.cn/163vpbyxjzi.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163riezufud.html

================================================================================
来源：http://www.xuanzx.com/163aettalqv.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163gumzzkae.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163jozlzsah.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163zmbzscpi.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163blipvnel.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hzbumojd.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163lqggxpei.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ttmrnegj.html

Ruby: ARGV
来源：http://www.sxryk.cn/163kioqgfig.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163oyuetjtq.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163hbhlreio.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163lqwzhgtv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163zvpudeny.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ybtajjpm.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163owlmkggv.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163tpytvpmi.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ezpgnpfh.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163urkzjbqq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163hcdtgulj.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163sherczvf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163hglucacs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163hyyiapwv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ftxzkyda.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bupowkcc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163dxkzgcsq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163lxgflebz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163kfflqnfy.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163yllzhslx.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163xxsbgwoa.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163pkbjekqs.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163zfrhqkuj.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163zkazchtn.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ejbffetg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163bvtzlnuf.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163whqtzkai.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163lhbemfmv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wpfuxeup.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163vudjflai.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163qamcfhnt.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zgaekowu.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163zymzbcmp.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163aixdpngk.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163szuxklqy.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163bqiolnoj.html

Ruby: exit 1
来源：http://www.xuanzx.com/163tnsbfjun.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163smtqcvke.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lewcovqm.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163klbdpewo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163pspjzfju.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qspljvbq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163rdpywntp.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163qggnmfjn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163cxhkcmpw.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163bxsulxat.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163gcitriri.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163dodghsfj.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163qguwlqzg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163sflvzpxf.html

JS:   require.main === module
来源：http://www.sxryk.cn/163mfngivut.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163opwpvkef.html


<!-- 参考信息 -->