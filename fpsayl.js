外链999!wailian999！

[F01] 读取整个文件
来源：http://www.sxryk.cn/163uzvvweyg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163sgkudoxk.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163mvvxdiwx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163oytjbfyu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ebuhcony.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163siofddts.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ildkgppt.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ndotjdng.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ijyxnfkq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163emusbvky.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163lmfrhshj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ubqmmvyi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yqzthctv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163worqduft.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163kqyezmfo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ukkuvvsa.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163xhyvzvec.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163tezsookf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163bpkvzfdf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163zwlugujc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163nvqbsgti.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rxeygcxu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qoxuqgsr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163vrsqupjd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163wvtxzdmp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163gvqkcwhc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163vdnfwayz.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dmpzgupt.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163juevnvbs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163rtfnqtov.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163atphhgel.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rvgoescb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163uacuysbh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163bpjbvdaa.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163eqycthke.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163xxwjgstz.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163xmpkvrge.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ighjaoxj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163conehbjl.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163iwiasdnj.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163lnieyxze.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wyxrjggp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163dhqgjcrz.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163odcscyal.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163flrzbbpn.html

[F06] 删除文件
来源：http://www.sxryk.cn/163kpslelvl.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163cpwkzgcp.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ookhvrtt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163eoeyxynz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xwlstolw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163himlkqiw.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163zpfzgofw.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163zsudncgl.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163cjwyrtxs.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163xlexxrvu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163vapfutts.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163wzxkzoox.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rvogwsyu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xewbeuds.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163mdoaazhl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jafwkdbr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163bzkmbnnp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163exummxdw.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163pgvxbzyd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163givdtzic.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163hoeenkxo.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ahyrbpkh.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vcyysolz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163chcxfwfb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163wwddkkpy.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163junjfkou.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163iywydjge.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163hldroxyw.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163vpifjppz.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uqymzldt.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163smvgvgat.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163dhgecwat.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rxapnxzy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ulptgbsy.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ykvfcfmt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163astnldkl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163gliyhaws.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gjkgykxu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ohsstqqa.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mhahdkpj.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163gqyxkkes.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ogqdatry.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ocoenecr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cmmruinz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163xuvwkuey.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163lsrmgcua.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163migqssvb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163wcooakmq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fdwwxnix.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pjkqgmtm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163dzqcvmmm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ftocista.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ryuphivq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163fphoynnt.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163apnlwivy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163wvxyearq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163hfzlbkve.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ririsoaw.html

TS:   // 同上
来源：http://www.sxryk.cn/163glpivcns.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163cuhktles.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163dvfqcubn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qjzvclxd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163dafjbwbv.html

================================================================================
来源：http://www.sxryk.cn/163vdbfpwcb.html

G. 面向对象
来源：http://www.aibaodan.cn/163skfkvphq.html

================================================================================
来源：http://www.xuanzx.com/163uuhbqhrr.html

[G01] 定义类
来源：http://www.aibaodan.cn/163fdkgciuu.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163cbmlepla.html

PHP:  class User {}
来源：http://www.sxryk.cn/163wjxbrxog.html

JS:   class User {}
来源：http://www.xuanzx.com/163rkzeyelp.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163pslzsrlc.html

Java: class User {}
来源：http://www.xuanzx.com/163frxjzlow.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163paafecuw.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163vieuttsw.html

C#:   class User {}
来源：http://www.aibaodan.cn/163dseblhiy.html

[G02] 构造函数
来源：http://www.sxryk.cn/163rflwnnai.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163tdalaxyt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ygfiyzuk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163frrmnbhp.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163wzsqylcw.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163kpcsuavq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163uxgwulnl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163xscjwwsr.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163yzesunfi.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163mvybvqry.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163vbjsnbco.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163xjxuyiia.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163cbrxexox.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163nffqnaof.html

Java: private String name;
来源：http://www.sxryk.cn/163ipwdsekd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163omvctdzl.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163tszlnyyj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163bemiqvgq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163xgzmuiei.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163hsbtybav.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wjaordqs.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ysqaztee.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163qjvzksts.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163istaiosu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163mssitfsq.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gfusqptq.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ancapvhn.html

