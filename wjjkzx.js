外链999!wailian999！

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163tuilwvmr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163pvgmlguv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163wziukpep.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163icfgdrvc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163mohhxdab.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163gatktllp.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163llcemwyw.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163etufoxwa.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jomahguh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163cvypwiir.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163tiztqers.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163kvlrxxbt.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163eudwcyoc.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163mibnvodq.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163pedgwppc.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nphytrkq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163fhqcedkn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ruvpugjz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163rthkbevm.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163gporxyte.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163vsmliiph.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163jwrjmvji.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tkebypnp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163vqdypcku.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fxrqnmlq.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tdvswggk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163etloltlr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163vphitgxy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tpxpsoog.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163gsnencur.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vvtoelvx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yggoxisa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163drzaefqy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tnoxdpqt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dvrjrhkg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163hlgrbogt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163xiizdjpk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163igsqnjcv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163djuqqtht.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163qujfbmol.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163mcxbsugr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ovpvknww.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nylryzwi.html

TS:   // 同上
来源：http://www.sxryk.cn/163unsiotah.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kykedhjt.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163wyebhdyh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163atrojjig.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163fqgeixpe.html

================================================================================
来源：http://www.sxryk.cn/163hkqkdins.html

G. 面向对象
来源：http://www.xuanzx.com/163rztrntia.html

================================================================================
来源：http://www.aibaodan.cn/163jdagvhxy.html

[G01] 定义类
来源：http://www.sxryk.cn/163zowxzcfe.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xvpdgwzp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163mhhdflck.html

JS:   class User {}
来源：http://www.sxryk.cn/163rbjtqqja.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163zdygovrs.html

Java: class User {}
来源：http://www.xuanzx.com/163tvruhsoe.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163iqqgsjjl.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ggguzzvc.html

C#:   class User {}
来源：http://www.sxryk.cn/163enwqiaph.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163cywjpohs.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163rbguagod.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163gvuwqxwp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163bdfteldl.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163xoozyayo.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163lqsrxqml.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163rstpcvfj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163yrpnkyto.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163viymfuwb.html

[G03] 实例属性
来源：http://www.sxryk.cn/163lqngaamr.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163opovwgre.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163bkwhremr.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ukkxeamk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ucalvcly.html

Java: private String name;
来源：http://www.aibaodan.cn/163zwmvowuu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163wpvayruy.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mjtdrsfx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163dfbuqtlf.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ogpigfyz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163vsfdfhry.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163mvemtnrm.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163bvadimpw.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163stocgttt.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163eyalxqks.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163dngkxztb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163tptckael.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163eokecgzd.html

[G05] 继承
来源：http://www.sxryk.cn/163ycahipqu.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163qtejkrem.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163vsaoccdm.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163imakvzxd.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vibzpbrw.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163dqovpwxv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163jiovbqrd.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163hxvwolzb.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163knkwoqts.html

[G06] 重写方法
来源：http://www.sxryk.cn/163adaiidsj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163kqysnuvi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jyhzjnix.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163tziapvki.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nlrsoeif.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ffdvtjvd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ltyzgxci.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ocwsnbqy.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163fgckfpzk.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ygmodxbo.html

Py:   super().greet()
来源：http://www.sxryk.cn/163rcyugltz.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163tpjmmrgg.html

JS:   super.greet();
来源：http://www.sxryk.cn/163bqoorqnc.html

TS:   super.greet();
来源：http://www.xuanzx.com/163cbzpewex.html

Java: super.greet();
来源：http://www.aibaodan.cn/163jubvridi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163rwvsbkds.html

Ruby: super
来源：http://www.aibaodan.cn/163eqhyjweb.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163dcdycpps.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163hohdznvm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163vqoysyxw.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163umjgtobe.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163pouxbyxw.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163eeciejab.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163sxlltczb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zhojpsmg.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163mebuuoop.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163qjkmqcfy.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163hifycopi.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163exnreyue.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bwgskfvz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163krunuoll.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163eavfohsc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163aiwcwzrn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qkoulrxb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163htutrpkv.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163cvobdkei.html

[G10] 访问控制
来源：http://www.sxryk.cn/163clsknxfb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163rgjzhbgn.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163xzljcrxt.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163vandauag.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ikmhiijt.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ihxstfaa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163gpsuhrxl.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163dbzgxgfw.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vkyswsuy.html

