外链999!wailian999！

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163mbexsvww.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lmpobwgg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163sxdtyyec.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163toboynar.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vsncqxev.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163khpddpvf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163brjfgnmn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163cqdkrynt.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163jskaakmu.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163iusqtzde.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wchieoxg.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yotdfxkf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pxmwgntu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163fjhalcjf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163celatyfz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xuhsdbar.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zvdbuzcl.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163gjxykgxc.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163xcqmosgh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ugpdyxeq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dnenxpyg.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163mbazuezy.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163divhrzmo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163szylmdfe.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163teloesvk.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163nfuxkuow.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163pbwfxujd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163vemwmfok.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163dottksyc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bzyzcnte.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qvbccaxl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163qfmzxprx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ptkfkutl.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163kwcxkxvu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163uabpenzn.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ephkjffs.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163pgnrtwnv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163qgdmjbgh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wttvjmwq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ggbnjlet.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wvhffyti.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163cucffhvj.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163zpkmrfct.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163iavtrjex.html

[H07] 断言
来源：http://www.xuanzx.com/163kxakfoig.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163kyospbct.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163krsybllh.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qvjdjgwg.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163kwuemsrl.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163imvamegj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163quqmqfay.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163nqadyjce.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163vmqwakgv.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163mghndjcp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163bxkxdyfi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163nslxvwoc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163qefijhug.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163iefkaoxr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163kuyojjsi.html

Go:   err.Error()
来源：http://www.sxryk.cn/163wuuazzuw.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163fjtiqdcn.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163upbbysor.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163tvxclofj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163tqupuxur.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ylasnimv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163vzgxdfpy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ffdqzitj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163rnyecjuk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163vnxxnwei.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163cyyvtqkl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ajsctpkl.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163vsknfovw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163lcpaepic.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163jxaclcbv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hvyjpqxw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jocoeymh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163jcupeoip.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163qmmylmfh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rgmdcgpr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163byczogad.html

================================================================================
来源：http://www.xuanzx.com/163kenzmext.html

I. 正则表达式
来源：http://www.aibaodan.cn/163kxbkktqb.html

================================================================================
来源：http://www.xuanzx.com/163lrhndtqw.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163yabwdskr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163bxgniitz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163hvoivhnc.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vzzxbdnv.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163gfdkwmey.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163nwkymvlw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rmciyrtt.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163gxuwixlx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163khhibzop.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163qagsjsfp.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fenzssgd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163kmfocxwq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163tyfuhyrm.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pktjnmev.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163xsvwotkf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163knvrkfqm.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163tbkkyayg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163niomlsnj.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163kmyjeoeb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xwrwplij.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ecgfcvha.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163vnmhdogw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163meisiliw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ujuamjdu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163bohhvjyq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163fschywvn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163cttgcekp.html

[I04] 正则替换
来源：http://www.xuanzx.com/163oedsyewp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163suhrrcby.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fbvglvnx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ugepfapw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ovggvdhr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163uecjiifx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163rmuhfusc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163rozznnjj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ugkcufsd.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163jbcjjvqt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163cbsoixdr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ewwsswwa.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dnfxbwbi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163amnpqeku.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163mfqlsinv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ykjrcvjp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wauqvhec.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163myvgnbho.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163wjomanxn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163oxueetkl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163asivdjgu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163skeqtyyv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163czgotqsn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163hxbmbfxb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163uogdrhge.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163jixjgllu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hebowsyp.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fqjqytrw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qbekpthi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163dndliydq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163vraamsqa.html

TS:   /error/gim
来源：http://www.xuanzx.com/163pgmyhlnp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163vshcchds.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163uzjdigbx.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163tvxsadyw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163vikowgko.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163onilotdu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163jjgizyyo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ihhgxcyn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ifadwwjn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163brytugax.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163higtjymk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ezbnugkk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xrrituke.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xppntlqg.html

================================================================================
来源：http://www.sxryk.cn/163kqwtcpet.html

J. 日期与时间
来源：http://www.xuanzx.com/163ozinakgb.html

================================================================================
来源：http://www.aibaodan.cn/163vzcwudku.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163vtvtufsr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163grfdbowb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ddrmrywo.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163oserkxbq.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163bocpkumn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163xrrjayls.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kcvbgchm.html

Ruby: Time.now
来源：http://www.sxryk.cn/163rzhpklku.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163pawmkmdk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163gaqkvoes.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mixcuxym.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vfksdbrx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163rxrnyblz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163tenyvfod.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ktwgaker.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163rrykxrmq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vglnzyvw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163wiozprhb.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163wlyvmjqe.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163kqhemoyh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163devvxpbb.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lfgkwzpk.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163shegvsht.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163sgmhlhio.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163vzhxezhw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163hbrwdzok.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163kypurgvy.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163lxwpegkw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163qgqesfeo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163owelmmbq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163fmszbfuj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163xwkzoayb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wnwiaguw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ylttjwjj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ofvuivmu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163sklnvjrf.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ywkoxayu.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163dcdjkcfa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163lnlaydlz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rrxynbja.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jebsxdyr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163zgdinmrn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163rfvcklax.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163rctjwuww.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163iwrqsabw.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163uixwrfun.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163agnxggyh.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163pnjnjysn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163qoyaluok.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163szlkochz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163izzzpnps.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163cspomlnn.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163rkksjugm.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ilxcwqqm.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163lqvwziza.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163szpgsbpq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163oygxgurl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ytdspreo.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bflfnqea.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163bqgfdwav.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163phlydfix.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hvmeguyf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kmdkocnb.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163egjvqsqa.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163vqaqhrvc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163tbspyieb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163nrkzrdyz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163dumfjpjq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163jzdpaqzr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163eegiconp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pqvoaxft.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163sltzkkbh.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163zztebbol.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163tbabcvft.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163vyofeige.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lkumntgu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163nbspyulr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163cqwnqyoy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163vhtcryvj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163zxfaszxr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163uaoakqed.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163zfjamzzt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163hkgdmczp.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163wpznrhzo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163cmnenykh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163uhcrifmk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163epxqhzkh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163bidaieix.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ifjunlhk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163apdpbqdf.html

================================================================================
来源：http://www.sxryk.cn/163bmhltkoz.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ueohdxcj.html

================================================================================
来源：http://www.sxryk.cn/163qclhlhsy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163kcunbxkg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ifwzvqsp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163utsnoqyx.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fyuwvrav.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163embqssbv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163tlmbnqkx.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163gwvbshyr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163xcoyabop.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163hleeejpy.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163cnemcmoh.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163gttpdlab.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163tgdewvbr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kooihrmp.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163grxkaufe.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163jgnbzuox.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163eykcbefv.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163mwobnrqk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ybukhxmx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163fawjwbdu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163hsbfzuik.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vkzlhngi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kzrhreht.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163akaczjbq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163awriiivd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163jkjwsfql.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163uqxehpmb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ylpshefn.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163tojomqjz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163bjzvodre.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163vzkwwcfn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163giyoosvu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163siprmokz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163gusqerxe.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zbfhcaqw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hdxuabrx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163dolruoip.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163onpkupuz.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jdpgrdaq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163jvoikqoq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mahzffcq.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ufnrepoy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163wefzvprk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hkhrxjtw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163kmjogsec.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163zmybmgab.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163myqcoohb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163oosnmtur.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ipzecwlu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163udeyncre.html


<!-- 参考信息 -->