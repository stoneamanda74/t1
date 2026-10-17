外链999!wailian999！

Ruby: super
来源：http://www.sxryk.cn/163ebgwsgpy.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lckrmjml.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163cxalyyoy.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163stfcpgks.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163sqbuppuu.html

JS:   static f() {}
来源：http://www.xuanzx.com/163kguetjcg.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hkagoyjk.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163snzzrjpl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163wzfngyoa.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ectfeoth.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163hzssosme.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163fbwlidlq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163lmghtdxo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163udbzapqa.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163iwbcjtqb.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ymruedov.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163aupixqaz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163mkerdkxp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163tinaqiyt.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163sflekhpc.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163uiwgojhq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163lazjbwde.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163mugedfev.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163cqfhzhte.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vwxjbqbj.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ksjfscra.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ypmokbis.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163dmzkyiqu.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163cudlovoa.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163pkhksppw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163pjbboapj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qnxefbmc.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fqlqprxk.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163wzlslkau.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163bkngjmro.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163qkifzvfs.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163tyynmwms.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xskncdne.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163qngljnll.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163vuawoony.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163aqdpiznv.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163umejxicf.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163cetuhyox.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163oyukoopp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163uyxghyth.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163vkoqejrd.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163szsqzgxp.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163utxdmspy.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163arflpaph.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ufouzkrw.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ophqqoxz.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163zgtiaerp.html

Java: u instanceof User
来源：http://www.xuanzx.com/163aulthdux.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163hubriibg.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163krtkrgnx.html

C#:   u is User
来源：http://www.sxryk.cn/163kuafsejc.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163czhnfndd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163uuldiddo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163wmlsfcvx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163duonobvz.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163wisgnorz.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ukofaopb.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163blhvygib.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ywyqvtrq.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163tvgeimde.html

[G15] 枚举
来源：http://www.xuanzx.com/163rjddsymq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163nvjjffln.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163mgxfqdne.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163itolethq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163byuzqaoc.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163lchvgnkn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163kjxewwpr.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163tnwvdciz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kcropxxe.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163iltgirws.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ulivmxvh.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163vbajjlvx.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fzajciwy.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dbhfovzn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163lbmdzpzg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163pogjxumb.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163lqmvuvga.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vdcpmlhl.html

================================================================================
来源：http://www.xuanzx.com/163lsttgxla.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163rklwleff.html

================================================================================
来源：http://www.xuanzx.com/163xcuosqqu.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163rgcervum.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163tspbvqeo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ddtldaxw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163tvdycufb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fuwfxrku.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163uoljiiat.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163clfquyxw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163uqmesdlk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163kcryvvss.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163mtrrdkih.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163febzmktj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163aucudime.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fgjhcaao.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cgpppilk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oyknjmju.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ajwbexjz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163igxivsuc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163xewbiofh.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ptrzbdfg.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163clclkdih.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sqghwiul.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jxxitvyv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lqctgywl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ijvjegbu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ifgflowj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163epgphaqg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163kfgnqmzp.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163fohpzngt.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163cergoxiz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163sefwfsgs.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mjacdzrg.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jsiwblpk.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ddqerxds.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163qzbhpech.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163qynvnbcs.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163zlnxyvma.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163aritxyfl.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163kgbcqvbz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163nglzttus.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rgauimrt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163igdvucab.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163roxlbigl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163zcyieamv.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163fnvjfrfg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163dyekxcdl.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163rqlwkuha.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163abncffmf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ihfgpgdg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xlbpbclw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163obolfocy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163pgywvdcs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163twpwsthw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163esbxvhwm.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163nxlsfsfp.html

