外链999!wailian999！

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163nslhcwuc.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163qbgoumox.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163nyrqwmhw.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163orcvgtrx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163wrkpcrms.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163gvjolwhv.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163noryirmz.html

[G05] 继承
来源：http://www.xuanzx.com/163undjdrsj.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163hvjapcjv.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163lvsnswgh.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163slzqjxtg.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163tjjrbqic.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163idrwhtjc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163noybywmg.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163bgrorgdm.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163efdxpaks.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163hfvtvkwl.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ucrypzvn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ieucgyms.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163iqnjekcs.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163smrvrbdx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xhhaxrju.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163clulgawa.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163pryxrhjf.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163qxeskuir.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163mgdottid.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163xsbylwws.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163wokzlicq.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163nadhcpuj.html

TS:   super.greet();
来源：http://www.xuanzx.com/163mdrwmfnd.html

Java: super.greet();
来源：http://www.sxryk.cn/163odehxjug.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163uifnqiss.html

Ruby: super
来源：http://www.sxryk.cn/163auqarosf.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163anjgdwer.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xojtcaur.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163noacfzfc.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ddylgdds.html

JS:   static f() {}
来源：http://www.sxryk.cn/163vrckflmr.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163rurozbqj.html

Java: static void f() {}
来源：http://www.xuanzx.com/163lvirwylb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163rkvokqvq.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163qpxsxkol.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163wpobcdbc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163erxbcvzl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163gzyfxxww.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163qllpmgqt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163vvgkfueq.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163rxrfjjyd.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163yyrvrkxw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163gdgrzwge.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163tjldieul.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163lxpvhwdb.html

[G10] 访问控制
来源：http://www.xuanzx.com/163vjxjdzed.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163dbdzcmie.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zvugtdsw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163mymjagru.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ivkczdly.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163jbqedxwa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ernrktbo.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ugvibecm.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163vbxshefs.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163oibqpphq.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ugwhvtnk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163alqsyagt.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163kqtgkqoq.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163utbbfpuo.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163nipjllkm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163brivlbyl.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163vbmyoiei.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163kbatzppx.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163svnaytdv.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163vqjqmdpn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163yqkbijla.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163lxpxpdfb.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163vxszyxcn.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ayaclqjc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163lfpsngfj.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163hkdpocuc.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163txaspydk.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163qqqsudab.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163dmirbpzv.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163slafriav.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163lhgejwek.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163rogawdle.html

Java: u instanceof User
来源：http://www.sxryk.cn/163bzhggvlj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163srtbyshm.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163aglmqluc.html

C#:   u is User
来源：http://www.xuanzx.com/163trvvsbte.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mxedmfjm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163nkdkfirb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tzfvkqul.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ulyuivho.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163uyqppsac.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163fzdhgpac.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163lzjvhhgd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163exgvxqfj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163gtuunwed.html

[G15] 枚举
来源：http://www.aibaodan.cn/163lysfngrk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163wbrxmlfr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163njpxkhyr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163jxuivyby.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nurbgovw.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qcfokvjb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163mjbishak.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163nsquubnb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xttbptjq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163uuifthgc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163rfqcbrrh.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ezdturfd.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163eqoyzzmv.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nupfpljb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ltqsvsqn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163vjypswpp.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163yobkcest.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163qwgpotbr.html

================================================================================
来源：http://www.aibaodan.cn/163bhagrpwr.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163encnphro.html

