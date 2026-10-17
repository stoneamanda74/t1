外链999!wailian999！

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mlpqorty.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163nvvzyrgb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163hhktoibk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ydkynmev.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163awakvipt.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163mtfqpfut.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163uhxzgxfj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163fhegvpwx.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163eltjkqii.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163hatuaiwn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163tozfbuhr.html

Go:   err.Error()
来源：http://www.xuanzx.com/163zvqmjxxq.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163dglnltie.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163lgjgwihb.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163iymvtakf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163wlblkpmt.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163iogjpxdq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163rkbfdmtp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163xgduafvv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163tyrhrtex.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ynkfbjcs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163deozdrda.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wuvfbqqo.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163twlojezp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ijzzncph.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ewjkwfwp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dszzyopp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bcrhzirm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163yuakxjek.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163zusalxia.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163qpidwwgf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ockrsmlx.html

================================================================================
来源：http://www.sxryk.cn/163bmmoentp.html

I. 正则表达式
来源：http://www.sxryk.cn/163otekrxkf.html

================================================================================
来源：http://www.aibaodan.cn/163jvztvamf.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163sgphalpf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163vetnbbup.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pluxorld.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bifnczli.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dutkdiac.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163pprndyth.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ounzstbh.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ufzhrgab.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163adppvegy.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163lhjwovha.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163wrueyioz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163mwoawvvu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163seiddezc.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wvjnzvlk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163eupqqfyt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163xjnypgsp.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163hnzxcewv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ymbiombd.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163jhycclgy.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163avtpzpsm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ihtnojlp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ohbwouvw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163kikqtxgo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163qkkjwyvi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xulpfrsh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163kdtsmhaa.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163svpteugp.html

[I04] 正则替换
来源：http://www.sxryk.cn/163prrqyeve.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163fljsxupn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ytqtzeop.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mgywtkvw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kihbvvyo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ahbtrpsa.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163xjcocuej.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163pzttfxli.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ifhxofij.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163lxfgoxtt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163eodokfyy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163nvokbdlk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163odqenwyg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163eelzcsmw.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163jnpwbuth.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ywofdzak.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tvkkbxjb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163qyhvflfk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163hsohstpw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rqxitjty.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163nlsylhmo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163srwqqfna.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yyksdpas.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163grdsgmnn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163hyooxjry.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163vbmpzprj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163kbujegaz.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163gcsxemqn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163wtddtwhd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qlkpznlp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163oyberxbh.html

TS:   /error/gim
来源：http://www.sxryk.cn/163exfwugnq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xgvvomrk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163vjhmzutn.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163tpkgfcoh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wphcymlt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163gfhwneqs.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163unrurlnx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163qcyrrzfb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hxlctjlw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wueyufaz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163lnmjhnld.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163qcnsdafz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163wjghhobc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163lyoidfnr.html

================================================================================
来源：http://www.sxryk.cn/163suavxpbi.html

J. 日期与时间
来源：http://www.xuanzx.com/163oocdxtvh.html

================================================================================
来源：http://www.aibaodan.cn/163tdjpmnud.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ngpzbhjs.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163izsredpz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bxmozrel.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163btfxsfxi.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163sqggrxhy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163irxhuvch.html

Go:   time.Now()
来源：http://www.sxryk.cn/163gbdefqlm.html

