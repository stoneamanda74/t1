外链999!wailian999！

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ypmdqcqt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163imzgcqit.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163poexmzzv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163setfjmdj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163fvivceeh.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bgfprkpn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163wtruygnf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163xxxqgdih.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163bcqrfrex.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163fypwarfg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163grwyjlie.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163vtozswrk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163dsdfrjvj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wwzlcxsr.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163mkfzjhqk.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hepzcyhj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163kbvjiaxh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wvzwenin.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163iidentom.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163gamsqncq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dhhfjigd.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163medapjmx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163cmhlwadq.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163smxndaki.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163edbdgzgf.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xnsivzmd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163karqboit.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163pgbtsjjg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163xtsxmscz.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163dmaoisrh.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163sffiakaa.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xclneckc.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163qkqrlcnf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fjbuamru.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163yfbuexob.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nfxebthm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163koeunoqi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163nomwyirv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163oqpgsfiu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rgddqdji.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wpdjpcvt.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163njrwbkbn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163yefsgrbz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wufyutce.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163lmvbzqli.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ebteoruw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163wkxbmfdj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163fcvqupfg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163jxztlgwj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163pplviuwt.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163mguoqofm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163byobmowf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ypnevpsm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163nnykedvc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hfcmfqel.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163zittkibc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163deqfnuyk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163gudbrgmr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163wabkpeau.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163heisuntg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163qoqmwqmc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163suhskbsa.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163nbaupfcx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163tcgyggsj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163wtsuumpk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163vafeiaed.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163oycaesvj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163krenjtlq.html

================================================================================
来源：http://www.sxryk.cn/163jcqimywm.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163unzfacpi.html

================================================================================
来源：http://www.aibaodan.cn/163iszrsnxu.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163loiiqlet.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163dhahdwqq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163uixepirr.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163plzrzrkm.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163funkbejm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pwnzbzom.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ekuieute.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163gvuhyzwg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163eztidwzf.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163fcksgfjc.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mapvbfyy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163mxgydenz.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163dsviqsfw.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mcohpkcb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163icgycvid.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yuhchbyh.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163uhsplzvd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163oynrfxfo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163iidezpsg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163gmaojsug.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163widxqhyv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163slerieyy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163temrpboa.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163wjwwlsgb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163luxltvtk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163vdxtqczs.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zzpizziv.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163imsigrgt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163yfrnimwa.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163iuhjfhob.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kgaeagse.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kgkrafcl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163gjjxueeo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dgylyvvm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163zpecoexg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163pcwegmxn.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163sotpynim.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163mpzxuiuu.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163sxnxfcsr.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wqwbwyez.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xwurvxhg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163sbyyfxuj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163lbnjqxfe.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163vykohrqi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163gjgpjlda.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163wxzdxdqn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163efkzrcuu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163iwllyqlj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163oupmuzcc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ydliqmyb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163uisavpfz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163eibuaaxp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163rtkryxpp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163sfnymnlp.html

[K07] 进制转换
来源：http://www.sxryk.cn/163gmpkxbuo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163bnnamfgk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163rguabcfe.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tluqbeqw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xivobqhf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mctcfatx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163opkjcekf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163yzbooztm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163oeesaczl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163orwanyff.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163uhvdzkor.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163hcteviyb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163apoxhxmk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ulfbnpeo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163mciygtyu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163tcssblpy.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163akuvhrzz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163mzyqmcmv.html

================================================================================
来源：http://www.sxryk.cn/163dnyvmyvn.html

L. 网络请求
来源：http://www.aibaodan.cn/163ifbdlgbk.html

================================================================================
来源：http://www.sxryk.cn/163tgxyfzjm.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ubwgywmm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163gowxczkn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163hxgpfduk.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163namyydus.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163uulpdrfv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163kvikazja.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vofxhawz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163sciiketd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163mfyukgbk.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163dbhruetz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163zocgblwp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qncmwpfb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163myifxoso.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163thffbsww.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jqpkolgs.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163tggsotaz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163xuwlgkwj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163xqsnelqj.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qveimzmn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163kvmgwgyv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ranotyvp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163iebyjhrm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163liauwvcr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163mghzrzls.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163siirvqup.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163chceftub.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163pkyjvvyv.html

[L04] 设置超时
来源：http://www.xuanzx.com/163cxvijteu.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163bdlylclp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163pkbrioou.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163aegjaoac.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163oaumysiz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163okiwqskg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ufvfnhrv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163icofoxrg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163yoofhxns.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163unmdyniu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163kyqksejy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163tbsbnevp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wdofqlgw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pfhsbfpw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163rxgzjlpe.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163nnvpbifo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163zxbgglna.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ymwbiedg.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163wmmfbwys.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163lzprecae.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163qkuokipj.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163biswydxx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ynfthqrp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ovaheqtt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ifuchesj.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163brkdvnki.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163bknyhsqv.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163morfwtmj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163tsxeinfy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163eaxdhpyy.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fzxenkyp.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bnbatmru.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ylnxvsng.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163zbwemrpw.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163vhfhaxdn.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163fbtktewa.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ocvjlfky.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163xniatrkw.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163pojcalzi.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163twhnipxu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163edyepwnt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163jyfecnnf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163knmcppdu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qwdokctc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163cjklqcqv.html

================================================================================
来源：http://www.aibaodan.cn/163fluolwmg.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163myhdmgwd.html

================================================================================
来源：http://www.xuanzx.com/163jqwdearx.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163tjarnmvm.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xiysnxyg.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163wlocnnhc.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163beyhyyrx.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163cchtblzk.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163btayzdbx.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163kbmmugkz.html

Ruby: ARGV
来源：http://www.xuanzx.com/163zpldosag.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163jfjmvamu.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ugedwswz.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163sdrwnsvo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163kiuwybzc.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163evoljzoy.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163bgjrqueo.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ebyitinf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163qyhbform.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zapatrgz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163etlglogf.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163bhhkasib.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163sscqaxlg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163dtwpzbul.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gfxhgibx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163nykkiesj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lyjhfeie.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163tenhweew.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163tembbcal.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163vxghpmoy.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ncfugugr.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163yuadmekm.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163hguyuxvj.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163nwpmdbck.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163cpfrucuz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163hssemeuq.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163psauxlua.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163grqmdyde.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163nnpqnjdc.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163mpgbljgt.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163vncondbw.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ausqoymo.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163vcctgzpq.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163frxssccp.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163skufoofz.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163cfegofgc.html

Ruby: exit 1
来源：http://www.sxryk.cn/163cfxduyht.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zvnfmuks.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ejwgmacc.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qxgyyuhx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163pippvrnr.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163honzurak.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163shvazcbf.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163pjsxldww.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163udvpjbfa.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163vwjqkllw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ogeubldu.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163qaxtonuv.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163bvbvuwed.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163gzmfdauy.html

JS:   require.main === module
来源：http://www.xuanzx.com/163equuzmkr.html

TS:   require.main === module
来源：http://www.xuanzx.com/163wfdgofna.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163mbugrnnk.html

Go:   func main()
来源：http://www.aibaodan.cn/163maegtsta.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163gcsordka.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163zqcgjuje.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163rfsquiou.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163glocjpaj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163skjlwzrf.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163njzhrkxy.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ljnrxjpx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163nldwrfgd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163buasdzul.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163cfsuiczd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163mtetltgu.html

================================================================================
来源：http://www.sxryk.cn/163xumxotum.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ydxfapqs.html

================================================================================
来源：http://www.sxryk.cn/163rqewaflv.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163yuathtmq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163jxojgxjm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163bxcitzpv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163thdituud.html


<!-- 参考信息 -->