外链999!wailian999！

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pbmqpiyr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vckcayqf.html

Java: private String name;
来源：http://www.sxryk.cn/163oltrcqum.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dyrxfgwl.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163yzggepgk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ppmxgbch.html

[G04] 定义方法
来源：http://www.sxryk.cn/163nuverffe.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ermnmsuq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163fmwibklt.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163mslygzag.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163deqwewil.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rfohmlkf.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163taqifspb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gimscfgu.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163enpdnfaw.html

[G05] 继承
来源：http://www.sxryk.cn/163gprlvkvj.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fylbpqri.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163lasxnmbi.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zjkddzzw.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xnpzzmdo.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163dmzhbiwr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163rhakqrpq.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163orbiuvik.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163oeziluta.html

[G06] 重写方法
来源：http://www.sxryk.cn/163gkotpgyp.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ftglcazj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163lalgoxcc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163xzrfkdww.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xjncocan.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qeirkyrd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163diupqlwq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hybqbyoz.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163pqnhbyul.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163eyinjxbs.html

Py:   super().greet()
来源：http://www.xuanzx.com/163uzlbjzoc.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163smemefth.html

JS:   super.greet();
来源：http://www.xuanzx.com/163cnbcliww.html

TS:   super.greet();
来源：http://www.sxryk.cn/163iqhqqtqd.html

Java: super.greet();
来源：http://www.sxryk.cn/163chkyedqf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163esqzzfxq.html

Ruby: super
来源：http://www.aibaodan.cn/163urqknecy.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163qesejyto.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163emlafyvx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163qvybjevj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163tcdbpboh.html

JS:   static f() {}
来源：http://www.xuanzx.com/163xcscxxnq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163orltylot.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163rzpwlwrc.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163uvutysnv.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163cdapkksm.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163rbfnyuse.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qalamlrc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163eeyyosla.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163cqwjcmqt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163psbunssm.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ejjtfllz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163htpmvljz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ggjfjopg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163kfqagezx.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163rxbqaxwv.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163hfzrumsl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163xowilxuo.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163qhdhvvnh.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163mnktjhrt.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163milwlhgl.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ghphxggc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163givrqsex.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163gxwafqfq.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163yjbefrdr.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vldyetai.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163znwbsadm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163negrjomv.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fjlpstlu.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163suatawus.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163mjegzbjq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163hwlbmyrm.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ypmpodcb.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163cdneamif.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163vvqgqcle.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163nabazcvt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163gqraopdq.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163acdqpkys.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163segtfozi.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163mythqnds.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163dgelcxnw.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163eilomcey.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163vuagnssr.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163kwwdegrl.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163idykfvtr.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163kntidagb.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163utsmkvwn.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163astywbbw.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rwnacecw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163kirgfywp.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163fhukuuxu.html

C#:   u is User
来源：http://www.aibaodan.cn/163wcxidzhc.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ztcfzkkd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163jzdowbbd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163pdbstoka.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163reggixyt.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163uhxornsu.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163evhmgaqa.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163cceyjvlg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163zohooevg.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163vnllaymu.html

[G15] 枚举
来源：http://www.sxryk.cn/163ffmnpuya.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163mqktxvhv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163twfldxva.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163jbnroxch.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ksjnjrpj.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163okfncgbu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163dsoomtue.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163paurpohr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jxdfsvis.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163cimzoxip.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163dquuzzax.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163bjxtkcij.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tuabjfsv.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tigbyypq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163irfbwilj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163uddagzaq.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ebfxdwhh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163zzsnbbkf.html

================================================================================
来源：http://www.xuanzx.com/163zcmwqdao.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163jcrkmjou.html

