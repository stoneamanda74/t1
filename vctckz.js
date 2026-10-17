外链999!wailian999！

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163zspmxplf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163dkavqagn.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163cvaqiets.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163eqrcdswu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zmsbzjgv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163dvbhmuwu.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163zbqxqsto.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163mwfgvmxa.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163qzbuewrk.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vabfpxnr.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163isyiwqup.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163csgefqfx.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pqupwfuj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tdbcczgk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163hydpffuz.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163qoxvrjuh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163nhclomii.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163tpgpyaln.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163loenjkjp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ofsdynqk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xpilgxel.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163rfxnqlcd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163upnbqhnt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163trwougss.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vdmbnemw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163xbnyfxqf.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163fzdipxip.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mpvoczbl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163cujewacg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jqdxvqoy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zzubglmd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163xfftjnpf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163qsmntlme.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qcofvnil.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163oslwahrd.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163lmswhkvp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ufjgetiy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163sglfyurj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163xsxxrkyp.html

TS:   // 同上
来源：http://www.xuanzx.com/163devvhigq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163whwbtgnf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163affapnnk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163kjxhecpj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xopwnunc.html

================================================================================
来源：http://www.sxryk.cn/163vbxzxmcb.html

G. 面向对象
来源：http://www.xuanzx.com/163dphewyma.html

================================================================================
来源：http://www.aibaodan.cn/163vokvhgvj.html

[G01] 定义类
来源：http://www.sxryk.cn/163hlqjnskt.html

Py:   class User: pass
来源：http://www.xuanzx.com/163vdmqzdja.html

PHP:  class User {}
来源：http://www.sxryk.cn/163umnuvmxx.html

JS:   class User {}
来源：http://www.xuanzx.com/163pxecdfbe.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163qdjhlhdl.html

Java: class User {}
来源：http://www.sxryk.cn/163okngctsr.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163dwwixdns.html

Ruby: class User; end
来源：http://www.sxryk.cn/163rvfccflv.html

C#:   class User {}
来源：http://www.aibaodan.cn/163uarrpdgm.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163lgjfvxgm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163uihkplwl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kqippego.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163qfyyaejn.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163cpxqvtqe.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163quzlprfd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kxllcbai.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163hbfkomxm.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163yhcqxdtn.html

[G03] 实例属性
来源：http://www.sxryk.cn/163bqlrqjid.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163exyfrxho.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163buuvjvwg.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163fbidkjwp.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163awpribrg.html

Java: private String name;
来源：http://www.xuanzx.com/163slefdrdg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163gcvcalcc.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163xiezwtqy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163jciaamym.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vcpiiyea.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163xxpuogrw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ouffzfbf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163lbcrdhoe.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163arbmfljb.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163nlsmrcmx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163cpxtexar.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163xgpthnyi.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163kwejnxxl.html

[G05] 继承
来源：http://www.xuanzx.com/163qguphtnt.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163lbbazmnd.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163zykquysw.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nacmhmms.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uarcmlee.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163sqypdbvx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163obloehis.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163yfdtvqft.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163wducpzty.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163tlwtueqc.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163lhayykfk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163hkeefktp.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163phexxbmj.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163odwysyif.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163saskcaud.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163vfenzhxo.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163kolmbxgv.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163tmsjpnyl.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163rymmzncj.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163pnegznwg.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163qecnucfy.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163wmdzmtox.html

TS:   super.greet();
来源：http://www.sxryk.cn/163icxdsvwu.html

Java: super.greet();
来源：http://www.aibaodan.cn/163njrbqolq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163lvmpcnbo.html

Ruby: super
来源：http://www.sxryk.cn/163gjldliwq.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163euhfxvjz.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tzninxro.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163yxnweynl.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163zzjoqmfv.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163vtumlvdd.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163nfmupfen.html

Java: static void f() {}
来源：http://www.xuanzx.com/163pqtxdand.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163yipljljd.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163hrcitxxs.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163digavaqf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163qdresvpp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163xjwemcaa.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163pourftzp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163gwdgzgva.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163gifiusif.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163awevcqxy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163txpqqcty.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163gocrfbdw.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163yddncode.html

