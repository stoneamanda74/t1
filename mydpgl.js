外链999!wailian999！

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163olytjqhn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163qrariuay.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163nofelgho.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163uwpghffi.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163jdrwwvmq.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ehpvptbo.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163zldyykqd.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wogxbxeu.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ewcaxhjx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tpobmqxc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163trhsqlyi.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163wqpyephz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163bbjxkpmj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163bxobsqqa.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ncyznius.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163oqehlbut.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zfkbzczn.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ftocrtsa.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163zmamorwf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163mtmezutm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hhzurjoz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163dnyazcqw.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163kfyrmuxe.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163orvqfemb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163thzuennb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163whxvluie.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fckeuafn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163woiugutk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163yxjlqohk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zwrhwfxf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163avlrtmoq.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xbafbbif.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163vdfvkgps.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163zehmxubn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ekwixxkt.html

TS:   // 同上
来源：http://www.sxryk.cn/163ueqbzunb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ykmkjvkz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163vzclfexn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ezoxncas.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163klriuufe.html

================================================================================
来源：http://www.xuanzx.com/163khqyzeet.html

G. 面向对象
来源：http://www.sxryk.cn/163qvdteinj.html

================================================================================
来源：http://www.xuanzx.com/163vocliwns.html

[G01] 定义类
来源：http://www.sxryk.cn/163rzuxuxsa.html

Py:   class User: pass
来源：http://www.xuanzx.com/163rcgzzanj.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ipifzmkl.html

JS:   class User {}
来源：http://www.sxryk.cn/163zaowlwwx.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ouzvjgmw.html

Java: class User {}
来源：http://www.aibaodan.cn/163iishqjdy.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163aphskhgq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ygwkgsvb.html

C#:   class User {}
来源：http://www.xuanzx.com/163xphvnlrw.html

[G02] 构造函数
来源：http://www.xuanzx.com/163yvhsoqhy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163govhvbxj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rhzmgcws.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163slzjurqu.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163gzocsrbq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163loxfstfo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163lmksvsua.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163lpizohwk.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qfllwalw.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163kjesvlvz.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163qtkoqtyf.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hzzyjbvm.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vjiekkyw.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163dffovuux.html

Java: private String name;
来源：http://www.xuanzx.com/163unbaypyh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ncqcjkzn.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163pqfitxmp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tpptkfux.html

[G04] 定义方法
来源：http://www.xuanzx.com/163lejkmqbf.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163hcyndtth.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ddguvgzq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163goskvnwa.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163vcljykou.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163eakdncdd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163puxozmld.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gkqbqawm.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163gxersbzk.html

[G05] 继承
来源：http://www.sxryk.cn/163cwltzvmp.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ktgqftdp.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163cqxgxede.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163akuupprp.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163fciqmwgm.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wuzeotpb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163hmqndttn.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163oyrigjap.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163gdptevom.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163uwdpuowe.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ziqscqkz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pjmtzmct.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163byyqyyfy.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ckctwvcm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pmnvcqoh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163enkavywo.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163tjomenvk.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dyehullm.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163cymvcowp.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163hhsumiek.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163xtxcklkj.html

JS:   super.greet();
来源：http://www.sxryk.cn/163raaqcgqw.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ezqjtelf.html

Java: super.greet();
来源：http://www.xuanzx.com/163yibiuvlu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163fjgfwmwp.html

Ruby: super
来源：http://www.xuanzx.com/163hyyelcwr.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lsgsuwor.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163nbfqmitl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ozbdafpg.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163kogoivxm.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163lqvucuhj.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163olnnfetv.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163rcslytxw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163lcyqkhxw.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wdwcozna.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qrgdbmnd.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163xrgmcyiu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163apwjokol.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163aixsolbn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163dgutsshy.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163rqcqxpll.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163iyhebdbv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163hxruswgd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163xoumrfnq.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163iogdmkmw.html

