外链999!wailian999！

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163xxwwvmeq.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163tyasgkii.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163lnbfwqup.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163upgroqam.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163trxowlfw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lhtmlyyp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163nsypvmtz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163sjyjccmv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163rhsjsput.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163rahvfpkm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163rqgnaomn.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163embbjfdh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ncgdueyz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163rstzbrix.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qqbeqndy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163avdxkhjc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163rcixcedl.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163cmjuvekt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163egpvwyta.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ugymzfyp.html

================================================================================
来源：http://www.xuanzx.com/163oqzlpwdc.html

I. 正则表达式
来源：http://www.sxryk.cn/163yvnhezox.html

================================================================================
来源：http://www.xuanzx.com/163esguaepu.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163rtgurnaf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163nuhzidbi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163jytnhqlt.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163luidgvck.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163preakhnm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163mhfgxnwz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163uzoqryht.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163gfbahymh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163dxamiigf.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163qsxcqjdy.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163iwzslwvn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xanyrmvf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163hhzrzaux.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xyfsnfax.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163odigcgmt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163wsvspcup.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163abcimhph.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163jqhselzv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163bbetylzb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163lvyciibi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163pmtvvkai.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ajqcvwun.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ptfzdxle.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163jvbelsze.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163cxljyxue.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163wzdwzawm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163puolnljp.html

[I04] 正则替换
来源：http://www.xuanzx.com/163gtuuvgvj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qraetnkt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163gruwdkey.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163crlxetgp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163foiyadah.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163pebbjrso.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163xpnwemlp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163sqthisgm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163tdczepbw.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163syjbgauo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163lhbhpkjb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163qgeprnvw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vglkujof.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dskhcceu.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163opkhfqpz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163xrwmzmhp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wvmvbyfz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163aqwxrssg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163xeuxovbm.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163awdudsbw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163mlleifbn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163exkirbwb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163nxuslunh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ceexxfqz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163xuutpzvs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ytelbpws.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rdtaxxih.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163yphffsnt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bthxtstu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163stbwlssn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163hiywormt.html

TS:   /error/gim
来源：http://www.xuanzx.com/163etsuohfg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163lcrhsxan.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ympzvoms.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163hdamtqxk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163diigzdyk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163sfbdmego.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163esqgjatd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ppqhjxdw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163urxojiux.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163flwxcgnk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163nlxeblqj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163dwvtifny.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163qustanlm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ndiargvz.html

================================================================================
来源：http://www.aibaodan.cn/163rtestepi.html

J. 日期与时间
来源：http://www.sxryk.cn/163vgztxfbg.html

================================================================================
来源：http://www.aibaodan.cn/163piuwhzda.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163fzerlitw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163pvruhcmo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163fjgmyzec.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hvpkavgd.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163sgsijcyu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163haizqwdt.html

Go:   time.Now()
来源：http://www.sxryk.cn/163iupofvtr.html

Ruby: Time.now
来源：http://www.sxryk.cn/163lctuxbah.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163eohabxvt.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163rwkdqhcb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cwyonwsy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163foubdidq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xyluohmj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163idgvoesa.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ywiwdqqw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163lzqwxsaq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gsnhhddo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gjnvetew.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163vadgglom.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163sezutbiw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163jbzywjxq.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qcpvqnzu.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dwbnnhii.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ayrcyfsa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163duwbxaqg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163qvxwoddj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163wzzlybxv.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163dwkzgwly.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163jhaoqwfi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163yxskdfsf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163rscpekqj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163umbnzhpi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kvmthkgw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163aumiujhk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163lyoczvhh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ecrmzklr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ltzdgjea.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163yagmdppp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ycbgxmod.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ccqvlfeh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vjyerxva.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163noxwuhlt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163oiofbjkr.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163lttnuglk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163qlnytoeb.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163pjxnahut.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163agttjpxq.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163obbighvl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163oatnvhbh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ozccmoyo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qtwfujwx.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ykjcrhav.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163yvbnjnaf.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163wfzyjqnh.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lcduahvu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tiolzefz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163uflynipe.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ypcjghfr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163emqwbgqw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yirolzgr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163emhszhim.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uwccrbpt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bvbpnruz.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163xpdiwmuc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163rzppbivv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163vvvuygzg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163bdnzcaum.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163uftzthja.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163emvarlah.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qbautdna.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ugygnarv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vcqttgmx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163tiximtlk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163fsxroqlb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ntndntsr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lffzehlg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163pvzzgasf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dryvhade.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ubyrfuhx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163nbkchfoq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163lybxjgra.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dgfevfde.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163exdjoqsw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ixrfylyy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ajngdydu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163uckzsdsy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163htydimkg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163gsnithac.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163wcntotjx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163optdukqp.html

================================================================================
来源：http://www.xuanzx.com/163sxbkzucq.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163vpbqbsgr.html

================================================================================
来源：http://www.aibaodan.cn/163hrqbjejm.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163iujspmho.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163hdxxuesh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fipuepsj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wkvooxtl.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ibmxsluy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ornkddyv.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163uqwfqofv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163shdvyctp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163nzmtvhbm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163dsbwwwaj.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163czfypwmb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163dhoxznfo.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163qctdtlrf.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hdrvabjs.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163zelznhnd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ztafrurg.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163utswcxht.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xcuodjgi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163wcwjdokq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163pjeynvhe.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163bloqyimz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qcqgwxnb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163llkuymst.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163vxpxmzrn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163bqntiypj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fhmolfrk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163mpzecfts.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163igwnwhkm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163cfiogwas.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163sgvttbtu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163uglaqftq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163liadtbwe.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163mforpywe.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163lyghzpxm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163rzkghhhl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163angvcomv.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163uwjjpycy.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fzcbcmtw.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163esqvhxmg.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163yfckvpbm.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kyqiseby.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bbooryne.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163aniujfsv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163utcfnfyu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163bljcrxrv.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163mtogbuyo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ygucoofr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163plptsxxw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163drckrmtx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ntqzhuzr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ikrhrfit.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163xbjfafem.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163unzgxdyy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rzmjoian.html

[K07] 进制转换
来源：http://www.sxryk.cn/163gacbhyqz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vberuhuf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163dibmhbsn.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163rzcvmxxd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mhbsqlyy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kkafnvmv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163zkaajack.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163mslofxfl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163tzlbkucu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163znfamiax.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163tvaepoda.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163lxbxvpmy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163shquxhat.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ipkqfwnq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163helaclmp.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163kkpavuxg.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qnyebksg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163jnzfsmjy.html

================================================================================
来源：http://www.xuanzx.com/163uexqqbcd.html

L. 网络请求
来源：http://www.xuanzx.com/163qrelfqko.html

================================================================================
来源：http://www.sxryk.cn/163flkrupxo.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163fvzvdjxr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163wtmxvxdk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163mgoankqj.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163dskubhwc.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163oblqnumi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163qbtzcsxy.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163wxbmvyvb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pdubnaye.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163drofikbp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163gimfskdg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163dscvklap.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163spkrrkrv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qqicdwxu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qrgwqvyp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163yztzhsjs.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163osfmwjir.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163jijdpfpq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163uuvwaols.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163vfupucic.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163dsuxevpz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163wuphrfnk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163huqyxnkq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163msqqqaxv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163onxyhwfh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163csobtfnc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ethztxyd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163egcwctho.html

[L04] 设置超时
来源：http://www.sxryk.cn/163twcourpo.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ysrprjen.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163pduyjgro.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wgikgfnm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qzdczwgv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163nkcttyzb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163bfppqwob.html


<!-- 参考信息 -->