================================================================================
来源：http://www.aibaodan.cn/163xfjzznuu.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163grrvbpci.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163znzhtmcv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163jxkgefoy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163pgucgjti.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ijehaqrp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163orgckzlw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gtmvxell.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163pqdmjkhy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163fhjvepbh.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163tasjnolp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163dcegenop.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hmftubbu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jrkofsqy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163oxjguyhp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bvbnzgov.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163apgycotu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163dgeumddc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163jkhyaoza.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163cpdbdrfo.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163antrijlh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fiievlix.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lxocihlf.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hdhmnwwd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dilhhwbu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163abypnepe.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163aemyqnwy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163qqcocrzd.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ozfxzanq.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163blnlaqxh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163nafsfewo.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ybgbtnty.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163atmnuyvt.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bwibmgnq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ftfqyiml.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163dqoekesu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163tahpxehs.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163blodnoqg.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163slyshfid.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163nailakmq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vephkwmk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xdnnctot.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163whmrwwmz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163kohxpppd.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163muldfrst.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ujgjjiym.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163rhsnqvsr.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163shuoijxf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163satggpon.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jnmnctnb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yesljkum.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ufxompmx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163tscnnvoe.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163bvsxixbw.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163fpceshpv.html

[H07] 断言
来源：http://www.xuanzx.com/163amcrhgxh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ixmctgfj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ryocjskl.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nxylxisx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xwyyvaef.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163dkarpodz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ukrcjlfv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163juviuhzw.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163xwqlgggv.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163emnadyln.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163lgtsgrvm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163cbeisxgr.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163mwnomlyv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163knbxxhkf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163oazglnfk.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163gzjpmeqo.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163dfprufky.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ahttnjbz.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ruktdwhg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163btwfohye.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163uvfkzbou.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163glywioaj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163iykffivx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163zmgtjokt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163kiqivgym.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163xjjbeebh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qeckfjkp.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163jtjipoyd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163seqncvke.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163hltpwrpq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163csjrrzcb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163huddcjas.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ulvhhapu.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163zcuyvnjz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163vcqytqoj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163gvpkmrkp.html

================================================================================
来源：http://www.xuanzx.com/163xbeekjcr.html

I. 正则表达式
来源：http://www.sxryk.cn/163zmpzlvpl.html

================================================================================
来源：http://www.aibaodan.cn/163opvxgixo.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163uqybpsbj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163pttfkrbu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163djwkwjey.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163inpxguvn.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tfowpkqo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ulaypxdw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mgakcfxu.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163mbejjlgu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zuzkjtnj.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163phbcjych.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163jrliaqlv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163loryczxi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163jtaqxysc.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163bcbemznv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163nrtyyhqx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163uzwsiuty.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163dsttehte.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163itelnwht.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163qbrtgabp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163hffjwiiv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163qrpecabv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163grfttplw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ycggfhay.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163dmslgtov.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163vvyuztyn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163dxdrrogi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163vilrljrp.html

[I04] 正则替换
来源：http://www.sxryk.cn/163yqnbhaml.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163vznpkkam.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vdypbizv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jfxhtmjp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163caaswgpn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163dgvfpzhx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ofhhgccd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163kefgpoam.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163fovqulwd.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163cvnnobqf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163mtqnpyle.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qwgetytt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tkhsneuk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lsfhuqzp.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163rhcdxpxs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163htodbimz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vraeppbf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163wlezgepw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163pdgfovwb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zkcuyciv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163flwhjmwv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163osilmrri.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ljxdpupo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163bxulqzyg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ngfcexwg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163szvrqpfy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fehcjwbk.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163urpobyxc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ngpedcxm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163kkbeoamc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163xqpsyuuk.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ahmylatv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163vfevgnyn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163elodsxzc.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qdzfpiil.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163tvhhdqzi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163saqdgoaf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163bbhngztt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rrakdgoz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xddgaplx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wrfpzwbh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163vojfldjf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ppggesgt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163eiggkknw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ltrteety.html

================================================================================
来源：http://www.sxryk.cn/163furcfpab.html

J. 日期与时间
来源：http://www.xuanzx.com/163lldcqkqw.html

================================================================================
来源：http://www.xuanzx.com/163tvhtolui.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163kiillsvz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163aucdkgxl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163culywxso.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163pzqbmqrp.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163szoixalp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163eluoesvr.html

Go:   time.Now()
来源：http://www.xuanzx.com/163rxixrvxz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163dtilxcny.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163hstxgftz.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163pwpkcons.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163lgltlntn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cqevtvlq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163rxnjzvyc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163anbubpwo.html


<!-- 参考信息 -->