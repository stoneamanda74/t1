外链999!wailian999！

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ezoqmtcp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mwjfkxkb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163vwxmvnbv.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163voyzeqki.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hejmpjan.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bozwbfki.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ivjpvhwa.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yqupgfun.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163qcklukrq.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163alityhty.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163uzigmqxn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163cnnfkhsl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163vvajzqxf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163fnsugedq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163oqwgzsdl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163xwibbtpf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ewxfmhlk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163itjuyefx.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163szpaimpd.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ynjojwhg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163lfjxcslf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kfyjcfcj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gdcwtfpd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163pjwdldth.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163bzafjeoz.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163nfakqgii.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163uzucjdxz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163njpehhgp.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163uctyehyi.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163zfnvelmi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163stxnlwoi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163grwfeszi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jzypjkuo.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163wxsussjn.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163zzaazzvk.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mdmfvvok.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163acfzoxgj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zamunerk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163xrddsqiu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163anwuhoxr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ughexkps.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163boziybov.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163obizqepd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cqtpxxko.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163icniekse.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ipovnqfk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ilpmxhzr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ijshsxxl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ikpappgu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163aitiirju.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163nykkgkgt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163mcbxklcg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163cwuhbpzy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163jdxjfnhu.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zvcasqut.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163zffxwjvj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163yxudlukg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xqjkcuti.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xiwcshdu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ljptfgey.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163oisxvtva.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163uwwogkqr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163vcfxbebo.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163cagylulz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163jffvnxxz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163rbztzixp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bfdznnmj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163pjgxshio.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163cfmawjbo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163yymjtqkw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163fgzafewp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163oicjftmh.html

================================================================================
来源：http://www.aibaodan.cn/163rhshrklz.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163tukzunnb.html

================================================================================
来源：http://www.sxryk.cn/163rwtllbuj.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163teqearef.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163rffxjuxi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vmjfstzq.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163cbvegdou.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jixxzynq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wlxxyiwm.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163njpemihy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163zshgtdbr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163sttjjpzr.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ewfrfvax.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163hfedtrgr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163fnasdwtu.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ndgxgirh.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163htnctyza.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163slaouljl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dlgdudnq.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163mjxympny.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163etgfwwrh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163aspsqrjo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163siytfhxa.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kjllafbq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lbkxrkpf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jdccxesa.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163yuyvtwnf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163hrbwmnxv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163yalwpfkc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163bramnbky.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163qeltvhbf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163vgpgxsuq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163gynaqtpj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dbydvfbc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163stejubam.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qwpwxuvz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163acjfiwpu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163psbhnezp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163wsaicfzz.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163baalfycn.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163jhotwefu.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ptkviebi.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hyrspcnj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xqguljzj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ifrwatrh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163dzpnvzaf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163aobxwxml.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163hgbkxdxd.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ytomccnm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163tcnvijkr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163suljapzi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qcthvndd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gikqrfzs.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163owfexzcf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163qdzcvter.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163plyhiywv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163isivbjso.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163zwhbghzy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163syatnwcu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163bwryevwi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qrpigour.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fkouziqb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mtwjuaky.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163siddcewn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163jnhvzzlj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163cnaundgh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163kikzyemn.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ewqcbkgy.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hkshteop.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fbzvoirq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wpdppucr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jwrxpadl.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ldknzcag.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163nctwonfl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hzxobrar.html

================================================================================
来源：http://www.sxryk.cn/163vnksvehd.html

L. 网络请求
来源：http://www.xuanzx.com/163pmjxssyl.html

================================================================================
来源：http://www.sxryk.cn/163bronbezd.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ckmgijsy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ycjpndlg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163wmgaxvdi.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163milatekp.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163bvslymfb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163sfyzyvek.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163srghzhxd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163sazuydjk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163mbebwlfj.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163rmhnolyi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163oredjaej.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163fmfxhmre.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dmxublyi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qusiskiw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163dvdfjxie.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ijhesups.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163krjhrxer.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163mvxcovdx.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163tqelavxh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163mxsfjmtz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ualvdqra.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mgfnwqsg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mcokxmna.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163sqlwlemf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163hrixtdra.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ziiyhwxi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mbgkbdwe.html

[L04] 设置超时
来源：http://www.xuanzx.com/163pkrumdrx.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ngrysarw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163egzujyco.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163uefzwujn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nvismebi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163xpeuawpr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163vuoamott.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163kjxvbdrs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ygrdevfm.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163hmunamrs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163rbnmvrvk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163lpvudyzw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kbcdvuwz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wtctryxw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163hpzfruqj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163nhujzdxz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163scccawoq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163nzzubqfg.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163tftlhfen.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tszzyvpf.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163guwzqnqc.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163wowbgggv.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163mnhjvfru.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163tfseajal.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163kkecgswk.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163gokuvwrc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xcnnnfwn.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xnpzuqea.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163btxvjnsm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jmrtyjwj.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cmfsugeg.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nzyzxgeq.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163wwjiezkn.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163yloxaujk.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163akdvfyao.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163khprkoqc.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163dtsrrrlf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163yabdbbar.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163znkaffoc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ectrtazf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163umlyomxy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163xkgknjml.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163orbclrip.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163zukogzfn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163cwbgwcrp.html

================================================================================
来源：http://www.xuanzx.com/163qxhqkrdg.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163qygvkwuy.html

================================================================================
来源：http://www.xuanzx.com/163kcozpzch.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163imahgjse.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163znaqgsdo.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163zyohjzeu.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zzuzbmsd.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163cbctkhkj.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163izgnhici.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163kcfnhvhh.html

Ruby: ARGV
来源：http://www.sxryk.cn/163jsuaukow.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163dmxnvhwm.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163wsichlyv.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163lmxymvbt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163flbduhap.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163yvcbvgco.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163zcloxbhs.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163dqemhtbu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163zcpkzvyv.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163uociajwn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163eapjkyuh.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ueiqunfx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163bpchmbkc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rznvcpae.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163abakziig.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163spwjnxrx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163bsqbeaon.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163bjrhrams.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ourumiaj.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ustrahld.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163uemisqkr.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163brvrcmzh.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mjhoywhq.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163qgjqtdnq.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163qmkijodv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163llsqlyee.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163pjrzihqs.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ucolgtsw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ovnzicuk.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ngvxasro.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163nxwpbqrd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163xfgskjli.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163bkkpljam.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163tkaykhgy.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163qudoktvp.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ipfhtirs.html

Ruby: exit 1
来源：http://www.sxryk.cn/163visrjsyb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163twkjmlwe.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163fnazhcht.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fpzoeazz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ixiusbsu.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ncqxsswl.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163dhnkffhl.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163abvbkoge.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163afrupomc.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ssgmzyld.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163blkdkmal.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163dkcjngnf.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163wktptgzw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163fyemrhng.html

JS:   require.main === module
来源：http://www.xuanzx.com/163zmyaacjl.html

TS:   require.main === module
来源：http://www.xuanzx.com/163gttcdsaa.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163wqvqxasq.html

Go:   func main()
来源：http://www.xuanzx.com/163ijrkzoik.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ckkwlbpz.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163zsbomniv.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ohsvajic.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ppjfgfph.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163nqqhgyxh.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jtccsjvn.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mkuksdrf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163jonbgogu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163rlvqnkcr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163xyjzkfrk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163qkowcfue.html

================================================================================
来源：http://www.xuanzx.com/163hcunuuan.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163bezphvlq.html

================================================================================
来源：http://www.sxryk.cn/163xrmskanp.html


<!-- 参考信息 -->