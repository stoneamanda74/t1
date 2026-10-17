外链999!wailian999！

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163uycjjznj.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163vuxvsmzc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163whkibvag.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163jofgsjur.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cjbovmxi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163eaenxzeu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nkluvizc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163voeuhoxd.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hewwpgpk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163awwjhedf.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ebnqybim.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163pocjbcva.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163wyutjbmd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ayfrwjox.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jdgffxib.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163tjukdpmv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163qflprnsa.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163kfsfkydn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163etihvxif.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163aubasazg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163hzrpersi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163blwjdoui.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wwltawbl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gqckxueq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ozwkybnh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163yzvojwwe.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163pnkrmhxr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ahsukrjw.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163nkpkoitz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163rijslpzs.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zekqsmpo.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163odxjzjmr.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qrumqkwu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gvvrypdv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ucskirhf.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163umzttkxy.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163jijvvxbq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163zuebjiod.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ngartjfy.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163rihjuars.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163yuokwtlu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jmwyvtgu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163exwtopzq.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ihgpfsix.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163mzwfkmvy.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ecspwdph.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163rdewcnps.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163jauaouhq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163hlwixyts.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lbrhtpww.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163arzrjrvy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163gzieluvv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163rjwlzprk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163bbmejyus.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gcjmzage.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163hacuvsha.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163okbhrtlp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ycdidqet.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ggolfgix.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hrrmyhxi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ndfvjrxa.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163vegxzbkn.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163gojedniy.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163osjuuyxv.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ewbigdny.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163awcoinpc.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ekvkmdog.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cfkygcaw.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163valfdvkn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mhhjctev.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163okmyahaa.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163bitlligd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163dbwtxbgv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163yifbotyx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bnlrwity.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163pjexwoxq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dcbvheqq.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163axkifsjr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163uutikyik.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163zwovlgbo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163erqwfdam.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163tqcekqtd.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163mveqzlkp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163irooikul.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163zkznsemu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ijhqjonl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lumragdr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163laimsxxv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163wqpqlglw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xxhfqloy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163fhqcsosv.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163dbpewigv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163okkqpzck.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163rsnqbnia.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163bztokhsx.html

TS:   // 同上
来源：http://www.xuanzx.com/163baezlnxn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163bdamtpuh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163wezlazbu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163imassngk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ubtujmbr.html

================================================================================
来源：http://www.aibaodan.cn/163lzwdeffm.html

G. 面向对象
来源：http://www.aibaodan.cn/163tamkegpc.html

================================================================================
来源：http://www.aibaodan.cn/163dqtdtcoo.html

[G01] 定义类
来源：http://www.aibaodan.cn/163nmzucamr.html

Py:   class User: pass
来源：http://www.sxryk.cn/163jlgbgvjv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ndoxqlpc.html

JS:   class User {}
来源：http://www.sxryk.cn/163qndagmrn.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163opyrumrl.html

Java: class User {}
来源：http://www.aibaodan.cn/163wmikampa.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163jwrobiex.html

Ruby: class User; end
来源：http://www.sxryk.cn/163hnfyrpze.html

C#:   class User {}
来源：http://www.sxryk.cn/163kvxfcrik.html

[G02] 构造函数
来源：http://www.sxryk.cn/163zmpmezzj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163jmocukid.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163yhltfjvw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163bcifrgfn.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163eleeolcg.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163bxrpsqkr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163yvegiuyy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163qsfzgsxt.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ryjjrynq.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ursbapip.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163lgmsmckr.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163kwqidztb.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163rslptsbn.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163nrffhgot.html

Java: private String name;
来源：http://www.sxryk.cn/163mgkiyjfk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163zoofrlxp.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163irzfvejs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163oocnjqhh.html

[G04] 定义方法
来源：http://www.xuanzx.com/163rdirfvgk.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wgjgpnlj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163juxbrgcy.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163fynqkqri.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163zkfdjuns.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163pmwxcnry.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163xewxvsue.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163pautswyy.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ftyerpnz.html

[G05] 继承
来源：http://www.aibaodan.cn/163qpeidnfh.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163pemsnisg.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163khnsxfgu.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pxbmwyky.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163afrmafcj.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wwbfdqez.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163jahreaxm.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163gnqznsst.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ycvremih.html

