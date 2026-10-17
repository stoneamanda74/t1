外链999!wailian999！

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163obsatwzq.html

[G15] 枚举
来源：http://www.sxryk.cn/163ylxyobny.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163qxietciq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163sihaobxv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163vqjewtsf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wpgbyjff.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163dolcwdxb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163wcrttdse.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163xfosxmxo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163miaipdjc.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qpzpzoct.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163hclbpejb.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163esxhthzc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163uwiaeeco.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163reguyoob.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163urnitucz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163wbvvaypa.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ezpnvrhv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vvvioegn.html

================================================================================
来源：http://www.xuanzx.com/163nvdldvwz.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163tdelefkf.html

================================================================================
来源：http://www.aibaodan.cn/163risbfkhm.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163gfbskxat.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pbmshvch.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gqsjfguw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qsddxwyo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163jfqsmktq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163bsibibci.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163iouqocbj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tlmaeukm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163rcdaqyys.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163waafvwqe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163xitxxynz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rhmsdaga.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hyswdxup.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qfemqjfi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cwzopybt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163rfhyodpp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163clxtnwcz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163pnzqwbwx.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hjkdyvse.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163jzctfhnf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163idppzjpx.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163tlagvkae.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lvthgvzj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163lgjtbrcu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jklvgjlq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163vmivaxmv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aopxsrhe.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163qdhqyzxb.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163iklukrms.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163vmsfbuul.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163afdspqxe.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163sbdiclxj.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163etgfycds.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163lqyeivug.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163exudnoqy.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163eqgsyoaw.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163nlconsha.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163opitusnm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163mhqktjng.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163kyvxfmgx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hqpgzzui.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rgsqhehs.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163bjhsoepz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ztgigcdu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163zhctkyut.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163vinjpvhf.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163qssujmuk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163xoitatpt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yyoondfw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xjaswcir.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ppokbpht.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163gjdqufzx.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163yyopamjp.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163uzxvdysi.html

[H07] 断言
来源：http://www.aibaodan.cn/163hrcamrcf.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163inlhzvom.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ijfjlygd.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qrkryyyt.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163eaddaqig.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163gapgvhnp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163xhrrccev.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163jgvjospn.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163kekvajet.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163fdqyvglt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163rqaagviy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163uxsyifcj.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163vwvzttzb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163gwpjbsgr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163enomqkdp.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vdqkdkqu.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163trcgetdu.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ogktzyjt.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163yluqmptn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163pffcktye.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163bpstnmwv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163egylqypk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163uhlgaict.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163gqqxjvfw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163iwqnalnn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163trmfkhvs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163skqbujti.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163atrfmbfv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163xactlwou.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163psasuncs.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163iphzkyhc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163khjiixta.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163gtwhnbtj.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163icprfizl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163oikutnbc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163rzmapaqy.html

================================================================================
来源：http://www.xuanzx.com/163bhtwbepe.html

I. 正则表达式
来源：http://www.sxryk.cn/163diqakuid.html

================================================================================
来源：http://www.xuanzx.com/163xkixiopz.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163qshiophu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163fszzfxvy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163wfkhgzuz.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wbqkmqsb.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xxanpkef.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ykexgnxy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163xwltyytm.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163khiqzfwo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163cjvisxvd.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163bcgxanhi.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163nsfcypkq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163qvchorel.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163qcqrncjy.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163lquuzdtv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ngrhkllz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163fifuzngj.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163nmdxypiy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163uvhsrbac.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163nbwwxjgn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163zlgihwqs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163mczehevy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ugrviyfy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163xdrmzxon.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163tmbivtic.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163chwdgclk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163nhibnqmc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163amhsgsly.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163gzpqonis.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163totiuapo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jdyzzbwt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fbvvexzx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tldosnvx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163wyqxixfo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163lbpriwwj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163emzkqqoq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163uhxglntn.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163uvrcopsc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163wrucihsn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163swocqtai.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tzlimwba.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163appknhis.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163lbrgrbtx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163kbvjdpex.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wvpcefva.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163nnziwvqs.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ryizcsoo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qipciytm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163jfclzphn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yhjccxbg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qoqvmsds.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163eiofbjmp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163gbvpsqie.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163afvjdiyg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ggedftdh.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163pqbnpmga.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163fiygdrmp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163fnqctara.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ybymqycu.html

TS:   /error/gim
来源：http://www.sxryk.cn/163gbgmzqqo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163qxchwdfo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gsvqissu.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xsxluhqm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ppqnlfwa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163zfbvgfbi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163hgsznegk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ucpipnik.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tcfpbrts.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163fhzljabn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163bnuqtxcu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ayjialur.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163klukpwmn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163sscvemug.html

================================================================================
来源：http://www.aibaodan.cn/163stxexgnv.html

J. 日期与时间
来源：http://www.sxryk.cn/163ctpoljjc.html

================================================================================
来源：http://www.sxryk.cn/163lyutkzfa.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163cqlutjso.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ksbzkawj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163orqlxxbd.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xilpkuma.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hcytnoxt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ccvvqcly.html

Go:   time.Now()
来源：http://www.sxryk.cn/163rxyhiftf.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ghtvporz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qfrjeihl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163abccjljh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xalynivb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163sjsskaae.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163wnrtvnaj.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163fuknrozj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163leedonvn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163pjohhlfc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163buszzynh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gqyjrlxs.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163oihlqoml.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163crteuief.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163bzmkrzns.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hcoshlxl.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ggsvuxtq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163zyucikyy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ovvufhti.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163cwpiuywm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163lmutyozq.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163mbpbrxxs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163tpfgxkbx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163oszngpkr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163qndqbpyr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163mssfycqm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ifjyitbz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163iriixxmp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163zuihrrsu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ydiuahuq.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ooriraxw.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163oqldfmte.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163szztgpcc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163uqaocngd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qubwawoe.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163rkgjdzzq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163jnzjrqsf.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ouinujkv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ofcyhtrt.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163dgogxmkl.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163sixqhupq.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163zimkcxfs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163uobaojfy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163yirnnihu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163yysxmcyu.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163mvbldxaz.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163xycjdxdc.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163rsomelwn.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163jwuxftqg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fptgdsvv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ovtiaybm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tjwthbio.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qofnvgtx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ubvzjtcz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163dgfjfyuu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fkmzuvyb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163movyyhtq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163yepbkszk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163pkckwhvk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163moeqxoyg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ygtxblnc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ghhsqbyt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fdlyrvrv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ahyhbjiy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ibsclgcv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ehtochqy.html

[J09] 时区处理
来源：http://www.xuanzx.com/163qvomxsyr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163imjcbfad.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163oziehbmq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163yyylxhrm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lcskkhrk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163muxemovg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163xpxwwvyu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163tzolithx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163tipqoade.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163evalujeo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ignwzqna.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163smcwuzob.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163rbbufqml.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163nrjnglqa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hevuulju.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ioyzqujo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163clgaubok.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163itmspazp.html

================================================================================
来源：http://www.aibaodan.cn/163swyigsuv.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163hwwauavx.html

================================================================================
来源：http://www.aibaodan.cn/163zykphpjh.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163txnbhxel.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163uaqnrylp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163teiiwjij.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163norikcyk.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163copionox.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163iswtsthc.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163jnyhvwhf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163kocfoenu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163mxumumpg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ctbdegat.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163abxiuzip.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163tzwgplvd.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zqhfbuak.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fznqysbk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163cavbumcu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ojjkyyxm.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163baupuhiu.html


<!-- 参考信息 -->