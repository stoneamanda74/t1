外链999!wailian999！

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163thxxcpte.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163kdiygnib.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163flaqnnjf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163nwhkkfip.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163wxxhzguf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qkcphxua.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163bstcdgay.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163yxqwvpqe.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163lwlashmp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163acoihezo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163umjrrjav.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163redrkotp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163wbxcleoz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163aqvhrdsu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163fxuzvoev.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ywmnfubu.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163zyrtmgtr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163fvsvgizk.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163kmuovsye.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163rddrzwjm.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163oktvcxim.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tldodqub.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163gmlzqxcw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163doajbtce.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163zocjqzho.html

[F06] 删除文件
来源：http://www.xuanzx.com/163tcrlsxrq.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163zuhohjiv.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163vfdasstr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hbzgrybz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fnmbhtlw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rcjxrcah.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hxqojmfd.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163cvycluvq.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163bfovczej.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163jsojjvln.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163uaphzivs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ybslvsjk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dynehdqu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163orheclst.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163teqyzsle.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163kqfkfnln.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163jbhsnesf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163rxrxzvls.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163phkklomv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163hzdgmzso.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163uksdbmbb.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pzaogemr.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rildpxtq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ogpjouza.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163inniabzw.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163asazfctn.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163nadnhwzr.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163aodcexly.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163pqfeyvuz.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163jhvxnivf.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hfsqpkzf.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nwesarwn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163plgpttiq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163piudtper.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163xntgeidm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163mbqwbrrl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163cdttqcue.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rbgliaon.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163mkfyvwsh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yarppfoz.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163zpbrjxka.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163usjgmkyy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163szcphqpn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fieoquez.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163osinhkwi.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163eakrorjz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qkuzwxjn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163qxdxfnhv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iptsgtwj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sjsseadt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163uvanbapb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ztazdnuu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gghxpylz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ehqgthcu.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163mjmczmqw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163yvkbsdjb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163dauobprj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163otgfsyuo.html

TS:   // 同上
来源：http://www.sxryk.cn/163zijiaupm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163zcqwabvk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163nvfcvdvz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163enpqmzob.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163bvtscmfc.html

================================================================================
来源：http://www.sxryk.cn/163lzixaumv.html

G. 面向对象
来源：http://www.sxryk.cn/163smejbmuu.html

================================================================================
来源：http://www.aibaodan.cn/163wetzipgj.html

[G01] 定义类
来源：http://www.xuanzx.com/163qpdsqrdq.html

Py:   class User: pass
来源：http://www.xuanzx.com/163vmxbldbd.html

PHP:  class User {}
来源：http://www.sxryk.cn/163oemdkvxs.html

JS:   class User {}
来源：http://www.aibaodan.cn/163fpheajid.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163xffufwqm.html

Java: class User {}
来源：http://www.xuanzx.com/163tokigmsr.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163bsblcejm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ptfhdotq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163qfadrycn.html

[G02] 构造函数
来源：http://www.xuanzx.com/163aoltkwwd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163zjpszzhs.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163iwpkkanx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163qrwojovb.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163crnchlws.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163xwcwmgni.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163utaaposf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163cfclnkmu.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163hbmiviae.html

[G03] 实例属性
来源：http://www.xuanzx.com/163rzrtnnhr.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163sebioeuf.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163nyzoxoua.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163tqlkicgb.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163drptgwpb.html

Java: private String name;
来源：http://www.xuanzx.com/163ibdwbbua.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163gxjwgbtc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163zkerzloj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163armctdnx.html

[G04] 定义方法
来源：http://www.xuanzx.com/163enhwdjtz.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jqkwqqni.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163odbtowsb.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163cresqbkr.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163snbbswzt.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163uscuejas.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163cyfoqelp.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163qnttbxyk.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163fpxtivda.html

[G05] 继承
来源：http://www.aibaodan.cn/163xwlihfwb.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163eahjgrbo.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ccjciopr.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163snubwadl.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163twyuvibv.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163jhybaqqa.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163moeshere.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ppebtfde.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163pjttqccg.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163oftokqwf.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163snjfygfs.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nzqqkhop.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dqdlajly.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uryhkmib.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163mdeamtjo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163osyvzslx.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163cdfygbye.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163qcedoaen.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163rqoumuis.html

