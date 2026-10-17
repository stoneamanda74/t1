外链999!wailian999！

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163euhjfvbb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163igtmiiue.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ledebzrv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ldejcxya.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163pnuxmikf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163esrzogme.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163nuvarffi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163dykundxc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163qkkelcaj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rwsngxpt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kvpobaqv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163qcwjxmka.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ryvfqsoa.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163hxurycpu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163rxansosc.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163zlclcvme.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vwjxjjfj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ttnuirjb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163enjdswis.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ailhfrrx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ujrsdsiu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163uuhkcobh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163fkqqrrai.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163iglsbafh.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163oaltncti.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ijvivepb.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163neirdzyg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gvyiibar.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163pigbnvak.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nufzagvi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163peqzygcg.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163twrjlfyk.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163rtrfzmud.html

[F06] 删除文件
来源：http://www.xuanzx.com/163cwnmuehx.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163tngpdywa.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163dkgljyrp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163bvxesxqz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qicrqrxm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nssdfpix.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163wrwhdzge.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163liuloiem.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163lmhkinyf.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163jmbzuuqe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163dshpwyas.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163uhmkcgwe.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bvaykmqf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163itfvlwcm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163cogxlqke.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163daaumdzy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163eiyamvcs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163binxodhd.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163kmrpclsw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163evgmiqya.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163uyhccpgs.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vvodfwvc.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163prqtpfeg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163aeloeqoo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163zvthmdvy.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163qunwvibx.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163smjacgki.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163jjtxwzdl.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163pbdwuqnp.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qqnqcrfz.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kbhhiuvm.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163skemfsqt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sojemgut.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163jrcyesor.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163tddzwxbh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163bdsqemwx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163uybfuprj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xqhvieae.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163vqizltwv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xngypszy.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163rvtdayas.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163oludtiwi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ylxhhzyx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hfecahhw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163nuyzjhoy.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163lgwvpvur.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lpfrprja.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163qtbqxuls.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dcjwxgjb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163peuzrlpb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163vhuekuhj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163uwozpiir.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hohmsjhl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163cyxfcjaz.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163vjwoczax.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163jgdxicbm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163gcfwrhws.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163merkhoji.html

TS:   // 同上
来源：http://www.sxryk.cn/163fmkozwmc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ohkmhaip.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163fcyccdou.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ncwdqcbb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163cgqjnhly.html

================================================================================
来源：http://www.xuanzx.com/163ifkzciwg.html

G. 面向对象
来源：http://www.aibaodan.cn/163kxqlozrc.html

================================================================================
来源：http://www.sxryk.cn/163flakiwsm.html

[G01] 定义类
来源：http://www.sxryk.cn/163vxznppbw.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163bhfnpqwt.html

PHP:  class User {}
来源：http://www.xuanzx.com/163pmdcvzae.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ohoaioje.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163sbzbuydc.html

Java: class User {}
来源：http://www.aibaodan.cn/163zyopxyvv.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163jcnyniap.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163townkggl.html

C#:   class User {}
来源：http://www.aibaodan.cn/163mpwnvxlz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163cnzwtiln.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163xczwdgty.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163dzuxipqm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wyuxslnu.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163hgslzhhg.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163phawmang.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163xqidqflf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163zlmxjsnb.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163aumgaohp.html

[G03] 实例属性
来源：http://www.sxryk.cn/163layssiai.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163xvgzuckc.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163zsllowxc.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163jjgytorr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163yqrozjck.html

Java: private String name;
来源：http://www.sxryk.cn/163qodskqor.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163gkydjqvd.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163xpgcrtxr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163owytfqnq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163qzzxdgox.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163fwkcnkbx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mjswwwmt.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163mhsifher.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163kubxbndz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163jzppdyyj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163vpgeubdx.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163wyhktsqf.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qtkfgufy.html

[G05] 继承
来源：http://www.sxryk.cn/163omsbktks.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163zuwdoclo.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163kkctpvgl.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163tsigulpu.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163sjhpqhao.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163cxpqwoyt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163lzhzfpqy.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163eorsjkog.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163grfqcqpi.html

[G06] 重写方法
来源：http://www.sxryk.cn/163mbjxzxqa.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163rjmwcgkw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ynbixyfx.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163iwnkawdh.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qnrjcnwu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163qhtqvenf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163kmjpyzxm.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163gvzqiuqg.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ytsaemzg.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163jbjelgcc.html

