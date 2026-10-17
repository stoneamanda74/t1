外链999!wailian999！

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163thudcicu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rqfjauml.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bruattgp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ujxqsozs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163nxevfbge.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163fzajnxzz.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163wvynkcjy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163pzcjjere.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163rwkvgkvs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gwqfbvpw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zkzvinyc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163cabqdcxe.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163aewbdqhx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ndqrrgel.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163eypgcuna.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163mxphhinw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163tsdtnnwg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163jqwtfohh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xaatkywt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163owxoxolv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ebvfeeqz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163yujbwapj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163qahlfkvy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163cazcejmd.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163bjljpioy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163tpoyptkz.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ujvcykar.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vtgdsgsy.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zlobsstp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wzvbwpgj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163uakudobe.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163hhesodbk.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163okdpnxlb.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163fzxmphrt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163axwgggrq.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163nprugyqr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xtzgxyhd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jvlfcdwn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ndrtxyqx.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163cpcdnboe.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ezagrdaw.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163qvfvltbx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wbvieoll.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163wyfxierx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163naaskekb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163byunhmeb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tnnqqjup.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163gcjjqmug.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163axtebmie.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ploczzcl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163dedcvbho.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163humqoqep.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163yoawqgtt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163bgtwfggr.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163eqyecmvs.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163xquailtg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fubhgpdm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gntryewx.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163lcgkedou.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ulhfjsiv.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ejtmgtjp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163unpxryxg.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163mfnptmgk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cguiuuxg.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163aeuqvvqa.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163raykcjzy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163zlhgujqe.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163adgfdtwv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163arhndxbd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163cctrgdgv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jagbyjco.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163fjxoregn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163feghseie.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163pjeaqjgn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163rltzdtqy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163dmnpklve.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ivkvklqp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163geszkyip.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ruakfrml.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ciyfcscf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163bbitxxoh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sasjztcu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163exlppiwg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163tgatpzif.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163bsfamycn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mfmccabz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ugiggetb.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163uwkznvtj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163sishvupw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163edsfuctz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163fpymnper.html

TS:   // 同上
来源：http://www.aibaodan.cn/163vxdfvaep.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163jtnmcpnq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jzigncwy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163nscwilag.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jyxgenwa.html

================================================================================
来源：http://www.xuanzx.com/163ocjmpdmk.html

G. 面向对象
来源：http://www.sxryk.cn/163ecyzpyjg.html

================================================================================
来源：http://www.aibaodan.cn/163gssgaega.html

[G01] 定义类
来源：http://www.sxryk.cn/163mhxjxkrz.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163nanvpwwt.html

PHP:  class User {}
来源：http://www.xuanzx.com/163kkkyfwbd.html

JS:   class User {}
来源：http://www.aibaodan.cn/163qgqndchk.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bacgrlcy.html

Java: class User {}
来源：http://www.sxryk.cn/163ykaqgrbe.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163edqdseol.html

Ruby: class User; end
来源：http://www.sxryk.cn/163kgisncjm.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ixwkfzap.html

[G02] 构造函数
来源：http://www.xuanzx.com/163nywnyqiy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163rzktubby.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163xqfdddhw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fzwdinqf.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163wevvaxyv.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163omucoqrx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163saonsmxy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163kvgaurmg.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163sjleftrw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163cczcebov.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163beleadux.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ltyxhtfk.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163zgnmgims.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163qzofzstq.html

Java: private String name;
来源：http://www.xuanzx.com/163mkmaomfs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163vbkrwlkn.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163qxevyvod.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163lchtnsoz.html

[G04] 定义方法
来源：http://www.sxryk.cn/163beruiymh.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jiyedqdd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163qumjlwfs.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163nrmslnbn.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ilxqlmjp.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163vzgairsm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163geyllcui.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163cbbpigrs.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ohhkjjiw.html

[G05] 继承
来源：http://www.xuanzx.com/163fksqierv.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ghdpsksn.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163amigsazh.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163swstbipc.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gxbvouan.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163dywawwel.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163gjbfbuuu.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163uuzuiwet.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163lfmxczhv.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163xylpbczz.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163xiuftpcb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vrfcsxxb.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163xxmnnkpt.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163stfejwbo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163dynlbxdw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163obyqfhsa.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163cjtyghba.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ribqqiza.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163exvvpcbm.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163cztwyqoq.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163qqbuapsr.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ppihotzy.html

