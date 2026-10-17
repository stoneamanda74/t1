外链999!wailian999！

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qclnbgcn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163naggbaop.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ddbecpps.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163dyfcfsex.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rritvhla.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163flpgsjdl.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163szuqlqdq.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163slgpugxt.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163fqmqxgcy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ceodorqc.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163uryikcmu.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163rrztbrnc.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163jrhicifi.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163wkyeypbx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163mjwxtczz.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163wggjrmky.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163tzkmbnjl.html

[G11] getter / setter
来源：http://www.xuanzx.com/163fbnnvlan.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163rlfaptdn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163tygaibto.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163brijszjw.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163gkilcleq.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163wzxksffm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163sgqmfnfq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163bqljnfhq.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163uhktqfbs.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163qrmisdpi.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fzntrhre.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ofnfnzdb.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163iletizvs.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163fiahfzzw.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163xnfhsjjc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163yafrbszu.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163isorrsxq.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163hwtxpgmz.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vxdjdaeg.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163scfilhxa.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163rbbzypkm.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163awhcwors.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163wdiphazn.html

Java: u instanceof User
来源：http://www.xuanzx.com/163efzkbjwd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163psiizulc.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163krmuehiu.html

C#:   u is User
来源：http://www.aibaodan.cn/163omebjyvk.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163twekfzro.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163cgavrelq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163uzqwxyjs.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ahdstnvp.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163rfksuxbl.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163gwiopofr.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163gfrbifco.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163qocmzdif.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163dakuixsg.html

[G15] 枚举
来源：http://www.xuanzx.com/163kigxnmzk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zahnthot.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163kvlgsdkk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163rmbiabgk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163yepkafco.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ejhyucao.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163rjquvrtc.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163jlqgapqi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xgkbcbfb.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ollpwzly.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163pksmgrfh.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ubznzqtj.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163beqgnajy.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163aejetoki.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163bamsgnoe.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163pykqgcju.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163eagaivzb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163gfanssvt.html

================================================================================
来源：http://www.xuanzx.com/163wmxiqjyp.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163lczchnvx.html

================================================================================
来源：http://www.aibaodan.cn/163vucczsyk.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163qklxalfe.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163bfnjsrqh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163leguzguk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163kmdcyhlc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163mvgkbdue.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163xqozocnr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163rzlphkkd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163lduwleyg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163xnikjsne.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163nonbrwzq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163kerhogmy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163atdftcgq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ejeixoyl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uhoqtrcc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uabmarxs.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dweqdslq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ysnshzij.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163inxmuijp.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163znpkvbkt.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163eclwmkob.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wcicxvje.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mjyrkpfy.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rhwznadz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163nhpqplzu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163vmvkvbuv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163wyyeenkf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pkeyarca.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163hrsrosqg.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ecrjxmto.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163esgitpoi.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dgaiaukm.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163sqjslqon.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163llpkuydw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163fivevoea.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ybyftorj.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163sflgwolr.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ggpvqpax.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163mjukxont.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kignuwzn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tekpyfby.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ocerkpoz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163boenpsjp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163oihaddjb.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163pjyvmjff.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163mrznpgac.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163jhxvnnhp.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163aowlbfmj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163tohymtoc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yxkuhjmm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163oythvibx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163djspkcsc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163mqpyuspg.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fbcjhhyj.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163sqlxnsxw.html

[H07] 断言
来源：http://www.sxryk.cn/163hwzlwgol.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ubjkfmsb.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kpnqqdtu.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rbujtwti.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163azysyhzr.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163asxsipqy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163cjjivsdx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163twwxfzdx.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163wchpawwh.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lhjxvahe.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163nkzmlbmd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163lnwnmcfy.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163iznawkii.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ejgcyeeu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163hbjdmrco.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ckscsybm.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163soauyzct.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ytujybvj.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163rqjtcrte.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163wzapwzxp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163xlynygge.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163vfxpwmfs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163akqmblbq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ifsxgonp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163qakcmuyv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ufpfmrmv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163obrjguck.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163yyptkmqx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163sxxhpcdq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163wrrveajy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bsrcjiej.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ufwqmnmr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163opjtirlw.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ohgodjyd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163xnrrmuch.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163trqpaoau.html

================================================================================
来源：http://www.xuanzx.com/163orzgfgyb.html

I. 正则表达式
来源：http://www.aibaodan.cn/163gxcbkwxd.html

================================================================================
来源：http://www.aibaodan.cn/163civxxkuk.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rcysjvbw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163tzbgntqm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163lufpedbb.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tgxolymi.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dpklmzxp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163wpvuxulb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163vftcujuz.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163cuwlqjxb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163mareqcns.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163novnftzk.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163jkoanhse.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163yzdyiyjj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gllonvbz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163curhdytn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163jodvjwhh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163liwmvimh.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163dedvgbnd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ywpfewxc.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163eetlodkx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163vgrhfkuf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163xyiddemj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163otngrfxb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ccpzjvqq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163tebbodai.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163wjtygilw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163vwrdwnvd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163lemiiqjz.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163pfkfusnr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qczotztu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163yovbxgka.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163eyrgydyl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zyuvawlf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163fukghidk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ipnhgfem.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163extewclh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ezhtlmdf.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xyvwyivr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163eehmummi.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163pxbzqsol.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163inzsplwz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163srqotzpt.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163iegztdnv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163eajsxwgv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lrfbclgz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163toxzijua.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163yquuvhdb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163eehxbxai.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163qwhjrvtx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163zweukojl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qacfliko.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163xdsesxee.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163rhpbwhvs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163jhqkctts.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tbibieza.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163awraapmm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163okiswxyh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163izspeive.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163tndashqy.html

TS:   /error/gim
来源：http://www.xuanzx.com/163owrfftkt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ywkksrml.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163crdfckws.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ckklkqzs.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163qssfiozg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ndsnzoou.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163kocuyako.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163dyazpgqa.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rtonpoep.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163fygsncqw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163hnzuprny.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163siqhtohf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163snfddjpn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163npcgwruo.html

================================================================================
来源：http://www.xuanzx.com/163hwubnhvl.html

J. 日期与时间
来源：http://www.sxryk.cn/163irnkxgwo.html

================================================================================
来源：http://www.sxryk.cn/163eghcbged.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163jdtuukfw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ptrxhiot.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163khnewnuc.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163atqacnal.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163okslyxua.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163wzxtllua.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163kaitveed.html

Ruby: Time.now
来源：http://www.sxryk.cn/163rhbodvwl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163khvxhlxw.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163pyjdgvgw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163lercxuto.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kwpqmdiz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163fiyvzfgs.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163yjfevubr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163rgchgqsb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163mpbzpccf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ixerixkk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163dxcubqxk.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163kffvxlqs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163thstmkbn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163arcbhcpj.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163yjxwowxx.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mwdcbepn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ciocbhzm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zegrcxqh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lsiwghrk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163rjtzirts.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ynuzqhbe.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163aujvnvum.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163iodvemsy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163wlvydxwd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163gnguslug.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163jwjxbmmc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zwklpmsz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163spupymcj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163otwkloog.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163rthfxpua.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163yzfihknb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163layccmic.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vxxnjftu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pgswvywk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163tydwadfp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163onzkunof.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ooxqvfbe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163nivmiskt.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ggvbtwqb.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zfvrdczd.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163hzgqzcgg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163soevbgms.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163aktjwgmi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ycodozjo.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163yvxwhsii.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163topxyzii.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163gzbuzclt.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163zdtfampb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qlohgeym.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ecviuuaq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wzoruaoy.html


<!-- 参考信息 -->