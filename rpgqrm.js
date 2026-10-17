外链999!wailian999！

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163pmjfnxic.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163toyddpyw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163zroumvfu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163xjxxbtey.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xuniihuq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163gmplxjzr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163gsuxqqis.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163pxzdpxdr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xtbbewae.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163rqffsxyr.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163nmnhdfnw.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163psuobbph.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163wifonzil.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tavlbqsf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mdeetbap.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163scqjbspr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163wcdrrknu.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163usuejyws.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163igbmqanz.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163enyhpxta.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163wpsiycag.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163iamizejh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gxsfsuxz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163cejbtjbt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163annqndjb.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163mxaesqwy.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dfozefej.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163bbkvwnbc.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163udrmeivo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bdqripsj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163awzltvcu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163cbwfkyha.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rjbcmwjb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163sstqyyso.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163jeykjaat.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kaoiwyty.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bhsndecy.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163gjzxquwj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163exngdnry.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163htpyfwjn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163vgdzkbee.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163evztpvue.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163hodnwspr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xzuadzaf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pwuajobb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ctyvousp.html

[J09] 时区处理
来源：http://www.xuanzx.com/163xrfkhyur.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163biovtsop.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163uniwkjnr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163akbxmcdi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bpotfzww.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163prqgmvdl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163zbbemhyy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163efzioduo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163hekzdrnu.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163uocqutdx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ybfvoirf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163xegwllnv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163dthvswta.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163yyauywzg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163xtnsjtxr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163fadnirrm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163aegstqkz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163nupkrysf.html

================================================================================
来源：http://www.sxryk.cn/163shjfomxz.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163llnolupv.html

================================================================================
来源：http://www.aibaodan.cn/163xxheahpe.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163eayzfqtq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163cnuookmp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ndpdliiy.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nmwxhghx.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ujqgimjy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163yjyjqhqg.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163bxcjxaot.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163yxfdovyg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ctjlkfwb.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163rjpowqks.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163nzwnthvr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163fkfxpatv.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jktdkole.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mjjfbdtw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163hrmergzb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163alwctijh.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ovnqeuup.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zwtbescg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163tzgrzvha.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163fymxhczg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hhmtosqb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163nmyeobjp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wuyjqppr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163cmofxuwl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163wxgzwksy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163pabjspol.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163pcssetmy.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163vsnbjein.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nnfeeiqw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ngovqfma.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ijmgdvwh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yilltfqz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163golmgbxq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163uozizxov.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163bnhnveci.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ihhodgkj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163rwmvmcjk.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163sabyllmj.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163vqtqayde.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hefcxwhd.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163yymjyhxs.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163jirlarrv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163vcwlrueo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163bgmavnke.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163pnwanzll.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163tjwiotqr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163pbqlxpxe.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163gcqoooan.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pzqzhxov.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hnpyobxh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163oubreaji.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163jvuvlpft.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163fkgtdaij.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rvokpqqo.html

[K07] 进制转换
来源：http://www.sxryk.cn/163dkroryeg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163btykxlut.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163hibtyvtq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163gfwjujlf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gcwkwosn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163wxzbnheb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163roasvenk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163oumdxhvs.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ndemgrum.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163rqmdykio.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163jrssmpym.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163sjybhjvw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xsmwoofv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jpslsvly.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163dxbnnchv.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163fkesxcvf.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163diswgmdz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qvbykblx.html

================================================================================
来源：http://www.aibaodan.cn/163sgkutija.html

L. 网络请求
来源：http://www.aibaodan.cn/163phuvexjt.html

================================================================================
来源：http://www.aibaodan.cn/163nxxkyejm.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163mjzlrsbv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vmhxukhq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163wamreqjp.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163vegjeaiw.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163sspmjerx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163diqsceoj.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163dclkqnxu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ramkaukb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163aiipnmmk.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163agdemwfv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163zmmqojqx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163rkwxawjr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xfyvysrm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mdxzrhhs.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163svmoelnv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163zrslhrqa.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163evjkhaqz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163uovxeymg.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ydmljgpz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ijpjsrch.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xgwxycnm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ugqbsuqa.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163agfasikp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ltzxufjg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163bcwqlvaz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163flqmzmbk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163qqnskwmb.html

[L04] 设置超时
来源：http://www.sxryk.cn/163xawapbpg.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163iqychbqs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163udtznsch.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jlhdpucd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mktdghez.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163lvmjlhjq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163sihbdydb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163pqyilngz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ynslohsy.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163tofrqkhn.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163dlzpkusw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163sndqevsr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vmbfglxx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163tvisazpc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163hhyrtavk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163tuuusfcf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ovmpwaxs.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ittpgkgz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163pxfbwqjy.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163eaubyxjd.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163bfjzrwom.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163kitrpfdc.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163isnrenqw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163tjmakwjr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163xwzwydah.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163odxdpdjj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163jjeoerjn.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163suatfdfv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jlbpjfig.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ddlyamlh.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vwwcboyw.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163chsqdvhr.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163kaiwdvah.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163wspvdsed.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163niugwwwb.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ewlkjhnd.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ekccugst.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163swocmetd.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163vxtzixsl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jdgmwznp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ympypwbg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rhnlkica.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163qhlqmvlz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163kvccmveb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163htquseuw.html

================================================================================
来源：http://www.xuanzx.com/163rnzsblvs.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163moapglmu.html

================================================================================
来源：http://www.aibaodan.cn/163etbsqwre.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163vrrqakto.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163avegcxax.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163gkekjzqr.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kccofuiq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vdrvcckg.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163snmictwx.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163fowxtnfg.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ksfjjbzg.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163jocexeff.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163jgfsknja.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163unnhwrsq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163uamghiql.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163uxfptxzy.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163dbiqtjoz.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163oaolrhpx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ppakhtwh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163twuehlcd.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163llfhhmti.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qonapfhx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163tfpaccnt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ynacfzpd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wxmvnhai.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163espmbwkh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163zqxvgjcu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163wsrwyllc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163fecysvvo.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163nvnteogg.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ydqhhynz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163tctkzwja.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163fjfpfvkz.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163yganqcpm.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163obxsdwpv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ikeiaral.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163gmwqdiqd.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163gsgszrsr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163seifinux.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163opdpaotr.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tmamados.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jtwifimu.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163rxacpuun.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163myzgwbih.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163xpnbshhe.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163zcqlybqi.html

Ruby: exit 1
来源：http://www.sxryk.cn/163txzbquqd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jkkttetv.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163arhnvkur.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163llvywene.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163zuhqwosw.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163daewspvq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163fwqkkoln.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ksbbhuxu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163cgrwyitv.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163yilkvcsy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163kpccrpmo.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163yvdnegbs.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163mpwcbvnp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163rgwikked.html

JS:   require.main === module
来源：http://www.xuanzx.com/163xwikexfw.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163kwtskznd.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163fddrspsg.html

Go:   func main()
来源：http://www.aibaodan.cn/163taijivdh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163hthgwgmg.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163cnewdtvh.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163mckwophf.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163yfraxink.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163doosxdlx.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wdoapghl.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nvkmmtxr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163wygskdwc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163wtrqjmzq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163wjbumkfi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ntxdwtpg.html

================================================================================
来源：http://www.sxryk.cn/163otalones.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163krsopvie.html

================================================================================
来源：http://www.sxryk.cn/163svtegbyo.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163rhtugoyn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wfdfvjfz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163yjaelhsj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163eyfjmeap.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163csqrlcro.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163pffhbusw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163klwnhmmi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ckfbtuum.html


<!-- 参考信息 -->