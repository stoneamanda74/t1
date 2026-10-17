外链999!wailian999！

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163vybqizjq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163pysndrzi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bblwqlpp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163lhcbxgrb.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163buonnusd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ppdtudud.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163huqggvto.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wssutsyr.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163csrghlrm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163diyczgtf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ukprtbnz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163qepjwliz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163zjiojyno.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163fjkpqcrz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163vfxeaqxn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163grypnhif.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163lmrjzfxw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163azsxmnqk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163eotebyqe.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163djdpmkmg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163effwlazm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163piirzsza.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163wbctleyd.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163hrjdlnki.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163gogiilyr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163sizxbgki.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qgmzylvh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ipytxhrb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ivhrhxtq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163jsnfwhfz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163vejlfmez.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163euveoydr.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163qjaxaovo.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163lueiueim.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163qahponhc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163afnenizi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163xauhzesc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163eeqhhmnx.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163dirbfanv.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163haxqxbqk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163lumjwrqn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163boiihqqp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163myjwxmqv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163nhkafvqp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rbmhroka.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tjrrcvbj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vwjjyuba.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uypdwtfs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pxwikuue.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163rheadkpf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163aoqxqopd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163eoozptww.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dinblkxa.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mxhaqirf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163xwdrcwam.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163vyoolywc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163qjvunjbn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ksctuzqc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ahtmfbzu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163rnnbgatr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163heletjvv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lgxskzvc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nulapoje.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ljyowgmj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163htfxxquh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163xrytohxq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163jiqumxty.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163jkghpkig.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163qaijbmng.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jrntkfjn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163cijqzcqx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163szlaozuv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163golduuzo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163yypaadke.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163oitgjpjd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163frwpftem.html

================================================================================
来源：http://www.sxryk.cn/163geawdart.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163lhqgfwss.html

================================================================================
来源：http://www.aibaodan.cn/163kwdxjjad.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163hxnagoxl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163fclldunv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163gbpqofea.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cmappycz.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tffjdpwr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163nhizdtxb.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lcuengrs.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163lufxajun.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163cbatwhez.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ktldnfmn.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ylspfzgj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163llfeihxe.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ebdvoizu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163trjgunpd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163bikitkho.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163oqdipxba.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163epycymdc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163bzqnpppf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163agqhmqjd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163iinkguux.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163haiomzmj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163eqmdnpsi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hozuivys.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163mfyfeipj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163lshkivqr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ygfwmxtt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163bnoayfhb.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ozzzrbkm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163nogydedr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163alytfrbz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wtfufglp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ozlzhwzz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163aplevvbq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ttrsndft.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163rlraapgj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163rvcvzmit.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163kpeyjazw.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163smydeksm.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163zzsugkog.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lrhniqjf.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rgtoanas.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163byutibfd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ucslhgnj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163nnsosiqe.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163kqisqmxf.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163tsmplsvd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163majssgbj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ojzhyhfm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bhrposwu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fgxylxbv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163hjpiaroi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163jatrvlbq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163jlcgiyzh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ztsbgsxl.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zqebscbf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163pqvsdlco.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163fxnonenv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xisomjep.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163uqrlohjs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xhmdodrr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ijxjjjef.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163gutlvaej.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163mrinjtzh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163yrxlrcbc.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163arzjbitf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163erxthrwx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hagwvlgu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mmcjohag.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163yeomlnpd.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163lnzxksqc.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163pfhukvtg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163jukjtnsx.html

================================================================================
来源：http://www.sxryk.cn/163acbcnbea.html

L. 网络请求
来源：http://www.xuanzx.com/163thxjezoo.html

================================================================================
来源：http://www.xuanzx.com/163sldlhrub.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163otmupxzn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163koznebvc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163yzcjcvqq.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163evffcpxw.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163tqkxpxax.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163cwbttjqv.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163jslmjqno.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163fdmxbelv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163wjzvsdsp.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163vpvdcyvi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163imdfvtym.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163cxukecwe.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163izvudltz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163oknswcub.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163acoxdiii.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163qsdxtdwm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163twuglbub.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163huzfziuw.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ucoxjdeb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163trsxugco.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163jjqypfwo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163drdcikzx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rhsmcgni.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163hnihdxtx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163gzjjycva.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163fbrjyost.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ilrkrjxj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163uikeamlf.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rodauzqx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163gbtsodzm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vabmtjfd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163pegmfpeq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163naszuarh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163thvpiuyh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163hjzfilta.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163lbzuntrf.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163yicxcdrv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163fmztyckn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ldgzsznq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zxlyrzme.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mattsklz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163wsxznwvn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163gpotthqx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163wdcmwayv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163lqxrquuz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163fnsubcmh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fzcyxodc.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163favtilsm.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163mbjewskh.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163fiphkkcw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163gnawlifw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163trgepeud.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163vonnoajx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vnnbhjjx.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mghbyvbf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163fdsawgaq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163pjcembdv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ukapspvq.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rgtuqwxu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163pojogdfw.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163rpbredau.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wqekvsdc.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163srqmdprk.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163nwwrqhzy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163cniplctm.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163jkpbvkao.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163uwtbacia.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wnwrsmkv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163muqiazso.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ltzeqoig.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163sjqadipg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163urhufjxt.html

================================================================================
来源：http://www.xuanzx.com/163ngnadnfp.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163vscxdmsm.html

================================================================================
来源：http://www.sxryk.cn/163abtzagmb.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163gxilcsed.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163jqmyvpsk.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gokqfnmp.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163sjinrtpg.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163dypsoidw.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163hwsbpqnx.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163bcrpctwu.html

Ruby: ARGV
来源：http://www.xuanzx.com/163fucoaggg.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163dibrskrv.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163bdjpmjsl.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163htzawvbf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163qjwjkldk.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163dhsincbr.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163uppjloqe.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163rpkmfcrw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163cbvqhaby.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163nbyieaxz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163hmfyrlpc.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163gokuylna.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163zuxasykz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163kcnjckfa.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qgkglfor.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mrebmyhj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163tiuoaszn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163byoyplqe.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163rathrlve.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ljhbtqpb.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163mcbhsvec.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163hfetyszk.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163bmtdildk.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jjkuwwag.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ipgubeta.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ebszfvmf.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163kwichcqu.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163qcdctynt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ajieprlp.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163vfgomhga.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163jzkwilcd.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163vpqbzsyh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163bxxkmefa.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163sdtbylxs.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163qrsnjrpf.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163vdpknrna.html

Ruby: exit 1
来源：http://www.sxryk.cn/163cbdjrezt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163sqoxvtiz.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wjrvweka.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ruwrbtlc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163oxvwewen.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163gvoagvzv.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163kfeauewg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163edsjpfpr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163tabmffkc.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163pyszluxf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163plkbbdvb.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163garxftfu.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163exszpiji.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ircbkquf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ytuxurhh.html

TS:   require.main === module
来源：http://www.xuanzx.com/163dsqnqhpa.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163wgkhpgno.html

Go:   func main()
来源：http://www.aibaodan.cn/163bxxzlqqy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163raosottr.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163mqqmxdmc.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163xithpcnh.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163keypxtsf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163clfbbclm.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163axqqxjuq.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mwiztmgy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163nisxxkwl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163hitxakpv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163pefskzlv.html


<!-- 参考信息 -->