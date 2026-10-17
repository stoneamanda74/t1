外链999!wailian999！

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wdcgymba.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163iuuhfwiy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oxojklcc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163mvyjposa.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163shnzkngi.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163rdehhcxw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163izyixoym.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163zwwsnpyr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163hjazguso.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163duiivmmp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kfdggsxm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163rxruiiaf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163riaredxe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163peenixnv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163xyhhgkms.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163einmsuqr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163tqcomnpt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163bodmujuo.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tbgaerzu.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dewixihc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163aztlaoll.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163mlrevgse.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163nqpqubqc.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163sibwcjrr.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163kvjhacbp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163jhncoppx.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163cyzsnrom.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hujbxprh.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163oozimtzf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jucynvyp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163xahtrcjr.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163birgrowo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163lzmqjnkd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163nlaydkru.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sgauvrmk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ragwrfio.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pgjrvvoq.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ljepxjtp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ladcndxi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163etgpghxh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sttcmafd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163lvyynqey.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163kywyavmu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cwolueps.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163lkwwzchj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163aeqxblmq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nfbgrrlq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163zttdyfdv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163jbaoqjqc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uwekwdqp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163swbzuthj.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163atmmfwdp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163reavgfaj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163xzsycepz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163lbnlaahe.html

TS:   // 同上
来源：http://www.sxryk.cn/163czpgfkwx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163dkhvblvf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ahkhbsec.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163mmltdymu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qjvbqyyq.html

================================================================================
来源：http://www.aibaodan.cn/163fsddwewq.html

G. 面向对象
来源：http://www.sxryk.cn/163npcjmtub.html

================================================================================
来源：http://www.sxryk.cn/163exfeiuxm.html

[G01] 定义类
来源：http://www.sxryk.cn/163uykhrpqi.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163mdsspyto.html

PHP:  class User {}
来源：http://www.xuanzx.com/163zqndycsd.html

JS:   class User {}
来源：http://www.aibaodan.cn/163iofmlwbs.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163wdxmansg.html

Java: class User {}
来源：http://www.sxryk.cn/163zislblcj.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163koekfarh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163bubzcltn.html

C#:   class User {}
来源：http://www.aibaodan.cn/163xxzupwsd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163akbineop.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qguhtqoq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163uwjgyznm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163bfqmmxzt.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163gtqkzxmo.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163mipkafhc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163rxymaxwd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163cvjbfgsp.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163egqpyzzn.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163hbqzeytz.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163gpuevqnf.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163xibkbalu.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163iawpjzxs.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163cqmwkekn.html

Java: private String name;
来源：http://www.xuanzx.com/163bkelkvvn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163oosvxsau.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163qnfyjguf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163zblcgket.html

[G04] 定义方法
来源：http://www.xuanzx.com/163vfhzdmve.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163icrsaltk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163lazejils.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163itwlccdg.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163atisnqca.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ehvzdtnp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163hkiujnuo.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163bxxsauir.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ttveyous.html

[G05] 继承
来源：http://www.aibaodan.cn/163feyarjph.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163iadjzrkw.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163kjznaqad.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163kpbohjjb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163tzxpztvn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pyrjeypg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163uwfavegp.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163lyzsmfde.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vobgxram.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163icheenjr.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163usckrnkc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163cycnlfcq.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163xnzltcpe.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fpbcntjc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163iswkwnyh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ozivgmbw.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163jfopspfp.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163cngiziij.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163novtrdia.html

Py:   super().greet()
来源：http://www.xuanzx.com/163exxticgu.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163amptbfvd.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hqoxmotl.html

TS:   super.greet();
来源：http://www.xuanzx.com/163gafthczf.html

Java: super.greet();
来源：http://www.xuanzx.com/163hszhwqud.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163luvkvsnj.html

Ruby: super
来源：http://www.xuanzx.com/163dizjoxkd.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163upbgjaiv.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163qidsoyzw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163rdptozbo.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163gvkpvlnn.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163umalxrrv.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163iariucpa.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163uhbqdcjp.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163dfliaglc.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ttwwrilq.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163alzesqjr.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163dkbvzkir.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163rwbdjeos.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163kobxtvqe.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163izkhhzzw.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163hxkjihjn.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163zfdebapp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163tofsscvs.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163lwuxxflp.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vistxmrn.html

