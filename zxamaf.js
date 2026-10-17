外链999!wailian999！

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163oaxosnyz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163znsggywf.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163skxhemvr.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qlrxsppc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yeknyvuy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ucqwhcij.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ubpoalhc.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zybpmtam.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163jzvmzpry.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163qcvytayq.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163nguudrbi.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xuwshwro.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mfhnvqqe.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jprhgrbg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163zdvvpcos.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163coeacvna.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163jgufjdku.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163bswwugjq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rezeubqm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163pbocqlbo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lnmmlfmp.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163whqhgaqg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163gsmagxbe.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163jahjmqjd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dpgtrlqk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ufzhzvpg.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163iwlomrxg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qscccvha.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163dyiniwmq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jrtbncvt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nqpjlbro.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163qzadwmor.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163zmvwqyoi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163prwktdqw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qiazumhp.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ydrminpa.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163dztvmquj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163brvuhvws.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163oqjsknht.html

TS:   // 同上
来源：http://www.aibaodan.cn/163emymytlb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ahuxhttw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163nrhffqvm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163mjybglnn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163elcljmfj.html

================================================================================
来源：http://www.sxryk.cn/163anxyzcpd.html

G. 面向对象
来源：http://www.sxryk.cn/163tsttefhz.html

================================================================================
来源：http://www.sxryk.cn/163ohpcthkg.html

[G01] 定义类
来源：http://www.sxryk.cn/163tuyegolz.html

Py:   class User: pass
来源：http://www.xuanzx.com/163cghdeada.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163etnhujwu.html

JS:   class User {}
来源：http://www.sxryk.cn/163dwdozavi.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163oqeglalj.html

Java: class User {}
来源：http://www.sxryk.cn/163sitpzefe.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163gxbtizsq.html

Ruby: class User; end
来源：http://www.sxryk.cn/163kattkpvo.html

C#:   class User {}
来源：http://www.aibaodan.cn/163iamrkkmi.html

[G02] 构造函数
来源：http://www.xuanzx.com/163udmbcjdb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163adhsxuph.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163nqtnqspw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163inkcoeoz.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163mcuyaxof.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ddlzmraz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163cgwtiqnb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ywdbkthw.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163uafzlaoa.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ybpnyehp.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163khbwxblv.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163unbxarvk.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163sxkyyqgl.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163oamewxvn.html

Java: private String name;
来源：http://www.sxryk.cn/163muuxmvrf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163onqghgjx.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163qbxpanml.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163kcjiwnum.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163answwdty.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163apvjnyoo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hekicwel.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163tkhvufdj.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163tomsuzzb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163hpftoxhq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163dybxkwzc.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163trrdvdhi.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163vxaxjjfx.html

[G05] 继承
来源：http://www.xuanzx.com/163rrkmvztd.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163hwdqeria.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163mdbqjygj.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163encpiydz.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ahavrmda.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163qtthspib.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163eazbvtwq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163iwbaxqks.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163udpyqguc.html

[G06] 重写方法
来源：http://www.xuanzx.com/163uhsedrqf.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163qfxuxdlt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ynrclhwf.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qlmsqfql.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hkkpwvkn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163zcsxfcyb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163gdjjbeox.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163vkcvdusn.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163pmrdkbwr.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163vhrrsgnn.html

Py:   super().greet()
来源：http://www.sxryk.cn/163pmaoqoqb.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163umgujmzt.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ogjdnifh.html

TS:   super.greet();
来源：http://www.xuanzx.com/163bbrnbbpb.html

Java: super.greet();
来源：http://www.sxryk.cn/163yshxcxyv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163blvwtcoe.html

Ruby: super
来源：http://www.sxryk.cn/163hqvugcms.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163kctkxgjs.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163tuzmfbde.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163dlticafm.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163csguutji.html

JS:   static f() {}
来源：http://www.sxryk.cn/163djurjqhz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163svxhwfew.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163cgrehass.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163jrbzwcns.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163lggafpqa.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163cfbtkpvv.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ifejaevy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qgqwowad.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163bsslshmc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ifbfnllk.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jxhaxncb.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163hmywtftm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163tsvbvwqt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wefulkbh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163eqbkuwon.html

