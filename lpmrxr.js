外链999!wailian999！

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163eswccszl.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163xnlkjioz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163bayrqysk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163abauvlee.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163irqvbhdw.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ddmnhlqj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163tchqmufd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163aepkesso.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163navgyrnd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163trswcldm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163nbimtxsu.html

Go:   err.Error()
来源：http://www.sxryk.cn/163pvonzgvz.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ditnsrvp.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163lcqslawt.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163jquqlchw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163zeiueucl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163fwtwhwcs.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163nceixrab.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163jiysthnm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163vskczdxt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163xprxhyup.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163iujuhvhp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163yioffuey.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163xorvkilm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163mmzqnulu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163qfpihwxk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mmgsdsob.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ijjgogea.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xkcpiqts.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163bjyhutyn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163bzyewnjl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163xccmoeoy.html

================================================================================
来源：http://www.sxryk.cn/163qqamltbr.html

I. 正则表达式
来源：http://www.xuanzx.com/163lglzcknn.html

================================================================================
来源：http://www.xuanzx.com/163pkmhdevg.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jtzvhcar.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163azcoggel.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163oaqekdyf.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tsvdipzc.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rkchgxxu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163bteengri.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163kgktjktc.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zqkggqax.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163kxaefskz.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jffgwqki.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163zwqnstzj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163qyvfrcib.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163hvojqwnr.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163zfvzzfwk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163tekiwtvr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163sdxqauha.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163cobtrgrk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163cqsszzbp.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163oxzpcpux.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163poehepeb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163covtwepa.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163wtssfnyg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163kghytdqw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163yryvpxsr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ilratwac.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163iuecwgjt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163prwdbvkl.html

[I04] 正则替换
来源：http://www.xuanzx.com/163zadhapdt.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163pmxnjacw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163dmspxztf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fanmtxzj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lubhbabz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ezpwehtv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163rdkkzqbu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163amifcvck.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ekvgozef.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163qsdqpjrw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163jkfrmxyr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163qojswork.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ovbpnxlk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163klxjkitz.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163qnjlspif.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163mginybcv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bmavaimg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163dhiymrsu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163rtiquiab.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163oamyaphr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163mxphofqz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163pkrvzqbg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gnzjxdyi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ypmilhmt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163jukoscgw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163vjlhvjcp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rgesmsqo.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163oldqbhio.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163yvmxufij.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163isvwvpwl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163pxicvqcz.html

TS:   /error/gim
来源：http://www.xuanzx.com/163duboxwbk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163bbzjmvjs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ngnkvmlc.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ppucdujw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163qtygehni.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163fzchgbpo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163sylphwvu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ccrooxhu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163roiouycl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ptakslos.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163lqudkbjl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163eobzwiiu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163hefhpiij.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163lmnynovb.html

================================================================================
来源：http://www.sxryk.cn/163cqynubsx.html

J. 日期与时间
来源：http://www.xuanzx.com/163vhxpqfkj.html

================================================================================
来源：http://www.sxryk.cn/163qhxdttry.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zxfxplax.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163xfmktduj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xklgkxdx.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bfgptjzi.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163iiymjwco.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163remtcejq.html

Go:   time.Now()
来源：http://www.xuanzx.com/163vhobiygw.html

Ruby: Time.now
来源：http://www.sxryk.cn/163aqqhoqxf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163kxayfetu.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163exmpuyfu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ehsnuvln.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163aqpowqsp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163hpsosucv.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163jswstojh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163wfxjqrqa.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163cddeoigy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ncjidaym.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gqyrktbr.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163tixqgphs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ocdaovfj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ewbyyqvw.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dmgtyizl.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163irblmwny.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163szcwueng.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zeztrzbm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163usnkzuli.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163emzrowgr.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163leyntmnb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163flengeey.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163lnklxfar.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163oacfuzya.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163xaxmextp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163gswtfzeq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163noypwfwx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ihiykssr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163fyuohsjs.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163sxrayevu.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163kdxfjcta.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163klckjxoc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xuynhwkw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hrnzsadg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163irgvlsip.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ksucugai.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ylkvsfkz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163uvqoadfx.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163mzyfriha.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163aipvzeua.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163vthulohj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163qyidahea.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163rlzjuqwi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163gkfqnjmj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ospkuuoz.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163olyafhqs.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163fauojadp.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163emjypefo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163sxitdrmw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cssqzecj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xseymajj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ntdlwjjk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163uflpjqwk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163yfvuoxyi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pgfzrgrc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ysywhyce.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163buvzdtxd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ddglxell.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ofnvqkrc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163qygcaxsa.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163bgdwwrzj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163vzzrwxkz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163aofsplyj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163delwkvum.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163xgkzsnqc.html

[J09] 时区处理
来源：http://www.xuanzx.com/163xfauvxkj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ptoquqei.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fpdiqvmk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tnpafvbk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163yynhjgco.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163rqvfymue.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ccxtytdx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163mgudphjl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163iogtmtxl.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163uqvscjct.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163rhinpiuw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163yirwyagu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163hcsloshs.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163efpmwkag.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gvxwdhvv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ocsemxut.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163sufnrpot.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163tbsmnzkt.html

================================================================================
来源：http://www.aibaodan.cn/163aatwskke.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163kqmzoklp.html

================================================================================
来源：http://www.aibaodan.cn/163swplpqur.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163cvdpewbo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163emjlspjy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163uryismjs.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163baubjttk.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zamjttgj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163cofpplrq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163mnhvupoy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163lcobkwjc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163vemrtgjh.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vkiyyoqb.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163blizokuh.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163biyeclwj.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nuvxobga.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mvdalohw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xrqdgioy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163tcwzttco.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163mhrthtci.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163stbgttrk.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163kypmfuro.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163onnxxgbz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163sosseygq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fgttpqwt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ulnmlene.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163hlegemxo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163srakdeux.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163zhozpapf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163cbrwiddl.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163aprcodci.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163evjltwba.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163fvenwhqh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tuflkoqo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163suuqcyyw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163mtpvrdwp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163agprjfkc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163imdswgqd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163jzxanpcl.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163wivmwhwu.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163pafmeggx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163vjzurfnx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qtwlncie.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mktvvexg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163xgjurueo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163plcmvbwf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163iikfstdt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ucufqump.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bwkqtwdk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163evrbhqzt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hlgtdezs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mxokkncz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163sfzlxidx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163xrzudbvt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163urqeheyk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163oaixicxd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163nonfdyab.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163sugvecsd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163qhchzuyg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163rfdpfjjw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pdlibyvg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hzhrblke.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163thrwryxa.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bjdcbjun.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163nngemozu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ojsjpffo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ngrwnfes.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163fjhktdsc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xwkhheis.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zlqdlxcg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163iwvojszt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163mvjmchts.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163mkzrjern.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163yddtbpds.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163gylcmqqj.html

================================================================================
来源：http://www.xuanzx.com/163bzrsqrey.html

L. 网络请求
来源：http://www.xuanzx.com/163gjmsybjt.html

================================================================================
来源：http://www.sxryk.cn/163qihhdacm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163efjikefm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163pxhjrvwg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163pulwteui.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163uixmqpdf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163lohhcnwh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163noxofyjq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163bpsydvxn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163gueykurs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163mpcdiyjj.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163mvatjvti.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163tifbkdsh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163rchozcef.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wargppvz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163outboice.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163isorlbdk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163nuavzpfw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163vcagzgqs.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163uwcdclsb.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ejmuitgy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163jfmnhzvh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163quhryhyh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163verouqcd.html


<!-- 参考信息 -->