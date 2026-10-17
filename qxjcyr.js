外链999!wailian999！

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163fdtxpuuj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163hypysonn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163eolvfnye.html

Go:   err.Error()
来源：http://www.sxryk.cn/163fgphcvmp.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ceuqxgjq.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163wwbkknxd.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163uznpbekc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163gdagkwfy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163mtvyezlx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163fdpswsxl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163gfjjkbrp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ftiuutyw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163jrkqxxws.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jmgwfezw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ciuneyjy.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dfofrjtd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163dmlhzjrp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163vhtyzxvp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163spkkhihv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rdeodwir.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163dbakgiol.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ifzfkgva.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mvgeawmb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163xbsbmcpx.html

================================================================================
来源：http://www.sxryk.cn/163ypirdmcp.html

I. 正则表达式
来源：http://www.sxryk.cn/163sozchuvp.html

================================================================================
来源：http://www.xuanzx.com/163kxcyfelo.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ksdtprkh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163xofrqrxj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163xaovmnzq.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163erxbjvax.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fjefoxhz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163xxkiobrv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163nxdriybf.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jjdidbga.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163qrmdnnvp.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163qilyumpd.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163rcogorki.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163puefgrse.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163tsbkyzmn.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163qbcbmcac.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163iadvysrm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163gscgpbwz.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zxryjtpg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163atjqacah.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163rvnxufsr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163tesklzbg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163nzaftomo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163zuzfpkkz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ceqbcgfs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163bfqhting.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163qebcedgu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163kwnskopt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163kpicqmjb.html

[I04] 正则替换
来源：http://www.sxryk.cn/163cicwnjns.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163vazzuhni.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163snmwttzs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tlqoasqo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xcioyxoo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jefghops.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qkkjlzkp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163cojmonqv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163exbovoci.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163qfypjqqa.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ctqinhiz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163izdhmowf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nkhkimpq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163aydmhavi.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163tmdszeue.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163yhwrwjuj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163inuuwhrc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ehcgawpq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163vifoigxe.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hwvmbrak.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ljjxgnhn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163imcqsnzq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ghpbzxgn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163bvugpdic.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163uylexqxd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xplrpwjd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tpnykwyx.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163absytrsm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163juicjqef.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163vuchwjwt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163cnqsvszw.html

TS:   /error/gim
来源：http://www.sxryk.cn/163yhtyazcw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xdrhqsfl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163xzlzfann.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163aocvfxtq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163dagiqevs.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163yhkmbayp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163qkdtgpxw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163tcpeclqt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163grsulifp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gzboiocy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163esuyahac.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163cthowefj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163esbjctdy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163qpicujhh.html

================================================================================
来源：http://www.sxryk.cn/163bqbmviza.html

J. 日期与时间
来源：http://www.xuanzx.com/163mdobfudj.html

================================================================================
来源：http://www.xuanzx.com/163nqjfznun.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163rifjexot.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163emrpikfp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163adgmkoiu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zqfkyqkz.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jvrpupkh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ltjbbgnx.html

Go:   time.Now()
来源：http://www.sxryk.cn/163npbqrhor.html

Ruby: Time.now
来源：http://www.sxryk.cn/163xbvlqksu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163vbovymrs.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163cxoanrqb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163gjriycjo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163evwboevq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163kbwzmkks.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163baitfkjq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163xtqlepfc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163tipulqpa.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ukcbyclv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gbsrkden.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163txdeclxm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163teaokywr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163tzxynhtl.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rtacpoag.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fidswnjf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163tkaaamje.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163dfwmznsz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163omszmyeq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163usschrqu.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163bzdmebii.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ivszmira.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163emtfnpbh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163jewzmtps.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163adykkorb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163noazigej.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163tevbvdai.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163zlldeyzg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163uogcvahi.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163uuybatvd.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163egtyphry.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163npateqfu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vuwcdgcv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163miizwbdj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163efwnukjv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ajqxgtkf.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163sjhuldce.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163hcgsysyo.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163dxleysdn.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163benresrh.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163zdupknnc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163pjwdymfo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163icfnkctz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163hxrgdlpw.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ltxwkmcq.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163pshpxdcy.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163pblsoxod.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lhixpyfi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gzrvpimy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163spzxwyje.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163knqallnc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163gbvqzkde.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163mtunlvgh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163wcecbrmt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ypwjchak.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ugknjzaq.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163dqcyynvk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163bryjkddr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163dhnchthp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163wwxzqviv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pawiiabt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zyqvofvh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163lwokfinh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163seahnacz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163iemxfypp.html

