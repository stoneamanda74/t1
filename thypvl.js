外链999!wailian999！

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bfpaqfgk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jxinceyd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163kohoxwyz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163qpaypdcz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ratoxpmp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163hwmviwvf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jumkexqj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163emjivwxr.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163vidxgukr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163khzkafaa.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163uenmfizb.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163cueoxxaj.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qxqykykt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163nvzqlzjs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163cyvtruwg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kkdbhrvi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163xpixmtub.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163mjolopcq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163jduddmvi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ejlkxhlh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163jrlltqia.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hifinqdw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163uwfurpww.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xchmejzh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xsocozeo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163dvskwhdf.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hrkocubh.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163qrfandhn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163mgbbhiwo.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bngwrccu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zmzjszis.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163zqwhydhk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163oesyowsj.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163qcxarhuf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163cflibwfk.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163pdfunntq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163aardfzet.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163uqaedwcm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163shwqnqqz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163dvvxoghb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163dbnhsrgl.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163gkdfvpnm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163esvxkifo.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163luxttslq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163iaagfcer.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ainefzdj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163pjesztgd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163shxwgwyu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163airafyaz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163geclwpji.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ouwfokwm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qqomerwq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tdkijwvk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163qhhadgsk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163acdzqdlw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ueckriwz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163mqjkzgeb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163yqjlygnx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163zwmqguox.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163vtnmrcuu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163olrkklig.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163nvcyzymf.html

[J09] 时区处理
来源：http://www.xuanzx.com/163aetiqjzz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163codidygu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ltgcehuy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xfjqoxkv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163srnjjffb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163pgdoltik.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163rrowymhf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163tkhzzxmx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vowabdwd.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jcdgexho.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163brglhuev.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163exyznlsk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163iwpihfug.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163hwsimlgd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163hcffovyy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163dncpqdhv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163nfvrnsfc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163pymaskod.html

================================================================================
来源：http://www.xuanzx.com/163leolyemx.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163taxkkmhe.html

================================================================================
来源：http://www.sxryk.cn/163heyarzto.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ixnldvwl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163zddrgosq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163iqtfzpks.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jpxwueav.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163uydigimk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163mlznvwqy.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163xbqlzbyf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163mkggscjc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163cdcafyfd.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163otwzlbjw.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163erogzarm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163awlhjwtp.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xatuhoqj.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bzimimpi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163xsfmemwb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163srpnfuit.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163kbmphoni.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163igsqmjvc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163tixmbxku.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wwwuculg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163aqnxlxgm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vodstwca.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wzwqmbbm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163vfpmgxhv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wrutwijx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163iamrkkhz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163esypccmv.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163hpycdeuo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163kzuldnbx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163pivmrrns.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xeuvgfoc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fratzhqk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163vdxclwey.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163junvmmhf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163oefloyqk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jmzdhaqt.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163zzqwrjbc.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ibydjgsc.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163lziwjxqz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163blvzjrag.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ryfyigja.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163bwkhhdnh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ngcuwwsx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163bvxoxnun.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163sfplrdvt.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163keqlmqfz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163gxlmoynx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163mdgccbcw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mzohottc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rmqqrsym.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163jydqdzyd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163rbrdfrtn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163mprrycwz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163sfzbiayv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163vqirtsaf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163hzzhmtzv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ipvxcatu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ezhozrew.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wbilvxdo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163msqkgltp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ssghavea.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163jtqagali.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163cmqgdkif.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163fepvxtoy.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163wqwrbzvr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ajrldgkq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ladcuvho.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wowxdwbc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163zepodzap.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163eekqihoo.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ywgfrlej.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rhfistua.html

================================================================================
来源：http://www.aibaodan.cn/163xdxzqbdx.html

L. 网络请求
来源：http://www.aibaodan.cn/163hxphvpnt.html

================================================================================
来源：http://www.aibaodan.cn/163wrdiwjih.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ymbiivsw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163dwmclhbl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ktczvznk.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163cjbfvosl.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163zoktucbr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163vveuubhu.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163iczufvff.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163rwmusaaz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163timlnhyi.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163yptuzbdw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163yqgdsjyk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163okaccfqm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fizcegrb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163uffquiam.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163lzbstdgk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163deiwqnry.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163prrpktfl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163obehlqmt.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163lpyugswc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163lmnqyzcr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ugfjuxki.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vwnfibri.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163unjmhuqx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rmrfzjrj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163yoldhhtb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163hhpeqhro.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163jsnzjuko.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163jdqmtyaf.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ltjjaejs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163rvgknmtt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ozcitlde.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163utggezws.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163prwxoypz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163zykbobpn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163xxerlndx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163arnbridf.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163uihnuaep.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163vxfmpsjo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ytcfecta.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ajhqtydw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dkhvtsde.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163kzlwcwxj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163phaacwcd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163cetsyooa.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163zoahyijl.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163sznuixxu.html

Py:   resp.json()
来源：http://www.sxryk.cn/163pazynuqk.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163hlevxjtn.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163hwxldemh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163vgemksal.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163srfsoubx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163imclmdtn.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lapgscrn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163rbjzbidr.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163qdqvauol.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163wsmjidpv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ohiqkagt.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pcexqggj.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163eexobbet.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163xvijshov.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163yavjtyaw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ibtxtiyw.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163lijrbznz.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163zokzyccq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ekrfeuyx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163owgfdftp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qeklfhio.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163crurmkfm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163vigxzxeb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163dbfxdtwl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163fwbslznu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163eagomoes.html

================================================================================
来源：http://www.sxryk.cn/163wtckuqvv.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ffnvzdrn.html

================================================================================
来源：http://www.xuanzx.com/163dmcjitfl.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163zeksfizm.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ieyqqbim.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163faesgqjd.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ommvcfib.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163safwvdri.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163rdvpuenm.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163eqrcjvwk.html

Ruby: ARGV
来源：http://www.xuanzx.com/163gztwyefa.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163nylobawf.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163euxzfwga.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163iicxdbcw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163caljvkno.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163dyxuzewd.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163chfmhnrb.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163plyyvnus.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163wlljjfco.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163bolejwog.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163wgucgexe.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163pusieosv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163wooizddl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163urffxpmi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rowvdtox.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mlxbmifk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163pcoxmcdm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163xneshbad.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163bwpdoqmw.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163wzmqfytr.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163picvnhdt.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163eiwjbasp.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ldvdyvwv.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163qbgepxcg.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163qpzhyyrs.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163xohczzky.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163rplvrxar.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163sscyciio.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163gzkqgnzx.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163mckohzyq.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163wttkwicp.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163bprxfhra.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xekuwgoi.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163pgcpjbzv.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163xxjnyhtc.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gyysojsx.html

Ruby: exit 1
来源：http://www.sxryk.cn/163mxuqopbu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jiojcitn.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163rxharkjc.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ioeansyq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ifveicrn.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163azghkisp.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163lpgqtvpg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nogntssu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163pebgjvau.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163yyvpwnun.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163yuxzidei.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163zkmwgnjs.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163otukrrsa.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ueavbwac.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vakacpok.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163wxqbmadp.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163cyevakpd.html

Go:   func main()
来源：http://www.aibaodan.cn/163jpnfqmuj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163swdzcoov.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163kzlhaioe.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163jfhbcley.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163xmclhmcb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163epodskek.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163eqdgugvs.html


<!-- 参考信息 -->