外链999!wailian999！

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163zngoawkg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163dapizxvn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163bidwoott.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163yqdbhjjp.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163yhqaeybe.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163lfmxrujq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163okqntwaq.html

Go:   err.Error()
来源：http://www.xuanzx.com/163kwlbshyq.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163lryhzguj.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163zkkfmmpe.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163tcytzkfo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163xnkbkhts.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163npcbwjss.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163wxbcukrw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163wshcdcjs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163mkfgegng.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163vhympjul.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163zzarfrho.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163igegxctm.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163obqldvee.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mfxletmo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kbnzryyg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163klmkxhep.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jocgalus.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163iakwakte.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163azdxhstg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dxpjveqc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163vsdxlywk.html

================================================================================
来源：http://www.xuanzx.com/163aexpztoh.html

I. 正则表达式
来源：http://www.sxryk.cn/163ggcwbver.html

================================================================================
来源：http://www.xuanzx.com/163jlzpdnlm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163wmozfgkv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163tbixsjtb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163vypculov.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163dbrllait.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163mmuudbai.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163tltfsnlb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163hdcezlvb.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163cywntfuw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163lugsgfmq.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163nvmwziko.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163zhykgpmh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163lugvzpcr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163brfzlcfs.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163brrjcqus.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163rmtbevfk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163tsezpenw.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163fcgbyarp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163hyuccrbd.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163vxtrwhwo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163atdbsjii.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vnzfcqil.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163szwrjbwg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163qaisikfd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163evomrsmb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163rsotrygz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163yqmanppd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163nqhiksff.html

[I04] 正则替换
来源：http://www.sxryk.cn/163hqdzqnpc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163cwplgavz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163kpzyqzem.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vaglrngi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163oidondbe.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163pvlqidcy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163lpjaxpdx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163klslrqac.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163acmuekjs.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163vmdyolpb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ksygvaij.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163yidayqfr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ztzmpqlu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mbutpaze.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163gbgipokn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163uumhlhxp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bdyavvuk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163xnzswtfy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163rvnjfmpc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wffaeetf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163coyczbne.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bqqimnkj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wxtjwdqd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163hvcgvogp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163otwpdwzv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163hxgpqgkc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ccyszbjq.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163algqvhqr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163sczkzrtb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163xmwhuxwd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163htmrkyrb.html

TS:   /error/gim
来源：http://www.sxryk.cn/163fczjdqek.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163puohukel.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163pfqbzqpt.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163etcxvjzk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163oyryvlwd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163nmcqnfgu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163gvytuczd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163jgmybvzr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163aviqowrb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pcseoydc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ychvfuoi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163lpnimyvk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163wqjvwhqs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xfgooago.html

================================================================================
来源：http://www.xuanzx.com/163yhawbnbe.html

J. 日期与时间
来源：http://www.xuanzx.com/163iwmhmmrv.html

================================================================================
来源：http://www.aibaodan.cn/163wyiqkypv.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163okqhzowq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163teahwklw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cleswrkp.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ikqdlmdg.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fyebkdud.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163sslytvsc.html

Go:   time.Now()
来源：http://www.sxryk.cn/163riotxrzi.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ghepuaqo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ulpnkdwq.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163rnxccidt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163deqbamxt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163uuzjnafs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163njerxstp.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163whsluhhd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163bphhaift.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163mpmnnvdv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163azxcaavc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163dqijmmxd.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163dkzmdgtk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163emaqhyqj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ajpywizy.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163alytyuzo.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xpgthqbz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163jzwxnybw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163puqzgmqi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163xvipsyyo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163zueqbshu.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zhdxxprd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163rminczny.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163eedvgptc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163rhooungx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ntoqgzch.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163dbfktxoi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163jptzofrx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163dbzhqukt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163wsbjvity.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163gwiytpmm.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163wkjpcmpo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163lixqcmwz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163uvdoxgru.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pikynpel.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163zbtggjnw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163gvkghhmv.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ipuyanmh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163khimxlgm.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163xcwrtjpm.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163xhtxkgop.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xntuekrt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mglfzlsj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vbhwmwnr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ujryxrui.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163cabaiaui.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163usdyeima.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163osihenud.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163adscrriz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wssqdvzj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163pdbgamcs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hlivmddp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hhlhffek.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ptusikxo.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xkmgnlyb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rljvqmvv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tadlpfqs.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163zconmkiz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163pzpxascp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163xgwibxpt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163lcighgcu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163wirusutz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163lwbrecwk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163gsvckyyt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163mynilkeq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163btcwcxnh.html

[J09] 时区处理
来源：http://www.sxryk.cn/163gnbbwosq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163iykpeydt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163vwpuhjxp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qhtanpvv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163iwspccvs.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ybiijwxw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163muonhkdm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163blodtioy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vvzujjvj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ftguxzjc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ovmkxwda.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163egtucyit.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163uuzgdlto.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163nxtssffq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zsfcukvf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ljthjydl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163mhxzlvtu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163syosycpk.html

================================================================================
来源：http://www.xuanzx.com/163syuswiqu.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163rwjfbvmg.html

================================================================================
来源：http://www.sxryk.cn/163rjavmvuw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163smmoduro.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qmnfbqcp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qgjfvqdz.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163eqeqvzjd.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zwxtoapa.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163vxbzmgwp.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ofhabqcw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163tmbjfjdb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163uggnyojj.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163pajxhlwu.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163infuhobi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163tsqzuaiy.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yxexlxch.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rnhcrisd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ennlpjox.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163inpqekvp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163vnkxcrem.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163frystpzl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163mkosnmuk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fubzbbes.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163cdcfipkq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163sgoplchl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qklnvgvj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wsazrilb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mfwhjdlj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163bgqlwyjq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ciwlxuqh.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163pvocivln.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163dpsqnwnt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jetdeiay.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mopobwux.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zcizpyjz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163qwcneqkz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wcekjodg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163sjsqsvef.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163kuarmfdb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163nedpyirn.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163wudsvied.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163awnhjobs.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163osyitdco.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nbtnexus.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163iunxaota.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163wdudepnx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qfwdnzat.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163cagxlwpr.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hicmjasz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163jkxdpiab.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ejbvzhij.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mhnvckhy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vvqqmktz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ecagwqgx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163lherhjrx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163pyutvmru.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ahyslozl.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163becwnzvy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163cvueiubm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163wuldavmr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hacwmsag.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ldhlvude.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163wlrbdhln.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wurcixxx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163sfqmxaio.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163fzgxljhk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163eyvxznuq.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163tiiskvse.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kvlpfmrh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kysotuea.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163upegfuif.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vsvonbpv.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163qabadcht.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163fpbttazv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163wwigbrrb.html

================================================================================
来源：http://www.sxryk.cn/163sxsaqmyn.html

L. 网络请求
来源：http://www.aibaodan.cn/163ihlndovr.html

================================================================================
来源：http://www.xuanzx.com/163czuzkmdj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163asiglpzp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163aqwbixzb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163naxwjzux.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163fsooeanp.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ldowpuzm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163tmnmchyg.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ebpadenn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163eqacyhkh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163vnistztn.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163lcmjdvqn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163qmwcsmmy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163rrfjuckq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hqsgnngb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kueejzls.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163xhubwtve.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163cxjowlfj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163tcbnhfzo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rkymzytn.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163zdjqaphy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163zikovtld.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163iajfxbyc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mjcuvljm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163szslhnpr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163sjwkhjwl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163gyerebmv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163mnhgglcu.html


<!-- 参考信息 -->