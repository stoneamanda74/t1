外链999!wailian999！

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163xyvsucxo.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163rdwsypzz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163uoecuodv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163vdaaksdi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zvrgwofd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wgbbzqqs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cgjbamrj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163vjfibehv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163fztkjzea.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ktfttcki.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163kclpdgsp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163jetazshi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163sbsbaspm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163txmemvgl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vafkejas.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163aazleyyn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163hrstoyqq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163hccotqnr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163uaggtaaa.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163jptkernw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163tgbafovu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163hvcuochi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rfjamwfg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kkpwgghk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163hlwvdzdh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163hvikchgo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163iwkxkllm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163uedwiydk.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163hdmdbktg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163fvnniebb.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163hwqejcqp.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tiehnyxw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xgkwznhb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163laefydsc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163dwebzgyy.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163gjqvweek.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163daffjcpv.html

[F06] 删除文件
来源：http://www.sxryk.cn/163kdnjlicv.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163aalxdroa.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163uztornxx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163yybsxhzs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gcbeohxg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vkjucpdm.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163qlyledvj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163cgvonyps.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163cronolvf.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163xtghxofp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163jqpbvfvr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163uazhvsum.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zehrfltd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163quadqxas.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163rajdaory.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hmdqjiuk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163fijmjixd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163flpzwteb.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163pmnivsyf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ogddubdw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163lnlqlsyt.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163quxcbkzu.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163kyxgixen.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fdzdvomx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163bjojdtfg.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163qxquzbil.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163uxpghagt.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163paymnzeu.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qorjjzlx.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163rcjlkzxs.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163pdhdvyeq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xafxexav.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ddacpuan.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163nrrtjxmc.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163srbxwpop.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163huyecoco.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163yxwgtggz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hbhubaes.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163hidxznhh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jzbmnrmj.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163zedkbglf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163uvfvxyag.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163keibuqus.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vuwqemvv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ovrkunad.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163cdcuenwc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mcgtcxvb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163rckcbpdw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pckqkvfb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163honfrvja.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163rfofoytc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163yuvsptlu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ivblafuj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163hdqxnqwn.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163pvitetts.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zrekxfgu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163onkkpoew.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163fwthzpri.html

TS:   // 同上
来源：http://www.aibaodan.cn/163kkhncleh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163rlllbngn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163oyvmpwxc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163uipuvwwx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ufbbsvur.html

================================================================================
来源：http://www.xuanzx.com/163kziuqcsd.html

G. 面向对象
来源：http://www.sxryk.cn/163srltcmna.html

================================================================================
来源：http://www.aibaodan.cn/163tgkdaxxw.html

[G01] 定义类
来源：http://www.aibaodan.cn/163uhybwtnu.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ojdtsuat.html

PHP:  class User {}
来源：http://www.xuanzx.com/163afgqebmn.html

JS:   class User {}
来源：http://www.xuanzx.com/163zjvcgqnz.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163mzgpklek.html

Java: class User {}
来源：http://www.aibaodan.cn/163jksaqttw.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163isohdeso.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vwauhdlm.html

C#:   class User {}
来源：http://www.xuanzx.com/163dsgynnqt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163qsiwlaue.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163udkenaok.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163atmddick.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163pbivnojk.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163zgxwtmld.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163umlsuvig.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163wfflkxlb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ymoutqfe.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163yzlpimay.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ceendmci.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163sdrtlmya.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163rhlutyuf.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163spujxojw.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ukdzocrs.html

Java: private String name;
来源：http://www.sxryk.cn/163xttrdaxl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163bxzzsqdb.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163jpwlcmwb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163vhkbiokr.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163guktqnsi.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163lbazmdwx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zhjofdwj.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163fmshopbg.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163givxmjwj.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163huucmypw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163hjsgzuxu.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ubfmmaev.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163qczvblab.html

[G05] 继承
来源：http://www.xuanzx.com/163qwaejkny.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163oiohfyqb.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163iqjmrkza.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dpuihunh.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163abjkglzq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ykfduagn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163kwjaxcdh.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163bjpncqqf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163mxkoxglq.html

