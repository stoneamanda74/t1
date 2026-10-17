外链999!wailian999！

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163pabbebbh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163psapgchj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163labfniob.html

================================================================================
来源：http://www.sxryk.cn/163owybkmbn.html

J. 日期与时间
来源：http://www.sxryk.cn/163ojtmowye.html

================================================================================
来源：http://www.sxryk.cn/163sdwgqasn.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163hqxnvjot.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163duiwkcfs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163deuerthk.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163sazpqwgn.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mtumilqv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ddglllmc.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163hikrlbab.html

Ruby: Time.now
来源：http://www.xuanzx.com/163tcmildgs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163vnkcmlhl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ikcnxupv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yahahzew.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nqkoalnt.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163uzchcoei.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163viuglybb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163dxuvejil.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163lpgyozpv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kzcjeebg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163oziucpnt.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163grxediek.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163pbibskjw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163pbpjxvox.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pxcblwbc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lzbxyqhh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163wossxyvh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163comzfwlg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ecxlyjpl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xvjeuvep.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163khwnfskn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163ptaoqvfv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ontlohuj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163cmgdombg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163irzxmwft.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ncqledjj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163rxbfxfiv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163anxkjnza.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163gpwojsvd.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163zudeyfzf.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jgkiictj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163xvmcfrwv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163efkghubr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163raswxxzy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163iaojgnkv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qugollct.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163kppaclka.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163esyxtlca.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163sesdhwou.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163wjqexkbb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163oargqrlb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163xlftjafm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163cvxyernq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163kttzuhoy.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163pbkreiqh.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ihhxtmed.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163danfjmsq.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163zfhsjxzt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pxxazids.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163lkkftvxn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rfmoeges.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163skfizeyv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ahhvatmj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163jcdimeif.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fhsjfokj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163icgmqokd.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163hgobpupz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163zqllqmmx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163oxdjhvzn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163qbhkbccc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163cqgurrib.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163mozhgsyl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163brgwtjrp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163gozipoaw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ayrgiqpj.html

[J09] 时区处理
来源：http://www.xuanzx.com/163eetsyqky.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163irqsdogr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163poupbafq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163spucywde.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163iofyjjlm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163rjbsuwme.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163bpnxepeh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163hzcygcol.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163sfwykvhv.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163usuqmwcz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jvbipzrs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163skhanetp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163xloytujw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ssryogjr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163jvzvrhsn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163eutjcoea.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163tpryudkn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163xjpqnngl.html

================================================================================
来源：http://www.aibaodan.cn/163ozlhrhpb.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mwfkzovh.html

================================================================================
来源：http://www.aibaodan.cn/163mrectnfl.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163qyjbhmjv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163nufwqsfs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163qvjtbqxr.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tgfrablg.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zwvgarje.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163xysalnne.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ydqdkzpx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163qibtgebq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163lghuwizh.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163scxdigql.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163icqltiiz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163gdmbaafd.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rupbottc.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163pmdubzxj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163dnyggjjf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jhqwmyxx.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163agmnvlxc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163hzspmezu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163giukxdte.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163othupktx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jgmumvdw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163crihqzmc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cxzmonmt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163hzjijoeb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163flkpkwji.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163vkaxsdvj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ueprmcxg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163cbccrfhg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163mrwveyoz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xkuvdaos.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kshvtjuh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rsuzxplq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163frjzxtha.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163eihegnhi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163lpulfhzs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163kvqxlwgh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163axohnzxm.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163pyleyfnz.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163mncospqw.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163psbavdnl.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rchwixzq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163grhvokwx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ifnxhqfr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qumkidfw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163bzporncz.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ongxkyuk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163lzptingy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163xmrpydtp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tzyardel.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163adxgslxw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163hdvybckf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163oczckciv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ehxsessk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163pkimxilm.html

[K07] 进制转换
来源：http://www.xuanzx.com/163msovqcdb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163gheruona.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163eokxasxb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pvjqqqvm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ablyyopb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zkchzguh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163uxsoqfda.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163yqbjqaom.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163qtvjeqow.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163wogahkpk.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163rhdokfwm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163lxrrjtjn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vuuxjtqh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wwrburas.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163fcfztlrj.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163nezdfzuy.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qkxgwgos.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ebpmhsix.html

================================================================================
来源：http://www.sxryk.cn/163nmdlearh.html

L. 网络请求
来源：http://www.sxryk.cn/163vdflefpr.html

================================================================================
来源：http://www.sxryk.cn/163dwziyxed.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163yrawoife.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163moxplbje.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163weifbmve.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163zaxrqxun.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163uqlxgqrj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163nrkzqnpa.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163byszpkgh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163mgquovtt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163laledzhg.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163myhulorg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163oflhvktn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163iuzeuebc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cftqjtol.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bgpcoopk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163mqyamgtd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gsxpchiw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ztahsagx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tdihcjmu.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163gjebpctp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163wftmnkdv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163tvpgounp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dimebyra.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wudwexvx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163tlprfrrm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163uoapfixw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163swfvynin.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163gjewgyuf.html

[L04] 设置超时
来源：http://www.sxryk.cn/163rhzzdpyj.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163pnfobqrq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163yvfuylcl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vdwnpsic.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163skulaqam.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163yhjnktad.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163crixfjxl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163sexamdwi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163fyqbefps.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163rrqwbkmf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163zkondjmy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163pkgjweuq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bzobwnqj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jyhmyxoc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163rsgqtmuo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163kyhggvmo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163vljgpjep.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wwuftkvq.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163hxaylund.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jxiialml.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163tuwspavg.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163rtjpciul.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163jsdpycup.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163jjksnysc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163jdixgrvl.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ifjttxph.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163zatpbbjx.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163rizuptmb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163wxhnxrjv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163wytpsssa.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jonzrswe.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jtwauskq.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163cnjmzboy.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163daapanxw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163okvvvxod.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ffsvxqyc.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163nrgrouup.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qzkvqkhm.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163xxzgtgoi.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lqaxusqo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163innvhice.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163mtmktkli.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qvznwtxp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163kmckonwh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163bxhytovu.html

================================================================================
来源：http://www.aibaodan.cn/163ojrrakhr.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163iudvdhsm.html

================================================================================
来源：http://www.aibaodan.cn/163llkjumve.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163cztwdweg.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163qokbkfjs.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xdakfpnf.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xpkjkuhl.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163dmhrgvrq.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fgjglitq.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163plnxhcpp.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163npjcdhkt.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163widxobev.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ohlsazfk.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163hbexfmnq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163kgsdeaaj.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163whbuddhr.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163yccvqwqu.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ookpjvvz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163jzccpqfh.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163zsngjftj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163herqhpnw.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163fjrwmrty.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163lvsgfwqi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163yttwsouh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163fctvzhxi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163thuynrsw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163obrzvzvh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163mggzffxw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163srcbmjxf.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163wuzmwksu.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ypusyvtv.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163gzdlpjrn.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163akorwfpz.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ocljqcft.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163yihacetb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163rnorcuql.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163yaxuvmpf.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163pgmcazqa.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163vdlnselp.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163bmnuajrb.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163gwqnoloo.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ygkybkwh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qllbbwsv.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163nwtcpbyb.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163csqnugbt.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ofhbbwkt.html

Ruby: exit 1
来源：http://www.xuanzx.com/163kbugnbwb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163mpdswapj.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163zwdpciho.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163oxloobnv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163mpxpjcey.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163gmfazuhy.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163jcjpkkjw.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ffreczxf.html


<!-- 参考信息 -->