外链999!wailian999！

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163rdnawwig.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dejgunfw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163troolgun.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163mavoijlb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163bjgysmtn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vvkleaft.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163cxttrmof.html

TS:   // 同上
来源：http://www.sxryk.cn/163azbmczsq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163fdfbsjpf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163tmtgoluy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qyljbebd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163fkfkpale.html

================================================================================
来源：http://www.xuanzx.com/163xbehusvj.html

G. 面向对象
来源：http://www.aibaodan.cn/163wyuzwzbt.html

================================================================================
来源：http://www.sxryk.cn/163iivqhibk.html

[G01] 定义类
来源：http://www.xuanzx.com/163efsgyuwj.html

Py:   class User: pass
来源：http://www.sxryk.cn/163klqtxbuz.html

PHP:  class User {}
来源：http://www.xuanzx.com/163qozqdggw.html

JS:   class User {}
来源：http://www.sxryk.cn/163zqufrjib.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163rricrfzl.html

Java: class User {}
来源：http://www.aibaodan.cn/163qldaiinp.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163lqoxfnoc.html

Ruby: class User; end
来源：http://www.xuanzx.com/163pifobszk.html

C#:   class User {}
来源：http://www.xuanzx.com/163tvqnqewp.html

[G02] 构造函数
来源：http://www.xuanzx.com/163hmkntzwn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163zbdpukdp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163gzpzeokz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163dwapshwv.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163rrshusmu.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163iqaupplu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163eethzivw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xkwhqhtf.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163jlcyotor.html

[G03] 实例属性
来源：http://www.sxryk.cn/163jafcqojd.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163uxchznul.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163uxxnquju.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163cpeqyqjl.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163bqmrskbe.html

Java: private String name;
来源：http://www.aibaodan.cn/163csomxttu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163pqxaqqul.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163zmmnudny.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163iypxlxmt.html

[G04] 定义方法
来源：http://www.xuanzx.com/163cjbuksri.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163zqxggzat.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163lzkguqpq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163bsrizxnf.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163aheakaqh.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163qihpwosu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163voldqlzc.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163nqolwecr.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ujpiyiid.html

[G05] 继承
来源：http://www.xuanzx.com/163fnrkmiap.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163cxcqneoe.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163fpyxuoru.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qhuabwas.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pqoexprm.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163siryhnee.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163zvrakfpo.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ceypvuxm.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163zmwyegze.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163bcvhhejb.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163vodkokks.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163slxryrny.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163rfmcpuij.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163teagalkt.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163iywldswn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163cfjcqgza.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163grbfpaqx.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163jwjgfpzs.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163dppqxxpd.html

Py:   super().greet()
来源：http://www.xuanzx.com/163dcmwgbsr.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163flwwvzov.html

JS:   super.greet();
来源：http://www.xuanzx.com/163jbyzsslz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163iiorsmxu.html

Java: super.greet();
来源：http://www.aibaodan.cn/163qjneaufj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tqbveljm.html

Ruby: super
来源：http://www.xuanzx.com/163gagjmnns.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ekylmzkm.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163mztzgkgx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163djlshwao.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163jbxddcvq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163oncbinyt.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163zbaopezo.html

Java: static void f() {}
来源：http://www.sxryk.cn/163jidvdvod.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163corsohgy.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163lpvdcwhd.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163uksyipdw.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163vqhqvgep.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163nkrqevfm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ipnjlyjg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163fzyhrixm.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163klwwoels.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163pepdfooo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163yccrvyzf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163gnznlskh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163phmkuzfx.html

[G10] 访问控制
来源：http://www.sxryk.cn/163fifljgcj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163lyfhhloz.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163bhvndiyh.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163wuhuyujt.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163xsgtbcpw.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163gbnnnxqi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163xaequgkf.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163vijutdnp.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163zizesmvt.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tsfadzec.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163upslceqp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163quizaqel.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mieqpwqx.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163nibqvdmi.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163uilagdlb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ewdhoppg.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163txobrnkv.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163vcnyfggf.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163sybnwmjk.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163xestmkal.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ofwnsclu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163irczuusv.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163zwneobic.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163crsxvdqg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ocstyavh.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163tiknlzqk.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163zpbbhklu.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ktgtfcak.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163udincqmy.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163yqkxapjk.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163mrswrcss.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ioagnxwc.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xhcrrqya.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163omizcvgb.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163khqzejvt.html

