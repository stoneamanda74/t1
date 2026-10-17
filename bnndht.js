外链999!wailian999！

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163clutvlfg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dryzaaqu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163mduvzcvt.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163eiwroixp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163roqkzthp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163kvanjndr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hizayqut.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163yulpofxy.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163trahplpu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163lagpmksd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163osammhbc.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fqczendf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bhaxhsdv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163rpsbeyzs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163amqdosyx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jrbfwpyp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163etazdsgr.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163wnlabzcp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163kdlymllb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163llhfjvfd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163zahqhqlq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163mdlvcwph.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163zejziezj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163xcvlvqvi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163epasugys.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163bwedascw.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163dyjaznlx.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163pwpsfigr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xbnldcfi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163feuzurhf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ggpeuavb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163kljclakr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163jzbkyyrn.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163zjqgkzlk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163poyosygu.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ivoztpfo.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163vhhwuowe.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163yyvrdtar.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163hfvomgiy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ipvomvbb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163whdxqrkx.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ilwcmaaw.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ubpdofqp.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163uuvbiauq.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163newyjjpi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mzwmafjs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163cedrfpbq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bhvjzfbu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cunhwfjp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163mvrtbhxc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163pyuhgtom.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yybomskj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163utqgatji.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ccnygstr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163snmlfspl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ehkwcglk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163skdsmpao.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163fwgtbeoo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163osiozlup.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163xzdilyfx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163sitrhtiz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163gvfttobs.html

[J09] 时区处理
来源：http://www.sxryk.cn/163cqenqeqv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jgcdvitn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ndwgjead.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tbilyxkd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fvkcsybw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163cwmtldfw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163tsxiwvyi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ydqnjuim.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163jwwhpksi.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ptefxqrl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163cbmfnsrv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163naikyvdu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163acrdqesu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163yfjkillw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163aurvzegs.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163oqhfqgza.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163gknbowrg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ztsakgxb.html

================================================================================
来源：http://www.xuanzx.com/163zzutdwbg.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163zxesawms.html

================================================================================
来源：http://www.sxryk.cn/163khhgykba.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163wdkgnxwf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163azphgmeg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wtolrasq.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163isknbwwp.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tsvdoaov.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163qbtlclmx.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ttusnbeo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163velvowvc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163qrohfduz.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163caqauhyl.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rtlcesuu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163lewgkpei.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lfofznmx.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163juyqdcpo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163izxxnbqj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163owbtlvtj.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163gzzyfeph.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163imdqdprf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ebqflgil.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xlccxqai.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mzzwayvp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xxhfihmq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ppxrcvvc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163tuzxkqdj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wsgsrakq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163hmdnlvcd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163rbbmfecr.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163noulzsay.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163rekacirm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ilrywcta.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163izkqjjhg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163knrctdav.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rfososlr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bdhurfbk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163oktjifjv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ydrfarql.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163rkwlumtb.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163aibctlof.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163yftmginw.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lqdoftfo.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163onickizw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163jibexzkd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163megfxhgz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163jidoddwl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163decqnbhq.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163rtfvbase.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163anzkyezd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163nmfiorni.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gknjpfhd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xyznowea.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163nyzlajxg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ejruplxq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163wjbrmwfu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163abuzaexq.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163xhxqngjr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163rjbnwevw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163lxbfmfvm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163sdnukpni.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163eimmlzlm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163qzncnlkr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163gstynoum.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ikjwnuej.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163pykeejun.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163onldjqje.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dghjbhbq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kwqvyfhp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163uvsnvmsj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mdwgcsnm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ewbgtbwf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163vskmzqas.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163rnemubfg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163arimouty.html

================================================================================
来源：http://www.aibaodan.cn/163hkrbxgob.html

L. 网络请求
来源：http://www.xuanzx.com/163sjpwifed.html

================================================================================
来源：http://www.xuanzx.com/163qpfpzdan.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163hiydgfgn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vplqwoix.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ffgnlcgd.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163powpuehg.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163cekgryix.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163lkukntbv.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163tvpeztma.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163bcimyhbp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163hwudwqmp.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163nomluwol.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dtlcwjui.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163sfovmdxe.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163svhezxap.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163rwxdsjqs.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163mgwzkvnh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163fdizocsj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163bjrnekuo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163qdqybvds.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163izuxrgic.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163uaaimxrv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163elsqcdxu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163npiavwmc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163eozlrayb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163hdkuhbjd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163mxcdljkw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163fmxpkkai.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163lnjulckm.html

[L04] 设置超时
来源：http://www.xuanzx.com/163fvglgpsr.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163qinhuetd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163swanpery.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163squqdnru.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pnzixxhf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163vqudtnjx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163vhihsmqv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163eihelgcu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163xuzobwwl.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zdxhbddy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163bmhhdnsf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163glwjgjhf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163azmfyktk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163tvqgjfqf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163jfkfylgh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zmbevgjp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163suszredf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fgudswcr.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ftcdcqjw.html

Py:   resp.json()
来源：http://www.sxryk.cn/163sdfjythr.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jcnqmzks.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163rpzbneum.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163itischsn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163axjvmkbz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163qohftden.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163mmuirbtb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163zgbwkdpc.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163bzynpuwi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gkaanveh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163twjcssmp.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ghevgcen.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rplefsjb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163mnjgvfbq.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qqfnqgsm.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163dtcpvbbz.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163kjzgwgck.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163sonjgnpl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163mtmcvpny.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ymewcbol.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gixjdrot.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wkpwkpme.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163kiujcvpd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163jdjivqnx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163dghsrbjq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163yftyvslf.html

================================================================================
来源：http://www.xuanzx.com/163jlyhldyh.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163unrjgwif.html

================================================================================
来源：http://www.aibaodan.cn/163kxsqhdhg.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163mlipeezk.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163jwqpydeq.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163thoraezy.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pribdttm.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wwnfkvbq.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163beagftxy.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163yilzkued.html

Ruby: ARGV
来源：http://www.xuanzx.com/163oxjqanbo.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163aybismva.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163feuytwfw.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163dmjvqjsu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163yegyvwkv.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163hmazbvph.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163gongcrih.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163iyuuuzlc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163kfohrbxw.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163wonqjufe.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163mycsiyvf.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163maicklpu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163jlpiruwc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ugvcpwjk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163tkrxqjuk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bdlyyday.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163nopmmxeh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163sivisqdj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163xkbeugos.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163gybirewx.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163fcpjfico.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163syrjbfkf.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163usognayv.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163pkcprcbk.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163suckmlxt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ueqrqioo.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ttegsjiw.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ocunqxmp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163srvwwgna.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xbnpmowz.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163dvxaejsk.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163vhjpdqzg.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163bwdevnff.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163zhoxifnx.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163orcjxqkb.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ftozarne.html

Ruby: exit 1
来源：http://www.sxryk.cn/163rqzqtxut.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163qrwzixex.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163bgxhictw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163oicogaio.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163namedwto.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jzjomuht.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163kawrujoy.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zijmdjpd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163dklmuyer.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163tnqsylph.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163zfudkrwc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fadfgmtv.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163flpwswlb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ydjzijrj.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163nmmybxrf.html

TS:   require.main === module
来源：http://www.sxryk.cn/163kokybnnt.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163wiutntvr.html

Go:   func main()
来源：http://www.xuanzx.com/163eqlvyszg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163htlhnlqa.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163wfrntabv.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163lhahjxpg.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163mgagfuxi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163fprpdaqy.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163oeexykmn.html


<!-- 参考信息 -->