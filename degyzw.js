外链999!wailian999！

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163zkrnnqfi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163tspbgayz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163erhpvljc.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qiwhmqas.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rmedzhqh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163xtmcwilw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xqfmutlb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163eykstgne.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163xynoqjle.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163adqpbsoc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163njeqndph.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163tfblxwwk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163uxebnmtg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ujqsemnv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zgvlqzbb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163xhihretf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163sikwybjm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ynvjijgv.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163mzrmdeog.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163mghwwxqz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163hddijhlx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163myasdijq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163xxsplsjm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ggbanork.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163pzxrjobh.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xbndttzw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163xeontflq.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ppjxmbym.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163cfmnnekv.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163fspvlgft.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163kwpizbpg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163okaeirrb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163lcghjwqc.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163wvvrmjvl.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163pejqteax.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163xpvmgxbs.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163movbosme.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hnokmyyi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163pdyaenxq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163htchaomr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bzqhwmdu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163hirhfzgi.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163vnbzmbwd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163abfeqotf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ifbbzmck.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163wjmdzbgx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163yphhqzql.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163hvnlozeg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163wkapbgcl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163zrfwmvwk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163aaskybcz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163jgjlxlwy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163cavbxizi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163aoitpokm.html

[J09] 时区处理
来源：http://www.xuanzx.com/163dufikyde.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ebvykklv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163vjipbyjd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qdblfbsy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wqzrfhzp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163pzcqotvo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163zpkobztg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163iutnrfis.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ktpefncy.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163xsixzpqx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163utynafsj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163xemjxktt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163njqoypso.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163mxuohvdw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163copraufs.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163bywhsxxf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163rhfcxglj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163blzjzmqj.html

================================================================================
来源：http://www.aibaodan.cn/163flnpynwl.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kqbwpqfo.html

================================================================================
来源：http://www.sxryk.cn/163hxmafewi.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163dfzaouyj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163aphmuxiq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rfcdqcot.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163eiichrkj.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zmafvydc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163qjwlnxjm.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hfzhdyce.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163fssdrzpn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163vebfwlhs.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ccwownki.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bgaqpnfo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ddthpwjq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mpzawkpz.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xsbdkcyx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163nqfysuiq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163kdnxfzne.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ftrqxtbo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163vnwqnszk.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qqflnwjq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jnqtkttx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163juhanjgl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zsemownz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163oftnmkht.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163oeqbzcxb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163rgsdhkip.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zbpcscsy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163fcfqlsfk.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163rvekymjy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nhjyxdan.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163gmehhkzf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163twydwvij.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nhdkwbsp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163kqhykcly.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ghosmjea.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ebhvoiak.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163osxgrzvo.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163wlhpvvnx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ntzypiid.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163wixiosws.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zkjaljwy.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163saeckbic.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163hotpodnn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ingyblfj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163lraxqnnh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163canruuqj.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163prsrdute.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ymwoilsw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163iqxhyknw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163sxkikiec.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xpfeyyoj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163pfipchbp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163rskzsytt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163mpgkdgwk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163tybcxvyr.html

[K07] 进制转换
来源：http://www.sxryk.cn/163rxqzjkij.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ptcrmljd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163tacqxhlt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163owiityqe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dhrbokzd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163srcuqjnv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163teeoyzfg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163cgmpnnhw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163tkoxmpth.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163mepobwtq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ixlvkfzz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163rabpvgjx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qbcmfdvc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rdvcttbl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163xnujfdow.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163alnickzl.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163suaflyrh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163mmdandep.html

================================================================================
来源：http://www.sxryk.cn/163yaazexmj.html

L. 网络请求
来源：http://www.aibaodan.cn/163qaqyifwl.html

================================================================================
来源：http://www.aibaodan.cn/163xvcpitkw.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163flmtoqnb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vivsritc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ppvoatzl.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163soslmqrk.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zuxynzel.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163cbbpekre.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163tsthtypn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163bzsopzma.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163itnstsot.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163anlqxylk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163rliozmqb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163jqcappuu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nfscjnpd.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ijdsjlhp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163qmizrioi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ffeszqrz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163llclxjsi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qsvhkbaf.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163dmookzxc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163qakyzimw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163hwtjihfc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163geowfrzc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163thumpjxe.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163bbdkrzyg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163vazlldih.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ihussscd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163yvtnenwr.html

[L04] 设置超时
来源：http://www.sxryk.cn/163acmlluty.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163rbgyqweg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163qkbsrbby.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kllcwtkl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cmmfgrta.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zfgoybil.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163bbsflafu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163matxekyn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163logecija.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163bgfwbjfi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163fahlgyyf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163qwadfatz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163iaixwabp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ymgranml.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163wsaozvgl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163salbzzty.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163nqduolxl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163jpahyaia.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163hmbirkqg.html

Py:   resp.json()
来源：http://www.sxryk.cn/163vyoqtfzn.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163oroxlude.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163sbgnjzkj.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163nbhupacc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163feigwnfz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ysptrwwq.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163wurvllig.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jjvpxdrl.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163jxicrmdk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163gwgmbjds.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163nncdotxo.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nvkdewvg.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rgjigdke.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vzkmccwa.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ieugsjbw.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163zulecmes.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qhcksuea.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163trfjdfsx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163myyikaly.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163pehupunu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ivbgcire.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kbcegeie.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ppfcxbca.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163nyziqsoy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163gxbpovlc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163legjmerm.html

================================================================================
来源：http://www.aibaodan.cn/163mruhzwzn.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163scqhuxfy.html

================================================================================
来源：http://www.xuanzx.com/163cfhflfpe.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ogfzewwg.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ioxfukdf.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163lfwjsywn.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163atkutuse.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163svesouuo.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163xyhqwefs.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163blojyllv.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163tzuambzc.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163nyppnlvh.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163idodpmeq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163mylbmgtp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163qawrkgur.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163kacmlfar.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163lztsftow.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163awnkezcx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163owhgulxi.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163cuioqejs.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163qdcpzpeq.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163avfaoexi.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163wxkbhdpw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163oqrlnbln.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ymgmghxx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ayclepzk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163slovmdqz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ejefiyfr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163tzkeyxbq.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163exldupfg.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163nuudumhl.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163snrktozc.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163onckcmby.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163fdipdtxp.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ygcwzmmo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163wkrzgpdo.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163lfurcmdy.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163mejjetol.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ykeonwrb.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163axmokcsb.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163xarajhtj.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163sqjobayu.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163zizqeuqb.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163zknrvvqg.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163tywgfajl.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163udrwgcze.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163cdriajrz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xpnqthxs.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163niocprau.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mclabqeh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163lehccele.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163klghyrpd.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163hxpuuocy.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zfkagbwd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163fqrqmqsq.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163hkervgsj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163avoxrogu.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ffuhpyos.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163xyhoaqlo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ivmylwyv.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163lmnyvnnp.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ivhuyvpe.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163wpzaquwo.html

Go:   func main()
来源：http://www.aibaodan.cn/163vizykyyp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163jhwztgfx.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163cagyopqc.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ijowlawh.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163jytxbmes.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ptaopfxj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ebugkind.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kjqrpwfx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163erqrgoja.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163gdtuuqvu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163uzxwxmfi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ymclexzf.html

================================================================================
来源：http://www.aibaodan.cn/163itawvxpe.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163vkmxkgni.html

================================================================================
来源：http://www.xuanzx.com/163ngpiekst.html


<!-- 参考信息 -->