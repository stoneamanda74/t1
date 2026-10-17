外链999!wailian999！

[H07] 断言
来源：http://www.xuanzx.com/163khbkkegf.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163gujztbqa.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163azshuxuq.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163crrhjfgn.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dkbtwkxa.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163tdtoeyyi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163eluqtezv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163mwfpczfz.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163xzqwtopc.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163clmqtuxv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163lurndqoy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163bzcacuwm.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163jkvqniru.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163nthfieou.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163fklaxslc.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163tpjoncew.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163gdxxrunz.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163sfipjhip.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163imvblwet.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163jdgweqbq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163rretvexq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163rhcwtape.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163dplidrhq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163cdeypmdk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163feyjkusq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163sbnzvasi.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163czbqigrq.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163xqibnung.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163kmisjsma.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163wxhvzzsf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163sghfpllo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ohqralxc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163nydpbvea.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ftbiolyr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163omkpkxgs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163tsmpddxf.html

================================================================================
来源：http://www.aibaodan.cn/163omjyxzvy.html

I. 正则表达式
来源：http://www.xuanzx.com/163rgwmhkrp.html

================================================================================
来源：http://www.sxryk.cn/163sdjlieoz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nfdkdkqv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163uwwusctf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163awnzavgz.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qitwopky.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163urhxbzkq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ojktkiih.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mjjzdfxe.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163zdlhjvqo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163weeyrdyd.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163qvmlexlt.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163clnbxaae.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163utprkqdg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163fhpcozgs.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xlbndlpy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163mlcsxknq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163pplxsnyx.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163wnrjcitn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163wrorphlp.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163lhhigpfo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163wpiczaoo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ycrvmkeh.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jinpavoa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163cyqmxzah.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163dyofzkik.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163wdshgsaw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163pthgxtfl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163hchkpcsk.html

[I04] 正则替换
来源：http://www.sxryk.cn/163fqyzbiby.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163igqfgvlm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163epgyywkl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163yunoypof.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ykkdortj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163laelnfen.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163imwykthk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163igapldnn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163sqemoltj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163kgpsipev.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163fmohhrat.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xtguvsds.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ojcrniln.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jufjvbds.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163xeskeeps.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163pymqbrbf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sbgbsdfh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163usgvmeud.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163zxmwszdn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tdchipet.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163tibryijj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rwjvhayt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163yvcnnvcv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163fzyhilgy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163tybhrxuz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163wrfebwgh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163spblektu.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163rxelwivt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163lmhvhkyg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163hcpyafxn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ugmvmego.html

TS:   /error/gim
来源：http://www.xuanzx.com/163yyrbtvui.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gknerrnw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163oqkoisbs.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163anidkcac.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163gwiqowdu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163msevjyqx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ntuycowt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lakczjze.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lylioghu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vlvziaej.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163uuweyvwa.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163xdygltei.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163aexapxsf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163rdzvbooc.html

================================================================================
来源：http://www.sxryk.cn/163tqbppvot.html

J. 日期与时间
来源：http://www.sxryk.cn/163qqfbinsw.html

================================================================================
来源：http://www.sxryk.cn/163prmsknoj.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163zsrnnhqx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ipznwobt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163scgnirsn.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163engqaque.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163bodsrufq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163nomqqwsg.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zotkffvi.html

Ruby: Time.now
来源：http://www.sxryk.cn/163mlvfngul.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163xrinvmos.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163jwuibftr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pazogkwt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mpqpckic.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163nhmclecn.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163czyhquri.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163zjkgnnbi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163xafrseda.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163uczrociy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163nbdgzrcr.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ndvkifre.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163dxmhfuru.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163okrczjqb.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zwbjskdn.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jnmomldh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163nqnxmqjk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163zxvnxrlf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fxqqqqhl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163spgfhgfo.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163sjchhfjw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163qrgviauh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163jzprpmcl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xxbxbaid.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163tmtpfyui.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163fndanmcy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xjjeophd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xafvlgil.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ahfjhdzu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163naeudkll.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163oghqoimt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163kvbrnhca.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vldjffoh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lyjutybh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163iiejrhkr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163zbzemzme.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ahgfkdxw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163fcitxlqc.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163izxeplbe.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163plsihrhf.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163leoeuzpg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163olrmrred.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163gadpjpwb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163bsygecwd.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ebhttjac.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163hcamldzl.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163citsimey.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163nsdpkdwc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ajehyyus.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ruaxndsc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fllxxmft.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163luwkwerc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163riqvtzuw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163neeapuym.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ldnyklav.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163agtrehid.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163cyosmbma.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163pyaqdces.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163tobbuajo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163bsfeynui.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163xwzhzflo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163raizebjx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163scsocqvg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ioirdadz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163nvaduklu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163xirtecds.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163iijnmghp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163vkyeoybv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163thffmduy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kjeqdazl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163caybeqmp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163xwakoruj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ibkkdrrj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163vmydahpo.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ouhoieas.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163fcwgpimz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ryhvppul.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163tdtkxthd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163aofrtmff.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163tklhemgb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163dnnpkgfb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163jnfssbzv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163xdaetyoy.html

================================================================================
来源：http://www.xuanzx.com/163mglohmyu.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dfywayxd.html

================================================================================
来源：http://www.aibaodan.cn/163gcndfldb.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rudiihfc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163gfyowcvb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ihwrpeyq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pqeellcf.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ozbsjflz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163aypxsvhp.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163zimyrjvp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163pxewlwya.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ydgpygyh.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163zyqsmuep.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163meepbrlp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163sfvxhkzt.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wesldary.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163pxwehhfe.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ilvhovwz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xgcekkfg.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163onyryhem.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163btndzthf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ggtuiuyf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163bcxdqhew.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kzsvmkbn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163jiewxxgp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163jsxubvyf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163pxacmcpp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xfpkqbjc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163jxpdzarr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163zmarhdaa.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163kijxybeo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163iotwleed.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163hdzczuvb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163iesvnfdo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163oletiwsr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163mbidsldt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yfayhofr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163vhkarrsa.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163bczaizwm.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163umchbrte.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163bnnbnmbg.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163wxojurix.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dibvpdke.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vrrzczxa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163sknomatm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163lqxgjpyu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163eoxyswhh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163tgfeklos.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163xtzebdxe.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163nmjvbuox.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163jhujllak.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ciqbthmn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163tlhqnwjo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163lcxpjnnx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163wyldwypu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163vlpyiynv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163mwxdausp.html

[K07] 进制转换
来源：http://www.sxryk.cn/163voupjfsh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163lcaceavb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ghrclcaf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163owhzyyyk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ucaycgik.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ojeruvgj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wiytakyo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163euldjkce.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163wpsiwvzf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163kzfeiwqc.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163pzbaatns.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163viizcpgz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fnhhjkqw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jyrdugil.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163xjupgyuf.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163bsjewlmp.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163xxnmjlax.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163hayzjinq.html

================================================================================
来源：http://www.sxryk.cn/163grsmvimy.html

L. 网络请求
来源：http://www.sxryk.cn/163lwxnvfry.html

================================================================================
来源：http://www.xuanzx.com/163swypspjx.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ikhobjuq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ndtuztoc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163kxfqggtz.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163gapyuozz.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163suzykohn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gfeybptf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163wmlzuyeh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163jwglmtfx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163uecudpvj.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163eqeztshg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163luarltub.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163bcinkoeq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fupceqcw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wfpkpbok.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163jdygwjbl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163yakjjdis.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xlceltro.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163llnbncpr.html


<!-- 参考信息 -->