[G06] 重写方法
来源：http://www.sxryk.cn/163pxdtlbyk.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163tzkoluyj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163uncnumzp.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163szmgbglw.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fkivgbiv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163cqmtnjks.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163vdcxpalm.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163nmmvwrsl.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163lyqcojlr.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163zhefebmh.html

Py:   super().greet()
来源：http://www.sxryk.cn/163mbnmvzqd.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163cxmomqes.html

JS:   super.greet();
来源：http://www.xuanzx.com/163tbtxajds.html

TS:   super.greet();
来源：http://www.xuanzx.com/163diwgyyfk.html

Java: super.greet();
来源：http://www.xuanzx.com/163zsapdgoi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163tuiyqxdb.html

Ruby: super
来源：http://www.xuanzx.com/163vnzwibsp.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163opnqmkqb.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163dqrqkmoz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163lwfgfewt.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163eogjmxme.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163cenggkli.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163mumuyhiz.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ldgfapyh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163emecbaaz.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163lohjuilr.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163xlntixtb.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163cbvftukc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163fooempik.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163erxiyqvf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163vgxkygaa.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163iwmogtea.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163gpxhkksc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163pzijblgt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163webjocaz.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163qkyesxis.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163xknsepdr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vwoxaxtn.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163wactxdrh.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163djvselow.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163tbmsjhbq.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163leowlnlf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163jkpkixxr.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163crlsretp.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ahhzyjgy.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163xhhtsrxo.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163qxxmznbc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ktdeoggc.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163yzfddbdk.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163zjwpxkuf.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163omovsosb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163rgsqzvvw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163qahyncmo.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163zjvyqtpw.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163movdritj.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163johbxouj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163kavxbgvi.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163pwwqkzvl.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163oycqfjdh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163scfwadaw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163qokdhilo.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163slwxfsbs.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163utazsaro.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163wzjdoehy.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163bxnychbq.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163nilzqfug.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bhkhqpva.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163qwhewxnx.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ezqmqenj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163drrwpjjo.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163nhaohyho.html

C#:   u is User
来源：http://www.sxryk.cn/163wotenfed.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163odoyqgxh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163uybdosyr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163gbztqlhl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163teezhexd.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163tgtgneyh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163soyznwpj.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163orampzep.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163tthpshgp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163whiwovuh.html

[G15] 枚举
来源：http://www.aibaodan.cn/163tnzetsuh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163zmfqtrqm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163dpxqxjie.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163zzebgpjh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pqveksse.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ylctkuia.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163vkqzcalv.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163zawpvtty.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163erxyivrp.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163oosfnoif.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163nslyqebl.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163qmolwhny.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nfbtioaz.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ttgwsdqj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163iwyxkfdk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163inibcclm.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163luagpcpd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163eboyqwuw.html

================================================================================
来源：http://www.xuanzx.com/163mdgkbhkz.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163hgjgeeku.html

================================================================================
来源：http://www.aibaodan.cn/163crzhmrdk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163pcbvnfgn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163lwstgzvo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163wfljereq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ikslwlux.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163pnbgdozg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163lnhwyfvc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163zsdinioc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163wqlmzile.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163owygovrm.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163lipdjapf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163pdoenatb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163btvwjmlz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ipmrsigc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163myekewan.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zvsqrlxq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163bcwdtcet.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163lrxscnza.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163mcmoaglo.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163gpgwabvl.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163hjomzzql.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163tqsaqfdb.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kzaitthw.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yykzkfet.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163idaaieri.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163xoehqyyh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163teyjzlth.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163oiueoecl.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163yvoiferp.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163uekkjjpe.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163lezmswqg.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lvilqqut.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bbgeexot.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163kffvxndr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bbevsfzl.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163okwrnbdw.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163rcbshhah.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163lxoklklc.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163igjmggyx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ytbomxts.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vlncaxxr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163quhqhmlq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163xxdswtpc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163cnnvuwwx.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ikzdmgaw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163bopznidu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163rinumjwk.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163dmqaqrno.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163sbhrbeqf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163kgqsmfbx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163eyqquvqe.html


<!-- 参考信息 -->