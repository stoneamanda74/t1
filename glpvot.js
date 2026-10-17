外链999!wailian999！

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ltsmbqvn.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163stfiwnmw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163zdprhsdg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163vwhiucve.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nmwynpqw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163lwrttqse.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163oklplzxt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hsjspncg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163nvijifdd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yunbjuec.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hoazyygn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163fiuatqie.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163qipopnzs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163auyivbad.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163srbzlvmn.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163wneytmyi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163cltmkdaq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163osbavusb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163lkywtsml.html

TS:   // 同上
来源：http://www.aibaodan.cn/163kiekumhx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163abaybegq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163yhhfrgso.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163fqnhkiqq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163rumrzrvu.html

================================================================================
来源：http://www.xuanzx.com/163wdqqxcxs.html

G. 面向对象
来源：http://www.xuanzx.com/163anmjfdxv.html

================================================================================
来源：http://www.sxryk.cn/163wsqdvtxz.html

[G01] 定义类
来源：http://www.xuanzx.com/163wioriwjo.html

Py:   class User: pass
来源：http://www.sxryk.cn/163hoorkkdg.html

PHP:  class User {}
来源：http://www.sxryk.cn/163qdogpkav.html

JS:   class User {}
来源：http://www.sxryk.cn/163cqltcxmg.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163phjcrohx.html

Java: class User {}
来源：http://www.aibaodan.cn/163yrcvdosb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vmjnmxns.html

Ruby: class User; end
来源：http://www.sxryk.cn/163rojrxgct.html

C#:   class User {}
来源：http://www.xuanzx.com/163kyqdlkaa.html

[G02] 构造函数
来源：http://www.sxryk.cn/163zwwhigby.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163lzvfbunx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163tmviourl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wdgnlgpt.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163kdpggtfo.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163qbhvwhco.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jdhwwzjc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163lwzlikgc.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163sxukbyrx.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163eapulytz.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163kdpdnoat.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163fssrhulx.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163jdrfgefr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163xylkveoc.html

Java: private String name;
来源：http://www.xuanzx.com/163cgobodjs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163apqeorku.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163slremghi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ciztoqxi.html

[G04] 定义方法
来源：http://www.xuanzx.com/163jydpybiv.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163bnrhhpqf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hplyyhbn.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ndjujaed.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163nkvulefu.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163rsgpiyra.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163yocebyhe.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163bzjjzgbg.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163kmkfowwu.html

[G05] 继承
来源：http://www.xuanzx.com/163jyoddbph.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163yitesaga.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ixvsitrl.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qyhlmzpb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cwsjvhmm.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163efrdrkja.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163xymrugrg.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163kwdqmqbd.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163kgbbokxg.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163qtjliote.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163shpiyeat.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163cdvbrfhy.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163yozvvtfw.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lvhhwuuh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163bhzmqnhq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ocnjphpx.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163rmoteatt.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ednxubso.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163rktyjbix.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163vnxzbybp.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xxbebcvg.html

JS:   super.greet();
来源：http://www.sxryk.cn/163iilgwvse.html

TS:   super.greet();
来源：http://www.xuanzx.com/163xzfhfjec.html

Java: super.greet();
来源：http://www.xuanzx.com/163gvddarvk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163jtpqwyit.html

Ruby: super
来源：http://www.sxryk.cn/163kxntvifu.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163amnztyiy.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163xciznayj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163snpzmuez.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163gpvislyz.html

JS:   static f() {}
来源：http://www.sxryk.cn/163mssfpbje.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ydeqvjlr.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163sbdvbcpn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163dvkpmymg.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163mfbtkvpb.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163lrlguxto.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163pspgkpuh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163eninhmac.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163vhxdwjzn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163dszyapgd.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163cmntldbb.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163pdwesqjd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163aaoqgtji.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163atevohkv.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163nqxgoxvj.html

[G10] 访问控制
来源：http://www.sxryk.cn/163naeiwfpk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163envadkon.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163aekunrig.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qjvqdykp.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163rtcxfpvr.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163rdwxhxan.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163exzoyfyj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163dmppugih.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wailioeo.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163wqqlmvdk.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163smxakbtt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qluvqicr.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163shzwpsse.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163wkqcwrsq.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163pvudowsp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163khjgettk.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163bovqlajj.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163pclpviok.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163oigqmcif.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163qelpglrc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163lqxoxbtq.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163stxyppst.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163anpaywid.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163nkoopbnp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163urqjoosn.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163vvjloasn.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163dojvazcd.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163jdhaxxbg.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163lokbpjhd.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163xgkcwcuw.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163hxolszjk.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163hnzqmfzf.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ochtkysi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163iwmzzqrr.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163brxuxdqt.html

