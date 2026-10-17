外链999!wailian999！

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ulskkong.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163whwdmdda.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163thwdmvhc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163dzhqujgv.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163utmugkoo.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163mveovcyi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ddcsclnv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mssuxnwp.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ojlyotxj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qggxcfir.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163dninrrpe.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163leumdmsw.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163hiyldoxl.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163gisrpzcr.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163wvexxgoo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163mlmfupxp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163kvvvtsax.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ffjauiss.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163xbpbabuq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163yarcppqz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163tgvgvcrk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163loeopuuy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163osuevrif.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163rjxiyzwt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163hzjgjegi.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163sxizeiqf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163echvjikc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bsmchyoh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163mjdodguh.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163oqzxsrqw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ksnkpsjc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163puhsuicd.html

================================================================================
来源：http://www.aibaodan.cn/163sgnqudmr.html

I. 正则表达式
来源：http://www.aibaodan.cn/163afqvltew.html

================================================================================
来源：http://www.aibaodan.cn/163ajgbexon.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163epkaaahh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vcpawyfu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163keoaxqur.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hoihkfvw.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163kwqdopry.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ttprhxgp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163asfvrcnm.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163sotebqbx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163atstrlfv.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163zphkunml.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163vzchmlqg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163rqphoerr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163aifoiagu.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163mvxsapgi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163vexuvpst.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ggonzxop.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163vvjxtwsi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163sldjcpih.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163tadzenuo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ajzlnead.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163hcylgolg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163fhxnwayv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163rwsiccpl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vvybldsk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163xkhhsbzn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163pwbupnah.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163gybqncqp.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rnsvcpbv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163uvexuytj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163eiwtgolr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163srykhfyp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163fypsmfft.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163lhwyldjn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163pfssgeck.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163fiekasfl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163zunsphwm.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163rhjxiifc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163dksthtrc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ozelrcbu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pjevuryd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yjtbolri.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163whswqdqk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163gqelnxjs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rllqjwkj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163doukyhco.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163bxnqyndi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163delvwzbf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163auhljvia.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163msbtikev.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163drajwgfu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163jynwbmrb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163jsuezhfv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163wavpmjcq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ywzzcxdt.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163hgengmrt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163elbuktxn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163iklhubjh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163vsyjnjyr.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ztpxjpmf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163dlrnsmiq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163rrwvrdcq.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163pewblcog.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163qzodkwno.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163gdrryfbp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163uqrzmvpj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163vntrsqte.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163enxfjshx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ptgfxqbw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ffdtxzzm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163xdmrxuzd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163jncattze.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163juynttgy.html

================================================================================
来源：http://www.aibaodan.cn/163rgrolxzj.html

J. 日期与时间
来源：http://www.sxryk.cn/163xogmwght.html

================================================================================
来源：http://www.aibaodan.cn/163oiaucuka.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163afvtbjfr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163tpedmohy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gotoxusl.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pefmrvhp.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fhyncggq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163mfeuhlqe.html

Go:   time.Now()
来源：http://www.xuanzx.com/163uciwodpn.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ypcwckki.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163vayzwspo.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ggplghda.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ccvitctx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ckjntubc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163zexjqqyg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163qwugchyc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163qqwptala.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163zdxonlaj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bstdjhhu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ctgogzri.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163yzalhmma.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163wnjxbyfx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xjcnkfdh.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xwsshrgu.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163djsrnzhd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tpwgnrnf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163xudtlrgk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163hndhybfi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xnpitloa.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qvegvbut.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163lupzfljr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163zueasuaz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163swmqqvlg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163djinkpmb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163offemhfr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163jqjzannx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163jyrmyrbs.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163eetwlteg.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163nrwcczzz.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163qzxlecgr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xsevfwjk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163bwmzfwyw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rchjclnn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qkexdgvw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ypborurg.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163gttfcivo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163lhoczmxb.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163mmwddrnr.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163gxivwqnh.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ytmzrrmu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163uplqpuxd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163zhootkaz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163aqjsyqpb.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163nucaoyxo.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163wcqiuhzi.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163tuiallui.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163zruuehtl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dycnvcht.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163jifcqcgi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fljdlair.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163vgoeabja.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yeclkgyz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ehqvzapk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hgjrwggq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mqwwuuou.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163uegpxddb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163jtfzmkdm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163aoctxctd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163volsgffl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163bscdxhxe.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dnaiemix.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163pqcihelp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163fvtaybcr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163awyuckdp.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163cbaskaui.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163rtnqpbne.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163fdwqudam.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163hzwfahjy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fgighvtx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163jyeyyflr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163aiifdvot.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ieobjyzj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163abwmhzfc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163xakltkmv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163mcbegjaq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fjonqyjk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163svybqnik.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163abjhiucm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163xvkqzynb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163lzdholkj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163vquibiyr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163tfgsjili.html

================================================================================
来源：http://www.sxryk.cn/163tofcyefc.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163cohqnoka.html

================================================================================
来源：http://www.sxryk.cn/163rexxobaz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163qnvjwhfb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ohxnhedg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rhudithg.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yfuslbln.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hdpiravk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ppmediyr.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163lvwoysgs.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163flkdidyi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163afhondxx.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163vjqogkkj.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163lbqdepxu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163krksqmnk.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vdqjdfvs.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163urlutyom.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163tfmjnslo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bwcuegqx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163tdttbzka.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163cdkjvvxl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163kspkohjm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kjupdtdt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jkrnaoid.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vnmaztea.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vfkvrzhc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163htppnbox.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163dmiwmbqh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ggyptaxj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163wgvdneew.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163pbfjpflu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163rjdeigao.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ibrxlhhv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163czukkfrb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163atzcwgrt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163zasamvdj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163akletfax.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163nxbdxrtk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163satgbjtk.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ddrzbmcf.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ddsectxz.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163lolevsna.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163trnfbxtp.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jtokbblz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wriclrjs.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163lgxvzscj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ggxcvpfs.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163yargoabt.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163mtmjwoyn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ovwkzkve.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163rpcsjech.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lexxkqmb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ughrcngg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163iofaoknc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kbciasjy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163nvrmeusy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163mdxdqzam.html

[K07] 进制转换
来源：http://www.sxryk.cn/163knjwylcb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163arrvocdj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jikusgxf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163rbkjlzrn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ueuvevow.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163btsstvyx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163iyjmfmpk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ktqqckvd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163rqqmcfdw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163uramjsjk.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ixrqzkmx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163grxsmcel.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163voutyigj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mxplchiu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163juhrhzmh.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163glzdqyqa.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163oxygbikz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163pqabffoz.html

================================================================================
来源：http://www.aibaodan.cn/163ytlzuftf.html

L. 网络请求
来源：http://www.sxryk.cn/163krqmbdty.html

================================================================================
来源：http://www.xuanzx.com/163mltdverb.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163hwtsmskm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163jiznkgae.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ybqgbujf.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163tvhoxerk.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163okmotjhj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163tzrwdmju.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vhcixjws.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163vzwmhcmc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163beclsrah.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163qjawqdfz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ftekeijf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163psvjcvlf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lkmizerx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163vyhvbran.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163hcojwbva.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163egbmklid.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163wdrlrcny.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163faltqalg.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163pylkwgpa.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163pjrfjzix.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163pkpjuqqn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ajtmqwwv.html


<!-- 参考信息 -->