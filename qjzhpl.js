外链999!wailian999！

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163wyvgfism.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163nsuknliv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wckpamrj.html

Go:   err.Error()
来源：http://www.xuanzx.com/163pgyyqhzu.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ehjrbdix.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ukopulpi.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163qvgfbdxc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163wyynzdms.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163upbenybn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163tthpaeiq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163omlnfptx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163xiqluzgw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163pbwkcfjf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jmoufcwf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163awtvbfok.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163hjtvcmhu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163hbiejxiz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jrhqwayb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163hrzyyobe.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tnftxtnk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163czhpnpjc.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163jibrlbde.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163yhooknvj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163cnjkztpb.html

================================================================================
来源：http://www.sxryk.cn/163dlxkzvzs.html

I. 正则表达式
来源：http://www.sxryk.cn/163rkvzswrp.html

================================================================================
来源：http://www.aibaodan.cn/163jpdhfanq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163kmgtmjqm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163iqyoladv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pchqwqfq.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ztcrgeoj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xohddion.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163wzzlzpbw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163qocrzlvy.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163etqsbxrg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163fdfkhvdk.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163nopuszzc.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xhglrwrl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163icpbqzrq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163rtukvvck.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163dhhcednt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163yzlylsmw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163pkcacxwp.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ztmvjljk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ytbiliwa.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163vzzzusbg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163alncdbxg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163pcjmiykv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163exakuhsg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163uaozmktk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163pwciynyb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163bsarrxar.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163qrebifvl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163fvrccdaa.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xxuyzlxf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163thxqmimv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163irlsoayx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sijpmmdf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163kqrxwmyw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163xxhwgaso.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163zmyqabvq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163mnivdvpw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163waoxkkhv.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163gijkfgri.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163dmpvnwqv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163mfydaflq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163akqwynse.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cqnbxvsj.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163vockozjk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163rctietgj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163btrzpzjs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163wulcbluw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163eidbmbto.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ecuetxlj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163hllmyeii.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163upgvpndc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gtawwbls.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163anpreqjb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163gbthgpvr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163dewupezp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jjkxixjb.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163hcbislqm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163oqraobcx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163akfujswz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jberslzm.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163awpuwkax.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163cmwllzih.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163hiizhrcw.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163dnuopmtf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163xorjjjej.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163dyhgftny.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163jmmpbvov.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hudbgglx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mosplncv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163svidzwyx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163oewkgolz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163vfkreupb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163euztpktf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163solzhtsd.html

================================================================================
来源：http://www.aibaodan.cn/163jkijuaqf.html

J. 日期与时间
来源：http://www.xuanzx.com/163mwbphetb.html

================================================================================
来源：http://www.aibaodan.cn/163ntexhgnk.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163xlnisshm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163bivoqeem.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163akqbmahu.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nzbrmjds.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gnjpjeei.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163krtlhsvw.html

Go:   time.Now()
来源：http://www.sxryk.cn/163mctaktea.html

Ruby: Time.now
来源：http://www.sxryk.cn/163lftummni.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163cjguxzic.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163apnslhyl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mtpsfgvl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163spahkkfd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ujydexah.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163mkhpwxzd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163cywozexb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163lckubbue.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ygtnsepj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163rctqrfsf.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163hbsbejto.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163fvcvmhop.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163kthymuar.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mydfsmyv.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qjsaszrq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gpyvgbqu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163bbgqcpkt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163rqkqwydw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163noksifaw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163imolsjwi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163tyfjiehp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163vgjozlsn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vwundcut.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163gziuucep.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163hucnezfj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163vomquraf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163pimaelgi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163elfcajrs.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qrmwngua.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163pbieygmj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163phnxcdwe.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163viekplcr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163clxzdgnk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163aqpssevs.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163winbwtbo.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163zjqpspal.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zxttirnf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163otwttkdu.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163rmchroeh.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163cflpxoqu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163qejoejfh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163bcmadzod.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ttajzcyt.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zrsjgvcy.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163dwdlyqvd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163bsaldxuh.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163nceeonzp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163namnpilh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163clyringw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163appnokib.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163adwazamr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163hrteytqr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163fezinpfn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iwiuslse.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wqlpjrkj.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163eatcelch.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163wtdppjvn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163rrogprwo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163izmlapbh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163peetjjoj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xfvduajd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163nbvbwibh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163fhupncnz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163eubnhewc.html

[J09] 时区处理
来源：http://www.xuanzx.com/163llrbaqip.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xxokxvdl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163nllqwdvy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ussscxgs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lauafkug.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jqhtbvmi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163hgxkzqdp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163dfxsnvpz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163sjepbeiw.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163jqlkmurx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163dnjqsily.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163dxpnxefc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163kqesvqti.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163sccisisd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163cyavciog.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zefhozcv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163iqdzrxuh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163fgvlycvs.html

================================================================================
来源：http://www.xuanzx.com/163gqdybgzy.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mqobsawn.html

================================================================================
来源：http://www.xuanzx.com/163fyvdsgar.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163abdosrhp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163zcmtmhwz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qhkckzeg.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ugkluark.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bvklmsfq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163jhuklhwi.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163aongprgg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163zwvoldhe.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163pvzftgwk.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163lgiviqek.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ugqjnmvr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ylcujihg.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yvnvjiuw.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ysppgoyr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163upblqhnz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163pbhdxryj.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163lekijboi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163oycolhig.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163texoqbai.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163cakpkhnp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ftspzulm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jszbitgm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163unuawldi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163lgnzuxqs.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fbugrlrx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163rpxohfkg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163jwatrmvh.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163rtbfepwc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ryasmcqb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163chogrgwh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163iiprnpzs.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nhnoaows.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163iqxcrveh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163skrugpkm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163djhtivrk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163lqyfrtpb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163lizwmhyj.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ibtucmjt.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163znzksvzb.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mxhcqgcn.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fcwwzgnj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163yqjaiiks.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ukjcjxde.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163wajhbwbg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163nmciaylo.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163imndjitw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163wxrmlptw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163zjjskuow.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kwfcokox.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163plvaohez.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ojfrgqrg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163xcxjftkq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163vjakzhsx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163gtyeokbk.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163kwtllryv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163vndxlymi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163hbjtxbpt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163msjqgzdf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vkhlmvmr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wxwkqoxs.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bpftomil.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163gwojxpuw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163jnxynurb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ixfkuvfi.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163kcaflpue.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163dahdtkzo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cosduaqd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kujltrgr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163kazvppgr.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163alxmvwss.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163sxdokldq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bzbwipwk.html

================================================================================
来源：http://www.aibaodan.cn/163uakirefr.html

L. 网络请求
来源：http://www.xuanzx.com/163pfpttvff.html

================================================================================
来源：http://www.sxryk.cn/163tdbtksel.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163vrczapdk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163rzzbiwce.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163yhsyxzry.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163asfdfhvn.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ujruruox.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163tvhovhag.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nsytztsc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ghwfjxvy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163kuvzsyjh.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163meuszhzq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163vhnluwvi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mpdscabu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bundehzx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nwjhnxmp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163qejdyyar.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xjvbvkmg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163jafortie.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163orhtohmt.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163rifjldbm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ucxrsrbu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xnrrfynw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163owjhotao.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163itdxuozu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mbmyriiq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163nnjegaob.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163lhxryrds.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163uydngzqb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163dczcadlo.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163tnqsbico.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163cpucymnc.html


<!-- 参考信息 -->