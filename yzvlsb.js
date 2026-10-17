外链999!wailian999！

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163fuadkuht.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163wergypao.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163dauiguiy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163gqyjzjew.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163cmacnkmr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163dkenxfxn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163fiukckpg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163hmgszlfz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163kenvsald.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163iydbbiia.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nfjfhmez.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163nyjyjgyy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zpdoqouf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163hcwovajb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163hwkrkrem.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lhiblsud.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163zoggznom.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163bnjodzhm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163rxhwnfux.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163kfkugzlb.html

================================================================================
来源：http://www.aibaodan.cn/163jpwsngcz.html

I. 正则表达式
来源：http://www.xuanzx.com/163dyomnmzr.html

================================================================================
来源：http://www.xuanzx.com/163xtpcygid.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163wutynsap.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163uildpvhl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163cthsvczy.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lrwmskou.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163sfuteqhc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163clcpztxa.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jiffqxrg.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163rrzxprem.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163kobuthcs.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zcqizgwu.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163jlngemjr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163snkimkqj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163stvpupgt.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163lgmhaidb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163zwmctbfc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163qpersjzr.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163rvoivoxd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ygkcolmp.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163caczcgsx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163rsdleias.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163oauuvpqd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163adipffwy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163owqnogpq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ytnnguoc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163xxcmsqau.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163zxdvmwyr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ycfrorak.html

[I04] 正则替换
来源：http://www.sxryk.cn/163bscuxxfa.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163fvnelxly.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163keortatp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wswqhvdm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xwbhzjca.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163dxxgovol.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163dmwptdpq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163bkuirixr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hcjesfqw.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163lbnwzdki.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163xnvhceay.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163pmkokfaf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xxnjgnkz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ugdxkbdt.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163dofcspnz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163swinrbgi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ovqpnqeb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163xnnrbzje.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163xawbtqwh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zvxbowxv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163icztxydx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fcitinxc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163cexlfkzv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163mfipcpqz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163qmemiogy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163waqknerb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ubsubpiu.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163epibfibw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163xqiwrayh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163bgiditak.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163pkparceu.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dkedkwwe.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163oghahsno.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ykwvsdpb.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163orckukyj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163nbpfxeop.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163fifqfwmb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163aborjtne.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163equtgwhs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ekmpqitm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dbbdslzw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163esyytbbk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163dehisqhq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163phetmqbj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163dhtinnuf.html

================================================================================
来源：http://www.xuanzx.com/163pdufpuvo.html

J. 日期与时间
来源：http://www.aibaodan.cn/163vcrsrniw.html

================================================================================
来源：http://www.sxryk.cn/163umckdelz.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163muwcqwlh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ffeejakh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zilmbaoa.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163sqloyuzz.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qgpoqrad.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ulvnzbnm.html

Go:   time.Now()
来源：http://www.xuanzx.com/163scoidcin.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163qjfpsuoo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ciibrlfw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163nshkhhua.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nhjyqouz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163webdnfaz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163xoihojqx.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163puupcgxt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163vppsmtbr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zhcuikdy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zapyqdhs.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163mjohoskq.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gwimofdh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163mmcayvbr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rkxqynld.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ihoafuwa.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163yosxwowc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163aqxzvvii.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ojrwgdvg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163rmqttmoy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163tngsherm.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163jxfbjbcq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163taamkfpo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163fqnytuis.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ehjmfhnu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163eqikuqvf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163npvfdekw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hsgtycip.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163grodazmm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163spbpjodl.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163drawxdsn.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163aewafuql.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163vandgwnc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lzhsobbu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163asghiuuq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163zqowmmcp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163enhajfow.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ohioirlz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zzrmygff.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163zbebdaxk.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163fmoocmrc.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163jtlavhqe.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163bbixhokq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163pfyivujp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163dedeqfne.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163lvljkamr.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163auwjlprx.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163yczrjgvx.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163fesodknr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ctfuapww.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163zstbjdxu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163slirsttk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zcuddwsk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ydgujjns.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163mudtuwnj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wokhsgst.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ybeotynz.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ynfnqcqy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163lgrfmmya.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163igphwzxz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163yqjtvjgi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163xarkmwcp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163emgklbqj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163pcyrkjgq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163uwgcfosn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163xtmrxoce.html

[J09] 时区处理
来源：http://www.sxryk.cn/163bxojjyda.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jdcgpcmb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163xdwppocu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163oixemqyd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tssjpoxb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163jrxpruei.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163tthdbebk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163zmvlmfkn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163esffjrue.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163clvfjvng.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163arookxte.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163hmwynqso.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163hywmqpjq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ovoylmsu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163lqiunddw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163whlzilid.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163vvjbbloy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163plasriwz.html

================================================================================
来源：http://www.xuanzx.com/163rchvhqyh.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163jphgsqke.html

================================================================================
来源：http://www.xuanzx.com/163jkdrubnk.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163xhvnkzjc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gkzbdcll.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dwvgdxwn.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rfsmptaw.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ayptsegp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163kabpecho.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163pznahzca.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163yxdmdoze.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163fhiejpjl.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wmclwuuy.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163hajogruu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163mdzhmvgl.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ifwikxje.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rgykzemk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163wirdtgdg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163srnicdxd.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163lirppvhl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163wphdmxgx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163jwabczhy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163zcrytsga.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vervqlgr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xsdjkztp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wdkwmlsw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163xheecnee.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163vccveriu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163slsbbnlf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163youqotqz.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163yptxxmqz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163rbnyzgdy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163bfpmeyuh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qfpidvbt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163liunsiro.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163nemuxhsb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163foarsdfw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163zvddrinr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ptqmxxwd.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163uylinonv.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163cwgegkid.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163rzorlmpj.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ofptslxp.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zogirrpo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163eqzkuovy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163zhledpoz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163vomxzzwu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jdcgzpye.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163lmmoyvjj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163yfgisyjj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163tgvowwbs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tvcshzdh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xglbhiwg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163fzxlcqtg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163bpldxvlm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163gxdwtifm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ietqviqt.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163shfamzei.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163gezafkyp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163bstytibj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fkyodryp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163epudvqff.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163psxbkjxt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ubeocgkr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163auadpvsh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163hmojqrwb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163umcrlpxr.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163xdreaxlh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xzplrvju.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hyiisawv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wgxbcami.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163iavefwxd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163mwxyzytd.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163znpzmhia.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hgvvruqj.html

================================================================================
来源：http://www.aibaodan.cn/163ykuxxcvg.html

L. 网络请求
来源：http://www.xuanzx.com/163tdpmlcib.html

================================================================================
来源：http://www.aibaodan.cn/163wiuzlbhq.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163gbcjhhrz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ddgkwubx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163paklycwx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163nfswmysg.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163kisbgezh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ibstdsjw.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163duqsftjd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163suvrkmtd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163tbjvggfv.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ltzoygqt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163byjogeaa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fneryigc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qnmhwgfn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kftgbaqu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163poachpew.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163epaqjlcd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163wouujhwe.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163kipntufg.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163blfhghqc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163txmblvxt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ttdcjqye.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wnmmxpom.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vtiihhar.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163urlavdqn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163lrgegjsy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163fuynnqpw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163uvtzshgx.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163fwqaowza.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163lycbunfe.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163knnimvps.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nggrlxhd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wfnribsd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163llelrnbn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163dbubdiwm.html


<!-- 参考信息 -->