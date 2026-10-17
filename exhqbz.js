外链999!wailian999！

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163zaeptsey.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163zkvrgxsw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163keotnezf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163lywkhsqz.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163mefqpmbu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163dohlhwkc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163iornbanf.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bzvdupvm.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163arniaost.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163czjmrpua.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163mwwwjhjj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163bmfadnda.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163qdyidpue.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163yrxsetvp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163dvbhyapc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163rowlodax.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163uodnfizj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163xwhgzruz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163lihssiwd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vbzzhuyv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163oltenixh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163givwvnlx.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163lwgfmtpp.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163cinqlepz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163dsrekshd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rshoteea.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163usrdlpsz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163mwwpnwyl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ypuqxuex.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163pssdjcfy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163rgmrdkqe.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163jjbllxhk.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ltugcttq.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163jvctqtyb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ejztlhyi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163nftpekma.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163glrgxqsu.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qtsejhnp.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163gzmubxdf.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163rvhtjcnb.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163budberlw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ohrdvoje.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163mfhygvbz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163etfxjqzd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jziuzqan.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163mqtfjuvo.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163jmmfilqe.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ovzoosbp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hwpuzgyq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163chxdfiek.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163cjvtyilh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163eoralxac.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163dmqkxzmm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ewshehpl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163vponjcyf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qeupmpll.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163gsflosiv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ojqqbxwx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jocscorm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163wqtpmxnn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ewcycpgh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163mhdqrsqd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163vbofheeg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ipkpvfpx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163bnppsdvc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163erajyxsn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163fzytcvnw.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xtgaxceb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163jeskakui.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163qjcrtuxf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163xvpelpnz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163jalzpjkd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163nhzvrvnd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163wqefcipd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ftcpemho.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163cvazeadj.html

================================================================================
来源：http://www.sxryk.cn/163wxvumkht.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163wbwfoqdn.html

================================================================================
来源：http://www.sxryk.cn/163yhbjkjte.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163lfojuzbj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163invrpmel.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163usfdodys.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wimuyecb.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163znoejfcb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163mangycnb.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163brvlujjy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163xpkieutd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pesjqguj.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163lwpdjcdu.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ctfnrdun.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ehczhefi.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kkwliyyc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yameexij.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163kenwhmye.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163urkdtkoo.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ktlczfde.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163iqdfzfco.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163iibrxwss.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163afdldgck.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vbyptfxq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pppkoaxr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ucfgprhk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163asncqyku.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163pwqsxkgz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ncqdxsrv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163gzmthekx.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163bmevuklu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163lrapvgqv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ltyfpzwl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bvjomrmh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163viaasmci.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163fshidgle.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wigsthxr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163qarukdfu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rvwalanx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163jgfilagc.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163nobzjgib.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163kutlyltf.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ujkvrdab.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wgdhinsq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163kncfcztx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163oqetqefn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163fypvcwzn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163bnetisvv.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163yoouyrmo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163wnahoyca.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ewbvmdrs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qpvvmdxm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dnczbvgw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163gkapxljp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163alpkhrxm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163dhcftlsn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ytxqgpie.html

[K07] 进制转换
来源：http://www.sxryk.cn/163nppzhcie.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ykvkpndk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163khxjfiwh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dusvzrfq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zpxifgte.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163whbarcjg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163tsnczomg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163hkhbhzry.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163uwarmlhh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163tdyzqbnq.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163llzcmqpj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zhzkfhmr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zyiivxpb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xyxytjet.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163tkfgtuob.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163gkbveyem.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163rqqfaizb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163rxrihpav.html

================================================================================
来源：http://www.xuanzx.com/163uoxztxww.html

L. 网络请求
来源：http://www.sxryk.cn/163fkuwbdri.html

================================================================================
来源：http://www.xuanzx.com/163jeabcccs.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163kafrjole.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163pvrbbiou.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163vlcnbpup.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163awoqwwqu.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163uxkkupzz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163mplgccxy.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163pdiferyi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163dywwfrxu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163pgwsphes.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163sgsjiscs.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163kyeknsyv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163gwnhsqxb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163yaylbsuk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xutlfgsx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163hhcznojy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163pjwrconf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163iestsqyu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163yxvnjnyg.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163jfxfwcyi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163xhytmbde.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163qmgbzail.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fumtjjah.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ogheyljl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163yrpdzwqu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163wslxvizx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163brdyaivp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163mypfxznn.html

[L04] 设置超时
来源：http://www.xuanzx.com/163nbjgkafk.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163sqpqyxhj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163svanfajq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lbrvbavn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xosrtsvx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163mrlzrihy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163tdofdnbz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163lkfyoxpw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163dgcslwdj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163limpwpoi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163oomwuust.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163vklswupg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163gqubvlau.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163yateqzuz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163armqgzjq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163qejdthvx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163vbcufsvw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163iqhuidsa.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163gmeewyoh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fdlutfkj.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163upgddcum.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163nszntuee.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163enfsnmbm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ljgjvbko.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163cjkoejrq.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163aclowagp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163lkgbhddj.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163qkdxfesl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163dlmnjyvq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ugwidcix.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nsznmkfd.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163plojglla.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163physsrco.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163okuefolu.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163meqlhlzn.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163alpgpemk.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163yfielmnr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163kditnovt.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163kbcbxocb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jtgnrxkb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163llabbaao.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163cxltstgj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163yeokrvhz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163onqtaeyu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163tuxzocmt.html

================================================================================
来源：http://www.xuanzx.com/163bwfzcnef.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163slyqsosq.html

================================================================================
来源：http://www.xuanzx.com/163vksqqfpi.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163mrbvamrk.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163tvdebbtp.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163sveykset.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xeecyxwl.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ozqwndnc.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163wytludki.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163tdkohiqb.html

Ruby: ARGV
来源：http://www.xuanzx.com/163zkkdwviz.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163jgcmocwq.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163raxdbion.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163dapbdred.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ngdrijhn.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163bysxjqtc.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163bhjxwvjo.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163hhnaqlbf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163dkshchus.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163mezrgwgg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163shbftajb.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163adlbemmx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163gcimduss.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rdeweulx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163aiomtwju.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wackimuc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163whqcsiyt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ykmvhkur.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vzvsosqm.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163erindomq.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163wnxndoqr.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163edesvhys.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163scxoirhs.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163awznwpdm.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163jcogoyrx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163peumxqiz.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xwypjgys.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163difiprki.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ozhhjued.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163smeadbzh.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163nhflyylj.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163pkksbbgh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163adwtfbpi.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163eapbjhoz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163fhukmdfz.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163fqobsthg.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163eoqfoycd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163tnzuewqy.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163wsqjxajt.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rislrukd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ouzorijm.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163rukrdvit.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163azanesiz.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163vnrzhivd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163fqixqbmo.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163wkpscepq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163wdnwxkhs.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163kqvfcwfj.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163wyvdsgpv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163misrqrkn.html

JS:   require.main === module
来源：http://www.sxryk.cn/163sihiexwj.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163fzunvgca.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163yponanpr.html

Go:   func main()
来源：http://www.aibaodan.cn/163kkssxpeg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163hnfaicbi.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xnjgcqoy.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163kcmcsonu.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163tngbmjxq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163onznvkbe.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163emrobkec.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163aebpdbmt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163kicduhgk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163tweoqkap.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163beaiovdk.html


<!-- 参考信息 -->