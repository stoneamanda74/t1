外链999!wailian999！

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ukylraxu.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163tikpnkie.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163puosmclg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163yplhxbnv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163dzqieltv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163pmjzmxgu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lhyorsms.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163amgyucbg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163sapuzukp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163lfgsbyzr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163uvrkhyye.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163rruolrsc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163acabpxkd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163vdbumkfj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163izeegean.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163rvonnyva.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kidzxjdr.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163dlqzxicp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163lbilyzjx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163khdhrcgu.html

================================================================================
来源：http://www.aibaodan.cn/163ppppyfyi.html

I. 正则表达式
来源：http://www.sxryk.cn/163xhpysiwc.html

================================================================================
来源：http://www.xuanzx.com/163eztzjtsa.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163inskxzex.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ntzlgbor.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163lvpetubp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tpfjdsrm.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gmofthgt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ykkzggbn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163mgmffhpv.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163fxxmtuyt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163oajfhwdr.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163pzscdhas.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163iisfmdvx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163uyvxymvh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163qkydprwi.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163hqarszif.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ubqujzsk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163jbmkeyab.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163jskyzmcf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163hamsriiy.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ddsgordr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163zergmell.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163gnuyuygz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163mmqkjblz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163mzkoizmz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163odpsbqfb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163vmlrczlm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163xyydmvlc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163inczinjg.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163jdznypmn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163nfvhogab.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mbagfzwd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163erntlcel.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dhfdqwfa.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163tntkpvcg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163lqdywsob.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163qfmtlzgn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163uqzxtqup.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163yratztdw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163fkglhvlh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163hwdtctvb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gnykrlxj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nyxmqciq.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163zuzwtdwh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ntnblhbi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zmlzodbg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163bnelbzcj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163owytdjxr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kegjdrjw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163dypxgamc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pmneilzv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163unndbzkv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163kbekyets.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163hoztipat.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163iyvpzjmx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xqovjxsw.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163sjhdywvw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163vixaynnk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163wgabkchj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mbxoxnea.html

TS:   /error/gim
来源：http://www.xuanzx.com/163anlxvxni.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163kajvdocc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163nkkueywm.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qfwnwsku.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wvdumump.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163nvynyknz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163sofcuury.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163czjocdnb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163uclkloxo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xbtdajlx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163fikauckr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ssvljzzt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163riydqslq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ajhnuntr.html

================================================================================
来源：http://www.sxryk.cn/163ywgriuar.html

J. 日期与时间
来源：http://www.xuanzx.com/163wkdhuwyv.html

================================================================================
来源：http://www.sxryk.cn/163dpuvmhpe.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163agekrdri.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163nrbzuacj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rthwzbec.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wplvohss.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163biouvqeh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163kcqvciol.html

Go:   time.Now()
来源：http://www.xuanzx.com/163btwncokt.html

Ruby: Time.now
来源：http://www.xuanzx.com/163anrxotfx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163psjjownf.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ehgrfzcd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qwzqmpmc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163txxjaaze.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163rxtggptz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163dzovbour.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163lmbpwdix.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163fkulkvzt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ozjkqcns.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163viwfmwiy.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163agvtpqnf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ibpmneey.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163xsdjcnjk.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163kzdxhekf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bhwcheev.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163nnlriemr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163snoyfglv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163knzyepwo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163qtlmxbdb.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ieyusiof.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163dlvsefuz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163gunrghhr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ppomimca.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163lzoanyap.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163qhgirppp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163pegwcspf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163hcajbtop.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163skcsgett.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ijecapfx.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163sdgdqqjq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163rfyxelvn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163crqhnjwf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tyfxjijz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163uehowbye.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163uxymqqix.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163bvxluuom.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163thyutdnk.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163loaaasbs.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163pyttlzeg.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163xyplgjto.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163tqcdiuvj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163onwyamed.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163kqtcggvu.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163yxmurlcq.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163htnvmizb.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163npsynwea.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163yrzgahzq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163oeknludz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163njbbdrnt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hmgdhndf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163iskzdaej.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163igsrbgyv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163nevsqozc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163luawuhiv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bleppgjd.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163opwdvsdq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163auursguh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163cciolzil.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163vhmgmerp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163vwwcuruv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qjbaihbe.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163mvyfvgkj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163gvyoxjcg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163wdmbnvuq.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163nrtyrvjw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163bsmsesxw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ensceinx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hcxioryn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ynbexrgq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163lsgnxmtx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ojfuhogr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ldqozuqd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163afkczlnf.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163fahukumq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163egszybyf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163zjgxxgpt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163getrobql.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163jfnjbzvh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163damrqlqj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xlyrzjlk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163qzejffrd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163azjovpza.html

================================================================================
来源：http://www.xuanzx.com/163cpwnbvrf.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jbdkureb.html

================================================================================
来源：http://www.xuanzx.com/163olnckosm.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163oiaihtsj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163wuheypiz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163aictcogy.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qczqwiiu.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bgffnnbc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163emjsligr.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163xrkjjhsn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ciukupok.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163flegfhne.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163tbeaaasy.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bvstwkzf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ovyrghvo.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qheccnsd.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vujqhjwq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163jiwnfesb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163efcuzxba.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163moggadxa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163jqczxxjr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ofsdifyr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163rpumtvey.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kraixnao.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xjsjusmj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fpzyqqcg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163modqvzio.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163pcewmqkz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163jkyjsoqv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163sjrfuwip.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163xfjwndab.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163gubvselh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163cvksztlm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163portigjt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qtswhwot.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163dxilaads.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cdrdgcit.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163yeqroogz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163fvsuplyz.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ggqpgjex.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163jlqdojcd.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163mrqunofd.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hijdiezh.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rqtfyykm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xfercoqe.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163vfhwbmkm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163wrndcxgk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163yjnnbglm.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163curibkde.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ivgcrvrh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163xcgcnjxy.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kkqwzmni.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rcaeajvz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163hlydiddj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163whesjgww.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zwtkjebd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163sdbepovf.html

[K07] 进制转换
来源：http://www.sxryk.cn/163azkpgdlq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163brohihai.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163pnfgduzw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wmeovgaf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jirilyek.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qmounuab.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163iuocnequ.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163cuiemzkw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163zmstpvbe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163gsfpygkc.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163tdhpfosn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163phnczyty.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rtztxwqq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rbzcpqpb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163wnygfeqw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163qugccvmi.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163kcdzvsqy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163joklseoe.html

================================================================================
来源：http://www.sxryk.cn/163ytafmdyw.html

L. 网络请求
来源：http://www.sxryk.cn/163rowdvqbs.html

================================================================================
来源：http://www.aibaodan.cn/163fkcidbaz.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163zzajneyj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163kdwxwsbl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163bkhxafss.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163bnrvuzzl.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163xaurnsoy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163kcvepsbg.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nusptacq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163sgsalenp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163oqpcvvtc.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163uvkhtrrc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163oaypwcsu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163aakssdtw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gbtdflfs.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163cvvxiphu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163xsmkcsua.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163iwxnepwt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163iioswlpl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163zomcykiz.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163vetzprya.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163wejyanzk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163inqqgyle.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wrmawyos.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wondglry.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163yifyzpqx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ounhqszl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163yjwdesjk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163vrdpqiuk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163uwvxsfou.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163smxjjlpq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163bzhqnbvo.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qqtwuezv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163prjjtmfs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ltmveuou.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ahfuhrea.html


<!-- 参考信息 -->