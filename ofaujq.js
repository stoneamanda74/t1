外链999!wailian999！

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gmdwmemh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163zagrsbqr.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163jbwheexx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zyihiznf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163htmnkgoq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ehctsmpo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wantcjni.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ualsmtmp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163emwvikdu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163epajeloq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163vtgixtox.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163crmjihhe.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163yizeebvg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163isuublnd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163fyjtehmy.html

TS:   // 同上
来源：http://www.xuanzx.com/163dxgaeatv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163vpkudazn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163wdepffyt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163edzoewet.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163pfpithcj.html

================================================================================
来源：http://www.xuanzx.com/163jkylkdeu.html

G. 面向对象
来源：http://www.xuanzx.com/163ruuypyyp.html

================================================================================
来源：http://www.xuanzx.com/163svcdngam.html

[G01] 定义类
来源：http://www.xuanzx.com/163tdntouyn.html

Py:   class User: pass
来源：http://www.sxryk.cn/163kfazqndy.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ihucqxjs.html

JS:   class User {}
来源：http://www.xuanzx.com/163wkbpyuax.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163omrjesbz.html

Java: class User {}
来源：http://www.aibaodan.cn/163hlalmuvq.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ikymduqk.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zmnszoev.html

C#:   class User {}
来源：http://www.aibaodan.cn/163cdnzvifs.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ftkozdsh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163mpqztqxm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163bfclxcds.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163sgevujtd.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163vposoztv.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jbkuiucv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163mdshbole.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163wrbgqnde.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163aslpoqin.html

[G03] 实例属性
来源：http://www.xuanzx.com/163iqlnymyy.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163mycalofs.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163uqlevswh.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163agzyddlq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163cvtrmqai.html

Java: private String name;
来源：http://www.xuanzx.com/163bvxkefuc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163sbhhklmf.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163evgoyjzb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163uixrjwom.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zwaqoogm.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163gtdqgqgl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163cfkgzcwg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163lhuhzmpb.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163sknlzsyc.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163enuoqmbz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163otxoawlp.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163kpxrrnfu.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163xlujsohq.html

[G05] 继承
来源：http://www.aibaodan.cn/163zgqtmsnv.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163kiszzvtv.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163gfqbjdcd.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jvhgaylx.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pdnqjxbj.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163rpimxtza.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163qlyknegj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163qhnnmcoy.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163thgcmpna.html

[G06] 重写方法
来源：http://www.sxryk.cn/163birzfcax.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163zufmrfra.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163knkiqain.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vytrgyok.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vmsbdzpe.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163kyiebmcc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qnywbezz.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163mivmuqiu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163zynvixlm.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163usgjrzdd.html

Py:   super().greet()
来源：http://www.xuanzx.com/163vgcdorza.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163sjtklflh.html

JS:   super.greet();
来源：http://www.xuanzx.com/163fdizgfow.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ldsnrjim.html

Java: super.greet();
来源：http://www.aibaodan.cn/163nroartti.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tdoafbyx.html

Ruby: super
来源：http://www.aibaodan.cn/163yuyfvuqn.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ypoapjob.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163wwlnwsem.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163jwjoyrvz.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163edjtwesb.html

JS:   static f() {}
来源：http://www.xuanzx.com/163cphglyxk.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163uuarbftp.html

Java: static void f() {}
来源：http://www.xuanzx.com/163vuftyyfu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163vwgonezv.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163hfdkylcv.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qzrslgry.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163nzchvyym.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163aerphyya.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163nuknlkfz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163wczfwknx.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163nqlcdeww.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vhrehnmb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163wposzrjh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163zgrcazqn.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163mwcpxmsp.html

[G10] 访问控制
来源：http://www.sxryk.cn/163jpkxoiaw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vruvupvi.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163lubbmuci.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163xxnhlsht.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163orszvvmy.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163uathmxqz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163gbeysihy.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163uaxaqepc.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163cpzrimiq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ipcgmmqv.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163bxcpxkpc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163lfdgxyyf.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163tjtxxnom.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163eqjiuigo.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163pbbegudz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rnuyefvt.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163nsjwrgsm.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163apsjiuun.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163gltojlrw.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163qoughxsc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ksbleotr.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163mrterler.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163rerbedaq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ablgjfmv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163uhzxbygb.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163gooxhjwz.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ydlihnrf.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163nqrknrmh.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163obvyzbym.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163nolkuavp.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163fbprypkf.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163hvrbujto.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163kysrslap.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163hkpchthy.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163cpusziaz.html