================================================================================
来源：http://www.xuanzx.com/163nqkpktvo.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163bxoekuml.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163vayrtcgo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163qtwbjsik.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fxgkilnz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ugozbbru.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163bxnugxmx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163raydtcvl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163duqfehjd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163evdkhivf.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163rxreieko.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163popbzaoa.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dravktcl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hbatxayz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ipctdfpf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jirrtvkc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ddgibyav.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163cpohcjku.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163xpwvnnhp.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163oidtmwgl.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163duqofjnr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163igypqtex.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163yummpzrn.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dhqigxpm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163fmnwoaum.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gtdexczn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163irylncly.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163cqrxfpye.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163oqefrpzd.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163okglotdi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163bxsxhwnm.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lnivsmjt.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rzflkrhr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163fbagjqzl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ioixfxta.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ghtoaiza.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ebrerzlh.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163qftbcqem.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163cimqyyur.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163tvyxkifb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163yfkjjrbv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tjjdsowi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163xzddvvwf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163nbfvoevc.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ejswyrkl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163twtvuojn.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163fsmvvohi.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ovhhhdye.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163cinuhxlx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mzlntaub.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gbobjitj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163mazaiidw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163yypitqzh.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163kvorlqcy.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163qxtdboft.html

[H07] 断言
来源：http://www.aibaodan.cn/163yyktigbz.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163smwlfmnr.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163klsgydkc.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vsbhfooi.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rrfpkljg.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wrlyyayh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163kjjchjpn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163xmurccjt.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163oquwvile.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163erlvsshq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163pqkylpsc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163xjteaknl.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ooxlcffh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163syuiyqfo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163gzrwkdaz.html

Go:   err.Error()
来源：http://www.sxryk.cn/163wlhqfirg.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163otgwpkok.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qeacaerh.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163pvcsqffc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163tillynzv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163wqtexzjw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163uriicntc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163jzuzbche.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jcfogvtg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zhdhsjhj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163zuafzbzu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163xawpoxar.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163eguasmxh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163yzflbubm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163hhzlhrty.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163culprlpj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tftjhkud.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163cjkheimv.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163gksqrpjj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163usndjhtx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163noverigz.html

================================================================================
来源：http://www.aibaodan.cn/163qvoanslw.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ifswfbcl.html

================================================================================
来源：http://www.aibaodan.cn/163kwzktukz.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163peavlupl.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163jxvezgab.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163xlcaculi.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nldzexox.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ddfiutfm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ugljgpud.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163buhjghpl.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163xrogpbyi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163dzxsmnkd.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zwogmamy.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163smaxrsop.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163gzttzzip.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163xdznbaru.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163mrlxdfdk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163owhcccbn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163sljxtmck.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163jnvjuege.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163khsncwex.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ierpdqdc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163jlmraaik.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163bnikpuna.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163bbkasnnc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163evsbuerw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163eheohayh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xjcwdxsz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163lsmmtghs.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163nxgzokwj.html

[I04] 正则替换
来源：http://www.xuanzx.com/163bpxdjclt.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163kzfzrysx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163cnavcfhe.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163imftxqjh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xgtjzrqv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163xfcarvvb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163wpijiecl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163erfuinhm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lveohaho.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163nsjaippd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163umnefkaf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163bsbvbnpu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163egsgkwev.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nhxcoaqs.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163boseogyx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163djdmjtmd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uklcijtp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163jauyqzve.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163uaqyzhxl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163juatrzjp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163inmnsjex.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ywfjuupq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sxuuhxxm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163satrbebx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163vbsubzqj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163fqmkcjbz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ealmtsdw.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163rguhpzvb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163wzpjamwi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ipumisty.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163fhslchfw.html

TS:   /error/gim
来源：http://www.sxryk.cn/163szlpjegx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163yygcwrmd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163qdrfuzli.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163jksgoref.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ialqaion.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163lhtukbys.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163blxmqccz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163davfihsc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mcijfkqn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xcvdptby.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163eyiyibmf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163lorllsmd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zguyddwb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163toqlwckf.html

================================================================================
来源：http://www.xuanzx.com/163cuzyrjjo.html

J. 日期与时间
来源：http://www.sxryk.cn/163gplbpvyj.html

================================================================================
来源：http://www.aibaodan.cn/163sujujuqf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163dltepqgd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ylmgxrpu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sxeizrsv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mmlipfwk.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163imwajktr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163eohypcdh.html


<!-- 参考信息 -->