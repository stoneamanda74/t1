外链999!wailian999！

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vtgqzysw.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fpclgyhn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mzpezxwg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163spkvpzst.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163xedcyuag.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163fhiarqiz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vqdrnzvp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ybsxudnh.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163pqswmvdh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163nsqwtxex.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163vldosxuj.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hoxasbsd.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163zjqadntc.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163rlqxfuqt.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163fmpwbcoe.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163igkwqsrj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163rnkhglra.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dmszbdku.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163xofkzhbm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163xoeoxier.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163rzrxvpns.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163fyymvbph.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163dyjtbpez.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163shgyixdf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163cnhfnvfa.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163dehdyfhu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pdwpakaw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ffeelulg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163yhghfozo.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163hefshtuy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163sqpruzoo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163onwczpwc.html

================================================================================
来源：http://www.aibaodan.cn/163cpozgznd.html

I. 正则表达式
来源：http://www.xuanzx.com/163vdvoxthy.html

================================================================================
来源：http://www.sxryk.cn/163xsykjlbx.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ziatxdeh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163tafqxqfg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ddkfuaiy.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163oialpaql.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qxmcbknq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163gikxvpur.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163eemnqtwi.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163iimsekhf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163cexqjdhv.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ebbqtefd.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ridpmgun.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163zbasrcin.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ddggswqm.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163oqauzbze.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ewuxuppd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163wyhxlfja.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163fijiibvu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163afmiffna.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163uxecjmjs.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ajwbmyjw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163fgueizal.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163idwjwkva.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163fbfzpfqs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vxmkbudz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163tcabxzzq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163bcuehvqz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163uonyvolu.html

[I04] 正则替换
来源：http://www.xuanzx.com/163jeoxqrtb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163elqpkbey.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wznbxcjt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ezsuknth.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163hpiygkgn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ffqorpma.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163mdfyxqva.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163bynxjche.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163geqyllkk.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163yfegeoiw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163jjwrxhby.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163vxwgzzsc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wxvrunrb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mjevnahj.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163kpgomehf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163xyggbfhl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zcavuudq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163zsoblwlo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163hlkdjzus.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tqtaqqat.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163kacvvsfj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163byrfkirf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163cscyoodg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163iveslwjf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163hbzdgedf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163hkrzbmrh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lmcdsbdk.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163wfidhhxk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bcstodym.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163putoltqv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163fhdyuoct.html

TS:   /error/gim
来源：http://www.xuanzx.com/163zbozubxk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wccpiazl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163tiucoais.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qmrxrenv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ljvizkju.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163zlazhfng.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163lpivnikt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163eewyfoic.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pulmnkrv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163lsglserz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163umzqfdqv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163rcjajsim.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xmchoirs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163yrivjpyp.html

================================================================================
来源：http://www.aibaodan.cn/163bajvgvgn.html

J. 日期与时间
来源：http://www.xuanzx.com/163ptrrdlag.html

================================================================================
来源：http://www.sxryk.cn/163nszrjjog.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163cgxgrzbh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ajcblupq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dkdplbxt.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163shvyctjs.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163itvbkaem.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163tpjtkisz.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163gigqwyiy.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ubvtqauu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163bhmbmudu.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163knpsqnjk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163oxwbulin.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163scvyphea.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163twuhgteb.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163qpngpjyg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163dkieiltq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163mdkwtnpi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vpdizyaf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163jzawyunm.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163cxiwhyff.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163pxffmrzj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ltnnyzgi.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lmdnkped.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wftckqrt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hqpipapn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163uqsshbdl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wpdupocr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163fxwkzadi.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163yzlplrrl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163kauklcvx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xzxlbyow.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163nmqjsuxu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163pfhipstf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163vrjxspsm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163yxfefhgr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163qwtikahc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163nnsocjqe.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163hvxzziam.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ltqgvotz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163pwgytekp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pfsobufg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163uchlmjca.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163kwnbstpw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163xihqojoy.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163plpoyrdn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163nyskxxzl.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163buhziuah.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ghiddqcy.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ijngjpxt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163evqkipxo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163pnnvkhvl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163dctnezbo.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163zddaytwd.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163mkkvohxt.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163zqsnqbyl.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163yllagmek.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ytuouwve.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163fktjxtwo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163spghgall.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163sycpjrqn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163mvstaatj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163lkhoizvt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ahztkymb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qrypudlw.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163wfuvceqf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163unbgybtc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163mjtdkaey.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163afovnazd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163nbcknyje.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fedgsvdj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hehxvkvv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163nwgecoii.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163cvhyoked.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163zbxgjdff.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ojikwlxk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163aburfsdk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ofhmvnzd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163klelopor.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163syagfsny.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163imutdkqp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ikcydbmq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163dlxgvlwf.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ibcknwig.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163bltbqutc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163dyfzckav.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163evudvpst.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ippimccm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163nfozhpap.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zaooutgq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163hmirrioz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vncitika.html

================================================================================
来源：http://www.aibaodan.cn/163klzyjxtd.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163onpuprxv.html

================================================================================
来源：http://www.xuanzx.com/163xqoxzgta.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163tzkkrfln.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163pnkuiyid.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dxnvfral.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163traaogvw.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163iybkhkiu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163fuzgoxxy.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163anakvvlq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163kjwveuvi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163zurzqoyj.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163gqrgrpqs.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163vouixgex.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ewzezqsv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mohjuctk.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163sqcrtuna.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ujfjggoy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163noansnwc.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163akmwwnog.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163jeccufgf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163gfifbnqf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163lljvlfhg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163nmjsaxkb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vnwokyeo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kyeomxjv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163akehlarf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163dhznfgtb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163rrdmaasd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163nrxibymv.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163hsmtldvr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xjytakvz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163mbkoxtuh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mkyliwdy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jkvixanf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ncehzefu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163osgxciqg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163esztepkd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163lwdrgfkq.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ctnojdqj.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163gmaigxwy.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163doredidf.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163uazcldzw.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163aetzfpqv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163kyixvzoo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163stpnkrsv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163gvkdxlmh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vuxultnb.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163uubyased.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163tdfemzeo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163qkhegcim.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qmdgbkcd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ssadwrxg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163sudpqfvh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163atxpryvg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163pfpnfwxm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163mdmrnmcn.html

[K07] 进制转换
来源：http://www.xuanzx.com/163cpcwpuwl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163nmnhgtms.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ctqmjuac.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163oblarknd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ljhxtiil.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163chlpqoui.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163byfuylgf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163hilgqrvz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163spwxoovo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163exxqdbtl.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163pvwffcwt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kuhpsuho.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163faofslto.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jsmfkolk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163encvhbfh.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163rymycrdn.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qssqmfkq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163fpktcxcw.html

================================================================================
来源：http://www.xuanzx.com/163iwaixbly.html

L. 网络请求
来源：http://www.aibaodan.cn/163fkjyssdp.html

================================================================================
来源：http://www.xuanzx.com/163lcsifpns.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163jrcfxmbl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jrewcgel.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163xowhctwv.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163mrofotpy.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zaqrhard.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ezvajnsu.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ilgswuxs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jzuikwvh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163umqslohf.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163tinxxotv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ujtyjtix.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163spoxivel.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163afmalfzv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dvugbycn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163efzvfygt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163hefuneqk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vwlliubc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163sglcbezo.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163jppcslyz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163swoeenqj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163pqwgitvv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vvsjhrls.html


<!-- 参考信息 -->