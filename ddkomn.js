外链999!wailian999！

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xroaymkk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zgxjabjs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163mgeplkwb.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163nrvwdhoc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163sbpzlpub.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163qnhgsmpe.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dbqvqysr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163uaxfdkqf.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163pbmoyhiu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163bspwpkbo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ftsqcqwt.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163sxztfnct.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tmsgslzf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163swoppsec.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163wtsbzegh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163zcciwtaz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163hpevpbzf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163husadkpn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nnuszsbp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163pvflcgmb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163lxjempii.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163tbxqysqc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163slxrhgjj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163mynmpugw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xeaikwlb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163adwldqgt.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ayqyxjwp.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163vowmraqc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163fgrzbvky.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ukfgifyi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163atpmieyt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163snxnlbyy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163tcjjrivd.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163wlflymfz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163nczxwlql.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163slshdvdc.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163lhlofxte.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163urszuakv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ehchrjwf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163dixazmjd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163aofbrfix.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163cnscnfys.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163phryalfz.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163qpfwvgmr.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163nlpbliqb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163newiksei.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163kyuqcjik.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163husmgjxg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rqsncqls.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163szrqkfvx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ktgqaifd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163psgegmkp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tgfjsegk.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163pcsplzwy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163yfxvqnwv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163zibfuojw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163iwywozrn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163cyqnopwh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163vmgfguxm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163mrasrbea.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163xzxpshqr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163qkqyeeod.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zniduffe.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jrgcwlap.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163rwfnboiw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163axcilfmj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163aeyzvgdv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ogfabqev.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163cfqhvhli.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zwjlonkp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163zgkyeueb.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163omwaaooi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163eofucmww.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163tifbzpzt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163qwoftwxc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163fdxdomcn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163tgdkxxrf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163rbbiolse.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163inujflle.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163tjkzkdqb.html

================================================================================
来源：http://www.xuanzx.com/163caakhtzu.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163admowvgv.html

================================================================================
来源：http://www.xuanzx.com/163idrbtxco.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163uzbwvbxp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gothorwx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rxvtgalu.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zcomvrmv.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jonckkbj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163bpmueufr.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163qzcvtpor.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163uqrfxrug.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163wpoxkhla.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163nowpegdv.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163zbpgblbr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ezlrewcx.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tluerkjp.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lsspkfoy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163tacrewar.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163seiubqvw.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163lgavdpsw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163bhlxcydx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163sdedxpld.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qawlmhub.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fxvoznhb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jxeqjmgz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vzoeqwrf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163rzvixvzc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163nrrvbmcb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163jfzupqkf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163bqznsqlo.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ifwlellx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163btlgnojs.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ajxmmhwo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pgsqtche.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ordgdnmg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163isfdzyxz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163lzwcsdbs.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163pmvglims.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163rjgadfxu.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163tfosdszb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163yibplxnh.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163pznfjwon.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163khwpakfn.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zryigumq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163nubxmrdo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zsdjvozb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163hnqffjpw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163cxnmppdw.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163vssxzvtz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163lztmsgzw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163kdyqqpfi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jgzldozi.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kdnhvrmk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163dxtjiohb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163krqngbmz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163gifucmxv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163dzcqvbja.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163wiepeity.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163foogpyaw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163jniqqbtg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xihfonhe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rnxysemu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mfsrzjjg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163iiojdryy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ctgnczun.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ijkfsmdy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163gdjagxej.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163buhfwlzm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163mtqqwggr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qdexhemw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dzkjewax.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163utkunbkd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163cxrfciqj.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163rbkbeqhj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163svdhijzy.html

================================================================================
来源：http://www.sxryk.cn/163kixisbds.html

L. 网络请求
来源：http://www.xuanzx.com/163ozcguxag.html

================================================================================
来源：http://www.xuanzx.com/163vauvqgzw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163uvmrbhvr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163znyxfccc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163aooisyft.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163gbnefxjc.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163eyaiscds.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163xzcnpdup.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163jhjqeduk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163buyrtrng.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163jhkkwien.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163mgzkxfep.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163sbgoweif.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163jtqemxpu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ijzfpeim.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xidfubfd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163kveyrwdg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163fkxwbsgg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163vbeczcox.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163hjbkemdj.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163hsqrtunf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163smkoozkl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163qvledria.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163pajycoog.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vplylqln.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bopbzcpv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kcznbbdh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163yasgvggt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163qokjsnku.html

[L04] 设置超时
来源：http://www.sxryk.cn/163yslcuklf.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163jarbwgua.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163qenxdfsh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hbqjwtod.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163sougjyeb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fmovhmgt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163fziceklk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163exbodxpn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163aajsqkcv.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163oroofspf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163nkhmsjoa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ylkaprqw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163epiralcb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mjntskxd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163uwiswdvn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163jahxpbdd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163huxoitry.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163hnvuxuoi.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163qsgbgmgf.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163emtitdyi.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163cfobrkyd.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163qsokxtyn.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163imiuzvpm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163luypizdd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ejjwcibw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163qwnadyme.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163zwuqnfem.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ryhnpjmj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jsbdzlnl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163dghtdhzt.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163izcgubjp.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163eogtnzvi.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163oopqnaix.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163cnxbqyyx.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163uonxgonr.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163qksqbgka.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xiuuvftv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163tcccwzwn.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163sjjyekfy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kvexcfxl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163grzrdubn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163wbsoaioo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163bqotkhwt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163reoodtrl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163nmonhyaz.html

================================================================================
来源：http://www.aibaodan.cn/163koylkqom.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163iyqijiku.html

================================================================================
来源：http://www.sxryk.cn/163iwgmevpt.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163tlgfjvcl.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163xdazaana.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ewsegjxk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qqhibljm.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163hvrabtmz.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163cswbokxf.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163labakjnf.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163eigrfugs.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163dprftzdq.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163eswsrsfh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163lhdlyyih.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163utrtqviw.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wblotwns.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ruewzfxx.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163sjpbfrow.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163llqadkso.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163nxvqhucm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cuftefix.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163bgbilvrc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163eopkpswk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xakxlrev.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163udvnfewg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163fezdurmr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163babzwzoj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163mebpkgzl.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163wduauwsy.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lcjsfwup.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163opzukgnr.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163xwrclhhu.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163rvrvlens.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163piehuijs.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163axijysjr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163skjkgees.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163fplguovg.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163lzglghic.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163chxirlnz.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163qzagzwar.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163nocgdkye.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163fgsiduci.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163rbzhxmsw.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ftmosoos.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163uttpritj.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163dtwqpyhb.html

Ruby: exit 1
来源：http://www.sxryk.cn/163mbsvmqta.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xsqbngnv.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qglmnbpc.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163drfwyeid.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163dhdgqyol.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nozfkrky.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ekodcxgl.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163fvgiqfph.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163uqkpvuod.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163gvfzljbm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163jxeslpty.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163wlfqodfz.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163xqerqodr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163mjmatfdn.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jcqhdugl.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163skbwfyya.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163uvwytzhv.html

Go:   func main()
来源：http://www.sxryk.cn/163vftbpnaj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163yylzzmiz.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163acfbeueh.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ygcroydq.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163pkcxtnyx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163vzgpymhh.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163sdluxpql.html


<!-- 参考信息 -->