C#:   u is User
来源：http://www.xuanzx.com/163jlefrqzb.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163tvqziory.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163aguxevvt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163gwwsuaze.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163hzpwlzcu.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163nbdauobr.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ulrylfkc.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163okynozds.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163hwkmdspy.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ffvtdkfv.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ynxlcilf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163uetvgkpf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ofmcjvxi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gbbtucgq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xybajxeg.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163pqnitnzj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163aelodmcf.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163zlszraui.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jysordce.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qknebqkv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163snoawcvj.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ayvdatmj.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163pewdgiyo.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163yogqaohj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ivabtgaq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163mzvskife.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163evrxkrvf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163uwwftizt.html

================================================================================
来源：http://www.xuanzx.com/163ntcxqonq.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163pehsrlun.html

================================================================================
来源：http://www.aibaodan.cn/163dobammrt.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163gpefvvun.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163oybwsihy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163nejvbezz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163eozbaekq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163cbjbzjiu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163jijvhplw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163iosehhzb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163rqgigfpx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163owniaefg.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163siugozny.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163yvycrxkc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ioiwptiv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cgovykcf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163blgmpzvo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yucmygsr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163qjaabmci.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163zognuukb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163aztnovim.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163atyirwfj.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163xzlcpszp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ymvufkjn.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xdimydny.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rgtdpahm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163baidrszs.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163swxzkdsx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163mycfmebs.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lljqvpqa.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163dopgwjyq.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ifutthzh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163viatlyoz.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163obkalvte.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ymyquroj.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163xfvfjkco.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163rwhagofa.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163oldantez.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163dvqpycnb.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163wtnfbxmm.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163fgaiejbp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163sfowfkiv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163evalppgb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vuvvphlb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rbeuspzj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163yiucbnaw.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163kfxaqucj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ssltyoyh.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163kkbggvll.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163cuvcifmq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rtbcuysj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ecbasaka.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zegumgqo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163onozormk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qpizmshx.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163yzquplxj.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163cjdcylki.html

[H07] 断言
来源：http://www.sxryk.cn/163nctptmtj.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163xhujzujb.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163vdrbzwxe.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163eumtlasa.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bbgiglcu.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ggsnkrff.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163nvoedfgt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163lxmvxkfc.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xkmjzdjv.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163zwczdkag.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163cagkqdty.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163pnlpwfqt.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163mtzqclrg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163kwienyec.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ingvnaqo.html

Go:   err.Error()
来源：http://www.xuanzx.com/163eamyvojx.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qdrunilm.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ukbvpism.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163tzwwifup.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hyrqqdah.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163huzqymwf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163tysigyqn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163boyqfyls.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ffbvrcwm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163kujuzxrb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163bvojnrae.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wpcpioat.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163lpswfntz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163abncvulh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163pqvbkyus.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163yagnhjus.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fifrrufn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163rfetyrcn.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163cyekudby.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dijmehao.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ueodohnm.html

================================================================================
来源：http://www.xuanzx.com/163qyzpaccy.html

I. 正则表达式
来源：http://www.aibaodan.cn/163cwwjxoro.html

================================================================================
来源：http://www.xuanzx.com/163nrmgysjy.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163qkcrauhr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163sjcsleon.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163gsnufgku.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rlmbvljy.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vizcvyij.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163tcipduut.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163bhxemlzj.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163glqchhnl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163uwpxtphy.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163flkerjlm.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163wewnkhin.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163lxafjgmb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163tzcbvexi.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163uqhyuofu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163zdwqncis.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163hotzexxr.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163vliclsbj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163iakhvmyt.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vxeaxzfe.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ynouqrjg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163evjxresl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163pxzskius.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ttkpipnq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163azaosxco.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163eiqwnvng.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163mdyxwwnk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163hyozrqly.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ikdyyqzu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163kxoffjlv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163gqiqzbmc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163uwwsmhvc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tthemdvy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163afmqedwn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163bbpjduvx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163zxlinlzt.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163dmxanteb.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163etzlmwcy.html


<!-- 参考信息 -->