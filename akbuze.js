外链999!wailian999！

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163pmuhsoyo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cytlchqw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163vaddjjbx.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163vuexfcgc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163kzzvgguv.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163zrerqmuc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qtkhcfuc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163qcydyikc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ajgaqxyh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jaahguex.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ozclyvma.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163mqyfbecw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163avmotpqw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163aoremzii.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163wsatrnxv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163dnkzndtd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163mmkgpewx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wrfgmnwm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163swkigaqh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163gtgcflql.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163bzcufkvo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rtvhkgqy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163cevylgyu.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163nvedpccp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ywwncgrr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163bqthvwvr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zvvyezzv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gpipcwal.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163tiuwokan.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163sxtyqmfz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163vxdcfbxi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qpxxfucv.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163oopyoxnp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163tqajitdp.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163wrntwzlp.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zmyfhals.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vjkbnnxa.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gqoxpach.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163nszyblxz.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xkzgadil.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163eszzbgzp.html

[F06] 删除文件
来源：http://www.sxryk.cn/163hjrqybdd.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163nimppsgf.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163txxptfgr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163fjfibxes.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ixdznerj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pzbpobrp.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163oyrxhroz.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163scnaoqbg.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163pttuonbv.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163mtyvmjdb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163zdaukbhj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163lmoivrax.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xoomulxr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ykctuzel.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163rkwebrst.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ogmorsso.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zhzzrnfv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163kdalkchz.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163hjncwmjr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163zrgkcssy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163kpayaiqn.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163sfvnpeqt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wopnhmhb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163orbwlciq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163hquoecnb.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163fsmqodti.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163oeqommgp.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ssuhlpkv.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163rkkzgqje.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163swcbsblq.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163saagzmhj.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jiwwdooz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163diwdfrvb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163hohtrfiy.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163yquphlho.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163daouqvzs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163bnjnmtzo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rdfifmop.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163vvjqulbp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pyaodeej.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ysbnphtp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163dwupqyyx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163bromnlfd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fiaoipla.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ewdhflrj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163tazcvtca.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wrhvsuzs.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163wvarllqq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ltciidez.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rxndwmpw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ukdjtlvj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163kmoywodz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lttmsbvf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163yxxdgksn.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163xqvslanu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163esmvpwau.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vowijarg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163akojaazc.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ptijoeba.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rernesdw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163gyfdhyzf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163smwereky.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163lvymbgba.html

================================================================================
来源：http://www.aibaodan.cn/163psiyjzbz.html

G. 面向对象
来源：http://www.aibaodan.cn/163xxddcgoy.html

================================================================================
来源：http://www.sxryk.cn/163npjzprvc.html

[G01] 定义类
来源：http://www.xuanzx.com/163szilbzha.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163qhuhtngk.html

PHP:  class User {}
来源：http://www.sxryk.cn/163efbwdkbl.html

JS:   class User {}
来源：http://www.xuanzx.com/163ndxqmdoe.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jyibepfr.html

Java: class User {}
来源：http://www.aibaodan.cn/163umuhzdkl.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163pscicqvq.html

Ruby: class User; end
来源：http://www.sxryk.cn/163bzqixrbf.html

C#:   class User {}
来源：http://www.aibaodan.cn/163kbremgpd.html

[G02] 构造函数
来源：http://www.sxryk.cn/163znlylxcr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163rhtheemr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163khgfhwus.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163iopdmxfy.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163gibxkhuu.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163wyyuntxe.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163egzvgxxh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163dcxxfdgn.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163rvddpius.html

[G03] 实例属性
来源：http://www.sxryk.cn/163egllvxig.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163iirtwxwh.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163gqfywdzl.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pmszbsuw.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163zbuokinl.html

Java: private String name;
来源：http://www.xuanzx.com/163hrsigbnl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163epkgcdbs.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163sjdjpvzv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163wggulqku.html

[G04] 定义方法
来源：http://www.sxryk.cn/163buijrtbv.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ioxmqucm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ascbdhnd.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163zrpdrbid.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163oumrvdjw.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ifdduotu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xskwkxib.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163uzheuqxa.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163gcrswmdk.html

