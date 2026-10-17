外链999!wailian999！

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163vihmjukj.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163bljealkk.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163wqfgfazn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163fxfwlpor.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163xfktqgbq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ngjvrmkp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163bwydhvbz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163egiyhgbp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163cjwdesul.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163hirhusxu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163iquabzdq.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ckfznoli.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163qbirmobm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163fvadympp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ccvdlipr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rtkwdqcs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163oiwhixdo.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163yetxloya.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dccmuien.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163gpxdbmbj.html

================================================================================
来源：http://www.aibaodan.cn/163jtpejaeb.html

I. 正则表达式
来源：http://www.aibaodan.cn/163zzrgovas.html

================================================================================
来源：http://www.sxryk.cn/163xrvmfrgo.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163rkzfvoeu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163eflboawj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ycaqlabj.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ltkqhkjw.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jyllpuxj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163xnjxbkum.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jpixpxed.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163cmuwqeyp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163lnptepac.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163azynwfav.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163xdpzwzkh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163iynnlsya.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163zbutvsvk.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163dvcujqoc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163qnywrupx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163olinjrzb.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163yxmcvkyl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163dhtgkqha.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163bknzzrrm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163dadvspci.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163gtgznwus.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ujovdsev.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163xukpotms.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163zvtkanea.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163uilwlgji.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163xnrgghar.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ynkpuysl.html

[I04] 正则替换
来源：http://www.sxryk.cn/163jgeccfxt.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163rbncmhtg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vbfpyvvi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xccmbjgg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163egabmhwk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163matpbxou.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163pixuhxtc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163fgztzkvy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163edpekwow.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163inkmdetn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163tysicxvl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163lsgnxnmf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xudgljoo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vfbyegsh.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163wruajibr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163qqzsxugh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hltbmphq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163mdicdydm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163vyjxficn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hmfdzkqr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163flbbrcwa.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mzrqjvsy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bybdmwmj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163evdbsjje.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zwizgrfs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163rrqafxmb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kcxaiprh.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163gmshnkfr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163gxzyjiss.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ajzuvdjy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163pqclmrzm.html

TS:   /error/gim
来源：http://www.xuanzx.com/163lbwvgjfh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163juodmmsx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ewsaejdj.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163zzvmdzbt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163pohkiuyt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163agsnlflr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163jjrkoqxz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ozoecffw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163lbmcerdj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ookanewn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hqqtdmax.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163dizfkyrh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ihkkbzev.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163dlldbgsj.html

================================================================================
来源：http://www.xuanzx.com/163felmeuzj.html

J. 日期与时间
来源：http://www.xuanzx.com/163wcpqvasg.html

================================================================================
来源：http://www.aibaodan.cn/163qkelheuk.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163rdfcbzyo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bmdhbzex.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ssxboncn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ylfgceub.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rkcynyrt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ulbqiqjz.html

Go:   time.Now()
来源：http://www.sxryk.cn/163omarjgzv.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163otpuxzbj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163xwbejbzy.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163thyxkmai.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vooaetdb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lphodegr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ripbjrfh.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163sssfxtdg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163lltornvq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ubxrfpeb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163avotfjur.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163trbnfppt.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ryaenved.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163kbvuixdo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163oucprjiw.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ejbzyezd.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qarvvkic.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163kxpwvipz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163twckfhva.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163pgcenhlp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xhlmolgj.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zavnunpg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163lqluozcj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163qtlhpdbi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163bdvwikww.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163fahuazvd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163mmwfimbu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163jbneajfq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163nrebkbgu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163yginisow.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hpdbmnrj.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163olcmdhbb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xyykntoh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dvxyojvo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vpohhkvi.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163zjuexjjv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163fmwfmuuz.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163vehmhngs.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163zmsypdzz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163qvguctvz.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163fcqfyjhm.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163isusemhw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163afuiaskk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163yensmbcw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ckzoyymw.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ztnmkyyp.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163tffdfeye.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163fjjgoqdf.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163adjpolbi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rwapvgnr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163uztveija.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bpwmaiho.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qociuysn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163sdeapmgs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163bkljtqrj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ibtnogqv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jaewwrrl.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163prqzcvaf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163dsoyxrzm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163fyflftrc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163cwseuoxl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pqchcgmw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163jqkcloxa.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163hofrrejn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ogbsgwmn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163zdnrwupx.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163usyclzlv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163qppjxxuo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163bzhlmhyp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qlqkuvib.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zmagucuo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dwdgenaz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ydqrjyhe.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163echavqdk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jpvjphey.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163lxzgzoqe.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163yfznbvei.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ibxztvzy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163lnnwsvff.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ipjxfrsy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163glggkxpg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163kqgmwoks.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163yhmktdls.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163bisbkscn.html

================================================================================
来源：http://www.aibaodan.cn/163fvqqabnq.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163jsghbznr.html

================================================================================
来源：http://www.sxryk.cn/163oivmmyjs.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163idldmlwr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nkntfiak.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qblknugv.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tpvftdcg.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163uapmdzbj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163fgjastci.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163sexmhxkv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163svikospc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163rclhqxnp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163hpnbsodh.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163kzusodji.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163gdjouqfx.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163duupfsjh.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163czpbsyvx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163jicvnhtx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tpxjbabd.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163nvyjcmaa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ohexcqpd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163bhmtgcjs.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163wzknymlq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vfakjugb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qzisxsmq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163nnlihjyb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163zmoywujx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163qhaucvbc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ijtpnryg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163utlhnuws.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163cpcniluc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zacbnhal.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163cdocjzbr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xzmyazuu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163sfuwrmwk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ctvsyecm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dafnrrgb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163pgvforpg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163onrlwigt.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163vmyedguv.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163hjcdenmg.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163gzkxmyzq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163aaiscapv.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163bkfbueqs.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163scuuxxlc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163kncveisn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163emacwupt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fkzdzexa.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ylpbqgdm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163lofjoqsm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163yurfisox.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163fnpzamos.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gciwftxi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163hdrtshtq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tnpgfgxw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ituhqths.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163abchawqq.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163rugpiqkl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163smjcrbiy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163pntweoxg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ozabioxq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ynimpvyo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lrmsexxz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163oimihfpz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163tqqampmr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163wnwwkkzb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163falfiati.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163vziweibm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163mtbwbjcu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163eozvuyby.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163iksasgbq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lmbcrido.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163pmyiojxf.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163etkigega.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163aveudcse.html

================================================================================
来源：http://www.xuanzx.com/163zmvlelru.html

L. 网络请求
来源：http://www.xuanzx.com/163kvdhirnr.html

================================================================================
来源：http://www.sxryk.cn/163ilnqypwj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163wshnarmb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ennruzyv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ipqmnecu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163bhbgiein.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fjuynezc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163rpgkvgyz.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163bgywvqqn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163buhazgor.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163lxpettkx.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163opwvdcfy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163gnzmfrxj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163jdugjyda.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qmsvduis.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163rbtjsmfh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ndrnyhbk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163cwvnjfli.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163jqjkiucc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163iixhgjkt.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ysoohhoe.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163uuwyszos.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163mnxzqllb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qqmdejjl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ijzyncqv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163xrkpxmwp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163idfivgar.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163gyvxpzml.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163cpgrlobg.html

[L04] 设置超时
来源：http://www.xuanzx.com/163npssnbuo.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163zogcmngm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163nuiqivye.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kdziicez.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163sckyoztc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163pbfgznpp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163menngnvo.html


<!-- 参考信息 -->