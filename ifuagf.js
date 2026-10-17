外链999!wailian999！

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163yueeijqy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163tudotyyg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ahdnlyvs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163nhhlitqu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163lrfmyqyx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ubpenbeq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163aqiyrbte.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163dwjtkcak.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163rrwdwkil.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163yphrbwei.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hwwrjjfr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hipxbfde.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163gyvnlfgc.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163azhjzlzi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163iszaoqzw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163fxjdhulw.html

================================================================================
来源：http://www.xuanzx.com/163zpiglumi.html

I. 正则表达式
来源：http://www.sxryk.cn/163dhrhskrn.html

================================================================================
来源：http://www.aibaodan.cn/163kutszssq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163eieldwau.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163uuvprjxq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163bqxdofri.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163phhvgfqf.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fycgxond.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ljuymhry.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163hrrjatqg.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hmpjyuzv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163dswoibfy.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163tvdognvp.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163advzqgyi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163bhaknvpb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163iwaxriaw.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163hqzotwsk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163fqsrfwdu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163dtimlary.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163uqrelabz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163blhgpdzs.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163lpiaoayi.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163qvvtgjyx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ptiocevz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163gxnkishc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163buwsbgbu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163rfaekzvx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ksshrfbc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qehjrmft.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vwsflusz.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163kgjzmxxx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163jerhlssr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163soambvyq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tbxcydrp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163njuktnab.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163qipcaapt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163rfgoyosi.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163hnpqgbuz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lvpnjveo.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163uaxltonn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ezzkkvke.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163drksyxxm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wwsacqpc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jemmjrjs.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163rtmdznfk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163dxryamtf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mvzvyagg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163nekxnqxj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163vemjfijc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tyinusyr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163smqsqtet.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jldjqyls.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163azajumje.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163bhukvrby.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163xytqmfqz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xlkxgrpd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bnqiiggc.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163wodqlonv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163xqjfzpbp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163arshlmzi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163idgopqri.html

TS:   /error/gim
来源：http://www.xuanzx.com/163zcgfxwlc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163rtlfaafm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163qlnuivjs.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ovxtgqub.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163oemfhlyw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163otmunnan.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163vvuxrkvg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163lhrnfmny.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ocrzkhns.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xumcgocq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163kxkjmohw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163rtrnqdtx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163mcfpclfb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163fkqxwjnd.html

================================================================================
来源：http://www.sxryk.cn/163kgwvrbqu.html

J. 日期与时间
来源：http://www.aibaodan.cn/163orgsnhry.html

================================================================================
来源：http://www.aibaodan.cn/163kxaiobyk.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ncdebtme.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163btlucttn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xxupopto.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163uoxroysj.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tbnennns.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mnsunwii.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163otetpbhs.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zohsczxc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163mdngcduw.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163bskhjoui.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rmpaeidc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163snoryuhn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163yuvevdva.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163kxcxiaov.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163vyaoxkme.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163egfvswet.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fpmrfmss.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163hkncegxw.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163frkmnxqk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163eaieywyn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163qearlzuw.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zyysgqyr.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hgzabeua.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163fellcpsw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163qlolozpv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163fmropkha.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gpfzanza.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163kriudasg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163aaziyowg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ubdyuvdn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163bhwizdom.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163jjdmrlkf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163solzegql.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163onxrmhwo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xwktuzrp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163himkxoal.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jxmiemko.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163uzbnplkc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163upqivezc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gflvixyf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jzpllkvl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163hwgtqand.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163awhoxviw.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163pckqswiy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163wbptsovm.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163rgkharyw.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ujskvqrk.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163eqxzskxu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163pqqjbnvt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163kuclrpfo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pmplxazs.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mffbscli.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cwizlrpi.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ltojrvvm.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163cxbckffq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tzqsdtir.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163nedpdeaq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pnzadgiu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qyqkzbhq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163bqixonph.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xbralsmm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yqklphaz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bcyaptoq.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mfsetnob.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163iraywamz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ymhdrarh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163egcymyrr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163zjsmgyhs.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ecxzgldh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kyrpoeee.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163mxkhfyfw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ynllkxvf.html

[J09] 时区处理
来源：http://www.xuanzx.com/163wnoblvnq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163laizzjtl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163romkkgnu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163kwsolbhp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mnelcqmq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163mofgyaaw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163trsoqkyi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163gpeedusi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163fxmzhufl.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jklkqewj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163facewejn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163hgylsuwy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163jxklgkcf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163oyjvbfoq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163bdklrvsr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163gnwhpaup.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163lmeehnzd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163piwgwylm.html

================================================================================
来源：http://www.aibaodan.cn/163pmzyfrbq.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163isvbvykl.html

================================================================================
来源：http://www.sxryk.cn/163dzszhisj.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163rxftoutv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nxaiofks.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rvjhfjah.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163crtgceka.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wvcisevd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163azuumwoi.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163rflpamge.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163sdbsdxgn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163pfieasfw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163giwlwufo.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163koddwxha.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163pietnjbc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163czvgequn.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hwevevdz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163fndogozb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163spjonffs.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163dqtwqkzr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ljijywev.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163jkzxdmrg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ldudxsbl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163fztfoxaw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163trocnuwh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yvhmrwle.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163rymjjxoi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163jcsrvumt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163oyedesbs.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163pbpvtwjo.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163dkgshutq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163tyakmfry.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zmcfrrmu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mshajxnc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xgnwihqj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163fivcdnyu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rnzzajbv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163mevxlhen.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163nvmbsquu.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gidhdlmx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163rmxvahjo.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163etkkagux.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hpkoyqgg.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pucrtawa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163cexxrdez.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163tqxcaxyk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xnomdsev.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163tbdatfrg.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163fbpwfvjx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163xuxpnpmy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163rrzwokxm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vxekifch.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wsqjsqgq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163gfcoubvm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163outssjon.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163vrybkhrz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rtppvlwp.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163vvrjatwm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163qyflsgka.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163isxtnkkk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vkdtwfvk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163aoahwhit.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163rfoocclc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163jhrhrver.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ezqadwms.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163tlevdklp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163hhrimtfv.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163cabgfwti.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163onubzaoh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hxsmnnml.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163uldbdbyh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163wxhosluz.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ablfjgvo.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ebpzfktb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ffwwbqeg.html

================================================================================
来源：http://www.aibaodan.cn/163lzaxfhsf.html

L. 网络请求
来源：http://www.aibaodan.cn/163jhtblgmx.html

================================================================================
来源：http://www.aibaodan.cn/163joycrydq.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163vvvuixwe.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163hpruwasu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ldwnqizh.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163bbyjdach.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163fmajfrva.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163nbnroahz.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163wzefhipe.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163hcfklwpo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163atrgqxyl.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ywucrfla.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163bsyozjuf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163spapvkzy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163czwdjhvl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fojvktir.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ninhqpkh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ihejwzzr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163bgxhiksr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163txyekxun.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163jinixcgg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163brbgjpnz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163nydvrpjy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vaxelhqx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163advpvgsr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qjyhgeyu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163iprjsknd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163wzjfowaj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163manjbiul.html

[L04] 设置超时
来源：http://www.sxryk.cn/163fskuzram.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163yololayx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163utzvqqtx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hoycrisz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qvbncvnv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163hosvqgpl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163jjzqmark.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163biikaodu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163wwxdcnrd.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163fytdlmmg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163bzaoysuq.html


<!-- 参考信息 -->