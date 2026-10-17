外链999!wailian999！

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163vfobmzrh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163dckdwzmk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ovfwqotg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163dhweuwmv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163eudztdsq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163rjfjogvk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nbdiqwim.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qjwpzpff.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ionzcmxj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163askavdxk.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163lwzyxbwf.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zjypmyhl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163lohbamvr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ppzhgent.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163oaxcydkw.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163qwzbiili.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163saquqjyn.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163czliyphp.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163kokusdei.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jqwfwouv.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163utrcurug.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xsspdkko.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163lzzgbkra.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163zoucgjwm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163lbzyfuru.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163rargsncz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vdnfoeeh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163jlnjaxns.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zdeewwzg.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163usdkkuyy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163nnfldsem.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163xulhdhty.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163boammajp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163mdpjnmit.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163rwhvkbou.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mqgdqfvi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ndnhelwo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163urtbcpcq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dkvlsisp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163htfhqzpa.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163nymazmgs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zwbrtshd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163naiojcty.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163bmtducnz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ikiibxiw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163qdabqbae.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163tdivdmnq.html

TS:   // 同上
来源：http://www.xuanzx.com/163davrvmwb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163soehocfy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xucqbpwx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163kpuywrgf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163oxoowbjz.html

================================================================================
来源：http://www.sxryk.cn/163jhzrxnpf.html

G. 面向对象
来源：http://www.xuanzx.com/163lnswptmm.html

================================================================================
来源：http://www.sxryk.cn/163fctmxvde.html

[G01] 定义类
来源：http://www.sxryk.cn/163qmnxthty.html

Py:   class User: pass
来源：http://www.xuanzx.com/163blybulrp.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163dtlkyqjj.html

JS:   class User {}
来源：http://www.aibaodan.cn/163jrrhqpyw.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163fpzawafw.html

Java: class User {}
来源：http://www.xuanzx.com/163atblwqqi.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163zicsmzbe.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163bufusgqt.html

C#:   class User {}
来源：http://www.aibaodan.cn/163khusykfr.html

[G02] 构造函数
来源：http://www.xuanzx.com/163nrqtjvls.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163sixyuxul.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163cwhlglxg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163mhchtwkn.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163abhtrppo.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163olrmjykm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jhkvbsnx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163jhfimgws.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163jzsjvqhc.html

[G03] 实例属性
来源：http://www.xuanzx.com/163wdxkkzfl.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163brdemywl.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163xkkqnual.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163lepaybjd.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163arartfwq.html

Java: private String name;
来源：http://www.aibaodan.cn/163fknpyrgm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qbrmcrbv.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163wmlzznzh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163uohcurne.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163pkrnvktf.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jurhoiii.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163emmwyual.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163jqtnwkes.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163tifyvprs.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163uqwuqxja.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rtxrwnxt.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163dpggpjpf.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163korpulgt.html

[G05] 继承
来源：http://www.xuanzx.com/163igeuapbw.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163bveyxeax.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163mesqvdop.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ankdayrh.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nheeiujf.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163vwupymgb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163sfjocrao.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163izhcbnag.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ibcshpas.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163qaljxqxg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163wodqyoxs.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163npqhavaf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163bvgmrdpj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vwtpikaj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163weiidysn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163vqjplxfh.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163vkgmbwjt.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163cjkuyfah.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163yylbjwqm.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163hnllrcdj.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ijfjjzdu.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163reytmmcd.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163smiuldnl.html

Java: super.greet();
来源：http://www.aibaodan.cn/163twjoolfu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163lujzncvq.html

Ruby: super
来源：http://www.sxryk.cn/163ttvaapwp.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163wrxrwazp.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163zcidmegn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163nnlhzgfi.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163bkwttjpg.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163dazwjuyi.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163neajsfnv.html

Java: static void f() {}
来源：http://www.sxryk.cn/163oaksqphd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163pycodtsc.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163rtuvocxm.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163xebyruii.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163lhjrkdbj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qefrcfps.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ivugjjkk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163nidvazic.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163suslupha.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163wqjwewce.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163uaonfxyh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ynooqicp.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163eppbcedi.html

