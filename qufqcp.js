外链999!wailian999！

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163zlluiujg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163odllhdxy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163uuovcbbb.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xijqvrap.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mqpercyu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163gejbcrit.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jogeoscz.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163mwyqpyfh.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163fdzdzesp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163hjoeyqqo.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163oiubiypk.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163evzmsyvt.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ridpwlyp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oclrumpn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163iedzewfj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163dfeczrga.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ggskswve.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163rcduyxhj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fxxjhohr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ghcjizux.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yuycfuvp.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163cmuqlgts.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ukgfpvcy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163jsdbebuf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ukbelqxw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ashzsdyz.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163nqoyyuyf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jzhfvynf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163yrvzqclb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rrdygtlc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rizvhtsu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163mvfdujut.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ryrjlrof.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mwfyhllz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163asdqxkvo.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163vdtvccag.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163kidfoxdk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163tehjcysc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163cmioyoqy.html

TS:   // 同上
来源：http://www.aibaodan.cn/163gqqtvwpr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163hgfjpido.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163vpkjcpim.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163dfjxrost.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163udlcgxqu.html

================================================================================
来源：http://www.aibaodan.cn/163dstinshp.html

G. 面向对象
来源：http://www.xuanzx.com/163bydmmjtf.html

================================================================================
来源：http://www.sxryk.cn/163xxjgneyw.html

[G01] 定义类
来源：http://www.aibaodan.cn/163zkdhqkee.html

Py:   class User: pass
来源：http://www.sxryk.cn/163gzbaeilo.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163iizxixim.html

JS:   class User {}
来源：http://www.sxryk.cn/163nptuyzrq.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163krvrlcay.html

Java: class User {}
来源：http://www.sxryk.cn/163dcdwvoci.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163qrnwuvqq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163tgvdujco.html

C#:   class User {}
来源：http://www.sxryk.cn/163debdhmhh.html

[G02] 构造函数
来源：http://www.xuanzx.com/163iyblhvmv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ixmndten.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rfmjzjdv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163pwvsmkqq.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163sultwdvu.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163yqognwvd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kdprvwet.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163miahayng.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rokkkqwi.html

[G03] 实例属性
来源：http://www.sxryk.cn/163cczilhlw.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ekjuyxcd.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163heqfxjvy.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163hxsxprqi.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163tajitnle.html

Java: private String name;
来源：http://www.xuanzx.com/163schulhhd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163uflwzsqv.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163frhyyozn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163lznousfz.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vzqgfmxi.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163bhonnlks.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hwsdlijc.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163fodzlixc.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163auebhseu.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163fezatxeo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163irtcjcjp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163fvscacib.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163aayfjfcn.html

[G05] 继承
来源：http://www.aibaodan.cn/163uknvxgdw.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ydquyhcm.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163bxmqfjye.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wnxpbmue.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tmprecyy.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163gwagdqsq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163vnlgtmuy.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163feoesqkm.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163fyxgykpf.html

[G06] 重写方法
来源：http://www.sxryk.cn/163wkynfnby.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163yuzdcbts.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pxkcgzxk.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163flqcmgmw.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ykdjaobu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163woymmgoc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163aimovblr.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163jswfngku.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163elhktrly.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163epafjvts.html

Py:   super().greet()
来源：http://www.xuanzx.com/163vwowfwiy.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163mwbpeqhi.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wsplsryk.html

TS:   super.greet();
来源：http://www.xuanzx.com/163pnmakkht.html

Java: super.greet();
来源：http://www.xuanzx.com/163lydvaorn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163diedlnqd.html

Ruby: super
来源：http://www.xuanzx.com/163nngvvvoh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163amrhfxya.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163fprbnibg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163slmvwpbq.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163uvmarhxq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wfzyfgeb.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163tnatomhs.html

