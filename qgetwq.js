外链999!wailian999！

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163vxbyyntl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163nfoilbzl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163lisqiift.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163nfnlsrzw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ejxtsdcb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163avwcystx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bptcfpmg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163fnzaazlv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163jrltpkjq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163teqbozmn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ijktzejp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163uapyaozb.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163lkyazvut.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163fvatirto.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163vxdbrkts.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ochzqitf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163pciwdvbx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gitueabf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163anjsjsku.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163tyzrmsby.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163skhuhpqx.html

[F06] 删除文件
来源：http://www.xuanzx.com/163yyeuvmlm.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163miwtuoft.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163nfgpsepi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163occkzcyh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pkqxtubr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ocosnbwa.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163sobakoot.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163yizbptfu.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163xlielfyl.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163gahzglcb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163maovyicn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163imknsnfy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ourfldsh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dlenajno.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163igyaqlnq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163okahrirb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163pezzcwin.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163zivoqlkb.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163jzolfoyu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163lckxjerr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ydcxnrwo.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163yxtgsgcs.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ssqxxmup.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163uqljlpez.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163uoaewwby.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163mwfhyiqk.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163iwgpwfvv.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163mwjgfxlg.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163plqdkzml.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163scdajajb.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xzukfsee.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163warhgdoh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iwdaoynw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163rljsczln.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163lggwazhq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163dcelmlmv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163lzuyrxzk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zaljvdur.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163nuvzckpr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yvjrzagt.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163bnafzirr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163enzoccjn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163nzwboghz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vzpnhdaf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163qpkqlzgq.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ctnwdlzf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nuskzuwt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ohngdkmn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163goarhlyw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lrmhlpqq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163gbwkqkfa.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163uyllovdd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lefqegoz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163nnxgsumd.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163uhubrwai.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163vvosmsid.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ogdaklvk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ezyjrecl.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xggbmrdu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163dbntmnqh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163smkvqisw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163lxfbelum.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163gdvndfim.html

================================================================================
来源：http://www.aibaodan.cn/163ucckfvsz.html

G. 面向对象
来源：http://www.xuanzx.com/163yqscdoug.html

================================================================================
来源：http://www.xuanzx.com/163wwafxvlb.html

[G01] 定义类
来源：http://www.sxryk.cn/163sudimwbe.html

Py:   class User: pass
来源：http://www.sxryk.cn/163naarxima.html

PHP:  class User {}
来源：http://www.xuanzx.com/163agvbbjtd.html

JS:   class User {}
来源：http://www.xuanzx.com/163svbnzwtw.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ghalijcw.html

Java: class User {}
来源：http://www.aibaodan.cn/163xtninaxm.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ljuwbdvy.html

Ruby: class User; end
来源：http://www.sxryk.cn/163gsmypsjx.html

C#:   class User {}
来源：http://www.aibaodan.cn/163zjszotdp.html

[G02] 构造函数
来源：http://www.sxryk.cn/163gnquiynm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163nqeqgvny.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163zhihwwpr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163spohanhr.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163pzplstqe.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163bdusurun.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kqdeomvx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jczxvhxq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ycvguvej.html

[G03] 实例属性
来源：http://www.xuanzx.com/163aqlahojb.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163uzkcdime.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163evxnaprx.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163cfoyvwlg.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163pnlzxirm.html

Java: private String name;
来源：http://www.sxryk.cn/163zqtihzty.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qzxhqtcd.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163yejpgenb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163mmulvxfs.html

[G04] 定义方法
来源：http://www.sxryk.cn/163bhxdpmjh.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163dsawepuh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kbwxunqf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163aotsswdr.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163heroibtk.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163tcriqnzt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163tdwcvowl.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163smttevwe.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163shtepuft.html

[G05] 继承
来源：http://www.xuanzx.com/163lyndbnue.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ocxdxuni.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163xcviylpy.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163noumknmt.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dyqaiwvx.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163taixlczh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163qfbztgua.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163gindkexs.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163pjxswdlg.html

[G06] 重写方法
来源：http://www.sxryk.cn/163cinmvajy.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ctuvyddg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uffijvfz.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163vpntfgmu.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163sjgorcug.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xmqgxjkh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zipavgcr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163kurrrona.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163sasxgxqa.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xqjzppbd.html

Py:   super().greet()
来源：http://www.xuanzx.com/163wkmhhvgi.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163aupxkxql.html

