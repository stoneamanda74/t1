外链999!wailian999！

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163oigdehbn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163gkzubkkv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163fbvtquiq.html

Go:   err.Error()
来源：http://www.sxryk.cn/163rknyocqy.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163qpykyvvh.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163kpiamrna.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163fuujwhym.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163pegyysgs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163kitpvslo.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163nagzgego.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163yhypyovl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163vahjczqy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ovmtvlea.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163xcmangcg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163hbqwosvh.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163wsuptiwu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ctvuwall.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163bpirzghy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wbuzghmj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wkqwfglu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ycdjvgqm.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163qheyesgi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163yqaelbsu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163kdppptaj.html

================================================================================
来源：http://www.xuanzx.com/163ouyentii.html

I. 正则表达式
来源：http://www.sxryk.cn/163ripszppz.html

================================================================================
来源：http://www.sxryk.cn/163hbhshfkp.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163yumxapoj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vmnvmatx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163czysares.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vvdnzvxt.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163icnibcyd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gwsyqhqy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163danqkhzy.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163cbiptczc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163psmnlash.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zxrilfxe.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163sixppcpt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163zsqwulyb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ymrqblkv.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163hwbtiwut.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163sbbxzpln.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163mwpzxlxj.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163xgzxwzmc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163rbdclvco.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163vuvptdms.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163mejlnmjc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163nfpveoup.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163qpdynqpe.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163dmugirby.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163nkkdcrxn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163kkzxnpkr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163eusiwkln.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163uekdutgn.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ikurlktm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163pxlkmtgm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163mxaqckqn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qbhglhhs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163guihmwhg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163eaxvlhfy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jjtvldkm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163girhbuwo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163tjrlzzrf.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163godjccnl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163psqxapno.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163wjqqfofr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cqapklry.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rqjpbgoa.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163kukqgyec.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163iwwxevti.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pjkipvyg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vzfvuruj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163sntdcoub.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163pnfsvvtq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163svkyxjev.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163lpvzymxa.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yfuxfses.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163vbbroyih.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163hexhgydp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163hbrhxugw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163bhgwosdb.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163jamenobt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163xbdkombk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hxpgqowl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163vtpqksvu.html

TS:   /error/gim
来源：http://www.sxryk.cn/163gnatwadh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163jrczizbs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ytljcpxi.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163uqjptavv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163udcxidbu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ijmfiogz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163hjvfpnep.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163vseimgfg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dtwassmn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pccvfclu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163yfloysoa.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163dqtucedg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163sdsgtcmk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163uprsqjgf.html

================================================================================
来源：http://www.aibaodan.cn/163zrcczoii.html

J. 日期与时间
来源：http://www.aibaodan.cn/163wuofxroz.html

================================================================================
来源：http://www.sxryk.cn/163llcdcuml.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163qghmfhnp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163vnvgdoop.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wtswjcea.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mytbmcvh.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163trgglcme.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163sooedfoi.html

Go:   time.Now()
来源：http://www.sxryk.cn/163oaxddmme.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163hjtttlps.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ukcnyxud.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ieeyhjoh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rwfnmqpz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163usuxbduy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163oxswpwyj.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163yyrndjyo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163fczqylvh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163aqyuofji.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tklmivps.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163zehpvxtf.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163bqkceoph.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163nhdgwtyq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163repbtmvq.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163oaypmphp.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163aujfyxny.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163afbwfluq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163omvszgux.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163elxwdmdr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163xcrdqypb.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163mgdplyqm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163kshublcv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163xmphxqzt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ohpnowvn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163xaxrreaz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ktjhcqpa.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163tduvdkos.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163lnunszyn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163qqjjwhui.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ocbqgfsm.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163slnbzjir.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163kujlaobv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gvzcashl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hbqadmru.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163nputuinb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163beuetnnv.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163jtloabtd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163bfgkklrr.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163rtkbdfsh.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163whixapxr.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163wilbwila.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163sdsxmoxu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163smcsjgqh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ixfkxpcg.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163efaoptai.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163skgnhnly.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163fedlpcgq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163iqitneto.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163njbverkn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163tcpcxcam.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nefwcyvl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163apdobwzo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163trfenhym.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xurbmcde.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yvupqbxy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lhacvxfg.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163hnakjauc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163pqbhgpct.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ktlebvqp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163llodjvuz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163poazoxgf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163rzcswdmg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gujhdwoe.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163hmsnlyzu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163optnvthp.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163lpfvtsun.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163hbyaurhv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163lzlavwzo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lwxvmhmv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jkxdogyq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163tzkizwaj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qkilsazz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163dmumqgio.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163eifdzidq.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ykzcwyhc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163vhnczyor.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163axpwfyzk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ftziafju.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vnmuubxk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163eikoisze.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163gzlvwbfz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163qcbvqant.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ejqvacom.html

================================================================================
来源：http://www.aibaodan.cn/163huvumxoe.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163colozayg.html

================================================================================
来源：http://www.aibaodan.cn/163ijujuzck.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163dbblapvf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jdnsjowb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163viwdnifn.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kyxzruxu.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163myzbggew.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163pnymnyhc.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163uwmisjtm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vxidkplj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qdcezwii.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163yeebyatd.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163tjptgzvq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163imlynuyk.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wajiwvuz.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163irwjovem.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163tvgifxfy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ybnzcfod.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lfavqysa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163gcubtlqf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163getpdtwj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163cuzdqoqo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163bitqwzdg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zseamilj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163aslfiduh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163isecfqny.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163isdegyov.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163jajjaxft.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163luyainmg.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ycnnzmzi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ilsgstym.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163vgyqechy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nwkhwcri.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163alkqlwga.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163bqctfnnu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163kvisprev.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163oyyzpqct.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rxvneumx.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163rxewlogd.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163szcpdjpw.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163gdlgfsly.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163tcqdxggc.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ibcisdcj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163wwrtvgux.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163wrukfchs.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qpynbrka.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163gzgqjvqh.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ppglaqpq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163cvcrkarj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163zjyaigwe.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rxcfaeop.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lcihssgt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163eqwboghx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ltvctbgw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163psddipgo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ycgkxehc.html

[K07] 进制转换
来源：http://www.sxryk.cn/163qofkzsmo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ttqjffyg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163dpcinaty.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163meewwbbs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nqsimljh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163uelgjfea.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163mmqmpxwg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163vdhpxpjh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163stygpdmv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163zjvcoloz.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fidgmwrr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163wqqklrzo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sfbxpssa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ezrivfuw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163zdgjgeyi.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zmtnpwaf.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163rnizcouh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163sotfghvw.html

================================================================================
来源：http://www.aibaodan.cn/163uftlyqyb.html

L. 网络请求
来源：http://www.aibaodan.cn/163jkpcfrrx.html

================================================================================
来源：http://www.xuanzx.com/163zeuwiwzo.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163qvoerjzq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ewnruhmo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163iosoiqpl.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163rgbgrdfd.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ltafzawi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163kklneikp.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163btoqfdcl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ltswlpnm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163bljqjwzx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ykwgudnz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163bblcemkm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163omgynsxs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ejpgrjir.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wlyvczaa.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163lgaaerqf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163mlgoxrbm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ezikjuya.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163vnirpaom.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163xptgmaai.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163iqgjoihg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163dungprgv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jaefbrmg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163arbctqbg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163zxdwsvhe.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163emcenaey.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163wnyvwdtm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163wosoleov.html

[L04] 设置超时
来源：http://www.xuanzx.com/163xtyssbdu.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rsxfmrgg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163jqopusht.html


<!-- 参考信息 -->