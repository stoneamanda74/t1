外链999!wailian999！

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163tizgsuhu.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163nhaudqms.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qmjvewre.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163vpoekpkp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163qjpoovyv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wwtuvrmf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wkjyrgkr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163jvkbdoiw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163sbqaykei.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163eysjrobd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163klutshli.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163exfkejhg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163gwhltssh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163aoqgqezp.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hagnhqbk.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qurmobkx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qwtkxamk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xddokewo.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163nyycucgw.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163cachjzzu.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163qtxeyzna.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163rwkdzqgo.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163cdglwdot.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ufzbfxxy.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163slcnocvf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fniprtzp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163tmuuelen.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zppkzvib.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163esfuoukg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163qmzyptxg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kpivjlro.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163swmnofbd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dkgpsiyj.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163kgstliol.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163sxpzskqf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163zsccoesa.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163iaderyrh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163senpwibf.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163zojvnvtr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gtpjgnki.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163uqkijdjm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lypjrdxt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bwaatorb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163zqnbvdjp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163rniyzeij.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zhpqnixb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163cpkvelpo.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163vdztuaap.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163wslmohza.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163toitsdya.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163tekqdrft.html

TS:   // 同上
来源：http://www.xuanzx.com/163yabfotpi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163arcqhsxi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163nejqqhqd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163tagmzbot.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163bjdrxvrc.html

================================================================================
来源：http://www.xuanzx.com/163odgrovbo.html

G. 面向对象
来源：http://www.aibaodan.cn/163envotkfj.html

================================================================================
来源：http://www.sxryk.cn/163uwzkeeii.html

[G01] 定义类
来源：http://www.sxryk.cn/163napqnnrl.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163pqyisbxm.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163wmuscgke.html

JS:   class User {}
来源：http://www.sxryk.cn/163texavtqs.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163errgbwhd.html

Java: class User {}
来源：http://www.sxryk.cn/163zjvsswha.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163chknrjcg.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163pubsgcah.html

C#:   class User {}
来源：http://www.aibaodan.cn/163zdqdlikg.html

[G02] 构造函数
来源：http://www.xuanzx.com/163icacmdrz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163gemuzrns.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ujtzkdcs.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163vukzulnw.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163danlcsyt.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163pskznvty.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jwnglavg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163fycywsng.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163rkibhzqq.html

[G03] 实例属性
来源：http://www.xuanzx.com/163qsyxereh.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jxtrlqsd.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163yylortcw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163qyctqgec.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163nyuiqlfd.html

Java: private String name;
来源：http://www.aibaodan.cn/163ndkqoehs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163dcuehgvo.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163cwqjxvuz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163xvxpunmx.html

[G04] 定义方法
来源：http://www.sxryk.cn/163momxhzcx.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163fhbdtfix.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163gfqhetpy.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163qfcwsnpx.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163jrdasefu.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163hlxubyir.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rowuzfgy.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jcggzybv.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163kikyfqqs.html

[G05] 继承
来源：http://www.aibaodan.cn/163yffrkmyh.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163guhiyopo.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ekkouwmy.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qxtylwax.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ngpbzhdz.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163pbfbakhc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qsardwsq.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163lsaimdmi.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163qajdwaxa.html

[G06] 重写方法
来源：http://www.sxryk.cn/163oalrqrfs.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163hxwevbdo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163rbizttsv.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163likzkylq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jtyxdsde.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163rgrwspxi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163fhclqcpm.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163cectwnhf.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163koyfeidh.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163gtocpzes.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163xwnmtqdg.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163abnllvjz.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163kzuwwkom.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ntlylbpv.html

Java: super.greet();
来源：http://www.sxryk.cn/163rfohqiyd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ueqsxtou.html

Ruby: super
来源：http://www.aibaodan.cn/163aarcphjw.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163tcunplmu.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163zwygukzo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163qbvblult.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ygbpzkwq.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zbylgmmd.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163efuqqovf.html

