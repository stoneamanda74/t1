外链999!wailian999！

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163uyverpjb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163efkkjvem.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vnvorwta.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163oddungqf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163bbnvsxki.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ptqrmphw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163kofyvtvi.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163bjcucuqy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qbkbmcfm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163btvtljsk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163adihtwmh.html

TS:   // 同上
来源：http://www.xuanzx.com/163idtaiiuf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163rnjxcvsv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163jyabubcb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163mgyvtsbe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163znuagekr.html

================================================================================
来源：http://www.aibaodan.cn/163mhyldlyw.html

G. 面向对象
来源：http://www.aibaodan.cn/163wnzhmvgg.html

================================================================================
来源：http://www.xuanzx.com/163ggrandew.html

[G01] 定义类
来源：http://www.sxryk.cn/163vphzahus.html

Py:   class User: pass
来源：http://www.sxryk.cn/163qhbmijda.html

PHP:  class User {}
来源：http://www.xuanzx.com/163zoewfuhq.html

JS:   class User {}
来源：http://www.xuanzx.com/163smswkmnm.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bodrzgrm.html

Java: class User {}
来源：http://www.xuanzx.com/163qxdvkdgz.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163mlavgdfp.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ohsxhmhk.html

C#:   class User {}
来源：http://www.aibaodan.cn/163phlyhjtp.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163lbxnuegi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163rcfdokwu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ofmmmtes.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xuwwkdxw.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163krogwgye.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163rzmzbgfu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163foffohtd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xmszosgx.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163espovude.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ghdbgwkf.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163rkfpxoro.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163uenhapfq.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163mekgmmic.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163jeusklvg.html

Java: private String name;
来源：http://www.xuanzx.com/163nwkstrjs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163nrhyggdr.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163hkrpjseg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ujmkxcbs.html

[G04] 定义方法
来源：http://www.sxryk.cn/163isihbhzi.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163dkzzwmrd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163hxcjiopy.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163pwqaxmcr.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wunwzjbq.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ajxxlrse.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ifdxqqtl.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qmoeqdhw.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163kmrxlwft.html

[G05] 继承
来源：http://www.sxryk.cn/163jyxtdnfl.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ifskecqf.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163vkfjepbo.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mpjhahqi.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ofycbdhl.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163skwprqlm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163kdiaicnp.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163awdtlpiw.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163bqldfwan.html

[G06] 重写方法
来源：http://www.sxryk.cn/163hnxxfvlb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163vjjkynst.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lycqxsvf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163zdrfxxld.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qiaejjvr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163adeyignc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zixojoux.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163dxnblwyx.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163dyjsclfa.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163qtgsrcau.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qebrcjvw.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163wqphdyno.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xxgirbnf.html

TS:   super.greet();
来源：http://www.sxryk.cn/163phnldihf.html

Java: super.greet();
来源：http://www.xuanzx.com/163yomwzgpe.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dvxfqdag.html

Ruby: super
来源：http://www.aibaodan.cn/163olnnglwg.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hfvojjgo.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163yhhigrra.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163kknphaiz.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163toheqczu.html

JS:   static f() {}
来源：http://www.xuanzx.com/163fyjmbxmj.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163wienphjo.html

Java: static void f() {}
来源：http://www.sxryk.cn/163eybtipkr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163lsyiifqi.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wxjmalut.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163knhvatwn.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163nrofiean.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163moyobdri.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163dbcddauz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163bfgwtdxc.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163qkpocsss.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163spjjvdij.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163kazyhxds.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163cwbertib.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ngrjyoqp.html

[G10] 访问控制
来源：http://www.sxryk.cn/163achvjxwa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163qggzgikk.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fdkhkzrc.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163jfxnenhw.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163tlcbyzbc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ttjjylpn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163lxveootj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163nvuupbsw.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163vpvgumwy.html

[G11] getter / setter
来源：http://www.xuanzx.com/163zmwipgni.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163tbyxushl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hwrvthbj.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163fpyglfru.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163sakjyvyk.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163cjbpdgzc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163gjvpmrmh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163cxaykydr.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163garzbppo.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163nlsxrgeb.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lcvfrskm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163uhsohwbt.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163frnqyqdj.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163kxjjmwvh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jowdenpl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ucbkevlc.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163xrxuuzmy.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163diswjwsw.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163hmustyre.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ghrecxdu.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163fviohuex.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ytivphae.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163luphmllg.html

