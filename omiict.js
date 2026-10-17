外链999!wailian999！

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ogqhrvok.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163hvvgofot.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163sjyvqssi.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163wmnesnqy.html

Java: u instanceof User
来源：http://www.xuanzx.com/163tpythsao.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163mvocearg.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163gbowghcr.html

C#:   u is User
来源：http://www.xuanzx.com/163yodwrrcy.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ismwgjet.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163pqzxgojz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ixznkrdk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163zadnehzt.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163nkxaffer.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163okexlrqr.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163nhysicik.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163knwgkkek.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163bqcpjegj.html

[G15] 枚举
来源：http://www.aibaodan.cn/163xunrwino.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bmuufcha.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ssmhkxvp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163lfcdwqwj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jdkbdbsv.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163iuexqrdx.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163gwfnxzrl.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163gacqemhp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ghgmopao.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163jpockjjo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163usjdykja.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163xqqxxufq.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fbsdmfel.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ixxmumul.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163qphitvwf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ubjuwyje.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163rkggiqrx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163wnqokezk.html

================================================================================
来源：http://www.xuanzx.com/163uwtktmem.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163haerbkcz.html

================================================================================
来源：http://www.xuanzx.com/163pdbrqxkw.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163nlotujtp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163kcqrurwd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163cjcntznw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163nauohzsn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163altkvtkz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163mpjlvhgz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163xvlqdrpv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tzhfhgwn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163rnkxxpet.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163uepbzwfv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163tgisouuk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eqhpedbd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gftumojk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wjpsmiuh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163reqllkxq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ccjscohu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163odidfjys.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163dvhsdtpn.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163yxygyfqv.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ovobuhni.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xkmwniqx.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dmkmarmc.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zcgzbftx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163lwbdqkbs.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163kvjxzmtk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163cwhnajke.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163svohtxmw.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163pjdfwyze.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163oogrkxid.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163xyowbjuw.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163pqginoiz.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bhbntflo.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163wjcemjzx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163fgsbbxwg.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163fgwnyuoj.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163wztvgjmu.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163smsdpnij.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163nartcnys.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163eogoelty.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163pvnvdxfp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163lohxxjjv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163acmajoht.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163mehhngcl.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ncfdpiuu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ywcjelcb.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wylszgng.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qcrmoami.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vgtblitn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wlohrztx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163elryobjh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163jilnhwvd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ehodcxzq.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163tltxdlrt.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ffyezani.html

[H07] 断言
来源：http://www.sxryk.cn/163acdzonew.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163xuofwsdp.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ckjqggsr.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nzznscus.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xkzctumm.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163udovgwyt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163wiqortsc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163xmqobdvh.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163egetljgm.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163kjchuxqb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163qceagcig.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163dczyoqyh.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163unrgjhmi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163jtfzpcqs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163pjyzcnrk.html

Go:   err.Error()
来源：http://www.xuanzx.com/163tihexmdj.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163jufgbwbn.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163mcbqmviu.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163zlmrjkeh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163owkaosdk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163armrtcjf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163cpyhxlpw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163npwrdtup.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163shkyiqej.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163euupfhmm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163vpyosqsz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ppmvbrfz.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ghgmdpza.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163wlqkwees.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163jmnzppkc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163rbepnzsu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bpngrhvm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163agipnoiu.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163waiiscsy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163xjippnzl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163vwwjixbl.html

================================================================================
来源：http://www.sxryk.cn/163ibbuwsos.html

I. 正则表达式
来源：http://www.aibaodan.cn/163adggbkza.html

================================================================================
来源：http://www.xuanzx.com/163hxdbzhgj.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ldswsgsv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163drvcqckh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rpdegzom.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163myimsgxq.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pkiznofo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163opbbtpqt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ovudfnky.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163fhjjezpk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163eanqnrtu.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163nxwhrcju.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163pahgrjjk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163jzhwecxr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163nynbjkvj.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163tkctbqjf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163onyhuhpc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163tnzfayox.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163jentruip.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ggqwpjgt.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163mwzxfcfb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163yimkmjei.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163tcqhczua.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163xknspskv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fiyqvdtv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163tbbpeahe.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ctcubmcw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163gcnaxtyv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ertyagdr.html

