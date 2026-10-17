外链999!wailian999！

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163iumlryzz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163wberagpy.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163yemjboby.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163upkobvng.html

[G06] 重写方法
来源：http://www.xuanzx.com/163wekqpbgr.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163byjjaiiy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ovxqwsui.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gjmjdtpz.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ltyhynnv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hkiommps.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ztdwigck.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163bhcteimg.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163nredjtec.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163nqbtxclo.html

Py:   super().greet()
来源：http://www.sxryk.cn/163vzaemalx.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163pverlmlv.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163vcfddtac.html

TS:   super.greet();
来源：http://www.xuanzx.com/163isyxxbef.html

Java: super.greet();
来源：http://www.xuanzx.com/163iumtnaba.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163gnvlibej.html

Ruby: super
来源：http://www.aibaodan.cn/163vvvtelzo.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163seuhcovw.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163vpjbdwon.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163qqilhmxt.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163zxruyeox.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ohcgabvt.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163jcpqywwe.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163aqzkxcch.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zwjhpwtr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163rrngxskc.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163gacklpsr.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163vrfuwjff.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163tcgxzsfl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163wjdfkdrv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163sbooczje.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163tehfkadv.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163gwrduafa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163umsmykxa.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163chnabcsd.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ijjeycvb.html

[G10] 访问控制
来源：http://www.sxryk.cn/163oxzvulnh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163lmhtdsro.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163arcavpba.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163hsdhiqkm.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163adcpnsgr.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ipneixvj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zbllycxt.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163nvtwzubw.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163yeoedhgj.html

[G11] getter / setter
来源：http://www.xuanzx.com/163dymdppuv.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163moysiujn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163lmeapdxl.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163plvnmlqe.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163fblipmtt.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163lfuyvojx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163bfctpeio.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163egcdjoro.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163fttoyavq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163scefzefg.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163hhjakbsf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163uheaisxs.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163kdgtipfd.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163pddxipbj.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163meqymawx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163cuhephva.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163mnnckzse.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ljyssvrl.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163lkyzfmcp.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163fzfzoizw.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163qphgmajm.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163vvtswmcc.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163qacygfdi.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163npxyrxdd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163egznabok.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163qdkndkfg.html

C#:   u is User
来源：http://www.aibaodan.cn/163jnkylwwv.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163znndiwcd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163zpywkjik.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163unifocgz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ybsrzkcb.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163zhysmjhd.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163dexusnku.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163pjzfqirw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163evguyvyh.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163thcgweus.html

[G15] 枚举
来源：http://www.sxryk.cn/163oqybkzcg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163krbwejqg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163dcdhdwky.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163towufpzb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wmqekvkb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163tiaiyklk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163lwmznxlu.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163iphbeyiq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gklojsgv.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163oxgoqbhp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163bwcaqjxk.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ahmsrlea.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jvkjvznb.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163pbgazpaf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163irecijpg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ppejuonq.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163yqdjyjps.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163urtgtpbn.html

================================================================================
来源：http://www.xuanzx.com/163hpyfdhbc.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163sisklgww.html

================================================================================
来源：http://www.sxryk.cn/163umaoezvd.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163llwkfzac.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163vdgcidhm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163tciyblvd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163tjoercir.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163jqyseobn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163dzhfgbhd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163snmezxyx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163gytjvxqp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163eqnxlfyy.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163vlaynwpe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ymsvmgmb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ncqjywmu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gbupiivx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qelhiswq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ypzlkshq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163horpabbz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ygjbtxew.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163vludmkfz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163nqegkcoy.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163pdmtsgvh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dnvfgirx.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qjgswaji.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kpjtejgv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163mblwvqyp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163emgjnspt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163vrysdcmj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ujhwzaff.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163adipiqau.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163taowfajc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163whpubfes.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hqbbtotd.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tblpejbn.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163furudefc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163kcfskptx.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163lncsdrvv.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xyrmwubx.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163uslrwihg.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163nkryxsmn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163dpiykopb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163yfaalabu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163oklyskaf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163dealissv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163oqxilkfg.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163epbljssp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163anyurcsa.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163fjdfdeow.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ukffosdl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163orerkrae.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hjxtvvzc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163izmgmxgk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ttjkjuqr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ozidokri.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ltaizgpr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163pjmsqkrr.html

