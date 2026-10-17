外链999!wailian999！

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163jhqxarlh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163pyyympgq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163gzaskwop.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ozkziasx.html

[G06] 重写方法
来源：http://www.sxryk.cn/163aegfxejo.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163nwmomjpx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rcxtooks.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nhbkugqx.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dqjcfrjh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163hggjlqsf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163nxyqoemb.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163dqlhyrwr.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163zjipnevn.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163bvarzisj.html

Py:   super().greet()
来源：http://www.xuanzx.com/163muhfljyq.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163rbfzvhyc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163qzvvrtdk.html

TS:   super.greet();
来源：http://www.xuanzx.com/163qfuwdhbe.html

Java: super.greet();
来源：http://www.sxryk.cn/163ahuhooyr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163kbgmdpve.html

Ruby: super
来源：http://www.xuanzx.com/163jrhfkbik.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jilsyfza.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ijuwbabs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ywjpmvoj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163yjzhlqka.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ybgmxfua.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163fbcwoska.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ijllwmfe.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163nelygcov.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163hknkonmp.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163gytzfkbd.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ueudpgch.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163eqwsgvpl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xcaadcfv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ffrrkgxq.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ylxwepov.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163tfeugntu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163uqfseefl.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163kcwmqstv.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163uoxfgxqn.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163knfroqfy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163pvrurbkm.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163gbsuvgdg.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ulrdpzyn.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163meybzpdo.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163hkdecxlz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ujzimyyq.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163velthsxw.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163hsaoobnf.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163fcyxrhdk.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163klqpgdlh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xfaqcogd.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163esjibrav.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163jdwhfnsi.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163nvpdsgpr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163tqddvxll.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163wkexaspi.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163wlzrnxsq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163vekpbsia.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163lpsbxxsm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163tgnudker.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163rhkgudtm.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zztmaxze.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163vmaicqzc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ptlmpjpp.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163nfbabyzl.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163labqtvpd.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163crhhvjmu.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163rnkdlevq.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qabjhuny.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163asojrquw.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ddczopiy.html

Java: u instanceof User
来源：http://www.sxryk.cn/163glrttoor.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163dzsmmtmv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163omvvjvnb.html

C#:   u is User
来源：http://www.aibaodan.cn/163ggduekcf.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163dhmsxjfb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163aiyqgkjb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163yubmdpgi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163cedblnep.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163tqjioixl.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163tezuonup.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163uhkreszy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163tfhjupwq.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163rshvvxec.html

[G15] 枚举
来源：http://www.aibaodan.cn/163cpnolxsj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bcediwmz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163jcaswujr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163sakgvgrr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163migvoycy.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163iialkppt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163uxsfabmf.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163kbyvuwlc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wuwvrkdq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163drlqhfdx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163huxmydjc.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ggzmlfzs.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ufqnplyz.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jeidudaw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163gtzmibkc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163frjetpnh.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163dzxpqkqw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163qpjsjker.html

================================================================================
来源：http://www.xuanzx.com/163iffzawkm.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mhdixmqk.html

================================================================================
来源：http://www.aibaodan.cn/163uhqefhjw.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163zioggsvw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ktyhzqzq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163rtxfupjn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163aeycpslx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163eumbnuqx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163avcgydsp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163kaehxust.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gkzksskz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163nfdronhf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163lwbfpxlj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ibfkmvfa.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hvompdma.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eezpclev.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dfojbciu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mnzesxod.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163oxwihugs.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163flfjjczz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163npglmauz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qcjwnwqa.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163mosrnwkm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163mlhcfhbv.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zyffekkp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xtxftolb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163oykczsoc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163kkbpbdzo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rodsbzrw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ktmokxji.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163spsgirgw.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163htywvelj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163xqkgjswb.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wxrxkwsg.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163abqntidq.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fegkafcv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163cyfpotag.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163fbzotxrl.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163akjjryvy.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163cwnowejh.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163dvtzoiee.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163lojnkowz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163etbtmjiw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163spqoczok.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rnbonnvr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163tzpkzbjc.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ehrnvnyc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163jybcignt.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163yqpfvbyx.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163jmiveata.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163tsbauyer.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163takewseg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kxfksqgx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163xjgvonci.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163poiazzkr.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163vmjtngvf.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163qwpcrnnq.html

