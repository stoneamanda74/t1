外链999!wailian999！

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163swkzuyug.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kreqnakx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rajvpxca.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qdxzxilp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163iwdlkajj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163clfabxhp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ficdbfuj.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163rwotmjhq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163eatoqlfy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163miekyjwn.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fylakyhl.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jzfdmprr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rpjkczve.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163wmijkepi.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163bdtxbfab.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163japreulk.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zphqpigk.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163zxeamzop.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163oyhbhbwl.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mzonkrvk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163zznviswo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eqkfaxsp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163fjdrpqmi.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163dtnhfrae.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163raumeatr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163oizlsrwr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163phgbflpj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163grwdqrfx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163iptuccxo.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163zcggiuzp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163rpozwxwu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rcbcbaxn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lcjgznya.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163zjxqvymp.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163pnshstuw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163oeywyqgg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163qrlhlobj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mhhudxqq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mmqzbfsp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zglsszya.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163yszabkuv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kndoygat.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163dmdvosit.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163uwedbmdf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zxogmrnj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163snzbbpop.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163keqbgkox.html

TS:   // 同上
来源：http://www.sxryk.cn/163zvpnaylv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ahenozep.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163yzvtugao.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163qlcnjlrh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ugnksoxq.html

================================================================================
来源：http://www.xuanzx.com/163vaaghklh.html

G. 面向对象
来源：http://www.xuanzx.com/163kzxyepxm.html

================================================================================
来源：http://www.sxryk.cn/163ddkvpqai.html

[G01] 定义类
来源：http://www.sxryk.cn/163actqahvf.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163rddmnlwl.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163zyjubglx.html

JS:   class User {}
来源：http://www.xuanzx.com/163zbswhmaj.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163uhxdqyhx.html

Java: class User {}
来源：http://www.sxryk.cn/163wpdowpwv.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163zaqkjstg.html

Ruby: class User; end
来源：http://www.sxryk.cn/163taacfdyl.html

C#:   class User {}
来源：http://www.sxryk.cn/163nqmmyqbi.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163amxnugwt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163dormrwts.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163uqqtfcbf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163wiseflys.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163jcdhlxmv.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zpfqgalf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163apnvdsqo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163fwowuwmd.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163lvpgeymu.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163xilkufbr.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163jnknbwec.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163luycnbcu.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163bezjcqbj.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163sljmkjpb.html

Java: private String name;
来源：http://www.sxryk.cn/163brrighyc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163llmoivpx.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ifnresiv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163lsspticg.html

[G04] 定义方法
来源：http://www.sxryk.cn/163nsvzdwft.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163pnifnbkz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ysmnszuw.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163torbtvhq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163vjxklzwa.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163whlejfmp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163hilydicc.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163niveetod.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163zvjdeizv.html

[G05] 继承
来源：http://www.aibaodan.cn/163zgfpjoll.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wabcewsz.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163siyyilke.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163czvrcuvj.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163oxwxcjip.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163sdvefjwi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163vncwsiye.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163rdqgybud.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ufzpzgvz.html

[G06] 重写方法
来源：http://www.xuanzx.com/163czzvpwlf.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163rdrxzffc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wcmrdguo.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163xareezte.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gkmgvscr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163mtdviwqf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163kbhghpwz.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163xsrdhsua.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163slekjscq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163tscuggme.html

Py:   super().greet()
来源：http://www.xuanzx.com/163bglqdick.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ybpfemjd.html

JS:   super.greet();
来源：http://www.sxryk.cn/163yneusntz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163mevoswbk.html

Java: super.greet();
来源：http://www.xuanzx.com/163jkrbgkbq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ctdnvxyv.html

Ruby: super
来源：http://www.aibaodan.cn/163pehrwhvs.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fafvzlel.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163kycgadue.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163inwfnmhu.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163surbmudu.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163twsisoum.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163cbqnrepi.html

Java: static void f() {}
来源：http://www.xuanzx.com/163zoirqavr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163uvgmhupi.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163qgbocxar.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163onsqqxue.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rgfswsnx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163tlvluiem.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ufgofasl.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163fgmntuye.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163aublbdvi.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ioiznwgn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163wunrmqvd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ngtexdvz.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kajbbabu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lyzexbnx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163axaddkbm.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163mqtmpsrd.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163eelaexus.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163yyivbpbh.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163jeaqhadv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163undmqtqq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163llgjmcfe.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163vdfpcbds.html

