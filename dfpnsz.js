外链999!wailian999！

Go:   time.Now()
来源：http://www.sxryk.cn/163awzcjlmm.html

Ruby: Time.now
来源：http://www.xuanzx.com/163hafmtaue.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163uyzwnqdl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163muvcgyrl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xpqrtomp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wsatkheb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163vsvahcze.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163juzuhhsb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163evrkdmlu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163lqqxeabn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xvvimjrm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163mvliydws.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163qcpaghft.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163advelmne.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163fzvjywrs.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vxvrpgtw.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lxtmkwqi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jfikdxtx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163pqewejjs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fdxmldqt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gqyxrvms.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163nuknerza.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163wnltkovq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xyzxnsqs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163kjcccmby.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163hssxotmu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163xzaxotnm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163gjejmtii.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mpbiogxi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163xiqstllj.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163izutwwsv.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163osqtbjzl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163dkhhgcmx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hhbobmpi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rtrocpno.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163cdhzvxru.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163zoabryyp.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ejmntnlf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163vkfjuhqd.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163cftvjkgs.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163vcyetgad.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vifqditd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163slclwpfk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163wadxeqss.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163bmthydsv.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ezcbmghn.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163okicojvr.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163tzpbvitc.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163bipakfcm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qlqipduk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163bdpqprim.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163obiccubw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zubagkmm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163vnbyneho.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163fptuyrer.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gfndoibp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vademtud.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jdfmmaar.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163wdnffglj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163dxfbqltg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163pihuqrzh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163uhbcwqoi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ktamjdao.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ulefdrdl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163khouopka.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vzoxcxuk.html

[J09] 时区处理
来源：http://www.sxryk.cn/163jtynqcat.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163wtrhdcow.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163opkrdkcd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163aacxlpfm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163yjjzmuxt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163fdpflyjw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163hbqdjzvc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163vnycedhf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163xamvmuze.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163aylumahw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ngwzlgvl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163begjwdha.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kmcdytoc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163wxehafaa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163cgrfkyoy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163dokmhcdd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163wgqfixld.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163bynyojdk.html

================================================================================
来源：http://www.aibaodan.cn/163nyajfrkr.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ombluogd.html

================================================================================
来源：http://www.xuanzx.com/163fuiischq.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163vunvriws.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ctsdgesg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zbmtxyno.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xtcegjef.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kxpamwlr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163aeeyncgm.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163dpiizfry.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163nyrjxfkl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163yymhqgqi.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mznmqetf.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163udskfevn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163rrmclfpk.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rbgpdwdd.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wrzpopnw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163uufjyoms.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bcjruqie.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163bbceqtte.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163oyjquzmm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163mipubjax.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163pnbeiomq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kesgkwhr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163guptcilq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qhztdlfh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163pqixooqc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ywgtweup.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163yqhtuczb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ogxljqve.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163lqeluftp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163mdxczxpy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163tuxdhzzg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vaexzpgc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hwyhjgti.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163oyfkhkhf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rwewqfyu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163tffzuxcd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163znorwxyl.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163uflgqtck.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163gwdlkbgq.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163zfefhjit.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ohbygagx.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rhjnrrxz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163fcmbozlm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163emdaauqk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163kaigjtgp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vpdizkkm.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163dnzhqzgk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163nrqfmdxo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163slhaxkif.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hqyutgfk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163rpfxhiej.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163irwipvwr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163havtzsyb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163bdlebojb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163anbuwgkf.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ouwzskiw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163gifecrpt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163wotybtej.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yvndcavd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qsljhnze.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lpvjrlhz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163iaguxbhy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163tuyepvyo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163geiismlo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163bbtogzsx.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dxjhfpcp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163jjxfyslz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bvmgszfu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ofsgzcuv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163enhkzqls.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163aqcywtfg.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163empwsqwg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163udibjtxe.html

================================================================================
来源：http://www.sxryk.cn/163irpajdli.html

L. 网络请求
来源：http://www.xuanzx.com/163runwjeom.html

================================================================================
来源：http://www.sxryk.cn/163hfvzvcsj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163icsbjhfq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163kxyynjyt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163qahbhklz.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ajcixqcl.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163eusvjizg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163xgvcqpyp.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163uvbjpoop.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163jyalahik.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163dehqgxsq.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163drnfyxkx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163hblcvams.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ohxdeias.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163glljaqzh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ssrpljhx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163gnaernsn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163yydedish.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163sqhkuyzn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163duliucmu.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ztiivpgt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ptamjwvo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163yrrbvjga.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xyfxmwad.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lfndgolr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163dhywxvqv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163yvauohwh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163sqkvefgz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163vxazucbp.html

[L04] 设置超时
来源：http://www.xuanzx.com/163wykndyyb.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xpuwnoba.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163eyhjzplv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ebcafpnk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163myqxgloe.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163pnpgfyog.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163fgimalba.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163scbvwibv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163osxmqigb.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163hqzkfqir.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163kwnscefz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ijnesfom.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qlozmaht.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lhiahpxs.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163tzobcvue.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163bzjthicd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163kbupfayj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163otlynrva.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hkhyeepj.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163abmhhpic.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163vkdkknzx.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163yhturjjq.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163rgnhdvmy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163sitwhetl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163itphofta.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163gxdunktw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163tqjtowww.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163eysaivhd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ykispkcy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163fyyeqyzg.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163osxragmq.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163frvexwov.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163tiaaocoy.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163fjlgjzpj.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xrjhowmm.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163wvibgpnc.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163tcnkratq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ghfjvtkv.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163jbqdlbzn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163frtsypmx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163frqlzbnj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163pdiixrqk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163gzfbwvni.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163zottkhdx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ypbyuelb.html

================================================================================
来源：http://www.xuanzx.com/163oolgcmgg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163thjnegmr.html

================================================================================
来源：http://www.xuanzx.com/163imoyoqnz.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163tdfszlyw.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163mlpxufoa.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163beyxjuma.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163odilwfbm.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163bhdpthdo.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163mchqtkad.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163uwhyghgb.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zzgntqzd.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163yyrzbnog.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163svqykyvm.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163oerxsjog.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163fshdzxdb.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xcfiaazw.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163aoltmpzf.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ncvhoqul.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163mylmprox.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163zggrhvur.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ttogetrx.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163nakxdsli.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163grfosooz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ohtfcrch.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fvmfybsa.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163brdyspnl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163opyyovxy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163kvwfugrs.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163thaetzsu.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ezzirjkj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163axfnvazv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163gjkapaoz.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163wecebymp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163zfkobfce.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163raforjso.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vptmykev.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163fnqkgqbl.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163jfgqhlqp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ofcchmxk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163njgwogpv.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163weqedggq.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163issmutvu.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163mivicvyh.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163txlvfbyf.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163mnwodink.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163prpcmpjq.html

Ruby: exit 1
来源：http://www.sxryk.cn/163kcjvpxpq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163oojddcjx.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163affukknd.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ygiivtud.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163qlogwcvr.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163bvsvdrgw.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xjaqfczc.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163qydytkfu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163tworuedi.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zetzrpmf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163etmyrgxu.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163vgjkjwkl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xujeibxz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xdbtwgvj.html

JS:   require.main === module
来源：http://www.xuanzx.com/163fmsjjfas.html

TS:   require.main === module
来源：http://www.xuanzx.com/163mlfxzmyw.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163imhqudhb.html

Go:   func main()
来源：http://www.aibaodan.cn/163rupdyvnv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163mcrlxxpj.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163frmdhgqt.html


<!-- 参考信息 -->