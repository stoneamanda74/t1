外链999!wailian999！

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163pupjutdo.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163jwrevmhe.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163fxheqasa.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163dzzmiloo.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ckkycels.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163oebwdtub.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163flttdfpj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163yxqyivgx.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163pfbcsijx.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ifpwiusm.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163gbdhlhki.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163sptckkle.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163tyeypyoi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163pwukowns.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163qpbgajzc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163cwxpqjum.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163cdjqhxeh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ipidndgg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163dedcwkvl.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163kxchibwl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163sgbdodmk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163hrlmnldb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163sczlwalf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163exjgnbir.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163lbrxywyz.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163zvjwbtvr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wlvbapcz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163uqtgjybt.html

================================================================================
来源：http://www.aibaodan.cn/163larrbedp.html

I. 正则表达式
来源：http://www.xuanzx.com/163jkbkejgv.html

================================================================================
来源：http://www.aibaodan.cn/163lfrkixxo.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163tvsrmwkn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163pyratypn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163vuatdekw.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163infirgej.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163taxrzdvc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163guznorzc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163lkbdclbo.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163nbmroqxl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163andtkjdj.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163xqfsfvgz.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163kdzybbrz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163jqwubjaw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163kxjtilrb.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163vlbprbqm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163gabcavcg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163yyxfbyes.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163kdshdspg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163phqxjcin.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163cwfuwegk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ornnucnx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163opsbtoam.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163lgtvhjrx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vtfpjgxa.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163bnwubvtr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163nczddrjy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163mrrubbqg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163iktxwtbw.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163wkomjqux.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163qygpsrdl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163uzfktksk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163dibpjquu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ttliovww.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163wowrygms.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163mezvmsqu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163reizispy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163vlxuwzoo.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163rkyloycv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163poboyuvf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163aixabulm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163eaqrxtfr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163prgzguxt.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163hgkefbwm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163gsqruldr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ojdkkyjv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163dyknnmmm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163tknshbdb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xrrvfhcx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163vrfknyzn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zupkzwhm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kixnitvp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163toppbzlo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163omaijply.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qrhsvpie.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163otvjyyqy.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163mdeykvuz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163robifshw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163dyhnmqpg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163uynqhsvm.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ufqzvgae.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163sixhdufb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163vbyasubz.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163rexzkjex.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163xofzgmfe.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163jcvtqsin.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163nsotitbh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rndrajpx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163jvnhffik.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fcehtlnr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ovnfafxf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163tdadfvkx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163tgtirzno.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163lqijrgia.html

================================================================================
来源：http://www.xuanzx.com/163bjxyzgic.html

J. 日期与时间
来源：http://www.aibaodan.cn/163dilyxbqj.html

================================================================================
来源：http://www.aibaodan.cn/163pxoqcctf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163dhpddxlg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ctetkisq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163enhtjetv.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wvfghhjd.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hvevzdve.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163scleuuji.html

Go:   time.Now()
来源：http://www.sxryk.cn/163jezbiofx.html

Ruby: Time.now
来源：http://www.sxryk.cn/163urblidsz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163naiudufw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163fmkibxex.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ggtvnhiu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163albqaiyw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163bygvucrs.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163uxhegnxf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163bqoburfu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163llpvqvmc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ervgpfsj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ldvxdgkq.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163zswfvgxl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163foilolfw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163wopplwmd.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163eqrywytg.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qbckpowt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qjcdjuvx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tjezxcmy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163rdhghvjs.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ubllxgtj.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163wkehyjnu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vypbdtan.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163armgeoog.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163hkdbcyut.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ibxmqdye.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rypxyfmr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163wyshcbdm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ehotwojo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163brzxomsd.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163trneywcz.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163phccjfgq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163yxnnewmz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163padccfme.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163irmjdyok.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163sbfqhhif.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ittwxwan.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xablsdii.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zkccrrpg.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163harkicag.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163hbykmyln.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ewqsmkhj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163izrzclrv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163wktiwanp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163fhwrzqgb.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163mbazrgna.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163bjdntpgd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163jczpyusc.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163cbmrebxw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163aveuplpf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163yvveoqgd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wqxtmatx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bvenxckq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163nlbkkxqe.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163hbhvlzdy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163beksfixl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vlnlqvli.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tvvqfylb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ndxcmkpp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163oqjizmrq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163kxndrvlp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ihdxvjcf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163lhebukmj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163cholmlkm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163mkstbung.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163hndacxcr.html

[J09] 时区处理
来源：http://www.xuanzx.com/163bmjkxckd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163whsdhluv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163whvytezm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hhphflhs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wzanrprm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163rkcgnvvp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163nblnbqwo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163rrkdoaka.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163djsztrdf.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jfiraghk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163fejfwkbh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ihbglobw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163exgagjzv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qwhbmabe.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ylkbbvoy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163hcxcmafg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xdsbkbdw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163gvleygyu.html

================================================================================
来源：http://www.xuanzx.com/163hsjasvto.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163lhsbnxhm.html

================================================================================
来源：http://www.sxryk.cn/163bwcktwcy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163mfmppgtm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163xsxckkmu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cnrkiqai.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vfclxqow.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163yffkfktx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163cidtkiyq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hsypvrvb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163purahare.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163hltvgyvg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163eclqdyuj.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163vunuhqgm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163nvmvrcbx.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ljbbrejg.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kwwmwiqm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163symkkahf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ssizbdyj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163lcljvyga.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163nfkixvtb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163amknleow.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ouetbdoe.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ovnpwtct.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163cjelxhxz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mvwzsote.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163hndurfyo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163kmxvjmgc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ayfeydhy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163wzgqtisf.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163icnxovps.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163haewivdg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163yendbxmn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163epuinxho.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163sadbtntg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163nmizjkzz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bnwpftxd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163azkocuec.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jmitfbxr.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163osbxqtet.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163oaojrcaq.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163cpnjmgwn.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lpmczvks.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163whbavgqc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163tfgqhrhk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163yemglkcj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163rbnncpsq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163sqbyeqzy.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163fmxtkoaj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163lwizkatt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163zednkwgw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ozadxsgw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163bbmfwgle.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163xhodniue.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163wtvwvclz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163mtqxoezo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163azviheeo.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bgokjmtd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163fkfatlze.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163oobxkhna.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163iahcjycc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gqryoxyc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mgzjyhpq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lqnuvewj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163wceuhdtd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163prhsknre.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163xkvaygph.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163bsywigml.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zqphfwpa.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tstulbvk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lwvjsyrj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fvcatdng.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163wkgsuiwq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163bhfagvvy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163jjiyeoac.html

================================================================================
来源：http://www.sxryk.cn/163jhsbgmdf.html

L. 网络请求
来源：http://www.sxryk.cn/163gkfvwaza.html

================================================================================
来源：http://www.xuanzx.com/163jerzpayq.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163awnziyqj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ntfvrqay.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163yxsgembu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163nenpyfks.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163nrnozhaj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lvvauhek.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163qhtpkdrs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ixcksuhz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163kwahtjeo.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163flnjhtjp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163rdwbvjnn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qebvvjiz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yzzucwpv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163tjzvtwji.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kmulwivm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163myhenamn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163fjzemfns.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163kiojrmcn.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163bwynkmrv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163zyyxwxvg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163sqseguvn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ablfkzwa.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bnuqoruq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163yrmwjwww.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163qqucxazd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163anawfsbt.html


<!-- 参考信息 -->