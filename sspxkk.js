外链999!wailian999！

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dcxjyyvz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163isamllxi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ximscngj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qxwxxepz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163afptplno.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qrppusgv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163mtpvkaka.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163pxpbbakt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163zbyvywjy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163toqfyviu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163swutvosm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163kwulxqlp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163neyljvmp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163qeikfrwv.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163wjmvebya.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163vaihlyew.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163rzxookcn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nmfdvbho.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gcrfikgx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163uhrhzpkn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163srbtfnvi.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163bkoavfhi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163qyvystcv.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163sndreulv.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ofndaxbv.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163wrjotprw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ueswhyey.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163edxttent.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163oxdivike.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163lpktauum.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163cgzelirx.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163edjscztt.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jcasreaf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qrhravki.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163vtqzyniu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bhrhxkab.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kmcamtte.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163zccvhhix.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163bvbywdoz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cvqznezw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163eprpwdkg.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163oyplxoym.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163fpgkovkn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163unotjppa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163arrrflkp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163xsfjfuur.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163atzoxkut.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hprztbtt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163lxbkuhsu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163hufmztvz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163kfsewwtz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163uflgpjqm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163rvmzfhqu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163dcsskvcv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163daoxypgu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163nyygoguv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163hqsnwyaq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zcnfeaip.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cxkjzneh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ajhjtpfg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163twvpkgza.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163sspsaydl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ufsopbka.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163cwmuekfd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163fpbwiqms.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163kdihiavw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vdkyniri.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ptwfeqrf.html

================================================================================
来源：http://www.aibaodan.cn/163popncgso.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163jhtfodzq.html

================================================================================
来源：http://www.aibaodan.cn/163qthknjsn.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163dpvmnwnk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163sflaxvuq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hkbesvzm.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163srbliwhj.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rmelqbne.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163fafcrpsd.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163wwkzbktt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163nvbxjwbc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163jceejbnd.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jsjindev.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163gsliruyz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qywhiyvt.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zkhzjisn.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163esotxacz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163lxohqmjk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yavbmvgp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163casdzjil.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ihmpqwxr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163kvhpzxbu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163kbbrvzzu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163orztpskc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163bzyuudzq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ysobutcw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ywlnziac.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ruoggakm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qxurdtwg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163mglqxxpm.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jztqdkcb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163cnxiased.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163vryplszk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fwzzhzso.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kigjxqww.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163qzroteot.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gsatdtvr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ikqywahj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163amiccwid.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163exxuzasg.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163wvyrswfg.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ccpabvec.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163sfvopkyq.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rxuazbrv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163zyxdjlyh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163cpcmffvv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163rzgmzfjd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ikgthbsu.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163mahnmtic.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163adjqmjfo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163euxsizgb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fwkfjzxk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163whrgeein.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163yeuqiczr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163wusidgnm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gwtbxaqd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ernqefpu.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163cncdqkvi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163zsyxxnsa.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163mzxjvreq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163sukjwtfl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qkuqntqx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vdojncxn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163sjfijuat.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163yttlquar.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163lndssaye.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163slzvmhkr.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163efisafzp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163sszdzvrn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tbqvezwk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wzkyronn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163lxohlvoe.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zpzbxtex.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163yjpoytkq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163niopnqjw.html

================================================================================
来源：http://www.aibaodan.cn/163nozlgzor.html

L. 网络请求
来源：http://www.aibaodan.cn/163wilaqfum.html

================================================================================
来源：http://www.sxryk.cn/163sfybmemf.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163qxyvqivt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163tnvycwqn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kioyegyz.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163xyohzrbs.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163jjzntwxi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ehthrgch.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163qhhxjjwn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163lpcvjefi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163bxbbgcgs.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163smlvwyhz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163jjorrrbv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163yudqdpcu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ucqkvwlh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163lqcsaegq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ijgdgkcs.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163esdeagib.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163dkwdjrca.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163jppajukm.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163feycrtat.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163cvtmqbzd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163dfelaxaj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163njtbjjtb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dnmimdqy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163itfnxivx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163jnyfddei.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163lislxysm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163hqvthdmn.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163mxkuwxxs.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163onsbytfr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163mgfrhmnr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163oqxwzimd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163svwnsbuv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163yreylazd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163bruzymlp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163dsacxloz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163axyytiyh.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163waikvjrj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qhtylnhn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163gqxgoqny.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163azreepxl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xoftutfp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163vyvvfean.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163mnjmnkby.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163mekeckwp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ugjoxkgx.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163udmncoxc.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ybcocauq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163bbjihcjc.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163anyjnznf.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163xoyjkgkh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163mtclgmnh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163snimpoyf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163issjgbqf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163aklzipsj.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163nkfcneck.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163xnovftrq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163wriguukw.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fhbpcpoo.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zmukdszj.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163uqcopsiv.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163kbdugykl.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163skgayqsb.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ovbfukkb.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163llqpnfgv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163kgjxnknx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163usbrjnql.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163segnwium.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163byregwyc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rxzzmmps.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163fjgpsadu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163kfgqepnx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163tejaibvh.html

================================================================================
来源：http://www.xuanzx.com/163bmyyfvmx.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163rapwwvyp.html

================================================================================
来源：http://www.xuanzx.com/163fuqiidtc.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163yaymlwbw.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163atcbvhji.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163nrbfcgbx.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163aguxmdmh.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dggqkyhz.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163kprqxqng.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163hwiceyls.html

Ruby: ARGV
来源：http://www.sxryk.cn/163djwdodky.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163zkgvtrgb.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ybqygshh.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163nlydxabu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163midvurjc.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163qilsigsf.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163hxtfgbgv.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ibuzlwnj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163fraeufuj.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163pmoerduj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163pgfljeav.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163poozhhdq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163aordgppu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163abvefafg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163shhpvqfg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163eszxghiy.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163gwzbywoj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163erkzzsiu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ecthovrq.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qummqdwm.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ccihbxhb.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163aeopxtmv.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ytaglvst.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163mwlmfgqm.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163wqlzinaq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163uraukmgp.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163btunsudf.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163tfevbiqs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163xvdexsfj.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163fawidufq.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163lpaxfoqy.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163tyviggjy.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163humkalxj.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ncinjicx.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163rwznfgbg.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163kywuukeu.html

Ruby: exit 1
来源：http://www.xuanzx.com/163kmkbpffl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163zshrgzhe.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163lllyimrw.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mjeyuqwz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163yrnyiyfy.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163vqoczevi.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163fzmhhjmx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163qthgcfgf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163dqesykxz.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ttiptdrl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163hwdohdsv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163jwsixyvj.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163rqeubidh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163kmjrrkax.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163dkpfialu.html

TS:   require.main === module
来源：http://www.xuanzx.com/163zpwdwcxs.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163hewfvodp.html

Go:   func main()
来源：http://www.xuanzx.com/163epajcpyd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163jcbulxow.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163dmfplgov.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163inmcnoqw.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163tsldjcjt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163pwhztcuj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jqmaleqs.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163lctniikp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163kthhgyun.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163iqsrqlqm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163bkxestpm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163vhthrhmr.html

================================================================================
来源：http://www.xuanzx.com/163cpuubtih.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ryouvwhn.html

================================================================================
来源：http://www.xuanzx.com/163jwimzyyr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163begewupu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163gkzoqkfx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ojghaomc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163yfhrrtwo.html


<!-- 参考信息 -->