[H07] 断言
来源：http://www.xuanzx.com/163gqbmvdgz.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163akwygtvy.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163vmlvocpp.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nqjjermb.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163suvwftsc.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163dslsjbxb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163lfxsojbh.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163nomhtshp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163plriaiek.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163dhmufabr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163qxnbuguc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163kziwxrdq.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163blhodvsw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163dimlemxr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163odvlsobi.html

Go:   err.Error()
来源：http://www.xuanzx.com/163tdrzfeid.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163qkepxwjw.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163xdixcbco.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163iadvsjqx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163fgvkchhg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163covovdix.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ehrllmzq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163knjryqof.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163orhimqkq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163puvcruft.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163bnkytqnr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163afqpvmll.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163dxvezexe.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163kfweedod.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163xqnzmoii.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hewtjllh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hbtchjej.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163mucmnenj.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163enwnybqm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163uisqmprt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163bpocfmhk.html

================================================================================
来源：http://www.xuanzx.com/163klkcjujg.html

I. 正则表达式
来源：http://www.sxryk.cn/163bvxrldjz.html

================================================================================
来源：http://www.xuanzx.com/163rtawpvph.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163zcxejjii.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163dbowasju.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ahrduskw.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pivjfzal.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ymqineec.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ajdswyvl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163grfjiecx.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163odbyrffc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163zuknczwy.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163saiqmndq.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163mmldyldo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163mxpridzg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ebarwbko.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163tpmkamas.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163otvexbuj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163hknrlsww.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ubswhmzk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163wnilfbsz.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163gtdigtym.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163kyyzobpf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163qdvnwvxd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163docbpolo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163pvytdbak.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163fgcbdysy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163fzxfmdoq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163fuytocdp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163uftyozzg.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163uqbzetss.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163fpdavacs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163giqrbqii.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cwhymspw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163pbskndgn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163rugphasn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xeisnape.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163klpzqfkg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163xsgnrmjd.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xacbwdra.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ylxgrhfp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ockaknxj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163uzsvkyql.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ajhmkwqh.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163hwhjmvzm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163uuegspuy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163exaumxln.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163pxbkigfm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163xgiuhicw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tpamtnnl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163wersizes.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gnlazcfi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163aagbyeyg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163jnjumjze.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163hczutflx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ojilvpaf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vydyqtqk.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163amxyuvmm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163etlcnyqt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163rzbaxdph.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163yxxirytf.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163kcjltplt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ezdmpdaa.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163qseieirs.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163xoyrywsj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163pevgouwy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163gmntjdcz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163peloagny.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163lyfoaozx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bkexrmaz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163sjgdgtmh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ewuttzha.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163qtbevwjq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xdurqjgr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ctcmpjzp.html

================================================================================
来源：http://www.xuanzx.com/163yyrwaotf.html

J. 日期与时间
来源：http://www.aibaodan.cn/163lugxvehb.html

================================================================================
来源：http://www.xuanzx.com/163aetonwno.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163yxogxuxz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ghdlzsls.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lksditlv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163eqiqppnl.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xfhccdmt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163iebvzdda.html

Go:   time.Now()
来源：http://www.sxryk.cn/163kmlgwqff.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163mbvcdbeq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ckdknozw.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163arvzopxl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163peasuyui.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mwnbyhld.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163geesbsyp.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163hekghfxm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163twknqzsz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163qzikwlke.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hmcqewkk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163dqtqyaha.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163dtcxgwqi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163qneymbwz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163upoudkmx.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uskreelj.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163knlhrxqr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vedszuic.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163jbscxpwi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163zizmphmb.html


<!-- 参考信息 -->