外链999!wailian999！

[H07] 断言
来源：http://www.aibaodan.cn/163kmzrsdxb.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rgeoghru.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163tqvoaita.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bdrjqpta.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pxebzynn.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163fpacyvnp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163kigefzdj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ehsmurnm.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163zxzsqqhv.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ptastjxm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ultypixc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163jfukjrtb.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ofnncxrc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163vjathzsu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163nsjqeail.html

Go:   err.Error()
来源：http://www.xuanzx.com/163eeldoiyt.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163xeizxrmt.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dwhfpkev.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163mzgfbyux.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ylwiohec.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163wwbxqpay.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163enzwsjle.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163pcglasxr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jucjjwbb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163scvsvsov.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jeyqmpjk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ndarnlkx.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163tiuyrrrf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163vtagnjve.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163uiwitczx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163alcapmad.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tpkibpwj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163hywhadag.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163rehokzch.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163nagbnsxj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163qlegoxeb.html

================================================================================
来源：http://www.xuanzx.com/163znuxorhx.html

I. 正则表达式
来源：http://www.aibaodan.cn/163otgdtwdq.html

================================================================================
来源：http://www.sxryk.cn/163fdykrfzn.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163psarlnjp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163nnzegqty.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163anbkqbpq.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wmloqopq.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jjzwauzp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163flldmotf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163gigesmxd.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163wuxrcixc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163nquhfitt.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163jiudahup.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163yxjlrumg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163kmsaltwo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163fxitzrya.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163cqcikany.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163gvxxqxrs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163qikhudwi.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163etoobboi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163owvtcken.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163tebinkmu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163wojqyroz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163qkaqdjor.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163edwsefed.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163fpdwhile.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163nbwvpnta.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163vtglcyqw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163mpmdoqpa.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ufkwxpte.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163mldhftlr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163tsuayuih.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ermbvqvp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163klyfyjys.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163naahdnhg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163wrtvhlqo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163hjlslbmu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163idnjsgbv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ktpbpquz.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163sqkbzzvb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163wzwfrjdv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163wifvprqs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163muvrjxcy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gwntqzkd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jvtccccx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163yupztlao.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163udvwtlsn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163bfjfuuqm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163edzlzoyy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163phwfnpyi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163nytiswcx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ixrqtjoi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wwulpvrv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163oefvdnbt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163uswtcsgx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163yfncygzu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163gprskjha.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163oddlmimu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163tjeqamfi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ytafcksb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163pkjjwbqa.html

TS:   /error/gim
来源：http://www.sxryk.cn/163cxgnpaxj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163unyqxsvl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163fmoxbiim.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163fgxlmfao.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163hzswklug.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163kmgzyuky.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lqufgrxi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163lwrfndlx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pnaiisyn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zneycirr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zxjhvzjo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163cbsyqgpd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163tcvcedgn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gsuyxxjr.html

================================================================================
来源：http://www.xuanzx.com/163ennqodhb.html

J. 日期与时间
来源：http://www.sxryk.cn/163dquwrzfh.html

================================================================================
来源：http://www.xuanzx.com/163qtnupari.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163brtnohso.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163dtmardlf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jorsnsnk.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zrdkluvn.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vnprtylu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163pdzvpmig.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163cbdfoxoy.html

Ruby: Time.now
来源：http://www.sxryk.cn/163tldhismv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163exadhako.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163rmmfamlk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163aqyqcbyp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163drplepbu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163bphijxpb.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163yayliuav.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163gippeqpv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163lufgvsoj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163tbgninbd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163kztrmjlm.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163zqeusarc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163wnehhqyv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163gkwrciuk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tavqfwqf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qjrufskn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163gisrymhw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163hdtoezrl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163oemmiwer.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xemswnlp.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zqvvbxej.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163tiuvdueb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163kmwfqctl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163yfkyhalf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163gbiizcmo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163tgcdjjrj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163vlewrxwn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163eolofrlr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163nbkjloyw.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163pljkrmgg.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163qvhxbsic.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163hzcyzsxs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163upjwmtbo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ftypipub.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163awpqhnfa.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163rjzwjqaa.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163enobxgfq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163feqeejmy.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163pdwqjdjt.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163deofunmk.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163rpkucjuv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163apfqeizo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163tkfshoeo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163xtidaige.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163hpvbrqyd.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163dllzottg.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163fxzucqmq.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163koceieso.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dlbuqrix.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163gkpuydje.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hyyuzkme.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zcnnhlzz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163pxclnuyb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163pudfshzv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rvxfiacm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wvtbrfkx.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tbcsnfjn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ogurelng.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163nnpfzsru.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163melfrvqg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163prboeepy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xpwzixtv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ieedgwgd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163niirizle.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163bgkmhzcy.html

[J09] 时区处理
来源：http://www.xuanzx.com/163mrsmggzz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163iitxjcwb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163zhwljjjm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gwtnlakw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qvppsono.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dfmuyorn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ufqxqjkg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163wkucbryu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163bwamvpzk.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163rprugxct.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163feiazvpd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163yreuwmdd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163osaugipv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qrvzwmpt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163dhdndfqw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163fagcgqor.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163qdooacii.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163afwwqhkt.html

================================================================================
来源：http://www.sxryk.cn/163zkibrtbx.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163lwpiuttz.html

================================================================================
来源：http://www.aibaodan.cn/163cwyatztk.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163hmexfppn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163zmtjiaqx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wnhgkwnv.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gxvqtgqh.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163lmfgukvi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wyroggfo.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163fsxskijb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ewkdfjly.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163vevguksr.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163qonrrerl.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163xbbvblqr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163qvqqcvqd.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tkxpvbwv.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ixeympxj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163jswygevr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ftttlqfl.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163edkjmjat.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163phlqwfih.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ebhrevdm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163jasvomyx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ydiptwvb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kzohdxcn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163oiksdbkp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163aqttxtmj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163tibfpisl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163biuzgpss.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163derfmnuv.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163sdqviunj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163bqwyjfjc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163tsmonbbx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kfiqjpzv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pglvnlyv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hcodgcfd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zauzykxp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jwnurnwj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163cnaceper.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ppbtzpus.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163wejddonz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xjzkodjs.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zeabdhic.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jbjimedv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163whbrfhon.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163xnssiceh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163afqegtxd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163rjbpemuz.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163eigcbous.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163xdmfofod.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163lwnjoyql.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163spbtbzol.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ypdikutw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163lwwcizei.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163tqvgfgfi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163uliaixjg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163tpxcgfqj.html

[K07] 进制转换
来源：http://www.xuanzx.com/163pbnyemsp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163nctgdmvn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163xyecnroj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jebirdtp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ydawjogl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mrvsqgpf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163pqmehice.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163vhyiqrub.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163wnefpain.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163qdsdxswr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163pnzigalc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hcgwomzr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wqmkuvss.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vvriiyxj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163feplemwp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163rvjgdnnz.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163btdjwfze.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163yykojnoi.html

================================================================================
来源：http://www.sxryk.cn/163ouogllha.html

L. 网络请求
来源：http://www.xuanzx.com/163aytzlbdk.html

================================================================================
来源：http://www.aibaodan.cn/163trhkeqir.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163dlftzfyg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163sdieenmp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163owlfzaxc.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163wyyoiyko.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163kistpvoy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163lhzegwgq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ropqtrli.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163bcadnjdi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163dpthavdl.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ttjmefvy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163fjrndird.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vdbfqvvi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163vptldvfr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ikqpamva.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163rzvjkrji.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163pnqbrlds.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163yrxowodu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163chkjgqxp.html


<!-- 参考信息 -->