外链999!wailian999！

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163jurihjmn.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163gxguavsr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163frrdzvvs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rkrznufm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fgmybdxi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kcbmvtlm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163yevybbot.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163xmytdrln.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ucyugptq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ozvidhuh.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163okfunqgb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ggugwhzy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163pemwdjqy.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nsslblxi.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pfiohmgi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163hjhuhvcm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163dclrrxwj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ijsyktyf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163iwctzxtm.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163rzysiivz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163esmmzvhr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163nvwmsyqp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qerjupzk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ggvzlgny.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163dqaxvyht.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163tdbzxndg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ffbghhto.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163vkxdpdqa.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163jxbmrzrx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163effvxhxj.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tczmfega.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163fmstydbq.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163exbrhbjb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mtwmpqga.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163eavecpde.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163guiphzyt.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163oovcaawu.html

[F06] 删除文件
来源：http://www.sxryk.cn/163swmdrbpp.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ooqqhuia.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163vamkompf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bupcqpac.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rspabvhj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ejbgydmj.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163auzsgilh.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163cpxwzuyl.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ywafvifw.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ioydnvzl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163copdencp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ugtmnskq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ulawxbma.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lrlghcol.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163cmygsjwn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163uvqwblty.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163dcrazyvb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163zmhjkmpn.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ldoxqrms.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vermgobu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163abfdmcaq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vnmjwuxk.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vgknxnac.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nshtriwj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163rhhhihty.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163odlkekxi.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163pexuhfvl.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163elsjtjbj.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163wkzjtlgx.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ocgpdhid.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163oxbjjcxf.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gwoyrtwr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zlphzogx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163cymumdqh.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163icgpxlnt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xkmxruwq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163stlrnjve.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163agntbpdf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163pxllmere.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ocbfzuvy.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163btqoodlg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163iokogfir.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163vodeqeqw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lvbkhsqc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163xmpfqagh.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163cfumohhq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sgtglbab.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163qcygdbqs.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sagscijh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ictsxzht.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163clltwbjd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qgzhpble.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cwotgrto.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163pddgrgem.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ioeisqgj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163fcjydkun.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163orusfdqy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ltwgfwnf.html

TS:   // 同上
来源：http://www.xuanzx.com/163cwbspqkl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163rcrgzydv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163btbrbydi.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163xzlcjzps.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163hamxetiv.html

================================================================================
来源：http://www.xuanzx.com/163xtdoqmep.html

G. 面向对象
来源：http://www.aibaodan.cn/163yqujnkws.html

================================================================================
来源：http://www.xuanzx.com/163irwumrxq.html

[G01] 定义类
来源：http://www.sxryk.cn/163csnrkglc.html

Py:   class User: pass
来源：http://www.xuanzx.com/163gkyrtvll.html

PHP:  class User {}
来源：http://www.xuanzx.com/163bhjhughm.html

JS:   class User {}
来源：http://www.aibaodan.cn/163rgyxwwit.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163hrlmvbmj.html

Java: class User {}
来源：http://www.xuanzx.com/163dmtwuufo.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163jcqepohi.html

Ruby: class User; end
来源：http://www.xuanzx.com/163lmwamzlj.html

C#:   class User {}
来源：http://www.xuanzx.com/163hpermdrg.html

[G02] 构造函数
来源：http://www.xuanzx.com/163payrqeea.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163hjqyjqos.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163vqdwrnck.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163wzxippct.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163foexxrpc.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163rtiwcnml.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163foezejwi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163bvroowrk.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163qrrvmtni.html

[G03] 实例属性
来源：http://www.sxryk.cn/163yfufcmop.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163cudpvkyy.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163wipaloxb.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163luvlbwhs.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163afnnlsok.html

Java: private String name;
来源：http://www.sxryk.cn/163lnxcaryr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163skxfddpr.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ugxoxtjj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tucyodrg.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ctfjmdem.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163heymfjfu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ldjqgjjh.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163fgccqgns.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163cbuxsezv.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163uwtkyxsc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163pqglmwsl.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163nmrcopsp.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163swizqylf.html

