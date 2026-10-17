外链999!wailian999！

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vbhqqmfx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bukbinkc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163gcyhgjcs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qdiaiybp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163licukkpg.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163lgvklutk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163uvnkewnl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ytyyogsl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163rfrkzrdz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163mgygxvqq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zflfegrt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ntbeetsv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163rochtmwg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ddnvsjyy.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163tsccvyhu.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163vaiddcii.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163jtavrjyu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xixqincx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vntbtxhn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163zzcvywgc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163pavyvnww.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163hkxrazlo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tfyoqmth.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163dwxmzikg.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ooinrrcw.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vlmtmmjp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163vhadbmzl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ggevczoc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163vjevitik.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163uyclyldw.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163axajtkkk.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163kksqhwtj.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163jlbubkso.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hovwleqg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163azqhjjwy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vfnwbpze.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rpnikgqd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163udykjvgu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vtqimgsz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qtmrumto.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mpbcrdev.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ilsnpbzl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163itukfwfo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163jrsqkyak.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ovevlbxi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163edsvkxmt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yxpciyfd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163azrwtiez.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163rgrdirqt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163lslxtozn.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163hkycmcqi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163oydfurtc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163rkpoorfl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jyomyfgb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dorhwnnc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163tswxqfdn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163fawsmqtc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163rawputfo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163zazrwszg.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163rxddybeq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163gxetqexy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fnqsdjtb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163tofjlghc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163nymxlecb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ponecytf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163eaxzavwc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ttftynte.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ywnurdol.html

================================================================================
来源：http://www.sxryk.cn/163bntdcpft.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ncoiwcej.html

================================================================================
来源：http://www.xuanzx.com/163krrogwdi.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163xpzencty.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lzgmikax.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163elznmksk.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dsmysrfh.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ucrqfuou.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163agoqjxsv.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163lwqaebzo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163eviuvhyg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163nmxaqyex.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163eoyxzsyk.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bkexetjj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163tcqpsgpj.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163atimeldg.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nctkqsli.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163kjdyovwm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wuneykrg.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163eshndqcd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163dgyxmora.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163pjqqewdx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lvqpaemi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ejjgmmsv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163brjlfnik.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tshjjukb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163dttqsjyg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163qprcdakv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163gokcsswk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163xomveedb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fyaluggp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163gsgeiuzq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zpucgvwf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kblgbtnz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ltcihdyx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163zztnqkvs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yruomvrm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163kcuevrtk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163yecwmqpk.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163amvurbnn.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163smggauin.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ozeqyzpv.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tmfnavzr.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163pqmfnodb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163eybufguz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163wwokvyyw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163acfdoyog.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ssfgnfxh.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163cdqewcyc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163kwmicrvw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vauymmxp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wobyrycz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nbkxzeqb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163tqzcvkyr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163iwodnajl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163krucizox.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163khidskvq.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163sdfkvjoc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163huwfhpln.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163llwgktnk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163addqjikh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163sikndntz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163cyzuwoic.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163xlhdmrdv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xeqewgeo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ravxxiom.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163iouvwhou.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163gdujlnkh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163lsvapjvz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163bccajfww.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qbtdgcwj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163xsnyebjt.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ayoepbzr.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163rdhjbxef.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163gwdrtucn.html

================================================================================
来源：http://www.sxryk.cn/163djjkvtrx.html

L. 网络请求
来源：http://www.sxryk.cn/163mgkfptco.html

================================================================================
来源：http://www.sxryk.cn/163pepflrqz.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163okgrqouc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163mkafoofu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163bwcmbsny.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163xxvvqoxr.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163kbzljrin.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163yasstyzk.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ynjmexyu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jjupflzo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163wznhvcgl.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163aaypaleh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163hpfdbayv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vnllznta.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lsvhdwar.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163tereqxto.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163cgbrfnzl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163tzvkpfrn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163foghshmu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163sjwknhkq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163gevpgajq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163niandmac.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163gcbsnatm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163gdernzho.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ykqxrrvu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163cuubzevm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163gfvnrztw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163iifgidcu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163bmrfhppp.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ceadsxbv.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163escywfbb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ovvsmghc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wxnzxbgo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ngylztdr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ycmpsbsq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163hqyuxfrx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163nolhwucc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163chbkyesd.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163rrmuhibp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163qfmzqybe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163erjxzwmu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163phftcqen.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163eniwinra.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163dbubgdsr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ubfjoztz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163mvuzevjl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163sannrqut.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163dpisunzc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163fkathfuo.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163wliqfdxu.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163dcchgxhv.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163nocgtjjj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163cwcvlcmo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163bdwnukuv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163lwfslnxq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163gjmexkth.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163tmncdyga.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163bjhdkrnp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ycogggqh.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vweocxzc.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ehbwmlnv.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163bwdtudlh.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163wxkjlvkh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163smddotrv.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163jvyfwmgn.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ybslufeo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163wgrcktbx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163abhuapps.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mvihrvgu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xnobmfzz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163svrvebez.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163hjkxdsqo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163eqjctqkv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163dofpchri.html

================================================================================
来源：http://www.xuanzx.com/163glzvpals.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163itafexmy.html

================================================================================
来源：http://www.aibaodan.cn/163frvcxehc.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163oyyxqadk.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163yseprdgj.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163djhsulvh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vwcvufcx.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zkaepzra.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163lxzzdcgf.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ounoyduk.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ypjenhhd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163tlrgmbbi.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163klehuqew.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163blehnuka.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ujpgrakg.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163kacoqtcy.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ltdpkicp.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163epvrqmnf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163nlizzqoq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163kkxtwadw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163dkfflmqz.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bwmvzrzk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163fumrbgkv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163fnkyxztf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kdecsqrc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163etnuozdz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163zvsoival.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163zcvaizow.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163pthzmkfs.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zhtyqzij.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ytaehixo.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163zcucxevr.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163qssxmehs.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163pjdyyvwj.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163hpnmlknx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163zjbvmamx.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163yvwtcftm.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163uosxgfet.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ekliybnl.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xiwbqaet.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wimlhxun.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163iqlubqpc.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163dfqpjott.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163dxeqiagr.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ftwmfjwk.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163vxvdvnbt.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163emfhgokx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163udbmchau.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163skoewmwk.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163oomlppak.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163oalcgxur.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qmvyxeth.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163yagznrwm.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163xkvkhqyq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ofjcunio.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zeubxsgt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ozvbtvia.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163rbegajig.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163upimybrl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163jemrezzq.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163kxrutmpe.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wjbcyyoa.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hpuetmby.html

Go:   func main()
来源：http://www.sxryk.cn/163tqsqysmm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ywhiymzw.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163yezsxbur.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163fgkzynit.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163qolkkzjj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163rdnzzsqj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163lrhyebzs.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fiaiiyxs.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163giojdrsh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163sjurdhtt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163negyoduk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163bkhjscke.html

================================================================================
来源：http://www.aibaodan.cn/163mxwstnkb.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163piyiyxrs.html

================================================================================
来源：http://www.aibaodan.cn/163vvdsgnkd.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163verfccxc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163xsolxpmz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163qwwspvjc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qfdxybij.html


<!-- 参考信息 -->