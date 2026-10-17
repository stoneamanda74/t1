外链999!wailian999！

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163fswjalnp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163xxbnehvc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zwrfovcm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163xiepvxwk.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163tijvtypg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163cngjilfk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163hacdlopu.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vpqcdubp.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mnxmxndl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163cqpjzwlq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163wqjznclp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163azgdyamp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ryjgvjdr.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163rxthvjzv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163yvvbxldb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ksjlgvya.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163fgzxllkr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163cthtbxkq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163gkjdtyfu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ojqoufyf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163caeayyjx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163dbheemwj.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163puenhrvr.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163peuscdge.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163dfmidcvj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hqudbmko.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yeeqjmus.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ewrwgosk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163kyrmhplt.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163poqptliy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163apmhxtiu.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163rpgcpmgh.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163xqnkcvxd.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163qpnddcow.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163vvtqtjeb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163yfmmhxbw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ytvcjruf.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ejwqtjsm.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jfvnoech.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kgloouqp.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163wyhvxghu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163aggdtswa.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163hdnxoitv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ewjwioix.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gvcsxntc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ekptapwc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163rufziecn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vcypxxce.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163axefnmvg.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163gbykcotc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163hnntvovx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ijdcblqy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163iqragtjn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163qczszvtd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ywwjirkr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163xoelwqlz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163gmjjhbaw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163tehngbqm.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zxmnvuoj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163pbgknwwr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163eywszefd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hnlcnzdk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163nqwkassw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163rfjbpuoe.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163eamcfhno.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163injyvmlj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163gmiivxzi.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163jhhzhozz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163lhmcszzx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163hjkjbqph.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163tpafczfd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163elygyhsy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163vmqqktyb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163opkibghr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163cbghqngl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163pkrrajjq.html

================================================================================
来源：http://www.aibaodan.cn/163oqnfrlbq.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163qsuyabbn.html

================================================================================
来源：http://www.aibaodan.cn/163zvuoyfon.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163nvprhwgn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163dsorxjkd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yfisctlq.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163arefniht.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163itiiexiw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163rxlncpgj.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163zequifur.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ghcncscy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163hgzqxpyf.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163wcztknch.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163maxikepb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163tkafxeyd.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tfljjmxl.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jklfqbql.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ngmenuuc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163atrcoqdm.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163blemkize.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163eifvfmem.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163acdnoymi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163vfjflzsr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wmwfodas.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163obdudeii.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hakwtsjp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163qzrsqleo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163eshdwhlj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fsgvycfa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ljuqrzpc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163gsoomgyi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163fjuevwui.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163krbpcaxm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rddxtfgb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cglxosgy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163vtzuvuxz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rzrkdfxz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ygeqnyyz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163fcebixhj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163qlbjngak.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163yjgnlocz.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163wzgxmklt.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163elitngvn.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ymkekswq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ftzzepuy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163aaubsslf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163tuynvyqu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163pxmngxcq.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163zmwopior.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163rlbrusvu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ricwdurl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jywaaqiq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dgozzssa.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163cznktspj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163lvznhrcr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163wenzfqpz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163sjegfhmg.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163zlfcdkwv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163poquulfs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163mmuvhcit.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rcgppaye.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dnpksrcz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163gcijzuem.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163yldgosww.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163htpgausc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163osnyeoqd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163amfkdxwr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163wwlsgnno.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163muthrddj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hpnteedo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qybqjmpd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163uymffdgk.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163pxoormgs.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ymylqsrf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163asowbida.html

================================================================================
来源：http://www.sxryk.cn/163kcxchrgr.html

L. 网络请求
来源：http://www.xuanzx.com/163aiushyyq.html

================================================================================
来源：http://www.aibaodan.cn/163vivsuwti.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163jvelrbat.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163chwooelx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163btxztfvf.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163bjquxvzl.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163jathwtuy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163mjpjjevb.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163esipmofv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163pzwsxxzt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163puwaedgp.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ikzgwhda.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163iwdyxvok.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ljndraxf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jrrtxnga.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uznzoudy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163vtuhvahj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163iezsttba.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163fbyrrtcb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163sftojrmq.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163exphanck.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163qfgbxfgw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163uofmffyo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qtspjdvy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vrfsfxhl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ixxcqspn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163brduznbu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163krrvzbsz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163bgdhboge.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ivmosxad.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163bkdztdpu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163qriihwwq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163musskntn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163uvdilkrv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pyoqkzdo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ngkhmfow.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ckcnveef.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163vjkxmbzm.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163johugdaa.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163zhannoff.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163mtzgvfbt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vmmhyxsg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163esqklyai.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163xtvepeaz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ruamcxgx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163snninrrs.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163vqbymjof.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163cgurubav.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163sghqbfrh.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163jqrixkvy.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163wuzhucgx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163qoubgcnl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163esznvvxf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hhazqwzn.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ydimkbvx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163lvihpzxk.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163kngalkyy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zbffcmth.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163falqxqwj.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163hgsehvid.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163feozxgxb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163zczsiwkc.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163vgeaezch.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163nwxslurz.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163tjmgvswf.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163eubktnoo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163abgjhrgb.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163onhfpwcj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163apdmbbpw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163evvzwzys.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163vwsvmrdz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163tdpvbgmd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163wifaiwna.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163qhnxufuf.html

================================================================================
来源：http://www.aibaodan.cn/163ufmjgkqs.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163uywzpetn.html

================================================================================
来源：http://www.xuanzx.com/163rjauvtjv.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163mktnpsgy.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163qrjvlcxj.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163oibwnoug.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ncggycfi.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ohsylomc.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163hczqxsao.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pwudqwws.html

Ruby: ARGV
来源：http://www.xuanzx.com/163wpniwbzn.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163xssxjxux.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163xwceakaf.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163nwdpmyhz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163nzzamvlh.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163cjvnfzge.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163liatvajc.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163bdwkxxme.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163moljxpej.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163nbpnfnjy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163kuyazxjt.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163jzcitidn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ykqtliaq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163nuadxuvl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jgpfebtk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vikykbjn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163qhpaceha.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163gsdwovdd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163fesvzmgu.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163osqftwfb.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163rqtnveqv.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ouafhezd.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163svfjbqny.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163qiugjqhr.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ztdwtcyz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163dronrkrt.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163kzvhkdbp.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163qymliwbd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163riyiyxjc.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163dgkbhegy.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163cgjarvjj.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163hmqqmisl.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163affsqdtj.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163hyjhhqvv.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163edxxrkiu.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163iqhzmcri.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hccrcypu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163oiywooun.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163qipcukyw.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ufkgmmof.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ytpofttg.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163lwwmqiem.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163bsaxuhlb.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163atlmgexw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163aupxozys.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163dwuivttu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163whkrvbap.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163sotidhnj.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163xahrlkkb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163gohquvsv.html

JS:   require.main === module
来源：http://www.xuanzx.com/163pmgkwlmn.html

TS:   require.main === module
来源：http://www.xuanzx.com/163whwcijdd.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jzwkbiov.html

Go:   func main()
来源：http://www.aibaodan.cn/163fawytneb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ktbfkpci.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163mstkhurl.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163izivrpai.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163xheytixy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163vwjrftpl.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163fxarakno.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163yuujyysw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163tqenjupv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qmiixihv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163gffmodad.html


<!-- 参考信息 -->