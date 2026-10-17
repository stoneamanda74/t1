外链999!wailian999！

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163fnnobtwp.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163lepkvcij.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163upbjwysb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163xuynqbib.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163rnlfpyuw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163jqigwuii.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163odtzialp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163feqvnqrj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163klmqkccf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163bahzryzk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nfnmwyzt.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163wnrrjqfd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163nyzvclxl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163srsifdmz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163pdwwkyam.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xaowabis.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163azzmkzwj.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163pzzxzslr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163uzkojxle.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ojyfqecf.html

================================================================================
来源：http://www.sxryk.cn/163vjpblijp.html

I. 正则表达式
来源：http://www.sxryk.cn/163pmflpftt.html

================================================================================
来源：http://www.aibaodan.cn/163mpzncqde.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163pxhpzrpc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163psxqngtz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163afoiuahd.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jqjwdhcb.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ldqwssvr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163mkzwqwnn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163oodpsoes.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163fbscpjkn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ismtbqjp.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163unbdiddx.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163rpbztgkn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163mdlsbrxr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163dtdaizpa.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163bxrswvzc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163mxnsrvig.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jkfekocx.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ocpfruxj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163hetqrmlk.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163gijoobvi.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163gyeyfdmd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163dtxvkdky.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163rrwcqump.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163homukret.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163trcbpckp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163jxlmjcje.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163tqwoxbor.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163zoqxjlyp.html

[I04] 正则替换
来源：http://www.sxryk.cn/163pnsbsggm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163lmadnjas.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jfzllxhm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cgjujfep.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tlgkmyif.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163jwpdngho.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ppfrkyxu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163tpejgtmh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163nbpagngm.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163pqcrbpkc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163hjubwuzu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163cgtbevdm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163trizqqge.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163shflquth.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163qzwdlvnf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ldzghqjk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pvfuagda.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163uoypdlyu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163nuhghchl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nepejemx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163cjxamyoc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rcqtzjlh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163arvxuycx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163kevbzxmh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163xgghqwbk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xtbgmkhw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tcmczzdq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163nccgjdrx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163zkxizyqs.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163xvosvcfc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163owwlgoqz.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163wtqugjha.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163clyvqwte.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163zkpwmdxi.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ftcbkapz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163rnjrbpwe.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163dgjaagln.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163qreoehxf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163oznvrpgh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ehjbfftn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rjksgoyv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163vznfobvu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163pkyhxbju.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163mdlyvekf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163sdwxqibe.html

================================================================================
来源：http://www.sxryk.cn/163ycekdxrd.html

J. 日期与时间
来源：http://www.xuanzx.com/163hgijomlw.html

================================================================================
来源：http://www.sxryk.cn/163nrqtnjzq.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163audxkfod.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163vjzqzeve.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ggjdkjmk.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mtjdjskf.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163kxrywqaz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163imjjvflm.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163wrghnivp.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ktyrjawu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163tmsctjmo.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jrhefehp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163idjzisgk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163acqhpqan.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163kiwidqfl.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163zgnvimrj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163yvnylnvr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163imjvybvi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163mngzzaow.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163eqzcjwue.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163pzogetff.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163lgftnwmb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mbcswlta.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qnzsfwht.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ahmkjgyo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163mwxdfuzn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163grzectmm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163cfimbdcz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163twgbvadu.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ddpwpuev.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163fvsxvssh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163aitzguqv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jmdwxgzg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163jwbvxnbm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163hcgwoeyi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163nuvxgple.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xcpdfftn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163rxglohsd.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ggwzmlke.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163drhjbvyo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163onmgdxfe.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163acftcgcm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163iaxaqddn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163tzvmcupm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163rmzxuegu.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jbysyceh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163woibswtw.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163bhygphoy.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163vhrcfxcj.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163dqvavxld.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163juwwizkx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163gslmsyua.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163dqhxlumg.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163tdderjop.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163hsjtznii.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163bgssdpwt.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163rcsoobcs.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ujnjsnph.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163gzlruccm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bqxuoqzp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fekzrdbe.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163iaraevjp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163kcizevqj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163cxaavpxu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ialexjyc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163viyyqxzm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163fttartem.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163auaeiyty.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163cmmxcgne.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163nazbtrfg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163whjwloem.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163brekqhnw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ymvglrem.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163rxrckdpx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jzxrvyje.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ufwvrlcx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163kwwrkjxr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nkdiobkn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bedgtewy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163tkcqufzx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163psbokybk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163fmjxvbgx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163apliuwkr.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163eysxzbwd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163nfxydpuo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163labjdzdn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ltfsgxzl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qjhfsmcj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163flprafau.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163kuqxpemq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163rewyjbht.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163otawcmuf.html

================================================================================
来源：http://www.aibaodan.cn/163icclqvdp.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163qohxrbuz.html

================================================================================
来源：http://www.aibaodan.cn/163sqdmrtbx.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163xkwgfdca.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163qlcrrlbr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163xhvtlklb.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163dseqawbc.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ytudyyke.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163rpixozog.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163rzpugcde.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163aprhjpfk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163bajmtpgr.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163topgowlu.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163howfiakh.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163qausgfrh.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mjeysoay.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lsnakdmo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163agydebfu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zyzqckwi.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163jtfjawql.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163lbvexqjz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163hqqzrlmv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163uoiphogj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dbsgjhpi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xbwytoea.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163thcpynbb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163syjzoahf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163dmblddbb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163lvqcbhfx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163qxvnacep.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163jflgjrgv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163nhazcpyx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163kdtjqyzh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fsrxhjoi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vextarwb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163xkspmnay.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uchuixbq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163uqhbgoek.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163bppjhzix.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ybysbcru.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163mzlsylok.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163tazenjrj.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hpsljlzw.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jbxkocke.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163akaeyazh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163nacmbnxy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163hiafcjtq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nilaxkgf.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bvphjfvg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163raamkknl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163imamwarq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gynhxywh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163cqyyermk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163nlmcrmft.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163fkzykssm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163lfcjevwe.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163mnciwydb.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163cebojpaq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163lwmkxptk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163zlddfdjc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163riqakiac.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yhacfngk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qjzsnrxw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163nsjcdiox.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163xfptsfcd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gjatsnbb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163liqxfbsa.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163kasixkzr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wzwghqmn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gdjaqtha.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ybnnymqx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163pzebxbrr.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163tyduhcur.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163fsxvwnkh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qgkwzthj.html

================================================================================
来源：http://www.xuanzx.com/163vqqsalfa.html

L. 网络请求
来源：http://www.aibaodan.cn/163fumoinci.html

================================================================================
来源：http://www.xuanzx.com/163bmgikvre.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163vdihqcsn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xvnmwntp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163gpxtgatb.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163jkzgymmb.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163pnfeovqm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ysrtstyl.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163dzoomnrp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163bnxrduvc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163bdyshhxm.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163tlykvtfg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163shxrgcjm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163juiclisy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163nbruqaoq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163flpezihv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163reziufax.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163wvargvuy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163bajdvvwb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ldmbvvfb.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163yjruivdy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xbgjgfbc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163sskuwsuu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jpiufmqj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ooxoamsx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163xlwfpvtb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ewaylitu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163uvcmrnqp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163wmadaxor.html

[L04] 设置超时
来源：http://www.xuanzx.com/163jbhiuahc.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163gomgwmnq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163wnmzrpbl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mdjgvhrh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163uejliozg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163urbivcsu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163xkoqgxvf.html


<!-- 参考信息 -->