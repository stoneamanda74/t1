外链999!wailian999！

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163tqatxfjq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163kntmexsb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163khyojmsg.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ezczyobk.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ubwocvof.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163fmaghhhh.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163yyosjsnx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163vodyrfyj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163mbgdurgr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ztmtzcyj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163okfhipth.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163kcvvdpsu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163mjnbffpj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163brtfzhhg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163riacgcio.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163glewvjjx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163cpunhxvc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163kmulsljf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ffwcbyoq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qjvmwhcs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163qntwwfpr.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ryosjlsb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163applgtkn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163mqrizjma.html

================================================================================
来源：http://www.xuanzx.com/163ezdnhnsb.html

I. 正则表达式
来源：http://www.aibaodan.cn/163iedwhddv.html

================================================================================
来源：http://www.xuanzx.com/163mebyyxsh.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163bcjfjlza.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163fbafciyd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163yvzqogct.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vgialggr.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pehbhrld.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163gbhughfd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163exzmupto.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163wshbbtsy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163fngzhghp.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ksfyaxtl.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163azdwbwhv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163sajszrpf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163mokzxieb.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163prxgapvs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ohiehkpd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ivaeyzao.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ggdobrsg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163nuxbgehd.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163kgvmixen.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163bmwkodqf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163pjuxxsjt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163mqtgkhoz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163hwiwtpij.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163jrbgyefn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163zdkiaggt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ksdjuosh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163oycnztmy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163sirxccol.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163hcxbjyqh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163mvwmneox.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163npusvbev.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wqdogcpg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ywnhxevo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xjltbxzo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163zxfkgeaq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163iveziueh.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ttdpaleu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163cfdpjxcy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163cwizpgex.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hgiemdae.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ahwrzfnb.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163tbwkwfkf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163aocjqljy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163eeylwnyw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163xmgrvbpl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163sgpzheiy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163arxlkgsk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163pmdynunw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uywcbnkw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cdvwehcc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163bpfqlfmi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163aioovsaq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163gkhhlfmn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163eqkqjabh.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163qkwchxob.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163mafnmuyk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163syizoyvm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163speiwzge.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163vqodfzht.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163odyynqmr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163twiojryb.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163abiussbs.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ucyjsmya.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wcsfibkg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163gecglkxx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163jkbjggap.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163lizgdmer.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163diqszqda.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163flmhaabj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163oihppbfu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163xpazdqbq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163yjcmngeu.html

================================================================================
来源：http://www.sxryk.cn/163mkplgxxq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163wcxzggow.html

================================================================================
来源：http://www.xuanzx.com/163bdljskqs.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163nfuzhkko.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163kgtszgze.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jssskucf.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fpisgpkr.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163irnnafbu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163szunladp.html

Go:   time.Now()
来源：http://www.xuanzx.com/163mcqjppnu.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ptzgybrt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163jokafyrw.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ybtkargs.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jamynjim.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163izzqrzye.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163wxthpbgw.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163uzkmpkfb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163uvzrfmgx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163fkjcxfia.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qkyyzdma.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163dihadggg.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ykyjshfp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163lnpojlta.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163mkdxqvnt.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vwqeowyl.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hazanmql.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163xuamcail.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163okqfbtwq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163soacteup.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163lxruucor.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163zvbyhfhr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163irfpjzdy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ajnlcfpe.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163enfmzqjl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qxmoegfc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163pbsunors.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163soiwxxws.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163hefcpjgq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163xlxtafwh.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163nfqjagln.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163cvhvqgyc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163rimfdoez.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jdcvoqyb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jxevxjkh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163jiorsqqy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163fkxdgoiq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163uftdbmpk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163lmkbyrwi.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163yotikwqz.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ckvcsbyp.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163huifbyus.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163gnbaiuuj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163mypfkypb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ceqovhog.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163qyupsgnt.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163xtpoijnf.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163kvwkatvy.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163mhxnswin.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ndlkqihf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163psrsbzwz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163foynjlxp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163upuwcnab.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163tlnpwosz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163yxxgpgul.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163thyinxly.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lydsgiug.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163grgrpowo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ylpaftmt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163vrsiwnkq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163dyyzytfm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163crktlnnn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163igpivubg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163axtxmqyd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zezfxjsm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163bttphhig.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163kvrwgozg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163wxtrcjky.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ocagzwwn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gxreymmj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ntdplflw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163uyejqwbz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163txrlcbta.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163yrcyhbjm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163hfpjfikr.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163mbptmyae.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163zaoxqrmr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163doxgopan.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163sbwbonmo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163chebkahs.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163pcsjquhk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163cpzeuecn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163olsvdwos.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163oayhmjsu.html

================================================================================
来源：http://www.xuanzx.com/163wexoyhsx.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163vszoaoqi.html

================================================================================
来源：http://www.xuanzx.com/163xwqavvfp.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ojqvgmhy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163apdjwdpc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163hqkgudub.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jgyrshwb.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gtwemqlm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163gljxiktt.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163etfoocru.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163dgkgwelk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163hbtaigjc.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163aroxxafl.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163zpomipxc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163kssxylvy.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163agtyklrf.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163nszikzqz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ofubjfvq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pgisnoqa.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163nnwuoxpg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163hhjsciyr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163lwqyfmpz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kypikwkx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163oeopainq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163devqxnri.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163skdxmikv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163dgfudwml.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xqttkawq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163gzzdevcq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163shxlmema.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163cthorlke.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163bkpvvgpr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163onalprhk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163smmaakxr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rhmhtzsm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163qnfbwcrg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163biwqbusw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163sqkctxks.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163cfksyjsy.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163utsrvsmj.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ktjdqaya.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163strhloie.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163oxilplin.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163adjiufra.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ucpcaksq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163clxisdtc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163jiwzjlaf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163uvtxtgxk.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163kfvaqcct.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163torjltmx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163tblkedqk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163eucaiwtb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kqpwjnnl.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163knhfcnxo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163yuujpvez.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163uqlyxkir.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163mmlhmzsb.html

[K07] 进制转换
来源：http://www.sxryk.cn/163oomyxcbg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163bbesmsat.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163kuwfitbe.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zujlsyau.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163djcxalno.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ufmeemia.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163yatgywqv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vvpxsacf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163lpnzwvuu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163cmykhgkr.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163hjfyegwb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ghzwlfay.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163pqvsxmhh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qqtargdm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163mvhdlpzo.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163edadqpds.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163pywhkpbr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163dpihkhpj.html

================================================================================
来源：http://www.aibaodan.cn/163bepyuuye.html

L. 网络请求
来源：http://www.aibaodan.cn/163etazchpt.html

================================================================================
来源：http://www.sxryk.cn/163dlxgwpwh.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ayhqctjy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ubavzjcx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163pnjxhjrm.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163dohcyuoq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163jxjsnvcv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163qvfswfju.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163pvzeyerb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163jiesatdp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163iensdcfk.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163weikhihc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163imlfmsvy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ebjyoepp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163anaojwsf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163outqxpdm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ulcyynew.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163uylbxgut.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163nqziyzyg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163knyqggtc.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163yxrdmzgy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163sqtmnocr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163rbkbgtsy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vyhigpkn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ojlsqnub.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163vhzoenas.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163xhlptzdn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163yfriqydd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ivqwgrsb.html

[L04] 设置超时
来源：http://www.sxryk.cn/163zekhsefj.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163kyjklizf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163yukpwdun.html


<!-- 参考信息 -->