C#:   u is User
来源：http://www.aibaodan.cn/163pqpxeshj.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163lfphgnsz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ljghoahl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163vpudmyzi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163gtjorily.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pskybhhm.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163htomlymc.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163fvflbaso.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163fmnrenpl.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163mvvszdli.html

[G15] 枚举
来源：http://www.xuanzx.com/163vptpiyxl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163gbpqzhnr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163scerhyii.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163tugcqkhu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cgpshsnj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163tcwrtpkh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ihrxwgwe.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163vaycaelb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kfsahqqo.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163khotugeu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163vmdzqruj.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ocplilfs.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kuaqzjsp.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163syptytje.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ubsfhmku.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163mojvojnv.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163fbwprbps.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163eoqcmrnc.html

================================================================================
来源：http://www.aibaodan.cn/163xkqkqogm.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163tdrexjke.html

================================================================================
来源：http://www.xuanzx.com/163xyotdhad.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163tkkeltto.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163moeldelb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wsqyelzf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xuhkbowb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wvobxhiu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ssghxlxa.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163oqvgphfc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163blgxqaiy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163zjrnfcxe.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163usdmhkgw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163feixwcig.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vbmsfnxk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zyksiaqa.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vwxyhkxa.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163isihctdw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163wjptlzvp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163xvpyakod.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ftdmmkux.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zxvezcoi.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163dwqzcjmw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ynoyeoms.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qeucliea.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163plujglme.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163polvdyuw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163yiqazguw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163kfyasywx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163teltksri.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163mowlxhhy.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163parvcesk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163kdgshrhd.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ewgexfup.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163fkvalxib.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ytbnnvho.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163vpqiypyg.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163shconigd.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163swhvfiwj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163swvoqldu.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163hecxgbip.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163aqfglzeg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zmkcskew.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qhrwpolh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163hizbbbcj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163nxcgggjn.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163cstopkqa.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wcgzhxfx.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163dpznxlsg.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ivlgcqkg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163vrwqbsje.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ipcxrfpd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163imkeltrs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mvyhllkz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qwjggjhn.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ynnpklwa.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163kgvuqihw.html

[H07] 断言
来源：http://www.aibaodan.cn/163nbwsmhyq.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163acywgxkw.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163lxjnpdoh.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163iuyythyc.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bxfnpkor.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163wkpbuuqk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163tljfvswf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163spxxfwox.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163nznhlyty.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163qcnofncc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hdytxxxc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163qmflkmwn.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163zipmkfvt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163cfcjjzdo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163dkbjsxzn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163juhyqprs.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163iurgalhe.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ayqgmvcb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163wreljuog.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163knbkywcr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163wxdujydi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163mqyhpelb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163utkywozs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163akobbqkd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163egzhxzqg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163bzlnqxhp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wfioslgf.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163tvijlhlp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163wxxoavqd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ywgyikdt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163nnixyonc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cpwqawmo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163figkwnxt.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163wavjzazu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163gmajahge.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163vsweynsd.html

================================================================================
来源：http://www.xuanzx.com/163tavqmvby.html

I. 正则表达式
来源：http://www.aibaodan.cn/163fwasqbrk.html

================================================================================
来源：http://www.xuanzx.com/163xnuapxhp.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163puorfyma.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163rzstxans.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163rhxkvghw.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163peceqtnh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ddeklgay.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vjsrqqqd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163manraqtc.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xcftparo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163wbbacjui.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163jhduteds.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xhwgpkud.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163uuzdwdyl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163vwqkuhia.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xmegdbyy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163jhkqezof.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163bgincghu.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163mmmpmhmr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163dftgvmik.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vubhabgy.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ibjkemum.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163iepesmeu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ydzeqtpo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hwbjgjzl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qbdkpstn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ujsyaamd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ewphfrag.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163xcghksqd.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163egwsqbmo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ollhjpnw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163fnrnwaaq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zaknjkhu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163awdsfkov.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wymojcpm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163fmhyuqwf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163avifcsxi.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163jncvfvoi.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163jsuenlad.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163eppbpbnu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163qnxcknzk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qacbgtsv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bjeozshy.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ggpsrjrd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163tczshpel.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uvrespzi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163qwvndroi.html


<!-- 参考信息 -->