外链999!wailian999！

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163qotxkznu.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lrqiipbq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163egmcoucz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163jtzuklwv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163cfftqusf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163zzspbhsv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163lullrbbs.html

Go:   err.Error()
来源：http://www.sxryk.cn/163dzforxxw.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163qklurxvw.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163uboaqovq.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163mmlccjme.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163itlukjkv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163okzoufcd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163piaxfrag.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163kaxniukl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ugfyzwbd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163eflxsupk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163dxipplzp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163rtdtdduf.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163alytdwqx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163kyjxmsda.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163nbxonahr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163truaigdl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ioedwgaz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163kjhdewvv.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163wckvrlpq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163guveppvg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ngtzyxei.html

================================================================================
来源：http://www.aibaodan.cn/163yvasqape.html

I. 正则表达式
来源：http://www.sxryk.cn/163ovqqekve.html

================================================================================
来源：http://www.xuanzx.com/163knpgsink.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163vpdehqsu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163xzeolycf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163yzvruyff.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163brtgvbtz.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fiovujer.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163bgxeclev.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163lmifuwgz.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163jzbkfnfp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163qvkqbytr.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163oeecbcyo.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xzfopuoy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xzgbcetk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ztdxliwm.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163aguoeawi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163xojogyqn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163qklcibku.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163wygruqje.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163dppqtuqz.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163gcwjiprg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ynrohzqo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163kkgtasyw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163vmymriwj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ymmhzgsf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163qchlknqf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163tfvcxxej.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163umigirbj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163euecxrgr.html

[I04] 正则替换
来源：http://www.xuanzx.com/163hmyncmvg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163fbumkdmw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rzzpqthi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163emanhwja.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jalfpjse.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163afptxpuw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163loxafqay.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163kipgsitd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163emfopmsx.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163avfdgyko.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163zrpluoca.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163lwdmiutu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hggauodl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ookevmdz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163bklxrlic.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163sxvdlpvb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163euqohebq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163mpqqfdag.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163vxvrgxdc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rvgzolpu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163gkjzuosu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163iikkskfk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rtaxilwa.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163kftbzwgk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ageyamjk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163muvihggy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163koocpruy.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163tdffunad.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163gcdmalbl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163gdzxchcu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163qlmlwpmj.html

TS:   /error/gim
来源：http://www.xuanzx.com/163hhkingpy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163xlwragam.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ipmfirvn.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163jmituauo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kfcxdjcm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163vvojpjrq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ynnlqrut.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163mjfkchiy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163lhlpeotb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zntnpaft.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ihhdaynj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163incfpbgk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163gvzwqnle.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163hugghkkd.html

================================================================================
来源：http://www.sxryk.cn/163qevbupaz.html

J. 日期与时间
来源：http://www.xuanzx.com/163hdcjqtkv.html

================================================================================
来源：http://www.aibaodan.cn/163zdffqxsb.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ukwhlnnv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dwtbzvwn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lhinqndn.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hksjqyae.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163bobvspkm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163rbsyjfws.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163cjoqqbmn.html

Ruby: Time.now
来源：http://www.xuanzx.com/163sewzbbur.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163cxujwzct.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163viecbkrp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tswvffwh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mhakjani.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ybirhkds.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163pgzyxosu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163soyskxfv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163cxzrwtmm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rxfxwcnt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ddrfxhei.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163citrxzud.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163tyqtcffd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163jdkyjjej.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lctnwpta.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hpckghkg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163coajwvep.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163pnioyhgy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mxjjmkyr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gdvlzaev.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163wktvycmp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163vumsrjxs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163arppogpg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163dfecyyta.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163oqvquvxl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ckovxtgk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163brgsesrf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163rqycxebx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ulyfmver.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163zubrxwey.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163fhfpxpuy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163wxhnnrur.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163atgihdmf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tnlwrioc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163odxxwssk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163qbzokbbx.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163uryamwto.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ybpzsatj.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163gvfcrwbd.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163uhtiomvv.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163smvxxghh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163wpccpnuu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163zolbypep.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163buixgsqs.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163mewhotxr.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163jsgblopr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xhqrbqrt.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163uraldeal.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163awozrmlr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163oianxocv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sngmgqto.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163nsrqngkj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163vdathazz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163jmbvscqn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vumperzq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ahidaonv.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163skolmjrd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163hehhdmwj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163edgmwwpf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ciorpvou.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163wzyiegmi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163gfbavgmy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163sqobosti.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163hwlfmpxp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163lebftrzv.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vsoobgkq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163atobpxjn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163xqkgivqo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xfepzaql.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kelvadsj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163onwgqdqs.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163nrkylcpm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163kxkkbsro.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163npgzougk.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ndgymupi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163imrahgqg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163jxfvjgin.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163mqlqyycw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ilrazrak.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163cdytjvmx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163hxwyunhd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163cptpjexu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ppcvuuwx.html

================================================================================
来源：http://www.xuanzx.com/163zxcffjmm.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dghxccaa.html

================================================================================
来源：http://www.aibaodan.cn/163nvtjtbyk.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163mkpqeohj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jaskboua.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gpmowlzz.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mmpbumgi.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gqqrppmr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163cdljfumu.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163okakpmbu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163sokaczfc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163isgiupbg.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mbywixpu.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163okyqhhii.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163jpocerhn.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163pqoqhtyv.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163oggzodez.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163pjirwoyw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163eqssylvq.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163izwzfihw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163hkzuacub.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163gwbjzsum.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163llkfyyng.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163losnncax.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uqkdecso.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163grxqiqyd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163nttmeobp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163eeazwdsr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fqhtqbms.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163oyvirjgp.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163odvcbhyo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163dutebhnn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163nvzxsbdh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163yrbtkcpe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163miqbmavy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163jtgwcobw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vlaoridv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163mvxtrffi.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163jbsdwswf.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163jhjzorym.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163lgezwwjp.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163igznrqis.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vrprzymn.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163uwiqasep.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163cihbkftk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163spcdxwmb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ojpmhdik.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163kaaqiuxg.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163tieyypww.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ktnjpafl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163hbrhzndx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mztcluml.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hctszrcc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163oxuvzfbz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ttwsqlwt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163zzmlizoc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163pqmetofv.html

[K07] 进制转换
来源：http://www.sxryk.cn/163epatnwxx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163lmzsjgcs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163tybbbnfc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wsvwuijg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qiicphtm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163irgoxfdm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163abfeiiyf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vdmvgqlm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163mrvgrrxd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163xvhcpakq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163kgiuzdhz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163aovlbxeb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vpyifgay.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163effgjgek.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dkfwxtsn.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163tzqhyyvu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163nvncxvmu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ufowhndc.html

================================================================================
来源：http://www.xuanzx.com/163sebyrcmg.html

L. 网络请求
来源：http://www.xuanzx.com/163hsllxvri.html

================================================================================
来源：http://www.sxryk.cn/163tjwrgefq.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163szddmosf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lvigtcwi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163bpazcytv.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163xtpobfpx.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163avhosjqq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163bbswmsws.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163rtpiplax.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163rollmyxf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163rknxyobi.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163kneioebp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163pxymajpu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163bkblkbfg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hmzephjt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163idygjylb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163yaruxoqn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ysnoycct.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163kdclgndh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163zabtlxyo.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163todjrwvk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163mgmygjpm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ljghoezz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zjulkjch.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hlmazhgk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163wvzshziw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163dzktlgye.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qijreeme.html


<!-- 参考信息 -->