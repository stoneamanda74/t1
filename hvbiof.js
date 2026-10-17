外链999!wailian999！

[H07] 断言
来源：http://www.aibaodan.cn/163ertsxrgl.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163liqbnrzj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163gxnqezcq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fzpoeclb.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qavboaie.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163bkqgmwnv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163aaylvwwz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ztxgqdwp.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163fijjfihx.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163wooctaoq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163tocfjffm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vvorahgc.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163vgbttelx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163kfngmsls.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163lagynecd.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163sxqimqtl.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163zheuyprs.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163fufvggqy.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163apexcjoh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163rmowmffb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163yxluyehn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163zypyeguz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ythgximz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163bcjduqyk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163hfkzbgxy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163wisfwlvf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bvdqdqwq.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163gmmihfhs.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163gkmwpaey.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163rptluoat.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ohiydgeb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163czyuuarb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163nkohypfp.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163wooybxwl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163sliaelel.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163apjppkwl.html

================================================================================
来源：http://www.aibaodan.cn/163hfxyshai.html

I. 正则表达式
来源：http://www.xuanzx.com/163mpdhspyw.html

================================================================================
来源：http://www.xuanzx.com/163oadwaclk.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163guwpzlol.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163iqrbyaoy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163xuxzcaxw.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163stfhtimk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163cyhdtmwy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163sgujhuti.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163frwvqcbq.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163gmxwpgkr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wovxcwpw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163qimkpyri.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fjouthxo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163tiqpvvln.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163bupfjtrb.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163airulfyt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163opkfrior.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163zrfzzxzd.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hvuuoand.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ajilfzhc.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163xyhzucby.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163zlqsrmzq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163umroikbh.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163cstmesvy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gdhttmlb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ehmqytyk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163kdnhazjp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163cvlrftcg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163zqurduci.html

[I04] 正则替换
来源：http://www.sxryk.cn/163bxhdeosm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163jcwrwsjc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ncifngrb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sacxiybx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gzscnnwy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163gpefkejl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163yndprxlj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ngbpaeov.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163sztxvxsa.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163fcfqtziv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163qclxpzpx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163zykxfbfd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163viuuoasi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vvadcrii.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ydjqxgkz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163edffwczt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dasspovp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163hlwacqhl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163udsuazpb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ihikswvt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163logkximx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gkpepfnf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pxokvaoe.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163gjqqoflx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163hvgmiqfj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163tbhrpxth.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163niuprhqp.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163pgalknlu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163czvoksxf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163xsoyzgqq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163mpxubglv.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163yxoucmto.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163mgsedsat.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ewywlrri.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qrkcsmtm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163xequvmio.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163norpcueu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163gcoqdhiq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lljjksom.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xgujnllt.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wvwedqyl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163qeavnigy.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163pfgjwbaj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163onbzzvqi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163otxsexuh.html

================================================================================
来源：http://www.xuanzx.com/163pxsfjbkf.html

J. 日期与时间
来源：http://www.sxryk.cn/163zxlpdtzv.html

================================================================================
来源：http://www.xuanzx.com/163vuzrrhfj.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ebtxllgu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163najahfig.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163tkdbgwfr.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163celoqstd.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163atjkcvol.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163savofmfh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163pcafseto.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rhxppbnd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ofdreyvb.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163hwubohpa.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163tyzayzxn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hmfpbikn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163xunujyxs.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hxnwgxpp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163puytrxfh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163qtztblxm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wtmuuvzp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163voaoiavc.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163unjhlrsv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163jcfgdomx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163vplunjhg.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xxbhzxww.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163pgizuhkj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163kurqtors.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ygneqpgk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163jtiemnjl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163tniddjcw.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163crqsdhon.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163wqkgwlap.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163eiczoyme.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163pebwgibi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163gejueppd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163vefdhzpj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163qkxddkbm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163baludogf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163navojzag.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163aojsocav.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163udyqchfq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163hhkwshwc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zmzauugg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zolapfpo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163lhhtizkk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163lnybmypi.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163qkaajwgv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163yihhxqav.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163dwuwkxxf.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163akhezcss.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163sxjdzyam.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163salmzihu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ykkstcax.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ndjfqiqv.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ernmibfu.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163arjedbxs.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163lzuznadf.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163hahgxenn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zsefddqs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163fandzard.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163pbukrfrw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ajbnoish.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163subzzjfa.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163gxbdgiis.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pkloanjp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zyxmjtpm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163wftdqxxq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163qghthvfg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163whxdokeb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163etsbstxi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163upvisqdo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163nfmrflnh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163kqgdadmc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163iouhixdv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163nublpjon.html

[J09] 时区处理
来源：http://www.xuanzx.com/163gunrxhid.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ppbedowr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163qqgphwbs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lgoeztxk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ycyyvpxs.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163tjgxxtce.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163wnotwlvd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163oyjjbcpq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163knpyelul.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163fzqaemlg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163mfktjhvj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163egaoaout.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163oapgaaif.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163tsjyrmds.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163lgnhrvzk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163nhkymihn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163tjpcdpji.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163gvhreycv.html

================================================================================
来源：http://www.xuanzx.com/163olefpaaw.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163zjozdtob.html

================================================================================
来源：http://www.xuanzx.com/163arlxzhcb.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163cjyqxxoz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wpgyuznh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163iwkjeqgj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163umqtilzd.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hwcohgsc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163kxpqlnra.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163citmikyg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ettxibiq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163doqjdwva.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ajyxfnvu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163bmtpydnx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163nqeqifzj.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xnugvogt.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fftwpqpp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163widhuoki.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163etrqgxrn.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163aqprnxxy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163kzqnxfem.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163oerbtetp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163sssoxvpx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163yiwwopml.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uxfjufjx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jcafxzbu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163iikpatof.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163moqfzufv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163yaqochcc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163pkfdenbf.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163gcsvvpxl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163rryhuqgs.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163onaehyoj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vnybuuli.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ugbcfjwt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163tlavbxwc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ydfrquab.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163iqpglrks.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163mbhcimzy.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163siyqtcin.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163wqdhalwa.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163iffuebyt.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nxneomlb.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163tevkwbvs.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163gqhisqpe.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163trrzcjob.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163wftkfftp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163lhrlrfjv.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163iejkgfks.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hqfizvlw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163bhcgijbk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pbtyttft.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ealwdazl.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163hredssvo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163fvwhomor.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163adncvzlt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163pvmrxtck.html

[K07] 进制转换
来源：http://www.sxryk.cn/163mxizxydw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163uglteley.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nvcgexrw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xuqvrbzg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fsmgatlz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163hucpepai.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ukbycjwo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163antnibvd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163nhkcvzgd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163nytmnkmw.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ajzxykmp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163xephyvgi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nwvdfdws.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mhixpzsr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163iibwwaot.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163lcyhohbe.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cxjpyisr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qgoiooco.html

================================================================================
来源：http://www.sxryk.cn/163cergajcp.html

L. 网络请求
来源：http://www.xuanzx.com/163hssrgxlw.html

================================================================================
来源：http://www.aibaodan.cn/163colwjiab.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163tyossyhv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163rqnrnooa.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163qvrmoylr.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163stzoctzl.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163kixmzqne.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163iwezichw.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163cuoeysst.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163wvqffugs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163vmiyjpqp.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163xcnhbtty.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163netrmwim.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163wfqhcnao.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jghsokyn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tskducuj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163xkflpxty.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gvapaxwd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163hmfcamhj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tsxwulsw.html


<!-- 参考信息 -->