Py:   super().greet()
来源：http://www.xuanzx.com/163unlybhba.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vkhhmwue.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wuycewaj.html

TS:   super.greet();
来源：http://www.sxryk.cn/163koqqxfdc.html

Java: super.greet();
来源：http://www.sxryk.cn/163hfnhwsdb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163nzmdwbwi.html

Ruby: super
来源：http://www.xuanzx.com/163ghogrhib.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zmgfnnpb.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163qlclrrid.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163jpqkcnyq.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163onswqbku.html

JS:   static f() {}
来源：http://www.sxryk.cn/163rplbazqz.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163wvhwjciw.html

Java: static void f() {}
来源：http://www.xuanzx.com/163luwrtttg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163jwqzoatc.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163mgnobrcv.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163xdszjuen.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163fiicgfmj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163gmgxnzoa.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163dskqmaax.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xitpsqqw.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163abspykqe.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163wsywsike.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163jyfwpoil.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163rduzojni.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ohyxzhdn.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lciyqrhr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163fubxhfjw.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fxaqkusr.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163loiutljy.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163eigoicby.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ecfesspy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163sjyuolyw.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163mdujilvo.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163sxcygdpu.html

[G11] getter / setter
来源：http://www.sxryk.cn/163gcrwfanr.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163nsxjxpko.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ucohlbzl.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163grqyiplg.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163aukpwzqd.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163czlonyoj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163orqgqgkl.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163igxqyqyy.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163sblorwnb.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ixbwhxry.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163hlwdqvpn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163kjzisnjg.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ctsqevjx.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163tbblldsa.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163eqrfndto.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mmlndmuu.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cflwygeq.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163tticnywz.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ofccfcjm.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163rfumifdh.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ktfqfxpb.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ssbmrhzl.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163idqeikeq.html

Java: u instanceof User
来源：http://www.xuanzx.com/163euzqcqlj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163cnymenqo.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163fnstqwwa.html

C#:   u is User
来源：http://www.aibaodan.cn/163hmiolyvx.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163sixobaoq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163socoqiak.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163xjxxhzuh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163speavqru.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163zxrpmbiw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163uifeplbe.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163gklslzqd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163mwjrurox.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ehlrsgrt.html

[G15] 枚举
来源：http://www.sxryk.cn/163exuwtcio.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ewqtvmxs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163eekjlpzq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163zcypwwlp.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hdeqsmlt.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ducuvnxq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163hdcpuwda.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163rxoknyju.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163plndkuxo.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163oigrdrnc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163twdrafem.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163pqphaakx.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zcegahuj.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nkvrreyf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163vmbtzbom.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163bultwpkz.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163qadrhhom.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163gwuadbiz.html

================================================================================
来源：http://www.sxryk.cn/163rbkgamrv.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163csdcxbms.html

================================================================================
来源：http://www.sxryk.cn/163lkppcwjy.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163zfsltbst.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163szvgolfu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163zzsmfizi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nqbvgsic.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163gjgzdvjl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163vuxruqfz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163wgriqlhc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ysvhqkod.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163hlnoxrwe.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163hsgrnuus.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163mqsrhmvh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fvrdzgnr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ewwsspnz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fhiufctg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jxnwkfun.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163hexfthbc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163yflqmvbk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163kdcbtwjf.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163kecyjgnu.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163rwkkavwm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dfybctbe.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163yxvxsrml.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tqkdgswt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163snpajqmz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163nhdgjtol.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163jeiownpp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163taavnkst.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xadziiaw.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163wsjjehzk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163wnvenche.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ryuvxlcm.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163mwbyuahu.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163vokcmscc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163dgbsqcvu.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163vobmlcqv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mkrulpuj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163cexltcwj.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163thqunbft.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ywiqwxdq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gomveror.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nrdgbcor.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163tnsrllup.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163xwqewldj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163wiqagtjr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163shffwroc.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zesxjshs.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163jhalpken.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163gumanoce.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163oeedfoxr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pogxcuiu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163pewigwth.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163rfsgnsgq.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163oibmtgbr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163nzvlveno.html


<!-- 参考信息 -->