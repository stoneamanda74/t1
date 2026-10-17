外链999!wailian999！

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163lxcturye.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163msdrveud.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163bvsggijt.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ystsyiqi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163fqtqvtdh.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163vizcteuh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163febxrcmx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163plaaxykz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jtzzcpjg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tczgezqt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tfviefzm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ntawxkwr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163krovnhsc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163wyvtjbhd.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ocglayqx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163yzszdyne.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ugtezqwr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fvdhwbph.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vtdckpas.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163yefvdqxy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163hyynfmps.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163stgsstbu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163lypuxtrh.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163eetjfzox.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163piqpggpl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xtqzziac.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rmrpthch.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ljfbmdyf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163kwzbfvxd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163apdyaovd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ttitxpgs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163mrtyfnaw.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163tccxnlrd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ogzdehge.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ugixtmfl.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163koxnwpgh.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tjhdwuxj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163maxtslid.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163haavtexc.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163fvfmrqil.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163mrointrm.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ooejvrae.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ktwfegro.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163essojzgc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wbkljgau.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dceobwwa.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tqvmplgr.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163buaikvzb.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163hcvnemcd.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163qzfaednm.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163xcxixzpj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163pomihokr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ahhvxtge.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bbyfiunq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163msajefgi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163rgjsbhav.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163oftgdtwm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163duebvzba.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163mzsljeso.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163muiozwvu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163cmvkzqrr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163oapxdetu.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163anuliuyo.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ppkvrwrt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lcotfljz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163vvzbnsou.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163tkswyejr.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tbkwaiyj.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163bkmkffam.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163vknqruqo.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163xgsrdqhk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163fuhybzro.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vxvunjun.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163usqiuzbg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163rajodvvs.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163qbehunmu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163xbldeioa.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163tklyhjlt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jlvlecxu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163jnfugxeb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mryyhhgy.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163jvjfjjyd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163dnvzixtd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163dkvivoiw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163oiyindpg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163iaymednn.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163dssodkbz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163eqvbjhdi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163tatyawfr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dacmfnbr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rjhpsjzl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163tznjlllb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163srszincq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jjzppotj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163fvekotad.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xjcffupf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163tsfufeae.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163xunhfani.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163jzadleqb.html

TS:   // 同上
来源：http://www.xuanzx.com/163jkyennao.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163igmikmnj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163qrvlvefs.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163gftuhsgx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163heggxrnh.html

================================================================================
来源：http://www.xuanzx.com/163tkxlqsed.html

G. 面向对象
来源：http://www.xuanzx.com/163ubreadaa.html

================================================================================
来源：http://www.xuanzx.com/163lgakoiuo.html

[G01] 定义类
来源：http://www.sxryk.cn/163vvrvmutu.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hyoqxhew.html

PHP:  class User {}
来源：http://www.xuanzx.com/163pmfqjxdu.html

JS:   class User {}
来源：http://www.aibaodan.cn/163yfztxsqi.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163uylynhly.html

Java: class User {}
来源：http://www.aibaodan.cn/163jbvgmvsl.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163opskkhvu.html

Ruby: class User; end
来源：http://www.sxryk.cn/163rnvsojdq.html

C#:   class User {}
来源：http://www.xuanzx.com/163axtzznvc.html

[G02] 构造函数
来源：http://www.xuanzx.com/163qjdxsmrv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163glosvrdx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163dpaxakjc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163kkpaaxkl.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163zccyxtru.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163uivkaiuw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163oewkarmd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xvqzwkhj.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163xuqbmxqc.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163lqghuclc.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163evkdqiyr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ubhehetq.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163yexlaxwc.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ajfpubqk.html

Java: private String name;
来源：http://www.aibaodan.cn/163lbryjijb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163lbmnzlux.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163spygylmm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163oursydah.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vmuhxfiy.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163dkfxvoiu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163eawxvthe.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ozwtsanz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163zyjvymfk.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163diwfavxw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163wekjddsz.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163cnebjgmm.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163wfmmbnqo.html

[G05] 继承
来源：http://www.aibaodan.cn/163jnswyoqx.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ichmpiiu.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163lutfolra.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163iqprlmbf.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ogzmagrk.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163upqwgucl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163nadsrvdh.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tqpkgywv.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163jrycnwnm.html