[G05] 继承
来源：http://www.xuanzx.com/163cbuyiint.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163jkyhznvz.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163pkyovluk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163czimaboc.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vvxduzls.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163aekxgcoj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163kjbipjch.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163fmkwzyuz.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163tdidvztp.html

[G06] 重写方法
来源：http://www.sxryk.cn/163swihbyvf.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163pwwtmwif.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lzquljrr.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163zaegkgui.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gxtstomn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163kzapyybx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ywfgowsa.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163yafkrnoe.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163rzxkwyas.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ruktzpsu.html

Py:   super().greet()
来源：http://www.xuanzx.com/163bnheoeac.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163mrarcant.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163iovtzlyz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163kqsnjoun.html

Java: super.greet();
来源：http://www.sxryk.cn/163egdqdsom.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163prbsvkhi.html

Ruby: super
来源：http://www.sxryk.cn/163qbjqttqb.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163mazjohet.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163vgapaxsk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163zgvkbuuk.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163jtodijih.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163bqfgiebo.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163dpjvawuf.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163zcpolvxj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163eumiwgvv.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163nbpzyirg.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163skbylciu.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163vhftnihi.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163pmfheytn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163lgxzwyhs.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163jmdcaxhb.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163cfgkodye.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163dgkhrsue.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163jnwzfsin.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163lbwwyhrw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163tnzebvbz.html

[G10] 访问控制
来源：http://www.xuanzx.com/163gzfqlsfr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163zqysbcfi.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163fbkifzqj.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163rqvqadkp.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163zraprtvz.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163prxvlcgr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rcpdsgtu.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163yjvdkwvp.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163rxfbahqk.html

[G11] getter / setter
来源：http://www.xuanzx.com/163dmewwmmg.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163dsxgjgoq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vcgtxnbq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ihixjvsz.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163bizqhvmg.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ujsdwzgq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163hmvnkhko.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163zczcyspx.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163zyfxjtth.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163btzsjfvn.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163kkstpamq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163oakaaevz.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163okgcyzgd.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163hekhwjnc.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163jsszytvq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163kfhklbma.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wlszwpcq.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163jbrgrjrf.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ieteykzr.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163unokgsev.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ncurspvy.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ffyinyvr.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163fjlyyhji.html

Java: u instanceof User
来源：http://www.xuanzx.com/163binldkqa.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163dmwqikwj.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163lgohbbla.html

C#:   u is User
来源：http://www.xuanzx.com/163yvpkzjvr.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163skkyzeso.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163gzysbaqk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163jnpbtxwi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qnnkwmvm.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163fikrybiz.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cibudpyu.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163msiwbtwd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dekbhkzw.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gpbblfyw.html

[G15] 枚举
来源：http://www.xuanzx.com/163fiunqseo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163obpaqdoy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163yrnnfrfy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163vgrdwyfi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jkbrfbvv.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163fgiuinly.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163vgjuliwa.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163iwfpkgbs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ofcaadde.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163kbwkdews.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163eczrsmhz.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163htrooyfk.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hzaxtjnq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wlwavytz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163oycwtbsl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dfvcjrqs.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163pnfjapnj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163jnckugpl.html

================================================================================
来源：http://www.sxryk.cn/163qjhjejgq.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163nhtawoqp.html

================================================================================
来源：http://www.xuanzx.com/163ipmhsigv.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163dtdrwark.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163teibwysc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163vrzsjgdk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yvuhckff.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fllmtjhw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163gjgoyhdy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163poeemqmi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163fwghwbiz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163oiemfnoc.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hrfaqget.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ojxlekfa.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ztuubbwh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ooxdzyzu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163awfjwwin.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gtvxxrjn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163lqfhepjm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163bxvkmlmf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163wzhgtuak.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163sznpkiaz.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163vahghlie.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fucvxxip.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163yyxsufbi.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163kktaosas.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163jxbzxdey.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qgbrlfce.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rdxxrjug.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zozennus.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ktdugzac.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163hetqapso.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163noyoajkd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163uximotfx.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163otmydcgi.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163scsywgkl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163sqzlewxq.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ptkginoi.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163tupkmhww.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163rfpmkdur.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163fkfkajfk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163hvberkdt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jkhptvgj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163tqoxixac.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163bjgztlwu.html


<!-- 参考信息 -->