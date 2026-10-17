外链999!wailian999！

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hzfsmrjn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163wumqyzpd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163hltuamdk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163kxvbfmfk.html

================================================================================
来源：http://www.sxryk.cn/163goafzehp.html

G. 面向对象
来源：http://www.aibaodan.cn/163cietbdfw.html

================================================================================
来源：http://www.xuanzx.com/163ijlngnsq.html

[G01] 定义类
来源：http://www.xuanzx.com/163kkpnyuyi.html

Py:   class User: pass
来源：http://www.xuanzx.com/163qyblqlvi.html

PHP:  class User {}
来源：http://www.sxryk.cn/163rrpukojd.html

JS:   class User {}
来源：http://www.xuanzx.com/163fhmecmcd.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163eperdgyv.html

Java: class User {}
来源：http://www.sxryk.cn/163eqogrrsb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163xztgzqtz.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ilauiywu.html

C#:   class User {}
来源：http://www.aibaodan.cn/163jdwaglgl.html

[G02] 构造函数
来源：http://www.sxryk.cn/163xmtrocpi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163agglntax.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163kenyyoiw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qdgtpvob.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163nadwqvcf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163sbnlvwxb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163xdjqhmnw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163nnukypco.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163fzqrkfwg.html

[G03] 实例属性
来源：http://www.xuanzx.com/163msubrnhv.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163mblvgoli.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hyugnhjs.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163fkxclixd.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163qykhgccn.html

Java: private String name;
来源：http://www.sxryk.cn/163thrbqmvb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163sdcpwefl.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163khimirwc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163jbmhommv.html

[G04] 定义方法
来源：http://www.xuanzx.com/163mcjgvnrx.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163yqzjzfpx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163vwsjmkgr.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ylunqufl.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163dtxkobez.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163rpcwwxwv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163wsbuonbf.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163dehqzrsv.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163puzetqxb.html

[G05] 继承
来源：http://www.aibaodan.cn/163bblxiqne.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fdzhkvcx.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163rkijlufg.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163obnnusns.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bkraovmt.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163sgwgjoxb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ryylykfo.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163apoqcpuc.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ovbmpytt.html

[G06] 重写方法
来源：http://www.xuanzx.com/163yozxrddr.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163dvugdecw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tvygztid.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163omfjlbln.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nhfasmwn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163vcuaognh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163dyfgnlnu.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163imtbvwtd.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ynusskpc.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163hpxgyahz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163asvzgfli.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163pkrvyvwm.html

JS:   super.greet();
来源：http://www.sxryk.cn/163dufpusnq.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163kloqweri.html

Java: super.greet();
来源：http://www.xuanzx.com/163ijdpglno.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dusiqkvv.html

Ruby: super
来源：http://www.sxryk.cn/163yvxfjefq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163mmgngwsr.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ltscnwsk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ecfjepxm.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163upbldxtw.html

JS:   static f() {}
来源：http://www.sxryk.cn/163lpeqchrc.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ltmqjvyp.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qooygavo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ogagzuiy.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163zbsrdhxp.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163lcsuvzzi.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163fagmpxnz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jrqlxbev.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163sdqgzhdk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163hrdpambh.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mznsprlb.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163tnosbgcp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ihwuwlva.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ddaulqhf.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163dsiqmnwc.html

[G10] 访问控制
来源：http://www.xuanzx.com/163zsxmbxql.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163uxmspjuh.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163odsevgue.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163aykweqsr.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163bwtxzqob.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163jkpamsgf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163bnthrnok.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163nkvtruuf.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163hyjbqqwk.html

[G11] getter / setter
来源：http://www.xuanzx.com/163nnptcplm.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ahwsompm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dcraobja.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163vheukpyy.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163tfvvuvps.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163letmowkx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163zuifxygv.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163nscbbhfc.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163fsttvoow.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wzbctmal.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163eatgvnqn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163lcxdfqkw.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163phgxysvo.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163hnkwhylw.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163zaacbcyg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163qnzjwubr.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163hprmzmkj.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163puebpayk.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163cuuonwev.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163yjiqbvtp.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163uiotoppo.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ehosrlfy.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163jlchhcth.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163zwvzyjjg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163deidmtli.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163zqcgsjbs.html

C#:   u is User
来源：http://www.aibaodan.cn/163qobmdlfz.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163piqexwdp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163uaslfyip.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ekiuyfzn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163sjsxojcj.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163rjadqbfr.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163iwxgwrfo.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163hihugcja.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163szyusbqi.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163tctgrfta.html

