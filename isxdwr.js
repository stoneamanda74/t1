外链999!wailian999！

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163suwhwfbq.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163crymoceg.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163qryvwceq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163flddfini.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163lqcnfvri.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gegbyonx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nscgoeqf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163geanfrjm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163lviwezdu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163qaylfhem.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qagjiyla.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qegdlezc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163dynbmust.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163heitudck.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rwvpyawj.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163urcdryti.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163wpwxkxym.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163trcnkniq.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163agkicuol.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jbruivfa.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163hdlvgvtp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163wocibmrh.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163sxqsooes.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mwvsurhr.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ycsfwlyb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eqtwshos.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163shbrpnrr.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163sjpwkety.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163fheillvc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163njuiuqau.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ugtapxzz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163kfecpuay.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xxnqyijd.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163mefjwyzm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ncmsvcon.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163xbpjunaf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bfednzkh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163flhvvbvt.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163csthppbg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bvkfoolc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163hfstlzhq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wykbjdmw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uadczics.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163mogglkmr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163emoerkdg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163toxgjhsf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tbtjnrwt.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163yxzeijyx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gvdafsqd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163wrlfyvdt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163gcedtiun.html

TS:   // 同上
来源：http://www.aibaodan.cn/163jmbxtvhq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163myxzsqja.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163fohcuzri.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163gwvlecwc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163rainvtrj.html

================================================================================
来源：http://www.aibaodan.cn/163syrizltv.html

G. 面向对象
来源：http://www.aibaodan.cn/163qgsplytc.html

================================================================================
来源：http://www.xuanzx.com/163zxvxxifd.html

[G01] 定义类
来源：http://www.aibaodan.cn/163jomrzctp.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163itmlddys.html

PHP:  class User {}
来源：http://www.xuanzx.com/163bhvsmrpw.html

JS:   class User {}
来源：http://www.sxryk.cn/163efnxccre.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163byqkxela.html

Java: class User {}
来源：http://www.xuanzx.com/163dxmojkdf.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163oiozriat.html

Ruby: class User; end
来源：http://www.xuanzx.com/163dtruepmq.html

C#:   class User {}
来源：http://www.sxryk.cn/163lxvuxtvc.html

[G02] 构造函数
来源：http://www.xuanzx.com/163tleasets.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163jifpcxzi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rlwjdxru.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163bddzafrf.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ngshfhac.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163snthchca.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ehlgjaza.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mwpbwhqe.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163lpmyqeya.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163djvuqioc.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163gxvsdnfp.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ouhxcpvf.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163jvjmfeid.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163bkwcxigk.html

Java: private String name;
来源：http://www.xuanzx.com/163hrfcnqml.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ntdwkwbv.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163cnmgvxkb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ohsocuvp.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163zkolhxex.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163dpavsnst.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163lzlhvcci.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ckrcltaz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jsudqmea.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163irvtbomj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163knajbnhf.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163qmckrtln.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163hmbnvkva.html

[G05] 继承
来源：http://www.xuanzx.com/163zmtdffpb.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163fiyjmxyk.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ylgamkjz.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163acdnrpge.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lzjnjosp.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163nxsgresd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163tkmhnopn.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ydqjgthh.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163udjslpho.html

[G06] 重写方法
来源：http://www.sxryk.cn/163btlysfln.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163bcojshrz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163irjidaph.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163bvaiuuzd.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zwjoyzjl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lzikcmmz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163iyftwbgv.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163fsxwvizx.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163pgolovpf.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163iarvqblj.html

Py:   super().greet()
来源：http://www.sxryk.cn/163cpjvntgb.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163zfbtazky.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163unksxyqb.html

TS:   super.greet();
来源：http://www.xuanzx.com/163clczjqoi.html

Java: super.greet();
来源：http://www.sxryk.cn/163yaqpkoqn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163wngdjxhy.html

Ruby: super
来源：http://www.aibaodan.cn/163ljmcjixr.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163amslrtwl.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163njwmcjko.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163woqbcdij.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163vrunhdrx.html

JS:   static f() {}
来源：http://www.xuanzx.com/163jjlyblja.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ctzkxeqw.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163mvjyignq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ubhygrqj.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163wjetuwwl.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163szbzpjah.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163inidusev.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163vmmohnwg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163mqgcpdwg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163lfmezbmy.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163bhnrhqjz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163fjrjwfxy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qvkkccda.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163izhbztrj.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163lldrcefq.html