[G10] 访问控制
来源：http://www.xuanzx.com/163rlfybduo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vsahxcnt.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163iaraxlyy.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163uguvmnbc.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163qbgguusr.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rtljzvfl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hpycnqzo.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jiuctayk.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163mqbhjsim.html

[G11] getter / setter
来源：http://www.xuanzx.com/163xedloloo.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163bmtxtndx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sedzqmsp.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163yjlztvdp.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163cxscahcx.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163hlhaxpcp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163muhjdpze.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163glcuzbqy.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163gpetvmgs.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mvizlrkq.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163jrpeapsr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qtggmfqx.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163mzfdfqkr.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163dquetamt.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163qvllcaol.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163mexpbkdk.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163kgwlypxo.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ibewmxpw.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163vygwzxjw.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163acvgywzn.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ffffcnil.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163nnbqymno.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163iqiclqoh.html

Java: u instanceof User
来源：http://www.sxryk.cn/163fwyfmrgx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ucargjfm.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163kluyjhtr.html

C#:   u is User
来源：http://www.sxryk.cn/163yzszajae.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163zmxxjons.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163lgteoonc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163vukdhlus.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163xhodfvlf.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ffqylogb.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163dzsafiap.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163wzcvtoyw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163hxeggnhx.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gqiaylwv.html

[G15] 枚举
来源：http://www.xuanzx.com/163tqxzftys.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163uwcfehyp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163thyejjlk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163bxyygatx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163upiaktbb.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163xfhlectl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163xodrgftl.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163rublmmsp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mtqldtuv.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163fmpsezxa.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163mfruulsc.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163zsudthav.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gedzqqva.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163oxszcrln.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163wmnaciie.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163sdqrrild.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163phqocmpo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163mxmsjatm.html

================================================================================
来源：http://www.xuanzx.com/163cqdlrnoh.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nbzmyere.html

================================================================================
来源：http://www.xuanzx.com/163nrxcjhmg.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163omihmrii.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163qufxwkxk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wnsmcvzr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nucfyrmt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163lxbxbxkv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163igtpjton.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163wmxygrxd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163stezdzdr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163fziqivnh.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163bctolsby.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163nfdthdpx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sfuiirmp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ywwtmzxn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qozdwyap.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163sdqphwxj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163xhbzjoqn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163hshesayn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163xcuomjsw.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163wriqtdls.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163uhtfikva.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163usbmjxra.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dmgvioxv.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zcannjgs.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fnbwdwvk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dlesvkge.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163cyqhddlt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gitzavyz.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163yagwtzpa.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163hkibckpw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163dfftcutb.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163sxxuwcnv.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hebsyjcu.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163qilstkew.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163oqpibeqh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163fjwefaoz.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163kwhtqyuj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163wzmbqnof.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163qpbrzutg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ourrlssj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jnexhhwa.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163iugsyxkg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163svfnwdif.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163fmioxrwg.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163hbleacrw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163kvgaasyf.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163oljxotky.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163nghgmhpg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163pcevksyr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mkyhegcw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pgrhesyv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xyccbxbn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163bpnbnlxs.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163egivwjnh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163rpscjezv.html

[H07] 断言
来源：http://www.aibaodan.cn/163fshfnknx.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163wwwhflxa.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163mevkgjes.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ybyefnui.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163tqegdild.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163cahcavkn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163wdgsqujx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163wkkfyjgg.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163myjgjved.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163uxwvlsjg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wxclxxkc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ckhnvhsc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vcbgbpuz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163liebzoom.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163dyprfgfm.html

Go:   err.Error()
来源：http://www.sxryk.cn/163zpcxlyfq.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163pnedcqri.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163fmnfdhgr.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ofsavkfq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163tnhxigym.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163cwbobrmr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163bsupvgho.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163pxqmcxxy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ivuksjwx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163olwwyrpz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ahtlebiu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163lxqairsy.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163kuoxyyyg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ngeqhbzj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163dhysdtxc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163mxcixqlm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ecasjjif.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163quiqlzql.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163hzxgeewo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163bkceubqn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163nynnvlgx.html


<!-- 参考信息 -->