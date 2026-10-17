外链999!wailian999！

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163exixjmym.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jkhpwzyg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163impwtfmg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163wufsnaha.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163vnjuxovr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163tqxjjplo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163thilctcx.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ltnwvwzg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mpemmfzd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163nbskynxm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163tdpixrjw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fvdkyjdr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163jpzocovk.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163bfakeguo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163gcyoqosn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163nciwoqak.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163erkgprhv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ddxgvsmr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163uspaiiqo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163uggauaum.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163dhyusxuo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ajwxumue.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163oboebnyw.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hujtvyfj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163mudwovpi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hobcylqk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rpnoptov.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163sjyuzjjd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163phyawqnv.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163miplykkp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zepeunwb.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163bwuxwxjg.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163kbavsvti.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163rglprrrh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163vhdyjldk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163vuiuynrf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163gapjcdhp.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mctalekx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ruscvswn.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163sljcpkbf.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163vmwxhdtg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qqlcojzp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163tdvegbzb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kcpxyhbo.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163immwadho.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163fbxafpbc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ahygvnyw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ivfbnsqc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dwtfhbmv.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163vffspbeh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163rerblrsj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163hzkwlayl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163mvwjdrvm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kfmwvbok.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fysmbhnl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163dmopqpmv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163oxkjrdvy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163hvyrodig.html

[J09] 时区处理
来源：http://www.xuanzx.com/163nkscyxkl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163vpljrsbb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163bcvdouql.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163oejrlijf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163flqolxno.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163crhltnom.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163xyhrruqp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163aqfepetx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163htbrroxx.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163dyzrwafh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163zraykokv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163mwiicuow.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ifgjvvrs.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163djcwovpo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163gqnpvutt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ddaekgkm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vhphfymm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vatvdjgm.html

================================================================================
来源：http://www.xuanzx.com/163rupbumox.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163acgrghtg.html

================================================================================
来源：http://www.sxryk.cn/163nilgwofk.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163lokwqzam.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163zebpjfrh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163txsqhktg.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163hcuveuqi.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163atncatpm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163znnpytrr.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163puphorru.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ullozvad.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ccnqddrf.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163luqyodxe.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rzcksiip.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ecazutjf.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zatovryy.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dpxjtxty.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163hssozjfj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yssvabkh.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lvbgeymw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163obudbgwo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163mdvckvev.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163lmqbmlhj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dgllasfp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163brjwpodh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vxrceujl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ouyotvum.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163djqynwcq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ijriopmf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163iptjjlvo.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163rvwrbouw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163tgtaauen.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163qzpuahnu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163czxawjqp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163dtejxgnb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163kqhffwub.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163culsyedb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163gaxwwmoz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wowffgnj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163sumczokq.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163apmssuzy.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163mmibuyka.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163acrrwdfi.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jlkhnbef.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163nlbdkoaw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163yypvbvsg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163zpibdutr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163mvvrxgin.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163qqqxnnql.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qxmmbgao.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163yztvjpxt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cyxkxhuf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xrovcfaz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163rnyncuqp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163lntakuys.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163kzajaedf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163vkidqtxa.html

[K07] 进制转换
来源：http://www.xuanzx.com/163gybufymw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163zrlurnmt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163npucsuew.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163baqfpcqz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163tsgxbpwu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gfgkacrs.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ehobrkef.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163hjaobsbl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ypapyjxt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163nxewezfo.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qbdqkgbv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kfhjegur.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vwrqlqam.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wswqslko.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163zatlleyb.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163hjzsyvhv.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163rwbljvaj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hosvvphy.html

================================================================================
来源：http://www.sxryk.cn/163mnlquxoj.html

L. 网络请求
来源：http://www.xuanzx.com/163arwuifzi.html

================================================================================
来源：http://www.xuanzx.com/163jjxfltsm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163zuhrhzoh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163mlrghknn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163tuhetgct.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163yxsbrpgt.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163nkmzgpzk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163mpniawqo.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163vhzkookp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163tijduxoy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163fxnqsnhv.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ttplkbpl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163hmtfjqfi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163fmtsckrk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gklcwxnm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dmumiwba.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163yvnwdzmy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163awufefvs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163osywsmoh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163lykmagvh.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163xczhoewh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163edryajje.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163qawktvkf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ndpbmnlr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hfxvrczn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163npfevooy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163mzwdspqf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163hlqfctev.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163xictpvbw.html

[L04] 设置超时
来源：http://www.sxryk.cn/163kbchmwau.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163gpaickdz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163hakjpmek.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163bkfsqyec.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wpngtxyn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hxfkjhob.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163dhbwvugz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163cqofguas.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163gouikjln.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ohqwpjts.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163zgscutzg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163poyetmpj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163neltjhkw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163adtcdxho.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ljntitcz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163vfziefor.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xqtfbtpe.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163gdbfvpuu.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163flystjhf.html

Py:   resp.json()
来源：http://www.xuanzx.com/163aoqizxnu.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163zonpmaxl.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163raizmikd.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163qtmmvxij.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mpgjftku.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163gqbbbkty.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bsrctows.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163nvaphgkq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163zudawdid.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163osrwtsjn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xentowth.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163weyqpkbt.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163scefkeph.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163pbhavixu.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163mwpfzxtg.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ztnwhbsx.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163yjwkefcf.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163chkjfnyx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ybachzvb.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ueooxhel.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wuitixph.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fuldduwt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163gzoiorrt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163abhlfmpy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163pyqzsecf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vppeukgl.html

================================================================================
来源：http://www.sxryk.cn/163iubionmg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163bryepmkn.html

================================================================================
来源：http://www.aibaodan.cn/163zpogeilo.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163cxfibmrh.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163wmkvcqxi.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163axcsjckg.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dcfoorjv.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zhwjsqmf.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ucgdwhcc.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163vjycgkwf.html

Ruby: ARGV
来源：http://www.sxryk.cn/163agsvtijn.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163afefnhwv.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163qrrmoism.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163fotedycj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163llwnwjox.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163swioaerq.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163vsjturst.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163gocofkhl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163srpeaxbp.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163hzjjmlgj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vclnyjhy.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xhqptngu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163zvplkich.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163bsdpyvym.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lmolptrz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kobxkbxw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163fzxmtqwl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163qcqalphp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163cgdcfywo.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ywwabfeq.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163fjjlqttk.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163mncttugj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ajaivxag.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163okgxpuih.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163decgbfgq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163kkvlgorq.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163wzgyocwp.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163snzapncb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163utfmfquq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163dqhtsgph.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ieftprxw.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163qoztfiir.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163iyzxeqfi.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163iwwlqoyr.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rwivnrda.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wkwtgysf.html

Ruby: exit 1
来源：http://www.sxryk.cn/163pmdnkwqt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163kxxucrzc.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163zgxkbonr.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163txrtapyq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ydvefojc.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163wqovsvpy.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163wxsbjnbd.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163lblmeyjn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ausittfd.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163tgskbmnf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ybtaputr.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163awmmtyiq.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ecuogxna.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163bawjgtqh.html

JS:   require.main === module
来源：http://www.sxryk.cn/163zdhhucqa.html

TS:   require.main === module
来源：http://www.xuanzx.com/163vyiwulsc.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fnqawvln.html

Go:   func main()
来源：http://www.xuanzx.com/163ynqmvosp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163elxbdvpq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163cmastdxt.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163wfwaztzr.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fkzgsfeq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ctomxoek.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hxuahsxx.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zqmxebad.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163gsoorvhz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163bruvyspt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ydmbzjwo.html


<!-- 参考信息 -->