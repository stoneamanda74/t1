外链999!wailian999！

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hokexwwp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ylkxbcwn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163hmjajmnz.html

Go:   err.Error()
来源：http://www.sxryk.cn/163rdrtozqc.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163meyygsrk.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163mvwjurys.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163knfqtozg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163aekejodd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163blnhbaph.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163mfdytpwp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163hewghffb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ombdxdjy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163knuynuhw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163muqahtvy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ecaosjjm.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ydxjwimv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163shjjxlae.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ugymaswk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vdybzmmm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bbmpvbaz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163uyepjnhw.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163gjixvllf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163jxedfckg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163akmnwzzo.html

================================================================================
来源：http://www.aibaodan.cn/163bazlokiu.html

I. 正则表达式
来源：http://www.aibaodan.cn/163tzsdgihv.html

================================================================================
来源：http://www.sxryk.cn/163rmcyilvk.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jxwudtoa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163mcokziuy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163rzrcdcvm.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bjjirtat.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rnhkinpc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163svjvkrna.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163aqrwoeyv.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163dlkukhza.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163jelnmhmq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163trmlmsyj.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xlpajnyq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163mpawpiaz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163jxnotsda.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163twdslyvn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163lbqlkqnv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163friauynr.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163qbnjxcvi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ukedyhyi.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163vszwopls.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rryjgrmn.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163txdrfxej.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163yuyszwoj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163efmjpnff.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163salgcgbm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163pqrxvfmr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163uibiamlx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ytrkmzxu.html

[I04] 正则替换
来源：http://www.sxryk.cn/163wyersair.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163svnaaqhu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ntwhbenz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ihsycgqc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wcmnlkwp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163xtcvleus.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163fsrushgq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163bartrroh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163wtbeizyg.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163zbhjwsfr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163pxhhyjjz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163gietxocq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xttpybyc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dtasjobu.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ekhrqjxe.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163obzinwnf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jijqpfcu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163oatyfryk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163fwfkshws.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tksqznhv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163jbtnegdw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uamctmag.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vbzmqjbv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163psjiwrep.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163zdumowsa.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ifpxsrno.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rjhaqsti.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163swivypfq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163vyurbgxr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ryougoat.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ioosgvrt.html

TS:   /error/gim
来源：http://www.sxryk.cn/163jvzsnwdi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ueoqigcr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163plqkatde.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163tdonkxzn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163bmbvhvut.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163bwczcvrc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163conmzexm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ycgkrqzg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163bsvvbhsv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ngdwjlqk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163pjhhxjmc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163bkqxjdym.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mzslhnsr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163fyqmnjjn.html

================================================================================
来源：http://www.aibaodan.cn/163vpgfsbnt.html

J. 日期与时间
来源：http://www.xuanzx.com/163pzqfujrd.html

================================================================================
来源：http://www.xuanzx.com/163eakfrhow.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ljyqoqrp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163hngkkyxl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cfoytjja.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ujfoymgz.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xikzcntv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mggzwhwn.html

Go:   time.Now()
来源：http://www.xuanzx.com/163siwvgxow.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ryuacbwz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163kmucbyts.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163rmtfqvpg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wihaurtb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ucpyxxly.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qacldteq.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163rtzoeeka.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163eloaleyp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163tsvjduem.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rclimtrm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163infdsfeh.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ldnipsdv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163oflxdghz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163gjowexip.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kbwvmxhd.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163yryirvdn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163byzfhaqs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163celoxnds.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163twpxmtqq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163rlaphoov.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rqpxavqj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163yivkhofr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163uleogxhf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ewhpesei.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163geqjfplq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163eqvuxyag.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163myuxbsaq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163hmrjajgu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163nzynsmoe.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163rxogkejb.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163lzrjqbii.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163qwwtlmbj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tjnacewo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163iyljnbbo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163tmxqaswx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qdjuypmw.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163hlvrkyoy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163eyscdkby.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zcyezxrv.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163lpdrldyf.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163oghxtuit.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163xnykjcgg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163rnqpzzwo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163tfkgpzlb.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ybgcluny.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163gcfbvwzr.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163oxqubxeu.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163zayxgjel.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qjytmeht.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163uwfmeptp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pfabwwvm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zxatztrb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163bnlaodvf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163mvizzncj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bqhgdfaw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rysllokb.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163wuvgdoig.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163lvctmrgq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ldfvflkf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163lamfroxu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163whydmgob.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163mnsyqkut.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xptqulec.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163nhjnxxsi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ijxutjdv.html

[J09] 时区处理
来源：http://www.xuanzx.com/163iyknyqoy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163gissevkc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fmhqqebe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gofcaqdh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163oipdgtyo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163arahwgwz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163tuhzxxcv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ksfystyd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163otsjjjhd.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163rrznoysj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163pkrrrcfi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163yjxfxvnk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163emfydglr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163yfmuilsg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163lszxsrgk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163szxzkcaq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163qxjngvdq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163dsbzreud.html

================================================================================
来源：http://www.sxryk.cn/163zklisvrn.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xfdldioz.html

================================================================================
来源：http://www.aibaodan.cn/163hcjyhcpb.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163hcczcdqb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163egruddjw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163myfgsdxw.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qhvnessv.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163yjvvanze.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163yulukafr.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163tzlyujdt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ytbpeaym.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gvhfsckx.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163hozkmauy.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163chsfknyc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163axkuaxkz.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tlyxbgad.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163unnfnjdg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163orrlufco.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jbypfhql.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163bdovgypz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ylhscoel.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ngdejgoo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lbbjnvnt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mqansbql.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jvajuvvv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mlmmtihx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163obrlhfxo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163avbxpoax.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163hctnnijt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163wuvdhryl.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163qktfzyll.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ulhpjokw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zlgeehzq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163spqcuaaw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163elanydcp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163aeqkirws.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163itlhmqvw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163rzjvsqyv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ikkmxxew.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lswtcxol.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163gtjwdfmz.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163kkawskur.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qubxqlqf.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bqfktapf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wrgrpnou.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163uaxinyts.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163wojhztqr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163idtozkyo.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ypdvrovp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163mcvmnxyz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ezrtoryl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ggxewgwv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ynhvqcwx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163txrrjzuh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163uovrucss.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ckjqntgt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163bsysjatd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xzxdhxdt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163oosjxkwf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163rfyvgpbv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163whlmjloj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ascbmmuj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gzbziqbm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163faswgrsd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163tjbrtxef.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kwvpgduc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ujbmvirz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163acorlxkd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163dtaljwae.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kducrlvf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rsrwlqzk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163xukezlfd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zeykosnf.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wxkgfnvl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163eqzqtika.html

================================================================================
来源：http://www.sxryk.cn/163vvdvyuch.html

L. 网络请求
来源：http://www.sxryk.cn/163mneepgiz.html

================================================================================
来源：http://www.xuanzx.com/163ljlahdue.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ppflpdpk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163dbnabpox.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163vwaeyhib.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163oxjhttjf.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163lwalesmj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163yxdyvduc.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163wfaavuxw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163gabqmuho.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163lwpietav.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ffkaawqn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163gfwpycfr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163acxorpxg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mjrywnir.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163osdomuan.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163vdscuezx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ctoldcjs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163zrxksvmi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163micekjob.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163xmtxbfwq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163gtfqmvzv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163hlvwxrom.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rsclsymt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mfkuajvb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163iobcqgiv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163mlhuotlv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163twcxwujz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163zcqbaxaa.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163qvcrcybd.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163mevgtwja.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163kwiynrvq.html


<!-- 参考信息 -->