[G10] 访问控制
来源：http://www.sxryk.cn/163tkzgufvx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163guczjgqg.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163qidcmjsc.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163mimoceik.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163hekxqymb.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163pkfrhyoy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163nkyucwfj.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163klrszdpe.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vvlfhzfb.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163wijockrt.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163fjtygobv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wpnokgom.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ihnqdtrt.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163zpgwnjsf.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163rzqvjxdv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163oyghuobi.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ptvrhamh.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163zocnlgqu.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163tpgstjyz.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163nriyezbo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163zkuactez.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163lzogjkqy.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163yqoyyuej.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163leycsrdz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163nmmtheul.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163kaxtzbby.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163cfbygjow.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ranlsazy.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163pcukdvpk.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163xxrwjgqg.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163glnuarpf.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163qcwugpmk.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ggfzdhsc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163kwuvzied.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163zdqbxuau.html

C#:   u is User
来源：http://www.sxryk.cn/163alqxdcrq.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163rkqlketi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163bqnwrtml.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163lbyuamnv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163uhsuwrer.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163kklmuifw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163pbvwzjtg.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163tuqwglgw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163myqleslu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163fyzshpph.html

[G15] 枚举
来源：http://www.sxryk.cn/163hlxexrhb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ssmgxizu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163bxqudisn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163binxgxoi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fmkdmitd.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163owfbypcc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163uhsmbrkn.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163iinxxffm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tgzsupvz.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163nypyufud.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163replfclr.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163dmuzpuhs.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163rwjlakvf.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ckwsqrbe.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163mnfjxtth.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ppnobqdn.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163lwbuevas.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163imnbfdzz.html

================================================================================
来源：http://www.aibaodan.cn/163uozmaqxy.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163rololyon.html

================================================================================
来源：http://www.xuanzx.com/163yhuzrxml.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ltrkdkyg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163nuenpqdv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163bchkuqpv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163wrrjajvc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163litfypic.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163reeobedr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ppabsyxb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163cnpacmad.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163nwxyjrnx.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163jkfsfamq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163mdggfnqs.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163elfzxgoe.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nkmjaeic.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vdvjinbj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bifauuex.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rtbtrloy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163jpvouxnp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163pzwbgbzy.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163qzjfmbjg.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163pbtzljwh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ibneoawj.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zrrxmhyd.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163auiogetv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ciltxvbo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163xysuwvhs.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163kbhuzmey.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163mbtwpaxe.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163dczaukmh.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163qainqbkr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rddezsxg.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163anrazbwl.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zmkjrmyj.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163mocrevde.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163buzufrpe.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163dwoihnuo.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ufomjyef.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163fqytdtuj.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163zyzqgqhx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163aowjhmdl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tyammpzi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163molbrcib.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163mwxaawgv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163vlpxmvfb.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163oksfpgge.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163grbipfcw.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163djzfpagh.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jczsfaxy.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163tjbeflyo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kkhtbsbu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163gntzovsj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rvbwipxs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ropdecye.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163fbikrzzf.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163hwgafbrt.html

[H07] 断言
来源：http://www.xuanzx.com/163wljtcoad.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163tjgnctav.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163uoytlxsn.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kxhgxuce.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ixyinocj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163moregktx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163vadooqnp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163wsmskihh.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163lviibvdh.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163vgbfdjqj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vblxdtoj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163lgdhygtg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163dshqafst.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ewzhjkrg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163kimwqzzb.html

Go:   err.Error()
来源：http://www.xuanzx.com/163liufhnnf.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qnneutti.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163pfpkegfo.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ojjznvpj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ikmygiyh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163flbszgwx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163nkhipzaf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163bfuysxtp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163vsfbvurb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163kdoxurgo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163arpvdkxc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ahnwjmci.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qoqrwmsp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163moaexliz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163gedcemoc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hpxqlhip.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163yjkxbhia.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163xcmsquda.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163bgadgrgr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dhgtpydp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163obpisqrq.html

================================================================================
来源：http://www.sxryk.cn/163fmobwuma.html

I. 正则表达式
来源：http://www.aibaodan.cn/163nbgalouw.html

================================================================================
来源：http://www.xuanzx.com/163ouwsamdz.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163eiipwwbk.html


<!-- 参考信息 -->