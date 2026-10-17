外链999!wailian999！

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163vtqjvftu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163kvhxfgse.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163gfkvxyqk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163iostddax.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163zkbyhxbh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ztsxdajk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163kzkwmvgx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ejombgax.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163opncdqea.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163yunojgnh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163atppjcqa.html

================================================================================
来源：http://www.sxryk.cn/163bykknaig.html

J. 日期与时间
来源：http://www.xuanzx.com/163ksbfbhnz.html

================================================================================
来源：http://www.xuanzx.com/163sbzulszq.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163egkvvefg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ecfaxrkt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mmenrpmq.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pgqcnqlj.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163eszzdiws.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fapsrdjf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163gdxvnizh.html

Ruby: Time.now
来源：http://www.xuanzx.com/163bgekohxb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163gkfbolql.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163dbqyonju.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163icebockz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163keibcxkg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163oakgvyhp.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gyykuwbn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163smtoudqc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163msgucixr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ixtnnrno.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163eyouoxwm.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163fnnbdidu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163prfqfjns.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ekbvhrst.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wyplnqsu.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hgmovqck.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ttkkogpg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163lnjucult.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163fzmyshgl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163xkncwded.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ubngmyie.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vheemnng.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163mqfrouig.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163zqlblmqq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163xfktclis.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163xthvgfqd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163efkqlojn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fwvucrwu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163dannhogx.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163puualdxl.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163tggnrykl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163itzcctvj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ztwdrguy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163avgpgffy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163llojluiz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163qhllozjo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163zcbwnraw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163phmmtxxb.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163sjtrgrns.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ycawolvv.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163cvfusyci.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163zvbmsnpm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hyayesxa.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163zurmhqwd.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163jdzgqkfm.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jawmodwd.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ortzgspk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ytedwchx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vidqblte.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ztedjuet.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zdxqcrgp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tyiwurxz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163txzadeni.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163uoanbyvy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163roqsvjps.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cvoindiu.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kfnqsotx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xylnyuoy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163nbclxrcv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163cmfdgvzk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163yhjynelr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163gbsnhodx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163zfbfejwq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163yvnkkmqy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163rljtltqr.html

[J09] 时区处理
来源：http://www.sxryk.cn/163mnlvmysl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163pmrttrmv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163zojicyrt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163udrzcdae.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163pumgiezr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163xaqsagpi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hsyihazo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163uqamrquo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163glplcdni.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163lvhnicsg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163tfagxqjk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163jwauebhz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163bipjdnda.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163gxkzpizj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163yqtkrdmd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163whxnduwp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kobozcjn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163atpbxvvs.html

================================================================================
来源：http://www.sxryk.cn/163hniihxrn.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163cjhiziak.html

================================================================================
来源：http://www.aibaodan.cn/163hwjlkyic.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163blqyxhmw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163awazpfuw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pxzimswh.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163suwnleki.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tnecfkac.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fkvlufms.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163uhxlosgu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vvrmwlxz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163vixdbcuj.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ivkdcnsv.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dibvdmbi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163eezpnxog.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163djvjxzen.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163frkixopn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163nrhtbprr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jhxzwvod.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163lpbeyfxm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163aksmbtuq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ccvorucl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qgfrdara.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163iupstdgj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163eannkhxd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dymrhogf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163cdowlfxk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163fgyetest.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mdlrbcli.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163eubydppc.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jtkjcoqy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163gzhotdrz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163seunuwff.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dgfffzcs.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nnahvrym.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163uorqzclw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163uvbtglzw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xfulxkaa.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163yhqnvwbp.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163htocsjqk.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ydisvcuo.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163pqbkjekp.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zprwlrwp.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qjumlcdp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163cpiwwduj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163lywklpqj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ysmlcmfy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ehlkwjei.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163isaiprho.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163eezdpxnc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ddwycaso.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jtqgoyit.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zpaxjpua.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163zakmlutm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163mgxdqtuc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rlthtjvo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163fvinhsjn.html

[K07] 进制转换
来源：http://www.sxryk.cn/163hkqztgdg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163xvloruoq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163iprptepu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mfojdxmz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tuzflkxk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ramwygll.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163jmluzkoe.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163tuprxgly.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163rrkvgspc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163hugiqcyq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163tynfmcxu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163uljqywjc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zjpocvwx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rhnklhnf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163fpifrkrj.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163cruapuvd.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163sxlmeigb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163zuuglrmj.html

================================================================================
来源：http://www.aibaodan.cn/163pjrwddbv.html

L. 网络请求
来源：http://www.xuanzx.com/163kixbiwkk.html

================================================================================
来源：http://www.sxryk.cn/163rctljsvs.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163udfelbzi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163qraxrojb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163uzkvphvr.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163arqaabyl.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163cwkxlcxa.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163zbajyqiz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163aiamfjsd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163uuzkaiuy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163olzvsuya.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163begyewnc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163blrmejdq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163wgprtgpn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163lufdnsxt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163pefzgetl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ivfbsqrt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ffbssnem.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163fvhuouyu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ghrmsofc.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163jmawldem.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163kdgfdqpp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163vimcnumh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qeqwsacq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163naasxgql.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163rayljpju.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163yyvrpnph.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163fbdhdzai.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163swbpobwq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163kbcsuejb.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163reeuedno.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163arcidyqy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mkppocvo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lqbygjsa.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pvpovkqs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ngejpyqd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163nqvyvnfj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163rgxjlwro.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163hxakfwww.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163gssapzzg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163oyrjrjit.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yyppkzap.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wgbwyeen.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163owqjqosc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163mzgtmror.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ugavxnpn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163mtrcbuxv.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163govfviuv.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ceatyzue.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163qcxigyvb.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163jdtkwflz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163bnepstwz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xabyjben.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163dvqyfwyj.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163yyrnfbcm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163iwrabkqq.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163glowemvl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163hirsayda.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163lxsfgfpd.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lzddkumb.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163laaxbcvd.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163scxmekjp.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163bendmocz.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163bxzqaids.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163nyfwiski.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qftcnekv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163aiuzqvyx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163jptdckwz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yrqculjj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163llnlnphg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ldgngbfb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163hllcynws.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163wcgqvvav.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ylbibxwa.html

================================================================================
来源：http://www.sxryk.cn/163adipxdvm.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jixaefam.html

================================================================================
来源：http://www.aibaodan.cn/163gheqndhv.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163kijzzwha.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163acxkzwgq.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163wuoyfpex.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163eaegpkky.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tbsdmxcv.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163tundssey.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163rydnqojg.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bxxyetnt.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163dnyybhcu.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163cngwkqox.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163womzcync.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163sqezyuvc.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163sfuvoevw.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163mkaxkscu.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163wtvvncfs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ypxixggi.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163lwcjbcgh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163zallseam.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163lpgihdqe.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163fjjvtuej.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163zqotkner.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mntfneyk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163azmdlqqu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163frcvoivn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ivabwpdc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ejobssvo.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lpglfnrm.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163nvkhomma.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xqftvejs.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163fpfosvxc.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163uuxcupig.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163jcfjjobd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163fyupkcjj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163hmwzkjio.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163njihxwbg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163nlfdyctl.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163pxckkbca.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163rddmfkky.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163gvklazxr.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163qhvrfitg.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163kcbsmiez.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163utlwvgmc.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163uukntoby.html


<!-- 参考信息 -->