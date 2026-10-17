外链999!wailian999！

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163xeihjrqv.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163sbxxocdc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163fjjuucbl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163cevtntod.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163xpafeljs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163crruynar.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163kfjyhcxp.html

Go:   err.Error()
来源：http://www.xuanzx.com/163uiyumngz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ixaupmyq.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163pcvfawhr.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163tzmomckr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163qmlfzugi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163utglkovx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163qjualgst.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ajztrkfm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163omldnrka.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163tyaasdwe.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163cokcklni.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163bpfsnldi.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163tkjxomqr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163zuqpsfmy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163fxrtrigx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tdqgijjv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dyibhwlu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163nlgqklom.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163lrgvggig.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163rfrqgfnz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163kqkdkfza.html

================================================================================
来源：http://www.sxryk.cn/163euklzawr.html

I. 正则表达式
来源：http://www.xuanzx.com/163xgqjsqtn.html

================================================================================
来源：http://www.xuanzx.com/163gqekgxpi.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163wlrgjeud.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163nnnoogdc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163lhwoilii.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163khtelmyj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jksqvafp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163iurtmgoo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163exbvshvw.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163vzqjokxe.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163iwozffsp.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163wqmfioou.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163tiwxlpch.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wduzodnp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163fakipgxq.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163xipyznhl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163uyixrvet.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163axjvuivl.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xwthcjis.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163niyvbdcw.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163jqcpnkfx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ysquwzhn.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163qyndbutx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jbuvmqzk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163dzmxkcwu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qdrvljur.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163msxuodyj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ucvzcmkt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ujppgtqq.html

[I04] 正则替换
来源：http://www.sxryk.cn/163tajskmql.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163evokkulr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xssvwvji.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163eibhvptb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rrutvikl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163zlyckkdl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163yjdjnusf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ddhhopgf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163panqrepf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163scsnbkoc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163xghxoxvk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163qridldhj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mmlkoqza.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163esblrrme.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163spkrqtzb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ckzpouqk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ntllmbhs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163uyqwbwbt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163howfxzpp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bpqibhvy.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163amxwjppe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163pxwdbgpt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163opxkyuhd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163bawjiocw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163hmztgvci.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163kxqoopaw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lysxposz.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163jddpljjr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163khudlkjb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163zpceamyy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163mcdsvvtu.html

TS:   /error/gim
来源：http://www.sxryk.cn/163apelmsev.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163uzoihybk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163tnuvqeyy.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163mlxfdebo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163quscgrdl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163jmgqldla.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163bsvivqjn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163judppzyz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163uehlqotx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kvtzpjes.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163marijgmd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ykbkdgyh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163yeczontp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163sltflpik.html

================================================================================
来源：http://www.aibaodan.cn/163haktqsaq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163nsvcfhnw.html

================================================================================
来源：http://www.sxryk.cn/163yhzheowq.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ikrbnblv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163abgsbloi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mflthuih.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vbqwglra.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vyektvji.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163pqggwazw.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163qjwsmqsy.html

Ruby: Time.now
来源：http://www.xuanzx.com/163dmbzuods.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163zifcdwmr.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163vhwagztf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ylrtwdhm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163atqwjmzq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163pwqalthq.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163qfqhlppe.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163umnqocto.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163qmbgoirs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ksjidxgw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163xvkhktae.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163wfpexagr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163wsnazwfq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163gobgzcgy.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163swxedpwz.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xydorivn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zklnitop.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163nwjldzle.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qfoxbbim.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163zhnjpdvw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163nvtaklwz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163veizpnhs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163vnlqxejt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163yalhcttm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163wqvfwema.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163mjyffcoi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163sxmziboj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163yoehtfit.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163rlagvjvu.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163yoilwhkb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163wrphopmz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163iajaljwn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163blmnezvh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163nahyldxn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163lbnkglox.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163tisjthsu.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163rmhltued.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163jlpangeb.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163tegsumfl.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163kdjrsuir.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163khskmnyy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163iivnirwb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163fommpvft.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163qprwfcje.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ifijubfq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163kdnghiew.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rsldmdup.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163aolupzps.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bgxzlhya.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163etkuqvaa.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bsiwwxvr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kxhtsnbj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163rfhzetvd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gwtktztb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mmfyqgsn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mavbnjxu.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163bpbctmyp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163zkhkdzgj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163bdjzpxqo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163jczrarry.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jywrxqce.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ztdmceso.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163vjukvmki.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163snkndfhp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163wgpldxfa.html

[J09] 时区处理
来源：http://www.xuanzx.com/163lrxfjjuj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163svkvgdft.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163gnymjspt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163okxdquvx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163fmrgkmap.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ytnwcdfi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ampommow.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163dhqhptfu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163hyvklzyz.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163lmhaslvs.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163yyxxqhrd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163vqoffzjf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163xpwhgsyu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163waonvicz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163moobmyeq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163nkwkoxbn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163uzmnoejr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163styrfwes.html

================================================================================
来源：http://www.sxryk.cn/163iscstaxy.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163qrhnthaf.html

================================================================================
来源：http://www.xuanzx.com/163wxxavhlb.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163qvravfdv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nftssfce.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lvpnkowb.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ckfchhgu.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163adqkpmfm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163qvbiufui.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163tyvngctq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163utiwtzoc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163zbkgtkls.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ytqzwkon.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ivpjjcpl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ravyxqcs.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vticigep.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vkeijdnq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163oyfikria.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vincaesx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163isdtcnfa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163nzqiugqx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163tnvytuvn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163lfxnwtbe.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kloxrxya.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163bflxhupn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mbkndmzp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163pmhhkqwh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ebjpydam.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163jugaktlg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ndvdihag.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163adjccmmt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qprkvnlb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163mikxdugr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nzmtcslx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bsxmgdvk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163forpfljs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pxmcjamo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163sjjpiurh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163xowisogb.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lapjcuri.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zgahfngm.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163afetxzcg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163uibpzzia.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pcxtzeuq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163cfwhhuqm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163erydfcco.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163uolkvwwq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163rtnczbdb.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163pjigkypt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163hpkmarom.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163kxdbivyc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dxchvvbx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gchqrtxa.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vdulvqqe.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163lxxcxhwf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163wrleniwc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163pwiqtidq.html

[K07] 进制转换
来源：http://www.sxryk.cn/163anzojsgf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163laertmrr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163mitwztta.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kdvfhfow.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163brrzjfqr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163iqpzssqk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163scyaohxe.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ahqabmjo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163shawqvzt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163lgynrmck.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163huxpijcg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xvphpezp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rowzvcoo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hxkujduj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163pjsjcihw.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163nkntmvly.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ppzqkgur.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163dkzqoznv.html

================================================================================
来源：http://www.sxryk.cn/163omobnoax.html

L. 网络请求
来源：http://www.sxryk.cn/163opdztfvx.html

================================================================================
来源：http://www.aibaodan.cn/163flrbsngt.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163gozdriid.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163fmuteaqz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163mlfnmmcf.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163lzbqsxmh.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163txjclprj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163mohpyzop.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163xhteoqur.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163cesdnrem.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163yzbpshdr.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ingroehg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163vbhvtgmi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163eafqbxzs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ileavzqp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163syiwpfms.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qzzssajf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163wvvvobfm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163bapssonc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163brbcqbaf.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163tsbywzjg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163filpfrxw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163qkhuzikv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163auewlyxk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163owfgkpzv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163vabikrdu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ykyxngzm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163rarqccyz.html


<!-- 参考信息 -->