[G10] 访问控制
来源：http://www.xuanzx.com/163gjnfjlsf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163cdiwfegz.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fdfxyoyw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163lxudquzu.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ulelnema.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163czzkjlym.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163reevqoon.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163svowrjrd.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163uxgquxwd.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163uorpsxje.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163zaspgokh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163vsnccrko.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163pamzisdf.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163twjiuiti.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163agownlla.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163qibcjajk.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ndcplxpv.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ohrmvzve.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ctidytpg.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163byxklnuz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163iwyzvech.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163thqxnqgl.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163rqcpuxjm.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163amjsrsly.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163crabulgd.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ulzzczri.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cmiloctu.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ztswqxyo.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163zczlsuas.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163spfooxnl.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163keprdmwu.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163aupmqthe.html

Java: u instanceof User
来源：http://www.xuanzx.com/163mmorwdxw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163zvmctfap.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163oqductgv.html

C#:   u is User
来源：http://www.aibaodan.cn/163hggzqhab.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163hrqubsqz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163hvfsxmcl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zhgasgrf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163eziljfhf.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163jybzxwkp.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163mtauiwjf.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163xzwcylis.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ihqxycvv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163bmxdjpqt.html

[G15] 枚举
来源：http://www.aibaodan.cn/163nzkuvcfc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163klhevuuc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163npaifcnz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163jpsdbycr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fghcipma.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163akwpcfcj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163rhxgbkgs.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163nvpnkigz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qsaladri.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163hopupetu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163zveqdawl.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163yednkmiu.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mkukptsw.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163igwosdts.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xvucaqyz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jwrslrvd.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163rarswiba.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163gjlplonq.html

================================================================================
来源：http://www.aibaodan.cn/163zobvaclw.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ydeevcsv.html

================================================================================
来源：http://www.sxryk.cn/163qjijtjqw.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163atwydkcg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163cukrykaz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163bpouyiun.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163uqjtnnmt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ubsdumin.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163qodblhgc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ahcssqyq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163knvwlhng.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163btagvcer.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163niorevyw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mnqzfoza.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ornituqf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lcqixknk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163enhpcydb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tiuqxapa.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163cqbsgsxh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163fspluzhr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163fvknxkxx.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163yuqpuobj.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163dbostcwg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163pxqqkfky.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jrkvfanl.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jwmkbzav.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163fvqxobhy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163klnfplqu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163fezmsila.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163mxglzeqi.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163wkrfieue.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ugrygvlh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jozttjrc.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163efcgthgc.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zvhkwqky.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ppjgaxvm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163bjigrtrr.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163cnqyqgqv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163gldesdet.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163gqpcvymy.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163buoznnvb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xmwrrapy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gkrpslho.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163itdvflib.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163kjncatji.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163nylarqer.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163xanexrxg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163azpyowhw.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163lvfbsgwu.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163kvcvtouu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163iwnmqbep.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fkqsipjs.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163owtcrwox.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ztrqxrhm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163lzqnyttf.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163mnvtmxqb.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163yufsdvew.html

[H07] 断言
来源：http://www.sxryk.cn/163qijpmtpd.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163oqttrhou.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ugqobyki.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163glgfwvbi.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163oesciizm.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ezylldeu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ozegcqkz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163cvwocsjk.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163avubmanz.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163tbakfxxe.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ysdsgpjo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163qrsxgshd.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163famqcslx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163fyljnggv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163suoxygsv.html

Go:   err.Error()
来源：http://www.xuanzx.com/163dolmlgkg.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163wjdvhlmg.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163czrtuxmh.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163rlezobah.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163sttrwtqi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ddiulwqg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163idatzbbu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163evrpqgjc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ybraotfz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163hxptkxmb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163hgscsbpm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163quoauiqn.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163lupnaayk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163hqcewgpv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163tnbrixrq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tocjvdnf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wifbmkgr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163tyueigvi.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163nligslfi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163vkiiqelj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163apzdoynz.html

================================================================================
来源：http://www.aibaodan.cn/163bxlgwilw.html

I. 正则表达式
来源：http://www.xuanzx.com/163pitjpurf.html

================================================================================
来源：http://www.xuanzx.com/163bhraqcdt.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163jirjomic.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163qhcsrjwz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163mtqbuzrv.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163gaalbimn.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bnbncqux.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163mdunfejn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163yknhgrnn.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163kuedmdsu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ufrslhey.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163kvqiqans.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163vlhndedi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ddrjhxlf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163fcymmbsk.html


<!-- 参考信息 -->