Ruby: Time.now
来源：http://www.xuanzx.com/163gacwepdu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163mcjrxlzu.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ngruioqf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hyjbzkwn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ufykmglb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163bdyzrupy.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163hiidceii.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163xfaamelt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163zcsoumqv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qyvrablb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163zhemqmln.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163xjchdcpf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163eqaiyvom.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163yghmzijp.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ydmzpxwt.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qgasnwci.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163jmfsscuy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163plvuhsoe.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163soyzkijl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163eyobprbx.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163drwwbzvj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163dirijrjq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ornufmiz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vimemvef.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163gictqraf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ldukydmw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163babqoeww.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163avvytkcb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163vkalelim.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163zmysvtsm.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163gdphgawj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163acdaxgdm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163cvfustak.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163eqgpbcja.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163hdebvcxn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163jbycyays.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163fpootwsc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163aoqymqvs.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163brysmqge.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163itgnxyxm.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163qtcpwwde.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163xyhqfvfm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ephswtpy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163rvhnvysn.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163zulymslz.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163qhtzzvjc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163omgdtavo.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163zofwtajh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rctisjxs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163xmhdhqcb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163uwrvckwn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163muujcfas.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163oxazlssb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163darhwcjy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rteeokhz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iiueuxer.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163bdguocex.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163aarhdrjy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163urkibrml.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163cjplflpi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163joidumiy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ltiumqvu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163wfvfwpbe.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163rceblixr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163tkaeykve.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163giunxurn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163vzpalcoe.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ktbzbwvg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163oyqlkkgm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163abjkecyl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163vytjpqoh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163bsvpcosu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163rxmsgzud.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163fzudpqcf.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163glkwpzmi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163vhklhyzn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163xmgjpxmd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163gzaysqqf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163zqlzlmft.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163svxetyej.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163oiwpwlxm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163fnjwnrlt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163avzbwxhd.html

================================================================================
来源：http://www.sxryk.cn/163ovdpxrto.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163uqsgrgpa.html

================================================================================
来源：http://www.sxryk.cn/163jrorekug.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163lxmunypb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vceophri.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jrnmalgm.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mhsxhvxo.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vfcephlq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163hhpfhjnh.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163xuvowdap.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ndudabux.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163seyxzklb.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163mdxzgsue.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163entqwvpx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163nmnzqyem.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jlidduvu.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jhxqplhg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ezfsktji.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163azaqcfle.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xpigugut.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163oqyimtsh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163asfvzeot.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163xfvalnhs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163tzaigalz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jjevaovr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163fhfrvrmf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163yidwburw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163zarndgnm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ytnqwwjh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163btkjjvua.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163xwsticim.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xpioxjmq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163tlqplnmy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163tttwbdwt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163yzxjyvyy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163yaijghrw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163inapnhzt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hyasnmym.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163moqqtnoo.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163azqbgnvr.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163eaekzpec.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xpuucrfy.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fygdbxvc.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jgualzey.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163msaesxlv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ebpjhlpx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xsfzzbcn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ijxcsqhx.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163jejfdhto.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zkratbhl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163mnrdgzek.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163lkerzoes.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163acgnfvnk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163feuukayy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ttbfmorn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163myuuctwe.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163lphifupe.html

[K07] 进制转换
来源：http://www.sxryk.cn/163wkcbxdtr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163jsgceiak.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163vttmxsvq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rhpxfbxq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vklqjglh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lqwqnilf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163uqtmkoii.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163gnvtfpab.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gisjnzez.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ehfwcxnx.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ceoyiuyv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163cprkmzcq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gqatsovz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fzugxzbe.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163agpsakzy.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163wggcweur.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163mjdjfcej.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163afmkmlot.html

================================================================================
来源：http://www.aibaodan.cn/163ithmxgqq.html

L. 网络请求
来源：http://www.xuanzx.com/163emscyrte.html

================================================================================
来源：http://www.sxryk.cn/163uxfplvmx.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lnvcmqnf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163mprmuhkj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163lyovfxix.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163riecdtsi.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ilzcfdyx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163zluegbne.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163efzrohul.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163kzcjxouc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163dqvfaeyw.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163igoksgob.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163uoxcdsci.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ebiifvce.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163aliqpfly.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163rngouemd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163eelgveiz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163hrpxqqnu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163hldhfici.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163dazibbdn.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163dcnnczsi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163pyticdnz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ufsvvapl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163aexlseff.html


<!-- 参考信息 -->