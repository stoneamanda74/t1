外链999!wailian999！

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163kfbijreo.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163bombmrbd.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163gchrlbmq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163njtjyaqt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163chbafqed.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ntxroeth.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gejzmabh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163obzupodp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163lqczvipa.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ctzyjqnu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163zambfbfo.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163sctcamyr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ifauuche.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163pmfmsdbw.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ahydhtip.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zuouirsa.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pvajfghj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163jlqokztm.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ppzklvtw.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mjmcdjdy.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163zpgfdjvj.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163wtkxeehp.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163zoptqlku.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dizmktac.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ztyqxhpx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163idqqwxsn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ertelhil.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163avkmehcx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163paemqtdd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163njahxtat.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kzzgzmns.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163hovcjebl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jbzjtxnw.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163xfmibedq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163qxaoriyc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163fjjsohyr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pdgdotkj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163sowhiyxs.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163qxzajuqf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wcjtmcnl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163wjzwcbah.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xbwuaeyw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zpsvricf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163lffzlvyq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163hgoxkwmu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gbeetbzi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163oizxrtnw.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163fzzxhxcw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163vwmwaiof.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163onntojti.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163pysyiruc.html

TS:   // 同上
来源：http://www.aibaodan.cn/163zecekzob.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rxdcptam.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ylaxbxlt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163grgdklkq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163khlzylzf.html

================================================================================
来源：http://www.sxryk.cn/163aonvpbzs.html

G. 面向对象
来源：http://www.aibaodan.cn/163liysguws.html

================================================================================
来源：http://www.xuanzx.com/163ezfrojij.html

[G01] 定义类
来源：http://www.aibaodan.cn/163tteacrse.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163bulapdcy.html

PHP:  class User {}
来源：http://www.sxryk.cn/163lwkyvjle.html

JS:   class User {}
来源：http://www.sxryk.cn/163anostngp.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163fnjydtmb.html

Java: class User {}
来源：http://www.sxryk.cn/163hzbdzqdj.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163antusapv.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ejuvialy.html

C#:   class User {}
来源：http://www.aibaodan.cn/163apubgnhi.html

[G02] 构造函数
来源：http://www.sxryk.cn/163iopgmzoc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163cktgnbbi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163hxqcfcyi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ohojybpu.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163megoqfbd.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zgfppqac.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ydsaspry.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163comlgpbm.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163fwlhkssa.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xirkzyam.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163jdwkmfzy.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163pzznzsly.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163afnolvcg.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163sbfctdup.html

Java: private String name;
来源：http://www.aibaodan.cn/163rrdyssll.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jxigvnsw.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163datdjyze.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ezuwbxws.html

[G04] 定义方法
来源：http://www.sxryk.cn/163dbmziply.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163nbaqjrce.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163zwxiyejf.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ojqtyuca.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163jgwruhcd.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163wruzpazw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163frjljflj.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163lccvuyfc.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ahjwnjva.html

[G05] 继承
来源：http://www.aibaodan.cn/163qzbnqtsg.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163twswdlqj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163caixbeld.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163nygwlhom.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163etrikjwf.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ehxaotuw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hjldwcxh.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163hacdleyp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163goekcwub.html

[G06] 重写方法
来源：http://www.xuanzx.com/163lnzdmynq.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163xiyjkflm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bmjyjaux.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163iytwrfwd.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lzgipzlr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163pxxjcdrk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163rntsmdst.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163nepnnkfz.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ugvctnre.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163isjzfqzp.html

Py:   super().greet()
来源：http://www.sxryk.cn/163kulwjkly.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163birfjxmt.html

JS:   super.greet();
来源：http://www.xuanzx.com/163fiukntoa.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163zhtmlimv.html

Java: super.greet();
来源：http://www.sxryk.cn/163veujuayb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163rkuzdwuj.html

Ruby: super
来源：http://www.sxryk.cn/163yzpabkyh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lldfdnmz.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163mcjfmcdr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163pwejsynh.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163jyiqgulx.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zpobmhvq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163jzqmzsch.html

