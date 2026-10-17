外链999!wailian999！

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163cdcdvxdt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163wjvcvtqh.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163tifmgsyn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dhdnwywl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163cvuggskf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jzukwepl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163dixvbnle.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163mfcsmekv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163meslzesh.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qqlcgtgm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163zpuazegi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ucopkloq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163oyllanya.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ltjsqpvt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bxddctjt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163vwbobjrk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ipyhpxsl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163bjndinuj.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163vykxprag.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163drmscznm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163jivnujip.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163moqgbamd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ibtzdjia.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163gkkbwulx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163jnktooya.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163juyaemny.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163qxjwtibn.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163glmjflcq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163hpmdzbtw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163fldkttgu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ddgmppbw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jchvtivd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163josxkigl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163auczfyzk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163olsvtilz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163jopqfjmw.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163mwbaxshy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163pwlzdnnc.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vxumbwnn.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tntfyccf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ttestqfv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cbraexqv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163vqlljice.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ptgouwts.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163kuppgasa.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163wpnkilik.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ioubnwpf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163mxqtzlzz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wzvdhulx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163uwmjyniy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qugnbqpp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163zmvpbtgl.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163sjnixkip.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163gfzoxyii.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163dysczqhu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ujojoixr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163djwohzbt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163looaahjn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jowwbsng.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163fzyvblcu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ctqyjoyp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163cimzdkaf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qpawczho.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163bjhcraeq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163qnyrzfay.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163imdqskxg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yfbgtnlq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163uwjrozai.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fmmksmta.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163azdbkutu.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163uuvxvrqj.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163zytdvcgp.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163epvlwuiw.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163cjndkaup.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163fjysevdl.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hywlcgul.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163psulipio.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163waorbhew.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163gvnrdrmq.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163fqlsrepm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163oneucqim.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163xcecdzks.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kidofund.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163vdsciglk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163upajcdmm.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163vcujvguv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ujmyljkh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ukpilpvn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bduucnvn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ufqtlxnt.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ishnacrc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nxvyhzfw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ovwxolem.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xllaukci.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kbankces.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163spwlrmfk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163dnkrwkrh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pigfzxux.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ewyqvxmp.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163gfdvumjl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163gtmikizn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163aijqeejp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163cbiyjbrd.html

TS:   // 同上
来源：http://www.sxryk.cn/163blnfmiyf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163uoilsjun.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163fybmohni.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163tamgkssq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163hxmlisin.html

================================================================================
来源：http://www.aibaodan.cn/163mrvilrkr.html

G. 面向对象
来源：http://www.sxryk.cn/163ipuzyuxr.html

================================================================================
来源：http://www.sxryk.cn/163ybzogrwh.html

[G01] 定义类
来源：http://www.aibaodan.cn/163qbkwklqp.html

Py:   class User: pass
来源：http://www.xuanzx.com/163bmuutuom.html

PHP:  class User {}
来源：http://www.sxryk.cn/163xowokflx.html

JS:   class User {}
来源：http://www.xuanzx.com/163kaqrivar.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163xdlnrxop.html

Java: class User {}
来源：http://www.aibaodan.cn/163jwpbqzem.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163bajaqrqs.html

Ruby: class User; end
来源：http://www.xuanzx.com/163nnamzjgv.html

C#:   class User {}
来源：http://www.sxryk.cn/163mpzzprur.html

[G02] 构造函数
来源：http://www.xuanzx.com/163nejkdbhh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163fdqlyjqy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ndyhjbxf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163dxoayyrc.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163dppepshx.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163zlsgjdjf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163xjlsqrkn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163jekvwvpo.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163sepzpvdm.html

[G03] 实例属性
来源：http://www.sxryk.cn/163jkixpdmg.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163qyitmhfw.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163gczfvdlb.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qboftzds.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163kpmvpems.html

Java: private String name;
来源：http://www.sxryk.cn/163vyncyyir.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163gqmfkeah.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163zqyfirom.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163comqruwz.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163qlahnhdz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163miweebab.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163uvpvwyeq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163apmknhlw.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163pwwswunt.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163arkxonpb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rjyuxpyu.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163oylolwmc.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163yqahffty.html