[G06] 重写方法
来源：http://www.sxryk.cn/163xvnkevdh.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163cmienzev.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163oqnngdzf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163btjdzuei.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ihnabekc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163pjrjwnpn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163benynpez.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163otjqlkgz.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163yoyaadrl.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163gtrwslbi.html

Py:   super().greet()
来源：http://www.xuanzx.com/163lylcqqox.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163iqnvmgob.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163cccwejxc.html

TS:   super.greet();
来源：http://www.sxryk.cn/163wegdgapg.html

Java: super.greet();
来源：http://www.sxryk.cn/163bbdtvbop.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163mdrgsgzm.html

Ruby: super
来源：http://www.xuanzx.com/163gcepqxzq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ezlbgkle.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163qjzkcdvx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163maggfvur.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163krplyklx.html

JS:   static f() {}
来源：http://www.xuanzx.com/163fypbdpko.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163pazbzkfy.html

Java: static void f() {}
来源：http://www.xuanzx.com/163hjyydqsu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163qsgbocnr.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163fghwrsen.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163eygepfgm.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163qbmsoxjg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163uzssqxpp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163kelpjswu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163uvhyottn.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163jxkdsojz.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163jhpopupd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163gmroxpzc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163tbnqaqir.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163tuymgdir.html

[G10] 访问控制
来源：http://www.xuanzx.com/163rwhhwcai.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163pagximcl.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zdynqxos.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163mcjpukfs.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163pitilhmm.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163sesgjsao.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163dhaodmgm.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163gkbazlhy.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ieigfdil.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tchpppcp.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163uhrktjtz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gckyvbjp.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163lmyvpbug.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163idsdrvuw.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163qpvpkaja.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163nqcepnex.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163aclufqtl.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ogzhburu.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163lmisovag.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163zocmdruy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zqbgbisi.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163dygjidgh.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163xvrcvibm.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163hbjtlxga.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163hsqgjlpb.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163jsewfznv.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163cgjqwtgn.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vwdqlamx.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163kfqjwxig.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163pqpjdyzf.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163hmbvrhho.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rfdmgawf.html

Java: u instanceof User
来源：http://www.xuanzx.com/163tknykpwu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hwdqjwye.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163jbvwdyds.html

C#:   u is User
来源：http://www.sxryk.cn/163zqhpnxrm.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163uobmwbjv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163goomukik.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163dknbbcri.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163lthwiiaz.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163tudlxsuu.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163nrauecva.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ojaghixl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163vmcrpojb.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163yirainjb.html

[G15] 枚举
来源：http://www.sxryk.cn/163rekfemlq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163hpuluxpy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163lqlousgp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163alnsouzq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163eqacdctu.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163bhcfufgk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163jvpbdhew.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163hotekhhp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163kheqqugw.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163cpiokvnt.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163cigxspww.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163wayxhnue.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yilinzgl.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163byyvmigo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163dzkrjfua.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163guktsbvu.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163zyuvnete.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ddoogdkv.html

================================================================================
来源：http://www.xuanzx.com/163credpbym.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nztikzea.html

================================================================================
来源：http://www.xuanzx.com/163artltjxf.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163qqatided.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163dxibbbyc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163vjtapkmd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163swddmjmp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163knxkhaqw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ehjoasef.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163lyfduisw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163lkrskgvg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163nbsaiuwf.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hrnxykbs.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163zhkcnoch.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ezwzglgx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xjrzdpsl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zmbivbeq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hvrfmmds.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163mxyovprt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163micytira.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163yhtxhoix.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163dhykenqm.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163hvdqqqgq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xguovdtp.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ibxwpery.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163avynewpc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gbozrzoh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163jwqnisgp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ejkszfxu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163xwlzbfsj.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ssoguoyp.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163eogcnhjw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163itqwjoqt.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lyfzdjfc.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163binbebps.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163dsnsnxnu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163umelbuht.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163etiaxkqe.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163oxreqsuk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hrexazun.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163rsfgqqfb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xjomclkb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wvafslsa.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ccwmgima.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163juvbckix.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ytathfdl.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163crjtiqbx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163xndmngrf.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163exexguaa.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163wnqktmlq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163tfkstdrx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163uaoqzanb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163phgejgfb.html


<!-- 参考信息 -->