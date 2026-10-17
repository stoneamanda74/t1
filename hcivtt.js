外链999!wailian999！

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dsimkfih.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ljlwiogh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163uarpkgoe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163yhxjrycx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163gwnlmanm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163idqqpohl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163gbeiomfe.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163qevkvzse.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163saxdaqsl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ozqpxegr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ximifdaf.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ddnemkln.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163hqpeagnp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163axhbkafq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163iqwvijqg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163yuzssztr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dudxmpaw.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163oiyhsark.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163lzruoxhq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163asdnqwnt.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163lnycwypi.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163xgqmhdzu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ylvwwlhq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qwnwouhh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qgrosgry.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163cjrkfwqs.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163wjdnpwqh.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163jumfnujh.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163crvifplx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pdwcxhza.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163zkbqqtnz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163sariumiu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163famwstzh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163rzkzisap.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jdhnwave.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163endpdjuf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vteddswq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163nhrpkslk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163mzyiexua.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163gtasfpbn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163hbzkjhrw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163bhyvognk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163pvlrbnyd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163jbaqfeje.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163rhsagexc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mfjqgfjb.html

[J09] 时区处理
来源：http://www.xuanzx.com/163wetiswdd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163lxpladzx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163frzuqlpl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163enwgwxlw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ffqfneba.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163smktuieu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ichlojxp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163mcogskbb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163eujjvtnz.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163pjfjojqg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163tahtsnva.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ywqfhjij.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163lpzroghr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163nfwckzdx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163emvboawr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ftwsfhkr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ubcxfkaf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163rqilaasz.html

================================================================================
来源：http://www.sxryk.cn/163vgtfpyab.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163yjsmktxy.html

================================================================================
来源：http://www.sxryk.cn/163ojanoxnm.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163occoyjip.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163odazzdoc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163xpmqvnur.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163cibqzgmf.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ooyndfau.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163kiibmnlk.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163erhfdbhg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163zlzkwyil.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163cgvvlsqo.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ltrbitat.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163wakodgaw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163gnozvhhk.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ykflpexu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163odnpucwl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163bzcrnrxt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qgzphweq.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163qewkgqbs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163iygicjbn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163aebgyqsx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ryxcpqqe.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cbvfksls.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jwyyblez.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nljhpkfo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fahhijnr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163byffrrec.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163iynwnjrb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163byaypesi.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163crbrhoih.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163kveuyvts.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163dezmfgnk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163lgrbicio.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tztsfynb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163bexhogrj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yhulnwtf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163rjynbekj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163svvjrmrh.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163xjfxmymy.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163pljfobuu.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xfnwdxhv.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nvqcpxle.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ezhkpcbd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163llgrrumc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163hsehqrpn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163fhqjeghl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163drtizpke.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163craejmai.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hmjpknuf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wqfjdqrs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163eawknmdf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gcbrlcig.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ftljajdd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163urcturgm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163uqfqxtgw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ixrqivct.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ddbhddgh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163nxbhpcld.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163liiwcljj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163chwfoxza.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ufxmpfow.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163nvtaikbq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ixiyvves.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163lsaxniuo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163mtnxbids.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163zkozczda.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163dorostos.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163iyodxseh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vwiizzbf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163usvgzqyp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163bnzfpqmc.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ialltgpu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163viumolci.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163dmfexznw.html

================================================================================
来源：http://www.sxryk.cn/163zfutzsvv.html

L. 网络请求
来源：http://www.xuanzx.com/163iejcafka.html

================================================================================
来源：http://www.sxryk.cn/163ufbvwegt.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163uqyfqefs.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163uipocqrk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163nrhordhs.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163hkhkvgze.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163brwibezb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163vpaalawf.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ogwodbyg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163wsjldnio.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163uxmwtegv.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163fykcoseg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163qwuvzakz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hpqbxleh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jjgaprmi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163isxxxngf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163dkjbzrnd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ajcruihn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163xqwwomvo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163pzvqqpkx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163pwfsrijr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163fmeemczv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163rqbtvdte.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163sgnrhgnu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gmmgfnkw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163pjmeylxr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163snalcirs.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163rfpsdpng.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163sczkygcv.html

