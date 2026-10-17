外链999!wailian999！

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163nrsurqlk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163sbcjhwxp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163myuzqmpq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163guhcnhac.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163zoerferr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163esszfgzf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163yewopwki.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hekultjq.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vmwpzpmx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vdkjfggk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ifkszyzi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bjjmvxpl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163rdddhrvr.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163uoujequy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163blkiabcc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163xqfqpovy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163hiriesti.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163nhvqdhjs.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163fcoslwfw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ibrkybqf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163cohyhghb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163qkzjikrs.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163fdrpjdwn.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163zjnzkjvb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ajewwjef.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163reahldnx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bfjkmkqm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163bpmdpick.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163svriccnz.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163meusbjvh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163vwhkxtjx.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163zebruuth.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163dnecjhsl.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163yiqiasws.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163sxkzkbij.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163rlsuxtih.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163chmehshj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163hisfqalg.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163pcoowkwu.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163tofqmxnj.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163iqhwwayf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kvteijux.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163jmzcfyzx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163edhgmkil.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cmciesii.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163eizfbqof.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ttztrmzm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163afsemzme.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vtbjdzpv.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163gonjviad.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163kftqtmth.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163rlulavad.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163jfcvfzbh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163tmtnaelv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163uornncbl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163nozryirn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163fswnzvyw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163irwjzgsg.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vixdnmdo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ovvekwli.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ngfyjxgn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zbkfqaak.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qhbgdpdy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163yyzzxbws.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163tiotgzey.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163djqrhrci.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163mvtufozl.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xqhxnusg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163dymdpdwc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163vcztwyts.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163pmnuwina.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163wtuucefy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163bpjdxrwr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163diphojzg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163hralsysz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163cproivlj.html

================================================================================
来源：http://www.xuanzx.com/163gtwlrwsn.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163nilxmzrt.html

================================================================================
来源：http://www.sxryk.cn/163mvtggiyy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wnrpppke.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163kodlbyka.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163oubkjneg.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wfgsncfh.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ogcppcdq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163kxlymodi.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163yulftnjl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dvfucuto.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163kiyouicc.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163tcpffwvf.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163urgujnde.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163dgnemzsk.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lfurniux.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163iqduffln.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163wlefeuvz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gskvziju.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163frphwycu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163cymbcntz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163onszppuo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xinutgbq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dfnycsmt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vqydgkvx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163aavlgmll.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ibbkwhlv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xnqwanvv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163goadzsgb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163rojpcpce.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163wlljaxxq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163xbbpvsqt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163vxhghhzs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ctdyghoa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163iftohfmf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163tmwokqij.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wrihzkkt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163otlpqobc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163pxeraznj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163cmhscqnt.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163stgxbgwi.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ixhstrqc.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163sopopxou.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ybqmnjpd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163gamicuxs.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163mptsrxcf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163gigmtmpb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163uxnuywfp.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hujrifeg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163hzheliwl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ulaezsap.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jnliajhd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xsqkcsnr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163pcexliam.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163mbruinqv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163hmohcxtt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163quvplpsd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163plxyzsar.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163lalnljzx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163fstjvswz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ochyzyzt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163glcqeeha.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cxduhmlq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163gfnlldvj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163gmtfcikd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163xqcppvsj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163arikitwn.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ajkyidpt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163bgkvukxt.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nutjxdxf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163uecduqrt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163todbchbd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zswcvmsh.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163aefiaura.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163wyywvvnh.html

================================================================================
来源：http://www.xuanzx.com/163cwgpqdbt.html

L. 网络请求
来源：http://www.sxryk.cn/163licemqdo.html

================================================================================
来源：http://www.sxryk.cn/163zdlerbic.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163bluysqvb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163sebtcrul.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163fukcciow.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163spiuwaqo.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163gjyxxqfy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163vnnrwqao.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163fzzxqesd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163forimbrk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163vdobiuqf.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163mfqazsce.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ukrezkll.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163rupaszko.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163emdiymog.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163noqzvcki.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163thgkugvq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ncmufppf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163mkgqdpsr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163xetjpiet.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163tuzwmqjn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163zqimicza.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163vgkyrinv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lmhovduy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rchsxfoz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163aoabnlsf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ywvggosm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163jzytopge.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163tsrucwsh.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xbohsmxm.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163tyvjhkum.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163wjwxrhcr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tpjdjmpu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hqgcxevg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163svfgcqel.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163pojqntma.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163idusqtvp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ikpvjluo.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ghiiawgf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163iebtvtbu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163kbatffdz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gbsvzkbj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fdzwhdfx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163nxdcxiyb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163gzqtweod.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163oytjjcei.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163xivwwvsx.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163pamhqqup.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163fixcrvcs.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163djhozlla.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163mbdurhdn.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ttubjedx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163pogmfmpa.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163xaqfqtdw.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163upxlfocf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163quqzwemb.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163nwiuvxxe.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ybcuzsda.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163wcjfpxej.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rmqqohgm.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mtwrrdzs.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163jjltonke.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163kiixhtmo.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163mounkahc.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163zarpqqxu.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163oftasbeh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163psxlcjol.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163fwdgpadb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ylzypcsr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kcemlpus.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163epyggxjb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163lmbmnlph.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163rcfbkzru.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163qjbuvtdf.html

================================================================================
来源：http://www.aibaodan.cn/163zfljiajz.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163aaxitgwa.html

================================================================================
来源：http://www.xuanzx.com/163zkpjmuws.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163mwaiqqlm.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163uityjtax.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163hvgtodls.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zgvqpjsx.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dkuyvnor.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163wllttekz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163qydaomhg.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163wluicswu.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163tmfmczph.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163wweeghra.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163kzcwuvxj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163tpjgkapu.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163minyvjwm.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ihlrbjia.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163lvrzpqac.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163wdtwmrfg.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163xtlpnpyc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163fpbefmth.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163kykkacjk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163hazznlju.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163tlpfsjdf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163sawjewvd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wgvoxymn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vmrpbakq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jebexydg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wjmsmdkw.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163btpjgnsy.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163rhwwqihn.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163fzytwnpn.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ckbblgov.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163cxjuinre.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pomddeea.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163iyuarnag.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163gxyancwc.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163gaoeyhvu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ezeiwfvf.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nvuejhjz.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163tnisszdw.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163zidtdyhb.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163kdnzymgk.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163fktqrlqi.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163meaxbvfn.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gbydebig.html

Ruby: exit 1
来源：http://www.xuanzx.com/163whlqcled.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qcuggpxe.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163oihvqgns.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163uertpgmk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163iyvdriha.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163bnlsjvan.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163pewfbbxw.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163wjfjdmmp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163mtvbnygm.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163lgukesvb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163rnzcksfe.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163xgjhygdq.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163eesxflwx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163sefmhzmx.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vmogdirh.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163lskyipon.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ktszvwld.html

Go:   func main()
来源：http://www.sxryk.cn/163afwrrlxj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163kdevzclb.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ywblwpbs.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163cufeaxkf.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163nvxywgxj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163aeyywfse.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mnrybqyp.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mepzpeow.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kuegvrht.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163pnlovlko.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163bvnrkbws.html


<!-- 参考信息 -->