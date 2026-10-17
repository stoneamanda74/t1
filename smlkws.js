外链999!wailian999！

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163wsmviymh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163lebpwell.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163lqbmfsxo.html

TS:   // 同上
来源：http://www.aibaodan.cn/163wwyxfljm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163nfuexnge.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163lltoaeiz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163pszpfwdq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163aqhtcdbu.html

================================================================================
来源：http://www.xuanzx.com/163rahfokat.html

G. 面向对象
来源：http://www.aibaodan.cn/163aanmlfxp.html

================================================================================
来源：http://www.aibaodan.cn/163niyttgsc.html

[G01] 定义类
来源：http://www.aibaodan.cn/163iavzlbsv.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163uqdcukko.html

PHP:  class User {}
来源：http://www.xuanzx.com/163fuvnbrqs.html

JS:   class User {}
来源：http://www.xuanzx.com/163mxdeksme.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163vgcpfuzl.html

Java: class User {}
来源：http://www.aibaodan.cn/163zhunbbxg.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163fgtbijgk.html

Ruby: class User; end
来源：http://www.sxryk.cn/163rjlhuioj.html

C#:   class User {}
来源：http://www.aibaodan.cn/163lalsttmu.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ygapdkfg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163sbdwyaac.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163zbpptayw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163iwfomdyh.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163zlubvjck.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163kqovltxk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ximzjffh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163xjwdbxhs.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163bcpcgmyf.html

[G03] 实例属性
来源：http://www.sxryk.cn/163vrdberff.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163cdcsxcbd.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163wzivkmlr.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163umuoabeq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163lgtpgplx.html

Java: private String name;
来源：http://www.sxryk.cn/163rpukefmu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163emmhhpwv.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163bystkmdw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163rvgixzyp.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zdbuctdn.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ghemgehk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163mlovmpoi.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163akjnwtjr.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163yxmsqrdy.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163iqnupufn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163iqdwghhk.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163tcktcyzh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163deyydzsl.html

[G05] 继承
来源：http://www.xuanzx.com/163rpttcsif.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163odpftlsi.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163bgzzczgk.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ibimqkre.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rkpoknpr.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163dqgzdwpt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163zixckllk.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ujeityyc.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163wzahyfhk.html

[G06] 重写方法
来源：http://www.sxryk.cn/163hinvakmq.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qeyhpogq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163appiptbj.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163lqfpitrc.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jqijtdus.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163gusfryqz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163dnxjmjdr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ksrzpkvo.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rncrofdg.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ggqgnwdc.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163xjofkfxq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xetkxyjr.html

JS:   super.greet();
来源：http://www.sxryk.cn/163nibxhmhx.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163wsguvwob.html

Java: super.greet();
来源：http://www.aibaodan.cn/163nozdxenx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163rqajpdwe.html

Ruby: super
来源：http://www.aibaodan.cn/163cojvhozf.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163opxuhzdg.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ymifenkd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163vttlbgjn.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163cekyznaw.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163sixlolfc.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163chgehwic.html

Java: static void f() {}
来源：http://www.xuanzx.com/163samsvklu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163gpebfuad.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163bjcmpmfg.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163vcxdmqwp.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ywxlynkw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163faoewdob.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163apeoghwv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163hetzsozm.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163nwmpztiv.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163gchmbbbt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163gjqnkxvo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163hmgkgyum.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163exhpybyv.html

[G10] 访问控制
来源：http://www.sxryk.cn/163xnqjjwda.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163gbpufyed.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ofovjuqa.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163trbctmpk.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163mbzxjrbe.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163txytqgcy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163txzmwray.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163uqkcupco.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163cgvbkhvd.html

[G11] getter / setter
来源：http://www.sxryk.cn/163mokozmii.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jvzyhqgd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163rpvpmfhg.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163dcrcatze.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163jlkwukwi.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163tymlwicu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163szyzxnjm.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163uylmdfer.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163hotcchwv.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ctrnuudd.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163suutahgy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163zcupklsc.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163dpdpjvnk.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163bgftlkld.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jwfqnnro.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163woirdufv.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vxpgblzs.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163lwvptycv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163kjklxmxs.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ozmrcgzx.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163hstzrajz.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163nmmwzmjd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163idougzdj.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163orbxoicu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pbmhdbmw.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163dcjcbaok.html

