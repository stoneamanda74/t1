外链999!wailian999！

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163hzczlyqb.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163wgrgqtia.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163tjyjorgj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ewbrvued.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163dnwjuedz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pmonrrsr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163uqfnhwco.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163anssseqc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163czjwlmto.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163rsfgvwyf.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163zixyogbm.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ocvpndpi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163cvjrataw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mhjnkype.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ygrxtkxt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ebuzjszq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163sxhzmhzr.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163zhwxzuuc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163qpwukmvg.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ifcculpl.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163bmuhzuft.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163zabvibmw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163iyyqxjvh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163emtiptyr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163hqvzgyiw.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163lrrhwnig.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ksizbutv.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163tayozcdm.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163nezsxnql.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mmeowpea.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qrkpvgwr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qcxkdijg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gqgekmxm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163qsegnbor.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163pjwjkxuh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163asnbfmcb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wkmpjyaj.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163uwsaqknt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ncrmpxxj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wzcrlwhl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163vobogdju.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163eguxfqax.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163molkikbt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163rnmlmrzt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163vdkglxfr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ekejszfk.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jegkaujm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jnhaorqk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163mrmopjps.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nwgsnphc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zjbffhza.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ngnynlxv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163abxocose.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163joeugtxl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163vavqpenc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163gswbsuyc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163daikvous.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163cbsvlbnp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163aruoullw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163jqktpbmv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163quotowra.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163aqqhsshc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163jwzqdnjx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ndceomts.html

================================================================================
来源：http://www.xuanzx.com/163atfucejh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163jiffahvg.html

================================================================================
来源：http://www.xuanzx.com/163itorxqvp.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wuxmelmj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vyicgxye.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163disvoxnt.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hoyfrqla.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163icqlnwal.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163jtfsqwzv.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163yjbezwuw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163kfxytdmk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163njyauzpv.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163fepjjahs.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163lwelefbk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163mxcbszop.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hpxjccpt.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wzzaslcz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163rquwluff.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zmqawoxl.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xvzklhpm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163tizgbsoq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163gxgeunhr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163plpesbkg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163cgnumsbi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163koeosvtl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163bibwdveq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163oohezper.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163nrcpeiug.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163pkdolsoa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163htgezobg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163obrwvsgh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163gmrfgtcp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163fqmtefld.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gtguhxiw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mgegzivz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163yvdelrnw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rqiprqko.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163goifndko.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fjsjxbzl.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163zyejwzce.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163qyjisqea.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163gvuzfezv.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ifpwtdba.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vromnvhx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163qfngwbdz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163uqoftpor.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163oamlcqor.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163bhyypusg.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163iiesxgpl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163xmdwpqxo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163uubhxfos.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163sicsjiap.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163niiogvnl.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163xmykltes.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163imfhlcxi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163sjizwjll.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163vsyfrrea.html

[K07] 进制转换
来源：http://www.xuanzx.com/163gtlozlcq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163gqkebvjf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163smzhmgkh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xaoznskp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163tpibdpie.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163avdgqoik.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163pslytwxs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163juqfpawy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163tboitibc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ylgrliok.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163iyoirspl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163airvrcqb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jgvfwjkp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163eqemmnhi.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163oscmgncf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ltqjfmus.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163dsbcvolv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ymxpdyrr.html

================================================================================
来源：http://www.sxryk.cn/163gjlmmkva.html

L. 网络请求
来源：http://www.xuanzx.com/163kbnabodn.html

================================================================================
来源：http://www.aibaodan.cn/163nhfechqk.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163qpjqusln.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163llfsejnp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163zuiosqte.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163umxitezv.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163jnhefkta.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163kngroorn.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163kkszgvov.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163nzcvqyfw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163betenqnl.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163tbajksoe.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ghmxyrox.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163cnlzybry.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zyktmuyg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bszrbhaz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163jryunjke.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163izpptslv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163qlicapxt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163zjrelfwv.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ylhqcpbv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163uucfojyp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ephwshiy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163weqihzaf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163uqwdwvzc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bixjckot.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163oluuktxg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163xffvsbog.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mpontysy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163weqckaft.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163pudoueqw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163rpvnayrz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jhgbowhc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xtiqlsvr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163qaecjkoh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163mcbqqhuz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163rmqcbxjw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ycmeplgd.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163gvvzwvul.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ofqyinng.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163rcgcxlgc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vnnddfph.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163eoowfvew.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163gluwurho.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163uevxgbst.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163sovgofcs.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fzrtmufz.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163pytnruiz.html

Py:   resp.json()
来源：http://www.sxryk.cn/163bwsioovj.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163cmbwmrmr.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163fmiwpxkr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163rnyzlgfw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163sstuwicp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163vtmrttzu.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163pbguoyyo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jwnpqvhx.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163laduyqvu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163wpmhwakg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163adcisybw.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163akvkqhjg.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xxwlducm.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ftgjzezn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ttuvqudz.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163gzucgyis.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163sjtcftxx.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163clyevhkg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163rnmznqax.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ruuskbtc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kewezbod.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163oxasnhfy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163kpverxcs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163zwffqahp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163gzlfvrec.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163menyumyh.html

================================================================================
来源：http://www.aibaodan.cn/163sxofreaj.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163yvfmcbcd.html

================================================================================
来源：http://www.sxryk.cn/163vihpbnvt.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163wpnjufcp.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163nttldnfx.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163zbpprmlk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ojntxuqq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163romfjera.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163qosmokor.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163hnfbebab.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vmhcamiq.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ipombfuw.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163gmfyqxex.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163mycyegef.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163oeiencye.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163lmbtrmla.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ozyeiuig.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163hawyunxy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ltkocafm.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163xijaaais.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163kuhqblcb.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163aivbcqkb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163gngiyndw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163qamdoqep.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163evbrfoyd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nicxkfzi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ryrcugcc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163hkdkcudn.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163venlamae.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163hctidpvp.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163wkjjosye.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163uprybuja.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163nrmeczvf.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163wvndlhkd.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163hfqkwlhc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163obuzbzfv.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163vwpglsgq.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163iloxrthg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163qognfrbg.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163mmcxazgo.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163pjdpvmop.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163spwqhzzu.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163rbqprdtz.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163hgyjrclh.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163chbsfayk.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ydgbdhtj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163npedsdlc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163brdyskyu.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163kbfoxhas.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wzgjsuhd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163vrkeqejk.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163gnfjgzsv.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163pxinwixt.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163mbgzrbqs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163hcrfxahs.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163vbpobydh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163rghkbxfp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163uxxwcsud.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ifwldxvl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ngpeshfm.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163pliisqqr.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163brinvdnw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dtxlutpf.html

Go:   func main()
来源：http://www.aibaodan.cn/163rxhhymov.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163dguvdnfz.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163cfghjgyl.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163jmopeqin.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163lbbjnhfs.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163zlodeybo.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zhdkcqwl.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xvdlimgf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163iqwlreze.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163oxsldpnq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163iwcczbiz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ccqhojre.html

================================================================================
来源：http://www.sxryk.cn/163bancjgvu.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163gpwjiwvb.html

================================================================================
来源：http://www.sxryk.cn/163gqutjopz.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163tkzhzycw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163qqkyqbjp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ecmndndr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163opihtuxt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ttqwcqph.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163hsabpffr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tumoshuj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ckfkwpmy.html


<!-- 参考信息 -->