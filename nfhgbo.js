外链999!wailian999！

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163udeowseq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163pgxsaoig.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ckvwjduz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163sqpvethl.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163badjfkrr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163nrbyclfs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163jlbftdmm.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163zpftjfgy.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163hpgpjzfc.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163qolwcplx.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163vtqncael.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163nzhyumgn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163chfdfvoo.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163gjlkgjar.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163pwvfgefr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163tuvcqvaf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163xnsuqzql.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163afjifonf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163vdgrwmjn.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163xszjnjsv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163xuumppbd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163uakmiqwh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dfyltuwt.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rbakoasy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163eodjylpc.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ejdhliuj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163dkmvavkr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163mtycyyuo.html

================================================================================
来源：http://www.xuanzx.com/163mfudkdzk.html

I. 正则表达式
来源：http://www.sxryk.cn/163ryingxya.html

================================================================================
来源：http://www.aibaodan.cn/163qhpsxjou.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ntqnwmlb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163afexzkzw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ooxempih.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rmcrtodi.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163semqcmoe.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vusbpyja.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163sbbbunuq.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bschbyzi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163joyfhllb.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163jghsyuhn.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163uqpzbhkz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163dyqgmlbe.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163icizljot.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163rsfjbeur.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163tooawtwf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163xoeaupte.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hwxjzxfo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163anxpidlu.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vjjbpagf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163lelexanu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163wcmxrvcm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ixviiago.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163fecfxqab.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163izhkfqyx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163vucjhwea.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ekflsejc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163lnugazsv.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bhrtugcw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163lfxyxuxq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163iskdflks.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163slnimwtp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zrgqmrmp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163nnvmzpne.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ztflqsyz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163qpvrwkdq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163xstpoldb.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163lfzxatgg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qzcpwqyj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ouftxrzs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qpmdgkma.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163aykiofhx.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ioloreng.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163pkajswfa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bnoadmzv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163beyztxrd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163kqxuovcy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mcmijgsb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163jzlgkwor.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163haqexrxr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qbrogyzl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163qriemxkw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163rbbewvdv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ppyounbi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163etnpgzzw.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163swexmtgj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163vjdhosty.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163xbvoqtcl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163totmmrxf.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163pujmltno.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163kuslmovs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163txmgfgvx.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163fmyrqagr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ilzoecdz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163gohyugqp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ilauxzfu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163nwwogqmg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vlsoosok.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163euufghww.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163pjmmybnm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163asmlkedn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163nwdsbkib.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163rorgmnmb.html

================================================================================
来源：http://www.xuanzx.com/163lpnayajw.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ppxpdnzg.html

================================================================================
来源：http://www.xuanzx.com/163yinsmvwn.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bievflss.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163aekmbpak.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xpjhhqdc.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wzojfbjv.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163etukfyna.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163azyyihpa.html

Go:   time.Now()
来源：http://www.xuanzx.com/163cpnnfmxv.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ipfceglo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163vigskers.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163kuhgwfjj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163htzvhsus.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xdbvxchi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163fflcdblz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163sjsghlac.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163jcnqhpsy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163xxhonjgd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xjdyrieq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163kairgfhf.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163yitblmpo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163nvgkzzei.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163wdiixtmi.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ibgvyggr.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rxclbqpr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163xibwfsch.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163jegqrwhg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163rorcuzmy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163sjtugnfg.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163foclpbmg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163gylpwbhp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163yypxowvp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ntsiqfnf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163uzxcyavs.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163lhueoqdd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zfxtvueq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163pqloafca.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163azpoypwl.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ggrnsogh.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vowfzetx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163pekeawln.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zlvtnher.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163fdfigfas.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163mtzhfeol.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163gqocapay.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163yoltttfo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ljggvhva.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163dilzxqxy.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163wlzpogfs.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vniomjyk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163wkbwttjf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163wmbhwyyo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163etvvcikf.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ossjwrwj.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163bptidvdy.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163bgandirc.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ijtnhpft.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vuvfjxre.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163vxjaacdc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zgfqtepe.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163foafyprz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ikohlpwi.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163nesexumm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rjsmuepe.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hxwzthwd.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163shrrousx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163olddqvld.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163furcbhox.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163jfdssdit.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163jbbwfhkv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163cpmvglfd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163klvgohbw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163dobhadqj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163pvkjvdhv.html

[J09] 时区处理
来源：http://www.xuanzx.com/163eifnbsrk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163cqdnlczk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163yhgfvbfx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163onbcpyoi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ntbslkpb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163xqimfpgz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pjdqlxrq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163wmdqiecx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163asukihna.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163xtdwijju.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163qcvmjqcd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163sksxvjxv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ubvuuixa.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163gkcqskuz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163cbbeyulb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163vawvvxge.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163rschfjbw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163zfbdwvxv.html

================================================================================
来源：http://www.sxryk.cn/163nxpecvbz.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163orceiutr.html

================================================================================
来源：http://www.xuanzx.com/163yxcqqgfn.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163voatvofn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163wmcmjrwb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163cnmpqekj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ofuemyfh.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zzzuerga.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163nrbspcxj.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163grjgoxkj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163btgzgcqc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163dzijdbim.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163erfjzqyf.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163avciootc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163nqnoamgu.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jerdbbtc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mpacupod.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163uaxklwua.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zydxmmba.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163dkyjlhsk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163venskkmb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163sluwctcq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ypssflrz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163iugbmssm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mhjjyutn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ygvscdfv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163krkbiunf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163mrxqxnwg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163frvojufm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ucpvgyvn.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jqmyqiad.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ezdvjfwi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163todvdvbn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163giusgghk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163sanzyftk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163tancctsm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gezmbmxk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163abexnezr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163alpmmcqz.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163wjxhizdd.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163wsudcwzb.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163lfsxrcgn.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163cydmcglj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dzmnxzba.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163mklyrfno.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163spmoxhee.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163oycduofq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163fyqpyjlt.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163flbpvrql.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163mawvivys.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163fwktoqif.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bxgvtncv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hmdjaytz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163gorisddr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163nlhiqnqr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163xaraiiwh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163yydgomce.html

[K07] 进制转换
来源：http://www.xuanzx.com/163vckvfmhl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163kdjxndux.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163jvczbpow.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163chjfspef.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wpmwjzeb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bkgkeump.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163fnvvlrej.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163fmfuxkph.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163wrfripvj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163bsvtxzes.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163dedhtltk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163pmndeela.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cdnmqjni.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xlrckspj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163wncuffws.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zrjpoiux.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163yfmznvnd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ozukgihn.html

================================================================================
来源：http://www.sxryk.cn/163jacwqqge.html

L. 网络请求
来源：http://www.sxryk.cn/163svnlfhoi.html

================================================================================
来源：http://www.aibaodan.cn/163tkxchrcn.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163pwqjsnag.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163xqbpapza.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jwoemtqp.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163yqkybblo.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hqroumbu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163bxtexalr.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hdvyipzc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ygbdbtab.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cighnzen.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163rfcmvvhm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163aepzjulc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fxldulsy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dlygqavg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lismrcpf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163mhmcwelc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163egeunsyf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163cidurcye.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163pwfofhaa.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163nilubyrc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163teopbloz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163crayflnw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163pskxbsxk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vqmxaowo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163fhvfgyfu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163jehoklin.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163nhknkcxr.html


<!-- 参考信息 -->