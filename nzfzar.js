外链999!wailian999！

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mpaoesbk.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163vnpbochj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163kydkmhby.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163jqvuhxae.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ggzdwivm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163fxobtutb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163kyufdjgp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163qnrsrapt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163pammopfp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rxurtmsy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tfupqkxc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ibkisgkk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163zecrgygu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163kggmelqq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xipnqzmr.html

================================================================================
来源：http://www.aibaodan.cn/163yvfutnnb.html

J. 日期与时间
来源：http://www.aibaodan.cn/163dnnezxfp.html

================================================================================
来源：http://www.sxryk.cn/163vvjotsbh.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163kzuqwnve.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163zoswvkky.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163bdcevbil.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qjwyhmcz.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163neddztwk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ihzdipeg.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163jcbshszx.html

Ruby: Time.now
来源：http://www.xuanzx.com/163tfeqvpur.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ezskwsea.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163afxxfvvn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163isknpktp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163uufrxxeu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163rfuwsybn.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ibjvijst.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163vcimhpgk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163hwoajqmz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163lqyitkfz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vrafrnuq.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163dpqcbwhi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163zeecjwnv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163qqnluigq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wzlthbcl.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bcuamsod.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lxbjyaxx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zbcthkmm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163nidivhrz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163mxqlcsbv.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ktgzbsjb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xkdicajr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163vsopxcwo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163zovnpezx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163umfedqmt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163gowaotjk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163fcuvvgsf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163czenevvj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zptptlia.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163pujwczkb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163aarwejka.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qzgiappt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mxyqazmu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zxzthswh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163gogyesfz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163wuvluzsi.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kpmsbnjx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163nodmskcj.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163otlujxfl.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163sobwvfwb.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163usvgrhrq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163rmlycpfq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163kxpnqafg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163kxcthgnw.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163vkvwnaem.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ccrnenky.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163psbvujnd.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ovudggtc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163edtcmimj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163qzyltaku.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163iiqdlmrp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lvpttoly.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163knutahxl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163amqtihxe.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zqfxnpgh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zfvbotcd.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ezunuwmw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163zkxuqxdv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163fqdmtedf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163gugjtysc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163fmqbsamv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163lfkuvcpl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163bbuzaafn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163oigmfbea.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163rdgjuqof.html

[J09] 时区处理
来源：http://www.xuanzx.com/163sgapejhx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ebciapor.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163bkvlxual.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163litxyrbr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163okpiajdw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163bnwijwao.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163achgsdze.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163xuyurfba.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163rubkmzlq.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163uhvqjvcb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163cednzcwe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163nwahzxhu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163utueqecn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163eiinizse.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163rdlauvwy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ofuurooh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163mfsyffbo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163lvkcpgli.html

================================================================================
来源：http://www.xuanzx.com/163enqmnail.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163lsjomkuj.html

================================================================================
来源：http://www.aibaodan.cn/163kdwxuapc.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163tbgybzau.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163isuqcooq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163fzkqonme.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gtlyvjbh.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lyevowqk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163wbzkxiwa.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163teqqeijh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163hmqzpfll.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163hmlcolzw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163tfgkvblf.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163xnkkoijt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163pmhgppar.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163psjmhmlf.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lzxuscua.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ttvsswhe.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qafkqzjy.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163jknfbsqc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163nbcwxtjz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163oycajggo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163gfkizkkr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163avnrbhoy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bavuazaf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pyfssrvj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xefheiha.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163wzesimeh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163yjhpufcp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163mknwlvjf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163tmdidzcd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vtwkoubf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jjxganxh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bzkxndyq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ujzzyvxk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163vrnvpqmz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tpckmuab.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163qpblqehx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163aeambxas.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gmglymuu.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163vgkvnetj.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163yllzivwo.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mxuvsisj.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163morkccvr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163nomopunk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zrivfasc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163hvzltoyz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163idzpcsjp.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163jbcbygfy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163kvllxeed.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163rwlhckhq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ltdqxoxd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163frihcncd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163oqapiycg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ycdanxqt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ohiagooz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163vssgqfsa.html

[K07] 进制转换
来源：http://www.xuanzx.com/163fjzbmabb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ouawpjmt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163rvxnloeq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jjxzcwek.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fnnxbxuz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163lbqxjwbw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163zkjwqret.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163iviacwvo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163wecggack.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163tpmspqts.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163yfhvghpg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163tocgtibl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kucrekjb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pcjxstcl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163hutlcfvr.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163uoezrale.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163rzmrrlwv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163tmjafoig.html

================================================================================
来源：http://www.aibaodan.cn/163tfviwimf.html

L. 网络请求
来源：http://www.aibaodan.cn/163qxjcejrq.html

================================================================================
来源：http://www.sxryk.cn/163pcynjemk.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163raonuqus.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163pquuzzmf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163axmgliwl.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163uymsgzvh.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163jfwlgqbf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163rbwcngfr.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ablvbfea.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163cuavxaif.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163credmhlv.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163qfrcbake.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ultwexpt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163yfesiirv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163huhmftft.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163znkztggj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163fvyikchc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163mrdrimor.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rajqpapn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163bmkkybbe.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163gmhzkyqs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163doavsacd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163actqtodw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163pothmnrl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163kwpycvvd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163czvlqaxi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163cxazenlv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163douvoxft.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163adwtwqaq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163mfocoprm.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163oqkmtyfn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163icttjxub.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jzlzksze.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jegoqdzp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163lafjxyuh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163zkcifilp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ambeuknz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ikjomdyl.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163oamaeodz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163nexcvjcw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163sphbtkvs.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bruxisom.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163feudanqj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163qihbwyof.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163kekqpscr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163wrsomrgx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163pnxdzpok.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163qgvaytwa.html

Py:   resp.json()
来源：http://www.sxryk.cn/163nwjgzwoy.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163buabifyi.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jfnluvck.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163htxsrmee.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rffvvjqq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163whnhdkwf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163oclwvuiq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163iujejzxu.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163fmjgewuv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163fdrpmfjs.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163vfgimpdj.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ulxlwouh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zgdfnokn.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163gbzwxxyv.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163pcwtttiw.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wgiryoyn.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163sjtllcyq.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163dwyypzmh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163wlzbewhz.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163wgsovcjv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xfobethv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ldswcdis.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jylwqxxq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163mrleqfaf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163txrlyhfe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163tzmhuhkj.html

================================================================================
来源：http://www.aibaodan.cn/163fyruqwwf.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ptiwzmxj.html

================================================================================
来源：http://www.aibaodan.cn/163ealabrwr.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163wuwsyrvb.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163uxvkjtuy.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jdevbemn.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163koqopxjs.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xqlhykxm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163addfmzxm.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ezsrqszh.html

Ruby: ARGV
来源：http://www.sxryk.cn/163hvgdimkg.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mydkxmow.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163fjjaagbb.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163qmklqrds.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163docyzmyu.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163obmldwup.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jhhnxcpi.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163pmgyvdts.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163jlfyulat.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163hchitcyn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163kdtuxbsi.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163kzhstadd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163oisrrciv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163lwncsvdv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lqhoufps.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cgztebhi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163uyvvcqrz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163xuqkbgga.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163squzwgqw.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163zeldevbj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163syhpveyd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163faibmfem.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163wyxdsdjq.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163jddqdjgj.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163zhrsgojs.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163osjujeoe.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163lkkmeirk.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163elxlwxsx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163czlbbhhp.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163cvfdbrkj.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163amjwllze.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163agmmuedm.html


<!-- 参考信息 -->