[G11] getter / setter
来源：http://www.xuanzx.com/163hxglwqcz.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163tzncfnhn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bmixtigt.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163wrzfxlvv.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163thsuiroh.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ebsgqqse.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163tqmnmfna.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163eezilyol.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163fitrxjvo.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163fffctpwu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163xxxvraxx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163twmeiwjk.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163lddaetec.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163kxcgwnvg.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163aurogzbm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163qpffefoj.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163shxyyjzj.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163dlixhjqu.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163uhedgqrk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163tevamzhf.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163vgkkiopb.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163sfymwdxp.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163poabeqxx.html

Java: u instanceof User
来源：http://www.xuanzx.com/163othiquln.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163vxnvipiy.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163oeyiwwpa.html

C#:   u is User
来源：http://www.sxryk.cn/163rurjkzol.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ejjpditj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163knlzpysm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163aadalpzb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163mhjjxmvg.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163cgsngmfc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lpzasxpl.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163dnebqhco.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163hojszmib.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163mrwpjbif.html

[G15] 枚举
来源：http://www.sxryk.cn/163dncachor.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163hpjrrksc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163grbaivpb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163pnhqzkwy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zlaiboni.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163mlaqtrje.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163rewbfjha.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163rsornsfj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163butfijua.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163qgzgdutv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163fcqsittz.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ltujeone.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jdveebku.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dkrijoek.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163djtbgsvh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163rrniaslw.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xvwymlwk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163kajnvorj.html

================================================================================
来源：http://www.sxryk.cn/163gpqepvcf.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163hhronwkz.html

================================================================================
来源：http://www.aibaodan.cn/163ovfdmwah.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163hcxlzhvi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163cuoaohlj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ppenkhzg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163dcwjnoeq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163cgtjfnip.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163qzbubdiq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163vbkxtrko.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163dtqcdckx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163zrrzrxli.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wwixqnxd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163llyjbmjp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jzharuqk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hjrabgvx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eulrmyjj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mykbmrqb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qqddtlez.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163thxfxnsj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163womolwss.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163avtmhgom.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163wjaviarw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ijcbcets.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ffywfmqp.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163idiemaur.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tgmhswxu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163yshmdryf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163bcmxikrb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163seapifmk.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163cvlwiorb.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163lzspcuca.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163iqouifud.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rqwczygt.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xurtbgbx.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163pvrzdzos.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ngecoded.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163brdgyhzm.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163xzoedqqc.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163kazadaje.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163zxzwtxia.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ljxaclcw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qjzvbaut.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zpgtwnkk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163pcqqhxax.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lwuhumqj.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163pblyvxqm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163lubyotth.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ednzsmld.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163nnzyqsdf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163fdeyieuc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163yhieixuu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jzprqecl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163xllqojvf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163xvkkfspb.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163amnmtede.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163wwwumvpq.html

[H07] 断言
来源：http://www.sxryk.cn/163bfyjmwge.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163xxaqjmdg.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163szpkitgg.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fiknljds.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dulkbrmj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163bqxsvcvb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163zmigleld.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163pefrdtve.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163omdkvyqq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163wvpsqbnp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ryxkgwwg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163wfzvxpxm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163wwywlbmp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163mtrusstg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163arwqbqbn.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163epjxyvnb.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ekaflmxm.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163itlmujgk.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163hghulxtp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163kgksnlkn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163zkgutqtp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163duwiawob.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ewojbisa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163qhiovvbi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163bzkxpdop.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163tmgiqrkn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163hasygsux.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163yqwxhjev.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163kpaljxcj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163tsfwlaok.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fhkanged.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cgzledka.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163rlrvyjpr.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163eestyufi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163xpxvdyfn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163mqmapqgy.html

================================================================================
来源：http://www.aibaodan.cn/163yubdjqxv.html

I. 正则表达式
来源：http://www.xuanzx.com/163mfroqomq.html

================================================================================
来源：http://www.sxryk.cn/163baxjrogq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163qmdxmgbn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163nqzruzom.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163uxscpbjt.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163yeucllac.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163kffgsxcx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ynqyzzmm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vztfycnn.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163wvamwkba.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163zctmvdnh.html


<!-- 参考信息 -->