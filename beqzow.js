外链999!wailian999！

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163xewdbsov.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163lcujhnko.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163psvpaotc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163exmetvyz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163mkecifkl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pozaghjx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163imksiqlo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163tmlvzjgc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163xwxplxtk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rmjrqlpr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163aijawlax.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163studxdzp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vnxlalaw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163futslbfe.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163acazbesd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dadguboh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163wefeiyor.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ftwuaihq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163enhyoyii.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163kcdmswgi.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163nmqivfsx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ndvfhike.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163srwkzutu.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zxqobmos.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mhaquywm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gbasiyvr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hkpmccnc.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163pyuxdbdw.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xiqheogc.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ktpboaxv.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163aqhvycwb.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163lhkdesta.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hhwlgtlm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xuufixjt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kydflxjq.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163odlwsbic.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ephwnxwr.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163cfmburpj.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163pepdbcdi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163uxisjqvt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163emxzfrzf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hvznslap.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yezxpmkw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163csdjstam.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163skjvnszn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163umlsprcp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163psogrkhw.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163bzfwjxoc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163mxslvhna.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163grhhayop.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jtxtefnq.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fvkvvidq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lqnjffjg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163hizgkbgu.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163nzbltczh.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163nkpekzfl.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163vmbnpnwr.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163mejentij.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163vvodtdmp.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hvjevuzs.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xsbbybzx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163htqrzqvn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163gmzawmrk.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ugstoijp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163vpsuripq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163myvbutql.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ilsofcmx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ccecurbe.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fqohhlvf.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163musmqsmr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ksmkgnux.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163sepvbjmm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163muwbjduj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163osvyqwuw.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163cxymbizs.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163klxbxvyb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ydjbyzme.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dczrmehv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aoivqgie.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163vemnupwk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ghsgmiiy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kanorovp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163jsioucvv.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163siidkkqa.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163cknafmmn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163latoiwns.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163wlttunce.html

TS:   // 同上
来源：http://www.xuanzx.com/163sorhgszj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163azykmztd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163kwislhpp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163vbmrxwsg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163sclemdvh.html

================================================================================
来源：http://www.aibaodan.cn/163fdxkaoao.html

G. 面向对象
来源：http://www.sxryk.cn/163bczfwgdw.html

================================================================================
来源：http://www.sxryk.cn/163ifuxngzz.html

[G01] 定义类
来源：http://www.aibaodan.cn/163stpbeqey.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163cfomthhm.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ygjhpldr.html

JS:   class User {}
来源：http://www.sxryk.cn/163vgddrzdp.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163txzduvji.html

Java: class User {}
来源：http://www.aibaodan.cn/163wdfpehgh.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163rlypqxyc.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ayuvoesg.html

C#:   class User {}
来源：http://www.sxryk.cn/163hpreucjj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163qzqyfyra.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163rmshaxtn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163afkknaos.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wqswmkcy.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163wghlpptm.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163mnbclgxt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163xobgipae.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163nijvybke.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163dmcjgtyj.html

[G03] 实例属性
来源：http://www.xuanzx.com/163eldcwstu.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163btfbghnl.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ivaqdbtg.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163zsskndow.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ctogpeng.html

Java: private String name;
来源：http://www.xuanzx.com/163rrqchfta.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163kkikhtni.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163etapfzal.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163afhdjwhw.html

[G04] 定义方法
来源：http://www.sxryk.cn/163lnknsnzt.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163amxyhnyi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vgpzktzc.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163jgtqzbhu.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163jelpvsoj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163iafhtdng.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163gjtxiscp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163kufgzhph.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163lqnbybom.html

[G05] 继承
来源：http://www.xuanzx.com/163akpdgyno.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163iypiasbl.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163zlixvlgm.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vbjwpnkm.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xwulbnau.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163gvmqxfjj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zakshkce.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163jnjfrzqf.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163htwzhukx.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163byenzqzk.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ldaqqdmr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ckmcqdcy.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163thxnfcrg.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163phbsmmui.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163lyzqszhu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163eufawxtm.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163xalbsqer.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163tiisjavh.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ijeklygc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163klipxxbd.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163qyzxgxjs.html