JS:   super.greet();
来源：http://www.sxryk.cn/163eoilabjm.html

TS:   super.greet();
来源：http://www.sxryk.cn/163gzosahbd.html

Java: super.greet();
来源：http://www.aibaodan.cn/163jplkgzju.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163amygwmvt.html

Ruby: super
来源：http://www.aibaodan.cn/163hnluyndv.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163afzmszff.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163pkfsyqtf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163aalynbzc.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163vbfjfuya.html

JS:   static f() {}
来源：http://www.sxryk.cn/163coggoixd.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163juqxzoyd.html

Java: static void f() {}
来源：http://www.xuanzx.com/163dmvchgrl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163lsnafzsm.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163megvukxt.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163wavqhyru.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163eqfvnbvq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163kdfarlzj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163mlkenrjs.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163daufkusl.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163nmkjrpxo.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163otrccofj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163dcmjpquh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163amaobltx.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163uyqskmem.html

[G10] 访问控制
来源：http://www.sxryk.cn/163uvqzyoan.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163gfqsolqu.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163rxumedbk.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xyaoozsj.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163psfcedzy.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163dgnetxww.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163wevfcjey.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163njdnpeug.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163zicaxkkd.html

[G11] getter / setter
来源：http://www.sxryk.cn/163dgiggjnq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163zukovhsz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163rczkucjv.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163pmdfiyas.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163sqozyspl.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163gnbapbzm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163wteddstw.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163tepxujso.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ahtsavrl.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163qjtrqffl.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163iplgjnga.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163rseknmir.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163plgobyyc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163mhygfiwo.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163bgkdykbe.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mlapirzt.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163begxgqxm.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163utueijpp.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163bsgupprw.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163gyarjqaw.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163dmaxomml.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ffmdvrsu.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ahqcphda.html

Java: u instanceof User
来源：http://www.sxryk.cn/163qlwizyed.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163rxkcpoil.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163oopowsva.html

C#:   u is User
来源：http://www.sxryk.cn/163esdqarht.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163zxkpqfnn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163dgphlfjb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163vazukniz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kegzobtc.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ugxybrst.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163zfbzmwqg.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163zgsddpes.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wxwsghnx.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163fdebdasc.html

[G15] 枚举
来源：http://www.sxryk.cn/163okpgshuj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bupmhgzk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163wjnawudf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163cthnumyn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163aaoeodkt.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163howrdxls.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163mrsbgeri.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163sspoklzx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nimlwgwb.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163fotnmjns.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163gwlkvfcs.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163vviwsmhl.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tbhqhreg.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163olpncdja.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163fkpgxxor.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163slmnlkzp.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163txzsiolo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ugtpcuqk.html

================================================================================
来源：http://www.sxryk.cn/163uzituyib.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163qjgyqcbm.html

================================================================================
来源：http://www.xuanzx.com/163yslbxnoh.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163iwpyovkf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163fcdjhyzf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163uphecwce.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xgzkkjbm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163bvcqsujk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163traahget.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163qqzuvmkz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163wkgseitz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163wwsbkmuq.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163lpktrvct.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163wfxgicce.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vnmsfaae.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zftimrxf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jfnoovdq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lilloikj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163hfbrttys.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163gwmpjmnk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163liwgwuob.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xnyjysaa.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ajuuhauc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ahpwffjm.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lbgggmnf.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vggkgbsi.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163mfmcljya.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163yrxygqdu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163pxhiwciu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wqfuarvv.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163dnvvmpko.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ueupxjto.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163sqsipiry.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rvdpzvta.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hmunjbjx.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163tqrzicqo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163htfoxewo.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163xeamztrz.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163suorwkpp.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163pixvrfde.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163rmdnoyuh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ueyysnua.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qcnfbtxd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rpsfndie.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163srlqdzjd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rkhhsnxa.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163huxbmfpc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163hqlpsbml.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163lyfwwqrd.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ireotnul.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163vtxelwko.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cnczauya.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yrcptpyh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163bstmbszc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163xknhqppp.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163gmkrdmrh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ltscikff.html

[H07] 断言
来源：http://www.xuanzx.com/163hvhqfhdh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ndzlhiyw.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163fdbxrmsr.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163acwjxskm.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163tvkcxztf.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163iqrybtwy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163nwyhnrib.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163fmulykho.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163tdbcirke.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163rvkqtwyb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163srhoyqea.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163zljzpgcq.html


<!-- 参考信息 -->