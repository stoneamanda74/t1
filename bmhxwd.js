外链999!wailian999！

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163apnbgovz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163firzupba.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163phagldty.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163zxfwttig.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163imqkwvxc.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163wmcuiuze.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163cluqinij.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163fasrgwgr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uosyzksd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163reenpupb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hcmayfcn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163czqgvlqs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163sklxzrnp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163waqmzeni.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163gsudyzci.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163kajeyphs.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163fwcaktjd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fvxfopgu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cqwtkuoq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ttchuwbo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qmvstqtj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163rpkskute.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163cmhjujyy.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163pxlpkxnp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163jnknlxmy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163lufqrsib.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hlffdrtg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kycwmwft.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163nkvtoxpb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ivmzxqxg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163rwprzjmj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163jbrqyvbm.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qfuvdmqj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163dnwnfmtg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163pttkhptw.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hteluarq.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jodqzfsn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163saztqjxg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163dtidxtel.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163vxbetstw.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163yaoczqqy.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163pwysdfsx.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hjwjbuhh.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163vsbdmkxq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zwgfnjho.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ghwavtfp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zwkvmsft.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163knclslpy.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163pcfaouig.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ilzqldmb.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163wpyorkmm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163kwmgrauz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ygupfnmw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dfencrmw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163utwbtiiq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163rkcvsnbf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163tpdvjgwy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163aczioiso.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163fxkswlzk.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163qgflgasd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ceooiblw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163buiggzuo.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163orejxdol.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pwfigtzz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163emsktpjo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163crgckfpg.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163xdenwssp.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163abfrihyb.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163aqfxrqpz.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163tbcnedwf.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163jqjlsznl.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163psbzrfxs.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wdpmokxx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eophdctx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163splhquia.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163nlxmtlsv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163cxoivejm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163esddwple.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nqodhpnc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163jswmtkol.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wksgahcc.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163lyzhygjy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163acwkeyfj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163yyakxlun.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pqiqcpos.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qzyalwwv.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ujkynzox.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kzlnlzmt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mfbpretr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163djwargwn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iwyoxnou.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163jjrhhnoj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163xanhhakz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mcllveza.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163vbjhevsr.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163hvvavykf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163kompejko.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ctpajdda.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163cucgmjri.html

TS:   // 同上
来源：http://www.sxryk.cn/163sphdledd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163vibbkkxt.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163nnslcxca.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163anmmymsl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163efmnysls.html

================================================================================
来源：http://www.sxryk.cn/163yqjvnlyg.html

G. 面向对象
来源：http://www.sxryk.cn/163wwfdqcdc.html

================================================================================
来源：http://www.xuanzx.com/163kujghuzz.html

[G01] 定义类
来源：http://www.xuanzx.com/163xvjkgprm.html

Py:   class User: pass
来源：http://www.sxryk.cn/163wdbueizj.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163rdhdjgeo.html

JS:   class User {}
来源：http://www.aibaodan.cn/163gamqprtn.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163mgedzaud.html

Java: class User {}
来源：http://www.xuanzx.com/163prgnidye.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163duyuycex.html

Ruby: class User; end
来源：http://www.sxryk.cn/163zgegialr.html

C#:   class User {}
来源：http://www.xuanzx.com/163eywmlsyh.html

[G02] 构造函数
来源：http://www.sxryk.cn/163dxytqvng.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163kdcdxfcx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163udgzgcxo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163hswfsavc.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163umzgxass.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163gjywsxge.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ctydzhzi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163rchtzmpa.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163mdovofxh.html

[G03] 实例属性
来源：http://www.xuanzx.com/163duopwbvd.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163rekjneep.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163dcpgerlq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163gzsxfdgp.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ftcgfaor.html

Java: private String name;
来源：http://www.aibaodan.cn/163hunpfmwg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163byqwqdxx.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163zwpwlqqb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163nvsdivqy.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zacojfdr.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163bonmyzgn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163axswpeod.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163etlhpqmk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163azxaapyr.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rdtrziuw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163nsipopqy.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163xyopholn.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163dqqvrvut.html

[G05] 继承
来源：http://www.sxryk.cn/163vzhhfkrl.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163tmvbogny.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ilaapojm.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163gwsfezpf.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163frfqcolv.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163msofjzqb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163mytxthsi.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ddwilyev.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163wozpozav.html