Java: static void f() {}
来源：http://www.xuanzx.com/163yrupteaa.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163wfykfqus.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163wszyuhzo.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163aaerwvfj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163mkqgkdat.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rxxwwsps.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ugprbpco.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163gjgolzyv.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mlhvrdeh.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163nllydvcv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vsfeweyl.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ffcgubpq.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163fomvouar.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163fakhdlon.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163jpmngryy.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163trgrpknp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ucsfeivm.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163eluwwvip.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163vjsaeoln.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163pyvcnufq.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jtbmocrb.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ipayobon.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vgtbllcf.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163llqedxlz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gypkvtwp.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163sbqzmniq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163gonbpwoa.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163kxujtdmh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163xwancoht.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163kkxpiicj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163nodqtceh.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163yhtyamlt.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wedbdmrq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163oxhckfql.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163zdrvupcm.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163szjjxjvw.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163fxskewxr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163gnetkovi.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163bjmzzych.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ohrugbuj.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ifqnwwjn.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ifpybelk.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163nhcwdgrz.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163euhjdebr.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163nqkibbjg.html

Java: u instanceof User
来源：http://www.sxryk.cn/163icxlikry.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163blhcstzf.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163okzxqqaj.html

C#:   u is User
来源：http://www.xuanzx.com/163qhqnlukr.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ranqjgqz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163rgwkcrof.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163pjtsitxz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163gntawxdv.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163gahxrnlg.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ajgybfmi.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163bwaleoql.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163pigfkvyd.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ljpreijx.html

[G15] 枚举
来源：http://www.sxryk.cn/163nheryxvi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163lyqmyukh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163iyojuvay.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163qhyhglsd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ucbevffu.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163nngrphzm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163nbbqhcho.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163fwpjsqkq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yrlrgnrt.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163huqohvgs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163zpickshd.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163fezvcpcv.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mpmvitbn.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xctzrxhp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163eaktoazl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163whtdjvvw.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163auhhjens.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163hombsxbw.html

================================================================================
来源：http://www.sxryk.cn/163uhlsdxcj.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163dqqfunrb.html

================================================================================
来源：http://www.sxryk.cn/163lmpzxduq.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163mirbutbv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163qphgufxc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163xascquhz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hrzwouux.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163upiygfjc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163vmkdympq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gbxbtdbo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163yhbriwqt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163kbohbxif.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163jkmajuwu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163vurkielw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jxnyzcwn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oasubxfv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163actmcjfl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jztankuv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ztdhuomo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163vaqhbddb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163gszrrxok.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163xcplsfji.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163rghcrojh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163rabipslk.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mckwwqtg.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163uszlobbs.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163deqpnbgt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163esuejpof.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163pcfqprqz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163hmxzlwfc.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163iimgbhuo.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163qspipvqp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163nzcxuvta.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vmmeqyva.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nmknctvk.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163vibqdvdz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163pnveotdp.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163qxusfznf.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163zdhpkdyf.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163bpbqwdch.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163tyxprvyi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163wamvunyv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163oczhkzzn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163tlgviche.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163bsbvacla.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163usubtpqk.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163upyfrwbw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163yntjtojz.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163opjtmrwq.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163nmtyfdlb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ffbsfjas.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fphhuifq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lafoktrl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163vcdiojdv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163itgukueo.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163iouxbfvf.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163wnkkolnx.html

[H07] 断言
来源：http://www.sxryk.cn/163zclkxclw.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163fcomkmmp.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163mqisgbpq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gdwzmnuv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nkwszqpy.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163bzkvcoty.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163cmdmzcpt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163djhysmgn.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xuounijm.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163azfeuosa.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163zybcrjfq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163kncyttyl.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163otjxkkyp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163iguhyfcg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163jnfpfgyi.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163opmrzfzn.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163uhnapqew.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163nwecuocz.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ttswxdrv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jzhgmwdo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163jhugibah.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163qhaqlybf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163fnvfqwmk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163gaamodjk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163xetnluso.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163yrovegat.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163udbutndz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ngkyrsuj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163fqegkzaq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163fbzvbtmp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163uadzzvdu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163kdvruvvg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163msnwsnai.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ioznxevk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163okphomro.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163tmcremig.html

================================================================================
来源：http://www.sxryk.cn/163lujzhjjm.html

I. 正则表达式
来源：http://www.sxryk.cn/163euwdqyrl.html

================================================================================
来源：http://www.aibaodan.cn/163zzfffkne.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163edmwyfmj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163hpriwkhq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163maoedqqe.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163cuyzwwdu.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vvletkmw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163tbopnlgi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163pudzodaj.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163csqucipw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163edjqtikm.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163uhpezxzy.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163xhzalwpz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163xwtxpxxl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163rfxowybs.html


<!-- 参考信息 -->