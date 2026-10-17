外链999!wailian999！

Go:   time.Now()
来源：http://www.sxryk.cn/163wkanpzet.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163qbecebgr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163opuvohdb.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163qurgvzcx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xxjstuwi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163tlutffon.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163kdmefsjc.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163frhxdtgc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163qvgoilkz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163clwauemi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rqllncdo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163jijskppd.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ystccygy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163mwzvhasj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163lzfzwuse.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163yvdioybg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163auewejkw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163pjmfmzgu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163gontqmky.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ogzcuebp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ccpxkoqe.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163xaeymzcc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vqhibmhv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163wmrwhddu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163jzksmsra.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163tndyofuf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163goxvkdsr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163cyzxdyia.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163qtkxdbmk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163buggkdqe.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163trnstrae.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163uafwilwy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163oxmsfnsd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qfaitept.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nnjwwrpg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163zutshteq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163zowivmrw.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163bkotrzdl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163fotydscj.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163xykyeiku.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163vbpbxrtt.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ekgvyugi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163dxbahqrw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163mqfaddrg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163mtkeefhn.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hirysnnh.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163akzvuily.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rxitqkkf.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163psfosqgt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163thcjvxhv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163xahvcoku.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cgrnbrzb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rxnekqwk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163oexuixwd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163hivhjnaf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163doluhsjf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fqdxxndm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ollwfkrr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163tnelykgq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163nfdjdbkw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ektekaaa.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163nszuhnyf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dhwdppls.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xfdbwlxv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163nkjsnhqz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163gkedqxga.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163stwpsozb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163zzjquhuf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163uwcvzroe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163pyuehald.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163irtyxdxo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163fgomvlsx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163imsqahdp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163tovdrsyt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163qntwgsro.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ypcuoayz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163rocahtkh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163bqrriwsc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ggwamvvs.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ikvdiifx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163eamvqjif.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163kxomzzxz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163wucnbdbg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163gkgmisud.html

================================================================================
来源：http://www.sxryk.cn/163jxndtsaj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dtosjnyr.html

================================================================================
来源：http://www.sxryk.cn/163ojoanncg.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163dmfjnpic.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163taenzsfp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jgoftusl.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hiejopgs.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163frssmdba.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163xsnjqmla.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163pweufygp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163bsqddmja.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ovfkqwyc.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jvcjcblg.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163jecfyzky.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163vadvhfvx.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vcvodhpl.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nstvpoya.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163rthldjlj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gneqjibh.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ryktptpk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ttmhrsxw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163lhgtyvpx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163tgzuzyog.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kaqpumik.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fvmbwblq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jrxtvtxm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163unrxjnqw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163wrtezpvb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163odwqqnee.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163huenlenu.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163pkclncuz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163bukslecy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163domdvffx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hvmpjzqf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163oydvwguc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163gwbgbbpu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ysrxebya.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163eurayggc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163nzfdocxy.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163loasmhgl.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163serwjewh.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ombjlfgt.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yrpcknot.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hcjavwqw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163pqtvdgbo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163qgquhzkr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jejhnlpq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163xhvifspt.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163puheuxtz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ydzbznkr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163mbosfvae.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jvfpsrbw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163aosbuspo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163jkikfmvb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163yslrohxr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163dsvnxvzh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163hkuitwqt.html

[K07] 进制转换
来源：http://www.sxryk.cn/163bfawvmjt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163vtnakjnv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163bmzcqdgv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nasmucqu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qsbbirqo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163tbqwyfwv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163pnjhcaft.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vjcytivh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163efuwdjpl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163xjddfhyp.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163wxozupyv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163syennukf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wdzorfju.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163otysywrr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163qlggeeme.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163uchakhol.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163jucmbhgk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163wqxajosr.html

================================================================================
来源：http://www.xuanzx.com/163dvdebwup.html

L. 网络请求
来源：http://www.sxryk.cn/163ipgwbfyl.html

================================================================================
来源：http://www.xuanzx.com/163tsizhdou.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163zlqupqyn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163qlcjiuuy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163fhzzvoky.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163fvzdldoe.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163nphjidlm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163goknxgwy.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163nmeyolmx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163zkzubhfq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163umaxyrvm.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163zoieagbt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163qovtoyqy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163spjccuzj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vphrtvtp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163yjfzqmbg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163qubvhnat.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163borwfwmt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163lfsqmiet.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ncurjckz.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163vqhzfiol.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ezvylivf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163krdqhayf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163kuvmhrdu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163uhjqlcuj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bkdomiey.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163faudpfdl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163bmvefknr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163griixbqd.html

[L04] 设置超时
来源：http://www.xuanzx.com/163zxmtcton.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163kjlttaxa.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163zxngqfdw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xmuwdknd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lhfprxfn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163qssvxpxx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163nlscexbf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163lrbduuvr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163oheudqlq.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163vkibxppl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ozbshjbm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163erxdctor.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bfwqmvcy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163slxfvajp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163iyeextvy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163irxffjtw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wnaskeey.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163aagcmfue.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163pcwsclnf.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jmehyxlh.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163amhylkqq.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ynjlrrwi.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163awzqrgtd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163cvcnjjmi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163hectbfpy.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163amgxfanx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163mcolswjn.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ztockqsm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ypjhlbzv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163gzirwtvh.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ykyouwqs.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163msdkiuaw.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163kmhiroek.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163borfgyho.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xwsjnpxs.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163zbtzhgwl.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ibdajyvo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163mmmkdwrs.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163hdjxgyxb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163itlohdho.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gmqmyzcs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163uknelhln.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163cbxzyeha.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163uawmqery.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xszbrpot.html

================================================================================
来源：http://www.sxryk.cn/163zgysdrca.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163mugnavmk.html

================================================================================
来源：http://www.sxryk.cn/163dxnugiqy.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163qdpomgef.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163sslriyen.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163uleffuoh.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163iztenjte.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xiaoodau.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163agpdogwp.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163rxpermno.html

Ruby: ARGV
来源：http://www.sxryk.cn/163cpveluqj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163rwiscnyy.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ozjtfwns.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163lpreqnps.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163zqsmxptx.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163lbwqjwfk.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rybraxoh.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dgkvzuys.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163amuewjzf.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163leeotfso.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163fiytetud.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bhkooghd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163yddgitpt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xclkqvto.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kopbqzpq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ovtlscnl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163wagsfssq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163msddjzkn.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163tsqbwzii.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163infzujoo.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163jnnreygt.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163cbyojmcw.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163rwnwjrvh.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163foxjkayn.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163owahpgzg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163jrmwvgrz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qvrflehy.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163zmapguzv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163smyzbzza.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163nkdxgsqd.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163cemskzba.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163fkaskitr.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xtflgmmy.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163samhieyh.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163fddjhbfo.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163muddftdk.html

Ruby: exit 1
来源：http://www.sxryk.cn/163igxwgmou.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163hgqcwwpz.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163qdfhgfqu.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fkysrovr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163jfplbttk.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163rnlzdxiy.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163gtgpkmlq.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163uvqdcqdz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ltzrzcga.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163zdwgjqwf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163nnzcltlj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163uxfqwoiv.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zwpuenfu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163vrbuwzja.html

JS:   require.main === module
来源：http://www.xuanzx.com/163uyghprnu.html

TS:   require.main === module
来源：http://www.xuanzx.com/163egrjfgwa.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163fykpcwba.html

Go:   func main()
来源：http://www.xuanzx.com/163pfafrxnl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163yeewqcaa.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163emjyjnta.html


<!-- 参考信息 -->