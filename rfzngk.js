外链999!wailian999！

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163znhbazjp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163auinjqhb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ylijpihn.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163iirdluzj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163dghqunzx.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ogeuizlc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163kmvkithc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163mmebfqiu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vgyyuolk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163utkvjocy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vvsmxjaj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163nuoceqlf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163fyylxiuo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163efdcgqtr.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163mkxzyqor.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ommeqgdb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163gqnwfhbw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xxuwlliq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ztkrxllt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ebjhdbfe.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ymltyrzf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163pwohvzbf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163pcombytm.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163bdqxursr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163lsizmoxv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163zdbseabz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kjqslbsn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rqvtmerw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ybhdjkdr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163fwwpbrft.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163jyseyhew.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163udyipoek.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163uumpmwbb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ldqkoadq.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163dnogjvam.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ykbhicxp.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xofssglu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ygzuzrhx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mqoxivbz.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163bghcwfph.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163utobpzan.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163dsewcyoy.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vyivszav.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163oxjxiocj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ccdgpbmf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hnhwwgrj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ufkieakv.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163bihfrlak.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163zpbbxwht.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163lnbthlkq.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qlblewsm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163qhlpokew.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163cywyioyd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vzhzvfvq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163knieukdc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kwitlqgq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163akpafgiv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163hpzctccm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163yeoqnuir.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163aqrijtlu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ndeuiayr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163filhppxa.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wrbtoyek.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pmazbfez.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163xtifkmsb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163goazqxru.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163nxkqbcdi.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ennjsrzx.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163eiikuknl.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163tplvgqdt.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163dzxmtmcn.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nztenwgn.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163obhnmyxb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gbbkiniz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163oirfekes.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163qxyimqnm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163puxmtfgx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163bjigmywj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bznlrhtb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163zklcrrzt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163epukvvbj.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163hxkduwms.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163bdnhtnxv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mezfcctf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pnuftxpy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163rnxxvmng.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163dqsiqqsb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uypdbrca.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163cltwuytw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163drzdcesa.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zhogvzze.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163honmyael.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163dhnzhzrc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rqkyqkhb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163pisqfguq.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163chcttlje.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163aaaxrxkh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163chsnvidv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163qcrweerf.html

TS:   // 同上
来源：http://www.aibaodan.cn/163pxegalup.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163efcsskzu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163xocxzscg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163xxykpuxh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ianysqyo.html

================================================================================
来源：http://www.aibaodan.cn/163sberzahh.html

G. 面向对象
来源：http://www.xuanzx.com/163nrdusxcd.html

================================================================================
来源：http://www.aibaodan.cn/163bcjtwlfv.html

[G01] 定义类
来源：http://www.xuanzx.com/163qneylvgm.html

Py:   class User: pass
来源：http://www.sxryk.cn/163wkaigxmr.html

PHP:  class User {}
来源：http://www.xuanzx.com/163yvryrfeq.html

JS:   class User {}
来源：http://www.xuanzx.com/163acfqtkko.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163bmujohsg.html

Java: class User {}
来源：http://www.aibaodan.cn/163iwqlwqjo.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163vmldlgzi.html

Ruby: class User; end
来源：http://www.sxryk.cn/163npisjeji.html

C#:   class User {}
来源：http://www.xuanzx.com/163dmieaqzg.html

[G02] 构造函数
来源：http://www.xuanzx.com/163zsygtoqj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163wkzdsvct.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163hddqqmim.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ftpdvxbg.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163pzsaegni.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163zcyczgze.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163szumgsid.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qoyqhixx.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163sdvhtwjo.html

[G03] 实例属性
来源：http://www.xuanzx.com/163daqkvokr.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163swczszvj.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163mgsrzcbn.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163urdpgcrj.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163giteacvr.html

Java: private String name;
来源：http://www.aibaodan.cn/163eykgiejt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163aaghchfw.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163npbewnpf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163mcjymrxg.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163xtdhlklx.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163nexhzesd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tsspyxox.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163bkvyndru.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163oepslhok.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163naqgiaqs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163mnxjzwrc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ddtjjncy.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163dqvopxwi.html