[G10] 访问控制
来源：http://www.xuanzx.com/163wlsayrer.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jkuusqbf.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zotmcybb.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163cgjkvvlg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163gxdfgxzl.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163vdksdsgq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163dltohoms.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163pwrvoxmr.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163tnkcisea.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163zplfagvx.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163yhmhlyak.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163bxtbbpzp.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163qsghxmxi.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163jrehhodz.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163izeyqbfj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ujhlgmup.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163hkdfodrm.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163wzqcghxd.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163pyrldnox.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163nswssbor.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163goswpyop.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163yftcihyd.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163mtdewvbg.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xthueghf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163xqdrtnzy.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163hqcrmsxr.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163jbvewqac.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163haslbciw.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163rrzzuhdy.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163nnbzxykq.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163bnsbqglv.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163asrbkxza.html

Java: u instanceof User
来源：http://www.sxryk.cn/163flbjlbmt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163wjzekyqp.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163gsykociv.html

C#:   u is User
来源：http://www.sxryk.cn/163joqsghkl.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mryhyytb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163lyeclyel.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163fyhkkaxm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163zatuddte.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163okeqihcn.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lcwjkqmh.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163tcdzutti.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163eudrugut.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ohlkkhuc.html

[G15] 枚举
来源：http://www.xuanzx.com/163nihujelb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bxfnmttd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zblggqsm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163binbcjnb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163odhssxfs.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ximmhwfp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163aperclku.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163tsacuypu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vgqyspvs.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163doefhwmy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163xduzlufb.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163gjaglfqk.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163dugsloew.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yotxabtv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ybhcewyl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163tsgnmqjo.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163nunlpmqa.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ockjyhnd.html

================================================================================
来源：http://www.sxryk.cn/163dkookhxp.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ffnwiavs.html

================================================================================
来源：http://www.xuanzx.com/163bxgkwuay.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163bgyalyje.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163rgyrrdin.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163zxpsfzpi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ukrxbjeu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163xadujgvg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ndjoxgrl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163aobstnsr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163kqdhbxls.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163gjxuqkhe.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163jsnbnaco.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163treurqeu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fweosifa.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jornqysa.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163exexwaqt.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qujmuvep.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163tpsucply.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zijtlixb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163npzouefa.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163foagtmgw.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163eysspozf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yambtler.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lnmmqqzf.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163okqwigwj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163qzzuuuim.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163wytmrfgl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163mwmhubtl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ogcyptdr.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163rhnwamsp.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163cadlbbre.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163qqdrwsmx.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163cwbqqnfe.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163trwgtseb.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163yplycxwp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163anniborm.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163wsmwuenc.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163rxdwxqxf.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163lvhnjuxq.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163vtzowenz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163jwhbbugd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163flpabzpn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163doihkbif.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163qgjuqacr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rlzfcoyc.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163kjjecrze.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163tllfoxte.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163rtpbccqb.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163kyggdomo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163fgxjvlbl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bkxriakj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bxccurol.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163uxqcadsu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163dgouhlwf.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163kynqlrhc.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163cpukeeql.html

[H07] 断言
来源：http://www.sxryk.cn/163vxnhjpzp.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163mhsktnzq.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163sgblmgly.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163whqlglwl.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vnzpqvum.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163vlqsqghn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163kbfxghxb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163grbfddia.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163bnokohdh.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163endewboe.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163eznaoqvm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163kmojcnta.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163tbciaatm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jaaefkzy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163zxslntxg.html

Go:   err.Error()
来源：http://www.sxryk.cn/163uhepyeqs.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hfovfyng.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163xphvrdca.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163yyjzmvmm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hbtdkllp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163miycfzrf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163nlnrkgep.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163gamvohex.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163jhggmttf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163fpesawxa.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163xrszkwas.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163udsvkvea.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ztzxyflg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163fboyuppj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163cdpfemsi.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163sdczyjxz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xvemzakg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163gftdeork.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163agzfubvv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163gjqhhbop.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163vuekhsvw.html

================================================================================
来源：http://www.aibaodan.cn/163kuohvuzd.html

I. 正则表达式
来源：http://www.xuanzx.com/163pthantna.html

================================================================================
来源：http://www.sxryk.cn/163tjmbsrmi.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163uzixwkth.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163uotvlnzu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163jupvwtzi.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wliuhtam.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163eumgtkwp.html


<!-- 参考信息 -->