C#:   u is User
来源：http://www.aibaodan.cn/163kexaeioa.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163bpiollax.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163lsmxjwxi.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163rxjfnvhq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163exieujmd.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163fchuyrpu.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ycjcgyvr.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163jinoslzt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163etfxudqk.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163qyepgzft.html

[G15] 枚举
来源：http://www.aibaodan.cn/163oiigyehh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163lgwqiuco.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163lwjslgjs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163kdfdkvnc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163noyxogvl.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163uuqxhujv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163byvkngfl.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163djeffnse.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163timinaot.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163olrdxjju.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163chyhkbby.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163cxpystkm.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ffghwtsa.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163aewrfuow.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ydqbrecl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163leuspudz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163xtmrsiar.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163rndnjeyg.html

================================================================================
来源：http://www.xuanzx.com/163hskccfqt.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163owkdqrtm.html

================================================================================
来源：http://www.aibaodan.cn/163qvnhqfrv.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163bacvelks.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163iimpazqb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163tiezuzdc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cqdrblie.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163nsgdhxrb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163epzkgwob.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ssvedvff.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163apszeqkh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163sshvooob.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163cibexrrf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163xoynoztn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kelabjgk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oqvfxvse.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dgaorfro.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rnvmcqnk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rhecfxts.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163etklaohh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ltgwalio.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163tzqsenjy.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ddkerzex.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163faegyuwx.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uhpkdoxq.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yvbfykfa.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163pvsckxfd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163qzqinaak.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rrjfngdn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qbrpfxmp.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163axlxzpvb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163hdspfvyl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163cabzhzmf.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cbpptunm.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zlvjhbon.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163inabxhqm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163hahqlmwc.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163wnowbsct.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163pwpqwsse.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163yarbjmwe.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163yquxfzjy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163mbmlyqdd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ozccmoxp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163setzpekh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ygabtxfn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163vfaitbuz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163bzzxcwfe.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163xdoqmpwp.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ohcqlwta.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163dxlywljo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163vkzjjxtw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qrnfmryo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163iulrumyu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163xgeybmcj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163slfdstsm.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163lrszbxom.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163zxzhdakz.html

[H07] 断言
来源：http://www.xuanzx.com/163ahvicvgz.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163hurpywuz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163tzzdqnpq.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ctbckxib.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163onewjzxv.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fosghabn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163nkpwqxbg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163qhukonpw.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163lzkplbwk.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163cwbfppqg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163bcupigam.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163jwyfnrwc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163rwnyezow.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163xzgtpvup.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wncmylzb.html

Go:   err.Error()
来源：http://www.xuanzx.com/163fmefnzft.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163mjubgmyp.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163qckstsvr.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163svsquzau.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163zhvmvtwq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163rpvyzykg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163weglwplw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163bgfnoxvo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163svqzbpot.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163bzxjyxfb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jittyhms.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163rinkeqom.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163euhcdajb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ivjlauur.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mkmdqeoz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jqteslnh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vfakwsnf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163bbybgmck.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163vxujgfmv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163gwtrylnq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163wknlylyz.html

================================================================================
来源：http://www.sxryk.cn/163imbihryo.html

I. 正则表达式
来源：http://www.xuanzx.com/163vgktwtrb.html

================================================================================
来源：http://www.xuanzx.com/163zocwutyg.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163lbkoakzh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xdbhmbro.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163xfkhyybm.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163cmqfkoid.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163puzusrub.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163erznxfph.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163aypdrmtm.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163bnkszsce.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163llbsshpl.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vdcrmpby.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163aappwbxl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163dczqirmu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163uwtxnhfx.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163kfrnukno.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qntiidqe.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163brkmkdfx.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163gphbihkf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163uqnwsjtg.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163hsxmhwnf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163dkplafge.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163mpeocpba.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163qfiiyhpl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163qdtntnbx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163oalnrnkh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163qxxisnsv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163aobhfxnw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163budvbldv.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163hilxejcj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163heqvgwje.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ywzbvfvg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qolevzpb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fzgqgdxr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163fkrnouyn.html


<!-- 参考信息 -->