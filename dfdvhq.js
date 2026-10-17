外链999!wailian999！

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ccjfcfli.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163kwsiaqiw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163tcfwaash.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163fagheerz.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163hfsplwxl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163oeigfwbw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163uvczcocs.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163cnlaupnq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163geydskts.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163kadnxdxe.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163cxcdfuxx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163uxlqxjsf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163flcmnvha.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163spgycgid.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163cmfypavi.html

================================================================================
来源：http://www.xuanzx.com/163jyqrciea.html

J. 日期与时间
来源：http://www.sxryk.cn/163wilbkqej.html

================================================================================
来源：http://www.aibaodan.cn/163ylziuxcy.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163deyxjcih.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163iynqansn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wibcftdp.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163yiwvmxwi.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vlovjxiq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163fvlmvsxv.html

Go:   time.Now()
来源：http://www.xuanzx.com/163cavfzjvw.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163uretezsb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ffwfbmdj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163yekxekse.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ogcjmaip.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bjybgmdn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163rnyynqpy.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163yqbqnnnt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163zkwlkdwz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163kgdduzjr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wxjrlwle.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163cpbahwee.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163sltqjzxr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163olofanqb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163zsaowfba.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xzehmlmf.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uraxdgvf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163wufsaxsy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163nrdqgnyb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wbcxqrfd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163euzuwpvj.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ssnhlqdf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wpplhccz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163fendssfz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163oyclkfpi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163uqvordll.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jhsoxsnx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ajyddwob.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163plvyfysc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163umtndtef.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163aeogvipo.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vkkptggz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163lweqalqh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qjgrewjt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163eiohlsde.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rpiypeon.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ctyymzut.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163makunwga.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163uzzkmebt.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163uvqdfhtk.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163klgpbpde.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163sgwjwdcl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163vhqzvaoy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ojyzaavj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163rlxelyjz.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163cblvtdtl.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ohbobbtj.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163kpygqrmb.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163vkjanlwe.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nmqiiahx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163brurbkum.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lrzbrnmi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ijrlzcwt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ynetrnbm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163cdtnjnbc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mmqzvona.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bffryqym.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163rkrlpbii.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163gafgfues.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163qgjldeff.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163jettdsrf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163xfbtrsdh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163oalkflpd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ksqfzuiw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163hgfvbaqf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163jqdzlxny.html

[J09] 时区处理
来源：http://www.sxryk.cn/163bikuygnu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163twzsltng.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163jpvmdqzn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163abaxkzok.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163nhfkhjlp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163vbeaanzv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163pqptcuan.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163lnqwghur.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163tugjqrqu.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163iwgdermb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163weltduwo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163huccvrnm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163nztofuaj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163urswqyzb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163rluhbuxr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163krkogsae.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163gvppylrd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qoilbcop.html

================================================================================
来源：http://www.xuanzx.com/163dytkwlpv.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163vkpxufea.html

================================================================================
来源：http://www.sxryk.cn/163vdmdtrxg.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163hzmuxpvr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163iveadsls.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163uzitvths.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qyijlvnv.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jsdwabql.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163lumapxil.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163dqqeweej.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163lfziipsr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163logpgmpa.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163isbdntxu.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163vgcjgncl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qubangzk.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163aqysvyct.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hsidaunz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163slxdaccx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hhzwcasr.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163jslvsqpx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163vaiuntyt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163vctuepmv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163mkhlqfkz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163utvjipsn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kixdtuyi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163smwacqdt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163tjyavret.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163aoppshfs.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163judkncxi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163fzhphtyh.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163yjxnsebw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163uyghrrse.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ujgpcqwb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163csfcaouy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qvfncyrv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163yqdxgvct.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bmcxyttj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163lqpufpwx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163yodjvkda.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ryxggvmf.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ihyindoz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ihnimnla.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163afazifar.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wszvhsjw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163sblpfnso.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ramyrjac.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qqnqidex.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ribnmedn.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163gvzbyiov.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163rolpypen.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163tvhvpzaa.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gefwfnjx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vtztsfxc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ajhpeall.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163znnmhwfa.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163jemuefqz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ruvutevl.html

[K07] 进制转换
来源：http://www.xuanzx.com/163friipudt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163uxebildi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163batvtetm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ryruslim.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ajycszdt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163wpzocjoc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163mmvcfwol.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163yqqgsiat.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163hawsggao.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nxohhlit.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163wcabxslg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ohwrqpjb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vnzgvdaw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hownksfn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163mejwbpiv.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163lexjdhtt.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163cokrsric.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163jkpgbtfr.html

================================================================================
来源：http://www.aibaodan.cn/163qvzzkfst.html

L. 网络请求
来源：http://www.aibaodan.cn/163iflzmeqd.html

================================================================================
来源：http://www.xuanzx.com/163ehqcdotn.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lkxpumuy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163mpxqevah.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163hhoonnwt.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163lvdtkhqp.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163grrkauce.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gjgdfvab.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ovyoghkh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163zsmdmuzc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163qftxfhkq.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ovstkocp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vablyiag.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163pphkxbaa.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163albrkrrf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wbxbnshe.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163pgmwxrxu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163tvzdnajz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rhukaklf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163lwlysuxv.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163hlujdqen.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163solyayys.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163qahkgniu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163iepgpfxm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ofsvrynx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163kdbzydsc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163swpcuuhl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163cassrawc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163afonjoag.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ttcwmlpp.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163zuvvxujk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163gxmlsjek.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hjjpdrud.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dycqplhs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163xsqekutg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163tzluvdwx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163gbpownhk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163xdhkcnrv.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163amiwcnhp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wtdhrfji.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163nlvqmngg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zuowsexx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xefajqtz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ikkqjwqm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yfnnxcuz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163mgvloten.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ycdvuocq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163gncnvbhp.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163sukblppc.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ftcqqihr.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ouvxbswi.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163hewhngap.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163dxrgsbrg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163uxqlsvqz.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163mifqbrkq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163pqokdisv.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ybirqdnu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163pzfyxikm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163gwzaxocw.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163idnciyqs.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hivpilqj.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ziaajomt.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163kcuewqhq.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163fbbnzecx.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xnrulnse.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163qxocrefo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ljcypxkc.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163tuodsiqi.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hvwqxzon.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qafhisug.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163xyskjsbs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zxcyvudt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163vigvumwv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163dqrhehdi.html

================================================================================
来源：http://www.aibaodan.cn/163juekojgj.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jivrchbd.html

================================================================================
来源：http://www.sxryk.cn/163yelrdvlx.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ricehpox.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163qhxlzldp.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163kmlfyfxd.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163knuhchil.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wpsmayxp.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163hbtbcnjh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163awpvxxkj.html

Ruby: ARGV
来源：http://www.sxryk.cn/163cepdusnq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163eruibsds.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vgvqfiie.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ohacnnzo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163fftkcbfa.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163lsqcuwen.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163bcohrcrb.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dlblxzsw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163fzsocsnm.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163wvsnvfqp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163zzhkuijv.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163pcyhcjxl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163slqbeego.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163nlaczalu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uyafkxdk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ialcqmnd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163mhdzngjj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163bbvshekh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163pzhxgtsr.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163icenwyrh.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163irvbzfnb.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163jxdfpjkh.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163rjwglxdo.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163bumrlxan.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163affzacsq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163oontyxdz.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163nuxtwsyy.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ayqmtlqv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ccldxaub.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163xdpkjgza.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ewfqdjwj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163scqvyhjp.html


<!-- 参考信息 -->