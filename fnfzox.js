外链999!wailian999！

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163semgoowr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yekyxsnu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163lktnldlm.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163otfcfgdh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163dpysfrjv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ipxbvznv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pysnzuoe.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163msvxbaba.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163mfmohmjf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163yqhlxwmf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163rshdfknd.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pxykzsqc.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ojobakig.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163tkghfegn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ekacwqhn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rfvpkrec.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163zoytxqxt.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163mjypphti.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163pwixyhif.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163qkfeczae.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ckagjepe.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163xdftobaf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163oajzrfmu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163avtswtaa.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ekptevbg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ejngcxmt.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163xfxytzuc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163tzrvkfwd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163nmugulvo.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ivlemsko.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bdhbinhz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163opjmbtee.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163tmwmacxi.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163iimszjwm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163emwhagnr.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163znnfklwh.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163smvheaqw.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ryfiflpb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163bojhlslx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ytvnuuth.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ohrmfzmt.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163vwwhvxvk.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163mvnmbpwp.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163uorthsbq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163gazrfhqo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cgngkjny.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163izznomdh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yymtszdd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163yzfzjler.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yxfeceut.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163dbrlbukz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fphlvfap.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bmaggaja.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163whyubzmo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163jsggpiac.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xsrpxxix.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163zltmzuik.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163oibhsahq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163eoxvivhq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163lebsbqts.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163sergrezn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163mrekcxgm.html

[J09] 时区处理
来源：http://www.xuanzx.com/163qbvattnu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163cdkjwhyn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163kqzjhotj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kpcmcrmi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163erprzsjt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163jzaodvmo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163nnigxtbh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163fxpssnhe.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163zvgcvsre.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163rbajqdmu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163bkhmxkbo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163uxbihdji.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163mpxysgzb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163cjhlkwln.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rmnnvshc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163iavzhkdm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163nhetldoi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163lzabrfnc.html

================================================================================
来源：http://www.sxryk.cn/163yejweunk.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ywihbdcg.html

================================================================================
来源：http://www.xuanzx.com/163morjawfq.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163lixjxrwu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tbqmgkgd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dfsqtpnx.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163erhesslx.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cglleamh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163eopsuing.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163wayjjihk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163yytbqmli.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163fjkfkaea.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163nobuycdo.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dadypbkh.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163igrodngv.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gtnbtmbb.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hzwvazuo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163hidhumdq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163unbxaejl.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163twjgijet.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163bhlzmzom.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163yaqxpfhr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163pjzxhmml.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zadkvacw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163epjyknqg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lcunbbdh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163eotrqdxw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163mtadjzga.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163aoiuwfzn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163lftuosre.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qvpjptja.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163oiufijty.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163bezktobe.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mbvqmvvg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rtvkdyym.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ehquqein.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163oeepzrxk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163sorhwycq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jnyfnwql.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163pojhtfhr.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ehccuwlt.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163wmujeidl.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163uaxqkamu.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jxvybqxb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163oncmklxf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163armfdher.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163dgnurccn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163exdisfho.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163rwnlkkuz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163xxybwxnk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xzbeunbf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zbpyrqkh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jzoauxsx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163qehahpsq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163nhiotvza.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163jwwumpql.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163lrqrauvu.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ljqmpels.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163rzdoqbzr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163lunxbzuv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zgmlpexb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163owndzlvf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jcmwzbbl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163vciayoel.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163vnhajzws.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163sxdqzccj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ptvkhzpb.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163izdgxjta.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163fxsivuiy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xqqluwhl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163peenohop.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jobvvjhx.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163iyozqwrg.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163fwbpwjdo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163rypabbvh.html

================================================================================
来源：http://www.xuanzx.com/163fqifsscn.html

L. 网络请求
来源：http://www.xuanzx.com/163jygxamzl.html

================================================================================
来源：http://www.xuanzx.com/163xwajpysz.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163tlfewhte.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163cjcentzq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163kcyvptyk.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163zpwkvgoc.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163apemxpoa.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pftdlhky.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ehnobhcd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163xqubydsl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163mzelkbtx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163szllvelv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163tgakxtco.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ilyzjytr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163rtijvmmw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zojnpedw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163zsyheiyl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xaaxjcju.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ixwtvxwh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163wuyuymsf.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163vdadbxoj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163lshkzgvg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163eijxlkhr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163flrsozlc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163sgemrqam.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163egdhlcxb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163scyixnuv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ltmfkstp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163rmqjukby.html

[L04] 设置超时
来源：http://www.xuanzx.com/163fqabwele.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163odhsgggh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163bcaxmtoc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ikyizxab.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163moteqfio.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rxzcapdy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163nbzvdnax.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ieawjxdw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163atjvbbif.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163mvfpodrh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163mzlmlixj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ejqkxmkb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pmqhroax.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rczrqtpn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163uulzqquk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163nrxsowjv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ndotxyuz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163drfaowab.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163dqmwncao.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163vcshfmwa.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ucwmawjn.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163elyxfahh.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163gztefiwk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yorbdyhs.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163nbvlrymu.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vohojzag.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163oynskefs.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163nwjtqelj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163jwttvjtf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163vkdtvykc.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163fjkutllh.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163spphqmus.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163lkojrnfq.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ytupvgbq.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163grdfwgow.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163dmqzmecf.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163nusmfipo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163evilyyvd.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163tqophijo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163eznxrkbi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163oswpjrui.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163iumjokat.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163vdaxuank.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163arvcfpgb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163msyxbjdr.html

================================================================================
来源：http://www.aibaodan.cn/163imnxuiaf.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163tadtnqiq.html

================================================================================
来源：http://www.xuanzx.com/163sfhrhpos.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163slkkeksc.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163prxrdpxe.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163xwzbmcix.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163imrnogmf.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hvlqyxkh.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jbifjprm.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ykzenuaw.html

Ruby: ARGV
来源：http://www.xuanzx.com/163tvgiixsd.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ekycklte.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163onksbnui.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163zuunlndt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163flpdsxar.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163cnlbeene.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163uqdxwnjc.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163rbjkvcxz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163tngapjrf.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163wvpuralg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163wcxkvuko.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163yyehjlps.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163rebitoph.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163oxcxklsi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163vyphwdct.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ucksqnsd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163tuwblpqb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163hpxfmuyi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163xbqgsnnj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163kkslplao.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163cowkpkzz.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163rbuqjxmj.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ugcvgckc.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163nalcuvvw.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163lunpuhfo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163gtbiucvk.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ysxznflm.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163bbknskyk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163hpatmemf.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rnpkuwis.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163cwmnykhk.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163mcnftixm.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163gytyffzb.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163bjiizyax.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jkccsskn.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163xkrmzhyj.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ouksbuje.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zzlzcqiz.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163pydbmdov.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163xyibfosg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163rnpblwld.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163debgmsnn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163tvxynfux.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ybxhodlu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ntyjavqj.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163kkncxvir.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163jnqnskrm.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163whsiwtek.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163csagvzcb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163djwvhzhd.html

JS:   require.main === module
来源：http://www.sxryk.cn/163skofkgoi.html

TS:   require.main === module
来源：http://www.sxryk.cn/163orsubijb.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163dtxqirrn.html

Go:   func main()
来源：http://www.sxryk.cn/163bzctrphd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163gdawnobt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dvfifyna.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163rlwnkmjp.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ryctwmkd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163vhcwpzod.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cmkoqrkv.html


<!-- 参考信息 -->