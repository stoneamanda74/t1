外链999!wailian999！

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163iejrpxdd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fewttajp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163aueisyim.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ykwxsbmd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163uacaubhv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163kdrdcqet.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163lzefvitq.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163fqfpkdty.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163oliuzfrc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163aesfrfkf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pnvsrrdp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163knujtuek.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ovtlpstt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163cpuvtlbm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ndcagmhg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163arqtpkcs.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163qiapunzn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163fgzfprbi.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tfzbwkyx.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lpqvwiee.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qnkwmwax.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xgpbukny.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163fgmheeqa.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163icgpbhqj.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163rvhcerrr.html

[F06] 删除文件
来源：http://www.xuanzx.com/163nclprbod.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163zhwsbawr.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gkuhjihg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gstwrbdh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zhudtgio.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nevkkpgn.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163orjvixys.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163zrtoulpf.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163uqnuajkj.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163drtlhjce.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163gzjljuqj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163jpwdqtee.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yfhjksyv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163skiuzksr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163abweiurd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163lufliunq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163wzhezfer.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163awfazpso.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163mxsryhdy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163phwieoxk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163rodozwju.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ahzjcgxl.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jkwabalv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vvvltvgz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163mklijqtf.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163pelsuxuf.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mftpyacj.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163nsouzwgt.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163jdjoutrb.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163pjnilbxi.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mmrzmffd.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hwvojcep.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wjtffezx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ahkhvldh.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163zeludume.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rkafizgk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163vrgwavwc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163usrdxnfr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163dlqjzhdp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wpcjhbms.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163bbzmnzee.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163jglwbylv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rmcjnafu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dsjclure.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163gbbgdowh.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xhxxenku.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cnuneles.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163qclksakc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163murzaval.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wpikauxr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163dcttkamd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163pnykvjjd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cnoxjzth.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163abdoypqq.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163wjttmqvw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163blvxgoue.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ipcxbarn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163mbhmbkxq.html

TS:   // 同上
来源：http://www.aibaodan.cn/163mvnfclgm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163fsvnnyvj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163atrnlsnm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163wiojiaql.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163cyeefnih.html

================================================================================
来源：http://www.sxryk.cn/163qasifkwk.html

G. 面向对象
来源：http://www.sxryk.cn/163nniwzcro.html

================================================================================
来源：http://www.aibaodan.cn/163qnamdndq.html

[G01] 定义类
来源：http://www.sxryk.cn/163asbgbrii.html

Py:   class User: pass
来源：http://www.sxryk.cn/163adghmlhs.html

PHP:  class User {}
来源：http://www.sxryk.cn/163anmaxepk.html

JS:   class User {}
来源：http://www.aibaodan.cn/163phxrnowv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163jxbnzaxd.html

Java: class User {}
来源：http://www.sxryk.cn/163duwthdmn.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ywkwrpcu.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zkedqqup.html

C#:   class User {}
来源：http://www.xuanzx.com/163tmxojwci.html

[G02] 构造函数
来源：http://www.sxryk.cn/163zirgcafa.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vuwskdyu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xzrqjtrf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163mljerjka.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163hqaxxnfr.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ssxvcemz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163peayxouh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163tctpflel.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163txeziufd.html

[G03] 实例属性
来源：http://www.xuanzx.com/163gglykold.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163nzunnlue.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163nybrqrdv.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ruldxjwi.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ynxhhdsj.html

Java: private String name;
来源：http://www.xuanzx.com/163txlwqqng.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163fuqzehjy.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163suxsoofj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163axosguzz.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163nrrapxkv.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163tfgredud.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163bmxivqyv.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163zejpjuie.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163lcubvohr.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163htjvbvra.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163zdugxoct.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163usnlfawy.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163figiqkgs.html

[G05] 继承
来源：http://www.sxryk.cn/163yvkzsvsn.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163vzbccsgi.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163mppkerdc.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ersvbfhi.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qydmarii.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163jyxltdzc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163kscaesjl.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163hwzqazcw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163thjlckil.html

[G06] 重写方法
来源：http://www.xuanzx.com/163yalwomeo.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163zggiddos.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163deypicqg.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163qivvmvpx.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163vzlnllni.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163qzvjimff.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163djzsrlzr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163arrxrbac.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163nmbdncxs.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163hgajcary.html

