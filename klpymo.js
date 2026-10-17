外链999!wailian999！

J. 日期与时间
来源：http://www.sxryk.cn/163cuhrkvaa.html

================================================================================
来源：http://www.aibaodan.cn/163ymehallk.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163jnnpxczl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163nuikazcx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wvjortxb.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ptgayacr.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zloijybt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163qszxoeri.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ytepwwcd.html

Ruby: Time.now
来源：http://www.xuanzx.com/163qzlqradk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163xujgkcqo.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163dsvpahzf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163tyuqirdl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163tnueucvm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163bjzwbnfl.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163hkuefigz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163qyitjaln.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ojxivqwy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wlejrlyr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163yqwsmhyc.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163hkmyfnzj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jwfhelqb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163dtzsnbld.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163dgqzwqhb.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163itvzgbsn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163pfqxikfs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163difczccr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163udnnhqel.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163sjgnadeo.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ynxpyqlf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163nbobxiok.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ajjmxlll.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163omynmnjf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163osfkggpr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ttqmxuth.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163bxysrlbq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163tdwvvusj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163feogbhfc.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163wgdjlgtq.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163gwljunhp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163vupjyqho.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mbeucadg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dijipety.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163rrdggffj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163hkyiuava.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163wacaavlc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163zurftwbz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163xcjnrwyi.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163cpnhpdgy.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163emlcyspv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163zqvsgiek.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163mvoeuxbc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ajzimvth.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163xwjlaslp.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163dqicjitv.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163lcweykpu.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163lluusfiw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jnfnrtey.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zjvlgrsz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jdfagtew.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qesvdowr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163zvzjchka.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163hzjfvprf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jmwustab.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xchtimhm.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163bahafphj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163pnfdhhpd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xoxmztnm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163qiyjxibn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163rtqrrkht.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163jtyrzdbe.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163qvauhoud.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163vpwgjogm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163slcrjmjt.html

[J09] 时区处理
来源：http://www.sxryk.cn/163glwjeqqd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163bntxyief.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163lxehmwak.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wgpgyvcs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163veudkydc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163mhibtcue.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163yynvrfbo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163abjiuahu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163sbkzpgao.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163tyvmuvae.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163axdabvwf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163fxoyzgxz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163dxbebmhb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163kbwxzxks.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163jxiszrny.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ujwkcfxe.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163bakprgdw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163gymcjflv.html

================================================================================
来源：http://www.xuanzx.com/163avupxelv.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163aptaogop.html

================================================================================
来源：http://www.xuanzx.com/163ofdtkoax.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163bygkkkgk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163otgezfpa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ujqziwuq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rknmthaz.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163faiufnjz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163rnbwqrpq.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163nyjdagbz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163gfwrxbyx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163kdnnhqek.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163qcarulxu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163bwxeqkey.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163tnzyswln.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163muiocvwj.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jxltqkjo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ihxnhbro.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cneejumx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163unnxrzhb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163akyxjclv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163tfpziwys.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163bmykzzqq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rrgopxhl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mdddcyuv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tqbgmozk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163piffcdyw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163yokoudka.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163kovuemkk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ufaraali.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163qoskuuvl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163crfifjhc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ilnbuece.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163edmckmcw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nltgratu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163pdfdagoq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mymnzbcz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163jasnnphq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163mvcdrqwf.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163dkzhywwf.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163bzjlbalb.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163meinvjqg.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163eizcgxdk.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qnnlhwny.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163jwpysvxg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163nuljjpjl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163fxvtjbgf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163zwxgkqci.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163cbrntshl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gygmpcnx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163susjxbvz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jzcqxhmp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nnstnnhu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163omlfstjd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163piszcuqc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163dlgcaiyr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ztajqkyn.html

[K07] 进制转换
来源：http://www.sxryk.cn/163cexrlqth.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163euyzoree.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163crjfnvoc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wimozuwt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163otojphdi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ahdfxgwc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163bsfthoyc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qvwizsmq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163myxtgxjl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ienuwcpz.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163eeobaudo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163hmmqkwed.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163khecscny.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gfbrnumj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163whsqedks.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163rmlkadib.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163lxpijgcf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163mvuetgdv.html

================================================================================
来源：http://www.aibaodan.cn/163kmmreusy.html

L. 网络请求
来源：http://www.xuanzx.com/163zqovvlty.html

================================================================================
来源：http://www.sxryk.cn/163tnrqajni.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163gntteumj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163qnhglqmq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ykmwhflk.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163kkuoelgp.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163xunnhyvv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163pkdqgqrx.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gfgmybqo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163opaenjwm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163sonxjtsd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163jbmjfpuj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163oovcmueb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hymonrry.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ewlxifzm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ssgiyxpz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ufcykhry.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163tmxooqas.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163utkwyrmf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163aeagmrvx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qbcpxllf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163uiencfvd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163kvabgcsu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163aqzzfjjh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163plkfjcpl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163uirjvtaa.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163tmxvjtgy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163xtjdyjom.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163uvxdmnfp.html

[L04] 设置超时
来源：http://www.sxryk.cn/163indprtps.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163hqpkftfi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163wttrrbby.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ijqbpvml.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163gsnlhtti.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163teirwzhd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ocpjwazp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163fsbrkuya.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163dzqcaupe.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163jnavisve.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163hczvhjkf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163rlnwhkvq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ahsdsvto.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mppaizan.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ijvyfbsf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163cvpgwxlc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163htwepohc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163epcxfjpg.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163pqulevtd.html

Py:   resp.json()
来源：http://www.xuanzx.com/163qusruxli.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hwosxhdy.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163fmwxqhmv.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163lmepxwiw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163eozsjvke.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ideezvcf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163tmrbammf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zpjujhcm.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163hwwaeqgi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163mtmwqmbh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163kxovhsav.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wzwyepgj.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nklwufdm.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163cwrpkzcv.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163jbwaeudc.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163zjnqtgjh.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163zsjisgpz.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163qwinsxaz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163kvssvejc.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163qazrjjnq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pwvsiklc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vbigflzn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163thwxygkt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163wqbogyce.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163zwcpqkre.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163zpjxiwwb.html

================================================================================
来源：http://www.xuanzx.com/163qywjtnjp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vdpynbjp.html

================================================================================
来源：http://www.sxryk.cn/163nlebbfhs.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163bnoewbzu.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163gettqiri.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163lxmpoori.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163oezvwcqt.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163rmzqcnit.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163gxjtvjpn.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163cflghfbs.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xjgtmcgf.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163zsdyujzc.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163opsnnwxj.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163xpuzczcg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163xwylvfpb.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163naugbamp.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163srpysdip.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163rktmhilc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jxdeyaln.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163zsrlhrez.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163acxzwxio.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xlkyetmg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163zjoylrhn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163hcttlkil.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163cxbeinzj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163otckhdui.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vpeaacut.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163xvkmkemj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wmfohjdq.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163akytdwol.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163hbsgmdkd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ppceqhbe.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163fdolgoni.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xiwckpja.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163iqzfeiui.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163jmkjlicd.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163hdtzpcsd.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163rlbbjnsj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wyqndbnh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163itrwwujr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ifofftkq.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163nupwgcqt.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163tdiwcimz.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163vjlsxkdo.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ormyvlwb.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163lozyublm.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ornumsrg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zeccygbk.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163flzfkmbl.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163uhievnnd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163sxfshzlk.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163auffjdkk.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163zeqfbffw.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163qsxolepd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163fzixgdjr.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xdkqcgmi.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163mcqpjsar.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163tftemvtp.html


<!-- 参考信息 -->