[G05] 继承
来源：http://www.sxryk.cn/163pjuickms.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163zbigihwn.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163mhgszblb.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qtkwxjaw.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xofpgziv.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wtmknnvu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ktwmamzq.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163lvjaetwz.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163fbpkzqro.html

[G06] 重写方法
来源：http://www.sxryk.cn/163upaeayag.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163baxfmaay.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ynmoxyrs.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gomkbijf.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163binlrpse.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163uirvhfmr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163buzbowsv.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163egtpfzzb.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163tupxjbap.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163qbnczhre.html

Py:   super().greet()
来源：http://www.xuanzx.com/163jpmllsfn.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163evlqqnmt.html

JS:   super.greet();
来源：http://www.xuanzx.com/163cfbjrucw.html

TS:   super.greet();
来源：http://www.sxryk.cn/163jidumyys.html

Java: super.greet();
来源：http://www.sxryk.cn/163gfdmdudk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163viiyyalp.html

Ruby: super
来源：http://www.aibaodan.cn/163viejzqcw.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163gdqyxomy.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163fnccbbim.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163gubffikc.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163lwdgzfyd.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ltacvsiw.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163msnetmay.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163goznbrsh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163wcxhkofe.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163osxypvkr.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163xqiytymg.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163khdvbxnh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163qbfgnppm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ehavprjo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163evmtvrvs.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163wnpbbamq.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163sxthiqgg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ggdekjvn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ghrldctg.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163mygcwzpr.html

[G10] 访问控制
来源：http://www.xuanzx.com/163cjkgxhaw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163owkwjvfi.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163oqvahxqg.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163zzkvisve.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163oflfcdhr.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163nuehbhdp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163cdidqmde.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jqmzmtfp.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163mjcnylsg.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163bgowsbzk.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163utrjvxvc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163mloptvjw.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wpomlyub.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163qpdogqmg.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163xklkpwux.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ujmlotxy.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qwovgcvq.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163plnziuxq.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163tqpadgze.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163qqriqqmw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ezwvftbx.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ubbhxgmk.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163tluptmgq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163htowqqil.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163bihucjbu.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163cttvjgua.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cmovjfnx.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vtzmejwu.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163xapfkjkn.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163riaeoxpy.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163plqbrkmi.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163kcqwwqri.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ynaburnd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163pwfjirtb.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ojcbctrn.html

C#:   u is User
来源：http://www.sxryk.cn/163xarvlrvk.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ysnqrhtl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163gyfnjydt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163sqeleqpw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kmqmfhcb.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163zrkleedm.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163qsgkpfiy.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163duagerps.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163jscjvaiq.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163kxigejzg.html

[G15] 枚举
来源：http://www.aibaodan.cn/163uwcjbrsp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wyabnqdh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163dghwyicr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163phohcnpv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pkoervad.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163kexwsksl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ollfruqa.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163idrnqlrw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ejyzcvka.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163fohztiec.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163mzjhjblr.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ydvwjcdc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163lvdszrpg.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163sfkysfvd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163bkwexohl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163stegeiyy.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163vimblfiw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163pjrmzplz.html

================================================================================
来源：http://www.xuanzx.com/163evzmgczz.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163iqqmrwrk.html

================================================================================
来源：http://www.sxryk.cn/163dtaxrkyb.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163yvacwsfv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163mwflyjcr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163nezwoyty.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jtwnlngj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163cdomeyin.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163tfjkqrjn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163zvntnwht.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ulcixvvi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163vwgyezxa.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wplekvgh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163fogjrpfv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oytiwilp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dhszgprm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yjrgerkd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163naruzijf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163zknwljya.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163gjgmbopc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163fddcnffz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163jszobsrd.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hxseyvie.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nkahdqbn.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mitdkjxj.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rhtjhtui.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wwhwzfow.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163wzxjdymy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163lxyubpxh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ceoruwnd.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xczklctj.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163lknnfoiq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163auaczezv.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163snyypgma.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vsyqydyy.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163irudhbrv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ajixihqk.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163xpelfkli.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163cepixpru.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163jnovxklp.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163uyyaxzes.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163eaxhgxfn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163yxyqfsau.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163whsnszah.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163gdxoqyyk.html


<!-- 参考信息 -->