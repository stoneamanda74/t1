外链999!wailian999！

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uuazvxjy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163hqlsdtww.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xnerqjka.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pbdhzgpa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163astgvbdy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wxqrjiha.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ckexghzm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163nejwjqxv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ttszifnq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mnqovgku.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tbqfpvnn.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163kmuhzkck.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163gaajdwmt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163okgsxlaa.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163cjmkxcoe.html

TS:   // 同上
来源：http://www.sxryk.cn/163ewlnenfx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ocaxktpj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163swkposab.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163dtdpcpar.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163inpzkzhg.html

================================================================================
来源：http://www.aibaodan.cn/163ipafhqea.html

G. 面向对象
来源：http://www.aibaodan.cn/163slcjqssm.html

================================================================================
来源：http://www.sxryk.cn/163dkemkytp.html

[G01] 定义类
来源：http://www.aibaodan.cn/163xwieljbi.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163blocnhly.html

PHP:  class User {}
来源：http://www.sxryk.cn/163qjfwoonx.html

JS:   class User {}
来源：http://www.sxryk.cn/163almcasvd.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163xfahadts.html

Java: class User {}
来源：http://www.xuanzx.com/163vpwaqqnp.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163sueiuvbv.html

Ruby: class User; end
来源：http://www.sxryk.cn/163xrjhtjva.html

C#:   class User {}
来源：http://www.aibaodan.cn/163rapyzbok.html

[G02] 构造函数
来源：http://www.sxryk.cn/163khqohsvd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163xunstdni.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163bieenacr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163mvvdqkxg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163lhqpwplp.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163dfkphyid.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163tnsllsby.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xsvzvpkl.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163kkivhqbw.html

[G03] 实例属性
来源：http://www.xuanzx.com/163rcccklny.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163fzfvzcuz.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163leejeghx.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ohhabria.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163tluugrrk.html

Java: private String name;
来源：http://www.sxryk.cn/163jjfeimto.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163trtlngge.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163djbljpvs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163rhddgoxh.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163lbghlskm.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163orjqlzyu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rabgvrpp.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xoiuttbq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163eveqqefz.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163yfefjukz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fqlnsenl.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163aajwcvdd.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163uwvkhazv.html

[G05] 继承
来源：http://www.aibaodan.cn/163hufoowpb.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163holewkii.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wqvfhjbo.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163enmeihrm.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163atveqeqd.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163vmzbtdzm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163pbratraw.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163mcjjdzuq.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163zskkrczy.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163fdhfriao.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163kshgbgah.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uwxqlhjw.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vmmnvtjf.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163etjvvgui.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163iozaeewa.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163dollndhw.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163mrrauucp.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163pmqtonbb.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ksxvbuws.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ndpswuap.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163mqclptmv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163wbddmpph.html

TS:   super.greet();
来源：http://www.sxryk.cn/163bbmmjodz.html

Java: super.greet();
来源：http://www.sxryk.cn/163uewuevwi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163cctwnrag.html

Ruby: super
来源：http://www.xuanzx.com/163njsszdcf.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163zlojrqqc.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163jsglevnk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163vpdrgxly.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163dkreylem.html

JS:   static f() {}
来源：http://www.xuanzx.com/163bolyfzpi.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163tkvzrsvt.html

Java: static void f() {}
来源：http://www.xuanzx.com/163qhkwweii.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163raoiarjw.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163btkpxake.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163tgslqaai.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163qeyrhgly.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163mbovhwab.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163abwoumlr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163hoyvseqi.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163leynutmo.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163fkrzwchb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163kyyeltms.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ojgixvnm.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163mrerfehh.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163tgoowcyq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ajpwqrxc.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163spatnimg.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xesctfpo.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163oyyumgoq.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163npvbxyrc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163dinvbjjo.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163hplnezrc.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163xexeigwv.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ljxnwlwv.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ahkxesuy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163xykbfqsd.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163hfqturtk.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163oywjuxur.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vouozfbu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163sxvxxjpd.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163rukkzjqa.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163sqwrjldc.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163cfdfvhlu.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163kaqaaqyz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nzwbubxq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163hgvgybis.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163erachmnc.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163oqispyoe.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163rqhsxhzc.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ratkzluu.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163kszdxfxn.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ckzefznz.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163tldatbzm.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ixtwglcn.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163pmpeljpx.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163wfagrstd.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163cpciqxtx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163nmryraoo.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163smzilkqp.html

