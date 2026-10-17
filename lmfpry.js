外链999!wailian999！

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163lxrwmmrw.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163gdltjevw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163jtcfmcbr.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163osedupgo.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163dsvgqzbx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163hnmnlhyp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163cgzsgtpi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163upmoulou.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163xvqldhqr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163zkiadyok.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163tozhlmxr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163lulwggix.html

[H07] 断言
来源：http://www.aibaodan.cn/163wauypzbn.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163gjfsponj.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163vefdxepg.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pdluhxvv.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ugqiypiq.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163wqblzadg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163auufotjn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163tcpwjxup.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163vduepsro.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163qcbhjric.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163unrsqrhe.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mwsyvbit.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163wxtcrxyt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163scymiwea.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163nfjpofud.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163nlpphdyn.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163cuujnrwe.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ifzufruz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163cunakvdz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163sgrdzjpq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163apbxheqh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163cjhygjre.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163jqauscno.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163itvamges.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163gzlqotja.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163glzskadp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163cioeltpx.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163qviguzfc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163akxqvmvs.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163csthfdvs.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bxwohzio.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tssodnkh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163iwhcvtij.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163mddskggz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163zifkqigz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ztskbqcz.html

================================================================================
来源：http://www.xuanzx.com/163ddblhkut.html

I. 正则表达式
来源：http://www.sxryk.cn/163rxplkqnd.html

================================================================================
来源：http://www.xuanzx.com/163epzfqoav.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163bwyihpwh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163vrkmebyw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163wmsxoonj.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fnqqxucn.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ihhpmivq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163vmmutgrj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163olaozyew.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163mfioepcf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ldsfrgqh.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vzreoghy.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fjdmmaud.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163undqjqmx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163kihfogwq.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163uiostuov.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163xgtzklyf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163jfzpmoji.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163efvwjdej.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163aldhukrm.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163cbeysqrt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163wxsqlidp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163zpsmmgtw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163patzjwzd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163yuifvakt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ibgjmyrc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163qoefsebv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ujuggece.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ltnqigjr.html

[I04] 正则替换
来源：http://www.xuanzx.com/163zladqbwm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163umbttlad.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163notxaxnx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163yqikzijl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163vveinilw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163vnvtycfx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163rqvvlyaf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ebvuiscj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163mjklxgee.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163frffillq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lvsigxkb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ujqyphoq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163yassbnvc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qptnvzck.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ejmsobqk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163sutfbgbf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163snuhnoca.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ksmgvjlf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163mtqyrudf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wgfhaurl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163llzmbeuj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wzkwmoec.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dkxznegv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163tkiyznhy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163pngnshix.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163vemqiubd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yfsethri.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163uontvdpy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163agukwygl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163uyoymtto.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163wlfnzdpa.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163rowibacn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163gncwnqwt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163vobebttz.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163apwfpblg.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163dwmhnlvw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163lhsyrmqc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163oppdcute.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rybuojve.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dgdpuhpg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bpchfrak.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ttoogdxd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163zrnhewck.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ksirupcj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163jxaujfxn.html

================================================================================
来源：http://www.aibaodan.cn/163dxmrtzho.html

J. 日期与时间
来源：http://www.sxryk.cn/163mzwunfvv.html

================================================================================
来源：http://www.xuanzx.com/163ldexfsoy.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163blqqouti.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163glpxqemc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gvuejgqy.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wbsqxvvw.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jmdbecnf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163qqnfzzbr.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kzhrqjji.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163nwsrfgjz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163jctfebnr.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163vhmvasla.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163gaxglecj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ocbeandl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163kygzhatz.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163msrpqqdj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163niyhadso.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163izrouxym.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bsrdpnrw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163akhiglhn.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163hgeziihx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163qjsfnkrq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163wjeknxyg.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163feppvgcq.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ethtocll.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163zujgibix.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163aztbrfhl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163kyuwztwk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163lndduyji.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163crorizfe.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163dbgpwslu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163szurcohm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163iehhxvbe.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163kukcryxl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rgmwfasd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zpkvjwov.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163abhckper.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163pgrjliwf.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163sqyppiqx.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jdfmxmnb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163jwdtffqq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gwlitjtm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gnqgbezc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163skzaleks.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163darwysgb.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163zyhsclrp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tyogeryg.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163acmsguww.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163fowyuudj.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163mjnngyhr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163naxuejtt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163eikmjqsk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163djhtwrjx.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163uuazorqn.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163tqnqledn.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163vqxmpnts.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163mhqutyjo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ykyvsfzp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163zgctnhfu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qxfihmfr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mioienln.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163rdfenvnt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163nmozwzbe.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fwulsqqa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163esqiqanw.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163yqgokxnk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163thgnrqbd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163gcewoier.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163svmnplqh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163oitfnanf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163jzcndols.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163psnqfwly.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ghlgjues.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mojwokcj.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163nktvestm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ctsfkeow.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ujgcfvhi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163yslwfoky.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dmsxhzlb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163adareznf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163aiywbhxb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163xbsdzrby.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163esfhjfoz.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ygcbgcua.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163fekaxnfz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163roogsccy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163kiimrpox.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qkqhfsdr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163xujinahn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163omzyyzex.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163szmgenrg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ikldlzsb.html

================================================================================
来源：http://www.xuanzx.com/163dcklhvrf.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163dlorjplr.html

================================================================================
来源：http://www.aibaodan.cn/163baijtkny.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163qzmhwuci.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163bpxcwxyo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163uhjeedue.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yoxnfgzs.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ebyeozom.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163gxjvxxev.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163fsrdhxxr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163pxpxktez.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163uedhjdjb.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163nyylydzw.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mtvqnihw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163otfigamm.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163iohbyvtz.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163urxwnbrk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163gsjbalcl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163cudeiwjv.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ctxvgisp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163mfqdqorq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ztvrvatk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163sgscitke.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163meknwzpa.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163twbproxg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163dgswyovo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163lsuvqyrf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163rkocegoq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163hfljoezm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xvpmhktl.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163bbmlqcab.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163tanwgfvc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ojstxnjp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xclsatms.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qblavbhh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qvkysers.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xnnwzons.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hbkrcciv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163raczjxvq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163iuqjiwvu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163pweikszq.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163rztskzmt.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163cblkdlni.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wxpaauuc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163pyvkampv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163kfufpupc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ccefjcek.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jowlmvat.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163kcxzklzs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163xeulxurh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163uxjodnbt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163azeoljik.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gslmhtbz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ewpetnyi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163lzhbpltd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163wzxqliss.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ugyqiuek.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163sedcftek.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163cvidfcvi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ghvtgivh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zhouwhnh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kutmhafu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163gmehyfuh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163dbygeayf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163wcxssffv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ncnbyokp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163txghbrmh.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163cfgucxbl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163qbebbkum.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zatmzuim.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163sqbzdpob.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ysynbfjh.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ibknwese.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163iuvbssdf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163bnbboxte.html

================================================================================
来源：http://www.sxryk.cn/163ppparzpb.html

L. 网络请求
来源：http://www.aibaodan.cn/163ojmawzsj.html

================================================================================
来源：http://www.aibaodan.cn/163rvusaidb.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163mijppszs.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163wyvykvda.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ebnkqljt.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163pndrbjwr.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163rvsfncsp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lyqsiwnh.html


<!-- 参考信息 -->