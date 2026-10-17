外链999!wailian999！

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xnrjsgcw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163nhpcdphy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163qysscncn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163eztfkzgn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ljbswprm.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163szonexvq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163yfqmjzzc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163zocvjuzk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163wmgzbkyh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163vupzglrr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163vhwapwyw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163gtvgfyjw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163eqyovkiq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163kyjqfhpf.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163kzbxnjcz.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163duopmyoq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163fhzpffkl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zspotrsx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jokbgjxo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ccyqxllb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163yhqpnldo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ulzwdscw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163vhpymcwl.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163isbqphdz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163xyptkeub.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163awruylhp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163tdrttpqr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163kycepuce.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163fbawlmai.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163wxjcegbh.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163vrpkctav.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163sjlsjzdi.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163slobqngb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jeaadioh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163qmzdhnyh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jqboitdh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163uyyynzbp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163hnffbzts.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163jxmvwcpz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163boneucnu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qnqwmtyv.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163fghdeyef.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163iivtxfwd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ovcqiprc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163qmxhgonn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163fdwhvjzw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163rnrkaime.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163xkglqcis.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163pfukzujp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163jrwfxazq.html

[J09] 时区处理
来源：http://www.xuanzx.com/163xfvtdlua.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163pfvtinqg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ohwsrkor.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163phzinyzm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ucmtciwq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163hthbbglm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163fetklntu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163splzeljg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163yloscolf.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163fglvgdze.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rnggunmw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163amlkvkye.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163grqefmdu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ftyeeswd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ihrzudio.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zjyjgrnx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163nghrqbsg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163uqvugmpp.html

================================================================================
来源：http://www.xuanzx.com/163qmkldxyo.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163gjrcvyaz.html

================================================================================
来源：http://www.sxryk.cn/163wjsgqcpl.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163jyilqssx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163favqzyen.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zlnjnzqu.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gjbadsvk.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pxurtpjt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163hjglvyeb.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163atwjzvxx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vttqjrgf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gsqnndxc.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xfjgztcs.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163uojcgxvv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163durrwqly.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nwucixqy.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rthvlfxd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163alkvpizj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zvzlhzfa.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163rtgcafoq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qgnnekid.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163jlirpeeh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163icswspsd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mkammvpy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163dnvmqcsd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163unhwifgs.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163aczrepek.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163huapqrdr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ywssgrrf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163glpbonna.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163hypxdsyx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163oozebsqo.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163guxorfiz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163odqexnpx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163edgmavis.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163loggrvwv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rrwsfjby.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163nehckril.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163qetfqlyf.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163rxypzcls.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163qiwsbrir.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163vpajcgpv.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163bmfdfpzm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wuytrtyw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163kjuviimn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163eicuccbu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163iwixceub.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163nofvkrqk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163tmgxzkjy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163tiondjhk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163jmwgxpmn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yjscwach.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vxzvlvbk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163niqyssuo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163qzuepmxk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163xvriogwn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163vtkmzrzs.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jpeljijd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163zdoklcxn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163irdoexle.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163rlfjvhhw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wudfzvxi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kyxqyfjv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163sgsxjngr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163fxgevpzt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ooclboip.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163emkhigxa.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163hdpodnfv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163yqntbtwl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nehunlps.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ojojvjug.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163chyuzrkj.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dolhilnk.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163qyvkfvnh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163phsvyqnd.html

================================================================================
来源：http://www.xuanzx.com/163auzkjngw.html

L. 网络请求
来源：http://www.xuanzx.com/163ogtsgdjl.html

================================================================================
来源：http://www.sxryk.cn/163bmzhhekr.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163cteukadf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163bglxpexu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163libdhntm.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163datzugte.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163loonhkvw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163rqrjqlvl.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163eauscbuq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163wqpkdzrl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163yuyayewq.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163dntaeebc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mddcebrx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163xbvifhvl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cnrgnaon.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qawdymgy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163cddtxpqd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163hzcmhmud.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163qwlrwvzz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163yroftdsp.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163zghifxwh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163bwtgrxkc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163qbvmkhlv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hdkvbfcm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xqpoeknj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ypbogjlw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ptgconss.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163macupqaq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163krujxfkh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163fijdtltt.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163sacelggo.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163vpkpqcgp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163rzjfuenw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nmpvyukv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163dlyeorec.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gjqhjusq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163loscewkj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163hfczknqc.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163llszovch.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163picydtzc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ymzvgzyy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mocfxdfz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tzynsdsz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163pgbojyli.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163opgkdjes.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163brqroxfq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163zxefdurt.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163eqopovxz.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jexrllca.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163rodqkgju.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163vutbkfxr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163cxdkzrlp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ztuvwhuo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163tprhaufu.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163thpmjhig.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163kxqrogzw.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mmurgftf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163tahnepwj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163triysenl.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163kqteobql.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bdmwlhdj.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163zktceukl.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163rsjekyvj.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wbvckhux.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163baibduhr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163qkftjpgf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163btyrtwvp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163tdwzifzm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163uqpeuxiu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zpkqtrpz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163qybqppaa.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163xmsvsnjt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163cmaebnvy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ediwiitm.html

================================================================================
来源：http://www.sxryk.cn/163mfyvxemx.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163mwppfyde.html

================================================================================
来源：http://www.xuanzx.com/163lgkycrss.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163mrrsfhhd.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163uqylltqw.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163bhwndmlg.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163tohtpqyn.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lqaxblgm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163quayhukz.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163gwsmlldh.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163hznicirq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163nehalcoi.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163idekwdnn.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163dclvkobs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163zfiwhipe.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163rnltiqli.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163zutuiyjg.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163midjhegy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163brfvjnse.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ndnnryvp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163yeyggtwx.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qkuuksou.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163qyenillf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163mqoweqtt.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dvmpmcur.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163skuujnrn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163pqpzseps.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163jlqtqyiw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hvhxpysq.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163wikfyvpq.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163khyzfqqh.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163liinzvou.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163azhyrbog.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163voqgmjes.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163xnnwvfxc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163qgztgpgw.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mxegdxtx.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163xnmfktmz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163snqglqlw.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163nbyesure.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ioaknloi.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163nxviwgyl.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163fpaevnyg.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ysyhpzqz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rcrqkeax.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hnkntups.html

Ruby: exit 1
来源：http://www.xuanzx.com/163sfijsdtv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163kwskvpft.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163yitnrtnu.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dilaqmwe.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163tutztxbz.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163anejdwwe.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163wgscxfva.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163khusbvrl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163somwjign.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163lilmtanp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163zbxsdtwc.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163wyyjgnnd.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163cflxuwkj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hakencvv.html

JS:   require.main === module
来源：http://www.sxryk.cn/163imngryzj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163wwvqisrw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163duanwqrr.html

Go:   func main()
来源：http://www.aibaodan.cn/163tisvrzne.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ffylnquu.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163fikvxcnc.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ghgbrggi.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163vktnvygm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163refqivto.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bbznbvtv.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tvycpddb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163awchyxpc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163nqryuqgf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163jybhzaya.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163bpbtigfg.html

================================================================================
来源：http://www.xuanzx.com/163ukflmojk.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163thwabfsh.html

================================================================================
来源：http://www.xuanzx.com/163davzjrgw.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ddbtuzer.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163tjbejtal.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163kgfgrwbc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163pikyevsl.html


<!-- 参考信息 -->