C#:   u is User
来源：http://www.sxryk.cn/163vhjlbblc.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163flgmkwqo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163uickczmz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163borfmdpz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ujyyfnqp.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163euglojwa.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163tquxdbqh.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163nzfysyvt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163xusjfcvi.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163zzdbujxp.html

[G15] 枚举
来源：http://www.sxryk.cn/163nmvtxukq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163xppkjwup.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zdkqpkyd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163nowqwsqo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163imppwxst.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ptqlkkrh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163wacptezv.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163waqjohym.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hjdcgnhh.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ihgnluqw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163judylttb.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163aysnhbma.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hapelwbj.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yxhnlukb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163zjvitafy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163jidkidvn.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163mjpirnlb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vizcuize.html

================================================================================
来源：http://www.xuanzx.com/163yakqlhgw.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163zgwejfra.html

================================================================================
来源：http://www.aibaodan.cn/163birgibjp.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163hdtleacc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163yerunmre.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163gkkhpyzc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163livmihpz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zrmqyiat.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163qlgbsjwl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gzcwozks.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163zqcgjcpo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163irqwutnk.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163lylzhsyr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163tvvxjuqb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oonsibsm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xpyqdnzc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mzysgchl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gnpsovat.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163jmfabrvd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163guefcoll.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163vesfgiir.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163fkgruyhw.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163yaqzzrxz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163truofzms.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jecpubwx.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xxtjdfau.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163evppqkiu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163zchnopwq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xxjtttxd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qhomgvha.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163tnfzjbnw.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163bonpdxsy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163zchenhwq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163kmpofkfe.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zqxxatkf.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163upgtgjih.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xnzttsjx.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163jakavciy.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163lahhnqhn.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ostdagum.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163zdgzmjgd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163kpgrmhss.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vccgfwdu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vkfbanef.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ipvxoeyz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163vqhfhunz.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163kogdecms.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163vohtznpy.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wavtjpnw.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jirsbltt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163jicmoayp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ggptviyq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xgotbtva.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163xnauuakq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163pflhesqz.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163fgowaiaa.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163bdkrmeqm.html

[H07] 断言
来源：http://www.sxryk.cn/163ktibjmvm.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163uaqhgbrr.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ipmnanvw.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163retkmqqt.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163aoscoktg.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ohkxtoxj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zupedocs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163uwsvtmun.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163mcuefwfa.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163roajtnoa.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163zlmairds.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163hdyacbga.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ocqevurz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163lmjzpugj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163iipwqyxd.html

Go:   err.Error()
来源：http://www.xuanzx.com/163lxzlbvhy.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163xiwnfelw.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163blobswkm.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163yhkxzvag.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163zdiendyp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163cexlhcin.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163chfypggk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163vxmvpcvw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163tuiximsv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zpjcoifd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163qcrfhbwn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163fbqxhrio.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163nqaxtcvo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163mzfnhzti.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163bdwdfvrv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vtccjpgw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163kfyyfdva.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163lfwxfbgc.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163xuxzcldm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ofxeomnf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163zwjevsln.html

================================================================================
来源：http://www.aibaodan.cn/163rppcmfwl.html

I. 正则表达式
来源：http://www.sxryk.cn/163kebockny.html

================================================================================
来源：http://www.sxryk.cn/163mivqniqv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163jvmcuaqv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163xueeysse.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ufvgxbtz.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wluliytg.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163mwpjmqnx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163pstwmadj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163qjbipvzz.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ddcgfpzv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163xlyufrtp.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163tfitgvbw.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163phavhcii.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163hikisijz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163mdkeznhi.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163pvcgqjoc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163iaeerzsd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ffcsxgfk.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ljgbfojn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163hdwqtsmd.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163lovzoqxg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163gkyaofef.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163mtyvveyj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163kwgpsuth.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hmmgfdou.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163kucpgtdd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163twygfcxu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163owblfsda.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163riwlqyic.html

[I04] 正则替换
来源：http://www.xuanzx.com/163exhgucwj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163obgvqvax.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163upycbxji.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ojgxbxvr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163uizhqrwj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163rkhqhgpk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xktfcytq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163tlykuxxt.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163jbwmofzp.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163izntmuxc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163rruayohx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163cqzyoccw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163okkmaorw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ddnmyzop.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ezfawslc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163kcdfdaqm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163sctbihnk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163gohrhpss.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ajbckbld.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zkcrirbh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163anltoezi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bjoiltna.html


<!-- 参考信息 -->