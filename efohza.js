外链999!wailian999！

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163peyfypca.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163omnmncgz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163cxafhfwu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163jdexlrxa.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163pjehrviv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163cmnettea.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163wjzbvfqm.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163aiarfpfr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163xrdtfrlo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163cyorfoor.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hdmztrjw.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rvjvgwjb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163yochzudz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163snetcpke.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163qewluptq.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zffqzogz.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ylkcmgmc.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163rggqqfij.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163rgxdkckb.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xkwhzuxi.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mirwizlc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zwdbljda.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163oycypggo.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163orqeeosc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163hiiaefqm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163bnkyciaa.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dzaphnmo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163rldjcdcx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rawwcbkm.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163snsvgncr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163hvovckci.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163slxmbexb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163svqygaee.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163fjpifnbm.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163xagphmzi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163emrwsjcj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ubeoybwo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163whxpravq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hbrclioy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163woezjixt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163cgogwioe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dvkghhut.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163rmrxvjep.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163slshlopt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163numheter.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163tlwcargb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163mzrbsllb.html

TS:   // 同上
来源：http://www.sxryk.cn/163bsmzppmj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163aonymexw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163aebhtacf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163baroepbe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163gymuvzrr.html

================================================================================
来源：http://www.aibaodan.cn/163clspyuto.html

G. 面向对象
来源：http://www.xuanzx.com/163ncgqvtcq.html

================================================================================
来源：http://www.aibaodan.cn/163yvcwuwuw.html

[G01] 定义类
来源：http://www.sxryk.cn/163tndadncg.html

Py:   class User: pass
来源：http://www.xuanzx.com/163droopdia.html

PHP:  class User {}
来源：http://www.xuanzx.com/163byneavvq.html

JS:   class User {}
来源：http://www.xuanzx.com/163ganhzail.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bqifbxwe.html

Java: class User {}
来源：http://www.xuanzx.com/163xjhzvhdj.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163vcktqylc.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163slfvoybu.html

C#:   class User {}
来源：http://www.aibaodan.cn/163qgacyyph.html

[G02] 构造函数
来源：http://www.sxryk.cn/163abdegiqh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ugdavkds.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163egurqlnf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163dqxpqhpz.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163fhbujsxz.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163joxujrtg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163fnozldhr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163puuvgziy.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163agyvbpqj.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163wxaneqpo.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163cyjdzomx.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163lnamxwyk.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163lyrumfop.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163xqzoqotw.html

Java: private String name;
来源：http://www.sxryk.cn/163fgetlnfp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ywgydjlt.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163uhfapvpl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163kycldlyg.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163uuiwajbw.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163spxtuued.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163unlvngvs.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163voardcwp.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163yaahtcmh.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163fgmejyvo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163qjlfeuni.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163zdgofdtu.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163fecpiqhz.html

[G05] 继承
来源：http://www.sxryk.cn/163secjbkts.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163cnofjowv.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163gzmfjnhc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163hohloavd.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vgthnmka.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163njselrln.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163jelekmfp.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ehywuoeb.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163qywqbwrd.html

[G06] 重写方法
来源：http://www.xuanzx.com/163cnqhnylc.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ojijcmla.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bmeyutmz.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163tpoucbag.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zidjguap.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ywjwwodp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163opzmwxvr.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163rstopxba.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163dtlexrjw.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163rcxjazqz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163qigbbxza.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163hrfqkdto.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gdatiqih.html

TS:   super.greet();
来源：http://www.xuanzx.com/163lgwlckmv.html

Java: super.greet();
来源：http://www.sxryk.cn/163txeiwqie.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163filqrqqg.html

Ruby: super
来源：http://www.sxryk.cn/163wjtmmigx.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163jyhbsofh.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163kidvxowu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ljurzmlo.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163rmcoubos.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163pmzcpjsu.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ddtdkevj.html

Java: static void f() {}
来源：http://www.sxryk.cn/163tjmawund.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ofabvtxp.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163iwhvlato.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ylkphamb.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163biwnpmzd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163aeicsvub.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163jcrcndcc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163othqrpep.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163eozskzbf.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163dlmfdvzy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163meopbmkv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163czrlnzos.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163jachwllq.html

