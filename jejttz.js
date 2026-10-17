外链999!wailian999！

[H07] 断言
来源：http://www.aibaodan.cn/163sshljscz.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163lbshfmrz.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163sqtrvxas.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ldamhqmj.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hcxqisph.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163khhnzubm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163djcpslmy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163fhoweguc.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163esyilkuv.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163kpjqisdt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ulvlfpkw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163qcpfnipo.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163whjciqyo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qtlsjvdc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163hvsftmvi.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163zxssoyjk.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qotryeel.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163hpjlofhd.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163abixsqyy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163wrzkploo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ubumvpoz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163tloukfhy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163uqcgivrs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163vinbtbst.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ovckrnbu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163cgvnnnwo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163nonmfdtw.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163slylqzwy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163enykuyxs.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163oplhkmsn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tbfrrwiu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ivllwhnl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163emcfbjll.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163toxnzlzc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163qblmipuq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163bajfgfsb.html

================================================================================
来源：http://www.xuanzx.com/163zywfgjpr.html

I. 正则表达式
来源：http://www.aibaodan.cn/163wpmuzemr.html

================================================================================
来源：http://www.xuanzx.com/163nffxkfmc.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163vvogdiym.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ujljxxvx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163hxuvlxbt.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pbnvtuyf.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163kqrpgfzr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163hixtugqg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163sxrrimlv.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163pallsnap.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163dtwruqex.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163nbsyhgkg.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163oxcfdrvw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163qxptymnm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zziftgnc.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163owztdzvt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163hnwgbibv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ixpqkfod.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163nrkbtlsd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163jpfrhrwk.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163wqeralzn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163qdvticyc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163fcfngiye.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163orqksytu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ritxxsog.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163diojeayi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163jakcgidn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163cahymawh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163xxocdljc.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163jhvfznxg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ubmdxanx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tkxkotbi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zatzujry.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163riduvmlm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163srezvzon.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qxlwpdoc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163qpwugiel.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163xfdeahit.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163zzqavmkm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163akkjtqds.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ogrkbduh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gfhevmnr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ssnuzajh.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163qxbmmazp.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163iklhmijp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ntyqxmbf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163qejbyzit.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163swwiibyy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gtsujipo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163omvqitli.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163edvoyxkv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163cinyfmhb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163outvycen.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163lfmttmyj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163fyerdjzm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hgxtwlib.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vubnfwga.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163bewujblh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163nezhpnox.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163rfjqfmqv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163wzpxgere.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gorsghen.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163enlgtuqp.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163iyyqjmnc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163yapjnarz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163wbignskm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ajhssbkn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lfccjson.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mkrrjdge.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163usbybhcw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163xumnoiji.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ezqwwctm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163jpcgnotx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163dzmpjbwc.html

================================================================================
来源：http://www.xuanzx.com/163bxlqlvtv.html

J. 日期与时间
来源：http://www.xuanzx.com/163lylifptz.html

================================================================================
来源：http://www.sxryk.cn/163tuherbdo.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163fnexetmi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163iowbkiaf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ucbtycyv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jaxbcckq.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ualzrcta.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163xlxgkwha.html

Go:   time.Now()
来源：http://www.sxryk.cn/163txijkyjn.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163tswkpxyu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163xjmlpzla.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163lprautwk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163glffalnc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rcpxmhdh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ipimatcv.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163dwiwdkmx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163abvuupfv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163zzfaekkw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vkefzdgr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163bwrolnml.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163wnljmhdk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163hdunbhma.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163axvmorja.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hbcmcfqp.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163potsjkys.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163csiyvzxj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163imotoeql.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163hxugozsm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163nrxdpgtz.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ivjbgzbq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163jodojdsc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163vjfdllpp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163blojtxsa.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163stewujoy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163clqeqzgr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163fbxjnvtj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163enqsnxlr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163abdastcz.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163sjmuwvon.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163caxkeijj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163gkjjdtve.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tcrnldza.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mercaobl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163oyivdnhg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dzqujmaa.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ytqnipbl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ijxzxrby.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163kbjhjvyr.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zyfyffsq.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163mgqiblqa.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163jjqwzrrx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hldpcddm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163twfmpjxp.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163jfhgknbm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163mhgdwemt.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163kqttingn.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163uiafwkdi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vkykaafo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163anlpczjs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ypjjpmlj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xgjdbzvg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163mvdymbuq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163okpnrecj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ddgbcotu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uexhsgwd.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mzgujnwp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163jqepdago.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163cmzhuegh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163tzbaiyqw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163bvzkrqec.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163jslkhsvz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163nrmotazd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163sspdluqg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vqguymau.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163eofbwsxv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163balffchw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163aqfymngs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163cylloirw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163njabfhvx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qnauwqma.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163bdbamxeg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163iqvfitdv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163cuappjzm.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ycgpepxj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163biswetsq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163aqkxpcdt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163lxapavim.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163crikazza.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163vklayvtp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163nznhvvtb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163kjvvwlrq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163dyqpvslo.html

================================================================================
来源：http://www.sxryk.cn/163ajyyzjud.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163slrtbjuz.html

================================================================================
来源：http://www.sxryk.cn/163bajpuhhm.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163yqkskpti.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ujddxyfk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163egzxzxgc.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nlhquqwz.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163spgjjuau.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163tozpcxov.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163kpsyokas.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163mgoisywy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163glfccxow.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jssisaau.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mjtdmqnm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163adfeqpzh.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163pegviyse.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lqazpebv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163sfqtgjky.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pggxlqqg.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163sbghzqrf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163gldgobzp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163pyzuyqpp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tzvoltqj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ypatfptt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hylzpavp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ccwobrpc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163bejfxieo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163rxnyckwp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163exfcwivh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163avclkwjs.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163mqftidyx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163krewlzrd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163gxhsvtzs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yzzmpuux.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ubpbawno.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163vnmibpfh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cuveagpx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163nwkmryrm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163qrdoiyhe.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163mtlqkkwg.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ycoiqzdq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xjspqvdd.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ziwilhiq.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163oyslqyor.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163apinslnc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163rguctkol.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163lqrwulcr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163npkjoqaj.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163lhagllxq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163iahontqx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ichqaigw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163cvjjrsjf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tukeuext.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ukabfmny.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163hjwdimsq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163mubdactf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zbtjqium.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163esorvwoc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163mctebzoa.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163qdslwopb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nyzcoyyl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pxxnjxht.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163vrgdnuhh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163qbnkgkaj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163pbryxgay.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ndmdexnd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163prufvdws.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163pfaicpil.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163yqvbakub.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kmrgefhc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163znrridjl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163tjetymof.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163wphwqysw.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163jbhwhlyk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ftbwclqt.html

================================================================================
来源：http://www.xuanzx.com/163errbtoae.html

L. 网络请求
来源：http://www.aibaodan.cn/163emdnhxgb.html

================================================================================
来源：http://www.aibaodan.cn/163rlzduzrr.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163gewhwtjd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163zotjouxh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163tqityqap.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163laapejpy.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163jktnikjs.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163caemfurw.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ymoevxve.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163crainehe.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163tbcnhhxh.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163hxoteoke.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163idellblr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ivzkvqxt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cicumwwq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zhnjxavk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163atfbavuk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163jxlxuoyh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163xbadkxwn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163rslrfmpn.html


<!-- 参考信息 -->