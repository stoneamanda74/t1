外链999!wailian999！

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163xlzinbgb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ibyiqxgc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rsainmnr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ishjibvp.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163eczqsupl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163nwdvkqev.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163vuodkexl.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gwyuvkkv.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163khdeahfw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163pqkvxvkt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163wanlajzc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ewqhieqd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163xrpyxkju.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bdnlknng.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163efzrvsxy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163vvxzakez.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vovkfnzb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163swwoabtg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ztdksoes.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163pcnmtave.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163tgfrappr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163imwilpiu.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163qrxasees.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163omwmckol.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ppfdljqe.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bwcvbpyn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ahldmpcs.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163oqbrqfoi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163zegupimv.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163hmrusjul.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163vgkkfeni.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ffelpdtk.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163krjjvblg.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163wontbzum.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163eumyiwmj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163isaqvxry.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163meahzctl.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qfdahlxf.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kbihrxmn.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163cfstnddp.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qfoarfuv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163sxevdzkh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163yzesymnl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163noyqntgn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ccpswyeo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163gsfwptsk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163wysmxxnn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ijhqjizm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ujuoexbo.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163zlgcpwma.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163rudsvbat.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163mtquhawo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163nrtvywdq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163twaddxqf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163hxfrlzag.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163qxqzglua.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163vhxcycat.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vznxnucy.html

[J09] 时区处理
来源：http://www.xuanzx.com/163byobhbfu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163eerqgrir.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163kdjimxnb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163uroghcop.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fqajrayv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163fyovuwgd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163kmwxzexd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163vmjdkynp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wfdgdhfm.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163beqfjjgd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163uyxkwweg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jtdheyxy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163xsbmvtwn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163fmokfzvt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163jhqnpsab.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163prrqrdzn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163misdpzjk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163iulajuuq.html

================================================================================
来源：http://www.aibaodan.cn/163rasolpyg.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ezqfzqmo.html

================================================================================
来源：http://www.aibaodan.cn/163wzrkuagz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163qvcaayma.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163damieity.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163sayoyobt.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zjxahsib.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ydnndwwu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163yqnldsxf.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163kipsdwys.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ahnyvkmf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163dzstwadu.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jcacsrlf.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163irbcbdwi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ncelkeed.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ypdkdpri.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163nlvlhttk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163hmelrcsd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xttwyhlo.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163spjjfnvi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163bfcfouuu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163yaqlxljw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163khvkcfyy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qliqmavf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lberbfhz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163byafxfmv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ufqrnxks.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mfoyteld.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163sesotlkp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163wprnhmfg.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163vbsirqln.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163zbltusak.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163dbrloezp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fjaogsam.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bhxuscmr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ypuhqxzb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rnflboyr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163dywrpxkq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fpflimjz.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163yirnaden.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163surkubjb.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163fwgrvzul.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zvvzloye.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163kjnddinf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wxzoeroe.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163wwbelirw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ntxvqwkz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163djglnslj.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163qmhaolva.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ylvzbtls.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163mksptlhc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mirrxnpi.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163aoslxnhi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163quwdzfaw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163yxeiwjnn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163tmdjqqgw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163hwtwrjof.html

[K07] 进制转换
来源：http://www.xuanzx.com/163gttqxiez.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163euupskrt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ttbhhzcr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vzowwgcw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163tqkrhmua.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pxxocrdj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163wqlazndp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163xrgwknvp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163wkdjroju.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163xcyshpux.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163snlayioq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163tkusnxvq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hhdbznll.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sbeuncpl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163iunpeesb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163atagbmxs.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163whyvygjn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163wxcdeopp.html

================================================================================
来源：http://www.sxryk.cn/163zlnlsotz.html

L. 网络请求
来源：http://www.sxryk.cn/163sujxfcmx.html

================================================================================
来源：http://www.aibaodan.cn/163umfzngzp.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163tiagzdkq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vbqmndbo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163bkdjomor.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163tcykhlxl.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163sucisrix.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163fpvytxza.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163wzgjypzs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ccluxxtf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163gzfbrore.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ehffwmbk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wprjbbvk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163xegkquoz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bbpcaonp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163asifkwyc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163aaehrxlh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163mpxkttzj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163psjueymq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163rzquypau.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ceiinlnb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163dyofysah.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163dipnmvsq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ayecrxtq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163naopybag.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163xngtewfd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163lowcbuwe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163smefxmla.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163nmkqcreb.html

[L04] 设置超时
来源：http://www.sxryk.cn/163stznpetl.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163zkthaxsf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163papkwncp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163sherbgwx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gbxwltli.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163urqlcygr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163qaexfboo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163rsqxenpa.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163jylhptge.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qwvuqcje.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163kxejseoi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163aftkwtlt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pndzpuff.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zwytxgir.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163zirckesm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163wkrphgvq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pvddjyqm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ivdvqnkj.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163wlsvysbw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163xidlyijy.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163vqxnvoof.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163beafgvag.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163foonydac.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163fkqjidap.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163aeefcnrz.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163dacfhmya.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163jmbbpnrj.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163yfesmnhh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ipyaebpz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163vhmdlbnm.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cyepzffi.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163twxgomvk.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163skcmnjhs.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163phjureqc.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rqpwskzw.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163tzuybhmk.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163znkdgzku.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163hkzspfdj.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163benakhri.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tpozlmyc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dpwsnfli.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163odrykkua.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163fnkkzxbx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163edvfmjrw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ignvzztp.html

================================================================================
来源：http://www.sxryk.cn/163nsgzawqp.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163knpclgwc.html

================================================================================
来源：http://www.sxryk.cn/163irvyxubz.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163dzkmdyei.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163bvzqrxlz.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163lywkgveg.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163joqwzvtg.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wlensnhz.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163pyecukgo.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163gaoqtfkp.html

Ruby: ARGV
来源：http://www.xuanzx.com/163rbxmfrjh.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163jqitarmc.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163foqoehne.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163gchwtgmj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163lwkhjmyp.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ptrtfomk.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163btibwihf.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163dkobgpqm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163esqnrped.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163onpfxisp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ftbcxxak.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163rglbfqch.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163dlisndie.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163gwwmpkqj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wszdbonx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163miccjlfq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163tkxhlgis.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163luubecxw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163msyzeblo.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163vqemqhee.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163kiqhtsfb.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163jpegogwv.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163sbqwfulb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163lrsqwyxv.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163vtxbgxey.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163zobhozyd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163pwwqrhmv.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163znpfpsfs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163yqqvbxrs.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jydcsndr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163jwzqrlwl.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163byhcwchu.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163pcmsnqzk.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163pogcccpz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163wirvqjkj.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163bmzfuejb.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163qqdjbstv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163kwaoopnz.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ofzgshbh.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163uvdxbmsj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163yoehfzzz.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163tarrpdvo.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hmexipbv.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163gbdwuthu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163vkggcdlj.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163sapdoihs.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163lzkdxeyj.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163knusbsbt.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163jtkgvqft.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ayencnsg.html

JS:   require.main === module
来源：http://www.xuanzx.com/163qpycblie.html

TS:   require.main === module
来源：http://www.sxryk.cn/163pqhljzme.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hldvgphm.html

Go:   func main()
来源：http://www.xuanzx.com/163yjdgncot.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163slvjelyu.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163vskqwdnb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163nbdjtarb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163qvsriwrj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ccargmtq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163soltnzec.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wvcgamzh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163vupsfkzb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163asdnqxbv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163edzkljjb.html


<!-- 参考信息 -->