外链999!wailian999！

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163sluitvps.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163icxzrhkl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163jurakymj.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xjietiiv.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lgcqbezu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qpaodxgh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ovhpbxfj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yqoszbic.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163echwzpio.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163lfcqpmvw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vttlkkga.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163svzykguc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163cvjgqoeu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163tcvqjaak.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jzfcblme.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163uzcyrivq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ebxuadwf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163dpbbpwca.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163rpcpezwy.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163isozvioz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163zdbyvvfj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hqfoiybf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163dmsrjhlh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163jrnhixqp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163texgcpee.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163oewmafep.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163agujfhmn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163jfjcqllg.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163tlmsdnsw.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163vibkfxnm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163xogmrbqv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hhitnxua.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163kxvigtbn.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163evycnyxi.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163lujbqxpw.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163wygcayka.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163dzgvffps.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xhjdlslu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163wdmdtahe.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lpbzpwqs.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ieykaify.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163lvzalhje.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163nrakfrsb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gmihlqti.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ytupqebf.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163xthearqp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163bkcjwlcb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163xlkjilqh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163vwawfukr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163lkarglmu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163eapcqcew.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163guvxcoar.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163obtqonnl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163hvukhsci.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163izivmqjz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163feyltuul.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163idacyxrz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163sdajbiaz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163oqvmyjqz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ojbtbhsq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163tyjdispo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163srmgtzzj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163uhhivgdz.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ztviadoq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wnhhvwpc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ksyecpmo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163efxgobva.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163brrgecwa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163pdrkuylp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163inwasoie.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163kxqhgvvh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163whveztmr.html

================================================================================
来源：http://www.xuanzx.com/163oxixeoxu.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163hicvcpdx.html

================================================================================
来源：http://www.aibaodan.cn/163irzhwvvx.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zvvtohie.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163htpeumrj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jhkpafnf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mthhfmzc.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fayzbqye.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ekvrspnq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163tvfvjaij.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163drpayhtb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163swujrria.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163wkwfbgdv.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163qaftzrmp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163pcxbhbec.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nbmxwwpg.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163whosvpzo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163uzeomgyl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163fehyqvlj.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163iqadkvio.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zxssjznm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163xvvpzcah.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ikozrdwi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ohuvkakz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ijubcfme.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163cbtysfli.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163vdcbxdro.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163cjuouodl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163bjtsevam.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jproibze.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163oiemcllc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163sjapkrol.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163pndfrwfj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163dvxdrgbq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163avivhsvb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ieurwyyn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nucowhrl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163uuahilca.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163fpsqmjrt.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163dhsomldx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163lchoxjfv.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163iuwolczb.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hntmykjn.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ngqtsmwq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wfnflndy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163nxsvbzti.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ydfordda.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163pbdzepwj.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163zmmgsdkx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163mgsyhmue.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163owcmorkb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163duzleyki.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tuzhpjzx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163wsvjtdjb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163hldfsuqe.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163yijgaiqx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163kqzuabhx.html

[K07] 进制转换
来源：http://www.xuanzx.com/163rctnkodn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163cdysdjrc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163yebucfsl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hcvsumio.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dkmcdwwt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cmpsbvpu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163phzbqiwh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163kfcheqsv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163sgbttnsv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163exmqpcyp.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163wlpzzcze.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163egvwvstu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163cilsjjne.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163lhhfrhqw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163fmngkowv.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163gqyaoafj.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dvztkgks.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163xdvbgsxu.html

================================================================================
来源：http://www.sxryk.cn/163huhmhsgf.html

L. 网络请求
来源：http://www.sxryk.cn/163nmyxqmxa.html

================================================================================
来源：http://www.xuanzx.com/163qudbwymf.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163pnjsgnsk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163egdggjbc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163bhtecejz.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163igiknwwo.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163projdepi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163hzpgmrxa.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ihdsodat.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163hilagoev.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163fvkfonap.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ymxomlex.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163jngjgrov.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163xfcftrqd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ndromfeo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jkoeeuul.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163vepgeqxm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163xrahacnc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163tezdbycx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163phvbeqhn.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163zmycjkfo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163usnwecfd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163rbzfmmll.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zuaqnrdx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163plidphir.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163advmvghm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163fqmigqcf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163vfasmvkt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163znovkkxf.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kstskggh.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xtzwrztd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163blmconbu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163avrztzfm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mdtyofko.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163aozsddfo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163blymkyzd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163poeqobpf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163eiqhqygy.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ihmoolwk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ycpdnxgh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163nqnlahgo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dvngofxt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163daiznifq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ctgswjfi.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163sftfodex.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163hruxebgl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163onuqjtkt.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ofjtsxon.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qrpplrna.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163zszdexla.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jfnluzuo.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163kbsjrmbz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163zxmjiqma.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163hoeovdmv.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lvtrzyxt.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163jxjpkkrd.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163eezkgeoz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163blnunkhx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ljmuktrc.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ozniqicm.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163tlbtxvsu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ldvqtknj.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163zaubpggv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163inbmuhlo.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ijbpbzbl.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163xfafnikq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163vojrylei.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163tzmanfxg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tdiusqam.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vqqbxlnx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163arquhhrp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zvjbklrs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163sygvenei.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163nqsvexih.html

================================================================================
来源：http://www.sxryk.cn/163lfsacppn.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163lfabztmf.html

================================================================================
来源：http://www.xuanzx.com/163pivgeziv.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ytbcozuv.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ohbfhjic.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163dmotgdaj.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163fxoehbcb.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163yhryhoih.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163dpfidnih.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163sviuzrut.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163fkzplwzq.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ysiyiodv.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163udxgfuti.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163jopbofme.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163dttfovor.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163edjmpqmy.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ampuveuh.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163cblwgnaw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163tktoqdsy.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163pygdtlbn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ywkxeyym.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zuexbkti.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163lbodvsek.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qnplbwwx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qasculdj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163epwnfgfq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163fqjdteys.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163xrreoksd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163udpfvjvg.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163yrnuozma.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163pqifhkvn.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163zxonaupy.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163yffzuqli.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163gbqyxfpu.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163pnoqcotp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163dukoputm.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163hpuyoxpc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jlhzepmy.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163luvpgasn.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163kogvkuif.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ypnggmgk.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jycazpff.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163xxgyryjs.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mjyzusat.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jvlmypdb.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163bneatpcu.html

Ruby: exit 1
来源：http://www.sxryk.cn/163jtnqxewo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vqluqytf.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qwbpemsy.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163rxxzrtsv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163whbkjiap.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163zjaikuci.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163eiydqfwx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163yinjovpa.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ujstmxik.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163opwfndyc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163eesevnrp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163jqyulade.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163iqwslcjy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163qbkilcbe.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ptxmrlpc.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163twtvexao.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163owvpnisk.html

Go:   func main()
来源：http://www.aibaodan.cn/163muteawsf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163xvevviwi.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vdlrojpp.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163cycdrxrh.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163icylnlxp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163karwyrrc.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gdssgsrm.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163lpmppwso.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163czoebbxu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wcqhdxhs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qvoheout.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163pmtzivoh.html

================================================================================
来源：http://www.aibaodan.cn/163rddqkqof.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163rmfsvpag.html

================================================================================
来源：http://www.xuanzx.com/163vpjkfyfd.html


<!-- 参考信息 -->