[H07] 断言
来源：http://www.aibaodan.cn/163uejmoeod.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gcaaqehp.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ynierinu.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163gzcqsqdb.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163yojcespx.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163qyiunboe.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163jjdeutbm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163pidqgqjv.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163mhkuwjtp.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163vmrqgukv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163orrptobd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163wqijjzhk.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163pynzzgjm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163quyebbny.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wrrasqgi.html

Go:   err.Error()
来源：http://www.sxryk.cn/163avmeuwni.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163yjgpbhlq.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163zsskbimy.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163mavkiwkl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163kfmqmbgs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163eabkymlo.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vxbpsiho.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163kbegrwku.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163kqvasqjh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163plfihenv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163vamjvqne.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163arrdtnnm.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163fvghbprr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163yzyebefo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ojmtktiu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163znxaglhz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163yzpzrcft.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ejbyxfpa.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163vczvmkkl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163kilzgaje.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163tnfzfwfs.html

================================================================================
来源：http://www.xuanzx.com/163snkjsmtf.html

I. 正则表达式
来源：http://www.aibaodan.cn/163hqaghmvo.html

================================================================================
来源：http://www.aibaodan.cn/163vxjommcl.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163yponhncj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ocajkuxq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163glbabswb.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tgabhnvm.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vetsddzz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163tivbkvxe.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163gsnzqcaz.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zrczmdxp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163pmouhgzy.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163eenndhgb.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ywxhhagi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163megwkpwl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163wfobqkou.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ghipvagg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163htbovnne.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163kuulzjpw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163iewjrkkh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xhutxrde.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163jgoepjvg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163pfdeupew.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163kgmuoyef.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163lokjpaeb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163rmoxwuxe.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163eukpjejk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163esvfqril.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163tsiasikm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163eudcbguu.html

[I04] 正则替换
来源：http://www.sxryk.cn/163jhheruwc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163soxhmevb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163cayevcwt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163aiusolbj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mdrmuwmv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wihifiqj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163hgqfjgov.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163wozeozlc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163hkscjyoe.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163aalcubwq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163jcqiuqmr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163fvxtgwoy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nmoyqgdo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pxkfsujz.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163qvyvipyk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163lnnudrif.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163skmnpvec.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163pilcqasm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163kzzlyvyo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163sgmbgmzd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163fmukcnav.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ihbjgyrm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fddvpypj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163proxzwid.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163rtthhadp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ntzuewuv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dcqxyxcl.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163skxitdga.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163cbbbgtau.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163txssxyey.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163cwrtcadq.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dxhxbvli.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163nvwuasky.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163yhxgrhkz.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163sipsmmwg.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163rpohgjhr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163sqlcovav.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163hjtcwlzc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163olvrvizr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mwqisgph.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pmpqvfmj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163mqevlueo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ryjhijkg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163juapkidz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163bfdxkjce.html

================================================================================
来源：http://www.xuanzx.com/163fbzawgps.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ciiuhkww.html

================================================================================
来源：http://www.sxryk.cn/163vuvktlbn.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163kaxdmixz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163quubwtmh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ixiogcoz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ngeqchwx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163whbjflcq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163quethtlg.html

Go:   time.Now()
来源：http://www.xuanzx.com/163mzztevtl.html

Ruby: Time.now
来源：http://www.sxryk.cn/163frmqnjzs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163tddxuopl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163towqmplj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fzuxuwkc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163yxsjixrb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163rnxjzlpq.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163jquqdwwf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163wgjztlik.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163fbgxxtww.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kncctxet.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163rcilpkqo.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ybtxqcix.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163tzqvrfop.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163gajkpzqt.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cqwhkfrh.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163swvodfky.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163uwlddcsk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163bbebcdvq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163brcfvoox.html


<!-- 参考信息 -->