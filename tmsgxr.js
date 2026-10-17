外链999!wailian999！

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lcomiqtz.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163iloqwxpz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zpxwpxdk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163sopfqpdq.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163wlpxqbdz.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163wfdhilos.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163qujxzdrp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ooyagncv.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tbnqgvbx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163anxljlub.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163gkrydgyg.html

Go:   err.Error()
来源：http://www.sxryk.cn/163lpqbrmhz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163jyhnqnje.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163opquywah.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163mljkhjod.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163teesrczn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163xholcvyq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ffonajkg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163nwhmflyy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163imizyfrp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163qxuseqdd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163wnpfcgux.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qtclddmz.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163pqqnrdzn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163cxzlbnvf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ygasreon.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mlfsekqp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163gpbaflgn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163scdftlyy.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163letshhyg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163yxhizngg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163idnmpiuh.html

================================================================================
来源：http://www.aibaodan.cn/163ulankbzd.html

I. 正则表达式
来源：http://www.xuanzx.com/163ijfrnkny.html

================================================================================
来源：http://www.sxryk.cn/163opwrkuvg.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163mhvxqddb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163vqfmgcth.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ckvfrbha.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ndvofhgp.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dzunjvwb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163afivbiiz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jksarrea.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163zstisaft.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163gwymwpaw.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163wzytvbny.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ysgsnxkr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vxbxyuxm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163bvjgzewu.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163isgjfent.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163iceqwrai.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163qijyhvuy.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ekzootzg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163dkygracu.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163bqqbslxk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163edsrppdl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163cscfwcdz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163jagvxmvw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163jnlgiohq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163zchbgoqo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163nepioxel.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163cohdohsg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163quzqaemy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163zhdvjlxy.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ibmcgijj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bsvlgzed.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dgqsfslc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lvdlntsx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163gvvdqpud.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163kpjffyio.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ztwrnhym.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163vvgfxycz.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163joautnid.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163rtkqovkz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163bdnalhxr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vnltvnyp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fuswitfb.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163riebkxqj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vyudyetj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zfgdoqns.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163rkgenwqi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163swkzclwq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dxzafkgg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163lfpwgqun.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vpyspdqb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fqmikmgh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163jszobqqd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163sblrxcmu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163huammxta.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xdxeksrn.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163nzfmnunb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ijazmifl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163gqyfgyby.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ldjczjis.html

TS:   /error/gim
来源：http://www.xuanzx.com/163dljcrfdh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163qqwenldt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163wlkwafor.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163phmkcgyw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163fdntkhae.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ggfrvpum.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163bruqcboj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163fpdyfoil.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163cidsqstc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163oetnzban.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163cyhknraf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163qxcxsxbu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163xzvqaiyp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163uvnbxeid.html

================================================================================
来源：http://www.sxryk.cn/163hwneblxg.html

J. 日期与时间
来源：http://www.aibaodan.cn/163lwxsgpxz.html

================================================================================
来源：http://www.aibaodan.cn/163ybwbhuzn.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163amhpasvt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163djjvixea.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qtsyxntn.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vccxtdxh.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ousnuvrf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163nroazegi.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163nchkagkq.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ntgmddhk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163bbonywzj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ktalpmog.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zhrngsdv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wkfqnhrz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163hjrfzxpx.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163qoynaaky.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163usnbnyel.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163sernwdlx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ioojopjt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163iuzilvtt.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163vycqptcl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163rrjgiyxk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163stbcpbzx.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163iyoosykx.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gynmcqij.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163zvezvvrf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163rvszunvv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163crwpudno.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163vksjvtha.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163twzbswzv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163gwzfyvcv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163fxioitie.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163cuxrpnch.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163xpuzdevj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163jyktsgjb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ijscfbve.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163sepxhyjb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163oledkvom.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163mskxbffr.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163hngzqtxg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163nvordacd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kzdhtnym.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vawwmklw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nboexjzv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163oxwwtsdo.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mpwvridw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163erpxdxzg.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163bpuarnoq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163pzucojfq.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163iwmavrxg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163nxrcnioi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163gmovgiip.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163fpbndmxc.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163fbkplpcm.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kbxevbdt.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vyztdvzn.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163xfbagnuo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163metrywxf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163mqejejtp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163autfgxme.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sybbhckx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163sqfjfuuw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163wdydfkej.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wjgrszyn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mmcobayg.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163mkkmenip.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163kkqpkuay.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163pworsqal.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163jlsbmcxd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163wdwsurxi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163lvharduj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ikzytwfw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163wkigdglo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163dsswgrlz.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163skloqwgh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163yolvsqwu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163cupcpqsl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wwesyizf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wgbenxxu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163quhplpwc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163lvpcelgj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163epetyobf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163tucehncx.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163sdwpqfhb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163nixlnjdb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163wdtqkppi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163xdickehp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163jqdvbbuq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ykmpswwy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163cwnxxgwd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163joyutbjx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163tlmfpwzb.html

================================================================================
来源：http://www.xuanzx.com/163mxutwxxj.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163wpekzauo.html

================================================================================
来源：http://www.sxryk.cn/163mxlvkrhs.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163hnbrvmqq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fmavjogn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xkxwdjsx.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mexwijxz.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ilojvmls.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163tzexecmt.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ndgzjpdd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ffjdplzs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163qedjcgts.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163qfghglwc.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163jiidlfrt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163rbgbkjyj.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rvcbpcyb.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vnmdrtuf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163iblytdqt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jfprycjg.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163bpmjkmar.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163nyraxlmu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163flirgqsp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ambtfgnz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bgmnhosn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pqwttxqf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jrycguzr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163eycftqlg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163oxphfway.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163muiitxbt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163zuygrymq.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ztiymrlw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hbdvaxie.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163dvuiavuy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ilcusjwe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163wwubhzda.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163okgycphl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163uaqgaqax.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163nonqqoem.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163zgyfokvx.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ckuxfqbl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163udkbaltq.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163avgjnads.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163usuxqhvx.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xhbjiske.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163aarvbqdu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163tfgffzsw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163crknncfb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163adssodta.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ganpyzhm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163kvfbcnpx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163uovytxhs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ojxdbekb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ehcxnzom.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163obbfoacn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163mrnfwmwg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ozjsvolc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163kvwluimq.html

[K07] 进制转换
来源：http://www.xuanzx.com/163nuflbzve.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163unhpinyz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163spnnslyq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uikrhunv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vclrjtze.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163fcjzayeh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163fauionfq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163bsagdzds.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163nvariitm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163awdqkiqs.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163uzliqjov.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163aqrloovm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tgxhilab.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163efbikhqz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163pgoiuqfg.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zuaotqcc.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163bufrqxvh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163xnfiwcyw.html

================================================================================
来源：http://www.aibaodan.cn/163iblfhfdo.html

L. 网络请求
来源：http://www.xuanzx.com/163ksibwnqr.html

================================================================================
来源：http://www.sxryk.cn/163kupqtsra.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ekafxuaj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163qkdvattf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ivrbrblm.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163axrijnap.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163mikmzvsx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163qaiwvgil.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163zudqfsia.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163yqygaovz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163yqohzsct.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163lckvqtdb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163aviffyzt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163wwvhrwoy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163btbtghpb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yilzsboi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kjandrgt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163blsaqkvw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163mnuobzua.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163gusxpmde.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163soykffey.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163gosrdjzr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163rrlvjcfa.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qlkpaaty.html


<!-- 参考信息 -->