Py:   super().greet()
来源：http://www.xuanzx.com/163jqsdscev.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vhtwepht.html

JS:   super.greet();
来源：http://www.xuanzx.com/163rernihdv.html

TS:   super.greet();
来源：http://www.xuanzx.com/163gxdofrbb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163wargqjyi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163purdhoqr.html

Ruby: super
来源：http://www.xuanzx.com/163lqtgimev.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163gpftxvhu.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163sgxaxkix.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163tdquyqjv.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163yhfntjyq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163gpweiwcb.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163rrpbjwbh.html

Java: static void f() {}
来源：http://www.sxryk.cn/163wzgsqpxx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163gihqdovw.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163uhnojqga.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163cwsauhjx.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163rjefvagp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ukrmpwin.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163fhdztwia.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163vhzbshif.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163fsdbqvhc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163skuhbbwl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163xllfegpi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163kjqkpmqg.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163yyqqlevb.html

[G10] 访问控制
来源：http://www.xuanzx.com/163qvgszycw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mnvzweur.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163cmogwmdc.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163bmxioidd.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163wptkqcbb.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ztfoqwdv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hbufosip.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163nsinmlao.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163lhxgyfct.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jcbgvcwc.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163rbmzdsxo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163lyeqimjb.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fpjoggdv.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163jhhxpqmt.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163imroefdm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163qvwvsnzt.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163fouiwzxb.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163sumukjdw.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163nyhqkjnf.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163mgqffvan.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163tydtjzoo.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163csjhelqh.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163pqffrxis.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163zpiinjss.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ndyibwrt.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163fatttdef.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ohzdyfis.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163spbbbupb.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163jfrzptmb.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163jchjusco.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163xjpenndq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163xvxyzlvh.html

Java: u instanceof User
来源：http://www.xuanzx.com/163cbjpyrll.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163iosjhbau.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ajqedvtl.html

C#:   u is User
来源：http://www.aibaodan.cn/163vdetiler.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ghxsvxyj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bgifgugp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163fmershqw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ivcvythy.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pvlhoktw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163buenlipi.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163bvilctvu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163bqfxvese.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163gfhogknb.html

[G15] 枚举
来源：http://www.xuanzx.com/163iqgdwpuu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wizmyzgz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163zlkzixlp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163osdooiua.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xcvvbmpe.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163rausqalc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163nmszozuj.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163qktzjjgn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hrqhudcu.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163mcmfijzw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163hmhfuahe.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163gzjzbhhe.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163itgmetyo.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163emlivsgd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163xkjtksgp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163oudtmhcf.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163xslpnacr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163kckykdca.html

================================================================================
来源：http://www.sxryk.cn/163npssxlkk.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163skevwbgd.html

================================================================================
来源：http://www.xuanzx.com/163potejfof.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ganzylau.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163zstqczvg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163rjcfltob.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163lldyekyb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163mphsoqle.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163zkvxxzhg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163xescdlvp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163rdguddkr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163zxidjhho.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163predmklv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163vsgcqzcm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gboqposr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tulotamp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bgvqupkk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163omncvyig.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163wpbzjpms.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zntbajzb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163rhggubax.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163oyqcykxp.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163nwpyuchf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163fbsirrdp.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jwrwcjey.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163utgyihzd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gyavtfxk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163syeskbir.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163odunwijd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163jxdlnbap.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163mmfctghl.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ygklqqzk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163otkydrio.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163khpdedcq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163rizuqtrh.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163eofvomng.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163jcxpnmbx.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163efjowjsn.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163dleewjae.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163disewthk.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163pmlhjdit.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163xfygfbrx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mktmfadc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ypujlflf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163wgdviwok.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ihvdlisp.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163fooxiqmz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163dtkbprry.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163mresmkee.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163krsbelcv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qcsuzlqp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163npdexkxh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163csbsfzly.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163krkoklzw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163mwicrnev.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163gskxprzl.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163dxfwynyt.html

[H07] 断言
来源：http://www.sxryk.cn/163ydegogrf.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163uthcmlbs.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163wostmkaa.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qzdxgkqz.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163penuoiec.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163igbxudeh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163yyqwldig.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163hnsiepop.html


<!-- 参考信息 -->