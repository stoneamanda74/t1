外链999!wailian999！

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163otxkzjiz.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163mgsqygxv.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163gwymngey.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163vrlrehfn.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ixnhmbgl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163jqqjpjvi.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163rpxvlnwl.html

C#:   u is User
来源：http://www.aibaodan.cn/163qpdnsnat.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163yzvsfvlv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ordxxeqn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ezkviqgt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163crcomtlg.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163xeqimkcu.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163zdmogqft.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163yddvcwig.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163tsivmhki.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163jwxxblre.html

[G15] 枚举
来源：http://www.xuanzx.com/163rdrtwfzz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163jqhvcrky.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163fsanaixm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163mipnxptu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ewwtbojc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163iknnkbld.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163twfdmmfb.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163sbdzyvjm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163htvcmqpd.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163larmgoqy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163kakieauu.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163twxcurak.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ebzezztw.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kmvdvtoe.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163qeucwary.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163lqjdiscs.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ommrttzp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163jylcogqn.html

================================================================================
来源：http://www.xuanzx.com/163uvdzooam.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163enibjtgq.html

================================================================================
来源：http://www.xuanzx.com/163dpcsykhz.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163hnxtcbar.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163rajvwxlq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ohqhtkyz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163piahbykz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163amwkcosy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163suojtkcw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163igqtxxvq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163duukhrjp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163fgddngex.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163qgivgpzb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163tvjrizyk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163saqzairl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sgmqcypx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163azzesbng.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rdvoklth.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163wltjyzeg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163fqiyexpv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ebyszjiy.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163dbqcjwyb.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163bzjsajgr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ndlmbecu.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vysqtwcm.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lnluphtm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163xzmolgle.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ujwwcdqd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163geavpqcm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163owjswoqz.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163rkilursm.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163vutprnnw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163zrtqaqyh.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xirjjovs.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gtpugllk.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ucxbhova.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163kxrdswgs.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163cusrlahv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163fqtfzogu.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163njefnxeg.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kntyxtpi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163xxmhgujv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163prwltnwl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ceidwemy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163fenwxaey.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163gtzqotzs.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jchaussl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163oxwsvuhb.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163cxlfmwzd.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163jpfugtrd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ykjriqlz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163endvnagn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qdarawvr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163npwiosia.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163xuwjvcev.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163rukzxvrm.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163zsvcenpx.html

[H07] 断言
来源：http://www.xuanzx.com/163gkypuqey.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163eiszzdes.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163blswphgf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qknrtfmt.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qpvchcay.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163qxrumjij.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163yiahgcoz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163unkpejky.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163oiqrntch.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163awnouzpr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163oyknfjef.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ddcfcgpv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163cddkgllu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163nywoqsup.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163auduytnp.html

Go:   err.Error()
来源：http://www.sxryk.cn/163rfbxtmsy.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163nojlccnx.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163cwgguruz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163wtybxrau.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ydmbqrvb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163chofwvyl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163mezjhupw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163evxasfdc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163wsagoyqo.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163pdgirdac.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163vvhfgqyz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163dyzdhxla.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163qlsijkub.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jwwhnnlo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163laqztziq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dshvbdag.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bajafqfm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163csfdnpxb.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163agyyxfpp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163lvizwlzc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163oacfhkvi.html

================================================================================
来源：http://www.aibaodan.cn/163hagiqehl.html

I. 正则表达式
来源：http://www.sxryk.cn/163cambndhp.html

================================================================================
来源：http://www.aibaodan.cn/163dzlecavd.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163uzshuxkz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163lkgfexuw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163jplgfnlp.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nhftdxjj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163flrglncb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163qqomnvts.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163dwcrgojw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163onaonzdk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zhedgwuy.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163zqnmhobk.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ygliikdh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163gsgbrpnv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163oibgqcae.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163lqcadtgi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163itnlkjco.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163gzmphkwk.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163xqoccxym.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163glmricmu.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163tmadbnqu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163kvsqtceo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163zsjgnibo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ndrnmdhw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163kengqylt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163epmnlzjz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163sozinksm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163mfmurmvg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163kvyijdni.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163mzchhdlh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163lcvogsyu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163sdgshzgk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163yjmlvsxq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163aryqiuov.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163lbwtakhn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163eamzhsqv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163fyfggtde.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163qwzcatis.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163palnryud.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163hkcnbhdt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qbigqbpa.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163roodawsx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163sxmzvyij.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163tlaoybix.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163giopvrad.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163imucyddo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163klazupnk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163zdexunlm.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zjaziksl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163vzyhhpls.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163fpiulyyc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bkqswrdr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163dldcjcef.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163itxzwwvd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qnwglzzp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ojswmtrz.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163dnqoprbe.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163vlrtsbwy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163tmdxnbdu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163azatpflx.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163dceaneoq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163mrofhqgc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163pbroncca.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163cxhdkhsh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163nyyuksmp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ohwwxwkn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163dbfuzcok.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163uhgpeorn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jspzotcr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163snqsjeoi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163tjzdxvek.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163wigipdrd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163jijsabfc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163zvpexryv.html

================================================================================
来源：http://www.aibaodan.cn/163zefzrcwh.html

J. 日期与时间
来源：http://www.aibaodan.cn/163afwacids.html

================================================================================
来源：http://www.xuanzx.com/163krhloiou.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163dskiocxw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163cyckjsmk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pnsylsge.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fobziyfk.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xqehxkag.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163oqgoszas.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jpstxzbk.html

Ruby: Time.now
来源：http://www.sxryk.cn/163juvtepfc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163hjcsjdzx.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163xszhjraf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hmspxhxq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163yeqhfltt.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163hxjldjoy.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163tcjlxves.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163yfqetshe.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163mgtmmlzh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nyzqlzon.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163zbktoimq.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163rtlyhqhh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mabeasjc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163dcpqokmu.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qkxayswg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nffncpau.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tssfogfb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163qgtanshx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163abbyqcid.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163cqgedrpa.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163zwbcqfnv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163bsobiouj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163phzfyvsy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163tjmaamur.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163qlxzocxk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163xrhijqxk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zlbfnpyz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163tyxqomwd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163qtoamowj.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163mxqtbegp.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163obzyvvdn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163pnzauihz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163frqimjwf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163luiuidkj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163tfjljbmm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163neaitqrv.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163fshapkbc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163hqoepydp.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163vnarouap.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163pfejposb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163kkogyeid.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163llteabsq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163akaxdalo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163xtehdnop.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163expscqop.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163xybaoall.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163txqqhsfr.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163bofngkjp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163blvasxoe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163joopachg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kzmsssrl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ctgkrmul.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163vwpgyagj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bwfyymsv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163drbtnewb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qyndctmb.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ohsxmcqu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163mrvlvham.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163mvvfhnuc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163glbfsmjs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163bzanbfnl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qxwjtrwr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163hxokmkso.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163pxxilbzj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163bcffxlve.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ufxifjsr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163uyxnnuuv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163wbwtjazf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ogmjmqzb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163sqdjxdbm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163bfauxudx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163bwjexmgc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163yowpqhco.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163smlpnbgy.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163qbbmonyw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163lyucbfrv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163qmckvoyt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163fequhlau.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163leqchsec.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163pxpwbgyc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163kwcnkdub.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163flxnfwny.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163dnjmcluv.html

================================================================================
来源：http://www.sxryk.cn/163ermeqyqj.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jprfntwn.html

================================================================================
来源：http://www.sxryk.cn/163ykfbikre.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163aoglqftu.html


<!-- 参考信息 -->