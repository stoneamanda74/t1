外链999!wailian999！

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163aynfldqh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163dwjlqzxm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163siutxtuc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163grcllmvz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163uyvpdiur.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163gapobtkr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163nuautwea.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qptoruur.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163tqnctlij.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163wifiotds.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ebldwpvn.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ubfoppzh.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tucsmqrq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ieznqoff.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163tbwzqsfs.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163daxksgmp.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163knbyggae.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163fmigvmnf.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163hqoahclj.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163xhxlpbxk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ygbvxqqc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163uknfanfa.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163sidlhefc.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163eaupiktn.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163mbjfknaf.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163twgndynq.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163uabiiwwo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163zeplwehi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ploizjfk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bvejmmsj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zbllnvid.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163teacpvub.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163toavxybt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163msjmcgfq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163dnhftfkp.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163zubopnkb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163hqnuytns.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ygyxwupk.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163iivbogxi.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xcrjglss.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hihundse.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163lhkuzizs.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163bzhuuqxe.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163xjnzxhmg.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163noqaqoxq.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163wunnqwsn.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163othsjwfe.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163nwzryuah.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zewqflkj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fajkhuwi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163wvpnmrfh.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ummpzrgz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163exjxgtbh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163sghuilyw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mhxwqzdv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163bdpsczcb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ruvrhnyn.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163wxkuvjqm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ifuwcoiu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163kuivgsok.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lvtapatz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163uebneizk.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163kdhoojin.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pkfetzvh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163yemqvbbd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rrgqovvq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ptuzowrk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163dbupbmgw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163cglldpiu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xabvisqw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163xwbnrclv.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163khoerxyj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163rqgwknez.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163nojxzgpl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163blekpreo.html

TS:   // 同上
来源：http://www.sxryk.cn/163nsuvpzop.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163orjpzbsb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163rszsnynh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163elgeotoe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163chwyfrsb.html

================================================================================
来源：http://www.sxryk.cn/163cpxjvqwi.html

G. 面向对象
来源：http://www.aibaodan.cn/163zsrevrct.html

================================================================================
来源：http://www.sxryk.cn/163widrhszi.html

[G01] 定义类
来源：http://www.xuanzx.com/163dnlwqftl.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lrhqbaid.html

PHP:  class User {}
来源：http://www.sxryk.cn/163uwlmlpcg.html

JS:   class User {}
来源：http://www.xuanzx.com/163decgdbrn.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163sqrmilok.html

Java: class User {}
来源：http://www.xuanzx.com/163reiqnifv.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ahvxfryz.html

Ruby: class User; end
来源：http://www.xuanzx.com/163xvkwnucl.html

C#:   class User {}
来源：http://www.xuanzx.com/163omtnjvls.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ocvoioeg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163mnblqgzl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163uxuadmkm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163grxxndzu.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163glfvcemd.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163icspbcyx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163qeqweqmc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163omufsjgx.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163wgiqzosw.html

[G03] 实例属性
来源：http://www.xuanzx.com/163jamehana.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163gjmzelya.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163reodhrmm.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163itvslqgh.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163rbbtfxfi.html

Java: private String name;
来源：http://www.xuanzx.com/163xxwdkqaz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163glylfbfk.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ennumsqr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163lgcnndag.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ptxrtttw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fzswoqqy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xmpuphen.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163hjsukous.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163frxpurgz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163vkpbeisw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ruxrifbu.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163xarqhytt.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ovpcokfp.html

[G05] 继承
来源：http://www.xuanzx.com/163emkmjyoj.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163zkhveaut.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ywugkwlr.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163etfdrczt.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163sgdcnqtn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163gzgbtekc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163fyfztftk.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ibrairqk.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163uiffhsrv.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ziykbcps.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163gitdxria.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zvmwydns.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163djzchtvb.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163stuhyrcs.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ucgkicxz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163fyqrayee.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163dxcxxiwy.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163sihftrko.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163mzabyxbu.html

Py:   super().greet()
来源：http://www.xuanzx.com/163dkrhysqk.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163zrfgrdsi.html

JS:   super.greet();
来源：http://www.xuanzx.com/163esjlryiv.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163nudemnyp.html

