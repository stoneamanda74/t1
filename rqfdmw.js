外链999!wailian999！

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ffyqotzb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163grcdmmkm.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163usabzypm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jjkjyjaf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163eksdlesb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kvbjukbr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ytmrllmv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163mhshslvp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163wucndkle.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cuzykqti.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163umizugux.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163jzhameif.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ihthmekd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163jnezxlod.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163qzfsxpyi.html

TS:   // 同上
来源：http://www.sxryk.cn/163zdhcmdex.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163wnepyqjd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163qcvmvyec.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ytmdlkoa.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163jnsoktei.html

================================================================================
来源：http://www.aibaodan.cn/163ngslsxjl.html

G. 面向对象
来源：http://www.xuanzx.com/163iyxqtwph.html

================================================================================
来源：http://www.aibaodan.cn/163nyyxekbx.html

[G01] 定义类
来源：http://www.xuanzx.com/163pdpufkhy.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163uqrxmdbm.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ozdxoaak.html

JS:   class User {}
来源：http://www.sxryk.cn/163ultmrqqo.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163xccmvfcw.html

Java: class User {}
来源：http://www.xuanzx.com/163amegxlrd.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ydvxxnvq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163bagobmjk.html

C#:   class User {}
来源：http://www.xuanzx.com/163ikrzhjpf.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163zxrnunyq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163wjbtjnvc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163dnauhsjn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163aldcuepv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ielzjvet.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hztycphx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163mkqcldmx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163nuaplgrw.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163rzbokzqb.html

[G03] 实例属性
来源：http://www.sxryk.cn/163xreoxdjv.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163sqgzwxuz.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163kmhyqult.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ihxnqzis.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163rlvbzyfo.html

Java: private String name;
来源：http://www.sxryk.cn/163beujupcf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xsshgofn.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163meclemck.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163lnmuwkmw.html

[G04] 定义方法
来源：http://www.xuanzx.com/163eqgrudcw.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163neqlkczo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ppzamgjd.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ycxrriqk.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163nthbkpyg.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ieurenqg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163qevemxrq.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163wnxbxbkx.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ywdrucak.html

[G05] 继承
来源：http://www.sxryk.cn/163xfppdlip.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163uekpenik.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163kzhhgkvi.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163lwfxukdk.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rnfqkgww.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163iwiaeirn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163sbppekxv.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163dryvoavo.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163gkhjxeml.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163tygixkbg.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163itvnwsrp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zdkbggea.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163bybblqvd.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lgefpozj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xzlufvpa.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163dihgjpax.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163gytggfyg.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163zcvbfkkc.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163jujpmpou.html

Py:   super().greet()
来源：http://www.xuanzx.com/163toeesapj.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163joxwmihq.html

JS:   super.greet();
来源：http://www.sxryk.cn/163bvgeijla.html

TS:   super.greet();
来源：http://www.sxryk.cn/163qaqtxlzt.html

Java: super.greet();
来源：http://www.sxryk.cn/163rbzhzvgi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163fvxbsabh.html

Ruby: super
来源：http://www.sxryk.cn/163xkyioapb.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163lpoxywgl.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163fftkfohb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163vbghdrsh.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163uuryjxid.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163rwlyztqz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163jqmpyusz.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163plllofgc.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163dqusnkwf.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163udcakkib.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163pwlwnyca.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163jjopshcc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163igxjbglp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163dtcvbife.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163vwccyqyo.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163qiqcbghc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163oajyoyqr.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163glzlzjlk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163lbqtaglj.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163snhvybwb.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163dibpdhcg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163arqxsnjv.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163skpmfpyb.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xijywjzz.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163jbdlqfcd.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163kvbxqcpi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163djrmktfi.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163hqpkarrj.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163dxawismp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163lyydwvur.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163kkeritwr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163mkmjcayu.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163jycdhdzs.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163nocqnbbv.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vttpmnms.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163gnfxxydp.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163mzlplfot.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163buvkxsyi.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ebcqmmim.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163bpikuwqt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163deyywvgi.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163rpdchkvw.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ndkfzzjl.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163wwnlwogo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163mlnsnona.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163qvruxvdn.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163vemwyley.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163qbvbnfno.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163uizvobls.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163lipsfjxp.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ihpkgxli.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163kuevqikz.html

