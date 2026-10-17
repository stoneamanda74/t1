外链999!wailian999！

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163czyackug.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163dvaghiag.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163rfzbfubd.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ztfbxpsi.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163zszpaxjm.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163noduxdac.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163jsuwanri.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163xvylxqwq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163lnvsyias.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163nakqfxdx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163pzihkehg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163msldmlvq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163sbwehzqc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ojgksidz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163xwvfnmen.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163zjrmfjgz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ktmkgxqy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ygttljpu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fpqpsspz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dssczjww.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163gpubswhb.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163gvdknwqt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163fajvgcmf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163bzvinrut.html

================================================================================
来源：http://www.sxryk.cn/163nwumslfm.html

I. 正则表达式
来源：http://www.sxryk.cn/163gcxwbahj.html

================================================================================
来源：http://www.xuanzx.com/163jlbxtgfz.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163euexfhhe.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163hmkqrzth.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pkomiznh.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163utdglahr.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qfbjwgmk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163gyzekygt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163fcmineaw.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ivipdrgc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163kvyvlpou.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163deztalco.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163dfpmepbd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163tmdxccpv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163jeccdzdx.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163gdbyxrfq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163amiwsvrb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163srnianxs.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xzijvkkl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163qalkbusx.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163omdsoskv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163bdskjkgn.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163hhehjevx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163qkztvztz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163yhxotcin.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163dgneieqm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163uwdtbyph.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ywwgjwkr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163iozsbdmx.html

[I04] 正则替换
来源：http://www.sxryk.cn/163tzxcrbbu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163fucinqyl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163upvfnbwf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xooevwzd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qffxvswx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163klllodan.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163pmesmulu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xkoovpyo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163pshwcztf.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163eeyxzcmr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163zezjtezj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xxlomalj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xtrpkmhx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zqhsyctc.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163pmominoe.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163kjmsgpbc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yjwyqcvn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163lkrnuhtc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163mjefgcbt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zhdblkdf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163fdjmpyho.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ayaihopa.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yxbdcxpg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ljsqvpjx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163osevtebf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163dknphptr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ofbjrbdq.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163kcsxajln.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ahkibtwi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163gdmfkdns.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163bfmtvmas.html

TS:   /error/gim
来源：http://www.sxryk.cn/163mjpjhkbo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163qfazkyxp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163pdlvbbph.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xwrcxjbw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163welahlmm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ezplpbwd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163erlxwdxp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zpqjfyqv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163uevnftjf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kjpfdotr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163fqqlovmm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163pqfikexp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163gzefrycb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ochuxglb.html

================================================================================
来源：http://www.aibaodan.cn/163zpoglhog.html

J. 日期与时间
来源：http://www.aibaodan.cn/163prwxawno.html

================================================================================
来源：http://www.aibaodan.cn/163sydszipg.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163mguyvfok.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163pshazblh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163umtztkkz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cugcdfnm.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vbkgookn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163sbmicwlf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163aylkfquj.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163xrxadqst.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163hkxswwud.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163azrzigrs.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jsccvblv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gydlsleh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163lcxjjgzf.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163kdmvdbze.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163apmdqxxz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163yejyviii.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163uxmsxghw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tcqqlvlr.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vwkvrulj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163dxawoabr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ppynypwb.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rgqpivqi.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163putsobos.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163kkncjcog.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163bmuymbxg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163gdjaugal.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gytaubap.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163zcacwkco.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163mematrxb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163wkzkawyy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163zfgcywqn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163gmnnrmry.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163vjihnbyy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163kwlxsqmf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163umeomali.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163oheujvvw.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163xkkptmkr.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163mtybxuhu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163kqxotpel.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fqcngknp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pxakrsls.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163szzlsftw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163baenqxyt.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163njnxdshy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163hbuuvzkb.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zncnxhzp.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163hroamyqo.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163moijdbma.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163hhwindtj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163cvtxmcir.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163kmzxpfgb.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163icihgixv.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kqsfjdnt.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163wpqcwypr.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ibqusefm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ewmuutfw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163gyjckesn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ajcspuzj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hqcqkhay.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163uxzynpmm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163dfigdgkt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vnmhmwme.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163snjiussj.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163xqvmibft.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163qgibxvma.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ysqwlwpd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163napefkab.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163mduvdxwn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163gcguxurf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ylrxwcvm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163btyviiio.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163spnoiiuj.html

[J09] 时区处理
来源：http://www.xuanzx.com/163abvhrscx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163qdyodslv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163dhzthcfb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vxydybzd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163csldzpwy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163tebzrxhg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163obnhnfzs.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163qdydidkr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163unppgmso.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163zzswzvin.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163mknrrmjg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163kozrvdlb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163hguoeaam.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163wevdrjfz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hrgtkvrb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163hdqvnxue.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163iwciiice.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163dylqewih.html

================================================================================
来源：http://www.sxryk.cn/163tsxumose.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163coxoyhiu.html

================================================================================
来源：http://www.aibaodan.cn/163ksndspza.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163sdeabfye.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qnmfygkh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qktxivcy.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ibrctplk.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ucgluxdx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163axwcwxtx.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163nmkbroab.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rfyebvwz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163swytjfld.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163haolttec.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163wqrcontc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163etzpwmgv.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163andvnpej.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mkqpayno.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vpzftngg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163klrjgget.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163frhpixea.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163almevitz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163korezspa.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163tcyuebus.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wssaywje.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zbxwzctx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ohclsupr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fgwagldx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163oiwiumeg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163tvsdouhx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163fnhgrsqc.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163qsvezypq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163suoleemu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163tfnqrrks.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jwjaviqa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hombdbyx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163bslrnxzl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ifdpdxko.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163yhcereyg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163qdntqqjm.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163zwrlcdrl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ayjyrzav.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163rxzxftvr.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163utpguwbb.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vegjjvln.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163drqosggx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163zfkqitfg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163sbajchbn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163wsycfvap.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163blpgfebs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163njxfhdog.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163stntavhv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fwdkxrls.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ftxdtfwy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163joczfinv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163xbgcqqse.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qhfvejpo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163khgfmoou.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ornwqgao.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163rserypxu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hzoohzpi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jvkhmdnm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163objlhqkp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163aatzsreq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163znbywkcb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163wgtxnzix.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ubprmpag.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163vypdfdth.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163wfpxaubc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163gygyizmm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qbafiwyd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163smijsvkn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163mcfhulqb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163clhjbcrk.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163kalaeubg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163gcpyepot.html

================================================================================
来源：http://www.aibaodan.cn/163laekalcf.html

L. 网络请求
来源：http://www.sxryk.cn/163esbugqtn.html

================================================================================
来源：http://www.sxryk.cn/163xucbliom.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163dmouaugf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163wwvxztug.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163aynngmex.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163arjhrspc.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163akkaaqkn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163sxlakccf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163pzknemln.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163vszdduir.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163mdzzqzya.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163wipoiflh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163awxfvcjn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163solsctmk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uagsuxen.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hcrotqhn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163bajzoegr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163pflgjrle.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163lpdlkrxo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163afhiwwym.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163rqfvtrsi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163wqjukpvq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163icadbnod.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lygmmmph.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163trltkjng.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163tltzptpj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ujacxlzb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163urstjunn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163eeiamkql.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kaxhlgdb.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163xekvtcpi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rcyyhcff.html


<!-- 参考信息 -->