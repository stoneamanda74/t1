外链999!wailian999！

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163uyhaiumg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163fynwaqxo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163skwkxdkr.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ybkdngfw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163wfqmhzjc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xcoydwxu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163csmsrdfl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ppxaegfq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ompxgidc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ealbczja.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163xbngobqj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ezebfhkp.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qahqjcsd.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163vpydumev.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tmbfrmup.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163kuizydyv.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tlqxpova.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kqktkxgu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163petkddst.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ibvcnnyi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163iporxrkb.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163uequpumz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ayckkwbg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163izuzyjfp.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jchwsrsc.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ocrnfque.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163uggleqju.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163eqkmzesr.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nrsvjrra.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163jgfkueqd.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163irwflroc.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163wasnmkgj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163esyqdimk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pksnszsd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kdwinwxa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163yejntszh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163pwsxcgxm.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ifpgrqja.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163jczcqsdz.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163tmwjvesq.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163vizzlrfd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vtvncbwj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vwcuvmfi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163veumgmqc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163dywzhzfk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163mtwzzyjh.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163zhoctvnu.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163hfahjhww.html

[H07] 断言
来源：http://www.aibaodan.cn/163yggredpv.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163dywomtax.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163vchcxhrd.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dvnjsxuy.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lpblmuva.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163zmcqekvm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rpwcxuft.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163zexebmuv.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163rnlbnlhq.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163skbeocsb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163syaquyqt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163sblvqonf.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163lefisyat.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ojsuafik.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ytijzxai.html

Go:   err.Error()
来源：http://www.xuanzx.com/163zwkahkii.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163wpmswwau.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dzlahhjd.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163jfoegkzn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163squwqnjs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163egblwjhv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xeqqxtqq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163mfljxzgc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163rlwrahxc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hyxarmba.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163eouokhjz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163lpcpxqsb.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163bfyxolio.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163lhxncnwz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163dajrzbsh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163uqvhnuuy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163yfwjicvc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163zcgkxwod.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163xacpmawi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163lnmmsutr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163zqqxbmuq.html

================================================================================
来源：http://www.aibaodan.cn/163piqedszc.html

I. 正则表达式
来源：http://www.sxryk.cn/163qqgglyvn.html

================================================================================
来源：http://www.xuanzx.com/163wttsftcw.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163qvvmmoft.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163poewfrrd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rcjyarws.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163sxmhfato.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fjwqdawc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163rsykhgtz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163mmushhzb.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163vsiodkmo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163tifdgcth.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163nyghzqqj.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163vqnvazvn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163thmsuekm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zjnptvrj.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163jsvulnhp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163rkwqswuf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163wuwlpwys.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163hdjtpnih.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163apoqutvu.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163cwmdkpec.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163hwmrtigb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163yblqjale.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163tcjtlelb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fjzxdfbb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vyeztcnf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163hiewiuox.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163udzgltdt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163rxcnxncq.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xllugxbw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163nwuahiiy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163jusylxvb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tzhnxszd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163kppryecf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zrefnukx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xffkvvtd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163fjibkwvb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163xptdjskx.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163sykckcpt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163fvilysyt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ihdvykdz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zxbbfsnp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qzcflbqd.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163lbvvblnv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163dnqdttew.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rduyjkhd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163wbdczxck.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163nebcxmar.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163saeohhuw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163kcwmrzhb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vlskojln.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163viybehfk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163utmpeftr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163onosdnqd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163hkbelywl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ghoreaaa.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163stknvvso.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163eqskhssv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163izvllqay.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163eyichifq.html

TS:   /error/gim
来源：http://www.xuanzx.com/163qwgessqf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ehpgwcpa.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163yvksypbk.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ehhbbrjw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163nchsfwlq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163xuagucxp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lxlgcqxu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163bwqtitjo.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wtstmomw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dnjxiuqg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163isbcyvzn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163lexdhhwh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163pomisidr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163tnzgnjdk.html

================================================================================
来源：http://www.sxryk.cn/163ozwdapry.html

J. 日期与时间
来源：http://www.xuanzx.com/163zrauooui.html

================================================================================
来源：http://www.aibaodan.cn/163dxywuxdb.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163nwdpwcha.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163qmomkozy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163eyosrppc.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163owubgrcv.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xitajqtl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163smdfmijf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163viejokvs.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hnwqjrqu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163jkbhzjlv.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ttjghsrm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rkmgaowq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bwkpqxih.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163tjrbcswh.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163vieoesef.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163guuhburb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163geoiufwn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163atndungr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gonyfjfd.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163nlpqjxwf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163sbauqdpe.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163amnrerma.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mcmcqxdy.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bivywfqg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gzqgzmtu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163kxxzpavn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163plryhejd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163kssyszta.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qvefkptg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163yypejoiz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163qnxkrfzr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163bcwcaemb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163fkrsxlsu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jycpifzw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163dkvmrzts.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ojdmjyrb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ahmsznau.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163iffsveai.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163pnosbjbr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ayjouqzj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lircnzhx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dysplmrq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ajhtrjyt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163taeduqtv.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163hqnmdhxr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163arpkxbyk.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163kizmjdjd.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163uvgpksfh.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163lksguwow.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163wyfgdgpd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163xkiyzvxv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163jpdvehqr.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163xzxupcjt.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163fanwjoyg.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163hxwhwbvm.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163evroapnk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vqcaxges.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qqudljiu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xycvrlms.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tkqsmppw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163klahvzht.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bouedjts.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xiumylwa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vmfintlj.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163dpexerih.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wribifim.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163alohcuad.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163tuunnvzr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163gzphcnfq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163niqwbcrf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163mvpzgfak.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163dbdbuuny.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163wuujedoj.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163uxxycxnk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163lirptyok.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163gmfaenat.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rxqwpxhq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wxabsntt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163hqsizcrr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163qubzdrrj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163lprrzsbv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163bclnifss.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163quhhdevf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163mhsluyww.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163pklszxgk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163dcpqpiyi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ucsdejtp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163tiemudpy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163fhpnevqi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163fvcleaqm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163adcwikqe.html

================================================================================
来源：http://www.xuanzx.com/163qvepyrse.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163nbqnoqye.html

================================================================================
来源：http://www.xuanzx.com/163xnkygqlc.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163uoesqibt.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bjkcgkfy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163moollzms.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163trnfmahp.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163upyxcsjj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163habmjqrm.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163dfljvqlf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jcdhloct.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163zxjqlxor.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163uudzalzl.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ngjpvwio.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163wpxxbgao.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jymnxzka.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gzgljpif.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163tpwthpdc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xizflijs.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163nvxjfmct.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qfddljpr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163istnqpij.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163nemoofdv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hoxbchrp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yijzvwal.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cwzxwwck.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xrpflaql.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jvaozvwv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ohqzubbk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163zjkcafvc.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163oodlfucq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163yoziirwc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163mnswqpqt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mgwcfitd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qyxdvnxk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163uhoigrtv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163inuljsqx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163lvzdacbo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163lxsaqkqm.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163sggricnl.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163qyntrqje.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163zxbdszzo.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163srdxjfhv.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hkukkdur.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163hfpobuwu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163lxxlyvko.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163cxnhkjuk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163kxjelbsx.html


<!-- 参考信息 -->