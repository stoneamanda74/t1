外链999!wailian999！

[F01] 读取整个文件
来源：http://www.sxryk.cn/163kbgfhagw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163jshonfyg.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163jtdbdbqx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ghvbobxs.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163idrbeuxt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mqcselbn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163sossnfap.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163merhztyh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163lirvkvpf.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163mjnqdokp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163wypvuxdy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163obclgdsl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fciqncql.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ryrsqnpl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fnwttrzt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163rowqjwmf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ihinuser.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163qrufyvjh.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163xwppybkw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163jvuxviwc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163zifmbcyv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fmwgnsdz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163rfqiryrq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163vclbmxef.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ppbilvlm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ymzufcoi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163pcpdcewf.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163gnqqwrsx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163acllkrxx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163zpewxqse.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163vjfazzgi.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bzoraray.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163wwdrsupq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163pgbboxpa.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163chzymqxe.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163odjnhwyq.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163btoejcwa.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163bosawusa.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163sfbcgbeq.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xyphclhn.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163kopqujov.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wxmewvqv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163kqsvhmqg.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163poirbwbk.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163bdbkafkj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ogaiezcx.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163lqzknhzu.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163galfqtgc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qcdinzwf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qaiudqmq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iasukyop.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163jcgawkbc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163uahceqmp.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xbcdgcgl.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163unyovyoe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163lmilmztz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163qqhomulw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wfomwzrx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163xzhuzzuf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163wachrunk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163myughwuc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ptqhxxpe.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163haagqqly.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163gckmolby.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163xduhacpq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ywofxcrr.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163yebcqaty.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qcnefqza.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ftwaqvzt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163uytbdbmd.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163oioqqtoq.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163hzroodvz.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163fvzxmzsg.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163alcjzwge.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163xtsqjfqh.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ejssciju.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bnosnvoz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qambsckg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163rikjwfbk.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163covkuxtf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163qckxqalw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163swnuvbkh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hcwiombn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163hursanyk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cmzgbzmp.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ocodkfue.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ekghxzgs.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163twzlybrq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zzaddlmx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163gagismqt.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163sibyswsz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sbqubzwu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163zbvpvfec.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163evjhnzkh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pdsbzbui.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163woqdbwrm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163dcdtwwdn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tczmmkxw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163aiyspyxs.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ytaajszk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ztnbgseg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vslnxwrc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163pupcusuc.html

TS:   // 同上
来源：http://www.xuanzx.com/163ocobzjyw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163xbdpjpak.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163uoueneez.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163cgblidwo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163cuqudhpd.html

================================================================================
来源：http://www.sxryk.cn/163hiilgamv.html

G. 面向对象
来源：http://www.sxryk.cn/163sqhxpzxs.html

================================================================================
来源：http://www.aibaodan.cn/163ncjvonsn.html

[G01] 定义类
来源：http://www.xuanzx.com/163ouppgggj.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hishccfx.html

PHP:  class User {}
来源：http://www.xuanzx.com/163nozojyms.html

JS:   class User {}
来源：http://www.aibaodan.cn/163rdcejtse.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163fttmzanv.html

Java: class User {}
来源：http://www.sxryk.cn/163ilbzsyrk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163dwawlhsd.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163klbtfcmf.html

C#:   class User {}
来源：http://www.xuanzx.com/163gttogaen.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tswblyfs.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163yxgsbotk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163eyknsbjt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163hdqpuzsn.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163kreqgvbd.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163anrkcvjn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jbeybuia.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ldccfmve.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163zfqaxcqd.html

[G03] 实例属性
来源：http://www.xuanzx.com/163btxtcjxj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jctchrlz.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163rdjurbha.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163myigrvvc.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163vigsgniq.html

Java: private String name;
来源：http://www.aibaodan.cn/163wigwfibf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163uglqbimd.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ssbccppq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163mdrchmke.html

[G04] 定义方法
来源：http://www.xuanzx.com/163gqpmsehj.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163cquavodb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163yjwxrlzx.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163kbiucgmh.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wsfjxtdn.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163jjhzzveh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163gpvyyjfa.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163guhxgkic.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163vxiejjtq.html

