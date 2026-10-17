外链999!wailian999！

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163zqttiivy.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163bsrwtivq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163kbvwdipm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163bypcprci.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163xdygjisr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ensouwwb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163bwhifuzw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163zkvecdnh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163mchcrizv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163geeebpzb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ckplfwyo.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163udgxvhcv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163iyluosht.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163xurzrlki.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pdndeyou.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jsybgjmn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163tyapznhy.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163eusiykzi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wmupjyca.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163nscvfzld.html

================================================================================
来源：http://www.aibaodan.cn/163urlujjmj.html

I. 正则表达式
来源：http://www.aibaodan.cn/163fkgnnuph.html

================================================================================
来源：http://www.aibaodan.cn/163wcxptxam.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163qdhgtgua.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ixenefrd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163lidcdamf.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wyrpgjsq.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ppefhzra.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163umrhdvtz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163dujdrpig.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163niqfhtuw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163qzuwohqw.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163enyvjjqk.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163bwgkfcgz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163bfvqehud.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163synpvgwy.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163lpbmirkm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163jkkigudn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163mpkprkox.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xpynhkff.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163gysqqpty.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163bcsepiph.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163fotmnyjw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163rafpeavb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ivgafgss.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163klnwjlej.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163eufftkzu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163mhhdsthg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163oyvwtbgf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163cntaftba.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163sdrfvdsh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163tirquqkb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163pstrmyot.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mibfvwan.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jmpfyrgs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163bivhalbb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163sdyhmxno.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163lfvjwpmr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163vqypyujq.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163nipnxqgg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163mvaqdxwb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163iwbglddt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ahiethtm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bqavszid.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163skcqoanz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163tttkovnd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uqalshzv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163diudrrxq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163kumbpdol.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qlebsiio.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163uiartdre.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hirubhon.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zxssvhew.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163cqrrcokt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ihtnvjzs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xgcoxytg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jbehayay.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163mtwmyzqj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163zhzvruul.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163gtcfutcv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ddqfnvoi.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ywmcilse.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163btidkfyu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163pzxjdnsa.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163dtkjymqe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163owpozhav.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163rdcgemea.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163yextmwiz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163nhysmamq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163epnklyik.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163eieynfki.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163fvuxoqqu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163trgiemyl.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163dbodietj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163pmsagqju.html

================================================================================
来源：http://www.xuanzx.com/163kurmotgi.html

J. 日期与时间
来源：http://www.sxryk.cn/163owxsdrrv.html

================================================================================
来源：http://www.sxryk.cn/163czjwwmcf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163oacopaae.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163zsbqkvnb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163natjghsy.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tyvvvurs.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qkqiugpg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163yrtlcxlk.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163lxitzgxx.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ahnumyxg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163sqwfqlff.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zrceaagl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163njjfdlnk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163iwpmhcny.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163dytazgko.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ozsitynx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163tldmfaqd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163idygbdtj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163tegfgcyp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ythpgssl.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ibivlflv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163fbrgutzc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ljadyqvm.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xthpqmbu.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zswknyks.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163trqsxwxm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163hhotdmqg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qttpzegj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163bowtvbde.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bjpzcojo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xzvcuaxl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163lptkxicc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163mkrvtyzq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163eyeuslwj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ndsvhxdj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xxmaavum.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163hfdkztqd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hnmbmcir.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163brsworxk.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163uycshecm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163pwfmzoty.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zufzpsyj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ohmqfpuj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163pujfnnpf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163zkojykct.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163eeplzkos.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163weqthein.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163mnjotwjl.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163gokxddbb.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163yuxeivkk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163jubkydww.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163prwotiye.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163nlnxjzlp.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163bbfvsqcy.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163kdfnimyl.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163pejqhmts.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163xeryuogf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dnaraxbb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ctqlzxfd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tmrhdqpg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ojwecdjs.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163wcgmfnkl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163txtgdjsc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kwffyich.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163svgziczz.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jchfxzpg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163fsjenmhq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163xhrbdrds.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163yyfgmsns.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kkqdwpzh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163qicrgpyy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163jlnbtfan.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163xpdxuxgh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vxutyoaa.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163iakyqwnu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163fkrabbnw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163nxhvnqpu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wjzxyfwa.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pyopulel.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163bbfcohew.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163jcxiolxb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163cpetbspn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163phezqznw.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163tzhrojun.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163sivtipaa.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163znniecsb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ejfvsdls.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qggtfpni.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163poowxlcu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xeqicmsn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163drmflscg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163buybxmwl.html

================================================================================
来源：http://www.sxryk.cn/163rpyjuppt.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ljoqhcma.html

================================================================================
来源：http://www.xuanzx.com/163rsitqgla.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wvdxlpkk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163mavmatsf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qsstpatv.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163llhqcnpo.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ecuvlsuw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xbocepro.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163aechydej.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ccplmlox.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163rricquti.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163bjofiojz.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ixlkgvez.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163mtngukou.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bnxdskkd.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163nxpihtxw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163oacykuzg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mdbedwll.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163fvtjbomy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163hkcxjdin.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163lcaaxhax.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163apllkfjy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kqgowhzo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163dkgwskmj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ggpkkofd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163nlkmxnox.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ibbpzjsm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fyohurkz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163okjxsrsd.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163myfxumbt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163axgyqlui.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ijlrhdgk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163bqsfgovm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hfuaqmoi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163thyuiovw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163adgreefe.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163qifjtmvx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163tesmannc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163gxdnilcd.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163bsxlnybn.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163vodcreoa.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163usamlhuw.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gzbnnmub.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163qhlznjbg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163serqqhht.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163iloehsfo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163djomzitf.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ynqsfsvu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vnrhwacz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ymjrdvud.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ofctqmxg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nwlfdulg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163weilgzde.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163hazslotz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163tbteymjy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163yrhxkmso.html

[K07] 进制转换
来源：http://www.xuanzx.com/163mhbwdowl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163dioivxwl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163mxjzbkjy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163thyxomsu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nqthinlx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163wraefmsb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163znyomhwz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163frsovbuv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163iuxrxbzc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163klkekzwq.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163gofkzvru.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163emoobwgb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163thtvzpfs.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wwuhxsvf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163xnmvqywk.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163fhkodfik.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ejqtqkqu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163oqmysccy.html

================================================================================
来源：http://www.sxryk.cn/163jlevqibb.html

L. 网络请求
来源：http://www.sxryk.cn/163mzxxipcx.html

================================================================================
来源：http://www.aibaodan.cn/163fqoifuep.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163uytbrgib.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163wdwhskyw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163iahkszhb.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163bpmtkvcn.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163nhculnyf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163lkzziejg.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hdjlucnq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ryszeexz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163zfaeeipd.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163hkqmilcd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163dtzldlii.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163cmgbwnav.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uktvzegg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hhmnlplx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163idneemzc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163iblfzsps.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163xnybpnxu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163rrrsbpfb.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163zbimhwnr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163wkrvpits.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163kpjieomz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fhygwyqn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jpgynqjm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163dcyxtawu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163syddtyab.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163yjybvrlh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163dbkbogfo.html

[L04] 设置超时
来源：http://www.sxryk.cn/163osdgbkgk.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163prvfrlsw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163wcxjkoty.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ucmfhbuj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vveavmcs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163edlzqbum.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ceiaxssm.html


<!-- 参考信息 -->