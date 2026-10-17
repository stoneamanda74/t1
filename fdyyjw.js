外链999!wailian999！

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163tprpzcux.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163hubsvuda.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163hdfwgmaj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163qmmhesly.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163mxdgyvap.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163rvapeafq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163njydwsur.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163eaqdeoev.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163uhorvzmd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163qedojaxt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ttncslgc.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qnvusmkj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163wivhxpfk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163rsrdbikn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zqxmudnc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fpqlwwba.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163rhobclri.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163igznmuss.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163qpuzjtjd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ntczrvwh.html

================================================================================
来源：http://www.xuanzx.com/163qaushjzz.html

I. 正则表达式
来源：http://www.xuanzx.com/163avzstvgd.html

================================================================================
来源：http://www.sxryk.cn/163osjrvubf.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163zrolpqev.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163objyvbpq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163pbnolmat.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ojnrhxji.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ntwrzaqo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163cmpqceoa.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163lcrsgszp.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163rznmeksv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163dyfshgcn.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163sbemlrev.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163oyishyvj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163gqfgyewe.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163jsnjgbwu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163dlnaguoj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163uxbjsvlm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163klgyppru.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163pnxzmdwp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163deairvnu.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163cwvuwvyc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163eaplxsvr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163axaedsyc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163yziazgpk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fnlmsqua.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163zzfefkpc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ftbhsfjz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163xqnobhgx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ixgtpcnh.html

[I04] 正则替换
来源：http://www.sxryk.cn/163irvubtyb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163sprhgvai.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ctbzugat.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zmeshwbk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163awwdhsor.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163hxkyrcqk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163vwyepnok.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163yfgdkhad.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jrrydeqr.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163bzrsbncp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ybxljqxl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fgpfnnzc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wjnvwadb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hnxhongf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163quxkekvr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163gvishmqv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dmaqipgq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163daprzmet.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163afnibejg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sopwvdsn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163cxzoodla.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nfmeldgs.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qiiwxpaj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163owxcgrwc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163toewncjf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163hnuayanw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ogfxlzsi.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163mpindtpx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163gbzeshdp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163clrlvhvc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163eqbmgxqa.html

TS:   /error/gim
来源：http://www.xuanzx.com/163dqnblztz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163nboonwgo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163bttacfrp.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163dhmdvwak.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163lcgwrmwh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163cpkuqlne.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163nyxwivth.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rimdllpt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gibfdpij.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gtknrulo.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163uayryiyu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163kvsqyruo.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163fpobdolz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163htdzhanw.html

================================================================================
来源：http://www.aibaodan.cn/163tggcejrz.html

J. 日期与时间
来源：http://www.aibaodan.cn/163dzfvazxi.html

================================================================================
来源：http://www.aibaodan.cn/163sxbvwmky.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163deoagyaj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163xxztoopq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163csuvyeiw.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jsvbdotx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163blqeqlmu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163guliwuko.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163xsefzopk.html

Ruby: Time.now
来源：http://www.sxryk.cn/163mzqylwcd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163qhrxyrck.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163dcwplgfo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ciorfiap.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qxwsadta.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ivhomcvj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163waybwtjz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ltijaanl.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163kwqgjpnt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lmlutesw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163otihfpwt.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163dasiapem.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163zkfgfpxj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xuphewux.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xzbacbyk.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163njntghto.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163twdodatx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163eqxszjyr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163jtdylcjn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163tylalmba.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163sbfqbvpu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163bhklgyqj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ejobsfjf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163nikgldsv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163jnxyezao.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163srlqaelk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xzrfhfhp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163pqqawxxj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163yonyacsq.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163uteyxlqg.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ayxkwwoc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163gomwpufa.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fppcbafk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163emfaebyh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163vvpzmzbq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163tlaxmxzr.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163txxdpmkx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163zjxknaim.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ctvfrjxb.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163gbgafnjj.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163iyaypuum.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163pvdknydx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163jgtpmahg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163iufgiutd.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163lsbglrhq.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163bnjtkgia.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163labjrimk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163hesgoiyr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qnvxarvb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163fxjkkrte.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163iaoefpoc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163djwdamta.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163hbthmphf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ticncotp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wrxbgaho.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163frihvgkm.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163clnrorqt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163arhesjmn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163dujlxept.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xtyndwmh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163cbutmiku.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dcjabjbg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163rcluggga.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ikmpreuc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163fxmrhemx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ygsquccm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163wxsnyhwj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163udlwoino.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ezwiqlly.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zhxgtxzn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163dpjhqfne.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163eszbgdrd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ajztyaua.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163swtomcrn.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163bhoxuque.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jbclvypa.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163hssmsspz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163atljmmmr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163rbzdxgqp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163hhbwrjbg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163lhcishom.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kupmmjmu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163cvfaeiqa.html

================================================================================
来源：http://www.sxryk.cn/163vmoivgtj.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163rcesxuot.html

================================================================================
来源：http://www.aibaodan.cn/163ifsczsbv.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163lfxgqrqv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163kmgyydjb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hddpjqro.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163oghihdcf.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ufpzjlul.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163lsxakezg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163xfaqjvzb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163lojuepfk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163jcpktwgi.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163igouhdbf.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163auoyjqpt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163lqsukljv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ecccbgum.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ptewqqyb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163dmgbeith.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ghzaiqlj.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163yylytbxr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163hwwpbefj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163qljynpnk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163coxspvai.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dmgoiugw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qwayyovh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163leqziwck.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ybvnqgco.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mzedakbo.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163uiwickzk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ygfviqrw.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163msijgvsn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163kawdxcry.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163evierxoc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163dqrkowvo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xvnakdng.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163jeezcivm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bxapblbh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163lrlswmjh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163gipjqhba.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163zkxahwjh.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163abfiebwb.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163aajemhyz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163uwsdnfhw.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pnpskskx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163frhijiez.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163szoadoha.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163fxbsqnzh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163tgmpnyvz.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jqasctyo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163pqamkgbj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wmhriure.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dxxwlsxu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163akgnhzvc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163xcpdwejk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163rcwxtbgm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163lrqhmecs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163utaxwceg.html

[K07] 进制转换
来源：http://www.sxryk.cn/163byuaoubb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163fvkopede.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163pijaakts.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lcztttse.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163urnfrphc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163nqwqpvcz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163gieiyxea.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xfmhzxbl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163qycuagig.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vewbreer.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qgijerdp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163eltdrnpy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nmgvqxbl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163imsciesq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ghygdkiq.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163fnihofyk.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163dtspyyck.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163pgsjvjjb.html

================================================================================
来源：http://www.aibaodan.cn/163qhnnzgbi.html

L. 网络请求
来源：http://www.xuanzx.com/163aaqatscz.html

================================================================================
来源：http://www.xuanzx.com/163yveribwp.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163kwrktwxz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163rykrwcwd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gbviyhaq.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163motptadw.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ghacsvnh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163suovmegl.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qyqbcwlf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163aeyecxvp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ehezlktx.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163hywxjeve.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163iiblkkdy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qgaaunbi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163znqbqlet.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rdxxfpjx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163nkfahdph.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163elmegilw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163depksdva.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ijaatlob.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ajpxqega.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163skgctcea.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163hsnciydw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163htwvptdh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bjxwoiiq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163dofvhzjv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vsufllxk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163zbsomdlw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ltmzolvs.html

[L04] 设置超时
来源：http://www.sxryk.cn/163lpctqnlv.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dxjjhhjj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ifmxklcg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mbctwuph.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ynszftat.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163fiqhvzfl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163jgdorurr.html


<!-- 参考信息 -->