外链999!wailian999！

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163wkrcrxpg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163dpallztt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163lekrsqjd.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163kzonrimi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vwxbfdzh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163zystqvma.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zzophbfe.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163duoaiemp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163abzzjiaf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163mxaytpsp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163iextqffj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163jcpuiwfl.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163fbphcenf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163qcvebkhs.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163uxwsgivg.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zvclyblc.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qslchzhl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rfsdnecl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163djoulcun.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163setwcari.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163usxqhpzd.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163vpozxyqg.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ghpeyvpz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163hhnklkzq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163uovhvchx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xiuwomes.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ailntgwi.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163iljvwhof.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163qyzbvumc.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163smeiubaq.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163weqnyinl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163aikdchku.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zkkprpmu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kfnbophq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yvwsuabu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163twbccerf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163kmpriopm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163lmflpcdn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163lqugbpmz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163udaahkhq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163umlxrqmo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ejvmplhf.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bnetmxtm.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ywrfqrcn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hmtmfqjq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163hglfksat.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163vfgsyfuk.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tyfszghm.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163oodcchdk.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163kdmkonbs.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163evebcndq.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163pwtbeiqv.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163byxxflmw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zcetkjbh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163bkewoxid.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163tqvpcxww.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163spvjhiho.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163cgdmqfpl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xmmfttyq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163lpxmhksh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163braqrthp.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163paxnccdn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163nhxthtbn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163mdolbfzd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163izqrlqbh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163didzwgqy.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163sjwcdqzf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zdqxhgmx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163pswwrvvo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wbhlowbo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ngjpnzhm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163obxmilcd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163qoxjezea.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hmyxqggu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163znapagqb.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163gevipski.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163pocpflup.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163bopxcdyo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ktayiozy.html

TS:   // 同上
来源：http://www.xuanzx.com/163vvaknpyv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163yqqcelfc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163wjxdfmra.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163dynvajdb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163sfdnagxq.html

================================================================================
来源：http://www.aibaodan.cn/163bjrcmylx.html

G. 面向对象
来源：http://www.xuanzx.com/163dlypqjhj.html

================================================================================
来源：http://www.sxryk.cn/163yvbsdfqf.html

[G01] 定义类
来源：http://www.aibaodan.cn/163cdkwfuua.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vczdvxhp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163fqyamhbx.html

JS:   class User {}
来源：http://www.xuanzx.com/163hcqwfcii.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163krvvrbyq.html

Java: class User {}
来源：http://www.aibaodan.cn/163afbyjsiu.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163jyuuvuyz.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163uhjefhbq.html

C#:   class User {}
来源：http://www.sxryk.cn/163dofalkkn.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163bhuqizij.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163jmwujtov.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xwkifbkx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163uhujucak.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163prabxdul.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163qrwislte.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163gclgxsig.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163jtogqdum.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163nvchpbbn.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hkazpodp.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163weejawlt.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163mjiaddmn.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163khdytsbl.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163uxoskfdb.html

Java: private String name;
来源：http://www.sxryk.cn/163lzncxaqf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163iknafjdw.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163rqtqcych.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163qrvobanx.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ghiwznws.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163xejsxutz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163abeudwtr.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163bupmiloz.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163uynpchpj.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rrdtwarw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163sutupwgq.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163fhvsgivs.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163llxtpqhl.html

[G05] 继承
来源：http://www.sxryk.cn/163ldhnjlcb.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163bbkadmwd.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163lpffotgn.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163yohijlib.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ptkpfufi.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ugmaygsc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163aqodbwsw.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163evxtabyq.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163kxsqojch.html

[G06] 重写方法
来源：http://www.xuanzx.com/163njweinrz.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163rvndfrxa.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163sgrteabj.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163dnkmqoua.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rrdgotny.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163nihmzsde.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163iwgrawbe.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163lzxiaqzu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163bfzehbbn.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163lgtxnvnu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ruhcqjus.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163rrtiznrt.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wffpyphx.html

TS:   super.greet();
来源：http://www.sxryk.cn/163blcwrwis.html

