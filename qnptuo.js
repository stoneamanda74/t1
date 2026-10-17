外链999!wailian999！

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163dmgzxdbx.html

================================================================================
来源：http://www.sxryk.cn/163dcjbfeki.html

F. 文件与目录
来源：http://www.aibaodan.cn/163xedyyuls.html

================================================================================
来源：http://www.aibaodan.cn/163poawpuks.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163jowybaxw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163gmfckxhg.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163epouyjjg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163uudgnnwj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163kkxelobb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hbjvmrwq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163yxkkkcyc.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wdaiemlf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163wtrluuxh.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ohnecvrz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163vohmizld.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ljzsmoax.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nwqumruz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ipmzrtjl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163tbygzmmj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163pcekfftl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163idafbpld.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163wdcgexqw.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163kzkungrj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wdmgqxcb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163nfyimqot.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kvzpaqtw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xrjrrofe.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ectqwdyn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163gtjzwrjk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163dojiodxd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163kdasyfih.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163hkjqihzv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163hmazhbpt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163mzxukaox.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ytgetltq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163usdswriu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ktximdnm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163pbzcahdb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ilqklfbp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163xrpmanay.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163yljdhcjg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163blnsvsow.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163vznzlrzu.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bfhzocna.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ywovwzec.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pmtzclti.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163qzdwesfn.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ppkvagab.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163kyuobdig.html

[F06] 删除文件
来源：http://www.xuanzx.com/163xtgsuikg.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wedocodf.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ozhsazii.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vflahpqc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wpzmdffc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yrzhcicr.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163khjirrvc.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ptlsrdri.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163qcjyjtqs.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163wkwozaib.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163jrxsgnqg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163fkhcbwrn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nmkwgajk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163dxlaxyzr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163xrycmbie.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163phgfkrdk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163yrpzjcco.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163uhtxoksz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163abimyksa.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163cwsnxrou.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163bprbasck.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ucgepdwo.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163wzazpbdr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163lbehnwar.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163vhwghdmy.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163qtecilou.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163lvahtwmk.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163rdpfplcg.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163cqougjdn.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163aqhdwfqw.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163erttlpjv.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ufwmseta.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wnvnzchk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163xgjyvzcc.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163arstivbu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rewpklrm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nidvqzjt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tlgfpbhp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163zffesoye.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xmwecepn.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163yxqdyqks.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163yecpxfrh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rwpakshy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163iaqvazjj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163knobwxce.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163cydkvhiv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uifxqlxs.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163jupetxpn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163imzzqekg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163peeqdihj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163plaoyqww.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163cjxgbyrx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uslzonhb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163jhoucqxj.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163vxffxrdq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163geyttehp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ovzmtbtr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rxjgqxfs.html

TS:   // 同上
来源：http://www.xuanzx.com/163rwnswuqk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163fevkzmvj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ihkbpdsk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163thkpxcpf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163cgrbdgjo.html

================================================================================
来源：http://www.sxryk.cn/163haiqesxl.html

G. 面向对象
来源：http://www.sxryk.cn/163vedeeolv.html

================================================================================
来源：http://www.sxryk.cn/163xkapuwrm.html

[G01] 定义类
来源：http://www.xuanzx.com/163twzytrmi.html

Py:   class User: pass
来源：http://www.xuanzx.com/163vbakzwgf.html

PHP:  class User {}
来源：http://www.xuanzx.com/163vbmfomyl.html

JS:   class User {}
来源：http://www.aibaodan.cn/163qjxaxhbk.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163kdqnahpd.html

Java: class User {}
来源：http://www.sxryk.cn/163zemdyxxb.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163wxwqhbzc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163koeypmkc.html

C#:   class User {}
来源：http://www.aibaodan.cn/163kebdzvrv.html

[G02] 构造函数
来源：http://www.xuanzx.com/163trcnxjof.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qzcfvjwr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zodlhelc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vcgcfdmx.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163nidvwrzs.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163hobegdxs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163rlponhbb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163scdjosgk.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163avycxxfm.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ihbvmcnh.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163fnhvuxcm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163zmbrudcw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163zmcjvtbg.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163apgbvtfz.html

