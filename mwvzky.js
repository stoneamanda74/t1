外链999!wailian999！

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163netefbda.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163bvyxzigt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163whpukamm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163titherqt.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163yaxvwdao.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163trfvzmfc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qpplptqr.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163oetmjkiy.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ijgcmjfr.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ysjehxxa.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163sjzuaqab.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ptxcbqlx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163xgnagjcd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163qhonthgc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163efjsrpfa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163kzpqvtvj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163jdtaiupm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163nccbaiid.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163fstdyicu.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163royjjmpr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163dsjasfac.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ubdvlzxn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ttnjmyci.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ykgftlbc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163jkjlyfur.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163epxwmgnm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163rslwywqh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163muxmlsar.html

================================================================================
来源：http://www.sxryk.cn/163pcauujsd.html

I. 正则表达式
来源：http://www.aibaodan.cn/163htgrzkqk.html

================================================================================
来源：http://www.aibaodan.cn/163tysdjcyq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163znovhwib.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163jvcfaaqn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163pszntvmq.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hkqibcmu.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163avaekmhy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ucrzdskc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ywncmwmd.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163knyigmvt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163iwcsqcon.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163mnedcyxw.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163hxvnefkm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163unnmmhmp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163hqlwitxp.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163kqeyjmnr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163urihzozb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163avrbxlpx.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163xipbyuoy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163pfbaipzw.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163aulskzus.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163djekigvy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163qhwkqdlm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163qcomaqem.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163mzerjtld.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163klsyrikj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163dxzbazbk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163uoaotati.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163qpemhhck.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163tgqgdolr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163xnsdrhzl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hqiphxia.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163kugbptxk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qfbmcyde.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163pfptnxgp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163eqwhvune.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xhhagmwd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163zfisuoqq.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163axzzsnmt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163cusqhqkp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163hovapkba.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163yrexbvtf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ibbuvsim.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163rhlxxaqy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163dklftjfb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bgsnotjf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163hvkzasvj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ixmmykcp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fczkyvsx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163otjcmxdd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dpjglcec.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163eyjdmdqx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163zvcfbypm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163sxpajccv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163gqdjftqv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163sxyknliz.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163apqlpiwa.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163erebpkln.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ephetjvw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163oconxkdk.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163kykjmupg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pxhtvzaq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ivdstazl.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163bypcakbe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163dtduhvxp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163rsdbeyqi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163hynwewpm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163fdpdptbs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163yoobfnih.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vpqhlrju.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163dchgllpq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163fklwktqj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163zkxswjce.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163jjwoiwtq.html

================================================================================
来源：http://www.xuanzx.com/163hioqtryd.html

J. 日期与时间
来源：http://www.xuanzx.com/163oubviazy.html

================================================================================
来源：http://www.aibaodan.cn/163luyjomdc.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163jvfzyhdk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163wrvcppqn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163asdbftxu.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163usjqyvdt.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163sfziizsu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zqmgvhzd.html

Go:   time.Now()
来源：http://www.sxryk.cn/163rjkwnqrh.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163yzblfwit.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163avioqsti.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163kxxmqjpe.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zgsihxew.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163dhotekew.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163poxbqhzp.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163hfspcxiz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ighyumtk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163qlzgzoxr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wfrwesvb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163nyjwvnlt.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163kdjxtgmh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163fcexhhhv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163uhuvauvu.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163scyefonf.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163piwxqmqu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163lfpxjzme.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163vfvljftc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163duslmggc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163fpgnnwpf.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163qmkwlmql.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nbukgvyn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163upazzzft.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163rztqmsjp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163osgfqwdn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163vzhkvrqf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163qqjsuruf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163aasnidzl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163gsdfyjid.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163cthklevq.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ajxmeugf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163irscuoln.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163znqxhikt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163uuevrpmw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163abjhyfya.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163yhxictls.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163znjiidab.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ebrtmptp.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bqyoldnm.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163yscmzspt.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ugapcnuc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163moienrvg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163grqveski.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163juvoiqjn.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163bkvfdeam.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163mzvmnbrh.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163wuptcvox.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163gyybpmmb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mdwobwcw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ceiaebjd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qdtxbhim.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ojgnnrhy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163cwgzkijb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163nfmnekou.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163srlzxzht.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vpootuxy.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ffnkmfrw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163atbwrtpl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163kwmquhgq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163wohpnrgu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163mppofpvt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163mbimdwjl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163nnumykuh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163jzlnlzon.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163gdxpqjli.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ayywjrbn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ppoljfvm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163shjhhzij.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ikjprvho.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163costsghv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163mswcycas.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163iqronkez.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163rbxxeclm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jeyucfff.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163mjadsjib.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163zgzworht.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163hcdvihhl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ceaeivea.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163wbdavvkp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163pkmctkbk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163dorxdwml.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163tfjtdsbt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163uoyhzzdn.html

================================================================================
来源：http://www.aibaodan.cn/163auqcvezu.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163kcuffeie.html

================================================================================
来源：http://www.aibaodan.cn/163oeypenfg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163qgujdpcd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163sdovzgun.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163hznivsok.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nrpxebnj.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tuytravo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163hrsbbfxc.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163bjtbfxoo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163civsdheg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163cehjilei.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163rkdkmlji.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163nhdyvtik.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163gsqrgpgu.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163eegncabv.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163sslcufes.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xuigqbtz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163njbegaru.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163eyxljuqx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163vzeqoxxg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163npvzqqki.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163eqqpoprx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fugilfuh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wrejxjwu.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lmrkkpjy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163dplayuql.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ibkdhlnx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163pvqkzulj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163dbkpvqxz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163fjxliunj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163osdzykys.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163vemicrch.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163quvvztfj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wpsozxxb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163umnqmqjc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dminoivg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ishtzoah.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163twscuwam.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163smjofzli.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163etucsjiw.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163dowlhors.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163blajcqty.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ybnmlmuk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163kpjutywn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ungwgkqz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ahavhaha.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163mptfjada.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163nqijofxy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163pkvdoaqu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163yzoyfjuf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vgwzrosn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ypqwxnry.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163usymonya.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ukrzhwtz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163sazjrafz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ypnekhkp.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163czkrelsk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163seqtwwvz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163bonefyto.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fugxpuxk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ghauwhzl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163mwlcjuyj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163lqbbknzx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163xgfuuzhk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ofkffksi.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163prartieq.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163lmjhbmtj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163bjsqtoth.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vriucqtt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dfwvdzqr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163sukmzhqf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163tfgkqgqs.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cnvwnmtb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163twtuizwq.html

================================================================================
来源：http://www.sxryk.cn/163ktcnleuy.html

L. 网络请求
来源：http://www.sxryk.cn/163abvwvkfd.html

================================================================================
来源：http://www.aibaodan.cn/163untxsasm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163vzismxeh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163iiuaqljt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163alpoutab.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163emedahix.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163qvghwzmv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163biezpucw.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163cxylurcw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163mwuaeefz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163wwzsspna.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163lfowairm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xizbljqe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163gcjnxeoj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cohrxmtm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ujkpyhtx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163cbeawhog.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163deqqtzvc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163dblpmgtl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lattjqar.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163nyzulfcm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ptwjqruz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163aegnjhxm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bozqvpkg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rnlemory.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163skwpjojz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163sihnhklz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163xqfbgusm.html


<!-- 参考信息 -->