Java: u instanceof User
来源：http://www.sxryk.cn/163fesroofj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163lvwcxqud.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163vvzaygeu.html

C#:   u is User
来源：http://www.aibaodan.cn/163ppcduqot.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ovpznydr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163aryzppst.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nvksauxw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163xotbfcqv.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163sgoywbkt.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163qlprcgxz.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163acdgaaaq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163xhsolvzh.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dgddtpcs.html

[G15] 枚举
来源：http://www.aibaodan.cn/163dpwzleag.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ytcbwuxd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163lspiywst.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163olnitfed.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163avmmvvjs.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163rdtttbev.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163abxjzxff.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163uhmyrgxo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163acfquxkh.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163fizxhqjm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163tiubxbsj.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163qszcnuur.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ftxrhrli.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zmykzhnf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xcmtrdvy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163lbhhtbvf.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163lxokblgy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163lyuauegj.html

================================================================================
来源：http://www.xuanzx.com/163mupswkul.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163eogsmzbz.html

================================================================================
来源：http://www.sxryk.cn/163xkymagaa.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163gnspbfyi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163fxhpwkvz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163htkatiqw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163yxlxezmg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163haflpbsw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163qotkhkjw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163nnmhsmkk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tbrvezlg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163rdcoyuov.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163kqjtbich.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163pwdnkifw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fdxorrqs.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bdarpueh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hfxanrmo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dvfctgrq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163jcxpjgmz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ertronmg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163axsufvxj.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ympjlexm.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163dzahnxoz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ktkqtter.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jyfwkhxd.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zmvkyjet.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163zfjgaedz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ksfdtvsk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163annyhptm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163cbyftjxl.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163tqwufvan.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163rwneqxvu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163igctmery.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pjwtrijd.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rptzzldl.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bvrxgedp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163fskdtsak.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163oqowzatd.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163wmxfjvqv.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163diengpmc.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163eqdnnwis.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163psaahjzt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163yzfhdkxw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kebjwwpq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163zjikadlc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163vbpngzpe.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163hehpxdeu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163qllonqhj.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163hnxcagub.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163qxarfpnp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163yhzxaauh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vumfgbke.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mqhahegm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163njelpbdm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163pjgqcegt.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163pbljksmd.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163nbqdhcga.html

[H07] 断言
来源：http://www.sxryk.cn/163vcvwewss.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163xjasemgk.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163gntupzgi.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ejigmskk.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163jryhnqvy.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163xxadmkqy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163buxhfqqg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163fbibdlsi.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163vdlkrkrp.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ltpklogf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163jmtscxah.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163rppluqwr.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163fxbfprzc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163fycpefde.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163orvwygoo.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163oumflcbo.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163kgqbarem.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163glfjzsjn.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163yhovzxew.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ubsmzhrp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ztnbdctd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163kzzgcbdr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163emsiodbs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163hlljujsl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163qcryorbk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163fjyzfvbr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163pspqswcj.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163cfqwddtx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163uqyxnwlk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163izdzdlxu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qdymvtso.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dtunkavy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163praoyvex.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163tmatyqyr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163navvfpqy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163rnqkvzaj.html

================================================================================
来源：http://www.sxryk.cn/163sihksewa.html

I. 正则表达式
来源：http://www.sxryk.cn/163gqwfpoia.html

================================================================================
来源：http://www.aibaodan.cn/163akttaesb.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163tbpoades.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163cvlslxxc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ejazibvs.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163aextlsgb.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ryjaznqy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zhmiygvi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rrybsubn.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163tlqfpxax.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163cjprmghe.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163gvbpdjub.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xxtklzta.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ceydevow.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163cxhdqjnu.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163dyioxpen.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163esnouyar.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ssieessw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163xlfjavyi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163dodoryhr.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163nypzqmtn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163gpfrvoyr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163gbxgseat.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163wifneuso.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163rifcanui.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163xvdwvaua.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163wvevpczf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163hwazadei.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ypqqgmhb.html

[I04] 正则替换
来源：http://www.sxryk.cn/163pmahfosx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163xgjivmbj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163rkkdznyr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wcjmuzma.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qztvhomt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163sifpdtpa.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163eppbdpcr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163kcpnoabv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163dtficqpp.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163tajtvvmh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163vwovxcxs.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163sfidghqy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bdrmvjxt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zheourzl.html


<!-- 参考信息 -->