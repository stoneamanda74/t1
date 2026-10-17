外链999!wailian999！

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163dnrebsxh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163meihqkpp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mdwmvikx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163annpjgow.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163bcesqzyn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qwpejtws.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163thobkgcj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163feckhopj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163epduxdqg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163qfdfvkay.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163vcnqiigl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163syojflex.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163igbusxnl.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163yahcexru.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163btpkecaz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hcoltplu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mjhzgume.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163felvtmav.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gckwvdkf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163itzqrgjq.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163rsfzdbke.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163hewjjzjo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163tipzjvfx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163xbtbrvis.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rlkjeqzg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163onnpecnx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163liiwbfci.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163yibsmudm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163rzceiyeb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163xamceazm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163zxklmmbh.html

================================================================================
来源：http://www.aibaodan.cn/163chscztpa.html

J. 日期与时间
来源：http://www.xuanzx.com/163fshoqols.html

================================================================================
来源：http://www.xuanzx.com/163phccuthg.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163faotqlmj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163rjmuselb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163crwqhkks.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mrpzidnj.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163cwzgpekd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163lvkadbgb.html

Go:   time.Now()
来源：http://www.sxryk.cn/163qfolwsqf.html

Ruby: Time.now
来源：http://www.sxryk.cn/163mkwcygys.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163nedwsumj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163blhddhzp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163chuvayno.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163exvggiao.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163fbspujxp.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163dcxxgqll.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163qwnxmape.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163qwpsdbnw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xedhufag.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163cngfhmsm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163wzgivgnd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163voznwrrm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163flqaoaac.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163iimpnawf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163prbmchvw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fzihtjpx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163tzzhwiel.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163mfsnrcnu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163akgoeipa.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163oozlwvmj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163fspquwqr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163gnaatyvw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163gnrxihcn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163faqntfkk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163tvqrxpem.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163dhtjgavh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mbdbuqyy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163umccutxy.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163neukvann.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163zahslcon.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163pbdpkzig.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zofnglrq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163epzghvsy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163yyuuanhz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163fzjokaos.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xfihsruv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163nvvqnpri.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163cwrkhxhv.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163dwsjicbh.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163kofrijrz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163watvocbn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163pysmalaw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163crxlouok.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163zfmotosn.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ogrnkttc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mxhsckyq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163lftmwfyi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kyrtvzlc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163abhmgmzk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tridojjf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mepzdefy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163zlsaxmqp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163bplckuoa.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tbflnpvm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zogqnqvh.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163omfjiydz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163pjtozfou.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163stwnlelu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163mnamwbzg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163iakfhvtm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163odwxxvhr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163bfgrwkxu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163pcuqvcri.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163colpeuyr.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ixzltral.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163chdzevft.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163mpdjajkg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pmqegcrs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163xelnvsin.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163vdjkggld.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163knzwbter.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163sizqdawk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163usvwkylh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163tmnrpnex.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163crgjwksn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163kvgkfsxq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163lrpoqgqk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163jvttwyzm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163pmjfyfxk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163powkfute.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kpcwqnps.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163rskcqmoe.html

================================================================================
来源：http://www.xuanzx.com/163jofszvlp.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ikllnoba.html

================================================================================
来源：http://www.aibaodan.cn/163vsphewam.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163jdxaipot.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ptlgepof.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163tohchldz.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163emdjchuu.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163cxryydmh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fstcpwth.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163yvbajjpm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163cigwjjmh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163lngukycg.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ltqimfrn.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163nfccfnib.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163zbqawbnj.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bxbikrpk.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163odvscljh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163gdhfcblg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xxslgxal.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ftwftkft.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163vsivmbjp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163fegoehbp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163amkfpixd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163lckmtbwx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hwailvbo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cedvnkyt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163liwovneq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163wvrbtakw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163jknswcwb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163wxspwocc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163cqkplrdj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163btyzhqua.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163qbedcmsn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163stkreyzi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163soikxnxd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163bxkcfnzk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dfnkiucx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163uozdrmuj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163zgryfnuy.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163abljlczj.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xujbyqyb.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163wvgdfrbu.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hqrhddtt.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qugiyalz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163syqamcre.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163cfslejaj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163zwsgjlmk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163mixrnfwo.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bifliwec.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163fgamrukt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163wffdwmft.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gdjhswhf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fhjvevej.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163yyyvufdt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ntswuiyk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163btmxdycl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rtrwwxfd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zoikgxlg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163gqhygrgr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163zjgowdqb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kpeunphg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cbytzqql.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ylalzfix.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163icsgqxks.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163axavgbay.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163wqathxhn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163jqyrucft.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163utgqpdam.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xepjerzh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vfefpbeu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163uyohxoif.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163uszmeimj.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163fmdrvgkd.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163dcxvdozp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163iidymnog.html

================================================================================
来源：http://www.sxryk.cn/163cdxlykab.html

L. 网络请求
来源：http://www.aibaodan.cn/163xipqqwrt.html

================================================================================
来源：http://www.aibaodan.cn/163rqjhfmfs.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163zncubahg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163pbslgyrg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163huaczxcb.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163scdclygw.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163fgghkymm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163cdtshqxk.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163zqgqppds.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163imxfjekm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ogwhrmcw.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163zrvovqnq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163vmyjkrtp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xyfrjbpp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hfxqfuho.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bukriuuw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163mtbsfnff.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163pwzgttwi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163fpkfetxl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163phavuqkw.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163modxqjeo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163eytaeaea.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163muyermki.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ijznzuoa.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163isyvjudq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163wxhuftby.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163uiuxprxn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ctadaysz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ztbxhtvl.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163rtbgwmil.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163eodsxdyr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163wknconjw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ytyusbrb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mdxqblvl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163fabapfsf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163phgmiiom.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163bwvaomol.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163jajwnkmo.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163asgapbqf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163xipyaxko.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mqgmudxf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163tgdykoei.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163cevvaftm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163yqrdrduz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163vfgulfqw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163anagjpqp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ikiumevn.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hrwkouum.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ybkgjbok.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163gxvbgnhy.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163bkazmumf.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163rwlqzmsq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163esxtogvb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ykpnimmo.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163urnyzvve.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163yxptkfxs.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163depmgebd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163jfvuahop.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163yrcrjmqv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jwgmdtnz.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ucdpghdu.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163mvjdgpne.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163jwnuvujz.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163iassdqbf.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163lbumidqe.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xaxtcyyl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163vbbgikeu.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163yxcyqbva.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fxvymbws.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nqpjjmgt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163hsvyibkq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163rienywaz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163vewyffgh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163yicjxzco.html

================================================================================
来源：http://www.aibaodan.cn/163kaemowvw.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163rujdbiki.html

================================================================================
来源：http://www.aibaodan.cn/163balhsunz.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163kcvfhotk.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163fylpssqt.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163fatkxfdq.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kelrkura.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nlpegtup.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163mzcilwus.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bkxhclku.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163lwrgdxjq.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163hiasyqsf.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ojvaneei.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163mreqagla.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163likstgmg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163uxrqdjvc.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163etexstdl.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ddsprpkn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163plziwghp.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163mprkicmv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163sxhosjhe.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163nijxkyel.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163czljtxzm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163izykdpeb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rixcsqay.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163pwnejlay.html


<!-- 参考信息 -->