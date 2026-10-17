外链999!wailian999！

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wtshrwdn.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163fqhsriom.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163cqflrnzu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163qtveuokf.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163pqrmrnyn.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163avmjedbf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163klvdnuex.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ioryqrsi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163uzskmojk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ptotuyoh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163yugajbei.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163pdhcswcd.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163rjabafit.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163xzcshpgu.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ngqbmyzf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163vxlypybh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163slawtlhb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163lokgunzy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163wugpsmrp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163xbyqrefv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163egfkgrhq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163tcdrijpy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163eyupxvqs.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163pbesyrrl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mncxrnbs.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163raqccmsv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fjnrbxam.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163yumolsfp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163gmkbogbx.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163wnugctns.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163rxjswcbx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ftxekxpr.html

================================================================================
来源：http://www.xuanzx.com/163bkobdbru.html

I. 正则表达式
来源：http://www.sxryk.cn/163mbcxyilb.html

================================================================================
来源：http://www.sxryk.cn/163mmcrspon.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ugysbwhg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163rsgnqehn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163wznkxwdr.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xlaxpzje.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fgjjllno.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163hmmgccle.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163smszbqux.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163lfikuhzv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163domwnher.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163enjahjyn.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163pmprkgkr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163bahvbmjk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163qskhrmll.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gfqhtdie.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163zmwtteaz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163eanapxiw.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163hoxnjisu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163zoebinrb.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163rgflbzus.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ewkbaral.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163edsauxuj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163rkmgymmy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163tjeelcxi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ychcizku.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163anbxbokv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163iwuslxcl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163mnbbeeak.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qejsnwwm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ojiwmnbm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163hwbdvcqp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xbdwktiu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jcntqlwt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ijbwfhwx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163jayoycnc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163svvaotva.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163oxwricrb.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163mavtlehx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163pyyjpmfk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163npwpbfoo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gxsshwnj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nvptznlz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ijbudprg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163sruponce.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gyvriagt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ksbqrled.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163vouszlyb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163luffbvms.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163bkcdyglx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xjmdxneg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vvmqnkns.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ksujtpid.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163qsabehpb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163pdtmidic.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bhitzthk.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163csqakjxt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ivuxmyqs.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163uavfkniu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163fbkezail.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163prigdxsy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ncuridkj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163yqjyfdit.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163bfthvptf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kgzvizth.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163nzmrjgrd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163rexstknt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zdudcsbn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ojzlqzsv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pfnpottw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163aumfxpos.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163uneiwhpc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163egadeiow.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163uilclecf.html

================================================================================
来源：http://www.xuanzx.com/163yebyjnll.html

J. 日期与时间
来源：http://www.sxryk.cn/163tghqvxhc.html

================================================================================
来源：http://www.xuanzx.com/163mcdwmyds.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163vuqgurci.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vatnpbuq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vxwicsnu.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pudmciin.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163yvqtltpg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163timmgnzy.html

Go:   time.Now()
来源：http://www.sxryk.cn/163mojwknmv.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163zodjfwhm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163rzbeyvqk.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163mjztkwfw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163gbkyubyg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wsdwtufv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163pkmymbsq.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163fcopyvpf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163asukvhsi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163cyappxav.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vmafgvgp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ccemmisx.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163qqleqvzz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163oiypndms.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163lvgrlqry.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163sfsokyvm.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jutdsnax.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163idxswjqn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163uqokjswz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jnwaxzgw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ivjkqfze.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163eundcnbs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163bzkmdkep.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163zmocuzxz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163tkyoopsj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163twbdbihh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163xmltxevx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163aododdqy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163kmsaiuzx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ntwpeupd.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163hpvoebla.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163bglwiqra.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163kqqnqpqy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163idodltog.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gsuzcsqh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163lezfssvd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163psoxxdzu.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163vqwmvuon.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163gbjzjlzk.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163arfqsmwt.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163sjmwsfyo.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163oibkrcxv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163vqzdlptg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163bfvnmdpp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163nifjivlg.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163mcqyjvtc.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163yyyojaqs.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163hgajlpqv.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163rjtrmecl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kldijdmz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163rznsswmy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163obkeunsn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163iqudujiw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163bcjwqrbs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163mkrfgmgq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hpudstol.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163butqmngo.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163omovmxfv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163lyvmvzbc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163uqcnjwza.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gzffocin.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163qovajhde.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163tdqhisfn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163adccceyt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163keullhds.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163wziaeknh.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ekemneld.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163mgukiffd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163tpfyctzl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fjmhokbe.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163nwgjbsij.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163glrbbwiv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163bvygqimb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163wwoxxlyb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163olxsmzih.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163sljhujgb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163kelwavis.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ljjpppzf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163jbmrgqgx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163fgpdlgza.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163pwafycxf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163povtsxho.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163giirrbbw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163parchqzc.html

================================================================================
来源：http://www.xuanzx.com/163oplenkwf.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163rvfwqrnh.html

================================================================================
来源：http://www.xuanzx.com/163nrmmgnos.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163nhjkazvp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163igcxeyus.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163frndywiv.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kffnlglp.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ltxwuoyg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163dyuwzqar.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163jevietdx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hwnbyghe.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163dugsxxjn.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163exjjtocu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163hfgiqcfm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163lfsbykps.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kyjqesxc.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zklchlzl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xyftqrbq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rrjjvmuf.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ixztrpey.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163dwatdoii.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163bbfotboc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163urgragnt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163uccqgbqd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zujwqcun.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uziujwhg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163fvajcdmn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163idavntvr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163wnedugnh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163feyogwcx.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163zavsiici.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163uuanmtdy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163htajwkny.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cvoedhmo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163sdxngytq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163iqizqjef.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163peqfeepv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163vzexhalb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163vawqwwbx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163jfymlxlw.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163znpzfmmd.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163elbquvqy.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ulxskeya.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ormvexal.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wmsvvidk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163gwxwgkfb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163cljsnnge.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163qwikwlra.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163kmtuguse.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163gtdacpmw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ucoqxngn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dldixwgg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jetvskkg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163pggqgbpy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163amnjswis.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163npxgicta.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163adrxmmvn.html

[K07] 进制转换
来源：http://www.xuanzx.com/163udqocvcz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163xsbidkrj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163affoskqs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lawuyeir.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lqsmznpt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163emlnydkd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163kyvjyrpl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163zzkwidkt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163zkxozfng.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163epbjhkob.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163rvirmhzv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163lvclswis.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163twfccwae.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163oeccqrbo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163fiafotca.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163huniposc.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163lcrnaxnd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163jcoiptvd.html

================================================================================
来源：http://www.sxryk.cn/163kxmgywer.html

L. 网络请求
来源：http://www.aibaodan.cn/163ztasugfs.html

================================================================================
来源：http://www.xuanzx.com/163ajfyihsi.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163tsvhglwv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lxbinrqh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163yxdgmwhs.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163igzerxak.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163tcellvbd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163rtufqgdv.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163boxxfixd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163zvewffuf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163yaafdyjb.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163zpdendtv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ekmkjoyn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163lrjbfdrl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163faeydhlb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163sknieeoe.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kgvqhnny.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163viuigoze.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163sqibxqtg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163cfvnptdk.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gqvuloug.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163vxxkfrrb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163bopbtkle.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163fcmdiszq.html


<!-- 参考信息 -->