[G15] 枚举
来源：http://www.xuanzx.com/163jijxhbxj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163najqoxat.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163qcfmnnos.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163exippsrf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xbsaqbsm.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163xgysrjak.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163brobzlcn.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ppjocuah.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163foksmrex.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xmnazvst.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163pnvwsebu.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163isnfgdyr.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xowlzhnb.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fmedyikc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163gbxizmdv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ljgwobvx.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163hdimntfx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163bhuvqbeb.html

================================================================================
来源：http://www.xuanzx.com/163cyrkzgka.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bwbzfmfd.html

================================================================================
来源：http://www.aibaodan.cn/163nswgkdll.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163kjfvxlkr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163hecsfgga.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ftiurjuz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rghwpxkj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163jrbrcnvk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163avhbgppo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163atociftl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163soxnunbn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163nonbzcuu.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163jafhmoro.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ytbrlfqu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hgyrjraj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ckqfmfyv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rqcwiixq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ycjyxeln.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163pxymoxnp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yclrpmiu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ntdravhu.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vrwtealm.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163btefncwg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163anzjevog.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kkgukcpm.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163assbixza.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ynaqrwej.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163xcibhttp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ctkyalci.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163myjkbswt.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163mbpqglmu.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163amrmidpr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163uedpkong.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ctpkgzvm.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zfirbkow.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163jjxivexv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163qvireepa.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163xdpwnglj.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ishkboil.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163lwdjgeqj.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163pgmnyitu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163fhibsdrh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163sjjvqaqp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163sehqmlty.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163auwknmst.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ujihnwtq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163bkhaxxpe.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163kmbrsdqn.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ztanmtfa.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163aussxlqj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163weloabfy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ljzgghpq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163owrucncl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163anneuyjo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163iyxgxjhu.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163quhguwsc.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163hapdcvjg.html

[H07] 断言
来源：http://www.aibaodan.cn/163izwhficz.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163vxfuxvmm.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163lyfhatwp.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kjvojhcn.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163uttnmaas.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163rttjvotn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ewhrayjn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163gcomikzj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163lxvxqlvc.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163hjjtqkwe.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163pmlqelpl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163xviexuwg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163kzxcwlvr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163tgqcwsja.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163oqxgwzmb.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vhepmhcy.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163vljdcbqu.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163mjfhyjun.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163pqjxafqt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163zumknxfg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163pexpsmoi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163orefpayw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163vjtjjrjo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163rxldmlvt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163lhtmhzmh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163iccofsap.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163xtgtczes.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163fifqzzfr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163wlnhyjck.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163gljvjmdb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vzvggxxf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163djegjyqf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ibxobobv.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163pgpayyjs.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163vspbuwew.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163sszoinup.html

================================================================================
来源：http://www.xuanzx.com/163uaajhkae.html

I. 正则表达式
来源：http://www.aibaodan.cn/163hxyjhkhb.html

================================================================================
来源：http://www.xuanzx.com/163zwcausrk.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163dcfccwhd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163hfcpjajm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163qtolmitm.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163dsbqyxob.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163mscrvumq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163dvjrgnye.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163oogbyqny.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163buddcewb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163pfgxaxza.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ygggyqlp.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163xgwitmiu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163rvbueeyj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163dmisrxcr.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163kvgpzlav.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163goeaqcso.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163wvsagshk.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163cwkunleg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163nzayvrri.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163lujdpcqz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163aqunjlfe.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ibxkjfgb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163iitdmdhs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163drwdxgrw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163aeubifeq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163nmcxqntj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ysxrwnhv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163jdoeygxi.html

[I04] 正则替换
来源：http://www.xuanzx.com/163wbirzsdt.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163hexmiqie.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163dwlpgwrx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ochqrkha.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163flkbjtxk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163cwqmcdye.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163etfxrrhy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163uibxnuzj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jvfzsqey.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vazbsjsk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163lxhjluir.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xycpouit.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zlrlfqym.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nbcieshy.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ecwyvcil.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163bzpasbwr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xpxefomi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ldpgtnax.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163obyhkpvn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fsoztobv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163petcipig.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163fzcgpeyu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ptyzpxjh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163xynghqwu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163jvqbsmwk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163iwgretjd.html


<!-- 参考信息 -->