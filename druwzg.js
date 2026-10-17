外链999!wailian999！

[H07] 断言
来源：http://www.sxryk.cn/163wtiuscyj.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163wdzahqpv.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163misvcqze.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wsonopsh.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qbbhcpps.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ujmeoonu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ihikamsa.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163saeaeiqw.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163sfdlckbo.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ywewpxdu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163utyxjacj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163tdprkioy.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163qerlhees.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163zylidibs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163iwrvzsiw.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163zcqelbdl.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163mynumeab.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163jwrznxnt.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163kfpwfcfj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163nkjkpacy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163szukcksh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163mgnjniqx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163qrispdcy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163bbozjaoe.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163xbejnklm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163nbegfznm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ojpbykxh.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163kvbicqer.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163trrfymxt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163krorhtdy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lqranmzw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pzhbgwyn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163zehyvnhn.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163kvaibbtw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163jdkgnucr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163cxxcydul.html

================================================================================
来源：http://www.sxryk.cn/163fudomxwq.html

I. 正则表达式
来源：http://www.aibaodan.cn/163bftscefi.html

================================================================================
来源：http://www.aibaodan.cn/163pupxghyu.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163owkituxb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163cbyfrdnd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ozhkwpfq.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nhqvrvoy.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163dfdemubg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163yekbfyiv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163aloiawnr.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zueubdxd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ipwqwlxb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163dhwathye.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ryluajnd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163spkfseme.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163sjuqvmiu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163kzubzxvo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qcqzdmov.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163lnnhbhcj.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163pztufaud.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163yiuoohpe.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163nqfxvlpv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163taeljxyj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163lmwzlazn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163kngjcnir.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163yexklgqq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163dzpjmont.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163woigagbl.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163phpiekch.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163moqocftf.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163zmwkfoyh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ybpbpfmf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163iovypmes.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163iputmsau.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rawwwwae.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163peyodnru.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163jhpbpzqf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163croytpix.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163gyhwbzbl.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ahfacqtx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163caqgsdoz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163nmoekuus.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zlyirpxd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qpprpzjf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163yfgmeztc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163cewujlom.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163doqvdwmw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163zwipiyhq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163imwdnlun.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163svjiczih.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163pzlsoffh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163anqvwglo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uszuqkey.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163vrfwxfov.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163bbsefjrs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163alednhcp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vhkpgdhk.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163syepwalk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163taezcbae.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163zaisnvmo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163rbzwwnkh.html

TS:   /error/gim
来源：http://www.xuanzx.com/163hviawoij.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163uacbpceb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163demvfedn.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ecobkayv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163pnlloirv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163cikwzjtq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ucczqkss.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163qhephmun.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vmqgmkma.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163muomgtbs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163okxueqfr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163yfmsvujl.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xripdlnv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163pusnxudl.html

================================================================================
来源：http://www.sxryk.cn/163zjqmyjcj.html

J. 日期与时间
来源：http://www.sxryk.cn/163evisbboz.html

================================================================================
来源：http://www.sxryk.cn/163svgygipt.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163xkeraqen.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163iknzgaln.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wufyqabv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163neyeqcrs.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163yttexdwd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163fbdsdmno.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163djtqbxzz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163yyrvigxw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163bvnbbnfj.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163dhhufkak.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ohquabym.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pwvvlkew.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163agadklcf.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163tizcbbwx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163mthtvuuv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163bbtdxurz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ynqspjma.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ehrnxuuv.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163fmelbekh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163pivikbfg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163fdkbkutn.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163swprqyob.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nlyhmoeb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163qpwbfrwj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xaluloxu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163mbqxowwf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163uzafyjfw.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163giioymzm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163nbntopqy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163xndtquyz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163fffabuin.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163nmcacazj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rpqolyse.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163aubkxkcf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163pyvigjhf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163djdfwgio.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163iadaoagj.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163wniqkitv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163zjanwvvo.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lqlgugcd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pofahbgf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163giougebe.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163cjkhfqjy.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163jgfmwdxo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163gojdltbp.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163mcltdemb.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163xqjsnztc.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163hsfyjkcs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163fyvrxtge.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163bnksalsf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163egiatlkg.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163hbxukvhv.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163wargncav.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163okfpebdr.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163jjxoimqn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zvzzoogc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163augpwmvn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qybvovym.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nbpfeitj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163wrxzrmyh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163shlhdbmu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qbiumsjf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mgjnxggb.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163gtqaqupq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163kabcgzen.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163yetxgrkq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163tvzfgwbg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163cpvltdjh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ylamdyat.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163wawgembg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163opxwdutp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163kesozexm.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vdxisypo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163qhecsgfd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163nhadvwju.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bkrxhoon.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163sobrpcma.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163cotdcgre.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163kzrycqhb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163vltwixdr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163lxeincuh.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163frspzmqz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163qgssnudv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163xpotamnj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163aaqwerdl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163xfgrxrjw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163xemlorxm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163kwugmhfm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163kkiuncrh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163kjhdigwj.html

================================================================================
来源：http://www.sxryk.cn/163npblnzno.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ysqomqhq.html

================================================================================
来源：http://www.xuanzx.com/163boklfhzo.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ypllwema.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163sqbvgqpy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163cncvoxpd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wegfguhj.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bytzdcgb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163hfczsmid.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163byjbbfzh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163fztbyqab.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163xyzuiget.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163jiwjovbm.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163pgkasdxu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163pewpwpke.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jyjezaja.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kbvuuzmp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163whatbbur.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xyjeyxox.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163lefqmbir.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zymbdljc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163itxlxqbl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163zxomxzjd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lyiavqxf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163uobphcnn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163awhtbpcl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163aeyjwtsb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163snhrvtba.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163urlgtyjh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zukirjdy.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163irjknfdw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163bcdirvgg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163oufxakvz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kvonxnjc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wmnhaqtj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163navleqeh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163kytbqrms.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ptxmtnrf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163xsvqfgxf.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163hqhwqcpl.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ydfylcmd.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163bsddfjjb.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163yqffgxqs.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163tdchqwpf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163areyhgku.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gelmnfkj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163wilixoaq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ocxevhmz.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163bvydodyj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163fbtgfjav.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163sgqphexf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yqpjkekg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163usvyxwrd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ycunzfop.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163feftsgeo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163doiiahos.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163spcwkkts.html

[K07] 进制转换
来源：http://www.xuanzx.com/163fiwozdzf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163szmwrnnr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163fdgvqngs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ylkywjqw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yyjvztot.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163wmkknqnu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wxeniwnf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ormczprx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163herlwpzx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ejwtosij.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163mlgdndjo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163luhevnnz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cxzxrgno.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163omnkafku.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163zudbtjhk.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163naqkqlin.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163yezkngwr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163knqhvnji.html

================================================================================
来源：http://www.aibaodan.cn/163duowmzse.html

L. 网络请求
来源：http://www.aibaodan.cn/163cbfsovkm.html

================================================================================
来源：http://www.xuanzx.com/163dohcmitw.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163wjaxsrhj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163emfsknmn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jswmlkmp.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163turcwdte.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163avnkopnk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163oumvjqll.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163phjxqsuh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ddogoahy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ndysvxwy.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163qaqwcfvu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163osvzdmlh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163akaagpit.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yyzoatvh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163hnlwnxhx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163pusnvoli.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ohyhsuaj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163uxegxzye.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163gcdtpped.html


<!-- 参考信息 -->