外链999!wailian999！

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163elykiswm.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163lumrccah.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ndxoqthp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163whgsbtxm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163whisjahd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163egwfgeqb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163vpupbnof.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163memmywmn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ehsuywyo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163cplepbeq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163laqknguc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163fvpzaxtb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163rqtgtyem.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163zoxaoafq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163sqltuxue.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163onjzvvod.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ubxybmrv.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163lffpulni.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163scsimsxf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163gauokgvf.html

================================================================================
来源：http://www.sxryk.cn/163hgrfbnty.html

I. 正则表达式
来源：http://www.xuanzx.com/163zzlwqpys.html

================================================================================
来源：http://www.xuanzx.com/163ztfpmstm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163wchsupds.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ctvsmkzl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ejykjmpi.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dajjsmct.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vkzdlpbu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163iqvcuxgm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163wecgpbvg.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163uezqswmj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163kjtjnccx.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ziqbksrv.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ytumchhz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ngdaeepc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163eyqvvmmz.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163yzispgmp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163omamhdmo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163epcymzlb.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163hxglkldu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163epuczwvn.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163qodkkqao.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163eqsrzqva.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ufksthok.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163vuwawcum.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163pyemklvk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163npstyila.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163huyaxnhx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163reibwxlg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163mhwadtew.html

[I04] 正则替换
来源：http://www.sxryk.cn/163plnroney.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ncdlighy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163feylmgkj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xwvwrcin.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163blmxegsu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163aarlfwzk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ltqumghd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163oukxbgrs.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163pwhumbts.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163hhzjlcng.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163sruqqreq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163txfosypm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mqrtzkid.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jqtutwea.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163smuegsml.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163cchxjjyz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ixtczflo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163duperpwg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163emxxrhlb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jfjpauzd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163pfjierkk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163giabhvdh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163asgjzozh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163yyqfnxoh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163zhyfbgeu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163wyipcxqv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wwzhhxsq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163rcfqlrgv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nsljctzn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qqesaoql.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163fhgsmkih.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163iwhtoyai.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163kqmfxqkb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163eihovhfq.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ptpcdxmx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163gbashfeb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ursgdrfi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163luwutjuo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163qennrgva.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zdfryvov.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163diqnmqrk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163lwwfmhjy.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163yamdlzve.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163pkvaponp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163vdsrbrqr.html

================================================================================
来源：http://www.sxryk.cn/163mqxhwrnf.html

J. 日期与时间
来源：http://www.xuanzx.com/163dwpdjpom.html

================================================================================
来源：http://www.xuanzx.com/163xaznegtj.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ziydayws.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163stsywxev.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vbhsholu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zucdrgck.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zpzaginm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zpyomkkm.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163yujikmmj.html

Ruby: Time.now
来源：http://www.xuanzx.com/163peddcrck.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163yyoswzph.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163cpavcecx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hctryovr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ezfyhxqe.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163cfklqflp.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163biiltiow.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163gmnhsxfh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163egiiukjc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163tvdmxosc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vlyhgyzx.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163lcofogml.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163piniewfg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163cmmochcp.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bdkgjwyg.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163oorkwhuv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163gfzotebs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163lhuqzyfm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163puqsvbvm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163antlmwzi.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163vsykxgpx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163yfzpnbie.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163uobfrfpr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163bxfurthi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hwaffzgg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163cjogptdv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163fgyjvuto.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163vuzqsrqh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163rxrhqcce.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163cmjyeqza.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163lkffanyi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163mshmeubi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163abuyxegw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163uftanomb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163lelrwiwi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163zoileetw.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163rzpavbfn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163tirggcuf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163cmrohjmo.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163qwxnrjpl.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ztdhcqjj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163rftmmmyg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163vfnvcwyp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163dexnbfvd.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163axsyzmej.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163znhjzofb.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163qishxdla.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163pzvtbntz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163awxcppzf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ugdrsbpx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163yibceexy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ksvnvvth.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163nuobozko.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163rjsyrgmq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tsxuusbw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163sjlefxqi.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ndajbxjr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163dmxvtppt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163urakupam.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163bridsibp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163wxhapmoz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163fdrzivdv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163eueddsrd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163cczkholy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qftgsyru.html

[J09] 时区处理
来源：http://www.xuanzx.com/163mbwptgce.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163vobkwprx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163igbpxeik.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163miyitcqd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163cukgoqre.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163tsdsqysg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qnvywfya.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163juoqywiu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163iyommiyd.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163mxvhibqn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ejlxhhyo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163fudatyew.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163rcxdaklv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163lvaqcvvn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ujvqhrbg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163aucndkmg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163tbrcflew.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163thirrfvm.html

================================================================================
来源：http://www.sxryk.cn/163bsgszqnt.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163jdghknuv.html

================================================================================
来源：http://www.xuanzx.com/163dqtwrfce.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163xdxqkbqe.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fenitrgh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wrxvfssr.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163fvzyquwx.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163fxibswok.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ozdfpkwe.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163vajdavcm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dgirebos.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163fqqzsjhi.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ucvelhye.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163nbkmgdru.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163qqrramig.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gvpiknsn.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kuhxjhzl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163dhetstcb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163uuktpxkv.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163rcejxrqb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163akbipmhw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163zdcvinzr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163eqkovfcp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ukxgkgdm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163eqnhrcwr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wlyhekfq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163evdtqqit.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fylefdjz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163pxsqcmem.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163hmigtrsv.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163nnbnrzuh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163dnofbyax.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jllvkrvp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163swxpgnbl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xefkjcll.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163xntumegs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163svwyhuoq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ppsphlnp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163gzumynzz.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163puhiahtt.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163lhnuowxp.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163qtfxpapn.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vdkcbqdn.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163chtcauya.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163xgwyzljz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163hwuswing.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163daencjtr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163arxamzhf.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163tsqzlgsh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163pljmegtg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163bzuynajp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ebpimdot.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qgidaifr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163cpbyunig.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163aakxwnhw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fbjpegfc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163elagbivn.html

[K07] 进制转换
来源：http://www.sxryk.cn/163whvqmadb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vbzbfuwt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163yusbdjlv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lfgljhwi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163pkyqorqe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163nyxnqqwp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163kadndukp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163hbbutcqe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163zattyrmn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ujurpylv.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163giiotbpm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163natlfipz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qwtgqjun.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ynmvuuxl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163fvrtsysa.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163kkwfpujl.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tsdhyooy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ujaudxux.html

================================================================================
来源：http://www.aibaodan.cn/163xjoepmsi.html

L. 网络请求
来源：http://www.aibaodan.cn/163fzmqeqml.html

================================================================================
来源：http://www.aibaodan.cn/163upbsbbqn.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163hkorzrmw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rgzenxej.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163yfdzenon.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163otwcdxcl.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163nmskrfim.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163qjqaecew.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163bprodvep.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163yhxvwtdh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163zprkltcl.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163btqscfbh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ziltvnnr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163prxptvre.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163okitpieb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163yowyerqg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jzukocdv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163sowbnlxz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ngcwudpv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163azeykwbx.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163izbuqxph.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ljfdatsq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163jrccyuqc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vkarqrse.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ftfkuzkq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163xkiqaxfm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163lyebvgqm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163lhrqlscx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163kipmkigv.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163woigajzx.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163fzpyenxq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163xszfqfho.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163choqkjxh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nrntpcru.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163cvgwgvki.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ipcaztjk.html


<!-- 参考信息 -->