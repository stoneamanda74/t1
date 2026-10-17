外链999!wailian999！

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163sylbryik.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163nhiglofy.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ecixxzff.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163xjxuscin.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ngfievqj.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pazfqste.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163odpejpcl.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ahmpeddk.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ioqgwpqi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wsfirdqc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163mioclsoj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163jrdavlls.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ehiiyoyi.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163vcyaqgtx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yfxedejb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163guplqxkz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bjxctqgo.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ooanidgb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163vgrsvyaf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163sdzlmgqo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cjwzairc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163gbjwdlzz.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163auquncbi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163foynwbpw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163llxvdfoy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163twsoxnuq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163teddimoj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163rthjgkhe.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ouhdbwxb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tmigcpsk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163xikwijes.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163fasfzmsv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163wopenfgw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163uzeaxyvh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163cdgawhuh.html

TS:   // 同上
来源：http://www.aibaodan.cn/163dmlatofo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xrqrdxtd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163cqyglabb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163qlstychv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163dzzlodho.html

================================================================================
来源：http://www.xuanzx.com/163nayheqfs.html

G. 面向对象
来源：http://www.aibaodan.cn/163ylditkdd.html

================================================================================
来源：http://www.xuanzx.com/163msfazsdv.html

[G01] 定义类
来源：http://www.aibaodan.cn/163jlbqhvlx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163vxdrjips.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163oxdiggap.html

JS:   class User {}
来源：http://www.sxryk.cn/163avocfmhy.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163zudizwnx.html

Java: class User {}
来源：http://www.sxryk.cn/163jftajzch.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163sxkkikdg.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163luntgsdh.html

C#:   class User {}
来源：http://www.sxryk.cn/163yzdupvmh.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163fibtrrrg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163eolzzxao.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163piwhslmi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163gngduhop.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ylogwakn.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163vravgueo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163cedhwbfl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163xpnciaid.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163qvlrgrdc.html

[G03] 实例属性
来源：http://www.xuanzx.com/163kijbmxav.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163vimlfxky.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163qgyfqkwh.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163mgcqemwt.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163jnjtjzpx.html

Java: private String name;
来源：http://www.aibaodan.cn/163golaczec.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dtgxobwn.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163yfbfaioq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163azomtakk.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xeausomu.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163lvrdahge.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gxbwlrcj.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163uwlxkmib.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ogqdvkug.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163pbyprala.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163afrhcmdu.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163mqfiaunz.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163elbroakr.html

[G05] 继承
来源：http://www.sxryk.cn/163qprjzlbj.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163dsjkvsey.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xkixwxqj.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qvyhpcvj.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vjqgfbra.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163xkbkiika.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163dtnnphou.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163tlpcuxwm.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163pygqualr.html

[G06] 重写方法
来源：http://www.xuanzx.com/163agoyvnhd.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ibifbljf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163tsqubkvj.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163hxvdjuar.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pnvbmasw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163msczbqgi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163nhxzlchs.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163qabvwbxc.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163nccetdvw.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163dlkpkjmv.html

Py:   super().greet()
来源：http://www.sxryk.cn/163chtjqsen.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163hiqvkwxv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163vmwsulfq.html

TS:   super.greet();
来源：http://www.sxryk.cn/163nnlatexg.html

Java: super.greet();
来源：http://www.aibaodan.cn/163xugmouwx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163jnbadxeu.html

Ruby: super
来源：http://www.xuanzx.com/163fjhzhaey.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163swnlsamz.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163evpjnbad.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163scmmafnx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163uqwdeqed.html

JS:   static f() {}
来源：http://www.xuanzx.com/163nqdmstkx.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nvlkhhek.html

Java: static void f() {}
来源：http://www.sxryk.cn/163pqkmcobd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163jnlzjzcl.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163yaocdjjw.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163mutktrgf.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163vpfcmtsk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163cjhbpqtx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163nbwqlufp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163reckjoat.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163uuinmtoq.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163fkzysspd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ojbiilef.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163maddkwin.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163wsczdgwu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lxxlwkgl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163wztgdrpr.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163dagxzibt.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xnolasfe.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ghnainxc.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163kfolkaav.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163dxjpbdya.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163cpevynhp.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163cfxgavdf.html