[G10] 访问控制
来源：http://www.xuanzx.com/163mljbwsjz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163eyysqvqf.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163lfvhdygg.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xnrdqqwt.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163nutnoywh.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ezrhlxjz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ehiknaka.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163tdcfoesx.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163popkhlvp.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163rqhmavjq.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163nenwdban.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163tzxjjmdk.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163uskkdoxd.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163mnatcvkj.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163nghgiaee.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ffiyhwyj.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163trethegi.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163unttepht.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163cbpfpenu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163kxaikgvw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qlapmvxo.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163qggocfok.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163dobbvqhk.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163nerxsera.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163afphkhvz.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163quyhpaqq.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163poewsziw.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163lsnxwauj.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ajjmxhmy.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163feaxxjwn.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163rlomjsic.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163xhcngtah.html

Java: u instanceof User
来源：http://www.sxryk.cn/163xtjtskuz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163yymhtoxr.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163edyeinkl.html

C#:   u is User
来源：http://www.xuanzx.com/163dmdjtwdd.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163gsnzppmh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163gakahhii.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163tnymnkae.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163nwszbwxa.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163njdzdfgd.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163xbwdjnwq.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163wtokmfkm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163fospgobz.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ejtzjzow.html

[G15] 枚举
来源：http://www.sxryk.cn/163vlztvizh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163chtpxykf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ynmqqapw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163uhtymezy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163zjpqrqtd.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163lndklbyb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163dqneecmm.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163xkajzphm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163neaoithv.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163fpskenrl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163sdnczyxh.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163wwekvudq.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gzseczfb.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tnadfzwg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163pgfqyjpa.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163vqkheqoc.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163hykptats.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163tjqrtvsl.html

================================================================================
来源：http://www.aibaodan.cn/163hqbmrbgy.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163gmhrlaqq.html

================================================================================
来源：http://www.aibaodan.cn/163okmtygzo.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163beyzritj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163yharnlsc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163qdtpoxnh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fwuwfcio.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pzknzuyn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163sgospyef.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163mwupuhuj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wbglxrsd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163shnptdnl.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xlkfwsyu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163rjalivxr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ojhgglej.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mxjqkmtc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cbqqxdwv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bbsmlkdh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163gdfclfcq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ssbhsawp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163etmmtsqy.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163etwcqjpr.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163aibrvdwh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gajmxfzb.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163aklbxeyi.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qeixthly.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163uoesxhtg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163owbjfpov.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163qvakukkv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163sugkvycg.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ylsanxkh.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163lldmhhcx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163queffbwl.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xebswqqd.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tuudnmjh.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163yagyfjab.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163cldvlynl.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163sjsrtwyv.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163wrmwotco.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163hlfecsxa.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163likwixmb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163senohuuf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xavnfdhb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gqgfgprl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163gojjcvcr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163hrugkqgf.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163domwgfze.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163yjlnekez.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xqgsyqoh.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163skkbompo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ytqdcefe.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hbvofuih.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163dygscbjj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163epeqbdrb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163rhiwwoqe.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ikjyaaam.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163tvehibbe.html

[H07] 断言
来源：http://www.aibaodan.cn/163gpdggugy.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163jasxdaii.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163gqjldrsu.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163faknmifc.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163bukqorib.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163mdreyvxj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rhwinqdi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163jyjsdfct.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163zgtcunws.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163wnamoifi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163rmlcnrjo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163uihwjsiy.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163pzgthlla.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163msbspzbm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163uaivjihq.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ognjqfxd.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163xwwfyowa.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163jxonxlgd.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163mpbxuwkf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163qjvliqqv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163epfbgmoq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163mmozrhmm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ykxllfol.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163hrhdwzpj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ylynjlyv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163uemxmryy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163tjpkaqha.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163voyfojey.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163dghzxgzr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163czfmiqgf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163exvfcphp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kqwqxfoh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163yorzugok.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163mnheeqao.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mfqxdaqe.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163rswravgs.html

================================================================================
来源：http://www.aibaodan.cn/163cumqukae.html

I. 正则表达式
来源：http://www.xuanzx.com/163xfadfapa.html

================================================================================
来源：http://www.xuanzx.com/163ksmdyvwe.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163tecvdmsp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163tpmzaasl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163wmqpmctd.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163oityhesm.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fkyssypg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163kssgpnri.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163lahwomkp.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163eedidkme.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163qvzgerpz.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163kannabnw.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ixwkojub.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163gohhdlyt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163jljenjru.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163evfwjrnx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163rbtkmqzu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163crngtkhn.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ekqvgnld.html


<!-- 参考信息 -->