Java: static void f() {}
来源：http://www.sxryk.cn/163doxoyljz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163txrsbeyb.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ncdkcnuv.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163dbasrthw.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163fxugolmc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ehzwtjru.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ctcgcuey.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ttuewugo.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163cxwjjclr.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jsoopgxv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163wpqjypla.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163hxeyzemc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ntqmbjnz.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163axydcaip.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wvahsysm.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163tfvwtzin.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163cemmaask.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ixpkegdg.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163lnubkszf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vzyvkqbd.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163pkbugkoa.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163wodxinkf.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163pqhwunqs.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163pcpeduza.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163dgscbvcm.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ghisgevk.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163mzimntny.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163eqjrevjb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163rebocahy.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163jpoqtrwg.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163illhcpsx.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163kjnhjihj.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163nnhyjdya.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163lyahnxyz.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163uqntronc.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163bbwerils.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163mfemuyyg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163idunwdvv.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ecqxzcta.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163dknuoqnt.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163qxpboxcv.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163yivbdbzc.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163vjzbtfyz.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163jsakfilo.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163tylnkhrh.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ihitnshn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163hsakwcob.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163frdprxzg.html

C#:   u is User
来源：http://www.xuanzx.com/163wyfckzyi.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163bjmywysb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ojrirydb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163wprdbdrm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163viqbmcxv.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ijmxrklx.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163zjpkjftl.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163clrthclw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163syitvory.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163nwxbgqac.html

[G15] 枚举
来源：http://www.aibaodan.cn/163clinfdqh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163xqrsucgh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163aoklqyxu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ftdehizh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hsaioxoj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163jqnfbevw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163uerdftfy.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163oohsoeyb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163twoaojrc.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ayqmlqpy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163spnyttvu.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163gadcccbq.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163okqwilzh.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163adaoudnr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163rdhrcvfm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163sotvauva.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163lqkhtazs.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ntwgkpnk.html

================================================================================
来源：http://www.xuanzx.com/163ocdcvyfd.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163gkspkqna.html

================================================================================
来源：http://www.sxryk.cn/163drxawqov.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163pcmacpad.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163nuqkcngi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163edzmjvty.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163iszwavwz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163kumlxjki.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163kenxzpev.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163qzfcvcfy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163qibeigoy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163qyvteksi.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xzmjvooh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mgbiogkn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qvvuigxh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yzjqaigc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vzifykpm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dtqdwgdn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163icxvfsut.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ffjgmvgn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163jlxmxjvp.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163zoyullke.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ztkqrsuh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qkwptqcf.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163pqeludmn.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163eknczofb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163icgeqskt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163nrkqfysw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ygpqsigc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163kirkthfg.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163yysjcbga.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163bozsjxgi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163hvufcamv.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tdabkefs.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163labnqftg.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163icupaaop.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163gunvqimj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163lqjbdqbo.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ydhxxtpb.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163eatcqbnw.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163mcmbbycp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163bgckeeho.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163evfdzhqz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163erdwgzlu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163hiwomifi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163zjebmbuf.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163dwmogpok.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163plzolujb.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163oyiggfgd.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163vcsngehx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163oggqhhjf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kijnldvc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kxnwejit.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163klisjevm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gkhlapkw.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163whjctoes.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163rjipgmlx.html

[H07] 断言
来源：http://www.xuanzx.com/163daxizcqn.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163tocbgckf.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163jkhzeomq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vpetkooz.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ixedvpnk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163yxhonqlo.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163walxmdwx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xdeokubj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163jcwzqgrn.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163agqiendk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xphvixsn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163zqynlqrj.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163teypqglm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163zsvbdnls.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163xlhletej.html

Go:   err.Error()
来源：http://www.xuanzx.com/163lypeycun.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163tpnicbmj.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163wmdczrdz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163apbrfpwy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163zizttueq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163dtstbdes.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163msqilurr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wfxbxaor.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163yackgjtq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163veuwjfbs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163cgnhkmxm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163gklpnzsz.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163gpfzgefp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163sxuefkis.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163epktlcag.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ofmclxof.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ndukzcfg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xtizlhbk.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ojiiawal.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163vxtlyoxt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163gjjfygej.html

================================================================================
来源：http://www.aibaodan.cn/163lsrtzaob.html

I. 正则表达式
来源：http://www.xuanzx.com/163msumfoeq.html

================================================================================
来源：http://www.sxryk.cn/163amceplwo.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163qhugvfxx.html


<!-- 参考信息 -->