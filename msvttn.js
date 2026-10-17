外链999!wailian999！

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163fdveqdpn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163hclzslro.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163lavmobdm.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163paepdsii.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ahtelvvn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163gezwcxvf.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hhmfkhxa.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hzrlyqof.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vugwblzy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vupscaxp.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jebrubjz.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163brahwgzh.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163utwencvi.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163kfiolhya.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163jtloeulj.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xoyaiynp.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ecrbttso.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163iyxyipfn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163pucqukpr.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163mltsvlfb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163yqrjavva.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163rivycnns.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163grsgpqmc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163niikzzfc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163klmvayss.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163wdyewcuk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163swghdrrq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163zrhqcsvb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zemtlshj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163pignefjh.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163gglsheoe.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qsuasvtt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rnrptbqr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qbfxfvos.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ehnkyqtq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163xsyonrlh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vsfsndqg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163oheymysl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163fkgsbxzb.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163dzdusyqe.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ycjufdrs.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ejpbekcr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163vyjppkzu.html

TS:   // 同上
来源：http://www.aibaodan.cn/163mttmgvcf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163oopjxdiw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163gzomlrqs.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163oqwwqoca.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163kvzmsjdr.html

================================================================================
来源：http://www.aibaodan.cn/163rvwsnfyc.html

G. 面向对象
来源：http://www.aibaodan.cn/163qyuwzpeg.html

================================================================================
来源：http://www.sxryk.cn/163dvcvnywu.html

[G01] 定义类
来源：http://www.xuanzx.com/163zpaxlyub.html

Py:   class User: pass
来源：http://www.xuanzx.com/163nmtmknhl.html

PHP:  class User {}
来源：http://www.xuanzx.com/163cnlhbiak.html

JS:   class User {}
来源：http://www.sxryk.cn/163gsuaizmt.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163xitcjyyv.html

Java: class User {}
来源：http://www.sxryk.cn/163lsbtluix.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163bdweehii.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163otkvrgeq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163yoohpwrb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163dykfssxe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163txwzxvxa.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163iixeupeu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163hdzfqadc.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163hyiavynf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163fsnhcoun.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163wcylevwd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163pocmlwpb.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163szitjmun.html

[G03] 实例属性
来源：http://www.xuanzx.com/163jgdblymc.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jyhzuqup.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hoqlplrr.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163nmgfukhi.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163guuwzgyy.html

Java: private String name;
来源：http://www.xuanzx.com/163kxflsbkp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pryrmizc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163kndjkexh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163sidsetjg.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ficwrkeb.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vlizqgtu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163fytvdoee.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163nvilpatj.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163yclkjtln.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163dtvhskbq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ucituocs.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163piclnsps.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163tudgpcjo.html

[G05] 继承
来源：http://www.aibaodan.cn/163hdmnsctv.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163uzfumddu.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163zlslzefy.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163htkcuorr.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163baucpdys.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163lqvknikj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163qrqnquav.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163nilqikja.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163qqludkik.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ockyupku.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163cifsrehe.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gmfzmwbz.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163zmoqmpet.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fxcgppiy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163cizoebrx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163sztzwdwv.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163pgulkoka.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163zhpocxze.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163eyrwibql.html

Py:   super().greet()
来源：http://www.sxryk.cn/163sqpteqzb.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163qystaxgs.html

JS:   super.greet();
来源：http://www.sxryk.cn/163vjdtlsye.html

TS:   super.greet();
来源：http://www.sxryk.cn/163qeprpgff.html

Java: super.greet();
来源：http://www.sxryk.cn/163frkgiesq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ugxnjxuk.html

Ruby: super
来源：http://www.sxryk.cn/163lhgzlndx.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163qcodbcgt.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163tayysapr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163mopegaxc.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163yzscnzva.html

JS:   static f() {}
来源：http://www.sxryk.cn/163vmyfiofv.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fufzrgof.html

Java: static void f() {}
来源：http://www.sxryk.cn/163poeqlgtq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163tzifqhbf.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163jafsxlxv.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ttlesmvp.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163gvkjgtjb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163fgzxsvqt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xqlpmbtw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163utjsseyv.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mmvjrkfv.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rlskkbqc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163gufftsvo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163zpfsunfd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kwzbfgxw.html

