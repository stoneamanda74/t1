外链999!wailian999！

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163qtxetwdk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163giigsugz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163stbtexvm.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163gtdffxye.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ryceslcd.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kvicvsir.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163abauejac.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163nhjpewai.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163eqakerjy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163bdeaxmfy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163oopbgeli.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163vjijyieg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163wfqngmtf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163hqpxmymv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163prxtxhqw.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163baunupkp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zkgybkfr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163fokfcbgt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163sewykaka.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rrxnztjo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wpaomasb.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163lxwnzobq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163fclfbkqb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fdpvwiin.html

================================================================================
来源：http://www.aibaodan.cn/163kruemhtm.html

I. 正则表达式
来源：http://www.aibaodan.cn/163yeunnwvo.html

================================================================================
来源：http://www.sxryk.cn/163sumjwuoa.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163grfbtyjc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163hzkelcnx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163uzglmrtf.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rgfvxieh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hatdctyk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163qcyockrg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163hijtkwsa.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163pauacnbf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163kureunbf.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163yirgamhf.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fkhlvqam.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163zpyywdyo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zqunspoq.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xqeohimp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163kptngwdk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163tdndzohw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163uqwbljfm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163mbnwnnoe.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163woteukwn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163wbcvqfvd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163gmoaogiv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ztneusof.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163dderufhg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163slznnwyw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163frxhuyfp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163byxdhujb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163sigqahst.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163gybppfsn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163brejcrrm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163afmmoahk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163yxtpvlol.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rzhpqpsm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ylcalgan.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163amjgfbta.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163tokmtkkd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163osggdgpg.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163mlhbzlai.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163qhcjesei.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163maukllos.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jbgjbjyc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bqevcfth.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163zdnmmzfy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ziyvimhk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kfpkosul.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163lmvyrlpl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ugpyjqtw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163heohxrac.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163vhualzat.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163pgvteozo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163idyvzpek.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163nrktdfne.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163idpigjhf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163zxrgwsfd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wfvggwku.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163rlbjedha.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163vngrbqxc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hdmmorfn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163qdqwdukr.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163hujvsoxj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ebzcjomi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163apmavses.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163hunzziph.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163pfwqgytz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163rdagqrjt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ldybjwob.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163esmgwwjr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163bzwyqqfp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ukvojgpr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163jhmxaoeq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163xgivbzgy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163oaxgdlrm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163uabgmcxx.html

================================================================================
来源：http://www.aibaodan.cn/163rksgsckf.html

J. 日期与时间
来源：http://www.xuanzx.com/163qfqdsfzt.html

================================================================================
来源：http://www.xuanzx.com/163jizhajqp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163gkzjqmwa.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163pnvssqfu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hcnweiwx.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hgfuiyow.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dbikbnjf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163eodqeznv.html

Go:   time.Now()
来源：http://www.xuanzx.com/163acxrbege.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163kcspkwtl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163yefnmuaw.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163npqswhur.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cahmswet.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jhbezint.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qnptfvpx.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163eqpoyotf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163phmasczm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163fioybenc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xocvtfme.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163rdlugbnu.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163sxsedshx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163qsbsvunr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163giongwzm.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163utvsuaax.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hnltljyn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163dddozngq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163sndfmhlu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mbalgryu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rxkwlkze.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vdajkihs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163scphmwtj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163nfkrjnuq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xerdwypn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163oiseqrbb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ugvwjrbk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163frqdhpgs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mnksfxxm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163tqjgfdrd.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163iqsrhpuk.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163xdovyfvp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xcytfjrs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wojkamrx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163bgnmxljp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163xaquiyfh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163dzecklkq.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ufitzumy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163vaxbsnlu.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163jfqujtdr.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163drcekzad.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xvsnfmcy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163kbiyoanx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163nqcectjr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pihwilmj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qdizllsx.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163nmzmonwr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163hffvtqru.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ehjwivxw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163btyncdee.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163xoztbxry.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tsdhpmpp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163xqlexyey.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ipbupzgr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163dadmvygg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lwdqijic.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163eszqhhgj.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163gdaxkmwv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163nxfskayd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163fiamotby.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163vmkxdtms.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163wcdkleqc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163zvquxwaf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163wscpsvcd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163gnpqbrnx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163tysgfjuk.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jckwhaqi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163rngtzbvy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163enhxwdir.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gtrtkzss.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163szhxfzwa.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ckhdgmue.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163rdincsaf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163yirawsal.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jfpgvqjh.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163sjqswbpk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163onlwhulx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163vagauujp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163stgtkmic.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163rpfnacod.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163uroxibot.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163uztlpggm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163orqxpsbx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163pclajqcv.html

================================================================================
来源：http://www.sxryk.cn/163flwsxzhe.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163onpigupc.html

================================================================================
来源：http://www.xuanzx.com/163avyprttu.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163cfajqqni.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ekmtyuho.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ymmcxzpi.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xnjyenho.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163joffydyz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163grhznqbp.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163yluoxnhl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163djuwysnm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163fmswkhrn.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163aqptgsqi.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163iojcysiw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ddycssow.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163owzvnupg.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ldovhupj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163dqdgfjcn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ksjavyjc.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163qricajhz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163gqvcxqzn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163vfxeszno.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163bzglkfad.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rdxbveec.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163elymmjan.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rcgslpnr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163jbnmkbdn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163nzqochvh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163eglrliwk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163soolvunz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163dvbvlhiy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ieofjjmv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163dokgqssi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163eawqiyhe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163brualqth.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163bxpsglco.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ycrftfaq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163vlaapcyo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163pwwhbdkr.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163xfljmyzm.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ajgzrcvd.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163gjvsfghz.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163disavruf.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ysujegii.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163qjhnypok.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163koesopll.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163pfkzdtat.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163qojoywxm.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163xdikbxlx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163meeokiiz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163vpsokjhw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tnfalock.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163soafevrd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163zgbldolw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163qrifbxuf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163srunqtno.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163pkeelyhr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163friiuode.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163whmtpytc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163vyeetetk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zavsacqw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pzcmnzld.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wnualknz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163govqttkf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163eqrsgspq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163lzgykmro.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vwtikcvc.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163capjhsss.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163qpwonsyr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163sqndbmfb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wvntgwrf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163uvtyawjq.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163lmlhdnif.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163kshkwpvb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163sibcymqd.html

================================================================================
来源：http://www.xuanzx.com/163rfljbnsv.html

L. 网络请求
来源：http://www.aibaodan.cn/163gqxshhow.html

================================================================================
来源：http://www.sxryk.cn/163ojexgzhi.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163moqmtfek.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163sohjkqzk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163qihzenvu.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163yujvsmgk.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163efkpjffx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163bhwaviyg.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163kctbyakx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xiijcwmf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163juwzplfa.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163kpnrxafs.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163sqnpgevw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163mmyagyzk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163pqwdeawq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xcgimree.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163gpcbjfbx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163tyfhexfx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163zxpzzzii.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163doujihvq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163wtougcyk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163vnaztckg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xikguizu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163isqixiji.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163djfyhvrz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163uinetltx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163gebjfkmg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163mthtkznd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163anysdmeo.html

[L04] 设置超时
来源：http://www.sxryk.cn/163kxfievsh.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163bbveytsx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163kuqrcpdu.html


<!-- 参考信息 -->