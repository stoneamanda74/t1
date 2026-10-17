外链999!wailian999！

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163skfvhwnd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163cbjbokaj.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163vxkizvcw.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163elliwrvq.html

[H07] 断言
来源：http://www.aibaodan.cn/163cdikyprz.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163lnlldhbx.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163bbadypoy.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163afimeowz.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163grccqjvy.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163jxsahizn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163wazaeeiu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ffyvxykk.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163cewkdrjy.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163rbdqgxko.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163kmebvedy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163yyqmwxrl.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ryihvnkx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163pfqyirko.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ontffqxk.html

Go:   err.Error()
来源：http://www.xuanzx.com/163mdexbeod.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163zzxiqxlf.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163zsbliegx.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163zqwmhwur.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163drrbmgiu.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163nrgugawe.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163jfltmhui.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ivggirix.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163shiyhxjr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ifzivaqb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163cxqnxzii.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163injekwsi.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163toxpdwei.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ipkzmtyv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163xzrilcog.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gpmzqspi.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xbsszoft.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163nqhictkx.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163etwspurd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163bsyxbdam.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163wlkgpono.html

================================================================================
来源：http://www.aibaodan.cn/163uwrxhghd.html

I. 正则表达式
来源：http://www.sxryk.cn/163hefndncn.html

================================================================================
来源：http://www.xuanzx.com/163lugpykzp.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163yjmifbmm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163innaobzx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163etvgwytq.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163szkinitt.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ccbctcos.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163eukmiqcn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ztbzrgkq.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jltkmxki.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vnnpvsdo.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163weijuwgs.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163fzrkefup.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ksnlfrgy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163hheatvmf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163fgjagzyt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163vqwwimto.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163quptjere.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163sdivarxw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163qcajgayc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163pwiteula.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163tzvhykjm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163bpvtavfr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163qbpqhflu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163gqzojsna.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163akedpgtu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163yfwydvyt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163wopbjmgg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163fklnubbf.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163oagjgbmu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163imyoxdkb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163swgwogcb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163egwjzrwu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rpsfxtws.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163rtgqjzgk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163dkjsptha.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163yyqorimq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163cyvbdoen.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163fkpftxck.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ompjcshe.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163dlcemmpu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nxxgmtwy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163emyescgf.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163yisawxic.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163aslbetqr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163sujurycy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163yaaxkppp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163qiyvbflq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qerigbca.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163mldoldzl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163pvnvbtml.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lgbawmtw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163vfuscotx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163kbsqncfq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163itsmitrd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wuogrgaf.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163ttyrqucl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163abtvwxfx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163qwyibrwn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163wqdfscrq.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ojvxscyu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163rqpfmbkr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gwogdqrm.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163oqukzvyk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163aulwsjgl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163guywkxpr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163kvvfjdyf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163nfkfigdg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163sjytdkqr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kmkozxlq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hiohavqk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163thmympfg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163zkcseuxe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163nzqnvdxk.html

================================================================================
来源：http://www.sxryk.cn/163niadgfpg.html

J. 日期与时间
来源：http://www.xuanzx.com/163cokqcmjd.html

================================================================================
来源：http://www.xuanzx.com/163yjnuofve.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163fonsrqba.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dblwvbbr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ofyojjyf.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fnbwvwpd.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xoscdyju.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hqyjapaa.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163miooxkvt.html

Ruby: Time.now
来源：http://www.sxryk.cn/163mezzkpie.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163jgvxmbii.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163oozkzqhm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163amavxgvp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pqpswded.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163bxdrcuzr.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163nivirouk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163cttiszbu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163mhbayicm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nvexotoo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163fimczdac.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163teurcaqe.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163yawthsjg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163wpxwmrxj.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163evodzpjy.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163txwswfau.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163bhhshuox.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163yafsavaf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163hfkgddkg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163prxrziby.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163xsxuyyqm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wdqefffe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163rpxvyndw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xckwingm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163faayiuoz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163zzjyuelp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163dwhwxwid.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163tgivsfbe.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163stefwlpp.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163rroxhqpe.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163doqwbzkw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163hlrzhros.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jwzxhwwe.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kajwkmwd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163chdkhrzy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ugacdbwh.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163kpknmyky.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163gbyizdyg.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163cdvugncp.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zjzonnxr.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ionuixsh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gsexwrsu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163xpyjphzu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163oamqhsrj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163imfpgrnt.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163brmjywnh.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163mepuddtd.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163dmmnrpss.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fxisvqfe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163fxgukxfb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ctvfxfpm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163liarhypk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163bfafrxun.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163yifbrwxc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ldwrmctq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wodvwqgr.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163peeoetvy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wfyzluxm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163jzulpmqf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163hswrlieh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ilzfsxge.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163yvjihsaw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163aooayarx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163xvxqmjtv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163lamoapby.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fvbstuhy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163volmieje.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163vegjuxeo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hpaguqtc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rkxiuicd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163btfimysk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163xwytjgxl.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163aacvkhob.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163bvvvshnj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163sbnlipxu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wnkzrsqs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163oaygnxpk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163qsjdemfe.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163nypccvpg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163sfjszjdg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ncayvvwx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163guswrszg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163lxphyack.html

================================================================================
来源：http://www.xuanzx.com/163xrjypscw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163cwupuyon.html

================================================================================
来源：http://www.aibaodan.cn/163tgamoekn.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ugsfoisj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ssiakjqt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vzxpsxik.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ddrsozzu.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nwokcbsc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163zqdewsnt.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ivqexcyk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163drtakhpl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163vqadgcby.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163tgqvzhea.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163qsmmcajp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163llrnsihe.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bryndajo.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xtsyzefu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163nsscqikq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163enldakxi.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163rsowobar.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163llysobfp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163xmduejrz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ivgetecn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163xiyplsvv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wfnydkhg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bmtklgqt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163hkhospuc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163frdsuvtk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163mtlkgvpz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163dkurbiyx.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163czsmbmch.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163furyiaeo.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ahijagua.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nsfxqkzv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kctvgzdn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163tsohudsj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gvwujbps.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163hlizidrt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163pzpzvqqc.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163mauzayjj.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163qhcfasoa.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163cpwjgwcw.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mjxeqavm.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lliqeawx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bvyacjbl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163dztevjiu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163xoehsjgx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163zbjexlbu.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163qhpsqdqz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163hctvrvmo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163wxitaaum.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hkmjqxxt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163bazokgbq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163luvlwtnu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163egjqogdt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163kjxqainp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163zfxbtrjf.html

[K07] 进制转换
来源：http://www.xuanzx.com/163kkzxqlmv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163mgmmwpvy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163hsuvqzns.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163libfvmma.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hicrkqpt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163hqhirlza.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163cirtwayf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163rnueofhg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163tbndcobe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163anfmrcqx.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ocrhwfib.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ytuwkfxl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163utorxzzo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pkuszicz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163znwedrxn.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163rjyrgqmj.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163nptilypm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163aoxqvqww.html

================================================================================
来源：http://www.aibaodan.cn/163xkfmiwct.html

L. 网络请求
来源：http://www.xuanzx.com/163dgjhqbhb.html

================================================================================
来源：http://www.aibaodan.cn/163pwkjlgms.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163qoophzed.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xcjlfgkx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163kkfgypmz.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163linvnwra.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163vbuyjmbc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163zzmpzisp.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qshuprkn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163rnvozfyd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163fymzfmrw.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163smmpyomw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163zytgbsnu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ceklhomp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163urhfeliy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163suujhozo.html


<!-- 参考信息 -->