[G05] 继承
来源：http://www.sxryk.cn/163lpmatokc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163uzljmvbx.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163pthgppvo.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qzlqrnqe.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dzvganqr.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163yaataqtu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163vwtuqnps.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163btagvtyy.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163rmfrvsln.html

[G06] 重写方法
来源：http://www.xuanzx.com/163jnbmjsxd.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163vjojbvxy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kabmvlpq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163aakqqqvg.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xtpqitli.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163atannniv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163rqymohen.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163pgmqothx.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163gjusvcib.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163lmoxcsvf.html

Py:   super().greet()
来源：http://www.sxryk.cn/163paiseprn.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163cjiydoqf.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gfdbxwsc.html

TS:   super.greet();
来源：http://www.xuanzx.com/163aftwtdko.html

Java: super.greet();
来源：http://www.sxryk.cn/163hcfkfwrr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163mjmzbhvl.html

Ruby: super
来源：http://www.sxryk.cn/163zsnbljui.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163dunbejht.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163cjgxdyiv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163mczwbcnm.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163fpjknize.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ovksujvs.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163iyrixxjk.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163onuipdmo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163sdcugeew.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163xrmgwvjg.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163fasavvrn.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163iherpfot.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163rgluygng.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gwfvvvrc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xkuexrrq.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163kcsvlnnz.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rezvsbtg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163naxokjsf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163bhzlryfg.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ybqjmvue.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163xyqusiwc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ucqcoceu.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163aaslxnqr.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163hpjttcnf.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163yaexzsds.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163datjulot.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163kveybbtv.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163yoosvmgb.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ugyaxcea.html

[G11] getter / setter
来源：http://www.sxryk.cn/163qduftwbt.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163adzhvzaq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fpmuvwfl.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wcpdatqf.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163epqsjesp.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163zwydjcqt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163wqaydndr.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163lbzhnxay.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163oopljaia.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163hhzaxjec.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163zdcvgxaj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ykftbcpu.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163cqzdtjjl.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163cmbqwzda.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163lifyxbvy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163psswtgof.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163edfimikf.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163gkxgjnip.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163jwitkbjt.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163iwhfcdsf.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163hyhshbtc.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163xalsuytm.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163pdpkrala.html

Java: u instanceof User
来源：http://www.sxryk.cn/163bhezzqaw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163jpyhayvj.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163lvbtofil.html

C#:   u is User
来源：http://www.aibaodan.cn/163fioqbsjy.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163figvjhpm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163cyjwmgzz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163yobbwmki.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163dxhgqqmu.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163hufeaazi.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163dezxgvpe.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163boiryqjt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163bhcfwtui.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163dboyeujn.html

[G15] 枚举
来源：http://www.xuanzx.com/163oibfaqnk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163agnojaxs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163bnyomjze.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163jmucqssx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qvgfects.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163fwforprm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163hxkgrnqu.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163gpcdxqhz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163diqcbehs.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163wumllsxo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163mrfscwuq.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163jzlvsmqi.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163etxqayte.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rallmpdf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ubeckctu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163fnwineji.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163klpupwtd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163dduklphf.html

================================================================================
来源：http://www.sxryk.cn/163gsekhtqb.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163texeruwv.html

================================================================================
来源：http://www.xuanzx.com/163zvcvsaqc.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163vuasnmzt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163knertmhi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163epnvanzu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163obzckysu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163uujdaatn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163vgvrfsho.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gnizvgmx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163dkdvolqx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163fzdfhpko.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163dhvetpoa.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ypmmaojg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qoqthwws.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qghakwrk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nhosjkfv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wmjasjke.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qeoaiihh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163qmndctnw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163msaqvoht.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ljlihkop.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163vnjnhseu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163cevvskbq.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gpodcocv.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qdrzzqtm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163eizdxrns.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163biyfdijq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163mmzazzcf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yolsjgkx.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163kgbzemox.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163peblcioi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163bbnpfrut.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lddutjzq.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ramolipn.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163mzwrkzkm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163obbocduc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rexunllm.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bankdhlz.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163gakoowsf.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163cippxtrn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163zenwxbvf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163uvoushba.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dptfpzjh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jvrtltmz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163qjkxuppx.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163fwnxuila.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163vazqkklu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163zexgdajp.html


<!-- 参考信息 -->