[G06] 重写方法
来源：http://www.xuanzx.com/163hfgzhyhd.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163wrwvwell.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ffxovlpb.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163tsaiubet.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gooxweao.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ldnghoti.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163msogwvbi.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kiswykpz.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163twqnppqx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163kzihfqnc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nvwpmewh.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163uifdapod.html

JS:   super.greet();
来源：http://www.sxryk.cn/163hrtqwgiv.html

TS:   super.greet();
来源：http://www.xuanzx.com/163aalylgwo.html

Java: super.greet();
来源：http://www.aibaodan.cn/163lnemwvcz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163xbistulz.html

Ruby: super
来源：http://www.aibaodan.cn/163ltcuooid.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lrnzcvmc.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163iolvpwuz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163vbuqcaib.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163httczhxt.html

JS:   static f() {}
来源：http://www.sxryk.cn/163lbxlewhs.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163cdvcogqh.html

Java: static void f() {}
来源：http://www.sxryk.cn/163vnzgloyx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163oiclqgji.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163oduhmvac.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163tabnknmc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163uqysiwhj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163elnmpyfo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163lxjoibxn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163mdvzimbq.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163hfrivagt.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163qlzrohnx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163opekjhqk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163cavlmvpk.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163xalkvxag.html

[G10] 访问控制
来源：http://www.sxryk.cn/163vynafsmp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163wlmnivyr.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163olazalco.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163cbqpsruq.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163igyabixe.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163twffxvlf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163wrvgenmq.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163xynjtekh.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163bygggfpg.html

[G11] getter / setter
来源：http://www.sxryk.cn/163itaundrl.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163wsuvwuta.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163zeghnfzc.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163wgbykoqd.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163evklutog.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163hceplxti.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163nohvuhsk.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163hzitypad.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163vihdjsji.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163wkbfopdd.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163knydsdgl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wahqypyb.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163adlqbqln.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163gwqpxecx.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163vgdudiif.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163lcokjbfp.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163riwxbfcf.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163jjmqhtyd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163sretkhhk.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163bfuilqte.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163psjrapzg.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163iqtsqcbc.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163qblfxxvx.html

Java: u instanceof User
来源：http://www.xuanzx.com/163tsskbtpe.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163wivvfjbk.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163bopbgtyi.html

C#:   u is User
来源：http://www.aibaodan.cn/163vczrauus.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163owcjugzt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163xhlvyqea.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163masghtzy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163cxqegngi.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163tnwhfilj.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163rsdmnazh.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163moxzcvuw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163rxdekgnf.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163dzzratng.html

[G15] 枚举
来源：http://www.sxryk.cn/163btojmlov.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163qwzcbexh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163predxxyk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163qzkbywbx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bhfjoels.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163bwqfkuye.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163vusslfcv.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163pymhfdfz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qzlxglwj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163cpkepzuk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qjynmelr.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163naqzifxi.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yonesabo.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163rixzwlrg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163sgmzojvf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163zzlkckai.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163lacstrhw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163wjccvnmb.html

================================================================================
来源：http://www.sxryk.cn/163arntqtsn.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163juzwfpio.html

================================================================================
来源：http://www.sxryk.cn/163azlpbhcl.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163dpmuqnph.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163izgqttpd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163dkgkqlfm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zeuoqbmu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163bugskjoj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163lfryzhpr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163yzyfojwc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ltwhadyg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163bzncyznm.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163cteikynu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163junrfydk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163etqiplqa.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jxmnkzvm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cehkvycu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163seogqjnb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163rrppzeqr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163qpwvsggw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163jhmyprpi.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163epcawdam.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163etltvqbl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163oxtnsmxo.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ecozdlej.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163brskmfql.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163pagpqvuu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163eujclpvz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163xietgwjj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ocswqblb.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163vahwzhbg.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163aunodbuc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ivrsqirv.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vpffvjxy.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163utblahnw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163mkmiolhx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163nlzmkubd.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163qzuwlqig.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163tzipfnrq.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163poywsgbm.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163zjfsyfyy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kdhvglnz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163fmdeyoxd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rmeyfgni.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163trmlytrv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163sbiltpet.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163slngfbrk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163tpecapyq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163zmzxdcfq.html


<!-- 参考信息 -->