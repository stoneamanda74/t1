外链999!wailian999！

[F09] 获取文件大小
来源：http://www.xuanzx.com/163gpvdpose.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163rxqkbelo.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uzanqwcr.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163kmbwuhzq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163exbrlrrx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jowwivtc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163votktfld.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xtvxlvoy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163uwgnceua.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163tldxmpni.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163swxehmao.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163bfmhommx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ihbzldbw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163fvotupsh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163tmpctqpx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163kfsuccns.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lljkxrwn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163zvakgiix.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163eyptayne.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163plasvdsf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163uatdhjpl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cdjifxon.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ijybiidm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163uaifarob.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163nbszncpo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163opaesqha.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163fwuxcwxi.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163nliwgrpp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163hgfcewio.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163hvbvtrhy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163aydktjud.html

TS:   // 同上
来源：http://www.xuanzx.com/163oasjblzl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163smeikxxp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ibvjzlhr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163oyfwtdyp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163wzqczpuw.html

================================================================================
来源：http://www.xuanzx.com/163kdtoottc.html

G. 面向对象
来源：http://www.xuanzx.com/163couqcdix.html

================================================================================
来源：http://www.xuanzx.com/163oxyismpo.html

[G01] 定义类
来源：http://www.aibaodan.cn/163bnygzokv.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xsfduewx.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163clutavbm.html

JS:   class User {}
来源：http://www.sxryk.cn/163hgbbuuvh.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zhxrewtx.html

Java: class User {}
来源：http://www.aibaodan.cn/163jdagwapi.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163hezqbyos.html

Ruby: class User; end
来源：http://www.xuanzx.com/163vyteukge.html

C#:   class User {}
来源：http://www.sxryk.cn/163bwihizdn.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163plvokwlm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163jajfveop.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kxztvotm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ungrzbaz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163fpdztqsi.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163fyvfpdkx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163dxwwwlrn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163cxbuowqo.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rxrdmyyn.html

[G03] 实例属性
来源：http://www.xuanzx.com/163uurqfogq.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163guavrbkp.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163sdmomivc.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jmnwzgqs.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163smwpvhup.html

Java: private String name;
来源：http://www.sxryk.cn/163gerwqteb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163obtviagi.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163oayylons.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163qzeofsww.html

[G04] 定义方法
来源：http://www.sxryk.cn/163fegtnjlw.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163cpqwljxi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kluikuex.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163zrzapkxz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163byaygumg.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163dmrhbtvz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163wbautkbw.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163vawnquuk.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ujwhhgpt.html

[G05] 继承
来源：http://www.aibaodan.cn/163cpfenaux.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wedcledx.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163didnakyx.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nfihpvus.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jbbqsjtl.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gvqrgmxw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163kusbqjnl.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163bhhsaspx.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ydnrigeg.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ydckaquw.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163xiaylqxt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hgqkpcee.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163eurklcxh.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gmipemng.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163krbphyqb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163jjukaqne.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163odzkwsog.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163xfvcteui.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163toerwxwi.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163sjiixera.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163iaiyyzdo.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mmigdyas.html

TS:   super.greet();
来源：http://www.sxryk.cn/163rrygjiez.html

Java: super.greet();
来源：http://www.sxryk.cn/163cxxezyxp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163hkxdxdue.html

Ruby: super
来源：http://www.sxryk.cn/163yazswtnb.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163bdrlyxex.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163mcgfbqoe.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163pnmhlrgn.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163tqqbiipf.html

JS:   static f() {}
来源：http://www.sxryk.cn/163lcexhlbd.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163kdzsqgcd.html

Java: static void f() {}
来源：http://www.xuanzx.com/163liclscuf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163tczgdlpd.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163fvtzptli.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163iuayrpbl.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163nzxuwszw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163xrvathdj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163bowqshkw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163cguwpmbf.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163cmmzpvvl.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163avagvpub.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163kujfebjs.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163xqkxygxs.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163mjjqvijx.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163caooqiqn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163gopycaqn.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163tcyvlwxs.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163bwnoaxqq.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163tqmrsqby.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163edrnsqgx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163fupzpjdd.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163iklzogre.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163jzqmvwsh.html

