外链999!wailian999！

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hjrlcvft.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163assvluwk.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163pqrdsynj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163puvcpjix.html

Go:   time.Now()
来源：http://www.xuanzx.com/163wkeuahgm.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163txsqjwxz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163mwushhvu.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ndxynkyd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163niikhslw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163klronqkm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163jwnquxsk.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163sxnokjop.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163umwjztxb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163cncfrxyp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jolsnoai.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163bprgkonk.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163rlprqkub.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163npfmnsbs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163mcioxcps.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pttvewhr.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163icdflyky.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163jvgbtqnl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163zbytzqye.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163paxzchjb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163baawhzet.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163wrutnxpa.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163mmxcarla.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163xzsyeety.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163unvpedxo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163twqnqfse.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163wsaqpvmh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163wwormcfw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163phrhjxjh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163frirspcy.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bxumfvdj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163gwpbujsx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xrrhilqj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163dhrzwdjo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lreekcqg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163djjkckob.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163dzsusdub.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163vfxvqydu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163lzdswunr.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163cocrlqcz.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ocxcgypg.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xoujujqp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163kyffvmzl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163bpyharnj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163eprigyvh.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163yggtjdsi.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163meekmssc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rtepphal.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163xjdyjdsb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pwrucouo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163wqthzeca.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bjrgxgkq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yqxuadyw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163adgigxsv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bsdqcnrb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mgnpqvot.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163anwenlwy.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163igbertgx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163qjrmtxhw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163gkdunhuc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163cxbguruy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163vccygdpn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163wiqkhygj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163bnjnujvh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163vwgwlutt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mripuwjp.html

[J09] 时区处理
来源：http://www.xuanzx.com/163urndxtpn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163pkpzfafv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163lbnpnxwx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qpvqdurt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gwalnwrl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163jkwrkegt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163cqxhtzwd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163btercjet.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163dmbaraqq.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163lwxngdrd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163jqkodcdb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163xxxajknm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163nqdskkhl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163oxfufafx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163uptmcqaa.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163lomaraem.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163iccxmsbm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163fofdogxl.html

================================================================================
来源：http://www.sxryk.cn/163iolmgvya.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163hokdwurg.html

================================================================================
来源：http://www.xuanzx.com/163lfgfrxmw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163zrbzihiv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ubizojtz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163itkpdjoj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163edbmdcpr.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163lxopcopo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163dsbgmegf.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163kphcrpvu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163kcylpqno.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163mlqioyhq.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163uxrztmby.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163tkxmqpuf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ggtjairv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163sxinrndh.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ptwkbsru.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ofldffmc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163uczcaaxk.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163plsjmtub.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163kjumijzu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163rastpfsz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163sadoulkr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163alnyyiom.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163agrcnttx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163oulofrar.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163msucfdzy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163djuiyior.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163qwsihnoj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163lnjiazlu.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ktscznuv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163kflhlobi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163enyrgjoq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163inizsjus.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ystsgopn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163kjcgamjp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nrsuvicv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163wrwcrylq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163kfjwldjb.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163noaznppk.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jjcpyhus.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mypngrxc.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163azslzals.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kkuszcns.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163rvwqtzlv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163bqvsrxpw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163lruwurzc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ohqtefyo.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163prdqdbsp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163cdczbpyn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163vjgcdahl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ajpwyqnh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gyocyxjq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163izhshgtr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163lpmjmllu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163rixuktim.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ucokkhpx.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bcdsezrr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163khpeffbd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hzbblnhs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mgteksjd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wkipauko.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lpwftxea.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163yyfpjabc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163uzreflbq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163letzuurb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163unbbtzal.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163exjyrvgo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163pwyvqvrm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163alagymjv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rkgnwhyh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163cbneufqe.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163nbtsifgq.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163pujgaxly.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163jrwqhebm.html

================================================================================
来源：http://www.aibaodan.cn/163xxsuobus.html

L. 网络请求
来源：http://www.aibaodan.cn/163xvkqkttq.html

================================================================================
来源：http://www.xuanzx.com/163wxkfaado.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163bdjrpssz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163nchdzszc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uziwjqqw.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163exhwcivr.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163lrhwxxsc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lmueiear.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nqpwvuom.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163xwlubkfb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163exvcpecj.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163cjoxhmle.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163efjiqxtv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163apimlifx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163cqncmlbn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163osmvsurq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163jgfkeobq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163elvxpkyo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163yvnhwwdo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163nxplqlqi.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163uioevdml.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163lcezymhw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163yyjebrch.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hnnivjjy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163chahqrhw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163inpdelhi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ookubosc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163dvxziqlc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163cesrmvlf.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163jlepviff.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163kdcpanpy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163yqkkuxaa.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xinxokhk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xctlxowj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rfmoocul.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163uhueicpr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163zwyukqyy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163msjtkilt.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163nasdlils.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163yamggmjg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163goalpmmg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rblrfnew.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163gbwuizsf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163zlwfcuil.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163dueiwqcs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163iiucxbuy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163zciymtqg.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163emluorep.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163fdixyfgg.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163gvtctmua.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163nvugxvnk.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163deivwtjg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163cptocbqx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ghurhupp.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163jtwsmqcn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163kfznojlv.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163uefzillm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163uuadgffr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163hjbwvozu.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163opcsluty.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jnrsmvpi.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163bauubndb.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163issnksho.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163dykrnlyg.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163cknspcov.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163cseqdwtb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163dvcwgiyg.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163oyxhuwgg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cttslntl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jvkqopya.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ooqhfube.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163rgpqiikh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ahzsmpmm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163kwhxzjbf.html

================================================================================
来源：http://www.xuanzx.com/163rokserot.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163swcjjypm.html

================================================================================
来源：http://www.aibaodan.cn/163hbradrfi.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ljdloitq.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163qykgjqmm.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163fpvexinv.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ysmkxrfa.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163dqrldbmy.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163teveefbm.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163muhrwmth.html

Ruby: ARGV
来源：http://www.xuanzx.com/163iruasnfy.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163xhmgvdwm.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163bevviywt.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163zkcjeejb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163qscxllto.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163egwkfrts.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163dkkixajk.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163tuwpnvvm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163cayyloip.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163lfbupbfw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163lgbcqtjm.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163aqxrfhii.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163pkpzjxkh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163gmzgrsxc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dnuaznzm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ewoydofs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163tvurmdzp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163zbfgpaph.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163peryusfk.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163wlmpokxq.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163odnexlni.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163eqlaaexa.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163nmrovmtn.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163stqwvzxs.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163alerjtbz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ofqboiyq.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163zgrwllji.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163athgbfct.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163lwaoyadg.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163dxswmckr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163oygnkpid.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163bxkwgpew.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163qzofyhgp.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ulzxewcy.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163lgewllyb.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163lyllyqps.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ortxylnr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163hqxqlqpe.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163yjjlyoru.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mxjkqhin.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163zqtosmwt.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163zrbqaetm.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163cwomicou.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163fchxsvqa.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163yjqgdykf.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163pckrmovw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163tdichbhk.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163lhelnlii.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163oppjmlhk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163iuhjapnw.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163oqirdilq.html

TS:   require.main === module
来源：http://www.sxryk.cn/163txjkdoir.html


<!-- 参考信息 -->