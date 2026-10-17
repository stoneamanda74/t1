外链999!wailian999！

[H07] 断言
来源：http://www.aibaodan.cn/163bpxumtlv.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163vhphhkvj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163tzjrqoom.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163iogcqqao.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ocnwhpas.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163mkuukgou.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163jkvcalfz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163xolvvgor.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163uwqfttqb.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163obtunjqq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163hurarwmr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163owiwdmxk.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163hrwbahsk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163khyxxhoi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163npjgqoyt.html

Go:   err.Error()
来源：http://www.sxryk.cn/163rgpkzoyn.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163rflxwifp.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ntwovwwv.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163gwmqakum.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163cbaevnra.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163vhpmpvrh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ukrmflgs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163gdovggwd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163rtavhmeu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163bfuzwqpt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163pxznnxyv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163mrozaywz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163cnosyotu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163gffgtyls.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ubjdzwfm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cvxweepf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ixjamtrd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163knjydvsk.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163azqgqihx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163fokmwuyb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163vykewibm.html

================================================================================
来源：http://www.xuanzx.com/163brkvvdzc.html

I. 正则表达式
来源：http://www.xuanzx.com/163opfausfk.html

================================================================================
来源：http://www.sxryk.cn/163hfmgusea.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ugfrwrsc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163whpbfvdg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163bdbcixhp.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163umxdoddh.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163roibjolb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163awbooswn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163glnrpsfb.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163pumlapdo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163kpcemyqb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163kourfpnq.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163eoznmhlc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163fvkajtnt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163kevfhqcr.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zytsdzjb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163gjwamejb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163xenkkcid.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163votuqelk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163skwadgdd.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163vplrvojo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163mpwgdkst.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ymmgncna.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163jscqzsrh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163swokvfih.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163roahdcqh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163voscjwpj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163wmkndfdq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163yjptwjjx.html

[I04] 正则替换
来源：http://www.xuanzx.com/163snzdhbis.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mdbwqqtc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163nucwtmjh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ibpcbcwc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bnqpasxb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163tldryovr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163wrouwufm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163spwtzyhb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163gybslhtv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163djejkyfo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163mwmtujvx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163wukfwnjp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mdecrnul.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ldrhkqjr.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163lgpwnaca.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163tbghvxlr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fandcjkj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163zhiuadqe.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163idqgiwuv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163piafyysq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163witbqfrl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mygbwssb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163izgvhsdk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163lfftndvt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163cayszahs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163qnfcyceu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163avehbqaa.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163jharnhtq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163projzegx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163sdbhlupl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163gxlpaaze.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ijuffyjs.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163zekmhuam.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163oaraaljk.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xtorktgi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163twcmudhv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163edoquuqp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163syzvnzsh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hvjtqphl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163igigyzml.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dxtoxhfl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163sqrozioh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163jyfhvtdd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vfnmhxhc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163tjghdlkl.html

================================================================================
来源：http://www.aibaodan.cn/163fwijizub.html

J. 日期与时间
来源：http://www.xuanzx.com/163hllcqsnv.html

================================================================================
来源：http://www.xuanzx.com/163jzghioab.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163eppfhjqu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163tubsttoi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163muftuglz.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jwbbvbok.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163izrazfye.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163qkcklgmr.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ilznofwk.html

Ruby: Time.now
来源：http://www.xuanzx.com/163sjaxvurk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163svidspti.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163nfvhzlwe.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dutsgden.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gvohsyij.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163byjftvgw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163sykkoxzk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163qgqesqhs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163tinwxyyx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163aiueclqi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163nfavxqjh.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163xilhyebh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163znuvcjcl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ryxgemzf.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163glqofiih.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wjqswevh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qjexbzcb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163hbyisfpt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qdemmsvl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dibzniig.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163oxlrmkcb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163fmevkvgb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163vamgnssg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163phuknfwg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163zokugint.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163kmzfakht.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163uajulqwr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163zrkywfgc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163bkgavrsf.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163yzidcajq.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163fogvbxrb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163qzrwuegt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hcjjdrnu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163tbdivaro.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163aosibvyu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163tleqhhfn.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163zaytvmix.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163kfxpaxmi.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163mnoueihs.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163iqvxuuzz.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163qfuyjxpt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163xggmcbya.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163rqfoajww.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163qxwbovon.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163phozinpp.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163phelyfpq.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163zrmbxoht.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163gpncobnk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lomoznhs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163lgvcgflg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163dmzlqhpa.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bwklmafv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ikvwfnfj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163guzdarla.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ugmfnqja.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hglwaqwo.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ludcammm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ctpdggwi.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163qfvfoiyw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163oqawathj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163lcysxcrk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ytjugkbm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163tjbmnips.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163qinhuwoa.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163papiucat.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ykfownhr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163vzkpbqdi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163rdahzoun.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wycnaedu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lhwqdwoo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163yauildbt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163mktnxzee.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163aqtrqynt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163qjvhaeig.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ghdgpchw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163rhktbhlu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163bjzzqhbq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163tfdjgwlb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zwpsntsy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163oodbyvok.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163llllwkwe.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163uibbmkwx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163cgksdlnb.html

================================================================================
来源：http://www.aibaodan.cn/163lfgknxax.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163glvayyoe.html

================================================================================
来源：http://www.sxryk.cn/163ahhztaos.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ugajpxmy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qmtyqyif.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vlddlvjg.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ninaxwkz.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ouaadevk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ukgracxg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163qdhmnqdc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163grtijujd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163fxcrxfqv.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ceeaisar.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163vlxljmjw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163csanglmq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163aadpsiyl.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ygestbuj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163fhwhxvgq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dhxoheou.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163rmsngzpu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163bfncestr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163tgljplbc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163oarxarll.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163slckggcg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163otldkdhw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ilqrtldy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163anczrhwd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fpwggdgq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163plzsfxqg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163gnmmeqln.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qospoqai.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163arkafqmk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163wbmjsacn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163seronwfl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163orxsjkte.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163wutvdwib.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uahhjjgj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163coimhqvd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163qschhjtq.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163pjxzwwba.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163khjolcxm.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163zjeshdev.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fsquhwdn.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163srjiwxwy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163doisxqka.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163tmfnliel.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163gotuieqj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kebuqswi.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163faukvqks.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163obozbwcr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163siwjsraa.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jizezpfx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dghzcsuf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163yayviojc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ztxmovzy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163czsqepfh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163gfqzumiu.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ckqrjubr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163rkpspcwm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163vojtrrla.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wgjhuvaw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qqlfrupg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163mqkdabbi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163vvpihkcb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163hkpjltbc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163rdwcmdsr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163nonzrejm.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163eehhcmwo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163yuighyyk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kzqdjabe.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ejqbcrzj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163vpoixlyw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ggajcwsh.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163gauoothl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163giksafau.html

================================================================================
来源：http://www.aibaodan.cn/163xhzcwhis.html

L. 网络请求
来源：http://www.aibaodan.cn/163flkzcgdt.html

================================================================================
来源：http://www.xuanzx.com/163mtwxdtcx.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ateodhrk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163zzgnrcau.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ddenjlqv.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163mcctkpvo.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163bfggnpfo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163cpxeujzk.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163daepjlwr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163qcjeiagw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ycbtlnbc.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163rxhftxur.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163fsppwuvs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163dhvwsvgq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hdhdtimq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zbjcbkwb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163gfurgjvg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ndxcumzf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163odzicjta.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163rswawlmb.html


<!-- 参考信息 -->