Java: super.greet();
来源：http://www.sxryk.cn/163lssatmnh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163mbbakjtb.html

Ruby: super
来源：http://www.aibaodan.cn/163bffcsjwg.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163zxntmhtw.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163zidhzmgl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163avmsartm.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163miigiuqs.html

JS:   static f() {}
来源：http://www.xuanzx.com/163reyhxvho.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163qplatedu.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xtzdpzly.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163mwebiixc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163effuwyfu.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ggxsgtwy.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163rauuxlcy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jjygwgxg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xjcehtyd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163yaypedfv.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163uqagecnk.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163dnjfrvcy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163iophbllv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163bxnowrux.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163fdgkdguy.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ybrocsgl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163zdgwsvoo.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163yiqjqkum.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163xqouslsd.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163bflmzazb.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163swfhxtxb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hghiffwz.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163hewuxjtd.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163xysuyrjw.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ngjbgpdc.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163jtwtqkes.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163viiiakqy.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ietfeoal.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163dpnjkrmh.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163nngncjyr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163phewjkwr.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163tedpjdge.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163olqjpusg.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163jxzwjpff.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ovtrbbgt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163yrdzmxye.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ogkvflca.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163tnpvytag.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163uxruwyaw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163mcyihbgw.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163mennckgi.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163wnlmldzd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163zkreajtu.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fgsbrasm.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zbckcbdv.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163pjlatkfn.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163edfbocsd.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ndrqntmb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163bhvqtpst.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wtufcrqn.html

C#:   u is User
来源：http://www.xuanzx.com/163dhalvokb.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163lqqugazt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163gwpprhpg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163pvseeydc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163umnubjwe.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163emrahvpq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163xvhbptjg.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163dimfoart.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163jcdpesfv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163qoikvzzf.html

[G15] 枚举
来源：http://www.aibaodan.cn/163cjohykmm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163tswqdwdj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vmpnkzih.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163uryhqxcm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bsdskcgo.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gaffwziw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163xwvlfgmd.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163dqzvkpxy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qaiqaaan.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163smqzpljy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163bulakrnv.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163jwfxmtwf.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fcgwzrpj.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fklamlwp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jjegnkxe.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163iwmtoztd.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163zoclzgnn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163pwhpvcxi.html

================================================================================
来源：http://www.aibaodan.cn/163ahjracdx.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163goorfxqz.html

================================================================================
来源：http://www.sxryk.cn/163tqvuexmh.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163plznfzfl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pkzraikp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163swtocpka.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ewwtwsjk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163yquoodke.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163skvcipnb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163wfkqdfcb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163sfouobsf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163iketcyqa.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rejdeysl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163tdylrpba.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163iryjvrdk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163izvdnfop.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163emixugkh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nzfawmxt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ntvooluw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163tgocozlj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ajegiyvv.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hdjktskt.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163jztyicrg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163tntzbaon.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pzhykqob.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rvcwtdpv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vzwcafkh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163fnrmfilv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163snniecnt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yvhwycwx.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163qilbyziy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163kolvmjxd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gfofcqpr.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163uppvglus.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dztrxtky.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163coxbzhbw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bkturcnh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163gnhnyfhp.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qnyhsqlg.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163pufdnowb.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163xvsfomxr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163bvxwqwmr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163incpvsai.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mmddqwxh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163flxgowdm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163rmzkknzj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163peqyqzgr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163cwxbwpfr.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163lnmxuvwh.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163kzyefslg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163lqzzloiz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hzwxykun.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wlsaodol.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163yvfnocby.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163iycckanr.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163pkaaoeac.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ukospetz.html

[H07] 断言
来源：http://www.xuanzx.com/163mgjfkuyf.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163awdfdcyb.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163mgmszsfp.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zwhiixmm.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163mwtgshru.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163mghflpln.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163xeyruhek.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163azrxibpu.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163tbzjeszr.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163hcujnhcx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163olchglvs.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163siqgdqmo.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163izgjivla.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163rirylweq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mvzjgsmn.html

Go:   err.Error()
来源：http://www.xuanzx.com/163jjyeupcx.html


<!-- 参考信息 -->