TS:   super.greet();
来源：http://www.xuanzx.com/163zigonmhu.html

Java: super.greet();
来源：http://www.aibaodan.cn/163jvmhwrbs.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163kqtbohck.html

Ruby: super
来源：http://www.xuanzx.com/163obxbdtxp.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163tyhhcgya.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163lmxvxzli.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163kiwvuvde.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163yfeplqpy.html

JS:   static f() {}
来源：http://www.sxryk.cn/163hdhuzxts.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163tonaasbe.html

Java: static void f() {}
来源：http://www.sxryk.cn/163lhqfbmxt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163sozkwsvn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163rbggcvam.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163pxcsdurc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ymyfdvxq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ibkukuer.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163lpplddih.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163qwemgzqb.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163gmuiodqo.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163wueanogi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163bfidyjnu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rvzmtwhm.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163wsmfczyf.html

[G10] 访问控制
来源：http://www.sxryk.cn/163rttdmrpw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rsvyuvrr.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163yjjzcqaj.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163kwxpndim.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ybakcmva.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163pptuwqsy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163lyvqjxlc.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163bsqaiajq.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163porisuzz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163qmrynhzt.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163wvtswuji.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rbrnsnap.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wwgdekbq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163qdsxcnll.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163uzhgkubb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163lftybzzd.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163zyaxzbey.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ryyijjid.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163htbsbqbz.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163qxuufpir.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mwjovcbl.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bnmlddct.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163oumgzcsu.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163rsjibfbn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163jlltssha.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163dfpdndvj.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163olioxtwr.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163reropjpn.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xoxjxyea.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163zqjiwwfo.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163upxkrawr.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ztsabkyj.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ehglllzg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163xkcmdizv.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163xbpxgjsc.html

C#:   u is User
来源：http://www.sxryk.cn/163jrdtkbvs.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163snqprjjc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163hyleovur.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163rxrayfzq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163eaetpugm.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163bnimocxl.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163jtfgzuil.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163zpcvniry.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163xvcfjamm.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163wnfwhxmy.html

[G15] 枚举
来源：http://www.xuanzx.com/163wrynvnil.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163bflsblbr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163haymboni.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163zvedfrlb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gdiwfcfb.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163jktgjmiz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ehbfbzmg.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jsmpzbwr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wnyramfr.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163wjhrqxrn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163byfgdpux.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163snktketh.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qihpaahk.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163celsragt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ronruryr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163thcepwjj.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163tlvycccp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ioukkuav.html

================================================================================
来源：http://www.xuanzx.com/163rcjlxdbp.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163pbikjxvm.html

================================================================================
来源：http://www.xuanzx.com/163gqdcltpy.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ubgabubu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163lsdoulfk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163vahfstba.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163udfjkfyy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163cldfezgr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163etmyqyhy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163yedtaqlh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163hbvcipvz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163kqdhtyec.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163pfezxebs.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163vqdiinmc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vbtgotfg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163eyyvonkj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vqttodpn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wrihyiay.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163jxcswror.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163sghzjheg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163bdbavcer.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163dawjijel.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163snucnqkp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163lpbpakbo.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163joianrum.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cmtculsx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163anjigtrt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163hphjepwb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163jyyelxix.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163jsxlllay.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163bacwvvvj.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ctvsgrpz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163xsfrtjlq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zdtcpnhw.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bmzleylj.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163msvmbptd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163wcckptrz.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163fgshtgan.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ggdhaajt.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163cafenzyb.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ixtjolkc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163sizsugyt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mwgethxc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jxyguzlq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zscswfqq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163xmqgqtjf.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163hsfewsac.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163tiwnmmee.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wcloiwpu.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ippukxqe.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163aygyizvi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pazctiux.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163akdpjixm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163eaepqlgz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163sfgkrvjg.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163flukmkkx.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163optfvmyh.html


<!-- 参考信息 -->