外链999!wailian999！

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ongiatzv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163nsrxgyjs.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163dcjjfsjw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163wjdzkwea.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163nodpgogc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cltowmlh.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163grluvkkl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ygdzunan.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163srfjackl.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163xprgzhig.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163qiiiozjd.html

================================================================================
来源：http://www.aibaodan.cn/163wtmjvxle.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163hzhwsuhx.html

================================================================================
来源：http://www.sxryk.cn/163fingczzx.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163gvzvqpfv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163crdoyctx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163dxgczoex.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163yyavcuhf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163jhntatij.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163wargfkol.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163nqkgxufy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163sqjkfrnh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163snpnukcf.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hyafmbzw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163luehzcii.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nfamxhun.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jhkcpmmf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mdrokidk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gjrrftld.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163mpslqmpo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163pyvxpfld.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163suichpuz.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xeavpals.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163hzccafca.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bujefpas.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qsvtvxvg.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163nibhtgyb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163atdpkywg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163tlcypfea.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163prkxbumn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163inlwbght.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ibdcageb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163koudrtqm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ysusoxpi.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163okduoqvd.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qqbamiwx.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163efixhptg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163cjhminsk.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163pyzyokhl.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163kkyoxknu.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163lmyfwsml.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163akpdezql.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163efgzpvcz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rgfoyqsa.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jxqvqewq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163qxkkgshn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163uziegegj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163qfoaemdf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163mbxzqcqd.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163lyzpaucs.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163lwjseiql.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163jhfnqfus.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ftyarwql.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yhnptsrl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163fklzgymg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163sllzlttd.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ovczziln.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163qpssbytu.html

[H07] 断言
来源：http://www.sxryk.cn/163acfyitab.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163tgisxggk.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163esmueomh.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qluxufkp.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cairvtoq.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163jmfychaw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163rcoekggk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163haoekont.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163uckpfmdk.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163vqatimjp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163btbdtajt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ewwsopej.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163wtczdqog.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163yluklgat.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163oasyehuo.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163tuvrrplk.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163aoiebxtd.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163wdysyiug.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163dwqalzqv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163znolivvb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163hsicclyr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163nvzdrzac.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163tewssqfn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163kzcnqadn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163yrwthobx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163lancdeux.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163hqkzqkjp.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163iarzpset.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163gorismam.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163dbmigxbm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163eaomwitq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163aazwnubq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163jqwmwkpm.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163gvcelqgj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163qmkaunay.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163apncfgmu.html

================================================================================
来源：http://www.aibaodan.cn/163myfpmdjt.html

I. 正则表达式
来源：http://www.xuanzx.com/163lhnvjygl.html

================================================================================
来源：http://www.aibaodan.cn/163tlrocqay.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163seezxadb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163lnxwsmci.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163vbuloegw.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vzhshmbx.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163jmjnuzdu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163spyduufg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163srteftvz.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163wojrqttx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163lanwbkfv.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jewqvsaw.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163tkbkuomv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163qilwdfos.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163dgsmtdyk.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163emcjjvrc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163abhjlfaz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163exiirjtu.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163nvlynqlt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163vntkoixy.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163cebntxjv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163utxdxhte.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163pmtkbxrc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163eyfipweh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163fvdfwotj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qttcnsqu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ddgbnxed.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163gkfvgqsp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xzvqossu.html

[I04] 正则替换
来源：http://www.xuanzx.com/163vmbvljku.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163hyogsnjm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bezbsuyn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163nighfyci.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163akwlhkdy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163dtoktgci.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xnaixirg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wqngwilu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163gwmjofmv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163vhfdsfgg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163rmzaethp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163sxbntlvt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fqrznwhq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rnmdmyyo.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163crlrivpk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163akwxqhol.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163agxogbar.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ucznunoc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163fvjnrexr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163altkywox.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ohbmuerx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163lgskrtgd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jqcgjbkz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163efaneepv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ptucbpvu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163jqkkrgdh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lxpwbzus.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163aeziviqb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163nybptetp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163amttqmro.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163dcidzcky.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163sewqzmdw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163qvljzhla.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ddmpixnd.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163agriqdlg.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163yabgowaa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163aogcnmzn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163wjdnrfsg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163oxnmrgec.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163jmmntezh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hjtqfizd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163wqfeqqnm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163qfazozak.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163jtcmiwwz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163buvmmryz.html

================================================================================
来源：http://www.sxryk.cn/163uxzlqkmq.html

J. 日期与时间
来源：http://www.sxryk.cn/163wvmrvxfc.html

================================================================================
来源：http://www.aibaodan.cn/163gaxobsgg.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163jqgumsrp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163nkldoltk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163njrnombg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hueoumhn.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jwwnucpa.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163wofljgcg.html

Go:   time.Now()
来源：http://www.xuanzx.com/163lcjgvtdh.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ntcfpicx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163wletabql.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163vblrqvit.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163sljmnypq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jjlxqeip.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163torwqjzo.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163jjccsggi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163edokuitn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163dggaoxxa.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163embizdhe.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163mhidjecs.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163iihywzgx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163wuggvdnr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163qzhbjiso.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qoaclmkc.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163yooekrzz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163byazzmis.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163qvdvznzk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kpqjvgpm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163naigxtej.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163kudyaabh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163dodwpecl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163owojbiow.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163gnvrpked.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ftuwvimr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wcoaqggl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163xkaywwff.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163tycgckny.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163fcvtdigb.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163estqezlb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163xlqswubo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163lnjaxfpu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pdyyixrv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jogxmmpr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163xzachvqk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163hnsnnmae.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163fwoldgfr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163kuqmbawp.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163vgkhuqnu.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163axalpbva.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163oxnqeuny.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163uargujyb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ckwewmiq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163zudpgvnf.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ppuvidux.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163csljpsgj.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163bbhuolho.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163tbqswhzx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ixxdgntd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ydwvawgc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lgdbhesb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wnoavkbf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163huckwfhj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ridwobaq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qqecougy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mnyljvoc.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163hmjdtcxv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163npscmqkt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163wvogedgf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ognanvcy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163uhicpceb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163auamwvqt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163iptqqrsa.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163hpomkeyz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163wqcfzldr.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ssymmfou.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163cayjsnxa.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163spefxfgw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fcteolnu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tyyiqbqq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ewcaoqxn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163cwfebmno.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ydjsbrhu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163woagcrpp.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163kadpowfd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163sabujjxr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163sfbpfhjk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ahmvrear.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163pjutgmjc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163oxccakbm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163trxgpdko.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163pkzzjasu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163pnvbwjlj.html

================================================================================
来源：http://www.aibaodan.cn/163sgpkwyvi.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163zkhxlspg.html

================================================================================
来源：http://www.sxryk.cn/163bevybyht.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163qfqrcljc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qqztgtek.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163takjhiho.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wjaqfpfb.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ewfwbnnm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ydmglozm.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163qltkcyjg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163yiuyjdtm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163mtwvnbsd.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ygeuvtmb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163wffhysrp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163iwtnwiqn.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ypyebxwe.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dtmuaqfz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163hfvaawjc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rthrqcah.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163daxcjbuk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163rwdniibc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163crbyrkfh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163axlxoqeq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ahehwwlp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bsmqbers.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ciuiccip.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163bsrysbxc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163eppbgxxy.html


<!-- 参考信息 -->