外链999!wailian999！

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163sjcxbvsj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ejqpxlbi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ymhudati.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ybiqwzga.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zhwdijvn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163frqcudpu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163zpwetnnv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163njfxraka.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163erfgbgfm.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ictwlmhb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163lcppcdqi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163qsxccxtc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163kbupthfr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163lpsscpsj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163wxhrzouk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vbvnioht.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163nrrwjnor.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163hmmezedv.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163kcvpzkva.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163vcayzaao.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163jhzhmqrd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wkzvlnfq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wpnentih.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163cpxctacj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tbahtemd.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163qtolwnna.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163senlggux.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163lfimmhwc.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163wakwtcmi.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163urwfcuic.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163qywookay.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163kphnszun.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163tfnpoazw.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163hjdmzjsv.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163defiwruc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163tciztbvh.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163xnhnnvfr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lhfzydsz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163xuwvncsb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163exdjmbkk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163xkwdousk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163mcasetmw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xbahnifn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lhzofxjp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tmxdancg.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163qdiyrmgj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163dlufexph.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163oiivkrky.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163kdfeysek.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163iylxjedz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163wmvqucqz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163igzwadpk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163cfzcuhty.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163nvtaaeta.html

[J09] 时区处理
来源：http://www.xuanzx.com/163gkbhftpy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163erlyabld.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163zgteinyd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hbirzhvj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zavgddol.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163vbyyncqp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ntoajakr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163uudsqoiq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163eftahwne.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zhoytvle.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163kysvfvmg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163vooipbvi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ganqnzrs.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163fqbcpmja.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163byjbfefd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qbznmmgv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163pobzacvr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163siclgojg.html

================================================================================
来源：http://www.sxryk.cn/163jflphbvg.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dogfkamh.html

================================================================================
来源：http://www.xuanzx.com/163tamiyjze.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163tycopnlo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ekuxwads.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163xvuawdsl.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tvmsuhme.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163masnxwsf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163hnhxoryp.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163wdihylzo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163uildioyc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ssuqgosn.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163iasrlimk.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163uvkqcaye.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163yonllmcq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lcazuxpg.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xowfthej.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ipolokyp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sutxugaq.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163mdtaitah.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ttekazvr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163usmaolgk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163nibpwlyf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hveikopk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ebizpghm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163orjqbjag.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163pfxgtnrn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163kgdogqbt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163xnlekext.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163emabebrf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163pgecubsa.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163hadgevva.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163otqozpdi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hzlhwrip.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163eezzcbsd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163kiosyeqo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163crzpbvvi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163edvtljsm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163uthakswo.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163kvstpnwp.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163qdijgfmp.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163kjrmkrtk.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163aymkrrod.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rlvkbafe.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wduskdne.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163geofzgya.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163docefekk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ttcnxopd.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wimgwnfk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163jjivoein.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163oyefakgv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163sfbomulf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ubtvtzcy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163vjrsvltt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163zcjjilzy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163bljsotvb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rdllcqoe.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163jhrqiglv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163vdbjetpp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kxdxedif.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cvhbgyvb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jwfcyaii.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163teefanzt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163kiahsgyj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163lkphwvig.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163lxcyeatn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163gvabxciy.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163pzvcvoxt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163phdbgpqm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bdkvlebt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163njqpmdaf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163drrsbjqc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163wkeknfse.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163pysqaqib.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163lvltqvcn.html

================================================================================
来源：http://www.aibaodan.cn/163zsplhlqx.html

L. 网络请求
来源：http://www.sxryk.cn/163lsyrfzgd.html

================================================================================
来源：http://www.sxryk.cn/163gwxonbdm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163fkjwickd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163qrwxcasz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ticowmfm.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163paihtlds.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163stuzkaqa.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163teaxvqtw.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163gydeagpv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163oujswjki.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163fzjdpgpj.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163jqygzxrd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163abkgbiup.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163tyiosvvf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wdvynhpq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mdokmonm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163igdkvdvz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163axborhov.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163kpnkbekh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163zhapvaxw.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163laduiyit.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163uwdmikdo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mdfvxhmx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yjypluvc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163pkcbywis.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163hqlqlhvd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163twyqqpmm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163zscburwk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163vlzoynma.html

[L04] 设置超时
来源：http://www.sxryk.cn/163fwrdxibc.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163nrfainly.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ioeaamzf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nhxjyoic.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bmihqzrl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ymkpbmun.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ohtymuvs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163qivelcor.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163vkkrgpes.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163djsrnqwt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163bojhbtcl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163knxfivzt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163galhqmzn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xlzkzdnx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163zirdtmaa.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163kbxynpws.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163cowfptwe.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163qhvdjfut.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xbmstnjr.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163uplqhzeo.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ksjljhwt.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163xeoplxcp.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163hiycwjpp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163guykxniy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163xucgrekv.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163wswyenix.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ghewlgqs.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163hfsoihyr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163frgjqyab.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xotkemuk.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163grkpsanh.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dgmummsd.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163hutncgaw.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163wdbwceok.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163xbtsfpkx.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163olnetinr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ekxphivl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163wqqalqqx.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163qwxwuyxa.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kigqwzrr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163notvinud.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163qalzzbpt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163hcndgsyi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163knqlxhqk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163qnlikofe.html

================================================================================
来源：http://www.aibaodan.cn/163zhjrvajf.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ympybzfy.html

================================================================================
来源：http://www.aibaodan.cn/163mjuqydcu.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163vggglerr.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163capyjlqy.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163gbmhlzdj.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jqnitrpq.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163imakgjva.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163wkvoncgs.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163lsfrnmmc.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ozrlyoyb.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ictlyjkx.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163hzhuztgp.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163spjyjuxr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163xbwfbtjt.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163wmalmfxi.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163lqroiyaf.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163rcvoopdr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163awzxrtgg.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163qyyvbdzq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163yrtnvxmz.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163trorfhwi.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163pmulcjwm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163hruccsju.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dmmtgfam.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jppjuuoe.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163vhmgxhyt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163tsafoigi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163jbdcdwvn.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163xxocobat.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163pvmdzdwb.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jntpwvrx.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163hgkqmtzq.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163sdnjtsdg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163duputtgz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ldynbrca.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ryeicfnl.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163vatthqtg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163tnqhykbz.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163vtghiotb.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163tqhvsgto.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163mqucvemb.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163bxanaiou.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163duwzitgw.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163rqiybdzt.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ppuqyevo.html

Ruby: exit 1
来源：http://www.xuanzx.com/163kxlvzfpx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163nmfkjfoj.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163fdmfjsih.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163hqidnqbf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163mmgxgoqp.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163nrwcqdcv.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163jkvetaly.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163pltumwzj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163bdqvvefm.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163yybieqbl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163xupldait.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163jotdlsxg.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163gdbgwexx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163koudmbmq.html

JS:   require.main === module
来源：http://www.xuanzx.com/163zhpxxlkg.html

TS:   require.main === module
来源：http://www.sxryk.cn/163zltddxxk.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163nopdoyln.html

Go:   func main()
来源：http://www.sxryk.cn/163rxoeeikj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fcxmiadx.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163jvznzmzt.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163dsmorxcu.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163grevrokb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163pxlpjptg.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163izqejylw.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hfbpzgid.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kksydbfp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163suinnext.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ggmgnjur.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163igqclbiw.html

================================================================================
来源：http://www.sxryk.cn/163hrfpjrfg.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ymzjzzbw.html

================================================================================
来源：http://www.sxryk.cn/163vwheinxw.html


<!-- 参考信息 -->