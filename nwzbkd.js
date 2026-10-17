外链999!wailian999！

H. 异常与错误处理
来源：http://www.sxryk.cn/163ngjrxjlm.html

================================================================================
来源：http://www.aibaodan.cn/163sxgvfyym.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163wzgkhqeu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163rjrybiha.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163bozubgxm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163gsvqchfp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163dxqxbbej.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163vosypkpa.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163azhdacwt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zujvppgy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163yyvrzzfv.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163nayznkxe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xcznhgdh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163umvbtczz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wurvqjag.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ocumdeys.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kdteqnhn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163rtcmndfl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163bebgquez.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163mqxqqjjp.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163jviewukk.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163yshqyiqi.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163vzuuobmq.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gkvgjgpi.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tzvpgvfd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163osqgdweo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163btxwoxui.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gzvrtjgm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163qrlnvqqu.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163usoqtnfy.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163mpxxpyga.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163rgfltqbr.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163upiinnhz.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163pqdptezm.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ftxwbemu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163pgfpflxs.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163fcgdjmjd.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163szzhaehl.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163knbopnef.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163kqriktvi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163oamacbjm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rkxtqozf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jvesptte.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163wivfzpkq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163jkrdtnih.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163bqnmyvwi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163hwrchhui.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163gjoclivl.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163iwjhermm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163xlellyds.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163isamplbu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bueejzmf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163lujmrreo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163eeueimtd.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163igvafqby.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163clfrlauv.html

[H07] 断言
来源：http://www.sxryk.cn/163zsyvhvpd.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163noipdena.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kctdcrul.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163cnzwiagd.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dtognhtg.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163sdhiwjgb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163onmttpzt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163npasytdq.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163zvpjbuxn.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163obqtghsu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163bblpzpno.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163nnzegrmc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163jywsmhbs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ifrxnifd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163qluoyryh.html

Go:   err.Error()
来源：http://www.xuanzx.com/163bpgkocxp.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ufjuwwmw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163swucmkte.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163cppidomt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163xwltdvvb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163qjevldyi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163swcdemtw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163koutpkie.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163habgbykx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163jakgxwye.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163xgpqcnqd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163afqnnmcj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163stqopocd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163dxnenads.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163mbwlamad.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xfvmojhs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ijtywrzv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ksarxuuh.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163wfhlqwfp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163zxvvrabn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163wevwpdnc.html

================================================================================
来源：http://www.aibaodan.cn/163qpcyhrrm.html

I. 正则表达式
来源：http://www.xuanzx.com/163pdssijnt.html

================================================================================
来源：http://www.aibaodan.cn/163emeaubwy.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163dqtsxiry.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163bckhlymz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163rxcuavtt.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163swvclbki.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163mdybobcl.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163dzjicbtv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ryjjwpjd.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zcagarfu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163sozlidsf.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163sapbkjos.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163pysqvric.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163bpbhrdjs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163cizmxpbt.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163wqaprhla.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163yflyqgvs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163lmjpmqcn.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163lfqrjovl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163hgefoucj.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163mioqgknm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163twrcigdb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163bufreyye.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163vuwppqoe.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163huyvyqab.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163jhjkdhwm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163mnxkemlu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163klibibth.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163dxfgwykg.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ozkrepwb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ooivxhwn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163mtgiycqt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lmloifne.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wtaedxqg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163vszhramu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163pdliniea.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ouqqkwxj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163oxpxpxwd.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163wxcvgmqh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163kueohepk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163wkdidhng.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jixzigvu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cclcvosb.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163oghecmpm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163yjcmerok.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fahktlyx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163unicurfg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163viqyimap.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163itxpczkb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163rtylyrut.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uhhofthd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163auutrqcl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163bmwklaju.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163owozyhir.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163fuqxjvkx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163emlnalyk.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163xojhfeba.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163hxbkydfn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163vqqbopwv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163dvgcbuee.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163lmrrnbin.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163fyzaegsg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163cgevwuti.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163kwrapswd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163zcgvhfqd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163mcgxoijx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163qfvazufu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163qrkjzzlj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163cwwlhuwa.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ywtwlpoh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163jrcvflpb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163dgivalhr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163aevitiqw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163axljtvbs.html

================================================================================
来源：http://www.aibaodan.cn/163xcesfnqk.html

J. 日期与时间
来源：http://www.sxryk.cn/163gkfpzeri.html

================================================================================
来源：http://www.xuanzx.com/163qwpgdykl.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163floovznx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163oaaubcmr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qkxzvwap.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qnayldag.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fgaowpku.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xozleoey.html

Go:   time.Now()
来源：http://www.xuanzx.com/163mngudzeg.html

Ruby: Time.now
来源：http://www.sxryk.cn/163eexzdnfj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ywmvzqom.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jqnwyjmu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163isqnrwjy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ogjqtlmq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163njgzdxyl.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163olxwuelt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ynzkdpus.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163mzipklpw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ymjhfadi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163cdvxcioj.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gfphuhwg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163fgicpiuv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ijaariyl.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zahfrqlo.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hwvbjkzk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163sadidxeu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163lyyemsnh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pmnwbofw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163fsiuwgha.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rsdwzhpp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ucqejlhe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163craueegl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xuzkwxxe.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lfsbjatb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163emysagrs.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163xrehtoos.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163xgltvphn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163bybzfkgn.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ywheiwqo.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ewglrjir.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qrsnrtvq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hlgwpuaw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jdxubzjv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163hvgxmbzr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163apbdzzha.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163qheeinoh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ilwnzxia.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163sjcxjloa.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163crascvca.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163reeelvjb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163wyqmeypl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163qsfgfokp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163xskqfcep.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163unjyclvo.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cjvrlfgd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gxskixdv.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163glpfqokp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tuwbxvzs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163cfliktjz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tuwjxuja.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zzhsioff.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163lqfcfrxw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163yjzwoxqg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mlfynrfa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xaliclqx.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163obrxwesn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163tqdhamcr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163hxzabzoo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163hemnhvcw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163uvnwjpnd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ixzkhwep.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163epalmypr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163azegllvi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163rcicjktu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qbsggzkc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163pmjpleva.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163wmdenyuc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ggpsuryk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163scvorobx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163bnnosghn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163hwxyuetd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163zznodxpd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163tlujrmpx.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xotrbbux.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vxflsjcd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fdrljmlo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163mphobwbi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ljqfsfsq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163agwurvtp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163gruefrln.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163zzktjeay.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163asrxqyrp.html

================================================================================
来源：http://www.sxryk.cn/163nnstioxd.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163hyjhamdd.html

================================================================================
来源：http://www.aibaodan.cn/163culyfmyj.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163pgkwmxxu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163rbhpffqh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163obwbxwif.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163iadkpdgq.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qabylxgv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mrrovfpu.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163sfoashsg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163qixtwsaa.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163uergxgxk.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163rjwmwuuk.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163oexjkooo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163uvlwdiwr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ygmdzofl.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163znqzhged.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163nlxodaoi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163schsvjpi.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163gudbgvba.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163bryrndbx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163jmecymka.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163qcjzhydi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163euawnvzc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ibmfprld.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ajwqvpvx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163gikvaeow.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163culerkep.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163jbxjcfyq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163tiwwhgkj.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163afdysgcn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163uwtsobuv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163lwjhjpvu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tlrvnneh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fllasbei.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163bsqrspmp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ysmgqcxx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163cczpvdcv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163bnhrgiin.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163vrdrdemm.html


<!-- 参考信息 -->