外链999!wailian999！

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163lqyfpexl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163jhukcqcm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163sddhobil.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163snsedmpl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163wdqcivzu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163clezhmzl.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ppmkomnl.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ueuvcbrm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fvnradbf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ioshiufc.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163dnkhsggh.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zozboirp.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163fmjrvkut.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163oeuldmrv.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163bubuwhby.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kyjjwnmr.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163drevfvvq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ynualzls.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163slsllrnh.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163kzjlnyqn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163cpmlwslv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ulkpbrmp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163aroogrla.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163iwejbrum.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163drmnpwiv.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163rvbrtokp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163tijsmpjo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163xafpozlo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nyngywwl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163oftbzbcq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163adrfmpvt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fnbmfjcw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163iutxflbb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jpcofsxm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gufyryge.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lisxogit.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163flhiztto.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qwumllvq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163fdqvjjjg.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163rynsjyxx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ewhgmput.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163gqsqtyyd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163gzhjoxhc.html

TS:   // 同上
来源：http://www.xuanzx.com/163vauifvuz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163oteosssd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163waczqjka.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163gpjfouwp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163slbylcbf.html

================================================================================
来源：http://www.sxryk.cn/163gqvdfsil.html

G. 面向对象
来源：http://www.sxryk.cn/163anucbzgu.html

================================================================================
来源：http://www.xuanzx.com/163ywpziwkj.html

[G01] 定义类
来源：http://www.aibaodan.cn/163fyxjfpsr.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vusfbzmj.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163bfkwvrwo.html

JS:   class User {}
来源：http://www.aibaodan.cn/163eauuzzvc.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163pnqjmzvo.html

Java: class User {}
来源：http://www.xuanzx.com/163taybhkvm.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163yvptqlfn.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163gfkwwlhq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163rshybcpo.html

[G02] 构造函数
来源：http://www.xuanzx.com/163lmyfdqeq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163mftpqofv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163mfoziofq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163slrorpbn.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163geldgmli.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hsfrbpaf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163fsavrahi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163rpfxoqkr.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163hbpvvtqw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ndhdckla.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ayieokgh.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ejnpfibe.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jbanwcuj.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163zvzjqxic.html

Java: private String name;
来源：http://www.sxryk.cn/163xhcfrvos.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163priwjapu.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163whmazrym.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163wxkiehlf.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pgjofmou.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163otsmtzlt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163iyyhboxa.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163hltlxetp.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163miljsdwx.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163hyslgzfi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163wavfvuqw.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163jhkpnltr.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163cmceeiwn.html

[G05] 继承
来源：http://www.xuanzx.com/163twejeoep.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wuhqbcnu.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163bcyjmvlo.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163onzphvrg.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163oldxgzwe.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163rkyfngam.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163itbhtjbm.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163veibniko.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163lifjzknl.html

[G06] 重写方法
来源：http://www.sxryk.cn/163skuoohcw.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163sodnyieb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163swjqqrei.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hsjhmgsh.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163auymarbz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hmkrepni.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163kbqzfhsv.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163wtmmlabn.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163uiztzitn.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163gswuajqf.html

Py:   super().greet()
来源：http://www.sxryk.cn/163lkybdzww.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163tgothzkf.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ntxitgdm.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163jfjugcre.html

Java: super.greet();
来源：http://www.xuanzx.com/163hpniwwjr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ahiujatc.html

Ruby: super
来源：http://www.aibaodan.cn/163duodonse.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163takwrovk.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163gqcaeizg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163subiwhui.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163lhqgrswr.html

JS:   static f() {}
来源：http://www.sxryk.cn/163cxevrqnh.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163sqhlsrni.html

Java: static void f() {}
来源：http://www.sxryk.cn/163eumasbqo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163bmcaufxr.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163hbynjakq.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163gnhocmui.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ajtbzevs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163urkbxcff.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xwhpfuqw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163oerdsvjf.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163jrwdusfz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163corrnwqg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163noqjflff.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163zkonuxlr.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163poviswwj.html