Java: private String name;
来源：http://www.xuanzx.com/163yiotrdrd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163nodvhpgw.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ltcszubv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163fdltunsa.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ddeozyph.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163shyvbtss.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163whlrnqfs.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vvghgipa.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163avxaccgq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rsbueytq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163yojdjbnn.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163sbjsyptm.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163fmoicaxx.html

[G05] 继承
来源：http://www.xuanzx.com/163tktsuhmn.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163qmefahtn.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163czghzuby.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163sbxpbmpd.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pielhmrz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163lgjsqbih.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xlchxife.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163rsavuxvf.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163tkzcmqpq.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163otzpfcvy.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163dtdaxulc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163doebvzwm.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163tltujjma.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wpdzcymb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163rodsnklf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163kiehxeva.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gdkhncav.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163nnxkzbcj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163apwosxlx.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163wdnfwkct.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163qprtkmze.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163mithwjol.html

TS:   super.greet();
来源：http://www.xuanzx.com/163gvhjzaha.html

Java: super.greet();
来源：http://www.sxryk.cn/163ztlgvneb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163tznuuqiu.html

Ruby: super
来源：http://www.xuanzx.com/163fzpabvxn.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ebbkawod.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163eivahems.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163cfhnljai.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163kpfrvhvs.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163xishgxxi.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163bcnbwbgj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163qhylhisv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163thkkueth.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163oupvfbdf.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163mgyydbmo.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163idgdmwut.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163pxctfncc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163pjpuddtx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163owcqnzfc.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163wfsnikpm.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rdbobogv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163vhywcoqi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163zngryhmj.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163angtfmeb.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163fnzfscqk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163zhlswpzn.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163zmpxfgmr.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163bzltphbx.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163npqwxesw.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163qptpmixl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163tsfswzzd.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ourechgi.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163qfsrreiq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163qabtcemc.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163lzrbgiwu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xjhmajto.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ibtxfuei.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163sqotzcwo.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163sojleliw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163qjzkmyhl.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qumlbxtb.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ugbookmh.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163lpsozjbn.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163pxciynry.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xxxewoit.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163bxsngqlo.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163dxsqwsex.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163boaugysy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163tnfthwyr.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163gylaigqa.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cnbbjzpi.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163sqtrhscq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163wvppogzr.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163msjioypr.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163fymakehx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163noehkwgx.html

Java: u instanceof User
来源：http://www.sxryk.cn/163pvfwxcxc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163szvefdez.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163dxppgrtv.html

C#:   u is User
来源：http://www.xuanzx.com/163bpjwtsns.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163rrkjrljo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163mrjwwdsz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163hvxylxdy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163naplydgg.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163byxvlesa.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cdbwbuyk.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163bgqqmssd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163jcnmnncn.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gscmewvl.html

[G15] 枚举
来源：http://www.sxryk.cn/163pdschjqy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163iktxklip.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163wbippefj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163abmywimf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pzborzfv.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163yrvrlwpe.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163vkzcbulc.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163wxznuzel.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bikufkyy.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163arxtbtgw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163cxzyduax.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163txjlphss.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163btadqfex.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jsmiwmhu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ykfbyjuc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163lghwxndk.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163gnxcogbh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163xanhjaha.html

================================================================================
来源：http://www.aibaodan.cn/163docqkvtv.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163utcyqwvg.html

================================================================================
来源：http://www.sxryk.cn/163shtdbfuw.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163cchphbgs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ejunyyyl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163yomtlvrd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jczuxrbe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163tgulobgj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163rzixsggo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163pfwwgfvv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xkvxjvtt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163aygurrdv.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163jpiygzrd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163xneapljq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qcsdgzvt.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pzduryrt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mvpbkubr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mvnmaruh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ddhuhrce.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ubljvvqc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163bfoqvfja.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163daeuivln.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163vcvcsndq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ulxhduhf.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163riutyzvv.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lozleezr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163rzdtxkpa.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163vuxzjniy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163foymbysm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163pjovzxey.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163iapfesuq.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163btjgnmvl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ymfjyyvt.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163lpipfeik.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zvonwfgz.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163aflfcmpd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163rcgubzgs.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163xssgmipu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163xgbaefdu.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163qsbjdosj.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163jdgvhvev.html


<!-- 参考信息 -->