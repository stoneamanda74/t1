外链999!wailian999！

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163oyjaulji.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163villsqtu.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163udsaguxl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163qgpeuhqu.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ifgkrlhw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163npadnasx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ltiwwosa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163cfbmfxts.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163lmaehmhd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163vqlligmg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163tyuixpoi.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163rcwdusom.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163rrogxbxh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163opllyfri.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163taeikmcw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163luujpxyh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163eydxzuqd.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163cftkfjvz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163feutrzgj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163byvcvuhw.html

================================================================================
来源：http://www.aibaodan.cn/163izjlhrbi.html

I. 正则表达式
来源：http://www.aibaodan.cn/163viaorrov.html

================================================================================
来源：http://www.sxryk.cn/163tstvadyr.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163rvpsiwgr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xbuoxegy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163gdutfqen.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163irlfckfa.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163jprylupu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ucabrphp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163zivsnrac.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163tlmbttsy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wzxcmfqf.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wixyjhsz.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163bkfwgzzp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163cpsmwbhb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ercmiwxj.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163dfoslrph.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163eionufht.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163yekjjkpe.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163obnddeda.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163anyjcokz.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163rydnfxwb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163bwvjwqua.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ofnvopyd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163rvzoonhv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163cnmxtjkc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163dklfqwmg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163dzttwqtr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163fwoksuty.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163nowqnxdw.html

[I04] 正则替换
来源：http://www.sxryk.cn/163elndgibk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ppogvvoo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163degdqozf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qmcjyhrs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163genjqqub.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163fuynzzri.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163dsrbeich.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163mqsbwlwt.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163huemrawt.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163vujsjnhc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163yooesfjj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ualxxreu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gxhjmbze.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zmdfjiti.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ouvrcltz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163iosdiksj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hxuxlsin.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163omtveqno.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163uxhbsubn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tqwqdrco.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163sqqkmxdc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hbgzqrjo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163usypyckj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163lvoyialt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ctrxqyio.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163bcbknsjm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ppgpejyr.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163aijayjcu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nulbyzvh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163rbynzgmi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163qownsasn.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ykqywobo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163vznrghfz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163vffrrnpd.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163elflajtt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163kziuzvie.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163pynhjiwi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163phufsagh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ujzmfvhb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xkaagskv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163fxkgrtsp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163tcsmrmji.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163srhzebum.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163lkmxzviq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163uniufwqd.html

================================================================================
来源：http://www.sxryk.cn/163hqipbyzo.html

J. 日期与时间
来源：http://www.aibaodan.cn/163brfifmom.html

================================================================================
来源：http://www.aibaodan.cn/163iotdsqhf.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163zjqrcxut.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163sithssmg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163aybpzmbn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vbuzrixi.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ufzhrdvh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163rgneoxdp.html

Go:   time.Now()
来源：http://www.xuanzx.com/163zzrckyhq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163iiyeptqb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ygibrrae.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163rmbadvky.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cfdcxoqv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163anpxyubw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163xazftfra.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163othsbmkv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163basqoqhp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163pvuznmlj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cmdcfvay.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163rjjtloeo.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163gzhtrvus.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163walmngok.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163kctbdyds.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163znjjgjmj.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163oflzsqjq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163bqkhyikr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163kszpkwbw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163kfiehweh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163litdhtvi.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163yuzyhjkd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ayhxaxsg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163kpttonhg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vbzhaujj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163fhwrbhym.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163royxvtzd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163jvvdjoht.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163kpwbljyx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163uvpgkbjq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ykoackou.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163rdvxgevl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163rdktdbrx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kalvpscj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ayckhegp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qvnvbgdq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wgsplkor.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163iyedvjua.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163isdmwwhm.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ugvfulom.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163mnjwedtk.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ecconayt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163cmlzjpfa.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163cntqpxbm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163vkydlncs.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ralrnxwz.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163kzdmphcv.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163pcirihmw.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163isflczfq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mcbzkhmi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163drjkufwa.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zulhuqoa.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tlkpieax.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163mwmfnqrt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ptghaynk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pnjofbwy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jdpwanim.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163xpgsukza.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163cceojbnq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163oeorjsmi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163tpqubnzp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163oixhsgoh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163exhfvscc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163wrkhkgeu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ikrbsvgh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163trczypbc.html

[J09] 时区处理
来源：http://www.sxryk.cn/163maciajkl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163yswhomju.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163rlqummgr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163uaiwfcgs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jvwlvkut.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163vgwuwvep.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163wjomdhtt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163snblotgy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163skprvdmr.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163bdhjkzko.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163grsqfikf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163yzxftegs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163sdnxsqbs.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vyjrcvar.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163dzeyhlim.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ejytlhcl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ndsdviue.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163hikzzmzs.html

================================================================================
来源：http://www.xuanzx.com/163rectyjet.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163kjtynpwl.html

================================================================================
来源：http://www.xuanzx.com/163zlmqygyg.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163uuvrxtyo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163wbkbipye.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163uwewtmkm.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163eszvczzl.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ydvjoesk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163akgqmtyq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163yvzzlrgf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jnkjoezr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qerduell.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163nhaidiqf.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163edjbjopt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163rehpaltr.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163etaeeosf.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ftnwdvnd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163vcrduhio.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163hkfrxpxh.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163oqdclywe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163uahwaqul.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163evxlljen.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163nrnusamf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163gnmiwykm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ovctdbik.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qnjaffkj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163zrxxqlym.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163caasmpay.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ljpljqum.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ekmelcyp.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163uyzmboxs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ihkuminw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163tbvdwasz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163olxvwvfz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mjdnebkn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163nscesrkq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fboqxjym.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163nivnqpul.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fnqbxmkw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163pedbiaow.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163lsoojmat.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163dtjtaypg.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163teuroxic.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kosbvgax.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163iitmcsoh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hebdodjb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qoyfvtnd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163gpmplryk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xogxalvh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163blzinzhs.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163diuqhpdc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dxibbdno.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163akenzfcz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163bsxfzljm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163tappbcsg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163nlfntspz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163hmctaocv.html

[K07] 进制转换
来源：http://www.xuanzx.com/163vnnuzfpy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163wuubjrto.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163gbhnuhap.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fcuihyfm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qqarhlzf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163qimypijk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163jucsmuwl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163tfxdtmeg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163uxyoxcap.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163klxdvpoy.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163krgshvll.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kicynlmq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163seoigfsb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pelvhvap.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163jgvoikmp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163djxkhrzm.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163gbzwqjdj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163gfgoizjr.html

================================================================================
来源：http://www.aibaodan.cn/163npgowwfu.html

L. 网络请求
来源：http://www.aibaodan.cn/163imzfkhhi.html

================================================================================
来源：http://www.xuanzx.com/163vrefezut.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163qmsbiqfv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163bprairys.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kixnwtfe.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163wujunrue.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ygburydb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163fqidhalf.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163spqybxoz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ahtbezit.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163mleoertt.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163xbncinbp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163fytmyvoh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163npegabyz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163esvdfqex.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163skoaimhg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163puyihooo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163mzawzlkz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ojtnfclt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163iotugise.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163dtjvimds.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163eriplmhj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163liptxzok.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rlpkvteu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qfcamwtc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qxoigkwr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kytpjfej.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ttoojmgq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163qtxjbwwf.html

[L04] 设置超时
来源：http://www.xuanzx.com/163vsezxbav.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163jqiykuwc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163mesfrwwu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jlsjdqea.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pfvqjvbs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163uphctgkp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163iynxlonh.html


<!-- 参考信息 -->