[L04] 设置超时
来源：http://www.sxryk.cn/163irxbautx.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ebnmpzlb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163lngbfehv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lvjtxcki.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ikbkzikl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163bbjwvhkb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wrblplih.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163julabqhf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163rdsypstk.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ntuecxwu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ppmrcizo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163rrvgyqsm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163oykdfddh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xsdedrbz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163kfvmxbhb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163slvrxsdp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wmzuoyvl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fklbfrnv.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163phzvwbse.html

Py:   resp.json()
来源：http://www.sxryk.cn/163bycxebra.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163vcozyrpa.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163qgugvlhd.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163naqxufri.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163cikmrqhd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163afbrfieh.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ossjqbdl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163qhsaogjk.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163sdnejrgt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hqqpjixf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ivrvkorc.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163newlaojh.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zujtqcdz.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163daxyjffm.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163yuyfstiq.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wfidaafd.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163rsnzopyy.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163pawrlwrg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163jbtjycae.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163nozyxwwj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163uozyadyj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mupaqncf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163garrqnrz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163vydsvxra.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163cpjdkueq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163iwpcgnyu.html

================================================================================
来源：http://www.xuanzx.com/163ibchepce.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163bpgtghlp.html

================================================================================
来源：http://www.xuanzx.com/163bbuvtfib.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163nhqmurem.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ehuydopi.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163lfdoxtcd.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tymaexip.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qyhqaime.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ouhgawck.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163xezcgcte.html

Ruby: ARGV
来源：http://www.xuanzx.com/163qfdszcae.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163gibxxohl.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163avmzhafk.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163wcglplcy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ncivatil.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163dvojevvb.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163nhalcbwx.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163cxxkxfsf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163adkdgbot.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ujsippjm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163yegrkbty.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uldpqgke.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163cmnuvpyf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ifolvxcz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ekgtsvxn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ejxcceob.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163codwrrqa.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163htftcqux.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163yfiqovau.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ftvzgaqh.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163pcxfzale.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163kemozimx.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163fzgyotiz.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163hevhtjzm.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163fmmvvcpv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163bwqpykgn.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163wezmzaga.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163razzcrjt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ycbfpbbj.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xbsfutra.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163xzqqylfm.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163qxqzicpx.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163onfboiah.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163uxnxgfry.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163bvmiawez.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163fuykdxna.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163zkswiono.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163yymvksxa.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163hbkjuzcv.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163efrynwlp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163menhnnwf.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163vqadjglj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163vpmtmbjs.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163xozpdzhz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163zkxvuhxb.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ztryvahk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ssnzektb.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hooqjooe.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163lpsqhzqz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163bwmvwdah.html

JS:   require.main === module
来源：http://www.sxryk.cn/163rsfhumdp.html

TS:   require.main === module
来源：http://www.sxryk.cn/163pzqrzzcd.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163erwuslrl.html

Go:   func main()
来源：http://www.xuanzx.com/163tghngmiz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163izrnkgnd.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163uhchodox.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163fsodtthy.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ngeyfglm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163cwwlxmgv.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163grbkyxuh.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xprpbhrb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163kuwpriyr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ypyymnbs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ancgeoiw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zgwmhxaf.html

================================================================================
来源：http://www.xuanzx.com/163cqxzlwbp.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163tlgyptgj.html

================================================================================
来源：http://www.xuanzx.com/163mvkfyeov.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163qdpwgawt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ipohlnqp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163jgnokroj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163epbihlny.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xwqanjyz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163xykwizag.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163wpakwbuw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163gdvzviuh.html


<!-- 参考信息 -->