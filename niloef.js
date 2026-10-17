外链999!wailian999！

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163pzwnqgew.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163tcomrpji.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163sfecblhj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163xlosopfw.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163kfzamhww.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163jdyyfdiq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163epncnnqh.html

Go:   err.Error()
来源：http://www.xuanzx.com/163dtkomlru.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163mmntlkqk.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163vquwzebd.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163mduvoexp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163pbtstorp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163mrevcfrx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163cztuyyvx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163slppqbqa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ogwzbstw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ycmuencq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163mrsogweu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163etxfoywf.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163axiyjooj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163nbpmowgv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163mgelestz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163skduunyf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bsujgill.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163vvwcbbkz.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163lynycewk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163lpveftwy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163iyxnlimu.html

================================================================================
来源：http://www.xuanzx.com/163vshwxrev.html

I. 正则表达式
来源：http://www.xuanzx.com/163zsddligz.html

================================================================================
来源：http://www.xuanzx.com/163qkqpaccm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163uwrtzamb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163cvjxgcaf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163wnzupfrj.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163mtlbkjgu.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163opwlimal.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163xvjwcety.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ehicwwfh.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163jnomyort.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163wjzbvajx.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163leklsrup.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163wqhwqtox.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ttwniztz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ungcibiu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wvobqhyt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163vrmsyhiz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163zopqrndt.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163rijrxyys.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163mlaodwts.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163udxwxeic.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163zupljozw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163udgspbob.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163mxxwoatu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jihdhsfz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163diobqfpd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163dawcbpew.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163glzunbgl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163oclqklxu.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ghabewzh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163bsisjksy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vejmofsc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163oaiodaaq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163glmaleyo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tztxiryl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163lszhwafr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163twxmroyy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163qkktnnil.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163lzvtasiv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163hkynveny.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ioiilprr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ekitpavu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ucuiqhff.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163lsgkpkpg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163cyzglede.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pndtehui.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163roupwvxz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ojwzrosh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ifkdtjdb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kfaoiskf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hidqiwdu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kxtkeboq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163xxazyfrt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163gaqrotcf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163okmayydu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163oeefnkea.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163uifflrff.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163kfppriyl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ifugswbi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163xyskmfxo.html

TS:   /error/gim
来源：http://www.sxryk.cn/163igrjomsx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163amicpojm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gwfqdzej.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163seuxcwew.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163fxvzmyrt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163snzswlcn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163zldpgsld.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ztizdsbx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iynggrnn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163cuyqcvny.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163xnshlkzi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163mrerxvof.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163dbfowesu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ipkceypz.html

================================================================================
来源：http://www.sxryk.cn/163ydhtydwf.html

J. 日期与时间
来源：http://www.xuanzx.com/163zamlyieh.html

================================================================================
来源：http://www.xuanzx.com/163hmhedwjw.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163uooocmnb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163cejcwqsa.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rfqpnvtp.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163pkbnhsnw.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hmeqkwrc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163jncrdntg.html

Go:   time.Now()
来源：http://www.xuanzx.com/163vcbpgexn.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hcsdrdqa.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163oebllgyo.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163sipeoxfe.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ocfrbars.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wibpikza.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163menxmvjd.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163vdosgnuz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163erxhyeax.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163yxvfypdj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jkpwkqqe.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163akqptqpt.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ujcqgmrz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163bgqabjsa.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163twrzbppg.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tdkgxarq.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rgekqked.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163inafscva.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163cowxepqa.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163skdapolu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163xmxviutn.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163jlnfwtxc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ongmozga.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163bzvolpxg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163gmguesuu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163tmglbsqy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163qypkiyif.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163pdtoxrgl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163uapmimau.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163onthbmmp.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163pjedfdqq.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163bcikfetv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163bmvzborp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tftahgkw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qnwoiqkx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mtougpys.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163xsdrjyzq.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163whcmmmjq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163quaaltjd.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163gjvaxunm.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163lciaotdw.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163gxqtuuvv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163vurzstiv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163iwzwhntc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163xnluzelj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163nroxpxle.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163zfbzzydu.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ncgxnupv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163rohnedgq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163eqagslfn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ypvwkxtf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wxxyhztc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163yxvudasf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163esaexoqh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163vulmfvxj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163npdmbenh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nkxazsif.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163uvqbaxox.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163fezwnwwo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163pwxjspui.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163urkjobeh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163qtjtiwgp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163askaqzrv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163phamouib.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163awdqwrcc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163fsagaftb.html

[J09] 时区处理
来源：http://www.sxryk.cn/163snmxomkm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xaewsupi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163irvnqplq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ewfaoplo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ttaxxhwk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163glhwxmsm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ugkgerrz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163wntpvjil.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163iceejtrc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163slmaaovx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163htrqiwyd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ydbwwkhh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ghcphjsr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163lmqxelev.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zunxnpwo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163adbltokw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163iqhuzjed.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163jnkfequk.html

================================================================================
来源：http://www.aibaodan.cn/163addpkzyx.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163xwqsxgyy.html

================================================================================
来源：http://www.sxryk.cn/163haktoxcf.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163mnopqwyh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163pbhsomiw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ddsumjxd.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163whbwvtpq.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ziisuusg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fwuiejtu.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163jepdekwf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ghzmrywg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163tdpmntrz.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163qzliesbl.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163uydlrcuu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163cjtywdms.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163dvfugiob.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163taeroniy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163txkqikgp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zdpjjmhi.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163zvwtkvtl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163lycstwdh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163rdanxngo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ixixidkh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ykfeepyf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ctkuaphw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163swxcihqh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163aucwzqlz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163jreyedxa.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163qhoooeeq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163cbroujst.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ntmrides.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163dyfomcmh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163btdyylyg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vvcllgrv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163gojlwqbg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ktcrxhfx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jdjqnzau.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163uglnixpb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163libjukqx.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163gvraxbur.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ijcczqkk.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163kldbyhzy.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jfviccrx.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ddpoyjri.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163goqrjqjy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ugxfgnxb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163pqjmmfbn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163pnmlnbsf.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163cpswgtot.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163xuoazzgk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163evwfvgje.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bovsbyjb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163umvahacr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163wupzhqex.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163dwrcbwos.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163bucntizp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ozqqjjuj.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ohanwreo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163bahaywqo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163figqdyxt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ybhyxsvx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xrfpkmdf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bxukmzag.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163aehnaxwr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163rttyfbke.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163zkbpztsi.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163lzkksgif.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ahmsngtk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163zzougdpj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ujfmldqu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163udncnrza.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163suumqwwz.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163vnpmgtjo.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163riixegwd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163dzcexnrr.html

================================================================================
来源：http://www.sxryk.cn/163zbwpbxbh.html

L. 网络请求
来源：http://www.sxryk.cn/163qbnjprxg.html

================================================================================
来源：http://www.sxryk.cn/163kvlcigkp.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163uxagtnxh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163hvxnmqoc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163qckbqkic.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163sjlogzbn.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163axnvcxti.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163qgnksgnu.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163fvuovonx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ehexewul.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163cjebrjon.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163lhzbnfwk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wpixpqbt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163cjpddhzy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163srbxmtzl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kjarxdfp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163iilenyaa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163qyyralfn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ezqoicyl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163srlpnqpq.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163lvfhcisv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163pnmmimvq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163finulmwh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hnqegrxu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nfoowbxr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ocqqblxw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163syywjpuu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163onrtmqdo.html


<!-- 参考信息 -->