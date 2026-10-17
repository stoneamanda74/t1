外链999!wailian999！

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mdtytiev.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163dzxxsiwb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163tscinrym.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163vbufqbtx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ganbaaor.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163biwpdvch.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163mypkwcvs.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wvdgubyb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163tvyjrwds.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ixjclxii.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tjvclyib.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163kaecohty.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163svrraffu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163gaphmpsg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163afhsibbu.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163uvwhodxz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163fbwgchql.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ixilvfkf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ixccccip.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dkkpzeso.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163wbjjtist.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ubkoxizk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163cvyrijci.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163rzmbxbbd.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163kwuesgdm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163cmzwsiuk.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163oismajoh.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dcejecgu.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kyvvsgal.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hynrwpke.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163hkdhfohk.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163yqjahnvi.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163dfdkqrzk.html

[F06] 删除文件
来源：http://www.sxryk.cn/163srztirji.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163dhcadevq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ubmftxuo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163uwrtxiwt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dvaqdagl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jxojcwrp.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163tohtsxex.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163xlzralzf.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ogxuyozl.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nieotwmd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163qgxpkama.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xhwwdoxu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163eafoiort.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gbeoqptm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163yrsikjep.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ckukuomd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163yqqsqqii.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163egioavij.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163itosbrip.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vexentfu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163eaknfvve.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fzwfficm.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ysxkcmip.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163lhkysdtc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163alieocvb.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163goeekpid.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163bemvxsoe.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163xdoedttm.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163rrxmvotz.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163susfbqyi.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qnuamazb.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163groojukp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lzkehrqt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163wrojydtv.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163pevgbzsv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163cxukjakd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163obkcrgxv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tyuiesau.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qezsapru.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jvtntycz.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163swbxgnsd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163tovlkcxb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163dktuvpzs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kkllctgw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ovlgyqrm.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163jzjkkylv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163deezcgyt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163pbhcdmrl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163oyqtisex.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iwsndttr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163nbtkmxvm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163djoobgwf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kclptlck.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163xknplcqi.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163bcnmngdy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163tqhahyci.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163wlpnxtwl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nhpwpxer.html

TS:   // 同上
来源：http://www.aibaodan.cn/163gxcrqwyw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163vraewkas.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163vhqqpurn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163xuvivkdh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163neopwweg.html

================================================================================
来源：http://www.aibaodan.cn/163bqxorokc.html

G. 面向对象
来源：http://www.aibaodan.cn/163vzmoquvd.html

================================================================================
来源：http://www.xuanzx.com/163yluxvzoz.html

[G01] 定义类
来源：http://www.xuanzx.com/163xsmrmhjs.html

Py:   class User: pass
来源：http://www.xuanzx.com/163mrwzdgrf.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ryrpcfrn.html

JS:   class User {}
来源：http://www.sxryk.cn/163ppzqwzrl.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bxbnxcyt.html

Java: class User {}
来源：http://www.aibaodan.cn/163lgtcvqfm.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163zncvinaw.html

Ruby: class User; end
来源：http://www.sxryk.cn/163yjeuusia.html

C#:   class User {}
来源：http://www.sxryk.cn/163fhofzvdb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163xwakwomt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163nrdxlqwv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rspdtjar.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163kvixknlp.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163usglgvkh.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163kvmaetdm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163rizjledm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163knpnoyfi.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163eroqfpvt.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163besrgbqg.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163tvudnrgo.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163cmwsblrp.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163grsresbt.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163cmfgnwcy.html

Java: private String name;
来源：http://www.xuanzx.com/163yfzkiyal.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163mmnhcrim.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163slbnuwnr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163cnzptpqj.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163qzwzkwgt.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163zcwskxkm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163sauksewt.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ccbopnma.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163glkxvtfn.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163kujusqxq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163mlxiuzpe.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163olpceffh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jpmawwad.html

[G05] 继承
来源：http://www.xuanzx.com/163vaivphur.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163rmcqyoeh.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163bykoicxh.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qoatdngo.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vkfwmoff.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163pmhjeoxt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163hyvakpyf.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163nxcntmgb.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163eetqlafa.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163aazjegaa.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163gtpxwewn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163guaehmsr.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163xlffigmn.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xkgmqcco.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163brsyzhpm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163dqjeltsf.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163xurendnx.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163jdkrsxmw.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163emncehec.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ujsyqoig.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163wbkjdyne.html

