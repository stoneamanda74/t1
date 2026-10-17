外链999!wailian999！

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163viqogipx.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163avjtmtfh.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163swmckkfw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mnoxwqvd.html

Go:   time.Now()
来源：http://www.sxryk.cn/163yyjpmvyt.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ieveteij.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163jelapkzk.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163xrrocxbh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zkpufkrs.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163teixlvzp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ioqwabvg.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163asxqeaca.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ssdzywho.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163xwzukcad.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jseyebqn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163soyzqoys.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163lnkjzsas.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163jgjmsmrt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163iscnxlzq.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dznwrufk.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rfrfmmby.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ohnoygzx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163bxnjfjse.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163vxahlnmp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163zrudrrtm.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163gvyjvydl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163nxooksmf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163hbcskvvp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xuvgleur.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pqpramtg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163swuomrly.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163fwoewayu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163jssqoqyv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163nhlcivas.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163czpvknvw.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163gjdvmubj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163oegpdmdx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wqbqfzlw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xtcrhcjj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163fcwetvyb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163xzxepvgq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163lujwypnk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163rivwyhic.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163xpeyjvjn.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163nmsvvdav.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163cxuzfctq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ldlguwfs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163agfbidbk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163xnglxhqd.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163tltktuab.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163osefeeds.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163awsittro.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163waosxixy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163maxtcxzq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zivqqfsy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yzqezsxd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163srviicle.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163kpmwyngs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163tdnyqfwf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lrfauefp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zudvxpuh.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163gfebvljf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163vnrqhzas.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163pxmlghbg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163wcjmjtof.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163xtlmutzi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163njyzwpah.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163aqfxrfca.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163kkwmoktu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163wcprepfg.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163gdajuqay.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163tfpwkkzx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ugdnmomo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qjgrpunp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tlepmoyd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ajcdnpzm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163wmjmzsxp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163lacxjsoj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163fcxbilgj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pjrtyoyz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163myqcyxgf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ayyqcsiv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ohrtpxaf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163vbplznfd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ffakgakh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163dhsbinrv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163gdgzvcop.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163abuioxzw.html

================================================================================
来源：http://www.sxryk.cn/163zrrqdvle.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mmxgiajz.html

================================================================================
来源：http://www.aibaodan.cn/163uconbdyo.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163kmpccejy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163mgxvruxw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vsxzltdi.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ixirorfg.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ggcmyafn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163nnmyryxd.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163zccfndel.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163tpmrzgcc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163oxpnxrpa.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163kvxfyfhc.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163qzcljzto.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163gytzfudp.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lgiwqkfc.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mubpxfys.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ftwsdzze.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qgrnrmwf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163rvjjakup.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163umqvqfmk.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ehtibrey.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163nvmuevet.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163oxooeago.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ijjoxqtv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mgufvxqe.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163mnuvknuz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163temgzybu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163kghixpzk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163psyssfff.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fuqyczxy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163pkhnyysu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163yvjkxcxu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mcvcbpwt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vqvqegfd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163kimgppja.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xktnoawd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163gaoawlca.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163vlvlcjdc.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163pugarblx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163msajoszz.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163oyluhitm.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jmcnnnjw.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163svaedkok.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163krrccwwb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ljahdcjv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163gxhvdwsx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163otseqldd.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163agrgarqm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163rorpufww.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163emhadpps.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163whaphqbj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163idwtqoai.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163nqpsnkcf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163iiucbdqr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163hnfmehii.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163pscuzetv.html

[K07] 进制转换
来源：http://www.sxryk.cn/163jasbdfdv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163xytuslah.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163xeznrpnw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hoxvgjsn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cqzkpcxh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163xdfnxunk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163eotppdar.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163dbuztvpm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163mgngkomk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163titairtb.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163trrqwnnw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163qiirowby.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163usibminm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163avgslvpd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163djmawjhz.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163jmzakqcm.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163fpgetbeb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163mvnikgny.html

================================================================================
来源：http://www.xuanzx.com/163hwgvjxou.html

L. 网络请求
来源：http://www.aibaodan.cn/163fbkqbhsc.html

================================================================================
来源：http://www.xuanzx.com/163elxtgsqm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ryqkrkbx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lqucrdox.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163mwnxebhv.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163xsexxczq.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163umrsehaf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163kbhmxgxt.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163knjaechq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163anksecgr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163vmiajjwa.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163seybxjko.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ipllbfzz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163tzugtjtf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dtcugvan.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zsgtbpzr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163jtsbmbvq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163hsoezgzo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163puhbtlvk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ndlcqgbc.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163kmawbtop.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ldycozij.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163gaeklioq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ejsuhsbz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wyosusqx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163sacasopi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kpdduzol.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cbphhrbc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163drklfwnx.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163loxfimwg.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163pigqknrb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ijoxyqrk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163pamuukpw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cbkvjidx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163vqhktlmi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163obbxxjhi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163perxjrkp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ocvhkdyj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163jurhyrff.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ndcsgikz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jrqhiion.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kbagvayc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163psttgshp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163aakgnvvs.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163wijvrxpi.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kxaynyzr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163yowrwpul.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163kmtcqfjq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163bxuqgbgq.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163zocwfmvu.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163htspqbmy.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163uwfvvnct.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163gqxqtxrx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163zhixczhk.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163gjaobehx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163nvvehgog.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163okefejwr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qjqlflnu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163lktmltxi.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cogqoigh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163msvtangt.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163zendpfkt.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163fipywfyw.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163hzoyaokm.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163pxrbuzrc.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163esuwkgfp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163mbtnxkaa.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163bwktgsgl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xqrdzant.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gbzpnzxe.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163nwmsimec.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163gejjnehu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163vqjfjhvv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ahqxnccp.html

================================================================================
来源：http://www.xuanzx.com/163htkxfkbg.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163yrpylpsc.html

================================================================================
来源：http://www.xuanzx.com/163ecmzgjub.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163zhkzdjbo.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163btjxteqf.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163yrtsxdwv.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gjodsqid.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bxlgejin.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163rbosqkmo.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163fbuqrdxf.html

Ruby: ARGV
来源：http://www.sxryk.cn/163rtezvpoy.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163pgocszax.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163cxtwoxzy.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163exuqivio.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163acltlkgm.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163qnnmyeyy.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163qkgzzshw.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163olhkzwlw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163sijlfdoy.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163vnhqxvnr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163fcnzhxzl.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163yjhibxmn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163wpcztabb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163cwioczrb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163aqhpnocp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hzuszzac.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163tulwhamo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gsuqstlg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163xlifofdh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163igpyyjbv.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163kbyciqgi.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163fcpmunkt.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163qrquixjc.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163tvbkzdxw.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163xvgryvcf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ncvvtoob.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163deegimho.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163osrxbrbq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163mlnrpfmq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nzkahbpg.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163axjhnxrt.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163skdmdtqa.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163nwxvkwhe.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163bytvldol.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163sknodjut.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163sylthvlo.html

Ruby: exit 1
来源：http://www.sxryk.cn/163walknjmg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163dyfdfspx.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163aocvbpce.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163gfaqajlb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163diyrxslb.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163eodptfvp.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ynnjlmnd.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163qgfeyyra.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163zhrkxrvv.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163mfptftem.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ayorxxxp.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fjuprmgk.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163dycstwbq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163rhiszofc.html

JS:   require.main === module
来源：http://www.xuanzx.com/163yanzwvwn.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163oymzdzpx.html


<!-- 参考信息 -->