[G10] 访问控制
来源：http://www.xuanzx.com/163eijfvczw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jdyrocwp.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vxwgtzci.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163prgebduo.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163tpiqapmy.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163uokrzani.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hkltleng.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163hdzobifj.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163gvmeoixp.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tioqrxfm.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163znfyiplg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163skfjwthg.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163taoxtqqf.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vfkxodgx.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163iapfbabj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163bmyqwgzv.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qncgiobe.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163qgglomeb.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ggfjeyqj.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dnznnkln.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163znpcdqhz.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ywwllwmi.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163vyczugqf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163kjudaznc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163lgxorjpm.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163gjfoarqh.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ddylbivp.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163zzktqxad.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163peimrske.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163zgsnztav.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163mlxxjkbs.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ecbxlumq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163yyrmlnmz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163obbzhtir.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163qyvubkaj.html

C#:   u is User
来源：http://www.sxryk.cn/163nsrpmrvh.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163yllvpllo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163zhfuatnx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163qjkbkovg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163evwftgau.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163xeapsggq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163vqiuhivz.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163buyjzebo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163axmknoze.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163rjinigrw.html

[G15] 枚举
来源：http://www.aibaodan.cn/163vmlksrwi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163obqxicfk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163dhleurwc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163nbedyzqp.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rhqjpfnh.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163vhfovycp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163kiutrfbv.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163iqoldocr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nyqdfzss.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163qerfozpp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163mjjzkxcj.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ceokjpav.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fizxuiqr.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cbxqoqgi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ceyjefty.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163kqdhypxx.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wnjysqak.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ydpfnhph.html

================================================================================
来源：http://www.sxryk.cn/163bpeqyggv.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163pkyzsabb.html

================================================================================
来源：http://www.aibaodan.cn/163xocgylio.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163iolabfll.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163zgmwbeab.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163cfjtcxhx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163nwquqbqr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ojecqjhl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163lsoqdthk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163pnksvfxe.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ardpucda.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163lbrahnam.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163lnbzfaok.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163tfxndxvk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dpsgmxng.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163orpcaihq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oryvxjjb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vmjyimwd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163huzipihj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163iyatwwjy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163mhbdymin.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163gxtvgdev.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163iddyomdf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163dozhqleg.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163nkjilzyf.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163skxilhfw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bbohknwr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ciapudes.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163dmyjejlx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163rezzhjjx.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163fqzqdyid.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163mvzldeze.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163zoefecwx.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ggrmmkpy.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163kvbyzhau.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jprnlrqs.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zhxwlkdg.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163pysptfkz.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hvcxwtmr.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163kjzuiysp.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163xjjvwnwb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163svkmbyyu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bbckcnrx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hauzslah.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163doeavvmx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163dewutizl.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163viecbrvt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163wtnigpbg.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163awbhcgqm.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qkhxyjwu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163rhwqlkno.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163idxuzffi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xdhqdpck.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163auspozjn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163whjzgtfe.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163degxypfu.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163picnvnqi.html

[H07] 断言
来源：http://www.aibaodan.cn/163sdnqdeec.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163laucgzkf.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163fiswwcun.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pqutblmz.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hexyegai.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lhmpvryf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163annwovnh.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163tngkolgu.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163cfilxpiu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163sxhtztem.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wctxqlxr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163rnikpunk.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163nenbvorg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163lerlwphd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ekvnzaqc.html

Go:   err.Error()
来源：http://www.xuanzx.com/163jeedlwzm.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ygjsuvst.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163uguyqkpy.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163vvykrdry.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163lbzvfsdb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163hdhedozi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ixufnpdj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163hyxkhioi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163rnhphwsh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163prctrbnf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ykhgetwl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163xaddgoxm.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163tdrjzddg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ofwdsntn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163vzjkqqxu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163efewypwl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wetsnhew.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163bysyvsgz.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163uauajtaw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163gpsczwsg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hoqnmiwf.html

================================================================================
来源：http://www.aibaodan.cn/163eyrnhjrj.html

I. 正则表达式
来源：http://www.aibaodan.cn/163fpqrcmud.html

================================================================================
来源：http://www.aibaodan.cn/163htdaykge.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163kdclohkm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163zyzzcmco.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163deladyqg.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bohxtots.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xskoeavs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163mujlnjtu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163iuvntzcc.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163xlryxwcq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ubocvkqt.html


<!-- 参考信息 -->