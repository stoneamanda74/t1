外链999!wailian999！

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rbaakdtz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rsqgwcst.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vtbkeruo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ihqvptxl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vfqwdxdf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163avyhxsih.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jxqbsdkz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163iymkqkzs.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163kcpxwvxy.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163iajxtfdx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163svxsribj.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zlxnqkks.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qybnocyt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jhcjzohr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163fxjgogyb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163tpgxwtmy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163lhowwuof.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163emszweny.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163buypwdxw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163tgtpubdt.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vcttjvta.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163veijleid.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163laxbwwwy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163fconcyxi.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163vapmyxtu.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163nabfnbbg.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ojomugtu.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163uyxioxcq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163cpfysqzf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dpeubozy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xhykigdh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163dwybomud.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163jwtkjiak.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163pcitaqzd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163zaucozsm.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163awbruihv.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163svepyxfg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163uasiboto.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cjkhmjxf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163apmuzarv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163rcbvcnvq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ftquiikf.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163jllzslkk.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vcxiidxt.html

[H07] 断言
来源：http://www.sxryk.cn/163noiuyuba.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163cfoeaxrg.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163mhmiojgc.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163keyiovxj.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gbawaada.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163nzdgyolh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163kqfjzyrd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163vcwxlscg.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163enntagqt.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163adpzppgj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163arolvsuw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163nlgdhgmt.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163skuuzvbr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163rpysryta.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163vgumdgty.html

Go:   err.Error()
来源：http://www.sxryk.cn/163eanlwlek.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163pukqbfwa.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163kcgalxnr.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ebkqcarg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163huyfsmts.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163cblzydrr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163trsfhrkq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163oatoints.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163mreglijc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163fnkeuoop.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163yfabdhpn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163kacnxajb.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163epcmphfs.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163vvbbzpue.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163onwqsnbi.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ooguqfhk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pswjiens.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163irllerqz.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ikbzjedw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163qatqbfaq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163rzcqrfpj.html

================================================================================
来源：http://www.xuanzx.com/163qvedhwyn.html

I. 正则表达式
来源：http://www.aibaodan.cn/163bkjipptq.html

================================================================================
来源：http://www.aibaodan.cn/163qgcefndk.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163yluawmul.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163blhsefne.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163bcvofvbl.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wmdvmrtx.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163laaycszt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163qbvouaqs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163rjsewlpf.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163hulajwdv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163yvavluwe.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163hcugzfxf.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163bgbknspr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wcfhyryw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gtyzngvt.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163gtrxjawj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163tvzdiadi.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163drhayvip.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163pxkxpyyi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163oqeuilzq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ozracaxl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163llcaazxg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163qbojijft.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ykbavzrp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ahlzofco.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163kmfkvfou.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163kistmbfs.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163czzzysmp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ilthfvkd.html

[I04] 正则替换
来源：http://www.sxryk.cn/163whehtobs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163mpehztgg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fdxbeisp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dezzcgwr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cnxtucfn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163aecpcpvd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163tdjewtvi.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163enighsuu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163vehdpyhu.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163cdbvnadm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163dpbbnkls.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163azedabqb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ufwezqlw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163usrnjbpr.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163kxfclaph.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163kbjrnjbw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163sbrxonyr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163eezkutcb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163hrjvawdj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zdhbifsu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163eitpkvny.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yslxhsmj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mktgdhut.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163xwwjthif.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163lybgvgrf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163aqlfxscb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163neeifxpd.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163wqsbsopi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163gqhvdtbd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163jcvzumoj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163gibyklvb.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163mkvmplqy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163afdjkjqp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163nhdhqisp.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163fdnoymmz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163nrjfmavm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ebfggdmz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163azyxnyye.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163xrgqhlkl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163uzogxchu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163chalyfoz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163freumfwq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163zgklujsq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163eanjxpnj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ggqqipyv.html

================================================================================
来源：http://www.aibaodan.cn/163kcpistsx.html

J. 日期与时间
来源：http://www.xuanzx.com/163lxessscv.html

================================================================================
来源：http://www.aibaodan.cn/163jxysbghq.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163igeiwswl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163aciegutt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ljxzbzok.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ujlnvazt.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lavqwcfa.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163oerjmwag.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ixmhhvjv.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163vvgugcbc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163gqpurofb.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163dnqlggob.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wsnfwjok.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ldgwtlmj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163yvgrqxdc.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163vynpyrdy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163crpknlrg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163sywaxzdm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xouknzsr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163snbograv.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163lzplngnl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zkqhnzjp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ngczitsw.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cwejstuw.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vybyaeon.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163oxtgvdmn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163jhwkcakp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163bxhlckjj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ryrajcok.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ubqxrdeh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163zbvjcerd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163klumgmsm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163apaebcrs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163hurqbtzx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163fcofobtu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ccdtrfzw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163menxkocp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hchaamlv.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163dszdniaa.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163hicsauqw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163nutgjlft.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fodzxeky.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wafsbxpu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163uvidvcsj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dlnuwona.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163dplmdcwq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ujpyiteb.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163gwoqvzoh.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163rkzrncyj.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163cjxvzbqr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163hnhnlltq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163jafrngqy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163oqsosknu.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163uugidqhm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163kjqeltkz.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163lylgjyta.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vsyuahin.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dofqmera.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163frugcgrr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sdsnijab.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rqqsaeao.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163jbekmgwj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163chstkvgt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vdhlubwg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dzwzasdk.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kwteyeuv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163btoikipu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163xjvqvaql.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mumutrao.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163qfzhalxx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yjpltdtu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163fxfitxiv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163nozuazmm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ljmmqomm.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163swequgiu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163itbftqun.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163kwvccdbe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163joorkibt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pcnbencw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163qklnnfja.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ilhpsskj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163lgrdvajp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163yppgttrg.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ijcvqwaa.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163pmfjdlcs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163gptnluqk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ljxlpojp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zkvabukd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163snbnjcue.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163enxeskfu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163aiuohtrx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163tospoocj.html

================================================================================
来源：http://www.aibaodan.cn/163mwdlvmro.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163wrjtucjo.html

================================================================================
来源：http://www.xuanzx.com/163gmvlxoya.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ozlnlxcx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163sshdtoom.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rlekahoz.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lrwrunrm.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qylsbsla.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mayufxum.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163siepqpzg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163cflqqpau.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163rfouzlvz.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163iuerqhwl.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163fowcchyr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163nvqylpoh.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rbazagiq.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bjuzkdam.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163omjxruuh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163icxxoioj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163nvtjljlq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163fgtxuubt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163poutpibq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gflelysl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zzdzynhv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cryiehgm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163korhsbei.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163tgkokjjy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wnbthvvz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ddwlucut.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163pzjtkokk.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163pmhlotbk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163nsequdin.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ztmwxyzd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163royudrls.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163oyiiapwc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163asqcafkh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ygrxxezp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163frxkdcbx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163kivahpll.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163sphprwot.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163rdqlttss.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163orzrevwr.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zqhgmcwz.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ftcbbvgy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163smyfufrv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163mabguoco.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ajjxwxfb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fyjyhydw.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jeldaqfy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zmpkrghh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163cqobyasz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kkdwnhgh.html


<!-- 参考信息 -->