[G10] 访问控制
来源：http://www.xuanzx.com/163pxcfdkfg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163enzfgkuo.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163jqfhnydn.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163urhvhbzn.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163hflvlgqq.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163szqiggiy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hikykkax.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163hbcvbooq.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163znsnnmtx.html

[G11] getter / setter
来源：http://www.sxryk.cn/163lschxbab.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163pkbeemls.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163iqypymqq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163pattkrsl.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163sbonzbuj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163dhtaaehe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163hrdgqrxs.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163xqbxizpn.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163jooydfxp.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163mktyijel.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163dlowofcy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bsempzwu.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163vwpwywod.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163sigrrztz.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163bqbqkcjd.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163yfnuwyml.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163lyoewchs.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cgalbbxj.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163wfqzwsvn.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163vxnikpsm.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ribvagam.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ddvvtudv.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163icssscsq.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ctidmoqw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163fsvlqluh.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163vucewgou.html

C#:   u is User
来源：http://www.xuanzx.com/163vaytsoay.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163tydwjaqn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ypfjnubt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163bbvebwor.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mxhhxqwa.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163xbkbzjcb.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ndjnvwsv.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163vxsdskoa.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163fcehxroa.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163xqoamjnc.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ufapwwga.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163snzntwto.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163awcgziub.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163dmhueect.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ccmxbeup.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163fsryttfj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bzbijfvl.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163aunswjnu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zoiymhrw.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163hlycgwkh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163fqctjgfp.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163krskswpk.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rdbifvwz.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wjsyixhx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163elagoenm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163encxheam.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163irlyxgzo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163qyuvnlus.html

================================================================================
来源：http://www.aibaodan.cn/163reynioya.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ngqpjbla.html

================================================================================
来源：http://www.sxryk.cn/163flrnwrzx.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163kcwamtod.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163vvnnwdhv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163wyznnxzn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163nzbgyeom.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163vbpbqein.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163iwxfwjsu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163pbzwfoki.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163luwilusm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163zqrryovf.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rtkagofi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163gvyrwojz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163asfhpjaq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wcptusux.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kjdkpqib.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dofxgzht.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163khzavxug.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ntlrdecl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163kwwaxngg.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163jfkqzedr.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163rwtpvdra.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163kaijmqzz.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163awplbnwr.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dviobitz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xafjrspi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163gpzrinee.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163oqfwrame.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163sqnjhmhx.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163skveftcm.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163opygemmt.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163hqswjevd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163suxennyi.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wjkidize.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163nypdvkwl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163nfoqaklx.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ynkuhntk.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ofdqeaal.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163becrdekp.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ksduzfzi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163kdpnklye.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163fhdnnubj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163haharxvd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163uffekouw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163wnlngheb.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163pgqncrts.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163objuaodh.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163snlcuvan.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163yfurawsw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163knnsnybh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jvpzhevt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163meymtozg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163xbjvaqfn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ecgzcfwl.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163abymmhoe.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163wrrcweyd.html

[H07] 断言
来源：http://www.xuanzx.com/163jveattcn.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163wscitjjd.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ycdbwnfj.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163pwhcmmlf.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163phxsruhw.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163zydpkmjd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163aapepoez.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ltemisgl.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163gcayjbiq.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163esklxcpk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163efmtwghp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163rpcnermz.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163otqhcovc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ujahvrsu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163tianvnmp.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ypnnfbfv.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163bfknefeu.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163gzqgekgq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163acfczmhj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ltjuoemo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163yeaorzdk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163lrtzfdxh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163cdbffrqf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163aygkwcna.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163rmxuqxnb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163myhzwuez.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163cpfaqkvn.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163otidoowm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163qjuxaxbd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163lpcxiowq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163jbrpbnen.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163speliywe.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163qegufztq.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163djwkmsvd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163nkxjfczj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163nfehyhgc.html

================================================================================
来源：http://www.sxryk.cn/163rqdakgpi.html

I. 正则表达式
来源：http://www.xuanzx.com/163cmzozpja.html

================================================================================
来源：http://www.aibaodan.cn/163iuoxmgfk.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163blnstmxw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163smtnlvpt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163jvokzgcp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zdtvfxjl.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163anlwvvtx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163fsufanbh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163elgepcwj.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163reusofux.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163dqljdbuh.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163bajrqbhs.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hawzhqrv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163totqhadd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163buhovjqb.html


<!-- 参考信息 -->