外链999!wailian999！

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163pptzppmv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163cqkpghom.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163efnmhdrm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163znndspey.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ozbgxnpi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163brwlispe.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163uwbetuiy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mnwvsfhn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ckdknvpu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163gpswqhqr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ixhellps.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163aeqhvlsb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163clsoahuy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163novcblrj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pfyzdcuw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nzhhnwnq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163uvzwrlgh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163dudcltdr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163smirgari.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163hhesmfhc.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163mzeyanjj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ucvmamoh.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163txyyridu.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163slcrxupx.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163gxznnhxh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pvfgovjy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163eefbwtvj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163jxnqcafw.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163kdxizqnv.html

[F06] 删除文件
来源：http://www.sxryk.cn/163xdtajyiy.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163orxkhbuq.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qloxpupo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wocnmwrl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163crmjzkzd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lcyobekt.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163iuvrwgpb.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163oijsmhgf.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163hviwoaik.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163dzfqidqv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163hxxbiyyl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163sgzdhhcq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ttlovwnm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pwiaogkm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163tzvlylhg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163chsglziu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163pmrbdlmz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163hadfqlep.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ncbggzas.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ikawsgzg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163nmjncqca.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xwagupgm.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rtituccn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nlmkyvsv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163bjucimcd.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163pdtcueem.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163djlpcqbb.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163dkrkkmvg.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163hqtmjgoi.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163iszeqbfp.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uhammxat.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xqkfvldc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zqdwbqga.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163lkkqchov.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163uuarlwez.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zrobzdpf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163fspsjhzq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gamumegh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163tuofvrds.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zdpropsk.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163kinnkqhk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163nsusfmlu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163eyrghywa.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163biywgsco.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163glohnrib.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163yphjlulk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zscslixy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163qlgwvutf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bnulnogn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vhuzjxxd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163cewudzsz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163lakwoocj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163licjnozc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ujmkbftw.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163stdhxegv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ifuyalru.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163fdzzktgm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163cqsaujpy.html

TS:   // 同上
来源：http://www.aibaodan.cn/163oxoevyzv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163lejxebwc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163jagrtcyz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163jirxiabx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163fjmtggxt.html

================================================================================
来源：http://www.sxryk.cn/163vfybtmyq.html

G. 面向对象
来源：http://www.sxryk.cn/163yfchitox.html

================================================================================
来源：http://www.aibaodan.cn/163gjatxatj.html

[G01] 定义类
来源：http://www.xuanzx.com/163atbeskzs.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163zymvgvok.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ifghpqac.html

JS:   class User {}
来源：http://www.sxryk.cn/163mkrlsotb.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163sgltisdq.html

Java: class User {}
来源：http://www.xuanzx.com/163xccnzujl.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ziudgeyt.html

Ruby: class User; end
来源：http://www.xuanzx.com/163kmfapbek.html

C#:   class User {}
来源：http://www.xuanzx.com/163plwwtaar.html

[G02] 构造函数
来源：http://www.sxryk.cn/163jortdgsc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163hbxkrffd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163hjjeklnq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163wrzxtnnv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163htctawzs.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163kwzaxyvn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163yjsjqsvx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163tofhrgme.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163voiomxiu.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163usmdieui.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163gdkobtvn.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163yeljfdxt.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ymweprpa.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163wjtbqkyq.html

Java: private String name;
来源：http://www.sxryk.cn/163fhvucknu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163nxltryct.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163arqrzfoh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163vdqyvzdl.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163fvdpcfep.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163pysznfxr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163gqqllufx.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ddtxjesr.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163gxxffflg.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163xmqcclav.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163utqgwzyc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163kzqxartr.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163elcgmmet.html

[G05] 继承
来源：http://www.xuanzx.com/163aojjuwhq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163odnanllo.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163tizskzls.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jgulkjgj.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163apmygbbg.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163vkljmwro.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163xdxcsmyx.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163cwvyhxgr.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163zxsmexmq.html

[G06] 重写方法
来源：http://www.sxryk.cn/163lwajzkgj.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163fkuwwypa.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163kmhnilli.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163tmoaetpn.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fiydyszw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hfcqnyrt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163hbhtjtlf.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163mbtucgdh.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163qucodniq.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163vmxopplq.html

