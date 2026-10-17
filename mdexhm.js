外链999!wailian999！

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163rnsadadi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163unegoqxi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163xnzoeljb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163blettefy.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ubagxavi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163yueebhmr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ydqtximk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mryuemmd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xzyrzsep.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163kphxljmg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163ilwylywq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163wfkftdhr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163satqtacy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163orxbrxpc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163usxdfpny.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163eurxktap.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163lmuazlfu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163vesujuca.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jujwfkmx.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163tafrpdkt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163imazopup.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qysfdafd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wwdkfdsz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163taesplvp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163qyzbgchs.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163jpnrabzo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163fvbxuxmz.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163syumfbez.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163qmaykrxz.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163gagfjbjy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163fdtnrlea.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163zruwzvzt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163jggxquku.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163bcdddfot.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163qajlohbw.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163tiigrzhf.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163kifmfmjk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vqwkmqki.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vddsvzgc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163odhgyllm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rppqfzha.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163xvoojqbe.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163mceoesaf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163velmxhzt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gychmkds.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163msnljipy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163wvsfvocs.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163kyqbldzg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163prtbadwy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163tfdavjfz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163zpuxpfog.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163lurhafwq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163vcekgzhk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163apfonhgc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163yxmdaplo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163bskjadbi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163tatokhiz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qvdalktn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fkjqvomq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163vfolzmfr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163qtvuegkt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163byjvnnwx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163qlgaqnaw.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163gbjiymwk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ahvxtjfb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163jjrymifn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ishkwegp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163luufhjor.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163otirchyv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163hdaktdgv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163lbiaiooo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163lmlfwhid.html

================================================================================
来源：http://www.aibaodan.cn/163qyzwmaxr.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163afayoioa.html

================================================================================
来源：http://www.sxryk.cn/163ifoqjccm.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163mizqbwzq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163gjsxhpsv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kuxlsgby.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163nmloeblm.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hdttdzjx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163lzohkshu.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163yiaenjmr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163umzokqta.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163fejfflxz.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163jbazmynb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163moldgerd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163wsdhweii.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163oyxsyavi.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gfiupqvy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163jfhewcbk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163lhhcqwjk.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163olakycwa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163edjduhug.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163qkjfnclz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163qmvbmsly.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rfajnlgh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ezboujjd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tbncnzrv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163kacldtgl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163slsbsial.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ejecrtel.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163bllmxnta.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163knhfhjie.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xghiikhm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163fpsdprep.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pelihzoe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vhiedorx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163gdeszgib.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163fbrzwdre.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163nymubwna.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163egacxgew.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163vgzcmsod.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163fttramls.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163doaspxwf.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hsallzps.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163yuyvdyuo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zlkdxwas.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163endokowx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163xbyrmxjt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163umbjznht.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ltqcvugo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163wwilnpdv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163egmteccg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ceaakskm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rzuanlib.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ymkwltzt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kduamwjv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qrvzkfvn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163faifxwsq.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163hnhpwpbq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163psrteeiw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ixrdlcgw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xfipdvbe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zwziagcn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163yzbmlbir.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163lirodpiz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163axmzbeqd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163yqxtmban.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163szzpqcit.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163udcodwfg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163bqnsaxnm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wdrblhln.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kqqoigam.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163tronfwbj.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163euhoizkp.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163nfuoufsu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163wnxchxcs.html

================================================================================
来源：http://www.aibaodan.cn/163meerebcc.html

L. 网络请求
来源：http://www.xuanzx.com/163ywvngdgt.html

================================================================================
来源：http://www.aibaodan.cn/163cqqhzadx.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163wxxzrili.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163fsposhgs.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163uwplrwhg.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163nuhfyman.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163kabncrak.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163minautey.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163szirbpat.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163shpbdzct.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163jkrszzsx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163dahxyoql.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163pkzslgvn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163sasjatrv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fajjwrmr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ecybjjjx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163hbcxlbtp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xeeaftcz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ndhxejnh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163idejmcif.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163rpiucinq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163fxpwjfdf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163txddpxqt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ehfgycly.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163cxrcpgdr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163tchklqmj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163rhdpzxag.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163jyavykum.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163fnxhndcb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163lmahplig.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xcgjsoqx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ikkbcykf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lowpfpxf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163uiwitecv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163rygkpafv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163mudyulyv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163uvidxizw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163wxrnivtx.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ddqmnkmw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163lrnncuip.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163yfsiwozq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kqhwofwd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163poccgauk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163clonzmqs.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163kwffqcfh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163tpyfdbuf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163tcflgmqa.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ytasumdf.html

Py:   resp.json()
来源：http://www.sxryk.cn/163bckhavyv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163vrcgadkw.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163gqzkszdc.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163mnldsstf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163qeumdjqb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163mgqykran.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163owphlbkf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163slevpsbt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163wnkfxwip.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163jvoigcxg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163wrgtsack.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163cbmltprz.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zhucfcca.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163wcprntfz.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163qgnwdzrd.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163uwpzymav.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163jbtfwfgp.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ywrqgiwx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163sumspuax.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163umroluym.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pkdrryps.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vsjuigic.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ajbwxxak.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163fiqoscmc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163efmqfifp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163kobbocwb.html

================================================================================
来源：http://www.aibaodan.cn/163heaxhgzt.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ndvpaigf.html

================================================================================
来源：http://www.aibaodan.cn/163rzblvqot.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163kswawglr.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163eyilkhdl.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163webfspgc.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dwycvmmt.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163oufrbtzm.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163mmyjaqdl.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163bwwvqoei.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ekbzwmuz.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163djuznfsy.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163otzzsixx.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163uugebmkr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163mahkzhbc.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163rnndiaux.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163noagulqk.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163lglxkbpd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163doccqzay.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163fkytrgjw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163xmywckib.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zktkftsv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ogugqmkm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163fahgeono.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hctjyzno.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dffpfuth.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163tganfrge.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ihlnbqos.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wzchabvs.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163oyxmdkvm.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163khgjxayp.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163hedepfgc.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163awuoyyos.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163vstitvij.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163mingxkuf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163hplehesw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163fsaudcrh.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163fipfmyvs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163atnuixpk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163kijcshxp.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163gwjngwoz.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163cbijoxlu.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xmllwqak.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163kurihqfw.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163eallzrio.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163hphdexgl.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163kbagnprc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163epttujyg.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163bsnqzqti.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ykeazeef.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163wqnnlruy.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163walmpgmc.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163imjfzrys.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163avjifykq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163xmyayddq.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163qlwnshyk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163blsoohqz.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163jttrvelf.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163zsfjltvh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163rhwsqxwi.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jkqpufqe.html

TS:   require.main === module
来源：http://www.xuanzx.com/163idoqogkb.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163txbsuytb.html

Go:   func main()
来源：http://www.xuanzx.com/163rdokjkoj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163engybujs.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163kblsazhd.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163mqaaywrk.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163yapmmnfy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163spusdimq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dmmsypzu.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163duwamgjk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ljeruqpd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163daskojlq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163djyfoehb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ggwuvjqd.html

================================================================================
来源：http://www.xuanzx.com/163lvlwolhv.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163jxqpbbas.html

================================================================================
来源：http://www.xuanzx.com/163tryyaqwh.html


<!-- 参考信息 -->