[G11] getter / setter
来源：http://www.sxryk.cn/163splsyikx.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ywkouosr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163fjfsvuwa.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163kzmccily.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163nvmacgai.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163lhdppshd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163zajbfcur.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163hyygsqqf.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163eejoocub.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163tigbalgj.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ttyvrrnx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163snovcjev.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qazimvll.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163bzjpolsn.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ngiovktz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163yxrzcrzm.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ljmlatgp.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163lrljbdrf.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163sdurdzbi.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ganfehai.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163youybutp.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ajwrjrfs.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163iymypoql.html

Java: u instanceof User
来源：http://www.sxryk.cn/163zfwrpwhd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ercbxjko.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163dwbklqes.html

C#:   u is User
来源：http://www.sxryk.cn/163uleokkgy.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163apbnwlvk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163phyqscrs.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163xtzelvdg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qynmeyhh.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163qrrcwjlh.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163wkpkyxkd.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163qplvymhh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163gwuxjfqt.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ijnfzdcf.html

[G15] 枚举
来源：http://www.aibaodan.cn/163pntreyqx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163krpgcwpm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163tjilicqd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163jrbnhdnc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cisbkkso.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ytmgggag.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163hoqaedax.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163jjydikhd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163agrqgham.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163dgabuyme.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163snnniihe.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163xtqaxici.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mokdftxa.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fvmyhxyl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163xsttkyas.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ttfaqene.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163qqaebplb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163eibdydwn.html

================================================================================
来源：http://www.sxryk.cn/163giawrnhl.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163mpvzfppy.html

================================================================================
来源：http://www.aibaodan.cn/163ziosfftv.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163uewgrcgq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163moupqfvu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ngxnpluq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163uzaoqtzq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163vjjediqv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163zvhahzll.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163egyxlrzw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zkemrtfw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163rgkhgqrg.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xryhsmoz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163nkztssic.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163byrlpnja.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zoikqtzz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dhekpamm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oswmdqti.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163wpzfhnzf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yjyixpbt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163qbormhzh.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163xayjbwso.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163fcyoimqe.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wzblqdqj.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vhdxxidk.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163exfvbjka.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163esxtnrzp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gqtlhtnc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163rnuvymqi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163yjddaojm.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lthsplik.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163cuxnnewg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163wfnwroao.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163neiqdxsm.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bvnndzep.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163fsmkhjaj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163subfsfpu.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163lbvebkss.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163nwdgzbzg.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163fgfuqmsp.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163zzmfwftx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xhgxuiyg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kahrujrx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163eofbcyzy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163xmekpsph.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ukpqwjxz.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163xmepbihy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163fmlbqryd.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163uqbvmxll.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163pbhjchaf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163xcecsuef.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hhysbtsj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vhizijfr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163nyptesdm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163fuaeiioz.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163usdxwyrp.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163caawwhvw.html

[H07] 断言
来源：http://www.aibaodan.cn/163qvjmddjc.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163noipttiv.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163worjanvf.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ykimzcii.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wupnqhsv.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163hvsyafvl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163kyagullp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163opqhxqka.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163zxhnmbwv.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163jylwtisa.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163lhslsxrp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ahhnxuzm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163jooeklib.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163mcdvkttv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163xltghxsg.html

Go:   err.Error()
来源：http://www.xuanzx.com/163gpzbvxjb.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163tnpsqhlr.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163etnfrifh.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ilhoefyr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163wunkjrdr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ncpbzbze.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163qtomdtju.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163cnymadpz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163rqmzuaew.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163btjzcdgu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163lbvgjsew.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163cqtpques.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163rqudlino.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ngnzwosh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163obxjfzqq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163awcxpkud.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gjsuqhyf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163vbjlwvpr.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163qaxqbugk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163stmvsfvd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163uuyrmoou.html

================================================================================
来源：http://www.xuanzx.com/163wvyqhoot.html

I. 正则表达式
来源：http://www.aibaodan.cn/163dnvhhgpq.html

================================================================================
来源：http://www.sxryk.cn/163fpumeqok.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163acmnpxvx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163zhyvlgbp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ahlqnkxe.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163crassbxd.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xxlaajcj.html


<!-- 参考信息 -->