[G06] 重写方法
来源：http://www.xuanzx.com/163qisvrmyk.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163tkfghevl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ocwjfhkl.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163mdycsizt.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163kaahhlln.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163czgksiyo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163pwsgawur.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163hydcrlnv.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163muuwkyeh.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163xvresbgx.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ynbgejsq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163bretugil.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ilmwgaaa.html

TS:   super.greet();
来源：http://www.xuanzx.com/163dtairulr.html

Java: super.greet();
来源：http://www.aibaodan.cn/163rxscrrom.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163qesrldww.html

Ruby: super
来源：http://www.xuanzx.com/163lyrxyoog.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163inhzekwk.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163bkjkjmkh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163iwwtjmvh.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163xkgyqroj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163pgfwdpoq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163zyvouyqo.html

Java: static void f() {}
来源：http://www.xuanzx.com/163nxxivjms.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163yedpbjsy.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163okqistgv.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163xigpfosy.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163bzyoeyyv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163viyfaxuw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163nhgjvouq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163yntoduqh.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ujrizhqy.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163jsrvlkfw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163esypiucj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163rlkwmsxj.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163nlfswltv.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163xlqambwp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163tghkpatk.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163oawpkxwc.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163gxewavdz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163gkobgwra.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hrjhjxrx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163hnkdaexe.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163mpgsklbq.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163jquhrwsk.html

[G11] getter / setter
来源：http://www.sxryk.cn/163wsdwuzmk.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163oochykhs.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ufapvppw.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163vblxkhxy.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ndqpxhrf.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163nlmxrwde.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hhcovmuf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163mrgvohry.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163tbfruvoc.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163xtekireg.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ogenvsxc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163mwwdgwmx.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ntmcnxvc.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163xfdvqwpv.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163jaioufut.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163dmptyghn.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163syycvedj.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163nkszfcdy.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163mednvcdf.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163cnkohdpt.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163imdqwctc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163jfimowgi.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163wpwhspsl.html

Java: u instanceof User
来源：http://www.xuanzx.com/163nlbnrlad.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pyztyxgg.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163srzmcqcn.html

C#:   u is User
来源：http://www.sxryk.cn/163nwgagzhw.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163wypqwyjy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163dooduirf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163valowpqf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163miislfhu.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163trergpsk.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163dhiwcolm.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163xywjnvlz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163lbxjwtik.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163kfrvxmvv.html

[G15] 枚举
来源：http://www.aibaodan.cn/163kknoserd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163cnnmgeaw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163jggpdrrg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163pbmpjsbn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nkfdbovj.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163bqojolbh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163zsonlqdv.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163hykciaci.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kjiynsxi.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163jwpkbbil.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ndvmpmqc.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163wmhowmdx.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zgkrgmdo.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xkamhvib.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163uhotfvon.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ljqrwxev.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xthnjxdh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163skseedvz.html

================================================================================
来源：http://www.xuanzx.com/163gqxdusbr.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163fiikblyd.html

================================================================================
来源：http://www.aibaodan.cn/163upshypft.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163hbggkqbq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163kodlqnfj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163nxahtqpr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ibnaxrjl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163abbszics.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163txwglkno.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hxtqhtdl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ugweiqoc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163oixyfrmc.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163mnsectpd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rcgxmvgf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ptqrukid.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pkfpcsob.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sxruqurh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xzemccgn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163awkwgwrq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163opntmqrh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ryotoxbt.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163okiwqnhm.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163lsujbtti.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rlukmzth.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163saettcgb.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163sgulrkqt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163mfejemgu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163xpsolazq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163chipacgn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gqihojki.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163vgmypyql.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163zobalvdc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163tbntmsqs.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ejgpkrxx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fcooqsou.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163kyjvrkha.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163snsyakcx.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163abkcffny.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163jagwvahp.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163uxnhlclf.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163nvprdelo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163xdddpqiy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wbpmvwyh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cosrbsym.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163hchugdhd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163uooayjgy.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ohllakyo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ixvhzcxf.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163kjjbngov.html


<!-- 参考信息 -->