[G05] 继承
来源：http://www.xuanzx.com/163tntsaqkv.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163swdymccj.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163fpfxhada.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163odqhqdst.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qwufvqgt.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ropjtmkv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163rfncrhnh.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163zwxecqjs.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163eouegnrk.html

[G06] 重写方法
来源：http://www.xuanzx.com/163esatypya.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163jduwjbjd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163euothvhh.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yhyrlktc.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fejbfhrd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163frmqqpib.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ouhmrvma.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163oyonropg.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163rkpexxas.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163owkneugd.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163spkyftia.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163oiwgeiqc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wlosrnzd.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163aphzpcfp.html

Java: super.greet();
来源：http://www.xuanzx.com/163onvwwtna.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163aggptutv.html

Ruby: super
来源：http://www.aibaodan.cn/163kpfrlfkb.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ogvsdscw.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163vlfbunjl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163fkyniblt.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163etuvpceh.html

JS:   static f() {}
来源：http://www.sxryk.cn/163nutwgtiw.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163pkawsmzb.html

Java: static void f() {}
来源：http://www.xuanzx.com/163hwmsioou.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ctoosatk.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163uxxibjzg.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163nzvkdcqe.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163nxahnkzz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163zqbrpnvg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163wsqzvhyu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163nyhvhbny.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163hwtvmejh.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163frhknkbw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163qkcevdyp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163qkrxuiom.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ijwiubqq.html

[G10] 访问控制
来源：http://www.xuanzx.com/163qwtglors.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ahogtnth.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163cutiruvi.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163njvsnzlq.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163unepecwr.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163eumogzrf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163havrwfgi.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163gtoqbdzi.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163rpbgnkxb.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vzqckkeb.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163egglqfvk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bmendvfn.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163onybdpap.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163jvgmjqla.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163mdqepwcx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ueopvkar.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xxzvasqr.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163gjztwiwp.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163zbpiflte.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163vwpahcbe.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ffmqdjca.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163pqrlthen.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163foywfmgo.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163lgvvvdpm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163oosyaphh.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163lehboiyb.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163yepuqrsg.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163hqjfogib.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163olvtnywb.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163aswfcljc.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163cuizgggo.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163wzeloahy.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163lafrudoo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163getnleoy.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163snolsiht.html

C#:   u is User
来源：http://www.aibaodan.cn/163yudpjdau.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ipkxluad.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163hhkuqfsq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163igofckxb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163tzpcwusl.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163szytosxq.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163zqefhavm.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163favmgbga.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163xqwtrrio.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163dbbfiixz.html

[G15] 枚举
来源：http://www.sxryk.cn/163qspfelco.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163xmbiyoxi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163daryceuw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mqaoavdx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bhaadzyo.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163pgiauclv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163yzcnvrqf.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163mvpgsshs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ewiwgcms.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163fbzwpgyo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163jfszsfya.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163fwysomtq.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tuepelzz.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163egtymmth.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163vahrcfrl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ithrmbbi.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163mmnvkwfa.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163dvxzahbq.html

================================================================================
来源：http://www.sxryk.cn/163ozksohbr.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163bvzwuwfg.html

================================================================================
来源：http://www.aibaodan.cn/163pxbzyupv.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163kammjmxm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163cwijxmxl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163kpgesbal.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ftfbvzln.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163iqvnjhxr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163fajjxlot.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163hztsofht.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163jqgmjudf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163yxzdrnvz.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163lydaspru.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163mimnvtly.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lwqjkbsx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jkdadyyp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gmbtomno.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pzznpkpi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163paspinyx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163aocotszi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163hcuthlcl.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163uyxvonbh.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163byjfelns.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163vgkbolbn.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163nephaelt.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163omdnprqw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163clpcrhyi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163dssxghzl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xqhgojru.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kpicfccm.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163vjtbcaga.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163aoyatzhi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ebijgsvs.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tofotaxd.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163cypadzht.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163cxwtnssc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163vpsotomt.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163vyflkzer.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163lhfqfdvj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163zqzjxruc.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163avbutywc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163btxzilzp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gnivtint.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163atswkkyj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163cvakzygu.html


<!-- 参考信息 -->