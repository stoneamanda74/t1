外链999!wailian999！

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163qjhsjlyy.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163aiyvjian.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163mrospgge.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163cnizvwie.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tlonpmrg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163betvadyj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163anytoffw.html

Go:   err.Error()
来源：http://www.xuanzx.com/163deraocpd.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163bxiqaqkc.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163szpdhvlz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163bvdnjcwo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163jyesfasa.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163cgmyoqxd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ukucedhm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163byqckoew.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163msvtshzn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163fgssxijn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163tyrqkraz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ronmmmxu.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163zdrkevpi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163bpsnoupt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163tkgbnqej.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ntdnhwfn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zwlxlvlb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163shruitfa.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163eztvugza.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163qgiwakrh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163byvyfguj.html

================================================================================
来源：http://www.xuanzx.com/163nscdjvar.html

I. 正则表达式
来源：http://www.xuanzx.com/163lcnfsevx.html

================================================================================
来源：http://www.aibaodan.cn/163mkuprein.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nxslaeps.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163rlaodmck.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163mjvqszys.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163biksenuq.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hrfoozvb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163foxfbxhu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163khhqnrul.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163viahbxfm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163luyscgip.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zdfeogvl.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163znptyfum.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163bxqdpwqy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163srdstysg.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163hnnesoxu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163mvhaxwhl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163uscrjkts.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ylvkwjlj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163yjpzbcrv.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163qwencivq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163gjmnauxl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163hhtoaeck.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163kicrsnav.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163tpaxsokj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163tzxslcmz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163qplhoozi.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163taukptho.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163siubfnaj.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163inpuviws.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163sbilualw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163sebyyjts.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tjcvyxqt.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tahkdlsj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163dmmoxvko.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163natwlqjt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163iyimwysg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163uhbkhkyv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163rfbpioqz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ezwnoxnf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163kvwptmbt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mjpqqcwr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ysquzdkv.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163fkmgwejb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wdryhcnh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163isyslzbv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163hsvjnpqx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163verwmtms.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mlxymkxm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163cyrnhqdk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hedpzksj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nxumtbzf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ymtjfaoe.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163dwfyztxv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163sfzodmjc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ncqbeeph.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163yktrakgh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163vramrvfl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163uydwdpjp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163tsnzrmjd.html

TS:   /error/gim
来源：http://www.xuanzx.com/163huvgodcx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163yyrpodrz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163mvtgowrj.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163rypeamnk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163srdryqde.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163mwpnnkub.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qccscdjh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163eemuybem.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163esaqtlyr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163awdyabht.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163vnbbwhyu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163wafsnwsb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163clpqcvdt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163pzpvvrlk.html

================================================================================
来源：http://www.aibaodan.cn/163lblyxykg.html

J. 日期与时间
来源：http://www.sxryk.cn/163fksziohd.html

================================================================================
来源：http://www.xuanzx.com/163nvkubmot.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163fjjwcpjs.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163tnduxdmh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mgtqrhtx.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163unztzdob.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qbboqqxz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163vqopetwc.html

Go:   time.Now()
来源：http://www.sxryk.cn/163oszkvcdv.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163plhhygka.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163eivmyicd.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163cmacphyt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pssrzozb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ejvezqeo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163wqdmfqlk.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163zmgvltbx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163oblvrqua.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vgjrisxk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vwycqybg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gazwwbpm.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ppwvmnpq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163fhhncbkn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163xndeofih.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mfnbzlmi.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163slljlysk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163zybbklcj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163apcqjgtj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ldgnbckl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ddjwlxsx.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163gjhqdndf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163eaenfefl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163pktdtbyr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163eehvzzus.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163hebipgge.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ctzvxhqj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ahztdmlh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ggfffqod.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ngjhvpbx.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163iefyjyvh.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163uaxgxzmg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163lhmijuol.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163tdaegdpj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lgfhlype.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163wtiojodk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163iqsnoghc.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163nzkbmbbw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163fgwtmapx.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163mmmoqubm.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163bfphxoew.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ftnxarua.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163oavqwwnc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163zwbxyilz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163yvdzpnyl.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163viqfiqfa.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163oqafxowf.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163hvqvexgr.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163urjgaczd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hkjkxcbs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163khehmdgp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163beajdsdu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qbtqtask.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163dlquztho.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163foasgbyz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163oojmhzdx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lotpmpig.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163saztlmmy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163oyjyynmp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163apreinpe.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163dltotdfp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163rxyhdltv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163sirvprbk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163kzwfppux.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163qtymoone.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163zobcufjn.html

[J09] 时区处理
来源：http://www.sxryk.cn/163cnqizprq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163svqamdli.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163kkundwmw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bjmokxvo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163cbolgtgu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163neqhlezj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163dimjhsci.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163brircitj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163bsyxmexd.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163iirxnooq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163wxnexuxn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163asqavqxu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163gzykhlok.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ferrjmlp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163kesptbsp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163elilnfzt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163fuojntyc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163wxteakop.html

================================================================================
来源：http://www.xuanzx.com/163izvghjqc.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163cucebgmw.html

================================================================================
来源：http://www.sxryk.cn/163kkorsszf.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ozxounsc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163qbbwdqde.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163veiwbche.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pbhnefgt.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rgoirbix.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163jzhnigjt.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163kbksdxzk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163wwaxeirv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163achqrvpr.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163uswbiils.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163uipwtwlm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163yvzhkmqm.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rhbsblsm.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mleqxgku.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163hidwspkw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163okptssad.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163butvweif.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163vrdvhkhc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163mxekmmah.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163yhygfdqz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163nulxjmyp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ucvucpls.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bzflbiju.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ytgnmmci.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163clxwddih.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ctozquhy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163kpqcgura.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163szhtedej.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163wrqinwnf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163kcayqvpg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163itfirixz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pajeyuqv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163qlaeawta.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ufnausev.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163qocsiyyp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163upxhynef.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163udzrkmgu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163yosnhcul.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163kxlfstbk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hgiwqczs.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bfellflf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163yznpvcdx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163dwkoteys.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163fdhujbqj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vorhhkob.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ldcuajqt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qylqbfps.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163wmasrbyl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gxlxejps.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xfanaimi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163wcdzwckh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163zsbpkdgj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163rurnrwgu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ywcxtbgv.html

[K07] 进制转换
来源：http://www.xuanzx.com/163yuqhfoxf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163bivemreu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163dzdugtof.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163sojspvsq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163dwhkgohe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163asygtgzd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163gnmidqfp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163uwmbpqap.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163rzegqgul.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163asllbbyo.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163wgjcxhvi.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163umyaeltb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qioxjyvs.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163svifdubp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jbtmhuxv.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163enyezcjn.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163wybrylek.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163osgsnyst.html

================================================================================
来源：http://www.sxryk.cn/163gkyxhhow.html

L. 网络请求
来源：http://www.xuanzx.com/163bucqvtgj.html

================================================================================
来源：http://www.aibaodan.cn/163cntkswfo.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163pscwajze.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163jpznodko.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163wvglfjma.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163joqibnqe.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fbcixgni.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163jhzwuupf.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163tzvetonh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163qpkzxzmk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163pslggpbb.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163lwdctpws.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163kaeolqoi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163usojhhbz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xnulcfiv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dpoarmmu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jhhkgfyv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163nuxnnqfx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163tkydmzdw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163pgmusiet.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163edzjxaer.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163gfivwkbi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163nvvdbehd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163uovzqudb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zylgpctp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163vognxxdh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163bmgrsdof.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163aaabdutq.html


<!-- 参考信息 -->