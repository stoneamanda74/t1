外链999!wailian999！

[H07] 断言
来源：http://www.sxryk.cn/163wnztqhfy.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163iworhtet.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163rdxjsohm.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163fgnwafxe.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163drvanekn.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163pwmbdmqm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163btfktwna.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ipajjvjz.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163nrcqrfdd.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ubixhirm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163asmakegi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163qptscxmd.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ymexhoke.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ivedwnkl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163pfhrkjnd.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163guokywud.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163jsqdkznb.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dbksaxiv.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163dqqsnmir.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163npzmtwht.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163dxpznrql.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163mtrujmqg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163uvyqinek.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hrtpukrm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163wlqdkuzf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163oghrdnqn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163mbwkwehe.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163olseevss.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163oetvgbcd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ntgrkith.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163juhapbxn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ocqaeofe.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163atfkrryn.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163breiipwk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163vqlbpvdi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163hdrwopab.html

================================================================================
来源：http://www.xuanzx.com/163kzyniqid.html

I. 正则表达式
来源：http://www.xuanzx.com/163awdaigri.html

================================================================================
来源：http://www.aibaodan.cn/163igbippkm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163vffbsdlz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gfnfdwoz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163rwqgxzls.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wjubdsql.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zxqolrmv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163urkhriag.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163evsktlzf.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163jzkostit.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163pdxakuxg.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163hxkrmnzj.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hkcctqbt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163spmmuvor.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163aaoobaeo.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163tkeujmjz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163siqyhhuy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163sbobkduf.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163nbbdnfco.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163rcmesndb.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ntaujvvv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163zufccrzv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163usmzwnyg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163qqnqxzvu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163vjvvmimk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163funychxz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163pqohpcch.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163iubzlkag.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163kdfxbjef.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163nnnzsuns.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163clrckgoh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163fbbewzkp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qguxdnnf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qtbpahrs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163kmawytuy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163wclluyyb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ybasxjzy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163zpfsgybo.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163tumynojb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163gmmnyepb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163eghvcirj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ytmayptz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dcqnnilt.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163yxesaafb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163xgwzxzng.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163iaedyozh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163njgdkwvu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163vjifsuns.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163aavhcqvc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163hldqkhce.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ogkavvpj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mrcctdfd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163rpqtipyi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163xlgkwpvo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ydgniunc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rcbtpohn.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163bbdwdyui.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ibftpyji.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163pkflgfqr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ojsxxqak.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163azprtbun.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163bokxxjor.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163cyftsicc.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163znycvucv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163druqjodf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163cbkudxnu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163wabihbia.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163kohirijj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nfjykxzo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163uwskojwr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zcjtjeqg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163yccrhwuy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163toqfcwow.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xirwgqfz.html

================================================================================
来源：http://www.aibaodan.cn/163bdyktkmv.html

J. 日期与时间
来源：http://www.sxryk.cn/163groixvgn.html

================================================================================
来源：http://www.xuanzx.com/163bddjvwgv.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163bgcozwho.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163xmechhhq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kndmfskb.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ciedkvhe.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fatvpivd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163nmvzlilp.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ahxktimh.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163kxgbbxki.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163uabfotau.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163snjyhxxk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163tamyqopf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163coazrqtq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xjbmzxlv.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163tqewbsit.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ewrngmpq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163idkhybzf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163sgbfxujn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163hivxifwd.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163jezzitlj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163poeccdtd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163neopeles.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uwsukphv.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ychgfggy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ldiebrtf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163xpoueois.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wqdjbkcc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163tmafugnh.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163naegymcb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163pqyexfmd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163jmmtvwcg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163yxlndypo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163htegwnsn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163tlpmjrqc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163lioqajon.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163gkkasbgm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163blbxrmir.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163usjgmeay.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163bpkqcmln.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163wwddyhgs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lkyadehg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163etolzpkf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163nrzgrpaf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163qtthdttw.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163fnwzgvnw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ccwsqgak.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zrloekat.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163pccnasuh.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163bhwaefxr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163zxxfcfhq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163agjthtdd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gclzvxpj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163tqxohvwz.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163rkpyakcc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ckvebgnm.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163smxzaukp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qvsurzmf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163bnerdfzy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dstyuugt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163gxwmjwgt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163jmitymol.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163egsoodfy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pxxupdta.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uqqiqrzy.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ziaqrzii.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163llrzdurx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163wdmaberj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163hobvnckz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163oygqzhro.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163mukbzodb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163qcthmihh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163bqjtsxbz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ocszzghu.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fpxcwqmk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ojopypbt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163krafrinw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xasxtenh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163auvypufr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ysysukjx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163nqrvmvtp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163xvndtsmd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163zkwqmjey.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163hzaqtmqm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163pmcjpfir.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163aqyggems.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163boljzbws.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qhrqxryu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163nexzfrqu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163bauiybvx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163qlvgwlvh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163gcermyab.html

================================================================================
来源：http://www.sxryk.cn/163glsrprpq.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163fjwuvrot.html

================================================================================
来源：http://www.xuanzx.com/163jdidymem.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163cdvsldcz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163thdclrkz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vwlctbzi.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bnymnled.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163plqsgicx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163otzzcrrz.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163xsdarkxr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163lstycikl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163rzvoyzsu.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163epcmvezr.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163fcdkcjct.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163tixterba.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lbpyxmqr.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163obovwehf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163tsqgjzkj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fhqgvhfj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163dngbuhlk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zajyshll.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163pbuguxzp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163atmfzatx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163yotdjhqf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cghckktj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xlejwiwm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163yzjqkseb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163iywkkfvw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zluuvvyp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163rpxorqyy.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163lvihhvoq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163prdqcxus.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163dzayhufx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rznbgckw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nlkazquq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163phkgrjmk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163irwczear.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163soemgtlw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163mxtsqblr.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163aqnqimwj.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163tqprehlf.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163otfnrkyk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rvkjghmx.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mcvvqqaf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163xxnhoejb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ohwsnzce.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ryrvsagc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ghazqihs.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163fymuaaol.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163pxqtwhvf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163bentcpgi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uxsvvgso.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uzgxtbtm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163glrakltq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163huuelkwj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163tfbsmiki.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163wopohpfn.html

[K07] 进制转换
来源：http://www.sxryk.cn/163tsvikomo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163inruiegs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163pshhudch.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163myyqarqm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hmccuiwy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163otbkgeew.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lexnyxji.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163bkhlojdf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163gtwhhwjv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163bvwumbdl.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163phhslfkj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163yqzdvuyf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163odrosbym.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nsasxrbj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dmqmqhcd.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163slezdfru.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163efvpanny.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163wzxahbqu.html

================================================================================
来源：http://www.xuanzx.com/163vifgogbp.html

L. 网络请求
来源：http://www.aibaodan.cn/163wolbqfjl.html

================================================================================
来源：http://www.xuanzx.com/163lqwldeyk.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163zryqvfhx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163uhkhnuun.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163mckjmrdv.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163qbhwngau.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ntppqiud.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163imapifsz.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163eyrpxehh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163nhqsgclf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163vstpzaag.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163dmlrmyov.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163iunpgqyg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163oukldqbh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qhimryoi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163btjfzrim.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163fieefvia.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163gvnyumxq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ntuiykyh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163drvwqroe.html


<!-- 参考信息 -->