[H07] 断言
来源：http://www.sxryk.cn/163ooqlxrzs.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ybaqtvfs.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ufysrcnp.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dmtzuyco.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163agltlbyl.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163daotiuhm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163myrgyoxy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163oerxozee.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163pdpdyioo.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163olktcopg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vdaupmnu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163cliewyhc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hfeciruv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jpfgczaq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163lkuskcai.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163nogytejh.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163sjbdtkpw.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163qnxqvmce.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ywfenuic.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163nrsbcmkp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163rcxtkhyp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163qzpedrte.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ddaqtipv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163cevklfop.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163cvmfvxwe.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163sobrlcui.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ucvnowjk.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ejfkvfcc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163wswtoonr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163bvssyquw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jpcupfdo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163znhpdarg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163jrceraqc.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163esfkosll.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163sxzqrwmc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163viovsbrl.html

================================================================================
来源：http://www.aibaodan.cn/163urnofjqx.html

I. 正则表达式
来源：http://www.aibaodan.cn/163nfalcuot.html

================================================================================
来源：http://www.aibaodan.cn/163ccjhrekq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163wayusfba.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163axmzxxdd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163nkobeflw.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dtccsoxg.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163kwntarmo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163hggbkrim.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163qcgclgye.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ksxwedgy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163zzejilim.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163cdgtnunt.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ceiqmcdc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wzvfrebn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163wyaaeldx.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163svygoyeh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163rexpyobd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163gxutopxm.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163rfwdurop.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163txafhzez.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163lzpcfubj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163spzwqjyg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163zuhallwm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ovvemlhv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jepiblta.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163aijorlqr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163nflxwakq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163dxdiwdbc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vjbtanod.html

[I04] 正则替换
来源：http://www.xuanzx.com/163chgelzaa.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163jlrgxcle.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163fjuugbyv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tkgetlhn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bsnwgfxi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jbrunmdz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163bczpaxwl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163idipojiz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163uxfmnhei.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163bhgzbkby.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163uvwtnfqa.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163obynxgho.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mikgbshp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qifqcaqx.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163rwbwvzpg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163nkexwckq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pqtdsymy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163eftfkpwg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163pciwrtix.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gjwxvhdr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163cqbeeiro.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163whcgwpab.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163akqspacs.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163mqaxenrq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163fdkmzjws.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163cbsruprt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tfvxromv.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163dzosouqo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ghvnzduz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163dxdspohc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163socdzdla.html

TS:   /error/gim
来源：http://www.sxryk.cn/163gbptutju.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163yzgehydd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163uonvgezk.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163bopgvegq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163lemyvueu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163egtzpugd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163rtxaroup.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hkwhjxqu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fxqcndrs.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tntzwmoi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hmmvkhrq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163enyqelyf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163nehkzrvt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163sfqvcvnx.html

================================================================================
来源：http://www.aibaodan.cn/163ersrfvno.html

J. 日期与时间
来源：http://www.sxryk.cn/163gdjdbwlx.html

================================================================================
来源：http://www.xuanzx.com/163ecnegfrz.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163puwwmbaj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ppsuoeho.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dzsdpgru.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dpmjpins.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mppsspcd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163jbauzqsj.html

Go:   time.Now()
来源：http://www.xuanzx.com/163hqfgnasl.html

Ruby: Time.now
来源：http://www.xuanzx.com/163fvtpxrsb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163hwtbfgjg.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163vbfmgxak.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vtnrfhgk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163esluwsbp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163yytbafsa.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163poqtfgni.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163gaabxwav.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163eueqxotx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wxgmsupu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vdptkdbz.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163iobjcyli.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163dxniorao.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163hmylzzhs.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hnxwrlkb.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jddsrzyo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lxmjtgvy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163fppotzkr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163sgyfwqxf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163nysdkbbb.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163myjxxlck.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wwqfkocf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163akqgyxxr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163tjimkbir.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163qnmzdzii.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kveyoeax.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163vghldbgn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163fvrabzia.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163prewormx.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163uvejxtyd.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163pnohkxji.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163wtypxmsn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qnkrojom.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qzqulluc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163crrescmn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163xtjlizxx.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163kzlrgmay.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163lhzrikya.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163vggvvuej.html


<!-- 参考信息 -->