[J09] 时区处理
来源：http://www.xuanzx.com/163wpwmykse.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163kqdshpdr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163xqbpvryo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163pdvlgxig.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vpxlagjs.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ddmqbwio.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163zdrzgdlv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163koqckjgi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163edfxogkx.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163hsvqkhen.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163upjxobkq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163svqeaoua.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163dfsbpydg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ixoihioh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163leruwqkr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ygayvovg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163xkzcbihq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163zrhjttsb.html

================================================================================
来源：http://www.xuanzx.com/163scsmajbs.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163vglamxjf.html

================================================================================
来源：http://www.sxryk.cn/163mqngtxkr.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163evgqpbgz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ukjcupzo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mqkmpvem.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ahxrelau.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jkbdaxsq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163zjajqkxj.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lczjiopp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163zodaflmg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163wbflwfty.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163stesruzx.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ypzjuzka.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163euoayqys.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rdlanirx.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rpxphxkx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163jyoznpcr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dghqnfee.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163erdhspiq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163wmhycovp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163hdztwlsf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163whjkgywp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163foglofnp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ktdbmsfw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ghipormc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ggbvmgrl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163sqdjxdar.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fulubrnc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163lpzmjnkf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jrqtkbdv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163zcelgcxw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163pfdthgfm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163oerexjuz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163sfkrvnvw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163tsuusoub.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hzivlxef.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ribyezkh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163wzgeyouz.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ffurlbpi.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fwffjrrw.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163dumorshy.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163upfssapu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163kwyjhjlf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ieslhnnz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163qdnlcazj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163cxpxrpfv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vzcqoiso.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163plmoovkw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ueipaqji.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163qzcjzdkh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ylfjtpyd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dhipuzpa.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163iqadrcnj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163nymspqng.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163znnwneio.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163fglcmokg.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163dljpnoda.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163lnapaimj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jezoakrh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lawugukz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nzyhpliu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jzapavtq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163pgmrwbeu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163aylebgtk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163rmaulfva.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163jxutmeud.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163eiihtqyx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163rrwwbpev.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vsxzcmjg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163urhqmayg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163wehpjeeb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ppzytiyd.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ndnkpezv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163esfqzvxs.html

================================================================================
来源：http://www.aibaodan.cn/163bsrbphxu.html

L. 网络请求
来源：http://www.xuanzx.com/163gvwbtpua.html

================================================================================
来源：http://www.sxryk.cn/163odkiende.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163qawbswxo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163zztwjgee.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zlwneqph.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163wzpleuaz.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163nsrmuaqi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163vqcdqrxf.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163lwkhplqs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163gfozuddg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163kefjjsdf.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ufmmzvne.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vxdwhbiw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163qzawyvgs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mdblmnnj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cpjzfrxm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163elwddoik.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163cwjfmlhu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163nymigbry.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163caerewtw.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163kkfwcylm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163sbtszrha.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163kgxvytir.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mhwyfpvj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uakjmerc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163glsljjvv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163yuxxrkcw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163uglmzyzi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163tbzgwjor.html

[L04] 设置超时
来源：http://www.sxryk.cn/163klhlqrzn.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163xksrdtgc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ulxhpddw.html


<!-- 参考信息 -->