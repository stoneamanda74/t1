外链999!wailian999！

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xnsvghqp.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163etyydixv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163fbcouhva.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163gzahkbaw.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163gnaygcvr.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163evchjhuy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163oqmkujow.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163jignmlfm.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163fucbstii.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ejqxxbib.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163oshpwdod.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hcljzlxp.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163uhgyvlbw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163lcrxfjsj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163yvtrkozi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163nokpoaet.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163uvnejbpw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163vxiluujw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zxdukylz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163onpxffuj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ksrfieqk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163milmzprv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163xjzbhwlt.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163rbsbpepg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163bxvrbcfr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163hkcchwsy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163igrnjsrj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fbxovioi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163bxyjxmyz.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163nyeyxsbo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dwfausjf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163cqekrqsj.html

================================================================================
来源：http://www.xuanzx.com/163sycvvmmi.html

I. 正则表达式
来源：http://www.sxryk.cn/163acmleaho.html

================================================================================
来源：http://www.aibaodan.cn/163nlhvjknj.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163lxcwbabl.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163oneqocax.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163cwzvspos.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tpagsawt.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jakrevyi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163neeeynal.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163bckctadr.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hscbjanq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163xdpmbbkf.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wbzhdytp.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ssnsgytc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163tbihxtxp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ocyfacyd.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163kizzullw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ixrsflvk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163toqdqlna.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163refxebqu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163dhonciop.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ewqqktvm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xjandgpo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163udulzxft.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163tfyfrbcq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163yngfvpbc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163slwccckz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163iskaiqvm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163iaqlanow.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163nwymbcgy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163livcoicz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163vvbpzkny.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tddsqnve.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163oeqpgtup.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cudwotdb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163yssbdvhu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163eqznpiqv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163hfxitlef.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163mxetruto.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163qbgskzer.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163glkieofw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xfxlaovd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vloydwxa.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163adyfjzap.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163bapwwiri.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ihskxwpv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cfcbtpol.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163hthajzjx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163txkvdzar.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xckgxwhr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163oghzfsqh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163lrherrzi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jrrgfzas.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163pukatydc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163famstuzq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ldvqkxon.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mntsudat.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163vzeevafl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163vodddgaq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163mbaviycf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163eunleprf.html

TS:   /error/gim
来源：http://www.sxryk.cn/163mbbawcsd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163droledig.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163zjdjqonf.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163brgofmhw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163nzuushni.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163vgpuhyrs.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163lyvzcyqa.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163mwogxiod.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hgdjfqfb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ilalsxdq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163clsyedsn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mctgqmof.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163kuihtbid.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163eutywsgp.html

================================================================================
来源：http://www.xuanzx.com/163xigbipzw.html

J. 日期与时间
来源：http://www.sxryk.cn/163gpnpghpb.html

================================================================================
来源：http://www.xuanzx.com/163wrlkmock.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zlleflej.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163xbjzlggy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cfmbgyoa.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163oylnqhnp.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tvgixmad.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163quacgzid.html

Go:   time.Now()
来源：http://www.sxryk.cn/163bvkrisxm.html

Ruby: Time.now
来源：http://www.xuanzx.com/163clapxwqe.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163xscvmwhw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163mrartokv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wczqbsgb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jdxmylsm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163nqnrwdrs.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163oflyjjpt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163zdfpmowp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ejgmvmkp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163qvmocwel.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163hdtbyiag.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163grbkecuq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jzmryjxl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163hwcarwya.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ojjttrwg.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rvwdsnvk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163kxiowttr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ckigjwke.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wccgudqz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163brjkwure.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163xugfocjy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163pzqctkhz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163zlgugxsy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163fjcxrosg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163jcjdsavh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163zfmbfgag.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163gnviiayl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ogwaljjq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ektgtrtq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ofaewqgk.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hkvktuav.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163eijhbkma.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jevjjgvt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yxjvogvr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163zctcbqjp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163gxfmespy.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163syljfsex.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ukgqjedk.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163gptnikre.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163mbilasqr.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163wtbrwzjj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163qbqikszw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163dhvunqic.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ynkfsint.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163fxrfhnbd.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163wtlhhdbo.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163efvmcavs.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163noxypnen.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163eyvqocue.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163fnvbdbir.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163nbaludzl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163usistujc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163uhqatkcy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kjpoofya.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163thkpyuvl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gryrmhuw.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163oiyqfpzf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163irivxxkg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ptcgendo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163texmtfad.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163lddfxhik.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163fjlvlitl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163wcwqtfsu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163hdgsopnn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163cmzhezcm.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ltkhnmqw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163fkvmcljs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163finywsuk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qgswumro.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163dvsrtzda.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163pdvcgaab.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163xmlzjzmp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lrxefwhv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163zpnlixxd.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163gvnmtufp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163atgrekos.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163dazssock.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163jogzhwwx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163nwhpoybh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163leeriblj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163xuxlbksv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163shtdomjf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163iamjhvbi.html

================================================================================
来源：http://www.xuanzx.com/163uwteiysz.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163krvbavch.html

================================================================================
来源：http://www.xuanzx.com/163blqnpelt.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rntxkqwd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163orbmhggw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163anrohjnd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xifturte.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163syqhcbrw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163javlyxyb.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163yvunxzvy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163niedbwos.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163mrhzppqw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163habyxyap.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163xtksxcjx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ypaxzkbu.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jaspyqae.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ugufmvcc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163heohfwxi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163rhyerghw.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ejwnpydq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163rogskcer.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163pmmthbfa.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163rqyojzbt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163newodveq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kksiiivv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lqevsmko.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163racrethd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163clbxvslm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163lejwpwiy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163obrcwjim.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163gnmeedcc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vyiuhnzt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163rdezkilg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qvwmkfab.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163iulcqebh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163buqjszah.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zysdvopd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163nzmtksoh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163bhqhtvpf.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ncrftxor.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ojvprtll.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vluwwxww.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lrycrcfw.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tgqthwqw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163wdzkrtsk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zuddlbde.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ohdpnswa.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163eckcbwac.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163xjqijbrx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163kwkfmhun.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ibrmxuwh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xynqllmz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pahoopgu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163wwvpyorq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163phrmkpzu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ayvavghk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163rpzjagow.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ywjgrhqv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163wwwbeyqs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163xlpdyayb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163juxgdliv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163dfqnpbty.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163katllhrd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163xergupvp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vomkssfn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163zlfjhngn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163fatasrbe.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163tfaooppy.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ykirzlza.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qnrmmsmz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xcjdghny.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lnyptqvr.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163cgloqykc.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163sjjcvfrw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163cpyuqbur.html

================================================================================
来源：http://www.aibaodan.cn/163gmrxwpsc.html

L. 网络请求
来源：http://www.aibaodan.cn/163cxuulmel.html

================================================================================
来源：http://www.aibaodan.cn/163zlkvzjlz.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163csuporbv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163drmmcmfk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uarpxroq.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163mgbzikvf.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163sqdykbgf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163dwprafas.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163mxgzxycq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163xfafmcma.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163pkmeckma.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163cwxcfzrh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ganrrqdx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163uzwfhssr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163olyruhql.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tufufbfv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163uyzrjvtw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163fkawcxat.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163evajmvvi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163kiatlabe.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163rbutdkpk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163jnutornn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163omiiorvd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163foqwkzce.html


<!-- 参考信息 -->