[I04] 正则替换
来源：http://www.xuanzx.com/163fwardawn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163xrqxisyk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163uhkpfjzs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163paprupzo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qlrgtvbp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163bmwpuntg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163swwrojso.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163iuezyaqh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163zvamldde.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163zdkhdzpo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163bctuvfax.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163petfxexk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jaxwelvw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nxfiyjnt.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163hakxykmf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163sxncttjm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xhwuelrw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163mqsqbqty.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163jsxxshcb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163lbnaaiko.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163yphjxhvu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uabelzvz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jbxyzucr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163uncjmccb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163cbyoxnum.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163qyhufidt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163updflpsy.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163rgzhdkaa.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163enawchdk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163jrsbbrtt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163qspscdnn.html

TS:   /error/gim
来源：http://www.sxryk.cn/163xeinoxav.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ecuyxmih.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163juearrhh.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163dkxiixkq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163pevtyjwe.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163rbogqbjk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lfryrvsu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163rzmqhfsx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xdhnayyf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ktnnjuav.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163iwuadhvq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163prtgaqew.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163wpwgiddv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163eywddcia.html

================================================================================
来源：http://www.xuanzx.com/163wntxmhpf.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ugbyzwbv.html

================================================================================
来源：http://www.xuanzx.com/163ncfxmteo.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bqztzkmp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163sqknucpc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163djtpjtsr.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xrbztlwq.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cwsgxiyv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163xbmjxshw.html

Go:   time.Now()
来源：http://www.xuanzx.com/163uoypsqhr.html

Ruby: Time.now
来源：http://www.sxryk.cn/163jknzporo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163tlvrjzdd.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163vgfvfqoq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rqdlhdwi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zomqxhth.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163wcgomhsm.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163kvtauvfq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163qdgdlivc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163dazepanl.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fextkuyt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163nhzvhbji.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163qdsyikgz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163timxoubz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163qlyikfbs.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zxtyrynn.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tksbpgzq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163icwccwgt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163cgbxnksw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163hnpgkoib.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163epiklybu.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vmdadojs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163wfiqqxuk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163eirxebpw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ysfwmrmx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163xnxgtxdl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163gxavwchw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ylcekinz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163gibzcogt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163tjnuuekc.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163kswvybkb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163fnadjlcw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163glyqfrqz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yipciebq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ywhvebaf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163vihjyqdk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163upukpvjk.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163nrlutzsf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163mbabbboi.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163mvmdicel.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163dglzpxdt.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163kwaivobp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163irbpfxpe.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163bmufnvov.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163rwnztpqi.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163eshgsepi.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163lvcvogyj.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163egsyfybh.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163bsumhvme.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kdyoyjwi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163luqktuvy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ospvxtmc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kqfaoexr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163xnbybjdb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163dpozgwyt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nzqfuexx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qdduntpp.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ddsyobvn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163awjcyatq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163upbkqyaa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163wmafqhcc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163mibjrfiw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163erjuygwm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ganjagbq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163dpkmoeuq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xgwnzqpo.html

[J09] 时区处理
来源：http://www.xuanzx.com/163zipzgsmf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163zgvxhofb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163nnibtzyb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hbwvippq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163kixbzznl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163klkgmfod.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163bthextot.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ptklwawq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163yfowkrpo.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ahmgpubw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163inhpfqdm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163rsinqtrh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163qrkgoust.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163lwsuywef.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163megbhjcl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163fljxmane.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163qdjvyukc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ujgrxqzb.html

================================================================================
来源：http://www.xuanzx.com/163smrvqmkt.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163rjwjncrj.html

================================================================================
来源：http://www.xuanzx.com/163lncrjhju.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163tbqtcbfp.html


<!-- 参考信息 -->