Py:   super().greet()
来源：http://www.sxryk.cn/163rsvdwzgs.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163rktszpgp.html

JS:   super.greet();
来源：http://www.sxryk.cn/163zfxgvvxd.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163diwgyfwa.html

Java: super.greet();
来源：http://www.sxryk.cn/163nntxkydn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163nceexeoa.html

Ruby: super
来源：http://www.xuanzx.com/163ucvdzchw.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163womywcgv.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163htikggqi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ipkvegnn.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163xmnfeqcu.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zzrkfusd.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hjbqrzrn.html

Java: static void f() {}
来源：http://www.xuanzx.com/163lnzuundu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163mxilhzec.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163hhqdpnvn.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163hrmjqmmf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163jkgxokkp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ftqffwaw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gphgoccm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163nbmdihai.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ntdbodde.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ajlwwtna.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163hwchtrde.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163bmzypxln.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163xcqrxnnf.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ngzfifqm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163hveuhoph.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163alfcdyzn.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163wyikjgqh.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163salxzgfa.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163pqntxpiz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163pbvuhdol.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163qgtrxmcb.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163vqzqyjif.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163minrorhp.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163wptzzvbp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163xjzxhsdl.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163vpifkvgu.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163shrrvels.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163wvxhakpv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rpbfcsow.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163lfvakjsw.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163evvtgxla.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163uacpezzg.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ytqawewd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kxzfasbo.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163tpuajidk.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ffwqourt.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163kmonnsxg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163szkulrzc.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cpxvnsrz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163xiauftri.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vppreqkr.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ozucivyq.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163swumiukp.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163jnxovnjs.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163nbyeqmzf.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163zrnrjqwz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163zbwcionf.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163naolqyjq.html

C#:   u is User
来源：http://www.aibaodan.cn/163bfybecqa.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163pqowepqm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163hwegywja.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163nxqtjarn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163xoiliolr.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163fcieodtl.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163nmcvnywk.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163oamlopgn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163hakvnkuf.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163lkapyhwo.html

[G15] 枚举
来源：http://www.aibaodan.cn/163zyiltdyg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163wzyoltkb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163hmzlyopz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163jwmbxqva.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qulsejbh.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163afgigszz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bzzmlndh.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163rxzaahhb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pdlkzoek.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163luvejxov.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163wqopdord.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163esdkfcze.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163oeysntki.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nazkwcva.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163mbphakwz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163bfzdpjyn.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163khjsslgt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ztbhohqu.html

================================================================================
来源：http://www.sxryk.cn/163wrylgqxv.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163lqmyslcj.html

================================================================================
来源：http://www.sxryk.cn/163phktgqgs.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163lyusrgzz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xpmdipqy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163andivxfz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ewsdsprj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163psglvdzw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163zakpuuuf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163vikjhmpd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163kkfpavbt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163urzlzjoa.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163shrwafqh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163wayygche.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163iazbjatn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dixaudug.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eymbopfs.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yadaureb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163gdaqcxjj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163kgvcphgj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163reivldrz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163yztzioan.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163emncxvvp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qgsdqols.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gfnkdgrx.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163oebxphqg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163jrycbbnt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163hxjmshha.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163maephpkc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ygpxgjhi.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xmefnytm.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163rbgyeoru.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gahtpceo.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pmjbgobh.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rmfmnrcu.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ijquesqs.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163bhjhqswt.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163anqqdvmi.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163atgvjbgt.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163uuhulpma.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163kndeshdd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163cmhmzdrz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ngxcbmyk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163clkyksdk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163qkzacntf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163wzybgyby.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163cubphyvf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ukyvfawf.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ekmhspzf.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ldcdjavf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163jdcyrlmq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163uzrdkyfo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jjssvhlv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163lzgwsgfx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163aqkoxetw.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163caiawlho.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ynzhrnfk.html

[H07] 断言
来源：http://www.xuanzx.com/163vnednjbc.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163bxkzegjq.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163rojdhaep.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bmnyricz.html


<!-- 参考信息 -->