[G05] 继承
来源：http://www.sxryk.cn/163xxzhdkvn.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163phlpsoov.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163joigrlcc.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163yjuxzthl.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ptlsxirx.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163cvseahfz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163tennxukn.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ymxmwxzq.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163zxchlgwi.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163hrjtzoeg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163jbwyuanz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mtjpvjfa.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hjpszyby.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mfnzhoby.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163rbtzemnn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163yzpscynq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163rmnyswfr.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163oradqntt.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163mmohhlco.html

Py:   super().greet()
来源：http://www.sxryk.cn/163adavconz.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ytegzeji.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163pwghyuzv.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ewfejzeg.html

Java: super.greet();
来源：http://www.aibaodan.cn/163uefffjll.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163weovzmbu.html

Ruby: super
来源：http://www.sxryk.cn/163hhudukqa.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163lwlbheeo.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163riqvqwai.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163fajjlksm.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163xxxaseac.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163bzutvupm.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163culdqgvf.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163fxoralwp.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163iuzamfcx.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163yludqems.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163zpcwziak.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qqyyxyvo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163wodspbox.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163cjkoislm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163auxqrtvf.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gqcqvhrs.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ammobnep.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163hrdxglwk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163qqrpthou.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163evavejks.html

[G10] 访问控制
来源：http://www.xuanzx.com/163pepaluab.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ecafsjkq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163abgltejq.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163eywckiur.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163zvrwbtkk.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ofxuxizf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163epvnczmc.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163hfgwkgax.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ymjkdmaa.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163wnanvfmm.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163buefmygr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163apmiejdx.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163yjvmczco.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163tczngers.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163uwyxuzdg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163nvswjtdw.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ylmgtivn.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163queljbna.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163aipmcqba.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163jsivqiqm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163zanqujuf.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163dqpwlgqc.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163msxjapqh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163mqctzfbb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163gtmdaypo.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163qwetbiua.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163kzicleqj.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163htskyiay.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163zflxyjnm.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163icmaknzv.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163lvqrqtkr.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163qjgqbrbt.html

Java: u instanceof User
来源：http://www.xuanzx.com/163pznyrixe.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163iuqatyan.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163jpuumfom.html

C#:   u is User
来源：http://www.xuanzx.com/163ocknwlxh.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163hynlnzak.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163fssejbwf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163bmperwwt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163jxycdnjh.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163lsdehdzl.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ooptqgzt.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163mvwbqeas.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163aktizvep.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163nwszriuk.html

[G15] 枚举
来源：http://www.xuanzx.com/163ezrrifti.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163qdtoxcmo.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163nqhepwlf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163rdlranit.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yzzcnajp.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163fekngoig.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163rxrpcjeq.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163aglfubvc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fdyokkic.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163xsiimgky.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163mcbhcjnb.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163zmsudtsk.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qtwnpubj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ywecfnos.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jbeycubi.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163tusfjtvm.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163xjeoeaug.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163culbucdc.html

================================================================================
来源：http://www.sxryk.cn/163xgyrkiip.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163tyefsskb.html

================================================================================
来源：http://www.xuanzx.com/163ohbsgbka.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163jyisbstc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ggdwnthy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163rmlqeyfa.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163uyzgjqnj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163muybwdck.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163iudsdvfb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163tgijmuap.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163snoofgti.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163zhyvwpyo.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163swppkmtn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163wdimvbjs.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oaynvzxb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xealckml.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kdpkallb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qwfyyygo.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163wtrqvuhf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ywymuldv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163qjirypsq.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ngpkeflc.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ftndiarm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163vavefgdy.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163yawewwld.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163vdvjakst.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163qqkttdci.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163vhydayfn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163itypdmai.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zkxiqtom.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163xzahkpon.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163yncqnuik.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163osxypcyl.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jkdjbaox.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163sehlyezw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163onvadnan.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163spgjugxv.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163bcepexmm.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163rpxqigqs.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163sryszfit.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163eaofzxcx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163oijqheli.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gugydegs.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163tbioaswc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ldqmqszn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163lkxwubyb.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163azouefss.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163nqkomkyt.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163lnkcrvaf.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163fjwiudgy.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ohsksvok.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wchiadrb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jzlngout.html


<!-- 参考信息 -->