JS:   super.greet();
来源：http://www.xuanzx.com/163hmidvima.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163nijmzoqg.html

Java: super.greet();
来源：http://www.xuanzx.com/163hkmmctbp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163spqwoqrw.html

Ruby: super
来源：http://www.aibaodan.cn/163ioempysc.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163qvfvonxw.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163sxfdhtos.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163nzfvmtnv.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163xjxjumyr.html

JS:   static f() {}
来源：http://www.xuanzx.com/163hsqjcfeh.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163dsbbzuxo.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ljekmova.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ynyjgpqg.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163zphdrkme.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rwzpbzin.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163dakrxiwx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163pnclxpjq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163equakqpa.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163abaoeltg.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163nzpoazkn.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163gpdyzgfb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163hsrlvtqy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wtfqnexc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163xqwvxqrk.html

[G10] 访问控制
来源：http://www.xuanzx.com/163jopxydui.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163cmsdjmjr.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163rowmrlqu.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xgxuvvgu.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163dfjchfqd.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163qedmktij.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ykfdjdrm.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163fwlqtgnv.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163jgxzalii.html

[G11] getter / setter
来源：http://www.xuanzx.com/163voqrzfsn.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163bbyhygop.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ascaamhx.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163etzqewou.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163euyueajt.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163fjhegecj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rniiarie.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163wdfuvxws.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163pfyvgkzw.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163jqpmeuin.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163cwkomzpq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rmffcafu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163rogqrcjc.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ykyuktla.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163drwmpchs.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163pcscllhd.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163oxtxwbom.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163bbjiiyip.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163tejoswnp.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163xlbkgxhc.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163xrtoxfnt.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163uqrwedhj.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163iwgqmkrl.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163zhewiuwn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163iobdwetg.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163sewwwjap.html

C#:   u is User
来源：http://www.sxryk.cn/163zbigdinm.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ygwdjzgb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wxbpudlb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163octylbqn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163bulvhqlt.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163cqvwxlcg.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163kpfipfnl.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163otplakjo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163uumwmiku.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163yroxhngy.html

[G15] 枚举
来源：http://www.xuanzx.com/163ojvycmjr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163dpxlbyex.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163nxsltwuu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163uhlhrwqg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vxslpyyk.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163xdlbsdsf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163lpvhgzwr.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163bskraucm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mrpvtuta.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163rrensfrm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163vyoxltqa.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163xcoszdky.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163exvsyrwj.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163flfeacfa.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163rknteaqo.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163xlcutkdv.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rasldubm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163skhcyrsh.html

================================================================================
来源：http://www.xuanzx.com/163vruqtljz.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163hxudollr.html

================================================================================
来源：http://www.xuanzx.com/163xjuxlqwk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163fsbmoggr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qqwmtkrd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163iuzhdhwc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jagmqjfq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163teaudinv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ofsrjohq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163vyrisack.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163rybctaqb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ceeyndqe.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163pytbtjuu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pavzxnqb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dpdrkkiu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pzhebtbx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163snmskecp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ztdiypqt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163joqwjkli.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163clsbqyef.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163tbnzagbw.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163sinwwlkx.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163tnnsunut.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163tflmbtob.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163glkgjykd.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kkhisfmk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rrzohyrt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163rjpshsnb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ptlyebvr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163oflxgzec.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163chuyzqfs.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163yyzopfcd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163studemwd.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vkglsrrl.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163cxczxmsa.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zhsgsfnh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163onftlkjv.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163cfsqbvnw.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163voyppaef.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163eivbkkno.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163lssgppyd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163vdhoumno.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bjowjhhl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163iarfoous.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163kiluphpb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163riaadofq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163rkibfkmj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163fouyiqzd.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163bucxmusd.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163oilcyzfk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163dsfohmjn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163oiuwvprc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nqqpnfdr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163gsepdwnr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163unebaiqw.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163widlbico.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163abqhudvs.html


<!-- 参考信息 -->