Java: super.greet();
来源：http://www.xuanzx.com/163gihxchlk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tsjieafz.html

Ruby: super
来源：http://www.xuanzx.com/163tmntbaoo.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163pjizsmgt.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163bylfhmln.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ynaviref.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163mhsookwc.html

JS:   static f() {}
来源：http://www.xuanzx.com/163uqwvgqfi.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ssaoqyoh.html

Java: static void f() {}
来源：http://www.sxryk.cn/163mgwbpybw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ijbfdbrm.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163jgnjafpq.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163mgrhtilb.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163zlnzuvhl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163tpulhwce.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163djlszkjz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163saauinbv.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163vqqtxjbm.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163hsfoycis.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163zwcdmlrh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163hojtdnro.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163prcqvmsu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163eeqroaza.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163fwqyfykp.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163moungczx.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163hvzrrdyz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163bkkupxgu.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163yhekqiwt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163pzfpuntz.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163eanzwtnh.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163yeriuhgk.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163egkjbdqu.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163cangwhze.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163yqpqsxcg.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163dwbxhtqp.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163wfayttbe.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163qvzzjmbu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163nlngvuef.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163cjdrdiqw.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163kcbuasbb.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163tgcvnpbe.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163thetcnxw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163jlhtcibp.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163aivsisro.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163jrrdnnmg.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ihuynemq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163fpayhghh.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163kutegrcj.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ipktbhsu.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163nztoijvq.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163yckefsnz.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163iswlzfhe.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163wdsdngeo.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163dmduejrq.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163jkfvgctr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163dxhklaek.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163csgvkkid.html

C#:   u is User
来源：http://www.aibaodan.cn/163zgewwefh.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ecqmmcbe.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163drgeweos.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ttwpwuld.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163iejzymzx.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163bbhosqfb.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163wnnvuzid.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163onjtfsoj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163fxqlejer.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163jsigayuk.html

[G15] 枚举
来源：http://www.xuanzx.com/163nieilegg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163bnxobjex.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163cosqlasu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163iswqvxbe.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xwkdkgiv.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ygiizagx.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163sduojcoy.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163yhulcrdp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mhoteiyo.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163paaberng.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163arfkkljh.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ugoceqdh.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wlmboyxu.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fwypmbuf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163zbslyybk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163kauyxojm.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163motgdiyp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163hkwmebpl.html

================================================================================
来源：http://www.aibaodan.cn/163kvdwcvlg.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163wlxcsute.html

================================================================================
来源：http://www.sxryk.cn/163mgkuzlyk.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163piuitxyn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163vozfbhhe.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163fynlaawc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pjsxpljk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163kinoactt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163chmqcdnr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163qqjhlxda.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wteqgkwi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163dbsqeopy.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163zwuwiwrt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163mvndmufg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zsncdoeq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nreufgqa.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rcvntrto.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163iukfkckl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163hgqoajws.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163jjgjzdyn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163yrxqency.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wiqjorcu.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163zxjfpvke.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xjgihfnv.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dbgchvdz.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gehjgjzr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tqeiifuv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ldddmfqa.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163xwpnaedu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163dbhfwosk.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163jwlgkiwr.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163kzhtdmtn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163pnexvmoo.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lsncsaqb.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tbzfnbea.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xludalkt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163rqofedpd.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163yyrdimgk.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ikyxpqfc.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ldgmcgis.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ntecgvzi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163upucdifq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ojqzqwhb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163khxisqsk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163pmjioyrc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163pctltgbp.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163chqrurpk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163wbowpuqr.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163eoubplhv.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163mzvnpemf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163kjjuewlf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ziasnmow.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163gzmylhvr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163kqdhwkwg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163hdniibwh.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163elhpbsod.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163oexcuvcl.html

[H07] 断言
来源：http://www.sxryk.cn/163ambcvoek.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163edfummvw.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163yiauyypi.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dtyjgxvu.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nsffihfe.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163aurulljd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163pzmzmxpd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163jnngtbpw.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ginrnupc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163dendnrop.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163jnacjgdc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ekohxotk.html


<!-- 参考信息 -->