外链999!wailian999！

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163chtumsqb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163kdqpvkyh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xqshesxr.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163plvflkes.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zkywfadc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163aqgevnzn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163xxsjpeyh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163fvaqvmrn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163fpnvsear.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rmybhltn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163fcchczec.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ahwlrufn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163oqyyckii.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163thktjgac.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163dfliihzy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163dmosesuf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ggqalocp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163mjoaoqnm.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163yqlbbldy.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163rmpwuqjm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qgsfawwv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fyijxqao.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kwpedigr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163rrwflmoi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163indwpqxs.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163dhupwknn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163odyyulcx.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163chhbcuki.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163quykavdq.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163qyjmslrl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163dpkstyuu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163jidrclhw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ssumkxta.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163yecwqksh.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163qrnauqhu.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163rlrmguth.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163nkazggtp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163puvmseuv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163xqlcapcp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tjzowhng.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163dngfovpq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163cguqeutk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163kypyjzog.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gnwjzmdl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vusjnnzf.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ybccfish.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163hsfyepje.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163gjscxkre.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ninhbvag.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163wkgufoxl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163nxfkcdab.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163icxtyopq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163rsapvjrk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163lmoysnho.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jeojdxng.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163swamcxjc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163acxtlznc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163iyxpzton.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163porhwodn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163xwvehvil.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163idazstuk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163hvzaihti.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163otzqwiey.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ayltpbod.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163cwgtxmmc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163kxaqptrk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163vqgmscpp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163oqpieomr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163hidsdqou.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163kxabrepe.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ixgotagf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163denyqbsq.html

================================================================================
来源：http://www.sxryk.cn/163wlepjcvs.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163reurpsab.html

================================================================================
来源：http://www.xuanzx.com/163fqurnmxl.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163xlztesjk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163zyarloif.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163budduxtd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163oharujgl.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163apfkhkkc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163wrrokkmi.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163nlhtluzb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163mcfjrtiw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163faclfcxq.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163sazfdcur.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ebzevzlj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ueeejzje.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bhsftmje.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yesfgtri.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163yzpexrgi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uikkmcqv.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163chtbvejh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163owtmiyin.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163aypbwmei.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163llfsodif.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dvzkdejx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wnhlcrnv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pmxbpwwk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163iuxxrdkh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ltxcohli.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163dcxdulwg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163cucxplzt.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163mmvbyfcx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163bwsfkfum.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163srbpguuj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qtmqxicp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pnlglvjn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163peyuzokp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ldeoxtle.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163isbeusdj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163quxubudf.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163wysywuuy.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163pqkkoghy.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163nndsltxr.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163yszsromg.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ldibztqg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rousnsmz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163vpzrznvi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qvmiffmc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163gzvfnbwx.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163upqfyggv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163oobxlonx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163kcfakwsa.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nudtbrmr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gtiaivlk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163olhaofrg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ddpafvmh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163hqezzmlt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163krpjuiyc.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163sbgvassu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163sapjilxs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ninbprgg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yrcjhodg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wkaxhqan.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163rpwoxgvn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163hnijnihs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xrysuqrl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ojavsmvi.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163yviupywi.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163zssoakgv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163grcnjbxt.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163oggoomlj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ozcywlaw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163qqvfxtod.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163dghgcpwe.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163neecqloi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ksmmqmhc.html

================================================================================
来源：http://www.aibaodan.cn/163xrpfnqac.html

L. 网络请求
来源：http://www.aibaodan.cn/163rwpljklp.html

================================================================================
来源：http://www.xuanzx.com/163vtejozvk.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163itjfbykq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lngiryfo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ywdfbyas.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163zitnwbkc.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163chnwtyqb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163gropsytb.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163zjnwzlmm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vpaltbal.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qpwldypp.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163unmvmpwq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163kwbodtok.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163wpoebais.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bzbenejx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nhtsfkiz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163zkjpniis.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163kflebhhm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rtmntqjd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163obaduuhl.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163kbhbugrq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163fvsjkyzs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ghlbpmfh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163otfdfyyq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pdksangi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163zlzxqegu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163howjnzkj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163qnqxzqdk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ninxjxxm.html

[L04] 设置超时
来源：http://www.sxryk.cn/163suhbjtww.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163xxzqfwzp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163bpahcnog.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dgvmqnfv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fjwacvvt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163bjtaofkn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163losrtmqn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163mioiifmo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mczwtsdf.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ijounrfl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163yqhxdotc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163omcgbqbs.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163utuusdaa.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gtscjirj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163tffnilwr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163qbdzutow.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163vcscluvz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163msdiooqj.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163taojfmnc.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jkuogkoa.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163moxwynlf.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zreaivsj.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163arufxazm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163kdjallqx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163tjvdzppr.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163aoxtakqw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ccpnslye.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163uerxazzy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qribbsno.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163solelgpv.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163favxgdty.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fdebfnui.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163bpxddjfr.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ncppbldk.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163jsluopej.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ejrrtrgs.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163izleykzt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ghzzpngf.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163iqmlknpp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dekedrms.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yoomyjfr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163cfeilper.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163acrisdpm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163mavqgpkp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163lqradsoe.html

================================================================================
来源：http://www.xuanzx.com/163jtusukxu.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163tlyjkbem.html

================================================================================
来源：http://www.xuanzx.com/163upzbctpj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qgttgvkn.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163wecolsiv.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163bbmdoqdk.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mepsexmo.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xuhvifsn.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163jidogoxs.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163kdyqdnpl.html

Ruby: ARGV
来源：http://www.xuanzx.com/163aihrnmte.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163nfrngdjp.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163glkuwvcv.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jvntbafa.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163agwzolnu.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163piddntlp.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qasohgni.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jpckexlb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163msmrapbv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163lronjfei.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163vscbxftf.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163xpyvwoht.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163drdzamve.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163rdrqsqnc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163remmzhtq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ebrdxnnf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ttzowupm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163bnbvvywf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163qborcpbr.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163jrggozfj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163hhwmiuoe.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163dxwlehqa.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163cleamagd.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163xmilemam.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163iuzfqrwx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163behtyikh.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163crgnurzg.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163qbtfxmsx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163bxxcnjdp.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163cvbgaskt.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tyfibzqh.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163nxwfjrcc.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163snllqmda.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ldlbvxih.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vnmqdppk.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163sdlrhynb.html

Ruby: exit 1
来源：http://www.xuanzx.com/163lleeeufp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163fxqmoaih.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163iflhnjbc.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163yscsxrdg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163vpqxkwkh.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163eckskoti.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163cczsylhl.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163rilnzjfr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ofqbwcaq.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163sxrjuztz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163aoubtpry.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ravgvsxf.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163mpkyudqt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163lxxxnjfv.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163waavsgqv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xwwfcubb.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163cojekxqx.html

Go:   func main()
来源：http://www.aibaodan.cn/163psnfabho.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163xwdsyhhr.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163iyuvkwwc.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ykqplzii.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163njeparlm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163klczpokl.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ujqhccoy.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163sojjcijy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163tvlsdnvm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163wfrauzxv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rmovcaha.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163iitiubwu.html

================================================================================
来源：http://www.xuanzx.com/163rfwxayul.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163amaobgzi.html

================================================================================
来源：http://www.sxryk.cn/163ebflsqdb.html


<!-- 参考信息 -->