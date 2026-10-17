外链999!wailian999！

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163vcafuxeg.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163lwirlzft.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163vbmwybed.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163usrxiybw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163izhwtdac.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163maiodsln.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163golcmsmz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163dsgpyxlt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ridyuoiq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163lcmgsqin.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163obacgtwj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ucehfzak.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163dyxbmpwd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163zkzaxohw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bcnomudb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dxnplhsj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163orbcavpg.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ktzbuhqp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hxyjrres.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163fzegbfvf.html

================================================================================
来源：http://www.xuanzx.com/163wgcdpfhf.html

I. 正则表达式
来源：http://www.sxryk.cn/163tasdwlcs.html

================================================================================
来源：http://www.xuanzx.com/163cueiurnr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ejafykkm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163wtepxfhj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ehrjuxqd.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163udfexsvt.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163tjxmqjam.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163amwwztsg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163gqrqjcxs.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ucesklrz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163hekttohi.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ayehjedr.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163fxurdjaa.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163yxqtiuzs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163rvquvbyg.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163hqsfpbgs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163kejogufy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ohytevzd.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163byxbpcmn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163jqqilbig.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ixezjxed.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163mhiyowsh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163lobcjdwu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163mcldpdgv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163djiemrki.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163gbxjlwpq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163oywjspol.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163qpzrxxaq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ebciitrw.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163exoeoizz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163bvckbnki.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163yzmgsfwr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163veyhefoy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163pauogsgt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jqlmcgim.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163uxqgsulf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163cajisctm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163jmfappva.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163oyrmbiry.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qvyyafgv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163oodiiiet.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163sylhwrjj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lrouwevp.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163wtmkeqwo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163lbyeycpm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163aksxgead.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163yuindvwp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163dgunratn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zpzknnef.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ntlseiil.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fyfpudzw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163laxnjecs.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163byjylvjn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ygvvupao.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163yhrjlfdn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163iwdetruc.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163cwsluiob.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163nyzjpofs.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163addssnha.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163xzgjfigb.html

TS:   /error/gim
来源：http://www.xuanzx.com/163qtbvorbs.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163gjaqxlxf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163bzxcbzpm.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163vpkykmmk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163rdpxaplo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ezqprmul.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163dxilibga.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hflzffqk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hufulznj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xyjxhhjo.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163baoypdeh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mdviyfyy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163kcfezzpg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163jhmvutqs.html

================================================================================
来源：http://www.aibaodan.cn/163yuihqebs.html

J. 日期与时间
来源：http://www.aibaodan.cn/163heockkyb.html

================================================================================
来源：http://www.aibaodan.cn/163hsflpupb.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163fwkbfzvb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ysxacqvr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163tfsrtjlk.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163umgtpzps.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ueeekoxk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163rskhgksn.html

Go:   time.Now()
来源：http://www.xuanzx.com/163xpykawok.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163zpkdjtex.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163mclgisop.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ktwfzzex.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163npdfxupd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163stkswsky.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163eppdptlk.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163etsacksj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163obbvwxde.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163xddpdqoy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163sddfhyix.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163mqhtywtm.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163lqzzdwax.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163fzrbxjww.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xhxldlti.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163awezcafy.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rfzkqchi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163jpvgrrqf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163jeafhtne.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wecyclis.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163gznbaffr.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163wfygyaki.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163nolgkgsi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163dcwrotpa.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163hovmytcb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qselicnm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163btuabggg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163xyykhxal.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163kfoganyo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vnoovrpa.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163pmnjztfp.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163qpovvkko.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163mzlgvvnk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gbvnwnkz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yybnzots.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163tfoxooyj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163bmwqqxob.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mhxawqox.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163auaqnhtw.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163wnyftanz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163auotufoj.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ghcbeyjp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163tusagfqi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163xoktmvug.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163pebjbppq.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163vmuivwzb.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cynzastx.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ntrsvnhw.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163zetjnsjv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ywjnzihc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163yxyvowvt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vnvpfpma.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rgayohoa.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163rjvrctjn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163wdonuzic.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zebfdyda.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dvvyycyf.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163vxvlmbhx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ulgumvpa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163rxbbfgzp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163qlpmszzx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163wcjmbzzo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163tyuatvca.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163iqiowpkv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163oqovzxwl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163dkyzhbhp.html

[J09] 时区处理
来源：http://www.xuanzx.com/163pctnqbgl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163edsevhwn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163gqccunye.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163nmshbnua.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ldboapij.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163dqzchyog.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163tzfbngqi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163tbnidmbr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163doblquov.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163bipgqrzv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ijukppgx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fvfdpwey.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163dmmqrevi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ftfssimu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163odoasjkk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163aibfnlgc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163hksqyopi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163dnnnptwi.html

================================================================================
来源：http://www.xuanzx.com/163ulobdort.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163gljpxnwx.html

================================================================================
来源：http://www.sxryk.cn/163xaowygrl.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ckpskmhf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ajdpqggf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163csvkbvyn.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fuqmvmjs.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ktltbguj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163xoxunlxs.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163arzceuer.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163xknznhjp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163jhhuhsmi.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163absmcmzp.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163yrkloyoi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163wscdjclw.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zlgissji.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163aerifwwo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163actpxypw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jguujdpm.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163azioybqc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163tnzoqmea.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163cwpiliwh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163obdddodv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163xtpmbipp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dpkfpikt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163evxxgbvg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163khnaxhjm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ygqgodpx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163otfhgqyq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ttvmmndb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163jvykrxnu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163oesjnzrp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163wrsnpgsk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bltfaqfg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bpqsnxrj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163tnedlgon.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163boeuybpb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163adqdkwwv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ggjdsbts.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163kyrvxtdk.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163bkxtufko.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163cxbkogei.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163uggafuyo.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163auhumrwk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163midrxuvs.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hevytmbx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163hjarntdy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163nwusaqjd.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163xdzssxqa.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zneczkey.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163lbkqcxxz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163skiahlqa.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163tcycgyed.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163rswnvusk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163fkhokuhh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163iwioclyz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163exgsmbdp.html

[K07] 进制转换
来源：http://www.xuanzx.com/163gzdzzfnp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163gslhugvl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ojnrndwm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163oitovrqx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nwdtnexr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vkynetcl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163tapapaok.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qgqcxgrk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163eeqepxwn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163gawpeqng.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163epvrijnq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163vymcyufs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163afsnmkos.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qokzrpqe.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163retggvuu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163fyvvftgt.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163lgzrusvx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163qkzrdtcc.html

================================================================================
来源：http://www.xuanzx.com/163ckryxnll.html

L. 网络请求
来源：http://www.aibaodan.cn/163kyqjihqy.html

================================================================================
来源：http://www.xuanzx.com/163nryasufp.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163udidsxwp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163zgzdcnss.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163qlkukuvj.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163djxccvcy.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163eyzojiaf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163benxutny.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163zvlraihr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163wcqdvyxu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xevouuqx.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163gptqfsmk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163kkskioxs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163bdslyvyw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163msxshqay.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qndhbyns.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163penuusls.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163eezykmvj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163vmcsjdig.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163kohtievq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163wbhlwzmj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163srwwjodg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163hqztjtdv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163sdnisssg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ozliuqha.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163eyelsaao.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163dalhgifj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163vjkmuuwt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163lrqpklau.html

[L04] 设置超时
来源：http://www.sxryk.cn/163bwsjlide.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163onzytnqa.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163yyacdzpg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ryveggbb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wrjegcko.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163xdykzdxs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jcztgfha.html


<!-- 参考信息 -->