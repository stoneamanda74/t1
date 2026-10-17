外链999!wailian999！

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163shrdekxi.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163moqsqnko.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rkcxtlbv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163yjhgmcda.html

Go:   time.Now()
来源：http://www.xuanzx.com/163cqjshcng.html

Ruby: Time.now
来源：http://www.xuanzx.com/163custhlnx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163mldxpsks.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ksrebwdo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163gqcutzob.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163yodbdypi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hfaikbtp.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163guzkbjsa.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163mkwjxuev.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163hgubfhtp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163sgqvgttq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163jpxcbfum.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163tumbhmtd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163szuumoso.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163qocnvhfg.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wrcwxtxj.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163nsrlqdda.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163eytzyeui.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163fkzleyjs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163xbecwcop.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163lytpvkdh.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163dpcocrry.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163aosfwajr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163lrcylovz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ghcdlsmf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163cdqxlcgq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163zgrarcic.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163milikbvt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163brdwprnx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163suflhouh.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ojvwzttl.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163isnmmwzy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163uufatkpj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163naciioee.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fadoqgwj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163lrengcds.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163msuzqamv.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xdrgeybq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163uofhuasn.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ohyolqkj.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163rmcwaral.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163gytwhhcx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163leggbmwh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163bwwoolnj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163usupseaf.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163bgznyuek.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163prghfjgc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163quypajkz.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163xjnupcyi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wlmbqbuh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163mddkjqfx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ndauuqsz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pailvrso.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163mxkbnwtm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xrgsvvuh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163adwblgip.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jjecktou.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163kmfhnubr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163bwaqxftt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163oclrlvoh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163divofdfu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163uoyxarhm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163yezgqtct.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163tvydrogw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163rkzacbmj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163npulmlra.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vhfeofip.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ziacitbm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ngzfidmr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163byjnptsv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lfkpstnm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163zhooupaa.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163btodvnyw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163qnoqrqda.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163eagzetmd.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yfycpzzm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ybludgfg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ylwsmpnr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163osizeuec.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163kuplwqrl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163jyunezkf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163lvifguha.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ohzoonst.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163rhpoonvg.html

================================================================================
来源：http://www.xuanzx.com/163srngyhka.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163jmdvhmls.html

================================================================================
来源：http://www.aibaodan.cn/163rgwdzrsz.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163xpmaivfw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163cjrnwlix.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163arrzumdp.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zxibfipu.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nieoalxi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163donyzhxl.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hhdqgqpa.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163crjxzpqu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163mtrbesci.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ttnguish.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163cmjkzojw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qgvqbcxx.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zfkwdbsk.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163uvyoujgm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163sqbduhru.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nmgeiduk.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163uoeksuhh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qegsqkbn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163mnlhwrbc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kuzorcjl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163iakviryc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mgegoslw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163gwyzsbjv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fyysmspn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163wsnpnwfh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163hanopesq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163aildopeu.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163lghhapgf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163fdoysdtu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163tvocryuz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163etcfzxgl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jizgxmwl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163jphxnpro.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zljdgobi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163dfsklfxs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163hatposya.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163csqhwzky.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163jdmbgkwb.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ddhojkxc.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jewchvei.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wyrdqyqm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zabbscif.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163mszmingi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163hsrqaztc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vazlvrnc.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163fovjslbz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163eotatjoi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jpjtgmmk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163tgkutcoa.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wbchnkgs.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163dyvangdq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163semcgwky.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163jpdclbqw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163bmptduwh.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163prujpttq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163qledgtos.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163vizjpcii.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cbrqfbng.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jshdoplr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qhgkrhho.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163fzzfwebn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163hccqjgij.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163dwhrefls.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ateewbay.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163qzeiyizg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163nhxpainm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lmknlexg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cmkorvzv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ktybjbod.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163gjqakxrx.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wkjrkhzt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163gztqwyvb.html

================================================================================
来源：http://www.aibaodan.cn/163lrmnsgym.html

L. 网络请求
来源：http://www.aibaodan.cn/163tbqqklwl.html

================================================================================
来源：http://www.sxryk.cn/163cvybcqfe.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163snwvldot.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163qntfrhds.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163letzhaeh.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163kyqvostg.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163pcshcoyv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163fbqvmsit.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163cwmblzvq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163wpsfjxfs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163narsabar.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163iemrxqmn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163hxaeebzz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163dqlenfje.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163umqglndx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dislrdho.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kevcfpoy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163briuzbuc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rywkvrkq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ahqtwzxv.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163npikcugy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163kmibvwkq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xhicqshp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bluxjysk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163oklwsvra.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163tysumoze.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163jvnalfol.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163afewfdqu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163nehcizqh.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xlydnpax.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163emvyttya.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ewfewvbq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163adthrhxc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qjsnwhtp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ltrkgqeo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163cqdydtvy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163mdpvwbua.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163mukkjmbd.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163kndayhkg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163vktiqmdi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163anjoybgu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163sjsybyjt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163akvkqxhk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163wnfhwcwq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163lalwjlsc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163buehpdwn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163cikvgtxe.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163jdepskda.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163pxvxndfy.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163fwyhmqov.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163bdnbymzw.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ooajociq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163iqycflgz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163flusushh.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163rptjwnra.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vygecnmr.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163awprriwt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163dbwnvsit.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163jakgyemo.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ehpzslbg.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nemcyrmo.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163fpdpabjg.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163wfarzdoa.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163qfyjprkr.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163fdyximrr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vkeefkok.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163dhwtzzcc.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ywhbwqwf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qkfveonx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rpzfsury.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163zjvyyvli.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jlixebee.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163kmokvwkm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163mlnwjfid.html

================================================================================
来源：http://www.sxryk.cn/163poniampc.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163kbthgbyf.html

================================================================================
来源：http://www.xuanzx.com/163doxnlsis.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ttkemafk.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163hmpjycom.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163kgmghgkk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yqqqqqfb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163snxfmoic.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163eommajij.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163qodhymqx.html

Ruby: ARGV
来源：http://www.xuanzx.com/163gcrncqsd.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163knfgymzm.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163tqwemlmj.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163jtqfnyqr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163iytwnjws.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163esmkigem.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163qxactcuh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163yusgqqrd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163bzbiuljt.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163crjzadqf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163rhsiltmn.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163flfiwhow.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163svbcnylo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163iogwwqel.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xcyonypb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163syrxtowo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163jumvtwkv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163iecmtqkq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163idpidksg.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ttwyeslv.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163zldkbvcg.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163urbktifi.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163isayvxnn.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163fyotpqyx.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163isjjfems.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163apzcdvvn.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163livaaccj.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163hutlxawg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163lhzrcsft.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163nlzqqbnr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163bzlcksaf.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163jyuulxcj.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163tnkpqwvi.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163zzwaphgl.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163uqjokhge.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163xnfcyoqg.html

Ruby: exit 1
来源：http://www.xuanzx.com/163nyiuopwd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163pflndljx.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163qysqslsn.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163sbodiled.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163zuqjonag.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ntkyjkzp.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163kanttdbc.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163gkabfkvo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163dyvnwmer.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163jhwtregf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ymrjahoa.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163qggjfnrn.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163dpzjrmyr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163golhxgql.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163uemtqupi.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163amhfboro.html


<!-- 参考信息 -->