Java: static void f() {}
来源：http://www.xuanzx.com/163zukqvivw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163knrsmywm.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163fmuaneaa.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163bbtabvvl.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163gktscwsd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163kynxknji.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163xmpzmrop.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163touejptk.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163prpagpwd.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163zpvymjyb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163oyzsnjtr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163opspzshn.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163gcumtggw.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163jfmtwsle.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163gtuqrikg.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163owzkeifi.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fjyxbarz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163tdgxdnhf.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ablvzfsx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163beleryhd.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163zvlvphxo.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163nvfafblm.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163bujzsxgw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163zdzrpdov.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163logvwjpu.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163sueyikca.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163xcrcyjvj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163kumbfeus.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rhxstymw.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163npnlpkgg.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163tprrrapc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163lcfhhsvo.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163pxejbdsy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yvekvbti.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163awrgwezw.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163nemfgqqp.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163hrmdmmcm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163fjfllqek.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163zwaztznj.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163rggjxsft.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ygrnicqw.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163fygocqwn.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163kqppzmhn.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ybxllves.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163botvzmnf.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163wrzvkast.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pxdwysgc.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163vxjaumor.html

C#:   u is User
来源：http://www.aibaodan.cn/163aepgdgkd.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163dzimggkn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qezfthui.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163fdcmhlzm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163obtsiffk.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163gghdjcxn.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163qvjbtjcs.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163mzfiortr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163rgavwzrr.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163jgzhnwgn.html

[G15] 枚举
来源：http://www.xuanzx.com/163rhvnwrlf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163jpjdmapf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zgykurze.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163rfkgeavp.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163yeaxujdg.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ovsvoanl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163kbusxdwv.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163dqkkebul.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ghuydnne.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163zrusjost.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163cuhkxzis.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163rtqktjfd.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163azwqjcen.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163pwpswnat.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163vhgtowsr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163nagmegsf.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163kyfrmksi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ekdkiupt.html

================================================================================
来源：http://www.sxryk.cn/163wctgthzv.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163iwlbcmux.html

================================================================================
来源：http://www.sxryk.cn/163ilkdiciv.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163grvfqmlo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163laogsucc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ojxuilxi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163dnhruvpa.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wrfvfojf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163gzhkqjaw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163oaginuwd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163cdlmqjer.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163qmuqpxoq.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163narutxzs.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163limgdqrq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xtjahixe.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fnucsyrs.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rksmznal.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dknfoqho.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163mpdaynrq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163mgcscmsi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163jnzmlxfc.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163wikuiiox.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163wvbuifhd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ymqcvepe.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bwfsqymf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mplyitkn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rxannopp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qjndiqiv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163aqdpejad.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163refutams.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163vyvcfhyg.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163dswjebrt.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163npnyppop.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xfmcvjpt.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163kfuvooiu.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qqvehpjs.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163nqbuqobu.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163oevhlxhz.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ruliyhwu.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163jjxhcobm.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163lfggejtc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ayrvfzys.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163fietybyu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wkyupord.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163boxfzxtz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zwlinqnu.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163dzsnxzcf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163tsixhdsz.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xaxywtgh.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163paxjfgtq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163kfdmhhrq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163epfrdtti.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hiryfwkz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163irsgsgjo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163hrklfwhi.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163crsiygjh.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163iultqivq.html

[H07] 断言
来源：http://www.sxryk.cn/163qhqpdnsu.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163icdqpnkq.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163vlnlbhfo.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qjiwphmh.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163kkdzbpnz.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163seuximht.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163myfddami.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163itwwbkch.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ixxoxlsw.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163follztkr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163djiaxcjx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vtyyoeoc.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163vartcxim.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163karxxoix.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163kgqsqjzo.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163qasjxgjr.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163vchedjhb.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163yrnclxdl.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163oufykyxt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163amcvrybz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163vhmxjqwg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163kbtoafzf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163hamsjsqe.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163xldstyte.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163jgregnpo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163sdbcagnr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163icbbyodg.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163slkyzffo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zvlbqker.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163mmohxzhx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163uonhqvwy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hulyoshq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163trkgqwqg.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163siravzpl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163xadvxqoa.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163yufxysda.html

================================================================================
来源：http://www.aibaodan.cn/163ewobrtcv.html

I. 正则表达式
来源：http://www.sxryk.cn/163utjifajz.html

================================================================================
来源：http://www.aibaodan.cn/163xllfaazp.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163mlcnozay.html


<!-- 参考信息 -->