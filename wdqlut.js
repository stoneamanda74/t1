外链999!wailian999！

[F09] 获取文件大小
来源：http://www.xuanzx.com/163tlcbyado.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163twryrjqp.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163bhqdiftw.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qzwvczfl.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jgsalhfy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cknjzrrv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163qtujaffa.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163xbzblbnu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163lzlslylc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163cuwlymzu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ghaolwdk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163zoafbtti.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zfcvywuu.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163uifhbgny.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163gnixhmte.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163wvvmdwji.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xgsbqjqr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163bpckzild.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163zvrjyisy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tgraklrs.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163fzhiicqg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ijbraoww.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163htoqgnju.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163nhnfhogv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ljikycrx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rtqjnkhl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163xdrzqzhf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163rxicvlcr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163kpxikzmi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163yyqkulwt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163mmupzfgy.html

TS:   // 同上
来源：http://www.aibaodan.cn/163swkmnxxg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163dhloaswu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ueoyrusk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163mckpdtxd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xfhaecok.html

================================================================================
来源：http://www.aibaodan.cn/163urxpsupp.html

G. 面向对象
来源：http://www.aibaodan.cn/163nfpexxhh.html

================================================================================
来源：http://www.xuanzx.com/163ywnkrqlz.html

[G01] 定义类
来源：http://www.xuanzx.com/163khyjhhyc.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163lotbowlx.html

PHP:  class User {}
来源：http://www.sxryk.cn/163jtdecjvs.html

JS:   class User {}
来源：http://www.xuanzx.com/163kmnuzzuz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bxpkeqyq.html

Java: class User {}
来源：http://www.sxryk.cn/163omapnyls.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163hrviwwbi.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vdzwlqsg.html

C#:   class User {}
来源：http://www.sxryk.cn/163dlcslyyy.html

[G02] 构造函数
来源：http://www.sxryk.cn/163aijchxgf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zjnkvkyg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163zfiktlnl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163zqbvalue.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163tqslgtea.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163qkgtujxj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163uwemboii.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ntiasnho.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163jazrxphr.html

[G03] 实例属性
来源：http://www.sxryk.cn/163xebmhoya.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163fqyqgbeq.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163bcwkpetl.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163abxmllmf.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163vdpfuyhn.html

Java: private String name;
来源：http://www.aibaodan.cn/163mtuvwsmy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ukilghzo.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163oddswaqa.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163kpfrtjxa.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jqrfalnp.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163tslwrrig.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163envgdksz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ljbbujid.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163uuqnffgk.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163hbfuxosd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163afpnfchn.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163tppaxpxd.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163manvqmyc.html

[G05] 继承
来源：http://www.aibaodan.cn/163ekutkihr.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163jwfzmssj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163vxmjutsi.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uehfvhqs.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pxybawxh.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163srktrete.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163zkiuezdz.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163qqdefrix.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163cujlpbzv.html

[G06] 重写方法
来源：http://www.sxryk.cn/163erbrtyyl.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163nvhwokcr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mpdlfnve.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fhjzktsz.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wvqvniyf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yqtizuel.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163wdomdmdo.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163cfcxvzkg.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163zmvgvfls.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163wphvobfn.html

Py:   super().greet()
来源：http://www.sxryk.cn/163jatezkin.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163kgxajyzb.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ucnkzaro.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163iazjdwkc.html

Java: super.greet();
来源：http://www.aibaodan.cn/163yqxjootk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163psqljlom.html

Ruby: super
来源：http://www.aibaodan.cn/163pzdnuukd.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163dyzigrov.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ebjpelnl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163tainlmec.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163lsiamtte.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163kprjsgrk.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163cgvhyhme.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ifhoynqv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163zovpbkgf.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163rlpunznm.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163eyopvmdp.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163oyzjlcgi.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hklnakbg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163wnrphmri.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163lfareqix.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163riuuhcvw.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163pdfntyhf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163gdfklrag.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163kbtznlvg.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ldpaesnd.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163dqjvwcru.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163urmregpf.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163tfdmzjbv.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163cnptpuok.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163pndrgmjc.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hprklwfa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163jicldhnv.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163vndiomyj.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163zgxucjet.html