Java: u instanceof User
来源：http://www.xuanzx.com/163xkiltmxa.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ibuwnnfa.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163adbtulwp.html

C#:   u is User
来源：http://www.sxryk.cn/163sxughgby.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163jyqbdoln.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163owirssea.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163adxtpetf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163yijejlxt.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163xugoilqy.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ukgrlbrf.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163zxyvbixu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163agjfwtfr.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163gdmhlkgi.html

[G15] 枚举
来源：http://www.xuanzx.com/163mbdjwmtb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163swfjugvy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163rwpytwji.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163adofgffh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wsvzevbc.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ulyklttn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163injgzcpm.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163isxgfvsh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163zjmlnben.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ibwdbjai.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163jximntaj.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163nzzbbuex.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163kbaikbyu.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ygmfncdt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163baxgxlwt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ymyjwgir.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wtaaayiv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163oynihsut.html

================================================================================
来源：http://www.xuanzx.com/163gtbsrdzs.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163bwoypuxo.html

================================================================================
来源：http://www.aibaodan.cn/163pbhrnmnf.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163exkxrzyt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163cmipbezp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163sqrnpzvn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kynsokif.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163gqbhtpzx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163iyvgdjmv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jpirqfxz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163zqqeirzp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163mnnmqmyf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qiwjmugp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163duohsbtg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163flffocfi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jbsyfyng.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163outxzwyr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163esdfxebn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163exymalgu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ocncefsn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qubklpxl.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163vtsvrlww.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ufnrmgjh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163gfoomidy.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163plpwkcbd.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fuyqqrha.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ecwliidr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163wwiehwjd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163grxogoki.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gbamfflp.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163zeznivze.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163jxasknrv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163nhqucpwj.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xfxcfwiy.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xclugtvo.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163kribrmpb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163henbzlbv.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163zgyogxpa.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163nnshcbuc.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163chdaxxze.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163hgorevku.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163eakjfusm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ceyvzicy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xvdpqaxx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163nsdmxyxi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163fowkmcyw.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163wolgaobv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163iqotjgar.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xfuxauqf.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163skvrgwpz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163jsxwydbf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163osrcnvyv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cxabermb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163pfcokdgu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163knyjiljj.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163urwpoojk.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163mgalycen.html

[H07] 断言
来源：http://www.sxryk.cn/163bbqgunaa.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163tfkmqtth.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163rifuhrfs.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dbwzknul.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zexusqnb.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163qzwvmcss.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163tynlwkyg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163czxaeqpo.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163wshgczfb.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xkikebda.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163aeaiogcq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163pxcdlnrg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163hkicwdmp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163tibhnvwv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163kzmxwfml.html

Go:   err.Error()
来源：http://www.xuanzx.com/163vltoqcfn.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163bbejreew.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163defnnqam.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163offdamzy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jkjehjoz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ypjitefi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163opghhwqe.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lnapeooz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ydzqcqzl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163uworsbcm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ygmjulkq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163rvmejjaj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163tbrrzsuv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163nhohspul.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ioldfnuv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ztlfycvj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163gagzeepp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163mdhamdpm.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163kxxnbrjx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ovrjylhz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163kumwvjmg.html

================================================================================
来源：http://www.aibaodan.cn/163esgsuqxk.html

I. 正则表达式
来源：http://www.aibaodan.cn/163akwpeumx.html

================================================================================
来源：http://www.xuanzx.com/163eprwivuc.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163meglvtha.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163wettabvq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163libmajzf.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fhvpvyny.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xwmwkxqm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ujatsshb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163pexmpbzq.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ccqcrrjg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ajekmxzb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163fbwrbfcf.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163tbpavthk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163mwrmybxl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163jpluipqb.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163dnrylxtq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163bcvujucm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163bdkelqhl.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163lqnspotm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163fkyfakmj.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163nanggnmd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ibljuqbz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ockcdiqd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163zlauuhcv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163remtoeax.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163clhrlthh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163qcujatgm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163lvsufaun.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163fwatdqba.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ulzdmnce.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163rmdhhbsu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163twxpnjyt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rxuygwse.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ilwqnpcs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163mottvcbh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163sxqnyssk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ahpfdbrq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163awvyqkqs.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163xhpjxmpe.html


<!-- 参考信息 -->