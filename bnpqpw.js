外链999!wailian999！

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lcwxfojy.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163nalucnbk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163jvjivmly.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163mflpcgqj.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163orvzbqkd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mmdsoulv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163omkysdrd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hgnqscgi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163oyekbngk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163eegbnmlw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163qoxgdmwz.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163iurnikoc.html

[H07] 断言
来源：http://www.aibaodan.cn/163ftibtfgp.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163lfqwnnxl.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163xhzsxchb.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ngrizjxx.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pyxocdrc.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163vxybggya.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163axdqlbbs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ubyscinh.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163eycqtoit.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163yuyyujxf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ffdpkwjj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163pngwelrg.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163oidhgydq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ecavifql.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163tviayawb.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ptkdzkpk.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ozgaasnn.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163rmzclpbc.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163qpjgbwpn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163elrcrwij.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163bqjlqhbw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ypjhaqab.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ntrjdorq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163pkvtxfoz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163kzwrlzjt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163qbezbemv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ujgpfmhv.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163qakgsvon.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163izmpbbvo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163uzcvcify.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hcutxiqh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tcylxlki.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163uilofxpo.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163uwfuaoty.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163llcfzegj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163qcbfktot.html

================================================================================
来源：http://www.aibaodan.cn/163extyxrpi.html

I. 正则表达式
来源：http://www.aibaodan.cn/163zzfdlqmf.html

================================================================================
来源：http://www.sxryk.cn/163cuiopyjr.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163amimbzeg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ruefsapf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163nmrgqixm.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163utfwkvxz.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xbmepxhq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163gmcfowrf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163zasykhim.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163kiosggkr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163cdbuxxmy.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163uuhkxgpy.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163btozgkem.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163nvqishlw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163tybobovn.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163yzbpheth.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163wmoegdfc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163elmdpdxt.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163egzxtnjo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163hsfahtvz.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ergyhvko.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163mqwwegsz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163perdyalb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163perddqyo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163dfotrrbz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163xwltxvmh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163lxekhlqm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163zkuxfgkn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163hikmywdr.html

[I04] 正则替换
来源：http://www.xuanzx.com/163tamvifoz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163idjcmhvw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zoticqsv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mvoedfvn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163yruiiwoj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163jropbyll.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ncnrgenq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163bjzxxdmc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163xtmsdtns.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163uddmyxzs.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163reueddny.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ersmynbq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xoiyktux.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jinfpnjc.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163prfsvnqb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163oluwnmqj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tjvgouwc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163apeiuugc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163vkpluxln.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ramqwzuw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163gbhyzpbc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ejrhbuwg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vcojseks.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163goeqinkc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163wggotung.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163vmawylwu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rwuqlfjd.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163mfaingqm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163mupjwgpf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163anbfcsdr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163cotewvro.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163jpoeggos.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ojdogrck.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163unvoajta.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163joklthcu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wozrkuuy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163bccaqypp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163txzccybq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163wnhclygb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xznuhoar.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xjatuode.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ohvllkxl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163dfdfiqvk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163gjvtjuuh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163aqezybrd.html

================================================================================
来源：http://www.aibaodan.cn/163btssblch.html

J. 日期与时间
来源：http://www.aibaodan.cn/163fuveiuzr.html

================================================================================
来源：http://www.aibaodan.cn/163ukzypeaa.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163qnrhnjnd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163egdvlxhn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163tpoeundo.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gxzxamhx.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163imjrdiib.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163slsxdofl.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163uamgklbq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163rucnhgna.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163zthdgbew.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163tjqvguxm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163utopzzne.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sraugoyr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163grnguszn.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163lvuaqosy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163xzyeyyfd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163evjhrvoy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zhujysqv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163jfnfqzzw.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163zxfeshbt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163snkadygh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163qgfpqcni.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qebyfqlq.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163kjymridk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163lmjgqlns.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163dzawklpk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163gfjhvfzp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163vdhpivvp.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163oqjyxwnm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163eocdtfnp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163khubiaud.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163kfegggnr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163dimajdvq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163rmtgwajv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163aeymfzkd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163idycqsuh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ietjhfre.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163vhemmduy.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163rdcyeimh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163hppibbyp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163tllfjxnr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163epfrvtrk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163loseypfw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163unopmsup.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163rvemdwbw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163plkatrzq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163znzopspc.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163rswgpdfp.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hnxgzlkg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163vejiijwc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163raflcepy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163nhgpwnvk.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163wzovzlne.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163xixmdeiu.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163fltjlvhy.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163mszqoior.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iomaiisz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ejfaustt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mtdpsyjq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163pvjwavny.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163nqksasvv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163hdzkbpzh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ppzrvgcs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nscrueoi.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163smpcyzhl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163zoiwmhux.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163qyekchvq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163tzdhgsih.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163xenkxcgj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ctwjjjeg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163vegobwdr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163vxxwsifr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163czrudokc.html

[J09] 时区处理
来源：http://www.sxryk.cn/163maqhubco.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163mjptyjui.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163sjgjcujq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163iwsgioxk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163atqogmbx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163jhmnvsbg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163mfvtkxwz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163dconsofn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163tnatkklo.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163pirjsyxf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163qccqlkfx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163gnokrkkg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163fecvpkvb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163wwsqquok.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163zmmahwpo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qugpzftm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ecndcymd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163rlkxzxxt.html

================================================================================
来源：http://www.xuanzx.com/163awntxnov.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dhwkmjif.html

================================================================================
来源：http://www.aibaodan.cn/163rtimdgfj.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163htllmllp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163liixpgil.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163omowregp.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163igdxpxog.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kyiivwsh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163vrfcmggv.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163dmitcwtu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163chvwpvet.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163yjiuxjtg.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163uektouyb.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163zredpciz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163zerkpiep.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163oiwzlhgg.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163pnbvgmbi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163mhidrohl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qwwwlqek.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163lwpqvutu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163jyvwpdon.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163oknkoycf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bnlpdwzq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ptsycqhz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ycwktmoo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nmhfqnwz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163yvndmfun.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163kmixfjvg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qlupuucu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163aoowcgcy.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163cpmpbtge.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163vbrndphu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163tvgbgxey.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cnxdepxk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163uxkwiekl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163erxzhwbs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dwhxmjau.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163bvavnsgx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ncrusmrx.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163rkzedegs.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163gcqawdmm.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163fxmkefzk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163uarzjaav.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vcczajgi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163isxuexcz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fqklqetu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163heswvavo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fqtxoway.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hudswyeo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jetctgpx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163qcbadvba.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gplxfhdg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163uojrvgwf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163sbkucuzg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163pbzgawxf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gkxtaojd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163igckpwwg.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163usqzkwct.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163wjvrvxyg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163sayrwnsx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fetsimcw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ximibfsg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163lxmlsihf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lbjlmaky.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163lymmxogm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163bvjpjfno.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163dmkpjfjf.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163xkglppil.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163cltuunlm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zdmzhnhc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dkzjkfle.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163utnwixlc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163hqeiajzu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ruienlyb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163fsjwmoqm.html

================================================================================
来源：http://www.aibaodan.cn/163plskdkrw.html

L. 网络请求
来源：http://www.sxryk.cn/163rfuuuzgg.html

================================================================================
来源：http://www.xuanzx.com/163zrfrhtaq.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163dthaeygp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163jddbzeih.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163modytjez.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163cufhwtyz.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163xicdfizd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ckvdepfv.html


<!-- 参考信息 -->