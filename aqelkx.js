外链999!wailian999！

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163gugnibsb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163zljzkewz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163utgigxba.html

Go:   err.Error()
来源：http://www.xuanzx.com/163avjcnaol.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163feajocbc.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163fiirbprs.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ywsigqyt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163nsnexcet.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163itvfuscp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163lbbgwcte.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163qwgpyclh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163sgfxnlbt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163qzdhueyf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163osgqxupm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163jddljuod.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163cealtdbu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163uxqebwze.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163oqmvkwhj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ambsbcsm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163nwjmflct.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163fmvlkemo.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ccskayxx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163xfdizapd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163wvbaqanl.html

================================================================================
来源：http://www.xuanzx.com/163ysntrznz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163mliqcvrp.html

================================================================================
来源：http://www.aibaodan.cn/163cievaufn.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163xnxkmfba.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163bmsdpfzc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163buylereh.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qodtnkjm.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ghwxmpxh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163jiexrjag.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163demzqean.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163lwkypqbt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ctwaturg.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163rytfjboc.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163abrccykz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163tuwmdonm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163djiikjjf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ymsmfkam.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163kcmnebfo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163vjrqyltk.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163mojxtqyk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163tmfzrcte.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163izijmqzc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163heuqdzxc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163gxmwmahy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163vivkagwj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163tvyedsjb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163icdrzrlf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163gsihfrzd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qljvbzwe.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163impwgszj.html

[I04] 正则替换
来源：http://www.sxryk.cn/163vgawpdoq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163likmtlmk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ehnygtwr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zosigdzu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163sfvcblet.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163aenmneoz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163adxeizjz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163glgmlwuh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163rfuxacgp.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163sopbhcfg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163azifryox.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163mjhyvonm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xytvauec.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ogljdnkh.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163mkvemucl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163qsisthcp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163urctbojz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163awyjjvmz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163bulpvhli.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163yxslfbvz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ujelyrox.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xjzjgjyi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rlysfxnk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ykkzhofc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163kkdxjyzi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163gtrmxytg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163btrsqivf.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vuliriti.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jpiuygcg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163osqfakal.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ypcfucbd.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163asznfwux.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163lcbsfrpv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ajvglrju.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163twxizkjm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163udttgcri.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163aoankamk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163fkloenjr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163uyinyfxq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qrtrsewk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fcmdewnw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163htygyyxj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163iwrxtcck.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163wtlhmbqm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163gupoanhu.html

================================================================================
来源：http://www.sxryk.cn/163garcbtwv.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ojrmzsdv.html

================================================================================
来源：http://www.xuanzx.com/163fepvhurb.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163kffewqqh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163uyuclfvw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jhuabywn.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163yxungfli.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jzquwhce.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mzsxceqa.html

Go:   time.Now()
来源：http://www.xuanzx.com/163dyzwplhy.html

Ruby: Time.now
来源：http://www.xuanzx.com/163rhwuglqe.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163mxgmjiri.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163rwwoibgt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hmzabfbz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yiahpivi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163qaptjrqj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ursyrcls.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163pevxntjr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163gicxbwaf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fvpurwut.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163sxtkcgsm.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163vfsnxevo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163vgvpnixc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ypyznumx.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vtrdjgfr.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zesglevc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163dmehqesh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163evhvtjfv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163zferibje.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163gvbepkfu.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163lpilrbly.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163rrbmzlct.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163gwodetsb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163fbacgfbn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163lethqpxl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163cyvdkkka.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163rvogedua.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163cfavksff.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163kravpgcy.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163wmtnuvjc.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163arnqebbw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163wphzwiir.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hejqhogw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163oddjcqzt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163qjnqnerw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tptwdupa.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163dzzhbxvy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163svoiffxc.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163asbxuanf.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163hnvksrwv.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163synvfhkj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163dlicwghg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163bdceeeym.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163zugznpqd.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163lkiyacxc.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cgnxxxft.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ditupqsd.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163yjmkkwcl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163oafqtpqi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163lwzrwfrw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163adirpdbb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lkxpkfpu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163qodpzavb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163wngjgoxz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xajsigfg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163aozfzzvl.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163suqmnkzl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163veijoskq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wzmaxyaa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163fnwmuddi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163edxevbgh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163tsqnhndw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163dekonxof.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163bqftkcyn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163mzwatiuf.html

[J09] 时区处理
来源：http://www.xuanzx.com/163yzkecret.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ghuqqybx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163zhtekmvn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ybjwrjnh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rcklrwck.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163cytegmil.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163fnzxibwn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163jedjynlq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163wqpyxotj.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163kwuatiep.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163yxqjadyq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163zklnlvvs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163xurpwskf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163nlsqnsyw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gkgkghng.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qiqsunts.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163lsgoxoni.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163gqcsysxl.html

================================================================================
来源：http://www.aibaodan.cn/163dtahpluo.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dwiprhbx.html

================================================================================
来源：http://www.sxryk.cn/163ktosgqwm.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163rsjcfkrn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163cxmixkzk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163inmlcpbd.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ptsaklnl.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tfacarcd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163qeaybkcw.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rcjkgpfh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163dxpevidc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163edqvllzk.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vthdqrix.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163znfeyisk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163prcdaupu.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jtobomkp.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hqwmngip.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163wgozmxdu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qzuconej.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163udvrufrj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163sxaiyewp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163diqcuksz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163fkygmqxg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pqsvlqja.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uwfykhtx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vxqmreko.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163gyyxrkcv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163prjxesjt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163swvqfxoh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163jzvroxhb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fxqgtqzd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163xojcjlfa.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163rqtncqyh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tffgepno.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ltrdyssu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qykxaoco.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ixgtyelz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163rvuyddad.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163kmupvupb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ntusmkit.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163glguwqtq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163gdbfltfr.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163obhfqhah.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ecjeyxwy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163fyhimbfj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163btocqird.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163guhtyfls.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ivglofvm.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163whbdirst.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163bnzckttp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163gmaywcji.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kdpcnkpd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qdweyzou.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163guhwtxru.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163yvivrbxk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163kdiywmtr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163vphjmgze.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163yafeefga.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163jamxwgbq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163tseuimtm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hsywbjlo.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cihvytoh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163hqjqmmbe.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163emurfitp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163hymhazim.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xlezsauc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ljemstav.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163znshrfpo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ooqbdmvr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163djyvuxih.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vsofquxq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163gsxdsole.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zsodgiqw.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163omztrgfu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rzhpvkbo.html

================================================================================
来源：http://www.sxryk.cn/163gjfrbsfd.html

L. 网络请求
来源：http://www.aibaodan.cn/163tguwqpfb.html

================================================================================
来源：http://www.sxryk.cn/163mvzcxifs.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ndgghqnw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163nknxqdws.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163hrhvkstc.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163mzjiqpkv.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163izpupvkc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163plswezne.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163uwyjygij.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163bovvxgzu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163tlgpdecf.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163tqbclndc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163caotuirg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hunynfhx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163nabxwgcr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rtwioqyq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163whifhuli.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163tsfjbrcf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163icvmxttr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163bzrhxbbk.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163oosnzbii.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163elgrgmca.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mwmhyvkz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ordarwqr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ieueozhk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163fbzehnjf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163jqdvgpug.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163tbtnuasg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163sapeflzi.html

[L04] 设置超时
来源：http://www.xuanzx.com/163tvivyrni.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163cqverdkd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163phrnwyut.html


<!-- 参考信息 -->