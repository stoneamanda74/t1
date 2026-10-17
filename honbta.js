外链999!wailian999！

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163etgoywqd.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163vasvvfja.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163yyvfelty.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mkqyujao.html

Go:   time.Now()
来源：http://www.xuanzx.com/163pbuwisfg.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163acedlxbm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163mskkqfht.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163odwxoxbm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nnrbujls.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tivgbfdr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163yjktohhw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163xbrpulkp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163gwjmlkfc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163cdcpchku.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163keyjeuvs.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163mfhwcruq.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163qtwjdlkh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163opomnrhv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163gnufxikc.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wmpnwesr.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nqdojhzr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163aqkuxzfi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163uyxrzimk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fgmcwach.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ffwktlop.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163kliqvojn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163wjalwspw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ecbogplw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163urzaiiui.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163djnrqybe.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163mbwyutsq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163efphjkxo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ydmxzcti.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163mxjgqhkh.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lxzexguh.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163hjylesqp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163hvkqzbhy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163cnbntmek.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hpfrpvhb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163twspwadh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163jzrozoid.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163bkaerepk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163xyuwcqwm.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163royuudeo.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163piqukwxq.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163cvrzpkdb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163rwmmruxh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ltqachgh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163evpocarw.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163vsutdnnm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163jaroriyn.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163tgmgnabp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163csdgawxv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163injgzteh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163aentqawm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ymvunbjt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163svynvkeu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ikdeusmt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xdmayzvx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163iqguufwe.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qlhuvmea.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163bntusypq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163utpxzckx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163panojrer.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163rdjytojq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163wetlzcxa.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163tjzsxsfy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163accgghld.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163tdlmuetl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163suxczccp.html

[J09] 时区处理
来源：http://www.sxryk.cn/163vijjvntn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ssfzqyik.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163nmilenig.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163iddhpuxw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xtdobpwl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163uwxcisao.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163wusboeov.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163lscanypg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163zymfqwfa.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163usmklrvy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163pfpuwrcx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163azufppia.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163aizgovjz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163apaayuzz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163oizjawfo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163uurgyyfj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163rixxjljv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ytjmjgec.html

================================================================================
来源：http://www.aibaodan.cn/163lfcsrweq.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163desxkqht.html

================================================================================
来源：http://www.xuanzx.com/163urumjdyp.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163umaovxhn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163nsugtbil.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gmeiscol.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mduohhwf.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lwuvbtnn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163vwqftcrt.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163cpsvgejq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163dlhzsfps.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163qaiwrmyr.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163fdjudnqw.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163hyihvjnr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163dtfocwnu.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hfexjhcs.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ycaoclqp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ewowomhz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ckhrjogs.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ogyfxcss.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163awfreboq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163otyflddx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163lnezcint.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dfjvxgfp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jhelsptw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rafvwgzr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163lqgghapd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163sqldeypm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163jqgzuzjg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163stnyieki.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163bblnilwe.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163peqepbbn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163usarwuox.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hubdukmw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ematwmsg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163xcmzujqo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xnuydwgt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163mtwywgrl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163pxpecfmd.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163piijvlof.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xdkcasou.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163njsuulmu.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hbkwlrlw.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163iarcwuet.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163fqcyzfeq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163nggzswhy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163mnqhpxfp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163lzsbfslq.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163igtsdefa.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163rptjuhhf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163spanlxyv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ervmeawm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163finworwh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163yahnggqn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163vbbbaria.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163jpssunkj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rabeircj.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ugbnnnwn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163tdjapohc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jrpbhknh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163eajxzaek.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qdcskgmh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xdjtssma.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163rauphgyn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163xqrrgypt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163oqrfsurx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163csfyaelb.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163bhxctcrq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163eozhzmck.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163babhommd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163cfbydkdn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163amfthkbf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163vechdrig.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163jiklcnkp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bicmixrr.html

================================================================================
来源：http://www.xuanzx.com/163vejzxyhw.html

L. 网络请求
来源：http://www.xuanzx.com/163zvylnbyb.html

================================================================================
来源：http://www.aibaodan.cn/163sfpytqzb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163bipfugbu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163fizckneu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163tghktuyp.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163qwdfmmga.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163uwexyunt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163vmpwwwog.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163kvwyeqoh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163fplyaqyf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163axrqnnqy.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163fdkankho.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163esbcygqn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163dfmmglxo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gyfavnay.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qkqjiusi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163rdimavde.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163zoxzejpq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163udqqjdqz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163kcolkrym.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163cklwuood.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163arocntqv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163oxyyvpeb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lvaudaco.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gdyjylqh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163trsatnti.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163nofhhmnr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163orbrzvuz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163xnsctprw.html

[L04] 设置超时
来源：http://www.xuanzx.com/163mimtcfal.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163aryptylh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163arojbfmy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ilwzwypp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163phubpkom.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fwxtjghe.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163mekgjqsv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163dkkwulvz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163mrdrtxlm.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163qzhgyrvo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163yqytpfso.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163hnlkmnqi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mgfvjcao.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163fhhrgyif.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ypkvesbv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163kjpxhzbz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ubtggorr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163icktnter.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163evjwtwuu.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hybmqaxu.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163fahsdals.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163gxxjtkjn.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163hnqsrhuc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ozoljcfo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163uoijostk.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163etuzeouw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163dkrkwtqg.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163mcfjpodk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zkustgix.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xhclfdav.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bldkcaub.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vpwxaqru.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163mpxztwnp.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163amfnhhpo.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163qlccgknk.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qmorrbgy.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163bwadigvl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163fnlxxset.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163foilojvs.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163euxnmedi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yqmyfpev.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163byvggqvf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163akgievtv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163osrhmndk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163emgzevzj.html

================================================================================
来源：http://www.xuanzx.com/163xkmvkvkc.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163bhvvvmbq.html

================================================================================
来源：http://www.aibaodan.cn/163momjppym.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163yldgbtoc.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163jcrnfbgr.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ffakmtas.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jtiotkhu.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163epehbirz.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163wqeyjrvh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ekcjdzsd.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163qreicqrd.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163lctbhjru.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163azznjtqz.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163tdtpilok.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163mcxqzqps.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vmebfhdk.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163fmynmfnm.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163vmgqzqnp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163miwpgogr.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163aotypvnb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163sadyhmti.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163fsllpses.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163kvmjbwha.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163shupuiso.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bfvekibv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163pidxmqex.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163htinoows.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163wfugpgyo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163djwydtrt.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163bdrjrnzz.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ptduotfk.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163pnstxwcr.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mqdaybja.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163kxheyfxs.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163yquzgrit.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ppawzlzy.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163zyfaedof.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bsxgnibr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ranpeezn.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ahivdzgo.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163cewykxlz.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xuylolad.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163luottovu.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163uefbbnld.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163bsmtykmx.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ewwxfwqn.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163bvziqamd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jlzjrvvj.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163hhjqdinq.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163nzfphakz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163mhagmgcx.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163uthbcmjh.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163pgbqetbp.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163lobdbxli.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163xekvxxpf.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163strtycdp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163amjivsvx.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xonsayfy.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ewhtzpkk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163veetbyxg.html

JS:   require.main === module
来源：http://www.sxryk.cn/163axqfvcrq.html

TS:   require.main === module
来源：http://www.xuanzx.com/163dqpkaljd.html


<!-- 参考信息 -->