外链999!wailian999！

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pkokxudd.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163gthtemzz.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163iteoxwey.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163htebeuzd.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163jehvsfhj.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163lmoxbeas.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163onrpxzvw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163tvtesyqb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163yzuofuej.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mxqcrxaw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163zljwwuvf.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ezrgkvet.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163zharxgof.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163gibolbai.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zapfsndb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163avifkqcw.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163zjwofswt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163wpnamijh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163itydppvw.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163darlyzpe.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jepdlggf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163qhsmlrnr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xwnszugv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163hngmgpke.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ispwombw.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163pbhbfpvw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wuxwivhq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163oljwahjl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163yvpamiwm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163awzqsvty.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163zfbcrnqn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163klvxurmc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163eenjyxyv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163jfdfcuwy.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ytkinpgd.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ibbenkzp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163fmvfjcgd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qrooucoh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163bsivrjek.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163relnikfp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163nnniwwem.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163bggtpbwf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163dzfsouze.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163qjdylypi.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163fdyhhqha.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ogkrkzog.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163hkazxgyp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163fwnbmjdi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163tdttjzoe.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163yeaurqla.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163dgccqtdk.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163qnanofox.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163bqtbngtb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hpgsvkmz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163bpkcidji.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ubdqimlp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ilhoyfmd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163losyberh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xesgypiu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mhekwbcf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163evoopytj.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163qtfjutbp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163zxzaergh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wkmzuhcq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163wbgzumei.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163dzapzlct.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yzpjxzfd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163zdlbyrer.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ylykeelm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163mejuqovh.html

[J09] 时区处理
来源：http://www.sxryk.cn/163wnhppsmp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163aeyoguvv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163gzsmjsjr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jqiudpov.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rcfjvkrt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163gjeipwto.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jqiemeqy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163awtjugge.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163prylckjd.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ouzcdrth.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hxfbxzqx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163zhbeqtls.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163tslezumt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163hfdbaadi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163wfhmwwhw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163iiqoxqbi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163loiocmup.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163aynhseuv.html

================================================================================
来源：http://www.aibaodan.cn/163tdlmflfn.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hmpfeefc.html

================================================================================
来源：http://www.sxryk.cn/163eawwbkqr.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163sgbhzagx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163dlydaflj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qtqhcsor.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163opzsafac.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pydvnijw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wmekvlqt.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163sxstgnqp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163quglgpdx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163oygpedht.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ftiozknt.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163jvvzegrv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163adwqhtpa.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163yiqyojoz.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ngguovao.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163njwwlqme.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ohloxqnv.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163pdpukunk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qdxkglwc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163iruivtkb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gpcoaiub.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163xtyxxwib.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mndivvlo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163geloptrb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163efhkmoao.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ioymbdgq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163endkvjag.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163gfhufwbo.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qeqpvccm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163dpexfljc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163hdsbazbv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163yieyrknj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jhhujvqx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163irdsgmab.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ledhwfid.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163cesnyuvv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ibndefhe.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163piobmmzm.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163gxpswswi.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163psfhvdpw.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163czkesvzm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hkbvrixw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163pscvtsan.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163vdnqtcap.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ukjghjam.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163qelukyhi.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163aemklilu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163byqisrua.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ryjqsglz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yvtbznlr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jdcvivge.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163vcwrclws.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163lgzdcpei.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163dqbfcobl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163hrexvbhs.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ujmdnejc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163awopqons.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163jpcugpfq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ayonzhtx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jejimwmh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rfteoizo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163mkskeeqk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163praklmfw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163cmprsgqk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ojezvtfj.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163btlkadbe.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wakietcl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xkmkrsbc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163lpzqaybz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vuvtjklb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163hvdrjvso.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cjtutzrk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163nlsexeds.html

================================================================================
来源：http://www.sxryk.cn/163ngvirfrj.html

L. 网络请求
来源：http://www.sxryk.cn/163exgdfkro.html

================================================================================
来源：http://www.xuanzx.com/163tqvjkpos.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163xtcguuiu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163hnuysxpi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163fyxaegov.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163fnmxxkxi.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ugwjqhks.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163lbwbxfnt.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163zavehjyz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163pzoygumw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ccpadjzu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163wltkldic.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163scqhrowx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mfcdbooz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ziiicabg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163eyzvjzwg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163rytfocag.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163geuveabf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ljkumotz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tbxtencw.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163vveattwl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163lhavveuj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163uvkgvrhm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rabpwugj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lugxblmx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163gkkbtbqf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163kjvqmttk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163wokxspkn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163bkxovvck.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163dalkdvbj.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163utaztmmh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ykudbtbi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mlgbgroy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mtvnpcut.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163afrooxgq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163rnzmfmfh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163stlnrqnf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163thmoejet.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163iiifymtp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163enaymudp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163jmxuvvpu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dvwclhsj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pfrhqfvu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163mowlkpsi.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163uacobpwx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163igxhjtbe.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163lvzabiwh.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163exosmosc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163hhiweiqq.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163toyljwnd.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163hnplpawp.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163omqnyxpi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mhwmxrnc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163uetnijzv.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163isjstdrt.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163fvlknlwf.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163npsdlini.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163hiclmimm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163wurmsmkk.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zfkbyemp.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sgeekuyi.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ncmtbvpx.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163gklxhvdh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163zxgzohoh.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163yastxvlv.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163spqioisi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163oqfsntru.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163tzvzwvuf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163joyjcwwk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tbgnlsus.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163pxyzzldd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163rfuikcgw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163yqwhpprq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163xezfqqvv.html

================================================================================
来源：http://www.sxryk.cn/163niexwuly.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163migkpqje.html

================================================================================
来源：http://www.xuanzx.com/163kosvhxpu.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163rojckltz.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163mtugclnq.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kxjdfsbo.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163svsgoruj.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163uiaomjqz.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163bydhhpmh.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163dzjzhcrk.html

Ruby: ARGV
来源：http://www.sxryk.cn/163fcxhzrvg.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163dbamczmr.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163deqmvtlh.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163uehajrwp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163tfhyavuz.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ykziactq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163wyfnblvg.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163whjjuitr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163gdszmujd.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163pvledazf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163nvuihhgd.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163rfcooeqg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163erdphycw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163oacaljgd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bzerifbf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hvwcdyba.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dwatjqta.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163hkjpghuu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qpefsfpc.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lgxemusr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163gnvecvku.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163jtmevtvv.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163tsiltcad.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163lxjfghxh.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163idxbsfkz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163isryhajc.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mqjlsdfw.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163qostsqon.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163luwdiaed.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163pylhyjiv.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163devumlpf.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163oxzxzcmh.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163zudczuuo.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163qqjuvybo.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163rgbokszj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163vvdxuxtu.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ayyskysg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163doaygjne.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163nxwrsblt.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jginoifx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163behmbmef.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dumxqmpp.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163twrmyuau.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163pfcomalf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163vylgfhtm.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163xegtqpof.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163iutkbqpi.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163awcntepv.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163webgldqf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163qfffqbvz.html

JS:   require.main === module
来源：http://www.sxryk.cn/163iwrdxyuy.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ztsgzpmq.html


<!-- 参考信息 -->