[G05] 继承
来源：http://www.xuanzx.com/163pgzfstks.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wxetrour.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163hfnxfhcn.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163oqqwcgso.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163njlltsss.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ntnbvohr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163xgwveace.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163iuidaxps.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163dxcxeyvu.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mapenhpv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163wrefuxuv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163npdoesjl.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gspojypo.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163onsnvyqn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pcnrjhxk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163uocpolww.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ugvvvwdn.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163pvtwunuz.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163pzaizjka.html

Py:   super().greet()
来源：http://www.xuanzx.com/163caqteihp.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163pdmohwca.html

JS:   super.greet();
来源：http://www.xuanzx.com/163potelapf.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163xdhucvoe.html

Java: super.greet();
来源：http://www.aibaodan.cn/163bsjpqwfi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163xzvmcdpp.html

Ruby: super
来源：http://www.xuanzx.com/163eycpxmnu.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163rotkdlan.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wnehjycv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163kaslgnea.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163nycyvuuo.html

JS:   static f() {}
来源：http://www.sxryk.cn/163vswpsnxv.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163zeivyqom.html

Java: static void f() {}
来源：http://www.sxryk.cn/163weckajuk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163twbmuswe.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163kvyncjnk.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163agtmausg.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163jhangivc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163cxkpyvgz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163iljhpfmf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163tbsgzvzi.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163bbexzndh.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163mjxriecw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163slsqtcxi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163alhievjq.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163zsmavfos.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hhfnqwwq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163deowepyi.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163njmmellu.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163apzfsvcc.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163hgpyucie.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163uyjvdlfc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163amsupdsx.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163krjkadss.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ahqdwitv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ybzcunkp.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163zabvsjgx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ulmgshhm.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163nttnqrer.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163tvrlxqyr.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163xeflbzny.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163mvkooqgs.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163rijiaytk.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163wxfpztsa.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163zhtkhorb.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ikplqfzc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163cvppzhar.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163yrrvcapa.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163rscxpteh.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163wvvukenm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163hsoyefxv.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vapijkyh.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163kctnuhva.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163exulqmol.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163kagamkmc.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163jiaowjfh.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163gvfzdrkr.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163uzpmeomh.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rtvtljhm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163guqtifag.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163fvayxqpk.html

C#:   u is User
来源：http://www.aibaodan.cn/163rfrhkopt.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163uhjzakgh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163tkxjrhwg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163jqzssetz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163zcbjvifj.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163jilkdywp.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163hnoqfozo.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163upfaeqeg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163tcenglrh.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163moxmxzwh.html

[G15] 枚举
来源：http://www.aibaodan.cn/163fhetpmuo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163vslmunjd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163bzvygesb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163xjrshlge.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kaxbqvea.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163jrfkbykl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163epibtrct.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ndsyiwzw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yobuzonj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ipujilkr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163hoyaaqeo.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163oltpaavb.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163foayoqnw.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163iimbwgvv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163aroauhsq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163czutkvgb.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163fhpbqtoz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163mscvogij.html

================================================================================
来源：http://www.sxryk.cn/163pcpnkzzx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163mhoswhnr.html

================================================================================
来源：http://www.sxryk.cn/163ixlwsyom.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163gkupbnha.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163gurehknw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163mfgpbpqo.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163odbjzmmy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163lasqpifu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163nkvycpwh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ocmvxfny.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163tytmugpv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163zzmemcuz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163mgkzifac.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163sbqiwopw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kubblbpu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rsublhub.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xoyoeyso.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163sxgcnunc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163gztdrcpb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163xnywwmgc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ahxvcjzb.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163opgdfiji.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163poaojnry.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163giktjguv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zllowygf.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jxfkwbis.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163kdkwkhlm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163juleujxd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163kvcuejny.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hddzamzf.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163wwwqfngi.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163xxwgcqjk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163psftkfsk.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163yjfpfgro.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hjbugqiv.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163oryouctp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163gzkeprkb.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163qqppceff.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163jkboxgio.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163kejfnwqg.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163rcuuitoh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163jopgajex.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ltdquvnu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jjhvztoh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163qfwzlnxa.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163dzgezjgq.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163cdbnvysf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163apxqhouj.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163eauhrwrm.html


<!-- 参考信息 -->