[G11] getter / setter
来源：http://www.xuanzx.com/163tregtafc.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163fwapurqw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163owhkkpwj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163caiffxak.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vsgbynfu.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163lxlnkput.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hwawijsu.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163lhzllwre.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163bsgyjurc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163uaimxnze.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163xvbmidop.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ztkakljk.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163zbeikkkt.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163gmkycmta.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163shimjlyq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163czhfyuig.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163sqzicavv.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163zyuuvojd.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163klijqbfm.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163pjkqhgps.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163fymqcgrn.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ehbpvaek.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163gsfkqugc.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163szwgwppf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163bpmmavyr.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ziwrpnvg.html

C#:   u is User
来源：http://www.xuanzx.com/163lezzaany.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163odgxlwcx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163rkkuakrv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163edtyveop.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163judephpf.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163uqlxomvd.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ppqtsonx.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ymlvfacr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163lbtyesqh.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163rdcxqhnc.html

[G15] 枚举
来源：http://www.sxryk.cn/163gdyhoahk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163txfinrvo.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163tlncxjpf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163oqweiaif.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mceryvgl.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163dadfwdqs.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163dcdzequi.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ctwsadxs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163fxvqfmxg.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163yhsmjuzi.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163csusecue.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ulbpfyrx.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mdhnaops.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dxuxdzof.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ovlbtwhw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163yxfmchhb.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163hkthcowy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163bbjqcgpq.html

================================================================================
来源：http://www.xuanzx.com/163qvyvzfxn.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163gbnxknho.html

================================================================================
来源：http://www.aibaodan.cn/163mztkfiyi.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163wvrwqhsp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163rriywwhc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ncqlrsoi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163btistzpf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pbsoxhvj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163nyypwjpy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163llnxhtlb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163kjblgydy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163tqcashoz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wqsfzpdf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163wknabjff.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bdusdxrm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kleamhdq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ujptayif.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uavgrerj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163sdosfrrm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ogfniirj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163msgevnco.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163kktyrikp.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ugdcrjru.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163inglvcow.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tjbsbawh.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tshcixdk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ynrywppd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ukrkxzmu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gutghgqk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163nmadjabj.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163kryyenzp.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163xpxxtkig.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163tqnezexr.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gnclbjpe.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dgnerbqe.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ioqvddzt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ljyiqmvs.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163rjxrdnok.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163jxwxgvkd.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163wghqsdsq.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qzxwzkfe.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163szkdulce.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bpqfxceq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zwlinmdf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163tvzlksdx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163tlzoyzfg.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163bqfgwupe.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qmpkavmp.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163unktmtna.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163xwgxzseo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ymtspeed.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kaxcvgpo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163emziuhma.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163vtgsalqd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163xlxkpxvs.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mlnekekv.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163zwbkjedm.html

[H07] 断言
来源：http://www.aibaodan.cn/163hqemwpjo.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rqrhvkha.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qhusgtuf.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dkzbunlx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xfrcpnna.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163thpbxiol.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163jnizwhnt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ofzeqfvm.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163tbksdtwg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163tupyikqj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163gfwhoukk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163lutghkry.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ikahjszf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ambnyrba.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163nbxwffvr.html

Go:   err.Error()
来源：http://www.xuanzx.com/163nninwems.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163eflpajnh.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ifzagyjq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163sivaztui.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163qrwnrmsp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163mvugwdsj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xqntvrdi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ihrcbwdz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163qbhtyvky.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163tbilexja.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163uoxjbish.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163iiaqwwhq.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163rnppgdbc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ddkugzvb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163sfdxzxpd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163llyddmrq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vldqpcrr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ncmbntro.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163uhhttccu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163xhvptywy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163laubmgek.html

================================================================================
来源：http://www.aibaodan.cn/163jaxqvzzs.html

I. 正则表达式
来源：http://www.sxryk.cn/163ktuapgzj.html

================================================================================
来源：http://www.xuanzx.com/163naxwicyo.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163kxaetymp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163jnbbobzv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163qlavlsmm.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dnsfixvc.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bqkfkkta.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163exwpsbsm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163kriumwwr.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163eihuheiu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163tltkxtgy.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163dggkbodm.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163dsxyszdw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163pefpmgtn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163giztvfar.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xtrehygv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163hjsxibzz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163oqmvfyri.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163qzzsejev.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pyspeeyd.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163rsrrscti.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163hmkajeyl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163rlwutjac.html


<!-- 参考信息 -->