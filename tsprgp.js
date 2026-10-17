外链999!wailian999！

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ftfssewc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163vgirihri.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163gaiebrkb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tfxwwwnf.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ahxcjtab.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163cukyahjj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tqsbvhtq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xbisnpmc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163yrdsanks.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163kyoeefxr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163limexvqo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163wvkuusmc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ikxbonuv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163xzrzwoeu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163otyzffvz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163mjkrqdww.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163utymlqkg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ptjuyjqb.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163irmpktyx.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163rvapsdhu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ssrimabl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zgltrqer.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fmorldaq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163kedhrpvg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163qvzhmrst.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163dscotamg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163jhgdgcla.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163vwpgcdje.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163fdnlhqxq.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163tohqdzbg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163yrtoqjuv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163xrtkvicq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163uvsiqfrg.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163cgeiakrk.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163prpsbavc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163nbhptorr.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163jsiahrps.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163iguvxtai.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163lrmepebd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dfdnoscj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163whbgykxx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ytyxnobs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163yjfchnhs.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pklnmrlh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ntdwiqpc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163qwbtuepq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163bybdfqfu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163joskeevo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163baqvtbil.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jouoqyem.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163cpmukzkj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xjgpprbm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163qhfftgeu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163uohxtenj.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163yxnsqvln.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rcuvgbmo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163hhcadqgm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jaozivng.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163whxnvahy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163khniunne.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163khorcyxv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163fvbqtztq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163qgqiwkhm.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163hmvgcxkx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163dzrpuowh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163iponmuqt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163vacugxwj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163kfihgakk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rcdppqhu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163uzourpfd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xncnzrjd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163wrtqrtgx.html

================================================================================
来源：http://www.sxryk.cn/163ygdspzvp.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mmiwmdff.html

================================================================================
来源：http://www.aibaodan.cn/163ovlodtun.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163qzocpwxb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163sgitftra.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163psznmbob.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lgilqqak.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mkhlvrhx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163wgngpehb.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163vjfizgbu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163pivwotfz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163oyhwryet.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ijulbuvh.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163zxfhsfiw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163gwgymhna.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wvyugrha.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xzxmwzcz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163fwzobyus.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nbjtzzov.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163hoqosswa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163esendzac.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qmgcdhqq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163bosrkexl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rgglcdhy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163oepsstal.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bzumzpxp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ufndkdkp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163vgjqenyf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ctygqhya.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163kzwuktwe.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ljgcywbu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163exkfbzyk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ldqgmrzk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cepvhpnk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hzikqorq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ssojexhy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zrayutpj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163apbxqlfy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163kpgjxphx.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163klvnyaus.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163xtzhenrv.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163atjryvls.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jcllvscm.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163iyluqmpf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163xfxgxqmc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163rwbqoxvp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163tcmfdmys.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163canadzgd.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163bgvdsvca.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163iugnjbas.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163iluoarqs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163huenzobg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nvimjxix.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163uuupxoja.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163cmpfnjbs.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163iwpycorr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qbfyxvhu.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163shlghkkn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163pypudvie.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163mxdxysne.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163frtkqrjy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ynzbasns.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163hntqpskr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163eulvgmzk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163dvgkfqnl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163pttmdonb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ottakudt.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163yvdcdbrn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163dvdkjoox.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cpvhdpvm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163usjtuhby.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ufnehdgj.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163dbrpmzfu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163zcpqsfzz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163fkwnkjhq.html

================================================================================
来源：http://www.sxryk.cn/163dnrvbkwf.html

L. 网络请求
来源：http://www.aibaodan.cn/163mtuxsnpe.html

================================================================================
来源：http://www.xuanzx.com/163dhacudcb.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163hetkyqki.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163wdnoujwx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163czmwuquz.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163vqbmihvd.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163llxytmak.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gjeglggz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163obnripmk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163xufpqply.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163trisxtpi.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163itwgofqg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163fpamtuhu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163cwznvrkl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fuktixto.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163esgvxjxw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163tnasyolc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ypmvebge.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ztyfboxr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163oblfbkpm.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163lejvlwcu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163dqrevqnn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163qqmljcmr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hboqgpms.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tdzjjqcn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163tceeudjd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163hxqtuwss.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163zhkoywnr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163enoixere.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163lgfenerv.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163bkmgqerq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163lfvtekix.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yjezohhu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vqurvcko.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163warnipej.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163bmnessnt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163yjzlmfim.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163cwawrady.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163vwaxrvha.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vvjybaef.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163bstghqle.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wsmpcxqf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hptiwhty.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163qjpzwqwe.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163bzyrkbtj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163faldfkim.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163dvedkids.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163bcbmumoo.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163nhhzayeu.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163nrmkrypw.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163uypbgong.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163eldwlpdb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163jfxyfcnm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hqeaxlfx.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163zcjbdrij.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163cjmfboch.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163dcfcgxnj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jvjgvqxp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163hlestjsa.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mensvhqi.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hqnhxmye.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163efbgivng.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ytumfaze.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ztxmdsmv.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163uzdmrlfv.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163hugatxen.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163uizortoh.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163kgudqygc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zanerxkb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bvgolfdf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163osuiwtkb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163kumnsyht.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163nvmuheci.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163eecsqflp.html

================================================================================
来源：http://www.sxryk.cn/163flqntzuh.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163tunriury.html

================================================================================
来源：http://www.xuanzx.com/163tdjpihge.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163zcchufyt.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163iszxuhfo.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163tqavbhpn.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163heubsops.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163djscgaof.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163bmlekobs.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163hobfooxx.html

Ruby: ARGV
来源：http://www.sxryk.cn/163usqbnqga.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163gtvpzdpg.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163oflnwhhi.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rqtwaofm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wticzuju.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ypjdvzrb.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163daqdankd.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163voecurtr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163jyhijyby.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163yooadjpe.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163knagqcva.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ekcrmjzy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163bdtlwqus.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163rzmaexbk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163eufzpbqk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jbgggmaa.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163teiepslx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163oywrluzy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qyhwpqbo.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163nklvxzlm.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163uodrqqfn.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163nodfdlrj.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163hwqbyzli.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163zcesmrlw.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163bselvhvv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163boqlklcm.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xrovdszh.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163qwwjzozw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xydmuakm.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ibvrtipo.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wgbzvgiw.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163zfawhbgi.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163doptckyw.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163fhsockqc.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163dlhmpfdh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163nfdgcivn.html

Ruby: exit 1
来源：http://www.sxryk.cn/163bxxhntow.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jtoffaje.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jhflafmw.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163dbylkjej.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163nfkslnnc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163sfuomxzq.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163kbvrrvqb.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163lqzxjjbn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163capxizon.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163qynyhpka.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163evoipqkq.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163amubmupb.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163jvhcqsfg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163hrcxfecx.html

JS:   require.main === module
来源：http://www.xuanzx.com/163nlwhaffk.html

TS:   require.main === module
来源：http://www.xuanzx.com/163dltedexc.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163wifmxlzg.html

Go:   func main()
来源：http://www.aibaodan.cn/163ktsmjybz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163siokmeho.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163scliveje.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163dxvuxjit.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163djlqvncc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163mjukltby.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tckiyonl.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wiaymdkn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rumsejsd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163cewgldyv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163vbhmvgxw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163qnxqtyns.html

================================================================================
来源：http://www.aibaodan.cn/163vsustczz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163isruzqxu.html

================================================================================
来源：http://www.aibaodan.cn/163hwkmlgku.html


<!-- 参考信息 -->