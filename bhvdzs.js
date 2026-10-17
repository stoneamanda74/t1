外链999!wailian999！

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163hqmmoopf.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163voxrnqdi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163jdjkrora.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163iajhvoqt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163nuwdgzyb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163sjpryluw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jctvdizy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163xwgvwsur.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163splzbupv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163jljxqteo.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ujhngsih.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163aombsdqm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163gcfacnlo.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vxmxlxqp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kpvikcwh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ztrvhyqf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163fjlutmhd.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163pvmskoaf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ckgibqrm.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163hhkfrxru.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163dmgugvoy.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163nesomopd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163iecyeyjv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163xalxlgtk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163uymhekys.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163cbczlnnm.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163kchgelbz.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163wwpvhcpp.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163avwxuvdb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163impfhgjp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163rqyeflvh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163erflbfmz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rmyexksq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163vxmpntks.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163aatqessq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ldeboenl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163aueseavg.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163euxvazvg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163bcgyulgo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163efkgsfah.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163fnubitym.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163crfoliuz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163lozqruvv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163jhyeclul.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163mhkhylsu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163gzkzzqhf.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163hevgcuyy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163shlrlsyd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163hevppmhc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qfxmcjyk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163edoyzpsw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163eibvpzgz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163fvxfwxrl.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163xnzrnoln.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163eakroojn.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163lcmkzloz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163kjzbxsnw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163uvhxdsar.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163pkmmlyyc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163yvfrtswr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163fgpebgqk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163lhaztqbv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163vfarkbvy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163cedadmfu.html

================================================================================
来源：http://www.aibaodan.cn/163vrgihqem.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163qskddeja.html

================================================================================
来源：http://www.aibaodan.cn/163nyfkqshj.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163dryftgak.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163fvovpwuh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163nxxvtbzd.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163phkicdnr.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163uziarjtm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fyxmstuw.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163bkmqjwkk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163sdxmnumb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163rvmzneud.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mmctoixm.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163xmymyavc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163oxkgeacs.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lydudqdr.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kdvwtoqy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163yazlhsjl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dunspglp.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163mvrwdjvd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163pjohdfkw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ifhzutoi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kgxgmqmi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163eeqxpxcw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ukmmaphw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ncbhcnys.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163xegvtqth.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163uuaxswpi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tskgzzqy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163vpmlvzhn.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163rvqsidhw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zgacefte.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163antucqcm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163azcqkjyh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163exeqwhkr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163yubhgghn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jcrpjhxh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163dganzacw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163idvqhuln.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163jhbjqonx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zgbolpro.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163eaphnikp.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163sxqapyrv.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163usabihhk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163skgedbdm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163bwsmoegt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163iwcwmbni.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nlkwoehb.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163omgmhbqi.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163dlaouevs.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ybelkvbq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cuxcpods.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163unuhfjqg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163lkpyqqad.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163xcvbihxv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163itacnpoh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163lcwmjewo.html

[K07] 进制转换
来源：http://www.sxryk.cn/163nqrnzkwj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163zlyfaona.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163wqogzyud.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163phhiyxxl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163eflxbjdx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lzyobzrs.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163damwomvy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163urajivpx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163dctslhkd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163brlxbjzo.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163volslyip.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163tyifzmjq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163udvunorx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hvrxhokl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163tmwhpyrd.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163jsjcutbw.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ozkfsxod.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163lonmsgxf.html

================================================================================
来源：http://www.xuanzx.com/163qpyhniyr.html

L. 网络请求
来源：http://www.aibaodan.cn/163zjbqtpne.html

