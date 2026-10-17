外链999!wailian999！

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163carflkxr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163gdxxjbyj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163rukxiwwp.html

================================================================================
来源：http://www.sxryk.cn/163zailjppy.html

J. 日期与时间
来源：http://www.aibaodan.cn/163nduqwezu.html

================================================================================
来源：http://www.xuanzx.com/163tawsardh.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163mrczsanz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163upciddvy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163uookouvi.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163aayyrnlb.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wcrtasgc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163kokcxsza.html

Go:   time.Now()
来源：http://www.xuanzx.com/163fmeuqunq.html

Ruby: Time.now
来源：http://www.xuanzx.com/163nlmwnxlr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163erlielkb.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163dabyrixw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ivrhjkaw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vvjtjbak.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163mevohenw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163rlwkaaah.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163gmjlbole.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163decogccz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wxzhknyr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163uatlnwqn.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163malrrzgt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163vhbxlzsn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163jsjdjoxu.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163oakkkoty.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163yxuiocvf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xwstwbxx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163bylxavxu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fwsaecwa.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ozmxrnzv.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163vwhmjzhn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ozyshrof.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163whixhsyr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163jhhkmszs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ztahcbya.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ydlppyjr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vfjcepsx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163rzhpsyma.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163mvcbcvmc.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163evqlydlc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163zkdfrvml.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163pxynmbky.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mppurwvv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wkswevkf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163cqnqifdq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ekjfxaon.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163kwtgdcly.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163nkcssnye.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163cchejfbw.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163xgtwytxr.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163eyegirxd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163dudkdeag.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163cktxylqz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163osdjkoem.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163fgkfmees.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163azlqdwql.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163qawrnbyg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ctteefab.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ntlkewmd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ziaewqst.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163swrysqiw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163uvoltnmh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163zoqmmgwy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163wqqfxntp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sphxfaym.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ykebcwsx.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163uslblegx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ehsppvyj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163rgohzscg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ajaevktn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ffnkhvze.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163bokjsbga.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gtbdebhj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pvrjkwhn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163acsgnzvv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163lflngdbr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ygstrxej.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163koxoqffd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163djykulyf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163psebxuoy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163duqxjwza.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163cidrutpb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163tgarrved.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163mhjuyufd.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163blqnaeoj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163nrjzliuh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ykjikiwo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163hoaqrjxx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ipkigosh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163dwfwsofx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163jmeibcvj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163wcxwqxuf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163wdziuttv.html

================================================================================
来源：http://www.xuanzx.com/163siidyhbu.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ajvsgfdx.html

================================================================================
来源：http://www.aibaodan.cn/163yroyjkaq.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163zsuugmlh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163facpqvrw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163fgohqlta.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rzerlgxb.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tuslknuk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163isveegrb.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163xivwyccr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ntrhkqzh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163rjpsoluo.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ryfkegxc.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163dckouexx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163aisgzgza.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wfkzrvpk.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163eqtuhsbn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163qgliuepf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pdtzilvp.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163gkyimjke.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163pjbvylio.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163bayaujxh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ehweljcq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163mnsnvkew.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tkctdvih.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kpknvqst.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163guqkslti.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163crqqlhqa.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163jphkkfsp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163qirnbtno.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163eyafjryz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nitizrgy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163kvnlgifn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ogbrkdjs.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163uwlrserv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163rieeuhbt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qsocbsjl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ooyosujh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163hzcenkly.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163nkubtodl.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163cftoygey.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163yrrahlqb.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jojpzkcx.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zxqabnak.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ehlzqwfu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fwwesgbq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163mbmiwhgo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163apkawtdq.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163imyfygwd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163cgznctbi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163lwlypgab.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nvaheukh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163rbbzcxyu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ugeyyyfd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163dskcklsp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163flhotzpe.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qiaxbnby.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163yzeqtsyh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163aumovyue.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163bbxsinoo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163aecxzamc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vgnqbyxf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163awtozopl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163akjqdndt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163dyghreob.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163mmigqwqj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163eyxdikjr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163qizdfqdt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163rustpkpv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hozwhpae.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ybqgrvrb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163nselhprn.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ukpizdxx.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163jgllqmos.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qqzxhsad.html

================================================================================
来源：http://www.sxryk.cn/163qygvmhis.html

L. 网络请求
来源：http://www.xuanzx.com/163uwfqsbwb.html

================================================================================
来源：http://www.xuanzx.com/163spdbgkyb.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163qfabdupd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163acvtmvbb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163hrnjdcwp.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163tfldjhwv.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163foobsbll.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163jcbgjkrf.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163dysehgoz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163rathzsyg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163onumlyyj.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163jrwqgjjc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163asodbecd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163kicjsmig.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fwezzdfs.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163glzikcqz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163klzwaewl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ihlcrzqe.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163hludbums.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163juenjglm.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163zesjyedt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163pluqosyq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163yizzynzx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163yjwkwngo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dgqbzmxr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163wdggevps.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163yokuhaff.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qoreoemx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mkecxyug.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163afeyxgzu.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163uobubzyb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163budyjcha.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ezgasrrn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ugcrmeij.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163njogyjzc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163hquekptp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163nzzcxayp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163lnrbzgno.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163xaojmbhv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163czewamex.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163woefmtzs.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163aioiysiu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jwgigrmy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163cbqcozxe.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163qnvdrljt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163bvhpmjrh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ijgymfox.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ntibwfeo.html

Py:   resp.json()
来源：http://www.sxryk.cn/163zpfaahtu.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163crxramla.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163exlhjocr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163vnfoyafl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163fctobfke.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163gfhrvney.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lcokwlqo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163jfasbkrr.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163nrwmjmyq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163tuaebkbo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163vupjtydh.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163oqculgbd.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jgvflacx.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163zfnhkuka.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163kamisfhr.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163hvufsppj.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163wqnwlaco.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ghiyjmdw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163mulfyzah.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163kmcpbnfp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zltlojlv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tsjioxtd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163bchcrfdo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163odqhsxtg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163sazlhszh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163bamydpyw.html

================================================================================
来源：http://www.xuanzx.com/163jyxzutin.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163rxfcofit.html

================================================================================
来源：http://www.sxryk.cn/163hdetgstr.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163igdycnsn.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163zyxfgzlm.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163rmdzvcfe.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sadddjqk.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wrwmjhxa.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163wzqvarjd.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163zxqzznhj.html

Ruby: ARGV
来源：http://www.sxryk.cn/163vjlvmfgd.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163wylzedxc.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163orfodcsz.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163svroddqx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163kikqcngu.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163cdrzcrnr.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163thetousx.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163zbsqejlg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163kfcntvxt.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163otuplbiq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163emlptvsv.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163xfwvclic.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163bnvduvqr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163sxjfidcp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163deflirhb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lrwqgakc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163stvuajli.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163uzuhyohs.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ilqrdabw.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163vypzsmdj.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163jxxvvhyv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163xptysnhh.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hqzgevfb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163bljpezcb.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163cgfvhztt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163btkszfiu.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ldxmkctu.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163zslyfsrf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ekqjtfcq.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163qqfbytex.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ieneqzod.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163hkoxlppm.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ondlhzyu.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163uldaqhtb.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163gqnssvgk.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163lkuxswrp.html

Ruby: exit 1
来源：http://www.sxryk.cn/163iqhpxqbx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163jyoytezc.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163rcsktxxv.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163imaanfcl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ymqbzasv.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ecgdvieb.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163rcjqgrts.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hyvjuwmj.html


<!-- 参考信息 -->