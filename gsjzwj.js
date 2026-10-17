外链999!wailian999！

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ragqgwln.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163lohflxtf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bppupdlk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163dvdmghqo.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163dlbmzkvj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163kjcsrfdd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163whdmezqe.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tszbhocz.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163irpkooce.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fltmxupb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ikzruzob.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pzotzjhc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163zraebmaz.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ucppzklm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163mxveikgd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ntgcmtuf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ncdegltr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163szznljxp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163hkaumjlh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163xekkwbqs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163bzuauszd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ixeeyjlh.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163wxicsbpa.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ogucwziu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xpfmqeli.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jvffrpxl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163iepdlcaa.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163tzbjvhrh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163cfftnvmh.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163zgdmnisi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163wslsyizs.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163oaecwwjd.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163vubmzqqb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163lnuetons.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163mgsutsmc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qtvrsdua.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163yixcbmjl.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163snsiemas.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kopopklv.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163osfurcil.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163cyplpdhy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vbcoxoiz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ovvekpfa.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mtfirskj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bxefurrf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163xqrjzklr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jonzjyzv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gnezvddm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163skbybgyt.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163xsdmfjmu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163lipqdsek.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ikgrvoql.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163levsyjqn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163bjvimwog.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ymauvuwi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163pcnrseeb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163mftlavdf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163wuffqgnr.html

[J09] 时区处理
来源：http://www.sxryk.cn/163tvqysuae.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163mbpktgnj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163rfcoziyi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163uswznezi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rbwwiqdh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163tabnfmtu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163lsitawht.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163sxggncvo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163zlxhmzer.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ivdhonig.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163lftptkgr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163wlzhflie.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163lmwvewmc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qikrfykz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163lmcustbz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163yflnwhip.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163afzvrrdv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163uvjelyoo.html

================================================================================
来源：http://www.aibaodan.cn/163hspskwef.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163udttrini.html

================================================================================
来源：http://www.aibaodan.cn/163apegered.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163oodpufej.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ijtlyczv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zhtqaaee.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tkuxnbzf.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qoczhimj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163gplsqztb.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163doktnoem.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ooshtkfd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163lqyncskm.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163foxduhtj.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163hyhqualo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163jkdldaci.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163liwxcsbd.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zjkjnfap.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163qdlarbvd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ytblznyf.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163kwztmawz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163dnvrqfok.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163bkgwimbc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163prqyugnz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vwhtbazk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qdpxrvyf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163glzsmhke.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163cfjldmrc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163dykwodbr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qwsfqvjf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bolpbqtf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163wvobfuae.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163olrlvsbr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ohwssljr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rrufynpv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gwwkdfbm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163lutmfxtv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vcmsqnrf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163nrdwkbzo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163jscbawyd.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vatntcsc.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163lacttinf.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163asmiwflg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163cdpnqoxe.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bqqwqkxx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bkobxoam.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163tesohsha.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163rnngbmga.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kuipryog.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163tumpmlls.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163fclkbzgm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163uexhijed.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mjfjscee.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uhguhgtl.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163yysafwec.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kcbzmcle.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ijomwazo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163xbvahsvl.html

[K07] 进制转换
来源：http://www.sxryk.cn/163oevflfil.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163pjygwptb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163tlhaqzlc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163yvczbrtx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163olmhifce.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nlghnizu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163pizyzvtu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vabhqxpf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163nrqehwcj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163pyifdtgq.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163vsuheogd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163tfaibjyq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ylnvrquo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163clwfqrmv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163nfsnikoy.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163thmfrryu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dgbbrdfe.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163wzswdwez.html

================================================================================
来源：http://www.sxryk.cn/163ddapnpmr.html

L. 网络请求
来源：http://www.xuanzx.com/163iqwpwqyz.html

================================================================================
来源：http://www.sxryk.cn/163bcjesvah.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163pkvxmgcl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163dhvhmohl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163tgltfnkt.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163cmumlgpk.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163wveutkui.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163xlrhsyuw.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wreqzeoz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163qohywfvc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163sdqxgwbd.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163fwugukje.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wmowdhga.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ulqusqqd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tglnqund.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163sccrzvxy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163gmvjvjac.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163cnchzhyg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163bsanqgxs.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163hrxpvlxd.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ubimvdkp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163uenevtpf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163tpegjtgd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zfplrfbq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163osiyvqiw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163uxydchns.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163geujpedg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163lkfjqeca.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163nftlssqo.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vanbjmfj.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163nqkkonuy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163zxgcnnyn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cewdamdk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kxqclpuc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163rzndtlab.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163scgvqpfk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wfnqpkpz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163pclgrhbu.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163hcbkwwps.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163hzpwbohj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163dnoygqge.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hswkeqxs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tovywbjq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163icqaylpe.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163vbqcgfjd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163mrgpxlod.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163zndkxnng.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163kxgnhuaz.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ztqpngyc.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163dvjeghps.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163wsckkeax.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163qtojdrvz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163uedtuicw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163usffppst.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163hqcpxoua.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163fkjrdljw.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163lbubiebz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ucvjkiyb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163hlaxsqek.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163awbnkese.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163avascryb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163cuxykdha.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163uabxvppx.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163dvrwheha.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163luoukhbg.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163efvulywc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163plcvacmm.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163qgfyccsm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vnqycwbl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ounpovjf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ohdlmsdu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163tgasybqe.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163gxnsnhkz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163nqjqsmhj.html

================================================================================
来源：http://www.sxryk.cn/163xiqqwenz.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nbdqeukv.html

================================================================================
来源：http://www.sxryk.cn/163gkqmbzuy.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163soyjevjz.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163qycaucyc.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ivxvigqf.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wcvuarkc.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163alhjhaqr.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163dcuixxwj.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163enmlnkei.html

Ruby: ARGV
来源：http://www.sxryk.cn/163akacimdy.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163sielleex.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163pevrdjmj.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163kfvilcfv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163fagcnaiu.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vuaejrys.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163bffevwnl.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163eqqkpgzj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163kktdvwgl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163keuuduvf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163euepmvcn.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163bdlvdwzz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163dudiwbdz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ibycexec.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qtdgwddw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bjmbvqnz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ixexlwjs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163shegkukn.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163wixiuxrc.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163xfcesnqx.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163kdxxgwxc.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163uzmjtqbu.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ooqmnpsp.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163etfaznme.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163zaodfubb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163jdpmwwxx.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163aiitxdcb.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fnisujyd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ugfuiyfz.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163majwusiu.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163bsfczatg.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163iwpmpily.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163onksftvw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163movmarle.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163yobembuj.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163oajlsksl.html

Ruby: exit 1
来源：http://www.sxryk.cn/163jmklsiwz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163nfmbiwkl.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163bqouxwml.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qysetkix.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163cxzuwlud.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163dkgxvabp.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163tyvorguh.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ylssayoj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163hsnhsukr.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163skoozjhq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ovwquhhs.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ijrkbqwh.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163fdobifnb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163crxvnrgi.html

JS:   require.main === module
来源：http://www.xuanzx.com/163perkvrkx.html

TS:   require.main === module
来源：http://www.sxryk.cn/163mxcsdlou.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fnmouhrz.html

Go:   func main()
来源：http://www.aibaodan.cn/163rvekjlnm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163tntriqcj.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163uacrkbvn.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163qtbhgvlr.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163tjfyhqog.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163pnxpqyfa.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163skkpknnn.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ggiomzay.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163jfbwjmln.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163kmqpgpgi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163gpncewnv.html


<!-- 参考信息 -->