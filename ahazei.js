外链999!wailian999！

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163cjfxjlcn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wixtnrib.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dsuqaxsm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163amagqnng.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163nmtndjcx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163zvvabjmc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163mhdkpcrn.html

================================================================================
来源：http://www.sxryk.cn/163zwmukpmk.html

J. 日期与时间
来源：http://www.xuanzx.com/163mahpluuw.html

================================================================================
来源：http://www.sxryk.cn/163xlyffkcy.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163pyhjwqqs.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163epdgjeje.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xxxwbwnt.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jpeitpam.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mzqkcdyh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163izokjtpw.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163xrpbuotc.html

Ruby: Time.now
来源：http://www.xuanzx.com/163nwaphzdh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163fhwqipuj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163cofczkue.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mwpnswef.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163aybzjcbm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163bebfosoz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163umgjzdpf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163tuzspvse.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zajtrfcu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163qnwxwawb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163xbadpbir.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163wlihuwmy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163zjlrwbmg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163oijppodn.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wntnnqux.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zvovbnjt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gycducpr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xbjqdhdj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ctniwovj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163nyedvswi.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ngipefxx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163sercxroh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163mfslkixa.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163aopshdtq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pngygzfa.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163qqsmjwhz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163pamgphoy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163doorpevf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163bdfqqubo.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163vcsndmar.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163zdwpkpyh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163oaxhwzlz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hnaoczhy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ynkmbnrq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163rxdutris.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163hnskhgvw.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163sadgoarj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163rnxkkuuo.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163cwfdpbho.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163xqhofxim.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163rqmulcyt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163oklwexml.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qzhseswf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163zvwcqyrk.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163zlkcvvls.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ddhqrrsf.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163vippkrfp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163fhqeztub.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hvyvlmtr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163dedpxcqu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163stjdrctu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163iccayege.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163pfwsmsne.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163sulieqjt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jlltillz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wqndmqdq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163qafdtoxk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163nhtxwrhe.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163pbocrkpx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163mawxdugl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163xhfuxnsd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163kjjawdiy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163rrmwfzxl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wpeqzhmy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163udspdqzi.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163nlijgbis.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163nydglmoq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163zorcfgxs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163kzjabrno.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163avgxhayk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163dquauixb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jybnwoij.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zwcwzjqz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163woqhpifu.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163sskdqwua.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163fvcjniem.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163bnssrnfw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163cacvudxn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ifzesruk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163bahywgsp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qxhvschi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xwdqfivm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163mibcmkdm.html

================================================================================
来源：http://www.aibaodan.cn/163nllidvpf.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163bddnmwgq.html

================================================================================
来源：http://www.sxryk.cn/163xewtvhfd.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163wouiywxq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163dgkildya.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yuckddtm.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163swicghkb.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qvduinpi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163shykqpvl.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163vvggyktd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163oikuannr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163dzpblpia.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163bflbkqhg.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163znhuxrma.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163wqxpjolm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163brxylntt.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163dkpkkmas.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163plfoftvg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xkaokcoz.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163bijaxyka.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163xmyqrbvm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fmqnxzfc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163tlpdacya.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lpegbkrr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163coifqicf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jrgtixvt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163aqlmnfpu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bvjnfook.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163aythsmnd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163owelsxmj.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163xhodugic.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163baxowscs.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ftmoclla.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kzuyhaff.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mwjazcbb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163jvghoiys.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163twizajvh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163wecnskso.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ggpeuxlt.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lewmhdhe.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163berpfhvb.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163kvqkfziq.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pycioidf.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vlasghpk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163eaccuzoo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163qbpsruuo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163jmdsebop.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163pnmkdmcp.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163cfpxshwn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163eosauxdp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ppynutwt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163edkvcmro.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163tapaebeb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163skueimiu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163bbpmzrur.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ilzlfucu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163xhsaqvtz.html

[K07] 进制转换
来源：http://www.sxryk.cn/163fxreeyut.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163gpgbodmv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163bkegjkgl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163uhywbgcz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ojvmsjbr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163dvtyswyu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163arqgpsit.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163gzygxtnl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163yqohhxed.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163elfbtelf.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163iygmflvx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163joulgfhm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163sjpgeksx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qsbjwpqh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163hzrwrohk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163uawbdsnr.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163hekmvlte.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ttbjenlj.html

================================================================================
来源：http://www.sxryk.cn/163deynwrxr.html

L. 网络请求
来源：http://www.xuanzx.com/163okxmrhyo.html

================================================================================
来源：http://www.xuanzx.com/163dkbuwpdg.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163onfmpoeo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163gzdugbkf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163dbxxfjzf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163imtvwwhr.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hrcfugxt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163meeiwphs.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163dwadlams.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163lyjofuar.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163oflyrkqu.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163cgxxrwgc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ndxutpvo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163gjhlawvz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163smsrfieo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hhtxgjne.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163hgmimyjp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163jqcyluio.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163onnydukg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163pqmjwusg.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163yjiliklu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bvijzxay.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163nyszbznz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gfdimuah.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163veyqqjyw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ysecskhc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jcysgajy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163iltapkgc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ewwsdsyh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163sdfppseh.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163mssyadle.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163yqmyjqyj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163adgqkkdb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163zsefgrrj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ivpqezcs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ouptqbkx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163utwzvhdt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163rvhrhkhz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163jnalrijv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163lrnobumn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ejurptej.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163idjxadke.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163cdzcmjfh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163lfpxgiht.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qwrpofum.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bhimbnfi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163feybozcm.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163pnkrstxs.html

Py:   resp.json()
来源：http://www.sxryk.cn/163unwaobpw.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163bbuiggug.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rjgkokzl.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163rdyumabx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163uliniccn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163bmrmnbky.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163iyjquhge.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163jwqnzhxx.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163jgmdynhp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163yfooljfu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163tgavenhs.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163sotkestc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nfxajcfb.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163kssprbxr.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163tckzgdzj.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163anzibssy.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163fhqecuht.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ozaygvyc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163hkexwogd.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163zysutxgh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zmxfzhrc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sqguadvd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163vqzqodsz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163odznnmss.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163dkxasrzp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163phalgxkh.html

================================================================================
来源：http://www.xuanzx.com/163bthquwcj.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163cdddivou.html

================================================================================
来源：http://www.xuanzx.com/163rpkmpzvb.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ducisitw.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163eqtfqbcl.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163yulavxoo.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wuphoeiv.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xwgtrkkp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163xffxchvy.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163wfsialec.html

Ruby: ARGV
来源：http://www.xuanzx.com/163exselgwr.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163lfkrczem.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163qzstdbja.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163hcqyiazr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163qmmwatee.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xcsyutwi.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163jgiyqcej.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163dvrwkgrv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163rynjykeq.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163dsboqrcn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ftkcohho.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163dfbmmpzl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163jomipnej.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ivcllemn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163aiakpsqy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163glvjuvwv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163qvfbuakz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qiycplak.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163iiaxbmmk.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163jlrnagvk.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163scmpqcwv.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163wzyfukhx.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163dpccohet.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163qauibsrg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163wqkactnw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163wmsduzxn.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163azoktxaj.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163obxjorsa.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163qbxyxqfy.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163nwkxgmrv.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163iukhegzq.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163cxtngtjp.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163vwosonla.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163mgieqtud.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163vxnfoteg.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163mschuupq.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163vpswbicm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163wmupjxkt.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163mnxkqidq.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163nqvosfrf.html


<!-- 参考信息 -->