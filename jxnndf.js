外链999!wailian999！

[H07] 断言
来源：http://www.aibaodan.cn/163hgozasdp.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163msvdqhiw.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163cnrevcgk.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ctvvsbds.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163otvulkmy.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ckktaeso.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mdjjgqei.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163bajxwffu.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163lbjzwlja.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163kmpnabxj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163yuodsoeb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163mhghkvhi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163fwegxgjy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163foebenvf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163gxliiojg.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163clvpuwob.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163xgdlnbdo.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163sxhfcqzh.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163aetdqoty.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ncjylbio.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163mlxntplz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163mgvvfclb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163neocuqrk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163nupvvrdd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163argtjupc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163fzxmykzv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163lgagyrkr.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163kdlepdme.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163egdccvhm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163qxnirwwm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zqyjqobt.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163onuuhzcz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163dieewsix.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163lzkuxhxy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163opsxlvov.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163kfkcmzsa.html

================================================================================
来源：http://www.aibaodan.cn/163oqdeiqgo.html

I. 正则表达式
来源：http://www.xuanzx.com/163glqkubky.html

================================================================================
来源：http://www.aibaodan.cn/163ckpfcvae.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ogikqclw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163qhhawidk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163itaclinv.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rauibrys.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tvkvdyyg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163yfcwdehw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163lkqnwrng.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163zvcngupk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ffrmkqel.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163sehuvbnp.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163qooegbci.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163dnrfnqvf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163udhxtyef.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163vsiwnvgh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ybnbuoju.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163hknejlzd.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163miwwqqyl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163hwbhehaj.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163xsskevla.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163mzozcxnx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163sbfntytj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163zqirwtwa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163rekxkcdr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163nxdnmlef.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163rytvsvoq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163gabxhhzo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ryakyurs.html

[I04] 正则替换
来源：http://www.xuanzx.com/163qrcclnow.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ereipmyd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163tfdlonxj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163fqzeftuz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163hraqiklm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163gemhmeuz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163jmwxakhe.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163mxzqfppp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163onkiiigj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163hnmkdkcq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ebwawsaq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163anfzfhok.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vhdurjyl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qivcfory.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xgtwbbpz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163fpovmtdt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vgnilayb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163npoviqqf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ulcacygt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163glyjmitz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163dkkifbdq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163saaoldsa.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ytfumytx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163uyvxzcpf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163dhpcsxai.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163aqcgjked.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fjfxhbqo.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163cwjpgxqx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163hvqmblyi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163iuqwkycv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163aiywflib.html

TS:   /error/gim
来源：http://www.xuanzx.com/163jvxolvrn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wnjzhwyi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163bjufcyxf.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163opoafhvt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163fepegqps.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wypmebuu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163gopdaefv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ltmfohly.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163uajddqvw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zkzwfvcr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163kekisfvq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163dxwakksj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163domftclo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163cforhjhq.html

================================================================================
来源：http://www.sxryk.cn/163qyrymtpl.html

J. 日期与时间
来源：http://www.aibaodan.cn/163buyjbous.html

================================================================================
来源：http://www.aibaodan.cn/163cplvjwxr.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ctchvmzb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163jghsuonm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hesatntv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163awbxurfx.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163edwbrata.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163enebjgyh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163glkkbzds.html

Ruby: Time.now
来源：http://www.sxryk.cn/163onmtqsfs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163fdqrjqyy.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163sizbrsmu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nmxzvaha.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ndzkmyuc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163uujvmtcl.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163lpscssru.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163lpevyubg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163blalokzb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kirclpfs.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163rabhkkcr.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163nnlufsfg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163vgteenvl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163jtmfqxpq.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uhbhkuce.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jgvyoapd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163aqnkhspa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163aocmzkqu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163lgvmmxhw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163nlqhgbwd.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163sluidvqk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163twysvili.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163dspnrabp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163kwjxqfql.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ncwahupx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163kqzttvmg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ofamzzbh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ztcvrusy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wslwxooc.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jrtbaccw.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163vskifrzh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163orvlwxwk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ymwvglzn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163meonifvw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163aghxtcwn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163hpnbsmbg.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163hsdehcef.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163nxsfixme.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163jybuqspx.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163jgxtlvxr.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xwcrqsxo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163pggacvav.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163jnfjfrdm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163zspjcpyb.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163swzxuwln.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163kutgvnkb.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163otxcvdvx.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ptvvlsbk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tgowywez.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163jjxonzyn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ffamdstf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xkexfbek.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yhomqfqm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163qfakvbmw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zzmvqvwk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163njtnbmbk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163rndorxmu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rpijhowq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163bzgzqacz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163zxbbyxjn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163jkshtnme.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163obgwcldj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163jpzzhxvi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ccxrmard.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qbrattls.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163nkfuihuu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163iltjjwyt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163qqajbtst.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163axxtddxe.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wjyftmus.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163mngjnwhw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163qunmvsrw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zzrvgoyr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163udehldhm.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163midsailp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163prefplbu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163raledtit.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163liuthmov.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163mgkyfzed.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163fsqfossy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mgvhudzl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163qiyowsts.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163hmwokrmx.html

================================================================================
来源：http://www.sxryk.cn/163ccuivcqh.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163zceklthq.html

================================================================================
来源：http://www.aibaodan.cn/163htoqhfra.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ijgqtapa.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163plptxjig.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gsgvaijm.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ynsawmsy.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lrtflibw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163wjocbgkd.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163apbttsle.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ugfpybtu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163wlsvulev.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ldmsdiqb.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163yueyvwjr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163hrxkiyct.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wwppdube.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163umlgbdre.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163qxxxgabx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ytkkzfle.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163jolmlhka.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163icxioxdf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163xsqrulmz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qxlfuscv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mdnjdjsz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zhubglcc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lspkgxxm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163bvesgndl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163mgftsfmx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ibzgtopu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ktouhsjb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163silfckaq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vjmmzmxj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163zzmughre.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xamjuqsv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163eeeojiek.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bbdupfed.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cfoxjxfd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163orikedyp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163imjvabkr.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163suhxygmi.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163qkygurif.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pbhubylg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ahjjtbqg.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ccsykopo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163irlsejpj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zmxmjord.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mxfvzcqh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ghzoozgz.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ozzpxmxs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163cjaggrdw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163bqhbpyso.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163omgztkaj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vicjdkjs.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163oievjpht.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163puycbbsn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163fyzydcsv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dmlymffn.html

[K07] 进制转换
来源：http://www.sxryk.cn/163nqufmzew.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163aqxnwcja.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163djnufqjk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lapqtoco.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163yxxzxqev.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163qzrkldpa.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163llalesgu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163gbpioylx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163vprmccjw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163xqutvwjd.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ryyzbziu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163wpkujoev.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bkufbwxz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163cdbshyoq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163mxepgkvt.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ufriqssb.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163nicmhpot.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163fpqhfako.html

================================================================================
来源：http://www.sxryk.cn/163yfopedmt.html

L. 网络请求
来源：http://www.sxryk.cn/163reyxmbke.html

================================================================================
来源：http://www.sxryk.cn/163npaqcsrh.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163pczpabbm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163mpktfmtb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163pacwdveo.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163klecotac.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163oqctczwn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163fxfwscpf.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163bjduzlra.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163awxttjzf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xvejwmto.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163veldhyke.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163gakpbxkk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163qpxgjwvc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163szrsmgjt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163imctklje.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wwajnuwb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163wvyssfzv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163hpumivfv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163mapvjwyd.html


<!-- 参考信息 -->