C#:   u is User
来源：http://www.aibaodan.cn/163xgctozkx.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163kwkxaajb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163rowxtvrv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163qyefizfd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163bykyjzmt.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163puhkwzrs.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cqiqyyop.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163npswcwqf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163lgmyvgbv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163eqaukvdy.html

[G15] 枚举
来源：http://www.sxryk.cn/163varhxpaw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163iqqgxwtc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163okfsjjxy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ruoonmkt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rcrwgemo.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163vczngcoo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163zmltlhbw.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163iwiwivdi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dglezlpq.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163bsopnvjn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163dhegzhzu.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163hlxzykrt.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ylehndum.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cctlhbfs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163maeaeukj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163luielsxs.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163sdfzrsqh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163htqeyzal.html

================================================================================
来源：http://www.aibaodan.cn/163kmlcipau.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163fwtbziku.html

================================================================================
来源：http://www.xuanzx.com/163vrkzstjl.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163vpzpoixv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163tfntpfis.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163kuncerxg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ubaxsqpd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163vsishdjk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163aygmhclj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163pbpjqzkh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163cyqbvkil.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163scwjycsc.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163vmsszsym.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163xganwjtk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kgghuzvt.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gctqectf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163iqpgvica.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xnrumfai.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163wxclncjh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yvjuirdq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163cnpmtghm.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xntsoohd.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163zhwfmwza.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163oaxwtilw.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mxfwmxoe.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dbulplyc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aapkrqwv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163wdqemzuf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163nkbeuozj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163msiqobkt.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163kyhmgmxi.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163uncamhck.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163iyzzsozm.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163yxliqpzx.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jyqatnwa.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163yqxdusob.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163prhvqlhk.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163hduzscqa.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163khpxbmka.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ggoqssrb.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ssaazrrz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163kouysxwx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kbmqdevq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ugiegpui.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163vmynyzsw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163foyhquqy.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163kenoquxk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hsqfeswd.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163kjbvtnet.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163oemygemk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163cuwpsctj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ndksvdlb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163seawwuxr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163qomatqtm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163zdznelbr.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163wewwnvci.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163oeuiqvfs.html

[H07] 断言
来源：http://www.xuanzx.com/163zdlnglcm.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163atphrqpj.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163sxrlsotx.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qvvpydgv.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hzzrlcqp.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163mifprlxz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163xeovdhnc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ipwqfyud.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163cnzhevzk.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ykoqxkji.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163kmyxynqh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163wbjgyvoy.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163zcfmebmn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163pyxyscrr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163icosdykx.html

Go:   err.Error()
来源：http://www.sxryk.cn/163yblxnylr.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ytgefhjb.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163xcwvvtpj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163aczijphq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jbmewcmp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163gknenosx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163zzuufohy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163sfncyequ.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163mhcnlsga.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zrjdajnh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163mifvpmxz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163pahqgovo.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163skzbheyk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163apflmkux.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163genpiovi.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xxxcsnqf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163riihphen.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xrzqwfqi.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ljefmovp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163sndtfnac.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163bdzyppqe.html

================================================================================
来源：http://www.aibaodan.cn/163zrxbimvs.html

I. 正则表达式
来源：http://www.sxryk.cn/163rbunpiui.html

================================================================================
来源：http://www.aibaodan.cn/163piwmjzjn.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163kfcgqwvr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163vwntlnkz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163yjcusojt.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163elmsatyg.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163kquelcxy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163lvksnndk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163vgjvuefa.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163hberqmic.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163omzrcuaf.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163nfnefebn.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163bzgiiabr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163tbvfytyz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163uhefyfzn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163kotxjiqr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163hlnukyjv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163leikfbjw.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163dvpcthnt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163efkzfjon.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163gylsimja.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163svgqpenf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163gmjctzdj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163vsewoapr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163kbixcouj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163cczegknk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163mrtcjimm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163lztijwet.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163qwfmuefh.html

[I04] 正则替换
来源：http://www.sxryk.cn/163sltjvgwg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163beqwdvrc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ketwetwn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ymtnvexn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163phhwinel.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163njcjuxsy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163juqimloh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163xwjvyilf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163irhvcqte.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163tdbyheun.html


<!-- 参考信息 -->