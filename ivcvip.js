外链999!wailian999！

[H07] 断言
来源：http://www.xuanzx.com/163wdjshhxw.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163rqizuwvm.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163lwhayoeu.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lpfzjktl.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hawkfizw.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wwysgnfq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163lghyeskw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163librvome.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rgpbpuka.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163pfuzxbdt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163jlacjarh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163kkuieszo.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zpmayzpb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163xycrhdsn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163lgtbkxpj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163xkwwlwrn.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163xtgldcub.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163avarydbm.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163thqwokaj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163cmxxhbjc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163zldzpnqh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163oyefwdou.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163fwdfvsgx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163lxtmpocs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163jilnwdrv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163nexxoxiy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163chntnqma.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163icuuaqjq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163xzqafzjy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163xflspdty.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ohriwbfj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163uuccxqzw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163gvbugoak.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ktwogbrj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163kpjhkvaa.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163etoymjsp.html

================================================================================
来源：http://www.aibaodan.cn/163gwuagfuk.html

I. 正则表达式
来源：http://www.xuanzx.com/163luzolqsm.html

================================================================================
来源：http://www.xuanzx.com/163juxpdrdz.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163qiddbcxu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163tipubzzi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163cixqcomj.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163uhhrbpig.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163usqzsmeh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163javbvyri.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163euzgcdcz.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163pqkggymt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163vnrvattw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163znlbnjbu.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163qgyjhsvk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163apnuofsr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163uetsutyf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163qdxcnqxf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ofiplovy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163vwlqagbr.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163lpjqmhzi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163jtrhxhqy.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163pgqxtnes.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163zaowzqfv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163vedtcpgb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163pslbernk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163lntnmzmm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163lmsvjglb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163rumxfymx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163jarygalb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163zyqsmahz.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ovsumgbu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163vczjnbuj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ivbmmbvv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163peppdgbf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hxgtnqis.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163rbfojugs.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163hpmymkqd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163jfbkrciz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163culfizxf.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163fgpzoyzw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163kiascgkk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fkgmnycg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163aasqdzwc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ukdqvzqy.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163zkjlpepl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163apgdckdo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163budruesm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163yzxfneak.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163gvpdecli.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sfzjetse.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163crfbbhnz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vteqwkko.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cwltcjvj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163gblmymle.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163hpcqlfcg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163sewixwxl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ravqcvib.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163gqltycki.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163jsbkfutx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163vvlyrmnu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163dblvlche.html

TS:   /error/gim
来源：http://www.xuanzx.com/163qpvadtsa.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ilacadca.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163gqwsxzxb.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163hcwkhaig.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163nmdxzfaw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163hqvezxrc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ngmldxat.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163otfjrcqh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163eqrprilu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163qilahyhb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163sgylocho.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163cbwlkrrh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163colztqhr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163lvrtaykl.html

================================================================================
来源：http://www.sxryk.cn/163jgqndmhv.html

J. 日期与时间
来源：http://www.xuanzx.com/163lyswipnn.html

================================================================================
来源：http://www.sxryk.cn/163peqbiaok.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ikubvwid.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163jnqydktb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wrltuehs.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xossoeho.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163uyvppplr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163siafenos.html

Go:   time.Now()
来源：http://www.sxryk.cn/163kxiynigy.html

Ruby: Time.now
来源：http://www.sxryk.cn/163imncqswm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163kkrktgba.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163vuokcoes.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rrkbsqoy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ulverops.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163zbjvnutw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163wdlezugj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ygwkvxsz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163zlyejikd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163axagzonh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163duopwkpf.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163koocoogb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ehbzbbmz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163rdmnujlb.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163aoecjjug.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hagwoflv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163zogioxpl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163pvnvnldy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ihghpxyw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163mmsjgpca.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163aqszagwd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163itthvetd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163plxvfwxc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163eaqwcjha.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163gfmyajsf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163fzcjlbpn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163kzmylmaz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163eosmovvd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163hbzzrhej.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163vkrkxvwl.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163plkvwcai.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ncpxmzxf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ohffyagf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163boobzkfw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163udgcvkja.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163fkwjivmi.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163myojcyae.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163xoekgvgo.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163gvdamxoq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163qogtrygx.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163acuyexiw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163zyezdlap.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163aqntywtt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163wnnronsy.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mqujstmm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163dikvvlye.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zswcyobu.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163hbigyodp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fgnryfaa.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163llwqicly.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ukluwmnq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tvifxuqv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ybehjfze.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ujniwofx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gchaljnv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zxgigqjd.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163aeugncnn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163yywgbztl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163zkzafrhk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163leikcgzp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163nvvhhsad.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163jeaotoze.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qweckeso.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163lkrodimn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163spehgehi.html

[J09] 时区处理
来源：http://www.sxryk.cn/163guqzdjpc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163efyuscao.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163twedfobe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gtkbcrzo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163txlnkslq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163jtqcvjmk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kkaanqcg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163zwwksmlp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163afwkxbxj.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163sqxhrztk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163jiofrvws.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163nukwylrm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163fvbionsk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163zalcinpg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163vpilowev.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163wtmvipqa.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163oimczohz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163avyocpxr.html

================================================================================
来源：http://www.xuanzx.com/163qzocorhn.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163jpatofrf.html

================================================================================
来源：http://www.sxryk.cn/163drmrhtxo.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ydcmrnhi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163yehqvodd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xszjwjxf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ldbzzxhc.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dqlwnvuk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163tdnpgqla.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163xbjnugfd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jwmrhiip.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163pkliskoz.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163harzehui.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163pnolrxwi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163loaemate.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wdlmcajc.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mimpomgc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163jxezvbmu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yfcaufiu.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163vusyprpv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163qmkkoefc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163wxjperzz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163htlkbbrn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163intufgbj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ysiaxvzz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kjnqavkt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ufpftryr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163gfinmzgz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163gmcwllnd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163nwvjkssn.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163uwyggzxq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163cjjajtuz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ucaxwsfg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ljwmwfma.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163tqipmhgo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163mczhgykd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wxskbzaq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ueugkscq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ujdukuwp.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163bfiboeou.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163lzfzspvx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163dydlbtva.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lodrksmi.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wycbcjoi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163yjajluhh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163jajhoqrq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qjluaqzz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163pjsnyein.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163aymflogh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163qeykzbzu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163dobgymjd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rdgssaiq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gjanrhwy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163xzhxyvpk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163dsujhbvv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163bpnupkaf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ltsemyqr.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163thvevrcr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163fiyoqycw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163tgbdhdot.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mxnpqkoh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mglhzlwg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kprpgehx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163eurfrqda.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163fldojtcl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xipdulua.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163lhhdjene.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163tfmtqpey.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163hkyefxmx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pcovrpwb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nuxqbknn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163xfaldgsv.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dpfovudn.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163aygehhtb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163aodfuhpo.html

================================================================================
来源：http://www.aibaodan.cn/163jeaoceaz.html

L. 网络请求
来源：http://www.aibaodan.cn/163kjvnwwmh.html

================================================================================
来源：http://www.xuanzx.com/163jaqbzkjv.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163bengqpha.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163zgexznpw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163eubvvzqp.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163pgamqikz.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zxodbroq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ypbjlhen.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163gknmjfea.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163bxxynbkl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163snfttuaf.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163mljcbuhl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163xlalgobi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ncstxkpj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163pdocdrkz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ffdjnqbn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163okmxlvzq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163hudzruty.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163vpswlfuk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163fornmabt.html


<!-- 参考信息 -->