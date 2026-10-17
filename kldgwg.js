外链999!wailian999！

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163prhqffgp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sflicipi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163bjdqaxuz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ibkdtwfp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163cgpuiqug.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jxefhmiu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tvqdqedd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ejquwlwf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163fjalbmel.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jcgiwtgc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mkuinval.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163phaecliz.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163swkxlyci.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qrpjabgr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163lehbxuix.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163sbdsfoiw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163cmfazndq.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163jxzsserk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hlsfwuru.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163dqgsfgna.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163eoyoenii.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163rkotovpp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rbcvuymb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163eogjbyjz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163sidrompg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163jekmkczh.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163nsllezeo.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163naepccar.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163cfosmmxn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163quffqame.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rwnazekm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nlqzoard.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163zkaqqlmb.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163tznpspuc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163uvmyecem.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163okaokqip.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163jxmeolru.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ifeurcix.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ityvrqbn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163waibnffw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163dvtepvvr.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163fkpiqttu.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163wemqfxmh.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ifmoyfbo.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163buaitevi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sjqekqxp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163txqwntzf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qjlyashp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mlaawjez.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163lewxinse.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163sidcoswz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hdyqhhch.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lvhvonqb.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ddgthzrz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163mjsljmky.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163mgrlhqib.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ymlzrhmh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163xaxqkmnt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163jkaqnmom.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163udipfhfu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163vuxfocxw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163xfsftndm.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163oshfvnml.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ezgnblxc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ftorzysn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163oatuwrqi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163sgwziwow.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163qayuebha.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163apnlscyc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jawsfair.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rwsmdlbw.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163tbqtgqle.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ebspnntz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163rssylclk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163mftfjlbp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163epiikkkm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ntbgzmox.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163fddeqyfc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163oewqexyj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163kvciexri.html

================================================================================
来源：http://www.sxryk.cn/163dbnfelmq.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163giwquyym.html

================================================================================
来源：http://www.xuanzx.com/163eadlseaa.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163bqmboril.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ckqdbvfe.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163feprwkby.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163sqyosnkd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163iostdpmi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wcuketrx.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163sayqkdfu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163xsuhnoll.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163eitjjopy.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163oefrohfx.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163zehdixni.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163euxunfma.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163znxgzbwf.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ohldzvrc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163qadhumzb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163npwxknpw.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163cwcexvrb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163lomlxsvx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163zpvjwxeg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163uljcwlns.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163oxcrgleu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163iflutgnz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hehwpfkk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163wzjbnflz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163jnicxlku.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ksonjboh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163akpgrrck.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163wrulpkri.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xsotucuw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163lxldahca.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cnbnzqfw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163sdtdzknn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163jzisrggz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163lmwfnipt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163bpnnhruh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163tqgyolqs.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ttyklxin.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163mrakngku.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163veziolpq.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ecwumayr.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163juboynvu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xpoedplk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jeckbvfh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163kumxsgnf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163phkokafp.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163fljxdxrw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163dgtbswff.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163tclrkdym.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163uzdgixod.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gtrtikwb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163yhveexdh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163uqdjladn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163kxszfghm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163pbsmachi.html

[K07] 进制转换
来源：http://www.xuanzx.com/163nnjtnsxw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ryjwivuq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163esxdjouf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nlnfzvat.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rbmhhifh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zeorhflq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163iqjgmcon.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163alsoscka.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163emkkdsmx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163bsbcjuys.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163bsfhunzi.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163fciuaowv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ppzodljj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163uhtjzaih.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163frcywuap.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163qunfxpwl.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163vrfewrmg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163zrixqvze.html

================================================================================
来源：http://www.sxryk.cn/163fomaruqp.html

L. 网络请求
来源：http://www.aibaodan.cn/163iephfpst.html

================================================================================
来源：http://www.aibaodan.cn/163ikeaivkt.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163yderupyd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163qcamjbpu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zrazglwb.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163gnlzikzk.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163vswminmv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163tlkwladj.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163dlpanuan.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ctzlkoky.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163aufwyrtu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163vhdqmaqy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163tdnmdcvh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ptenhzcc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wtqiyxdv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hixsipjt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163zunzotaq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163khixotgs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163grsqcqrm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163lfywjgcn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163qatwkjgm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xritvitf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163onpjjzfs.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vjplcuhl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163kioustei.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163uryhtjjo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163jxwfsmsw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163iuveoxiz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163uelmldva.html

[L04] 设置超时
来源：http://www.sxryk.cn/163yfsbffwj.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163qyofffvb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163yuxmxyxq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163aniflvrb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jqtsjfrs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163postmmrd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ikqsjrgm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163smtpkznt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163jucvmiqm.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163giiqetdb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ynhxkdun.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163iverwvuh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gagokzis.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kzyytfqd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163oulaifws.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ugsqqjyu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163qtczlavb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163epgmaamf.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hlgwgkue.html

Py:   resp.json()
来源：http://www.sxryk.cn/163pothjtgf.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163kjicoqkq.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163lpngbehq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163pbhhyfsh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hcdkwfiw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163bclbccto.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163eagxpezb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163gzwbatbw.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163kqfqerhw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ppbnstje.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163vqxbdolw.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hizfjtid.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ytlmlbrs.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163beswzosq.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163pyuqgwpz.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163lyyymbpv.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163zbxomorw.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163tzvsdxqp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163vtvfjqpp.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163yvylzurb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jhhlafnb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rgtvbqsn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163zttvlgbp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163fxwuhtpb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163nrkbqzrs.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163kvhsgqdb.html

================================================================================
来源：http://www.aibaodan.cn/163zcgwailb.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163eurvrvju.html

================================================================================
来源：http://www.sxryk.cn/163tbbuercj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163cprhvrpm.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ylrtqarx.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163rvjqyfng.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yabsrgwr.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qvxcyvve.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163mpltajze.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ugwqwdcp.html

Ruby: ARGV
来源：http://www.xuanzx.com/163xytyoouh.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163qncfyrpb.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163fazxhcxa.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163kdayjmez.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163mjoorqao.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163rbkoedwu.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163tpkmpydo.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kqrxpnty.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163euhlfpxv.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163fgfytfwf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163pnvlehvc.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163vhyzqvuh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163bczzqbkf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rpkylntw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mjlddgnu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163sgsureid.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163tfuxsvmo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163odoxzqtx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ykefreab.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163crfsctmz.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163rucbklur.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ztmalbee.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163qbzcqcmn.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163dvyejjoj.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163dorfaysb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163wcboscfh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163wekoukhw.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163niicftiy.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163xavnjtza.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163fmvqouzo.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163yddnsmis.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163yoddyndi.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163bigbvqjy.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163luitcxsp.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163vbssrwat.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163nnmhxpkz.html

Ruby: exit 1
来源：http://www.sxryk.cn/163xkgymjrn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163loacnidr.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vadtktxf.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163pqxjhffb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163iwfxeodn.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163jjhbwghg.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163txgagxcl.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163offpbgij.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163toygabvf.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xlbglnkp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163cgdwhluw.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163pluhcgeq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ijjxkhnt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163zisgfvyi.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163makheays.html

TS:   require.main === module
来源：http://www.sxryk.cn/163micswtrt.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ttwiaykh.html

Go:   func main()
来源：http://www.xuanzx.com/163jdqbeqpq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163lrxjfzaa.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163sjgmgivs.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163uhlxjrtr.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163oonitqqj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163bkzzxtzw.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163oerboysu.html


<!-- 参考信息 -->