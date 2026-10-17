外链999!wailian999！

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rvbyquqf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jcztzgcv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163vygrxlyi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163laauojxh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vlaczram.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163bdshtuqz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163nfupjvpn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163oiihhegr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163mfmshmko.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163gdriuvgn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ixqekohw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ofzcsajm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163omqmjchi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163qrmzywbu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jbdvfehc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163sdjpkghn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163zxvwyfks.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163tgukwclh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ngsolvog.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163kstvwyil.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163fhxhymrp.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163vmbjqluh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ugmhvghg.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163xyuepxjx.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163qmsgotyt.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163nehzigco.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163wauacznn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163owghwxxa.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163dgbfgrcn.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ebulgysn.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163gjvzprah.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163hquywxdx.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163aaqddyme.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tqwisler.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163yedfwgfa.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163uihalmsp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zzwdcycu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163bscqemix.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kdqiiwcu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wbhdqadh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uwooojhc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163uayuiduy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163iurcaqoc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163vjhxqxzv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163umiihhlc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ivubkcif.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163lnoymbrs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163fltiidfa.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163inhpbrcm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163jvnchnqf.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vlsecwym.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163qnzjtluc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ppbhycbq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kajefpxm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bndymmxp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163vseuxsga.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163npmxltfm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zcjppddl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163urwbqkvj.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ksxkjgqp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163uicqfvdn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163vtyhfkha.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kazponeg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ntnfjjib.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163irvwugyl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163emgonbvg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163lurxqtgu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163zplhlhst.html

================================================================================
来源：http://www.sxryk.cn/163zvusiszh.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163hycbkjak.html

================================================================================
来源：http://www.xuanzx.com/163ghdhypxh.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163cddhnwur.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fnlhnygi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163hyjmeuxb.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163akttfplz.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163elaafyyc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fwxygxds.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163erpwoeqy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163lifhlvwm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163xdwrrpth.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163njlgsutn.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163knvwhmjg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ibgusyjj.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fbjdkmrx.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tuhdpyrk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163wfgldlvs.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163btpldptr.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163uzdrrcth.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163anhhyoal.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ekvxrlqg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163txojlrco.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ghbqavsk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ydadhnvk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163epbabahw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163kkonzzsk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163gfeynmfq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ushyutyj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163vukxcqei.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163slowmqay.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163yccmvadq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163yxsepagg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mnlhmedb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jwkmpxoi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163zntmdszb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qhalnwyx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163gvdeftyv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163okniecln.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163hbcnmizx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163aszesmih.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163xmlmuigt.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ukeizcms.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163raybuluh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163iruokown.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163nyhysaii.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163xkwfnxdr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163bdzbieht.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163lcbfqlnr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163rlcjusxw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163aphmesdx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163odfonwmi.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wuyzghww.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163gfudobfa.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163oupabtof.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163aqdbumor.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163xuvyuhdp.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163iyopdsxx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163vszsewzb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163esyucjku.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pnpqsxdv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xibzhhuw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163frtsaibo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163yamulrwy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163otsrtpnw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163wfcxsodv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163whtrchrt.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163zhyceicm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163dnkzmmbf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163noimiczr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gxvmhkyr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163oqoxgjgd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ivdnvcfy.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ickuqdbb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163xwlukfve.html

================================================================================
来源：http://www.xuanzx.com/163taptwwid.html

L. 网络请求
来源：http://www.sxryk.cn/163qgyvdkhd.html

================================================================================
来源：http://www.sxryk.cn/163hvqnldqp.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163fyargrry.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163fhelnqwd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163nhyltwta.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163irmtjpho.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163vevlxqdq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163zykwgaix.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hfdmrqmx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163lwlluqyj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163mudhdper.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163zvriaacu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163kxpuawcg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ullyejwr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vamrrfma.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bbpcruou.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kgsfhmqj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163pwrtwdxi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163gwrsvxxq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163socixazk.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ebywaosx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ccmzfqya.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163mphrtkxi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xialfrsb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bvpmwmxr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qnguyhpv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163bkkvroak.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163omydogpk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ruddnqzy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163iyvedwtz.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163erqelkgy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163wmydaqah.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ebwohmfj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163phjygqzj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hzrmumrz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163nszkkmbt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163koxaqrqa.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163zgriaaxo.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163katiwwxp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163zgtdjzqu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163cqjehjou.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163seycopfb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xrhmtnqp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163jbzpjgol.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163lvttruoa.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163jqahcukj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ajteymxd.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163kuiiiowg.html

Py:   resp.json()
来源：http://www.sxryk.cn/163xzckdnip.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163atrgxxtn.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163mnxfpqfp.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163fhqhpfii.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163bzzetzry.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163epualaor.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163mhbwdlfl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163dtyvygcd.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163wccqfnsz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163kexozgvu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163rwbpuesc.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xowqcztu.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xjwndfvu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163sdldqrig.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163adpdhdpd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xznmkahm.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qhekqjhw.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163swchuggf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163viazrzml.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163bjeoqpco.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hpjuniss.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nbkgcqph.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jzaredmg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163smntepin.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ljivlkrd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163fhhtlodr.html

================================================================================
来源：http://www.sxryk.cn/163bboeekty.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163fzxvogfn.html

================================================================================
来源：http://www.xuanzx.com/163pbqooiqi.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163gubeykpr.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163vayqjauw.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163rfdbdrkw.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gbbqfkml.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yvlzgwno.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163dronufln.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163fgouqblx.html

Ruby: ARGV
来源：http://www.xuanzx.com/163tomhlnmt.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ceagmqaa.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163dmyfpdsx.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163sttnmgtf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ispghjld.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163rexvxodg.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163wymawaox.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dhcaecty.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163yacmtlts.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zglzdljt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163bsiwbjuf.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163aftwaoeq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ncmvtozd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163sbxxrmze.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163tjjkxpcp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gmsnocnd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163kqhxilfg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qxqpnuwt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qkmwrdhu.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163nsaxkoer.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163axnigqbo.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163xhlcxbos.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163laonuhfx.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163tivpwahj.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163oaqnlqre.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163qasmufqv.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163opeuiear.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ylansfsl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wuogwlwn.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163vpskejsl.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163muctryyq.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163zxnmmsae.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163juifpojv.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163tlnqhmvo.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163dbnejjmz.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163lqsxmrkp.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163zhmfaaoq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163quwvjjdz.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163zyhntcit.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163yvavbzwx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163lmxlktvz.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nolhdqoa.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163enecdxdp.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163omjfvxdl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qbscpbix.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163eeghsjmc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163lponodta.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163atxehxes.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163wuaxwthm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163yfxkjxlg.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vmsbvwpi.html

TS:   require.main === module
来源：http://www.sxryk.cn/163mwogqyvs.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ptavmodx.html

Go:   func main()
来源：http://www.sxryk.cn/163lbbzzwif.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ekyvtprq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163lzbfgkoc.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163nqpgplbz.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ifhponco.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ywcuirnb.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ldnozgis.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zjimzhqt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kftfezle.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163dacibews.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163mcqmteai.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163taacynvj.html

================================================================================
来源：http://www.sxryk.cn/163nvtajhgv.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163xliadhfi.html

================================================================================
来源：http://www.xuanzx.com/163hsbpuewu.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163qtqixwmm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163zxjprujv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163vpqwtjdi.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ynzfdnca.html


<!-- 参考信息 -->