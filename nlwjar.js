外链999!wailian999！

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163skrgyoat.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163cmnnmknr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lsigjkfq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gdivdfij.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163obhtludj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ksgcczdg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163bjeojefj.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vcyredga.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163pwqbwxzk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163wtwjsopj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zytxfjdj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pulehmfb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163vbwcckra.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rxlcrjdt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163fuxxfcfy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ghtoqcsu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163mmcvzdid.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163wrtrfndk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163kdhnnqbq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163qkgprgdg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163dlmpppel.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vrcmsqcm.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163pkwtutrr.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163samiitog.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163epescwkr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xwqwsthc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tumuqmbn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hvyparbn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ylqamzoh.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163wcladwwz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163imqqxjoq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163elvliqxq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163bnadiodj.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163qcwabhjs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ebjcdjvo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163gazyzumf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163bvxvtmsp.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163yzhkorib.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ljsauaru.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163iipmhvoo.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lczwrakm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163elnpdalm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163gxilsvsi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qfuahtss.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gkatcdny.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163clewqvgy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xkccttzf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vqeehnvb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mewqurxv.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163deqcwvng.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163udrcdlev.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163gmdvhuzp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dahupioe.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163tblwyywq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163dizsktnd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163gizwqnkq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163chvthydl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ybbsrhyg.html

[J09] 时区处理
来源：http://www.sxryk.cn/163kbcuzynw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ridazopg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163owvkfzql.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lkaaclfg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lelcndgi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163rsxlyhyp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kibathwk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163lhtcbgsp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163msogneyv.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zmmqgviz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163tnqcxbbe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163owiytwjz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163smenkfho.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163vbrrbqqq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163fxdnjjys.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ndlcvqjt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163repbyjri.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163thjzzbaf.html

================================================================================
来源：http://www.aibaodan.cn/163vcoylqhg.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163svqndecf.html

================================================================================
来源：http://www.xuanzx.com/163alxfjjxy.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163unuwxqwf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163evbhvxmu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163athdjybt.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163olbftgzl.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163miljdaxe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163nsfpnlwd.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163utotjzlu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163tleaspxi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ipkpljww.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163fpfumzok.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163zikpqdww.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163etayfqqj.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wgswutof.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wqjvytrz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163jukuhtah.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163iazcuurm.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163tmpyplvd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qfmyledv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163jptkgdrq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163rdlblpaq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tkpaxooc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163flxyikiz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dkavvsxj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163twksazan.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163dhniqyih.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qjjzknha.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163qvmydebk.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163sclvvnsn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163yfcptdxj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163bqqnwyxj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ybbauirt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163swffzfvf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163bingykiu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sozgwuyc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163pzmbvkyb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163zscnqxkh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163tbjouqai.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ryjppsbl.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163cepklcst.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fpxkerty.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gsyerdag.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163rpalryut.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163myvsfggh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qsybqzuf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163yqybymmg.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rbxqddsy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vdeyuuhh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163cdderfsf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163equpmfmj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ktibqokj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163lvzsuatn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163plrttdvl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163rnvntxqf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163qydictxs.html

[K07] 进制转换
来源：http://www.xuanzx.com/163aefvwnlr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163hclgeojx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163xllannlr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gslwfacr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hfndzqiu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vciuhkui.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ttzlcogh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163tyfpatzg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163yyxdugly.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ehhncjml.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163qutoflpd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163gpglhsmg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163trlcjqxq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fmifoxcs.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fjoadikm.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163rgmxdwnc.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163tccfklzx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163gwdjhipp.html

================================================================================
来源：http://www.aibaodan.cn/163aqzmvkvg.html

L. 网络请求
来源：http://www.xuanzx.com/163tosodyet.html

================================================================================
来源：http://www.xuanzx.com/163yduojqpz.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163fufttjam.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163mzrewsfl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163xofpbngh.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163pomxvrrm.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163wkhqoslb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163wvptyryk.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163actgrutc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163zorqoivm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163bpkdoehs.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163lucqisuf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ydydhiwi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vutpywer.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xyggytph.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zppzmgku.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163eafwbnrx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163crrnuirw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rvxgivdm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lpctrpdy.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163hhzjfzwq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163luaytcmo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ehlzgyth.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163stazaeeh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qivkuuqa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163kkeohadc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163nvidzrem.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163vpqbbhue.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163oxhpsoqe.html

[L04] 设置超时
来源：http://www.sxryk.cn/163knfcvmnt.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163egtasspy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163duhqoagf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ngvwdeut.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nonwflth.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163xfvwpztk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163iworxktg.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163umhzzted.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163jdktnawa.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163lzymrwrg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163emspbzqr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mceyfdth.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xcxywomg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xuecuwio.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163thxezkcu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163cqualktj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163tttnltzy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163exjtegmh.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mzlbxxhd.html

Py:   resp.json()
来源：http://www.xuanzx.com/163wtgybmgn.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ykseodgg.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ospkapgg.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163brcitbfb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163kbqggcka.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163sssmltxo.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163wstauctk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163yxfuiyob.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163sethpzmn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163gucfyaen.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163hdocfarc.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vepbrzqe.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sfuuuhjr.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163glxyuwdt.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163lphaadid.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163puqqpqdl.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163aupbnevf.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163mnybpbxb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163sawfiubv.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ketljyia.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163euayxolz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ijufhdwe.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163qpaibkkj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163xlffmlbp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163stqsoore.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163zgscrwyf.html

================================================================================
来源：http://www.aibaodan.cn/163jmoawfhx.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163mhxlvpyi.html

================================================================================
来源：http://www.xuanzx.com/163kayxczyl.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163lcnczvmd.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163lkbqaryu.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163bwczyrpn.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163znyaciok.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163egfofckb.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163uqcxtjou.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163xbcwobzi.html

Ruby: ARGV
来源：http://www.xuanzx.com/163fmuqbfhm.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163aagynlgp.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163oejkrnbc.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rxqpjzkg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163cjgagqbq.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163sdccvtej.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163dlgbnieu.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163mthtnthr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163acmgtryt.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jpoonldx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163xhjknrdg.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163xlaabfak.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163akgwulmq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163gjapmufs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bwtfcrks.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163epnjkhqh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163syxxahab.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163srcgsqan.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163zazvxmzn.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163splegrgv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163rswebtxo.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163lkacxncd.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163zzybimgx.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163bcntmxtj.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ospvbncz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163gsogfnmw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163bvjivyka.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163apbxzfkt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163llqblsfp.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163diiwnuls.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163iempmfax.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163kjscmehn.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163vsxeemkt.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ihmrxhhj.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ggbhhant.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163rmmymhnt.html

Ruby: exit 1
来源：http://www.xuanzx.com/163aavcymok.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163qbgzhuos.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xffykihl.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ykchhkot.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163dsjowbxq.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163lcttjtim.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ifqpvitp.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ymgdglqa.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163pmueboas.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ethcozac.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163eawyjdts.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163jzokktie.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163tybfxkem.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xjkxupby.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163xrmippnd.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163vnqfrrej.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163npfzfmir.html

Go:   func main()
来源：http://www.aibaodan.cn/163sqareebl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163zzqymcuc.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163flbwwxtk.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163tzfvwwcm.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163kibqvqic.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ozqdudfh.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jycymnbg.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163klarhxpw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163zgayxgti.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163rjhffajx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163lovkvmip.html


<!-- 参考信息 -->