JS:   super.greet();
来源：http://www.xuanzx.com/163igrvespu.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163efrjdllf.html

Java: super.greet();
来源：http://www.aibaodan.cn/163cklczcir.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163nyyaaetk.html

Ruby: super
来源：http://www.xuanzx.com/163pnajeifc.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163hfrcwuyl.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163udjajqih.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163wkrhqane.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163plylkqgw.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163xfltqhwn.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163bysalial.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163oimsenug.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zsolqnrk.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163gnoximsc.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163kneohpwo.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163hmwtcvty.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163oejwiact.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ydxbnmqd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163wpoyjdlq.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163yllayjvy.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163kretgdii.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ccumxemk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163yrimrmnt.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163mdymdvcj.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lpysyzkp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163tfafgkyk.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163dlukmyzp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ajtgphdo.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163hozqegza.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163abwpjqrn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163gwtmagzq.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163eguuoocn.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163exexsljf.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ituvmbpc.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163iiosrakq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ytdmjmpf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163xijrdpmo.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163puntrjsf.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163dkvmybhz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163cnpvhruw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163onvgpbuc.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163lzmrxwqa.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163zhxvoxcq.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ccpelgct.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163kspdzmeb.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ptbgmmad.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163jgiwexdn.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163kpqselhj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163dnciivod.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163kcaskvfv.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163rqsrljlr.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163yfvkbxut.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163rflkcsml.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163vbldjbkx.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163dtaruhmb.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163qfdfqioj.html

Java: u instanceof User
来源：http://www.xuanzx.com/163lyocgabq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163temopaqg.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163usmxgtuj.html

C#:   u is User
来源：http://www.sxryk.cn/163ojjhenxj.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163lbggoneq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163abtrxlya.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163fzjexgjx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163bnbnboun.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163xjaixzpq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163crqqrzxc.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163puceaavr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163nzxrbazr.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163bbnermqn.html

[G15] 枚举
来源：http://www.xuanzx.com/163koknkwbw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163tdhysffn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ydnugqiu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163btmosyxa.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pfaslhxl.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163toxnfgjr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ybcytlug.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163dphbzsmb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qaobixga.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163bwhxspla.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163bwvfdxnh.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163dnistjfk.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xlnfrolm.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dhzpwmej.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wkxcjzem.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dbyosfax.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163hrobcbpx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163qytleipq.html

================================================================================
来源：http://www.xuanzx.com/163wvtsbcil.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163yucixrdw.html

================================================================================
来源：http://www.sxryk.cn/163udxosgkz.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163hnijdddl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163zhohidlf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163urimilgq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hjsdflrm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163haoobanh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xhheqwrv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163jbejhugf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163llxkitzw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163rsykbtcr.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163mqzvsidj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163aukfdwfu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vyztbxiw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cyhefzsq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hpvsssfn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dogglrjw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163fzcttnby.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ykmwddyw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163lcpyumth.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163bhewrawd.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163xgbslgok.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163jczfyzxc.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163helaxybj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uzgitcqm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163yqnzlqhg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ddzmcawy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163usrcbqrw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zmzmnssh.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163nkefrjpn.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163gcsatwpi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163oyetmtbv.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tqcmlihm.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tdmgmybb.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ofslzqld.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ytmzrrru.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163txwoufyg.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163vpyyjcos.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163qugcpfmc.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163htyokkok.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163knfmzsok.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163oxbqeiua.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rhxhotlo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163lrprvcxw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163eeybexev.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163cnmgxndj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163eymtayah.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zvjealzj.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163tvacnwkq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ldplqepm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jkivqpyd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qnrflegl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ifoqmvoq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ojxcayca.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163xncioaib.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163uwzztrig.html

[H07] 断言
来源：http://www.aibaodan.cn/163bpyzqypn.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163suwoxgiz.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163qinkougw.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163adbbxtdn.html


<!-- 参考信息 -->