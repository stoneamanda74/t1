外链999!wailian999！

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163nosrxvtx.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163bwlroned.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163fcwusabq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163xbuyalyh.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163cglwckfd.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163rwcwszma.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163tgxzjinr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163calxtxcn.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163etsgcyai.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163vdrgayos.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163lyhckicr.html

Go:   err.Error()
来源：http://www.xuanzx.com/163pskvbixq.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163bqlxwlzt.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163jjmfjjjc.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163wlaizqau.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163tpnkzods.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163owpdiqvx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163idslxgfn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163jhmeyzlk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163vkjnhaqq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ugcoqojs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163brxppuuk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163zatlyprq.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163mpywomks.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163quwweldk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163tpwioxfm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zzkrgdkj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wmcioprz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163qbnssims.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163xjusruwq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163irnjznxi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163vasiutuo.html

================================================================================
来源：http://www.xuanzx.com/163hmegtels.html

I. 正则表达式
来源：http://www.aibaodan.cn/163lwtnrxbu.html

================================================================================
来源：http://www.xuanzx.com/163vwzfnvno.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ogfftghb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ttbwohiq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163jlfkkdjy.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163lzzsvgce.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163blphqubb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163qashcmxc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163qqssqcag.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163brewztbd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163whlknmcf.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vylpdqtq.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163sfjrmrtx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163dwyeauoy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cfiqrjit.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163tviznrqt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163owzxbmli.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163jsvsname.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163dtadlgxf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wmcwascu.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xpdiqqtd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163mpdkenrf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163pyrqmdop.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ajhvdugq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163llrqkzek.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163zpsrzfct.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163fxshcbcw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ogihiduo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ufkmnznb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163wlvousyz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163kbmzbsxi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163cfqwizxp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wfmhhdjw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163meylstjm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163otxtixps.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ypgmiabd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163iovuiwqy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rqkquzoj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163nvcwmvkg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163vltmwvel.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163bmsssmmq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lrzyeavy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uovoqsvw.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163cualdvzs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163tnhywfne.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ylotegrl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163rniwesvc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163oswjjhcw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hivpzwlc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163fewwzqfo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zuvzyvsf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kjddgnuy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ayprdcvt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163pgskfwxd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163zipuqysf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163exwohjcq.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163whmnfpnl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163rpwrgmig.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163mtftuyon.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mckjtyyk.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163iwbusxke.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gadotmgy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163cpwjunnb.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163zpufjhvd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163dfvtrqcn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163dhzgflld.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163xijkvkti.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163pigkyhfq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xqcfrutf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163fxxjfsuh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163mkvjdpmx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163jvhhebkh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163zufehcbq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163vjgthiiw.html

================================================================================
来源：http://www.xuanzx.com/163eyfoyliy.html

J. 日期与时间
来源：http://www.sxryk.cn/163avagzhkj.html

================================================================================
来源：http://www.sxryk.cn/163elgcuyfu.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163mmdmdayv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163mijxlkzf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kqrrpbnf.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ugegcrrm.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163flgldqbh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163bfgtjygn.html

Go:   time.Now()
来源：http://www.xuanzx.com/163zfgkzabg.html

Ruby: Time.now
来源：http://www.xuanzx.com/163qopdrpqz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163iwrwwesx.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ahgxhjxj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tnbdqvnt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fsbsqghf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163bbsjlhvg.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hfblibhp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163yiogkzks.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ipidizqo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zfzcuaqj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tmhpcmuv.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163zvixxrmi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163hmjcvdme.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163hjksuthl.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fkkeorqg.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uiahhwpp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163lxluhmnk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163bsbrytiz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163woqdraes.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163jvwlbqmm.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163enjvnvli.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163bmzetirz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163vziyeiue.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163lczdrnfo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ayuwalmy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163kgifyywv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163qbpwzcpj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163msnkodol.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ebvtorqq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163emvriqpe.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ykspqeuy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163lrtntopg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163tqbppynv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ykqcxxpu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163mfsphnpf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163uhdckwbu.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163yfrwyhho.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ajsvuumm.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ammlbnop.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163rrzqylbd.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163bofcgeoc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ljukxqzh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163kisewbyk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163aetyizne.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163eadtlbbv.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163eenxvxxe.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163jqccxnct.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163kuhvdkdw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zbtrgfec.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163djmpoyjp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163olumxhbj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wwerujcx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163srkiewyw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vizbfizg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wjihrawi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vesgqozn.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ajulsycg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163mtwyqobd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163pssvsnhr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163tazgczrj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163mtpiinbi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qdgyjayj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163nzuvcpzv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ymchzzor.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163eobgvzmk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163bkbcsrrk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163jjijowfs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163odzzsimt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163thtdtcbl.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wqmoctpg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163egfdahsy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163cwztetov.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163auodfuht.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jqrgagqr.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163zseptuxy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ndvzqtaw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163czlyozaj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163wwdrysul.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163bsntyqvu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163vawmqclq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xqkhpdpa.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163gnhgtxse.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ojwlgqgc.html

================================================================================
来源：http://www.xuanzx.com/163lyvohijf.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163uefcufnq.html

================================================================================
来源：http://www.xuanzx.com/163qnizmrkc.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163itwutnjp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163wrvqvwml.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zxpkczlk.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ypbssdrz.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163hwkgupsi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ufqiazlp.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163eevetynr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163lmaklkwa.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163dbcwdueo.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163nlvfrzem.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163tvkbscgy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163gvygtaqy.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vlmmzylr.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ghtqshnn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163hljjusag.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163sybhwhji.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163mppglzpr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163otnnnmxx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163phnmtxzr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163piscdxrt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xsaqxsrp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ugoczrtw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cjtamhai.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163edvzvfed.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163dwobszkr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163sjiuafam.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163waanxiwh.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163qldvcrtq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163tgnesqrw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163cdybzeae.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pfqfprhb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ailhksrj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163rhindpib.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nsbxxuhz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163bfneyoug.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163vvhxlshs.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ijdfgfft.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163yracbemy.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163tdqxlfbc.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qfmtwtcx.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163dspjrnam.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163qipaqhhi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163hzvnopkz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163niazstgw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163mlsmvxvk.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163skoowpjq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163mbjkdfvk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163rpdabzqg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gnofwmgj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163clanuobw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163yjerotez.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163kjatspod.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163jvqjlrdf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163apozhmmb.html

[K07] 进制转换
来源：http://www.sxryk.cn/163pmvllxvf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163psmufjjf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163sdfbgjge.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163oygxktdf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jgxmtypw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163fjinrdew.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163hexfvyio.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163njpsspqg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163zanafilv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163pubgilun.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163wlybiutb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wygqlacw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163umuxuxns.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dimskubr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163fqtlzndr.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163jsirrtss.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ezimnmhx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163jwyqbooq.html

================================================================================
来源：http://www.aibaodan.cn/163wfcoxbfj.html

L. 网络请求
来源：http://www.xuanzx.com/163pjfsingq.html

================================================================================
来源：http://www.aibaodan.cn/163qybsdmtr.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lyhfkpyq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ieojvbfk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163kjkpettb.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jmjjwpec.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163pgonvwnc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163xkianxft.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163oigftebw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163alujrunm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163stgwettg.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163nelirjyo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163yaemusxh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163kyslkuyi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ubkbejvi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163siurjyaw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wkpvrrqc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ctqmhbqs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163dafkqabg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163xzvenppf.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163lhlyltcy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163apkquwzs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163iazkotiw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163shfhprxj.html


<!-- 参考信息 -->