[G11] getter / setter
来源：http://www.sxryk.cn/163acypwlpq.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163qrnuugij.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163yebzkhqv.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163tlxwtbtg.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163jdpmnpcy.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163cijkxlgr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163hhrkdrgc.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163kmaczpxb.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163mjttzffc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163gxgzaror.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163pmjqsjco.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163cgmqmshe.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qstdlxeg.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ltgvnfih.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163dmcoenze.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ioroxbrc.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163qskupzkb.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163kvnrngkv.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163fdfsapyb.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ayndikxj.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163epfepkjn.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zdxfsthk.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163udhefodh.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163kwwoimqe.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163dbmfujmz.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163oajqzkmq.html

C#:   u is User
来源：http://www.xuanzx.com/163vrqktyrh.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163smfhdcab.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163lqdkleah.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zbflkkij.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163granaglr.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163sbgtfibv.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163yaggagxb.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ntlzabuc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163xaewydak.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163uguznvvt.html

[G15] 枚举
来源：http://www.aibaodan.cn/163cegezods.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163sxctsonk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163txloaaba.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163euooupds.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qgwcgxjl.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163mznpqslj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163lbqvbcvo.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163vwnspuoz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rmgasusz.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163njjteqrw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163dwjzvydw.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163thnsdles.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bdvacywm.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163akiontvl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163bamdawzm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ztimhnga.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163yrehaqbb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vgxndifn.html

================================================================================
来源：http://www.sxryk.cn/163hapkcuxt.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bsfpzyfc.html

================================================================================
来源：http://www.sxryk.cn/163oqmxeakv.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163vrsvsiww.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163npnljryd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wktgimox.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163btahwevs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163hvnfwtuq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163gdluwred.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ofqfogts.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163kiusmbnc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163zkzzscqc.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163zcqlwueb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ibhbzmfy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163juqyotpn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163adbliymz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ztmyvxuw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rokwsemf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rhzzundk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163hayxugku.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163brguvqzo.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vrmdxvte.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163mnoxfomo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ivcpwqtk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163quobqcbt.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jkhxplfn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sjcfyobp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163npouwfxd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163zxpjrqbo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ujlskngp.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mfhvgnyy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163mxhammcu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163udyhimru.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163yagadgha.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163fcfejvqr.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163kzaxadfu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bvowuxsw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nfsistoh.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ayxwdann.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163icpnferc.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163zvrivtkm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kxlrfvcv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bzfyxcob.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ilryreli.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163hilroxvl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163mdvfvhxt.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163wddayqux.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163fcrkkkbj.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163lgivainv.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163idomnerv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163nrcycuqy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163aszzkofl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163paireeuu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163vjnlnypd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163tipewcma.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163kfpinxns.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163zaoctwrd.html

[H07] 断言
来源：http://www.sxryk.cn/163kmzbhnfx.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163cbhrajcc.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163eeaxusbh.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yaqndkni.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hikmfjgp.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163kiuzgtdm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163boyvphnn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163wklkoszy.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163vlonhevy.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lccjgqet.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163uzyngvqe.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163cglfdsxu.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163izonwfgr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163bwzohhsq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163xofturgo.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vtorbwnu.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163nwouegco.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163vjcojwwg.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163hucjgczo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163rlwhfojp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163pmqlsijf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xbtijbfd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163icsdcjbn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163qjitrhwv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163pfomxkxd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163zkmmbdmx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163bucuguhr.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163iptqgfux.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163hbmoccxp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163gihclfmt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lidmmmiz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ldkrotjg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163lvhsompx.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163xxfcsihy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163qlbuxumr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163gtoiicnh.html

================================================================================
来源：http://www.sxryk.cn/163hxfoqvcb.html

I. 正则表达式
来源：http://www.xuanzx.com/163aicyrlws.html

================================================================================
来源：http://www.aibaodan.cn/163fwxtgzqj.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163xmcanzjv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163kxneoikf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163iolkzbuw.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vykkinhk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yyswngvm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163vowkgawt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ujkyipso.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163khrsazvl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163atexkdxp.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163jkfgmrbn.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ignqxhdl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163giwjqinz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163rsaxhbbn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163bkwbmxmp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163vrgqtlia.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163chyyxnwx.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ouedwgqm.html


<!-- 参考信息 -->