[G10] 访问控制
来源：http://www.sxryk.cn/163hlsckwpj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163yykxfaso.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163nikrkgml.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xvjvauwv.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163lbixrbzp.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163cobvctcn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163yasnyfwi.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163tbavolop.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163kyodokds.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163klohnxri.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163tbbwqabw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163lffadjlm.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163zufqybmf.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163dvcxoymu.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163yoqsrrhm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163mawnczua.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163guvhgsdg.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163eineotfr.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163xzrawvvv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163hllvecon.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ylcjwkgz.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163szqgfmzx.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163skpqfehh.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163cdtzytzd.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163autiqvrj.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163fyezqcjk.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163kgzsxrai.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163zwuxebqf.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ymgpgdem.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163uwqxoahw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163rrjeuiqa.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163dgeguwww.html

Java: u instanceof User
来源：http://www.xuanzx.com/163hcmaxgiu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ucasplpz.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163wrqvgqlc.html

C#:   u is User
来源：http://www.aibaodan.cn/163axbpeuoi.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163hqvmsfqn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163lqqppapi.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163fclhubea.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163gdddrqvx.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163xnronfve.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ddenaott.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ogvpgvsf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ggpjxpkd.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163vyqkztat.html

[G15] 枚举
来源：http://www.aibaodan.cn/163aoaxytci.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ybmjgytd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163soqitbqd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gfkjnxtk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yhjukylk.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163psjbixro.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163dmoghkue.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163evabawma.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dbumhksy.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163abledjjz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163iqgobwpf.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ldvbzvhr.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xaxnnmil.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163isjvwtic.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163vmldezgo.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163gxtsbgdx.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163meejigyr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163zsigmuxg.html

================================================================================
来源：http://www.sxryk.cn/163jibtlskx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nfkpozql.html

================================================================================
来源：http://www.aibaodan.cn/163phdxtftn.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rmbgwrml.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163rwlgcenb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163jrgpokqv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wpyobnhz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163akinfspy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163svgnbcfn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163eqjcwtgs.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163hliltgzf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163pnlfcuzz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163dideffwr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163rocikgdl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hcmqzseo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163prllwdko.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163urzbwtvb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zeelamms.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163lfwucnvp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163mwrmobht.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163yoxhillq.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163bsuahmfe.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163gbdghfxv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163aggkctzb.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tifupmwp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zqeyxyyz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fhvdhxur.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163xtxvvhme.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163vrfjrpnl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163cyxdkaok.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163urjxrnky.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163vkesfrfn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163cpzhhcev.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ubearzro.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lsjoifky.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163xuhsjxph.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163boueyaqk.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163xcmblihv.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163iuvvmkhs.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163swzmlgjv.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163fhqmjqas.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163otcfdszd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qwbrfgvt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163izguhhvm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jelzdodr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ipjujozm.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163rmracyzp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163rfrcijlj.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163erjgszxv.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163yjnuwenc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163kexopdws.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lxcxmlze.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163puwksvyx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163piwsaety.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163pzaqmpux.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163zkfafcrf.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163fuwscnsq.html

[H07] 断言
来源：http://www.sxryk.cn/163qlugjenn.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163vogflekc.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163dyphvwti.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zytdxadw.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xnszoixw.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163nijapngd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163csygxdtx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163kiunkrty.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163pbgrozzw.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163thubrulm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163mdobshcp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vqcrxwfl.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163jojtwngk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163odsdkvth.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163yuvatyvn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163itmqrqgs.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163tyihryyw.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163yqblvauq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163cdymskjp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163pwajejiy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163jzobquys.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163omysepra.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163zmsrkyrx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163answrtou.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163wcibolvo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163witxjyfb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163rarcczjd.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163hkdzwzuc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163oeprpaar.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163xzgiouhp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jewkooia.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rrknluun.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163akhzewav.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163soyafwvz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163sowqtlqb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163jppreesn.html

================================================================================
来源：http://www.sxryk.cn/163rghqhdxd.html

I. 正则表达式
来源：http://www.xuanzx.com/163whenmnni.html

================================================================================
来源：http://www.aibaodan.cn/163tneyywln.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163werkzvin.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163igqmxtoy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163vpdzecib.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zdrosoqz.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jpunolzb.html


<!-- 参考信息 -->