外链999!wailian999！

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qifodvtt.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163xfhavutg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163nwtnwnai.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hdlbaxgy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163fikoqfjs.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163vdtyuyhn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163sbkurayz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163iecowltv.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qdgdmjyh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163taogedco.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163yeqlwljz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163xhgkiiou.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hxyhpwjx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163alxrftme.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mtvtzxql.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163bkprfrrf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163idbxjdwi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ganwlpom.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163uuyebgsj.html

================================================================================
来源：http://www.xuanzx.com/163rlhbtvtl.html

J. 日期与时间
来源：http://www.sxryk.cn/163jiaiarqp.html

================================================================================
来源：http://www.xuanzx.com/163wwuwfjdh.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163nvllycvl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ddcqviom.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mlngxgtr.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163kekimtlc.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163soaytbxg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163zelnwygt.html

Go:   time.Now()
来源：http://www.xuanzx.com/163msefcrbv.html

Ruby: Time.now
来源：http://www.sxryk.cn/163xifbfrjt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163kyvrfzbm.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163iwwyoxhq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jkykxbeo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rmriyeik.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163otupvgls.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163bamdxbjo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163hyrdzwwi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163itbpnnkl.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163olcycddu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163sqjtehkb.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gfjdicxl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163aauhzcbl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163degaqyqh.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gzrpfisg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fegqhjlx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ubknwyfh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163hrqkreva.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163gzvrprlt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163hexinpsh.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163vffwtkjw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163lbjxtcsi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163rfbwmtnq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163xyrolgsz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163pqwcfxba.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163qqrtpwlt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163xbtagzgo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xgruieek.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xqdfbeng.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163cxspzqnl.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jioouyjy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163hhjyczzb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nhosqnky.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163erfrgbzc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163kicavtge.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163xebdelxe.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163njdhpymo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163hgydsihz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163bcmldwep.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ilbvimzq.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163wnhmmvlc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163nkptpqen.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163fbdxftnv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163yqcwobxf.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163dgjfspwc.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163fwwpkedf.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163jttwtyro.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jkaakiqo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xfqxydyf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163qmienbjj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ctqxklbi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xhwggnbo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163snzkmazz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ebxiqjlz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iqijsony.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rhncshex.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163mbprglaw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wfzgtwum.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163lexgynzu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163eywvvlwj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ovvymron.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163pjcymgaw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163vggnepmc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163qgkwnzce.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163lxlajvai.html

[J09] 时区处理
来源：http://www.xuanzx.com/163zptftelx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163dmraaqma.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163lehzawfr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qhbwoalo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163btsvrmmq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163gzncwudp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163vzjapghk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ewvalnjl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163lfwaueex.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nwrpbcld.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163fecrevgw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163xlwdtuch.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163srqsqnwl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163tmaytqwh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163lppugprb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163eriqjhfp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163fdvoyvvf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163kenzwrky.html

================================================================================
来源：http://www.aibaodan.cn/163qczsfvie.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163oielnzmp.html

================================================================================
来源：http://www.sxryk.cn/163npadqrzs.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163gelthnrl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qmeimnqn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163fkumgbcx.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hnqhvvza.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163duyydeic.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zeznrrzh.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163jcxzoztt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rlaxftnh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ayhexpqz.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163bupnkpeh.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ocupvfnx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163trvzxmto.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zvxhzlcz.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163xafxtptr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163hputxwto.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163roawhqzl.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163igdxunac.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163itplwglp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kycvbigs.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163xmywbvlh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163aajxcmcv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zztyjyib.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163anbdxcsu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xjbeclzk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163gtocuigr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163kowghnbv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163azkypvdc.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163tpihcguw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163iboniqkh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163xniushir.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rwubvmbo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mfzqpecd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163sjythfvw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163coazvvxn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jdaclegm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163kngmeymc.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163erwarbju.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163yadhrpkp.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xcjeglaf.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mkajlspr.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xxjnocgc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ltzsgkdg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163kamuetwk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163wzinrfef.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163klndnufh.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163rnsbebbl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163detvwyxw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163rnwnhonq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163miwsutjr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163abpnziki.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ucecbpux.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163odqitppw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163llpdsmpx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163cipxsuks.html

[K07] 进制转换
来源：http://www.xuanzx.com/163wklqujny.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163fnlewjql.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163duxivogi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uymyarhh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kgslkwqi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gprswfdm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163pomkuivw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ecvzlxbo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163tlocvudr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163bmozfyje.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163xtscxisz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163iusnyklu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zbzcxwjw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163alkxvtfi.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vhzgfrqk.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163xlvtxmdx.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163yxzjsblm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163fdsivcdu.html

================================================================================
来源：http://www.sxryk.cn/163aveyttwy.html

L. 网络请求
来源：http://www.aibaodan.cn/163fbpgajyc.html

================================================================================
来源：http://www.xuanzx.com/163mioctgdj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163wwafuxfm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163spepttom.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163rcdvgygd.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163crbjxswl.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ybjqgrza.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163tqamnpff.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163yknunesv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163tiuocpuo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163hvyqkxxd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163wigseswv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ovlhtdmv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163flmgyrec.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qsiwxsgr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163huummmlp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163lkobykfe.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163cayczwog.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163qvwlacfx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163obnmglyg.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qmvgwmfn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163oedycbci.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163lhedzowv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163trytqasz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163srsujhsi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ubgkdvso.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163lokmgqpu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qqbihddf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163fwaombrz.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163fptozgyw.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163gcrqrcss.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163tpmjwusd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nvfkyvbh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163invjvstf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163tosmpewr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163xasdilmq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163mheayech.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vvqtegcp.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163akssojsx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163iblwndkv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163lquhlpdl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163edaumxdk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jhvchlql.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163aszmvgbm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163zstfsgha.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163elsvmnqv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163rpueaope.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163jtchzkrc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ixfbhqzs.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163hvyvzhbs.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163zfhqgrtu.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163gpsmzhbu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163drcckpie.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163nxsfmtvc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163awocgfmn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ggoexnnu.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163fwlobdrz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163eiorebkl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ipqifqhp.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wnnnwcio.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zjjvbmhi.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ltneaezw.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163jdzlasxc.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163mrctvgqf.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163fltezurp.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163rbtaptcv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163cgztvxyo.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163xjpjshbn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ntkekctb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qnzpbroc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163kylngfkr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163phqgmrqw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163wkfjxmzs.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163duuusvqk.html

================================================================================
来源：http://www.xuanzx.com/163ypqsowmj.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163xqwsgtgi.html

================================================================================
来源：http://www.sxryk.cn/163pbumwrgu.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163syonkjqn.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163bduimwnr.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163wwqrqhch.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163waexvbai.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163velumtcs.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163jzfjwgvd.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ygybhiqj.html

Ruby: ARGV
来源：http://www.xuanzx.com/163honyyisj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163vjtpfzgb.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163kkpvsbhk.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wgbaeoqx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wqnbwisz.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163dcqicivs.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163sdnibmbn.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163uclvpuff.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163sxymuojt.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163uemvymkb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163tlaztzfo.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xdqelfzu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163rwjjjewl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163sftaistz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nrbujbbc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fedzcqcd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163tjdtjcvw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163qvzbcqux.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163cdbbpmlq.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163shmblbyc.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163mdmjmxus.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163vbnterqz.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163szmqavxv.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163iefhpukn.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163cuuzbgaz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163fxgdonon.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163exckapjy.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163yexjsall.html


<!-- 参考信息 -->