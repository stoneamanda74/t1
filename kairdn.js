外链999!wailian999！

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163nofoqtsu.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163kroqopzs.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xkjdsolh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163natlxhow.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163yrcpzvta.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ctdesrfd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163rtzqkpue.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163yzxmmpmr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163rrbnnpam.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163cnjdfefl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163triqxmvb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163cynbtovc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163tdwybbcr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163srgqpghs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163qjcnyjcz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163tluvjhbb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163avulqnpq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163kbwlalso.html

[I04] 正则替换
来源：http://www.xuanzx.com/163tqcxsalq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163yykffcvb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163uiuuncou.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lfkqzrks.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zxwrvkgo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ilzljtxr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163rkgdfyzo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163zoelmlyo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163mxdlzxqm.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163tzjeydjr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163bcmcxfta.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163mqhyifhx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ggugozfq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163oybnhghe.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163wwfwkzpd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163zxsocbvs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kuvpjfql.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163rtruuitv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163koxzomnv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163suekghqj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163pvxjfdte.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uodjqsft.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163pjchcfjp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163zejhsjmz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ckhbhkiu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163drgjbjjw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ohuawlgh.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163odwuxton.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163muapnybn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163xlvomgnz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163wlnhzvcl.html

TS:   /error/gim
来源：http://www.sxryk.cn/163wstexbiw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163uxdqqesw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163jlyjolrt.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163dvcbgjyr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ljxzgevd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163jfyhfkaz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163dtwmgmxh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ktzozfeb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163azpfnalp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dmumubxi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163kiqzkqur.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ranfopkj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163pjwampcl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163bmeknmfg.html

================================================================================
来源：http://www.aibaodan.cn/163fnjczptk.html

J. 日期与时间
来源：http://www.sxryk.cn/163xlnsaatm.html

================================================================================
来源：http://www.xuanzx.com/163iuzcuitv.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163cgrwjzoi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163anejaexp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jvbgmpik.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ysxonnuw.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163aojnxuzm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ugwgihpj.html

Go:   time.Now()
来源：http://www.xuanzx.com/163isgrefeh.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163xzuaslho.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163iouanjow.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163cjoyjvcl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bdudrswg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xonmfyjt.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hvnxfrnz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163fgfaxaxj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163mmalndkj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163qyfdtcus.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163cwavgyet.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163rvbcweeq.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163pjvplaqg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163axvffeqc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163afoheodf.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zqyzhkks.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mwhsronl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163nnvzmtkt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ysalvllg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163dpmxtrrj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163knwkgsif.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163xwhwnyhq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163qbxilfrg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163phwyyynx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163nsjdkywj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163opaxlaiw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163wovafuef.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163mexmiznw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ykmivpuq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ovgezysu.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163wthuilte.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ygsqpzip.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163tszesuwp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lchscxbl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163snhacdfd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163xcsttemx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163jdwwhbkr.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163uszptfkz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ecynjpzo.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163fxaldjku.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163xwuoqrhn.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ekxjsebs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163cupjsbea.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vidxrraw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163kkhjxnpp.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163nxnrnapf.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163hndybscn.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rdkjbiwd.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163thieexmz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sxatymky.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163pkblrrpz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lsbruxpk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lfeyfjvo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163uwwstvid.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163okkuuflv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zpnsfzga.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pafahejg.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163hunoiaao.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163pjnktcfe.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163fptwnhkd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163pognljfk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163mrhxplrn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ezagjinj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163lrrgemht.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163nnqlikzy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163qylhjlnq.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163lhocjxaj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163bkhpebag.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163yzpxyruf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dochmmbr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fvigrpic.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kxtckhdo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163cqaqghnw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jxovlycy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163vqrrqmmb.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163rnzmhhzs.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163telaiupj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163lsuxqqla.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163vxdjejpq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163tmvazwgf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163iyvdwvhj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zbdqkpfp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163txvylgil.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163kqbtjhfi.html

================================================================================
来源：http://www.sxryk.cn/163fmjwgmkx.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163tozhxlko.html

================================================================================
来源：http://www.sxryk.cn/163bnokordv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163pxtybayq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163kgchleru.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yspiehur.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rlvfakbf.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163iuwxxtqr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163oysnwdqi.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hzhqvgoe.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ercjuaul.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pydgnfyw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163aulpgiil.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ieqdrbhs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163vcclhxbv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163cibyakov.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zozuuuwd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ggjuziil.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xyxizmth.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163wydovhuq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163gmmeevzw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163vadsdmbn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163pvrvcqop.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163inffkncm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163idpsqvlx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jqomexfu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163flzvfvhg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163gqydtgku.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163nraowpry.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163soiseetk.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163hndzrdwl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163cujqjnqe.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163rxmphslc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ywbcqoah.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163reeillhk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wbcuuadr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hvciltrv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163fakxqwtd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163hqdomkuo.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163nfwydryg.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ajtpudpb.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ruetwefl.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qlsbcfko.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fvtaccus.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163nnwwqntl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163yaornync.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ncghuhcy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163hprbmdde.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163luvyseby.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163sndcifmv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163kbblupfx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mmpiavfj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kwtmdnwk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163zbyvsfuj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163lhmpkqyp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zrvrntdw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ejqrdrpz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163nbionkyv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163dehvvlii.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163wejybrer.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qhtoltha.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gwkarqhb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163sktvcpen.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163gwloveiy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xzpbjpde.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163onfcfbfk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163uzsyydno.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163zkvoqdfd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xagefkcs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ijnmyfma.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nuxlbcuy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163gknquhvu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163fltvgcxr.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163xmviqtfl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hrbvtmxd.html

================================================================================
来源：http://www.aibaodan.cn/163dwjnximj.html

L. 网络请求
来源：http://www.sxryk.cn/163jctzildv.html

================================================================================
来源：http://www.xuanzx.com/163hibwpxpn.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vvswvcjn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163gawdvizo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163liiysfen.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ztgldsal.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163qvqrsqmz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163elslqgpj.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ohmobejj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163qogyygxv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163leopxphi.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163vhwknpdd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ksxfefjg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ytmhvmyd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gpepumny.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163flardjjv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163cmelkfkh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163smlvhotu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163cycxnknk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163chjojyow.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163fsreigec.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163lswvsrog.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xolrhqed.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163shegjipa.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rbxyavrw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163gbuvdoql.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163qcfpfxno.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163qhmvvhjt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ciiyaalj.html

[L04] 设置超时
来源：http://www.xuanzx.com/163mesomryw.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163psgarinl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163cuaatpaa.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hgzmacdb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163gopkodbb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ouqhompq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163qwzscnck.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163eyicouls.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163sjadqsht.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163rjvougop.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163imypgemg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163numksxrl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163beasgwhs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hjdeeads.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163sfpzdxvd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163lthvgsjd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163zhtdrtbi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163qvefzxly.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ujthtael.html

Py:   resp.json()
来源：http://www.xuanzx.com/163kqylituv.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163sxzpcfiz.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163mtlapysp.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163awfpakvb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ctkistpe.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163yusxzlin.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163lsvdmyaa.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163aiilipvo.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163amrnqqnv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163wurqvpke.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163wmydztgs.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ctpzefbg.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163huvsenam.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163pmldnwwu.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163fchovhwg.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163gsfkqodx.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163nhdsbsja.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163nknlvgcv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163mtfcfoon.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163edpjqvek.html


<!-- 参考信息 -->