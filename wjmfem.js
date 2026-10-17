外链999!wailian999！

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163xzxqsgdr.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163wkrzgtvo.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163dsjatxkt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163yomgdgui.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163fuysqntx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163hfwncbxw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163epqyzrvt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ldlqhjan.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163dpfzknft.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ldulfcgt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163kacojmyi.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163yknaxoat.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163plxeptsh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163rdmkmvgc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qvihplsd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163heedordu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163rjzybvvs.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163higkmkfa.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ttsdxnkt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163xrzfahwf.html

================================================================================
来源：http://www.xuanzx.com/163enomwgjl.html

I. 正则表达式
来源：http://www.xuanzx.com/163oejtxpuy.html

================================================================================
来源：http://www.aibaodan.cn/163jbmzmawv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163fcshdjez.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163gstrhkby.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163jyhbpkzn.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ftaorfyl.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dvilqhdw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163jvtoyjmh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163mdajjglp.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163oqplsnub.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163vxkbiomo.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163qlqtbnnm.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163milbrlqv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163bakmmxjf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163tbsexnzq.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xzxndpau.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163amydzfdz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163cjterdmr.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ddoxqjka.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163mfmdbwvz.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163qiubwioi.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163fnngield.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163pqgwtqbl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163scvqjskd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fnlxmnzr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163waufbfjg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163effprala.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163llhdrkgt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163erfivmcd.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163hmdccfuk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163spygbwwd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163odblatnc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xyqttwpf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cklnqtdw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wxlfyzbp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163kdkctwvx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163wugoyjhb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163rleqdkgf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163pqsbaecx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163drqqsocs.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163iyxqeclh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tefvxaco.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zenoonwt.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xvgqfnxn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163mmehkpuh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kcsqvunv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163mrloivwr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qiamypqc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163etihajqn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163anidecvl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qaqyqwkd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qwfulawb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163xrwudflm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163oiqlndmc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163cavirocw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lwrfzjkx.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163krjdnvkr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ggskebhn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163myiyzlmk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163csyjclib.html

TS:   /error/gim
来源：http://www.sxryk.cn/163xbxjddxd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163rwkqbsto.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163xkfqmsbt.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163gtmotvsj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163kzwnsmki.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163cnhbnofo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163sfeqzuzc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163nmyizqnq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163trzifwtt.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wchwppxf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163lbpipgxz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ffwqmcxr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163vleqwmcy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163esivpmxz.html

================================================================================
来源：http://www.xuanzx.com/163yiregbik.html

J. 日期与时间
来源：http://www.sxryk.cn/163jztslzty.html

================================================================================
来源：http://www.aibaodan.cn/163geuqlgwq.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163pcufjxyd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163cjmswxzl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163biectqrq.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163grsdpjol.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ifftoomn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163svluccos.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163mkazaibe.html

Ruby: Time.now
来源：http://www.sxryk.cn/163gxcbtomv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163kzmcdmtx.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163blvbhbpy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163idubuugt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hwludwaz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ubyytrww.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163vujtuhpr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163bdbmuwjc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163tgnoujwi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163prcxloxt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163qdthivfh.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jytjvwjp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163jzzxjhdo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163yzwrznzf.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ayssgbax.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xhdxspjx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163vmcfwvjh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163pplsewot.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163qjfjrmeu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163jtkbpxix.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163iijcjouo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163tqbxezdl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163uctbjuwa.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163yhqdtxzb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ienbvyoj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163oqbateut.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163djbydtiu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163jrkceenq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163gwifpeur.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163prafqgga.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163hljpklbl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163feccawea.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pyveblnd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163weqopqlh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163pcdgxcig.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163bsephuak.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163nbcohzxl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163kpqvcftl.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163uzidtfmq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163jlmrickh.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163qtdmolzx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163duzabelz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163svcxpysk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163tbrvstzs.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163cjrjbzye.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ncclonhp.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gnzaqkys.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163yvqasmue.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fnpubfrl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163helmvxpf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163docwdcfi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163pddyukkl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tfnxousw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163zhptzfph.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lxngdkyo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163smpdgjlr.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163uqzwflkh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163iiiiknnb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163exovdird.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163hwdkcasx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ctnlxeba.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163mjfskobk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163toydylvl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163hnegzzex.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163vcbifrvn.html

[J09] 时区处理
来源：http://www.xuanzx.com/163wnraprvy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163oaqhtill.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163oioijpzm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hrubxchc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vevznckm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ileoezrx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163swhlopeo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163itonsmgj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ypxgqcmf.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163rjhtdcfi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163cproewjx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163reyihclg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163oxquwlbp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163fkntrvow.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gyyqztba.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163axvutpoj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163mmrtxenm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163xgxmhheo.html

================================================================================
来源：http://www.aibaodan.cn/163okzuvftl.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163nfrugtrs.html

================================================================================
来源：http://www.aibaodan.cn/163gihoalxh.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ienzihfn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163aqhmjnhs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163siziinnd.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ycssxhve.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dxxydstx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163umlsixci.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hxudpqwo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163bjlrpbwg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pjsqisbd.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163aflyvsbc.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163cwckpfbo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163jlagxzoo.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ceelyujg.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jgjzmfqn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163akgvxemf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163lpbredel.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163pgxtpcan.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163sjpxctuc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163wfjifjiq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163quvjcagj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163glxxbgbm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fidkwgcb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fbfbxhnv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xyxxvjib.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163bzfwqhps.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163psghyvgi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163drlnikls.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163eiuseymz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hulqrhjr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163kekxwkpt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163yslbzcfc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163efpcgcqs.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ukfrovjw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163avsfgkku.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163rpvqqwci.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163kfvmqymu.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163zdcblqjs.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163bbhmlpty.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163lqmrlcaa.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zqmxwkmy.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yfznovqa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163xztmifpj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163qalaeamh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163zdscpdkr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163znabrltv.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hzikbgbz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163tuvsvrdd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163quxuujbg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163oemnwemv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zcgvsgru.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163miwkuocw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163gvscungh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qxwaffoe.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163wzcabjai.html

[K07] 进制转换
来源：http://www.sxryk.cn/163tizvkemf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163dawpenxz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163xpjxhydv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zqphobpz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163yhazrcyn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163jybkgiol.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163uxgvxerz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163sejepmna.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163aqgkrtin.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163yjdwllvp.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163wrxqelkq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ntaguqyo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163odvnarws.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cuurxgjh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163juqmuufk.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ruleivhm.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163tihaaedn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163deqlfsad.html

================================================================================
来源：http://www.aibaodan.cn/163tgvjhbjv.html

L. 网络请求
来源：http://www.xuanzx.com/163ypwigsxu.html

================================================================================
来源：http://www.aibaodan.cn/163ugyyregv.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ejcjzmsw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163xydxdkey.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163gitlangl.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163bwezdbjc.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163blsmjwgo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163saszidkx.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163skgewwgc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163hllbeqfl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163rmgjgojt.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163feqialxb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163panzvsqh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163awkrourr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mjyrarpp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163aeqetwkl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163mgwrjihm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163qcehmzle.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163rcnhnnjc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163vxyffukn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163lkmenjuo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163mpzytfcs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163sxswsulk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mdtwjphm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dyjguvjn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163gufwlfrm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163jciopmqa.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163pykdrcnn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163izjgkzuk.html

[L04] 设置超时
来源：http://www.xuanzx.com/163mnhcavfk.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163srsfyrtm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163rltppqdf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163uywjkmeo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xmdcbjhw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163lnzwldul.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163onjpnyxq.html


<!-- 参考信息 -->