外链999!wailian999！

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rjdhxptg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zzvjntcf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163istikyiz.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163vtjrinfz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163qdsgtrqt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163kgcrtkcp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163iprwhflt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163infkhphe.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163lgosyosj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163cwpetzek.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ulpukksy.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vpbzppsb.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jkkpafra.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ejmtilgh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163vhuwetft.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pqvuurma.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xranbcii.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163feunvyns.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163evdjiycg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163hofdjadk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163eordauiy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163enmsyvrb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163parzwiyj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163qkobqymr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163nrornhoo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163yqcndvab.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163rwwoqqcb.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163xwhnavay.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163bzugyqgd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163inrvxksf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rospyuxw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163mxuxilub.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163lavrfurq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ufgiyznb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163cejfhdmb.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163kiykmgvh.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zbmtlyyw.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163smuwwxyx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163nzbageat.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163iuhyuqlh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163lfkbyvmj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zplutjir.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163arlhiwvx.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mfwotpeg.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163wihcuvnt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163giwdpkis.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163luumtose.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zhagtorr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163efbtacbd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163onxngmym.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163axzdgzpc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yfgwwmto.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163oizgcvmw.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ylxsiakt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163lgbvsqgd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163oisoljko.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163sztqedcq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163zpjiddou.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163cvcsfynt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qlenbqoo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ovnywlvr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163hqraeiky.html

[J09] 时区处理
来源：http://www.sxryk.cn/163pfbjgmhy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163yqsscwri.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163cmgwvkbi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ircsglgc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163sshlolof.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163givsuckn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163kneuwoon.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163oonllryr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ulhbiigh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163rakoqgoc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ztjdosxg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163btyxmube.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163xvyhdrzc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163unjfoxix.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ozjiisqa.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163znbjwkiz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163rpvvtzwr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163tltzjfby.html

================================================================================
来源：http://www.sxryk.cn/163tvggkbmm.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163yadsxymm.html

================================================================================
来源：http://www.sxryk.cn/163lllkeyet.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163bncyiqia.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163fkpebtzz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pcjvfjzt.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xgsgngfq.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jmchimqn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163tppnoxxv.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163xjiicfon.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163furwygbg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163cwqfxnqh.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163euddayml.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163dxzbezjs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163iobaleib.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ahpzeuyc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jifkzday.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163hkodgush.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rwsvlpvp.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163lzndacai.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163uczfymvo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163xasrgprj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163cxqcahyh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mutshaxl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163foislsrm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lljsqyeg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163voqjqwos.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163bmotyswy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ahpqncad.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163cywhktrv.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163kvymmgbc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163jcdrhzcx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163rnlldsne.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ruojusmq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vrqqanxj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163eoxpogsc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nwrgwswt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163lcqmxhmr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163uxeffxrr.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163suctcfiu.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163mogqkerf.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163oyflugzk.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wjzarevc.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fdioypgr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163lutwljun.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gjzxdupy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xdkycevp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163oengoahv.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ksaccjye.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163xdcfuzbz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163fqpjldzz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qdkaqcnt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163plfgzgjw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163hbclwnjg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163pxlemwhv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163zbuakhlu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ckxnepwa.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163gtoieucf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163wpgczfbd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jzqotyji.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163unjupmjg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wyjbsmuj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nareslap.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163xphwcuwg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163grvogned.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163rezezkuq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163rgtrjclk.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dnryiiqe.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xssbxlzd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gjezlpbx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wrmkzhqh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163wrusibzp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163frcbztsi.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qpsfnuyy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163kjammlup.html

================================================================================
来源：http://www.sxryk.cn/163jzxsbkob.html

L. 网络请求
来源：http://www.sxryk.cn/163ibnjdvxa.html

================================================================================
来源：http://www.sxryk.cn/163iqybmvou.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163zmuderhx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163pqchkzbx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ijelvwrg.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163syidpbge.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163tqnevufb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163sravwzjo.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163xfztlzdw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163jxowgemw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163oazqajey.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163mcipuewg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163qrjmxcoz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ifujxsab.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wbbywspe.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163akeoaemg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163vmlbjcxz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163eeoaiikr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ujvrpifc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qoatrayg.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163efqkkclz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163qbspqslk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163tyobztcf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ooeryest.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jsdgxzrn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163olsvbtod.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163tbddzesb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163tlzrnbyp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163tsjyiapn.html

[L04] 设置超时
来源：http://www.sxryk.cn/163nsnoqgpl.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rattnben.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163kaulwuzc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ugmapjsb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163whalfqpz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163nmyjgkom.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ybulnziu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163molpwgrt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163fslwkapu.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163pdequjgw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163tegalfqf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163egcfwgtu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hjfjkoti.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163porrnmmm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163oonhelfz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ztxshnkt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kefmaiic.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163zehhedkg.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163cxgwwkeu.html

Py:   resp.json()
来源：http://www.sxryk.cn/163vflnwswx.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163rfczmzqy.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ysyfsltt.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163kgpxdlyr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163qadropyl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163hecmcupc.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163mszrnafj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163nmoetmcq.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163opjoizis.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163dbokslht.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163uxduxbwb.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163edgzbhnu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nljkwcug.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163efyugijh.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163dospoetx.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163lznmbvac.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163afkhcnyg.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163yotdcnag.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163uzehynkp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163gmaidnkn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zkybxpgu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mxlbbnir.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163qjktqydc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163iaaqryeq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163tayuoqby.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163lxqgulft.html

================================================================================
来源：http://www.xuanzx.com/163dyhshyhm.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163zmamfmsj.html

================================================================================
来源：http://www.xuanzx.com/163fdlkiadx.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163kwthceki.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163fnpwredh.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163tucepbmc.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163eucaiwfm.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nfmolcti.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163uvnurkhe.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163uermnvvr.html

Ruby: ARGV
来源：http://www.xuanzx.com/163pdfcydtl.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163gjkfpkpc.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163uuvchild.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163gyarhrrt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163fyusvfbj.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163igzcoeca.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163dcwocalh.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ssxgwtuj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163eljrvcnx.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163exirhoft.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163xrmnjans.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163qwziftsl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163dthhpurg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163gqeyboxz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hvkvfavv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163unehvbnp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163mlaiwwyw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163laehmogk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163nkruujua.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163xqlgceoh.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163yaawcfyy.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163gmjqxtuy.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ngmjpfss.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163nbavbsis.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163nigakemt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ezczkcjv.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163elazrguz.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163xneqqfvj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163tizdsgqx.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163hvnpecfh.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163vaczkfks.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163jhxdkefb.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163mgnszgei.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163gvdonalk.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ghjjwhjw.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163soffkqqq.html

Ruby: exit 1
来源：http://www.xuanzx.com/163kpzmqzvu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163xnygtqfr.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vmafxztf.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163oiwhxoam.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163rkcpftst.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ypmdggep.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163tqqbzkli.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163sdrsrjkf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163lncchmvq.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163etbbxexe.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163wucmefkk.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163vrjmchke.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zxombiko.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ezrqygnn.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163lmraasww.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163eppuovtt.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163jnruvogg.html

Go:   func main()
来源：http://www.aibaodan.cn/163fheqelyl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163wpxyvrvb.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163twbdnrix.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163bndurqnd.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163oqvuizws.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163wbqfjrhk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ctmmeqky.html


<!-- 参考信息 -->