================================================================================
来源：http://www.xuanzx.com/163esktxxsc.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ielrkotp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163iqvsdjbh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163fxkazyde.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163auinohrq.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163xakqrsqx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163blkdihtn.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163tzswzbns.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163yalpxxin.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163otmmditb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163uvlrzbqn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163sadczzrk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163smgsoevn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163imynlxjc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163mjtbvaek.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163tbnxuiaa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163wnckcsdv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xnavyobn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qxkcufxw.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qnrlaphf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163vcadvlln.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163piijpnmj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163efarrugg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zbripbby.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163lafvxlvw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163gfygqssy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163vnsdeauk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163umilmfcy.html

[L04] 设置超时
来源：http://www.xuanzx.com/163trgdoujc.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163fkdqppvf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163bggcczml.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hnyptddz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zvvnxalc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163myrcfgql.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163kuznqwwi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163nrlufxbg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163cqimxyji.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163myrtjthm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163nhcxzvgo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163wjaqmpca.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163uwqwcoum.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163cfivahns.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xhkhjcss.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163joohjvch.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163bsdvoplf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163esqfmdfr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163trxmmmyl.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163eduidwll.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163bvjkskyi.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163jatfbpkt.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163pcvqbrew.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163qttmbmav.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163jlzfqdnc.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163pvfrzhcc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163imaamgnc.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163gwmyurjn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163yzsbegus.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163oerfgypn.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cljgvqbo.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jjzffumq.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163pvaypoza.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ideradfk.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ebhflaqx.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163clhamjwq.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163guqiavhs.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ptxakzun.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163uukwclsf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163aworouaf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xvvomomj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163wepxmbjo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163goatcjqi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163dkvwduia.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ugnuiuex.html

================================================================================
来源：http://www.aibaodan.cn/163trurulhy.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163mudrxxnw.html

================================================================================
来源：http://www.sxryk.cn/163fsugfyre.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163naohaksh.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163oivruzvc.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163eohqlftb.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wmglogzx.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163fkiimcni.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163jvrrknpo.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163dciwrzje.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163jajmuhib.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163vukavsrk.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163yplywpgj.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mmwwsykj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163puceitiu.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163glptwwyl.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163brizfnsi.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163zlmyjlld.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163dvovejwh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163iymakjqn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ljrzjuwd.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163mamsygyv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163lncdsvnj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163bzqlslxl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163oeuqrwcn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163febgbrzz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163txytluxc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163dgwaxcvt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163wmwunhmn.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163nmaprawx.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163flzllamk.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163wyosfluo.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163jnyzxdzk.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163idfkhrkp.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ujlncvgm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163omuclgfe.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ctcznnuk.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163wglazjll.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163pjaepews.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jqtcacek.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163fkxakrgc.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163tpykglhr.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163lezewken.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163isksyitu.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163fdulfagf.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163zrrdpayc.html

Ruby: exit 1
来源：http://www.xuanzx.com/163bboksrpl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163uzeegexj.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163nbpqcwyk.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163aujrxgcc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163arczscbn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163aknxsdig.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163paizoqwe.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163udvmytng.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163nvmszqrw.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163mrbjbprj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163kskutryc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tqdbyduq.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163fvuibmyo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163dwqbeisb.html

JS:   require.main === module
来源：http://www.sxryk.cn/163yhwswhpl.html

TS:   require.main === module
来源：http://www.xuanzx.com/163gdyduzgw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163gzyrjyiu.html

Go:   func main()
来源：http://www.sxryk.cn/163ninljnjz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163gajsxlbn.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163wkyphoiy.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163stqaxnuy.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163tyxeicft.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163oxrmwlda.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mrdwcjbu.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163agleiyxa.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163epxmcvat.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wcmqzcvm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163bpaxpubx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163bbmqrmzl.html

================================================================================
来源：http://www.xuanzx.com/163cebsclhp.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163huzavumx.html

================================================================================
来源：http://www.xuanzx.com/163bfuvhtpb.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163utzrtkgf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ikdkeplc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163bfkgzlwe.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163czmzrqqw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zssezlgy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163zxiaajyu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163tiuijldo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163rgadihmb.html


<!-- 参考信息 -->