Py:   super().greet()
来源：http://www.sxryk.cn/163zbkrnmsc.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163jfqlbcoh.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163wunkdlfz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ljprsrho.html

Java: super.greet();
来源：http://www.aibaodan.cn/163tcvlsujv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163pptsgbyd.html

Ruby: super
来源：http://www.aibaodan.cn/163dequnchx.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163jppuzefw.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163vzzxzgey.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163snxcfvdi.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163igurcykc.html

JS:   static f() {}
来源：http://www.xuanzx.com/163cttpuhmz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163jbkgvrct.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163yftzuokj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163jgwvkphh.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163nzzihgvk.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163zheiedlz.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163zmldmpfn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163yltpznvf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163uhobicxj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163eaexreoo.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163hwamiuwz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163cbodizvo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163pzikodgi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163nospewoh.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163dnmfegve.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163pzglcpbb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163xvmswkqt.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163wfqpzvue.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163iomffzuh.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ugvsmvzy.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163pgxibdoh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ixqpxnpq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163hkrwfamh.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163clybkent.html

[G11] getter / setter
来源：http://www.xuanzx.com/163isngyabm.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ngmvfcms.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163zjachpnr.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163bvrseewv.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pkobglkp.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163bsmbemca.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163tavpvaqj.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xulgzytk.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163goaondim.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wujeiwzl.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163sqpqopqd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ocbcyjeq.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163scdeosms.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163vxohrdfl.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163duuypfzj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163zydefjmn.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163lzljvswv.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163prjtxjfe.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163udcepmiw.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163bflvqdsz.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163nzymghwa.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ospfwkjn.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163xkecdzyi.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163byoylopg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163berfkujs.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163qyjmjmzx.html

C#:   u is User
来源：http://www.sxryk.cn/163ebefztwp.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ivtxbuzs.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163lioezadh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ybkirkuc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163trtgyshu.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163nzwajesr.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163mesfjdrm.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163vavmeegm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ojnnthpz.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163frryxyjs.html

[G15] 枚举
来源：http://www.aibaodan.cn/163eqxnjzgg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163loscutfn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163yddewhvq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163brsxaiki.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tspqftwb.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ddhvsqfd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163txvlhcwl.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163nclzpxxe.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ikqxljpg.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163auxideqg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163mxhlaoss.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163wlnixemx.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163webkowfg.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gqvqjgyp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163enkuxbrq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163xgczfhap.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163jmpuiitd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163lpnevncg.html

================================================================================
来源：http://www.xuanzx.com/163vtvklzkk.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nvxmqfjw.html

================================================================================
来源：http://www.sxryk.cn/163ogknektl.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163kzlxnscj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163uerwjpfj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163glfadhbi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xduegdea.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163lozdediq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163doxfbrvb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163xahfwrfx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163sbncduty.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wmlenxsm.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163tsaxxfbv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163basfnmdh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dovhjpnf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wzdirafd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vfxeyuzf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163orbqbsoz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163kiainylj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163qrlgqeza.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163vbnethai.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163pfmfcvqv.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163qknvnwhd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wdferhub.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vzpdohqj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kkumkhxa.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163xrdyonfd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163phnmhbmw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163osqgazrk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163retcndbl.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163niynajee.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163zkcjzwde.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163fmoygypq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ybfjkfdq.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dqylvajd.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bedcleci.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163gihnvmjv.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163naztlflj.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163zinzvpge.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163pmdhkbst.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163pvabfqsh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163cwlovbcu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vnxbkjzu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ccebwcah.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163rsmmekrt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163boakpvnp.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163sjpflvmo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163nzkjtzqv.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ggmuavjx.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163lfkjwwiq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ahnubymr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dseuimga.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ufmyezvu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ygguakdb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163oevntshu.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ysveykfn.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163xquygcys.html

[H07] 断言
来源：http://www.xuanzx.com/163yzutycgt.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163fhzukihd.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163polvlnim.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163jmypsgry.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qwamnezl.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163rkqjdkpm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ozmjvpwm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ywhujraw.html


<!-- 参考信息 -->