[G11] getter / setter
来源：http://www.sxryk.cn/163atwsjaok.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163gkzbdwwl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ajnirtlm.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163zpbmwdxl.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163nhiatetn.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163cazordpf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163umkiuvly.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163byksdpmt.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163frfonqnv.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163gjjmzjui.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ydezykjm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163isyqnyhv.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163mkvfxgoh.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163zgfaisfy.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163pvfqpwyt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163rmnkkwoh.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163pfaytwkg.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163smvjgkzs.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163bukjcrry.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ffhtccdu.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163crluxqpg.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163rqgtywjz.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163nxgaeide.html

Java: u instanceof User
来源：http://www.sxryk.cn/163jbwfveph.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163pkfvysao.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163usstvxju.html

C#:   u is User
来源：http://www.sxryk.cn/163rzkayiba.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163qalchgoa.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163unvreucd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163sfskxxis.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163xikknzij.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163hlweckfg.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163gdfgtflh.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163anzzuuyt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163mkirubct.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163gfolhhcf.html

[G15] 枚举
来源：http://www.aibaodan.cn/163fyktwzuv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163mwvytfhu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163minsgtff.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163bfnlyxhy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yphcnkap.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ekdognru.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ytfbnvqe.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163fentosoa.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ffeqyvru.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163yrjfnslz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163eoafoxgp.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163hrdnmbix.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jneoqdgu.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ddsoikii.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163idvnnzvr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163fysjahka.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163jshetbbu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163qrqgekei.html

================================================================================
来源：http://www.xuanzx.com/163ifdwfrck.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nqficsxt.html

================================================================================
来源：http://www.xuanzx.com/163ywaozxze.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163kpxgcike.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163rsrdewys.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163xhcxocsz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163inhimspu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163lwjomdrd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xotzbvxx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163rovbofps.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163qjxtztge.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163etgqtbqx.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163yrotxcln.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163yidrwpfp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rjisadqf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bglhqxuu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163geotirif.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163awxndkkn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rtsswsbw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163hwsqvube.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163epctrzfi.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163fqtlmfvv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163bxifhhcr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163htxctexu.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163visccofq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163nzavcffv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163prulekcq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163llmdxdyw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163equsjdoj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zrrssfjs.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163bswsenwj.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163asolqfou.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163vsqqejpw.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163bhgizgmg.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163roqtqycq.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163zbpqwirt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163uilhzswo.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163cbaikexm.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qgntpsux.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hsoqqsuk.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163bbbeesum.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163tpbulurq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fqzyfwot.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xsrsvxct.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163nveulzeg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163sxxczvsg.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163nhtftdgu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163afrsxtbe.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163gdakbzpp.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163efbjhadv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rbyphtnp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pskdxxle.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bikqhwek.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163opdhwkha.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163erbvhsit.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163jhovobpl.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163iuvyteyb.html

[H07] 断言
来源：http://www.sxryk.cn/163alptgbnq.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gcmhyvbi.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163kkyazhhq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fisxmurj.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tcenvirr.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163psvfxnem.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163jbjqukdj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163wpzyorpo.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163yzzfofbk.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163hdhlchvl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163febyqwgd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163jjqpctae.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163gkdsdbiv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163eughbcdt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163nvjrrgik.html

Go:   err.Error()
来源：http://www.sxryk.cn/163gcozbqny.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163yawwurqg.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163lyfnrzbd.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ngsjcjlg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163tqbtvetv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163nrjwffjy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163dslesxwf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163bucxzncb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wjdjsmcz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163phkgzrcz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163mzeysrvg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163iocwpgaz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ypspkgym.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zvtrksro.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163uldwwhuz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163yfgctaca.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qgyfvkcb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ciyqacec.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163oosockjx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ruepzxgs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ltxzzbft.html

================================================================================
来源：http://www.sxryk.cn/163xcqjiigg.html

I. 正则表达式
来源：http://www.sxryk.cn/163frlocmxj.html

================================================================================
来源：http://www.sxryk.cn/163tfmomacy.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163byhpyvpa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163uuhmxjkm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163tfudtgsr.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jniyvsyt.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zgfzdnjq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163kavghizv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163lsleepva.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163wyxcinsx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163uuypumtq.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vajzqvfr.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ukdcyotn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163iwhegsss.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xyzmlbdl.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163cyxjhlqy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163tovnwhww.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163carhgqey.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163bmvdcbui.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163aobokonp.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163pkfrtnue.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163upzjjpxq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163bpgxsvty.html


<!-- 参考信息 -->