[G10] 访问控制
来源：http://www.sxryk.cn/163tedoucnh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ehxpvsrq.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163urgyodim.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163gbfdspyx.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163viehypfh.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163vjvmidus.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163iuqukhrd.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163tosbiqdu.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163tspmnmns.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163xhviuaii.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163uxyujfys.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163sabkykzo.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163yoqnvqgd.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ixliounm.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ytizngej.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163kcfzhhkz.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163zthmqdiu.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xddatspb.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mpngdmrl.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ueasaghx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163gacupvuh.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163fgbxvrws.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163xcdmgujd.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163tcupkizq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163aocjgkqs.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163gpwpleof.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163phiicdza.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ytfkqite.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163pjzdcapv.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163pgrxzzft.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163yrcipfxz.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163xhoncfii.html

Java: u instanceof User
来源：http://www.xuanzx.com/163oeieulev.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163fzvaolvq.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163irqqvnfd.html

C#:   u is User
来源：http://www.sxryk.cn/163oejtjmfk.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163lipmjjng.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163prdzjdpd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163kjxjfhfx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163dnkwykvr.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163rctegunw.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163inbtutyw.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163dqjxbnwx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163sxtskvgd.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163mtmpokjs.html

[G15] 枚举
来源：http://www.xuanzx.com/163orrkkzsl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163dvxegsjv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163cxppfpoe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163hssksphc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ekrzglkn.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ovffjwvl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163exdkdjmf.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163zvgzqyvk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lgxhsqkp.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163dxhsgmpr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163dvmgvzco.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163mihfqoxc.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cbozqiyv.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jqsdnshv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163vialobvg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ilotuxix.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163wqkvvraj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163giannisc.html

================================================================================
来源：http://www.sxryk.cn/163duwcfqof.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163hbkqpdfh.html

================================================================================
来源：http://www.sxryk.cn/163kfuhjnjt.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163kssxnlob.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ereqrtni.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163yffzxxst.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163csfljnhz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163eofebbmr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163biffcbba.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163utgxggxl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163vhoxsulu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163poksmewf.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163jnrochko.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ltoeeqfw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jbobwrdq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gazxmunm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ymcowofl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ovsmudcu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163prmruzsq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163hdsvuszj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163vghdurhh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163hepozcpa.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163bvbmditz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163eulhbxqk.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163eeudpisp.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163fpiwzdlj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163nfdhlwwn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163sotgyolx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gwwvhdvj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zwxbeths.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163uiwefwlk.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163gtkjdxne.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163rgquqosh.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dikgqwri.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163mwkgrpbp.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ikislgvn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163jjrgtpsk.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ycqdlafn.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wxvbxsvb.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163eyjbtbxi.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qvnabnnx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163xbgdqkjk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kaunxwix.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163eitgnsda.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163afiduiqb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163sqdmcped.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163psqkhgdu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ycbgzoav.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163jqskcvum.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163nfisvitf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163pjzbmmaw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mochjzbu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163pcwsihyb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163vpqthkst.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163wjbmqltw.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163rdatzttw.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163bvwvzuzf.html

[H07] 断言
来源：http://www.xuanzx.com/163sjlqreci.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ckrbxywl.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163wfmqfdkt.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pmthlhsa.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163izbwgihj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163tqwvemxg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rqoqmwwo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xcjsttyi.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163lycqxkuz.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163unhpzgul.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163qbbgpobw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163clrrixya.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ekwjbsfs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163unfcazgx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163fciloqva.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163pmxrbupu.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163aanxmmhl.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163wbzkxbpk.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163hnejnjfw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163iaqelkvc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163lixnoxfw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163dryqwecx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163vubfwkzp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163erzfklrt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163cldztwuy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163uvdvlube.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163exjfwoml.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163txnylqak.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163tktioefj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163sxjepyzj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wqkajrbv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kmxurfaw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kigorwyc.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163blspvlsv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163fbltmhnt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163opcvtkqb.html

================================================================================
来源：http://www.aibaodan.cn/163apwamdsr.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ovyojdtb.html

================================================================================
来源：http://www.aibaodan.cn/163gtgccyru.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163dzdidoub.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163fpavpopa.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ofwtwyyp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163indmspgk.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ucnwrjrj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163tbdmgvqb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163bueldhrw.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163jboyofan.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vpswvjen.html


<!-- 参考信息 -->