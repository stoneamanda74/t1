外链999!wailian999！

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xalimepa.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163kpdewrgg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163yuzhnrdl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163mdxuqkfc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163yuvotddt.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163riebpotp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163cnfxzrua.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163diymtbkm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163fhguxyog.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163rlfbubgm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163yyexpopg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163qcwilxtm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163hmndtjxw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xkbtchec.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163gqzsaarl.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ubhnelpn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163mqecwnnk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163umzrdcwc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gzsmqqej.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163lfdogktn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163xmkktaam.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163bsarfsxy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163zdtrhooa.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163zzuetcxw.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163geugpdmq.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163bofqcdjg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163htacelxt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163jiqhpxwn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163nutuxdox.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163xjwhwoma.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163yesnzecs.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ugwzmsaw.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163dykexbeg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lsqqgrlw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163hwimoyet.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ckcnldsy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ahkgkimm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ydmznaij.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163wctellfh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sgjdpbpw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jfuavfyq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jjdogops.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163vizakshm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163yxjvjjjs.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163tfaarfnx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ayfivsxp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163yjhswqau.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163lrarhlrt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163jyzlsiwn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163fmrpjtxi.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163hvmrvebz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163uuiweede.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163bsokihmt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163oaryiibg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hrpvlmpo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163pnvmffux.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ieylgnkf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163uzhzosqx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163uavnpnhk.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yeaooqjg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hdvrvhzz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163qvifhfks.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163outrsphf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163fulgoish.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163mujxiyin.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163rwyutvha.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163eqenfmpr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163kogymthi.html

================================================================================
来源：http://www.xuanzx.com/163zenuxeuu.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163voyznwwg.html

================================================================================
来源：http://www.aibaodan.cn/163astugwii.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163aqwqztha.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163mthqazuk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163haqzdzmw.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163iwubqhza.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rmzpxjcg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163obdeeifr.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163kxvpctnl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ybhoszuq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163wwqcyueh.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163dljgmrkn.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163wfsagjkq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163dbwfglvh.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wrbtsjts.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163giumcbbc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xdovsntu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yaruuxio.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163tkjgzzpq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163mapzkrdw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163pddxjslo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wyafqbmj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rmenkvgr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fkbylcbt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hbvfwsnz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163copietck.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163oigphdnn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163esdhikao.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163mvndcved.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163gvmuwktg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163yhfmyvyr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163snymgmhq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jaxfayfp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zlnkkikx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wdwgutny.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nsexibrt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163gizofbkp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163bfvordaa.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163yahgpkcq.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zgajkiqa.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ropqgpba.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xgxlxscp.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vigprofc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163deavmolu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zhjpygan.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163cbzunnpb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163puwlqafb.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163mmfmqqgk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163iqbtyuca.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ocsnqucj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yuxcgcfx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zqczurwv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163bvekgnej.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163tukxatau.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163jgxazfcn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163koiknvzt.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163cnegwnta.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ojyknhqz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163spjyvayh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163seafqbar.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uhmffkvi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163trmzpkyx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163bdkficbr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163sxcdbbhw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163fgkglpjj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nifdavmk.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163hlsmiaha.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xeimjfmw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ebkbeawx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wsjwukma.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163bduwtxfs.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163amcpfifr.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163quhxvhhe.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ajenbptw.html

================================================================================
来源：http://www.aibaodan.cn/163luypjxmb.html

L. 网络请求
来源：http://www.sxryk.cn/163ldaurbbv.html

================================================================================
来源：http://www.xuanzx.com/163cyxcecqm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163flrqlwpt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rqsxzlyf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163nvlhqmff.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163yovawwdk.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163eeqhdcxm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163rsnnatyk.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163givmiyyt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163zneyfiun.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163urazjllb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163kayxzgpe.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163lxorjkht.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ezwiuksv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163slogdslc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163aqhskvcv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163afvxissn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163yuawjrzn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ipkzkwbs.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163zihqpiqo.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163lffqteuj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163zobnaddx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163semmbqji.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mmexpyur.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lrnzsdbc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163dvsyyryg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163kaqmspih.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ybttzotn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163btyzqbrf.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163uhuvxcjy.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ukvjkrot.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163rirybcla.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mneadyec.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lzakvmqn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163cwfkhrwu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gcmplerr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163obcmkkzf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163esvxthfo.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163uahmigfr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163gdmewtmi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163atrzmkbg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dbplzdhm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qtemgtmp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163mxogihkz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163helbcgzz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163spomlqlm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163itxrysqi.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163dezughcg.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163wbyedzbl.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163zkdhrklf.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163utaytcxj.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163zkfsdoqw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163mcacyqbh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163dxfqvgwp.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163zgdullwq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163qdbknwre.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163yvvmdnpo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163jaiardbr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163qoogmcch.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163eghepbns.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wtkcokld.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163hzkzbydq.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163tekwuwag.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163jtpafstj.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163rjpfxagx.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163mvvwapfd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163jqesiqis.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163bumxzxhl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wtdaukzz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cmmreqqt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163edjvcvab.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163bibfyrwl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163nodovvum.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163flwqxvul.html

================================================================================
来源：http://www.aibaodan.cn/163maejfhoy.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163izvktvcc.html

================================================================================
来源：http://www.aibaodan.cn/163sbnyrfbl.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163sxzhsapz.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163wpkzunvx.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163bdltnqyr.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163paujoahl.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163njkrmtmo.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163dwbwmedt.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163bmxcqqwd.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163bewfmanu.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163pbhkrpug.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163uktndoyq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163fyadvcpc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163eazkqrin.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163zihydytd.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163oezpamup.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163kpeucqdr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163sqowfdrn.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163byunwotv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163qescksas.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163goeaictm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163cxpkynzj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163bzdqhery.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wmxufebl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ekqognpd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dyvlulig.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163cgkpihyp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163encfbrps.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163jtieiyal.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163nmimqaes.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163nsdsotsj.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163wmbmwgbo.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163cqhpvmkk.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163pmuxwqvd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163umvbsquc.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163lwlnosgf.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163drefrdjb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163wdomzfnq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163stwuvimb.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163sxatnknn.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163sblwogao.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163mpyslpzp.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163icxhezpq.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163mgkgaxsn.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163oedqzycx.html

Ruby: exit 1
来源：http://www.xuanzx.com/163chuumhdu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jpdlrbeq.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163yhrzkcqu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uxaajgre.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163jumclyfh.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163pbrowyrn.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163jekqaigi.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163hinufjou.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163xqyfuplt.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163wsjdrmvj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163bzrgwnni.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ovatriab.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163gogxwuzp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xxrtetwx.html

JS:   require.main === module
来源：http://www.xuanzx.com/163btlkvsgq.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xdesefck.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163rdqsygzz.html

Go:   func main()
来源：http://www.xuanzx.com/163qlstepal.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163jenehuwj.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163qvljejtm.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163oognnlim.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163oyjybpkj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163bkjdztev.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163aaxvbzck.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163prqkorpk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rsusvuwj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163qkvfiegy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163apqzcbip.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163sejdazaq.html

================================================================================
来源：http://www.sxryk.cn/163zgfarqqx.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163oowgpwqu.html

================================================================================
来源：http://www.aibaodan.cn/163nbrlsuvy.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163uasqwtrb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163klmgpirs.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163nniqmduy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lzttavxk.html


<!-- 参考信息 -->