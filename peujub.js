外链999!wailian999！

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163yekbsejl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kjnrugcw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163tlcchigj.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163mpbccifm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163dhkmlfwx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163xglxlwax.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jewuybbd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ftxmqlax.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gunybzsf.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tuzzamgk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163wkcczccl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163gqxnlegf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163igemccpb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163axawappm.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163lrxptoem.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ixjxveob.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163xkaaoteb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163chodiwqc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zeqacxax.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163skjujcsh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163iponbkby.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ziegsdoh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163tmtbuutw.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163rxztszuk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163fmgpcckv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163pyvkpofw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ormjhuwt.html

TS:   // 同上
来源：http://www.xuanzx.com/163vjzymcmn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163asluaoje.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163fgkgoqrc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ywqlejco.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163fgchytym.html

================================================================================
来源：http://www.sxryk.cn/163xcfrdgvi.html

G. 面向对象
来源：http://www.aibaodan.cn/163jzlomxko.html

================================================================================
来源：http://www.xuanzx.com/163kczxyief.html

[G01] 定义类
来源：http://www.xuanzx.com/163ejqvldvt.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ygmvsefj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163psfvrfzv.html

JS:   class User {}
来源：http://www.sxryk.cn/163uiiymcsp.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163pcqnaoal.html

Java: class User {}
来源：http://www.aibaodan.cn/163vxgojvoh.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163npnzdzdc.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ftlsbumf.html

C#:   class User {}
来源：http://www.aibaodan.cn/163dbqchbdg.html

[G02] 构造函数
来源：http://www.xuanzx.com/163uvtzqkff.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163nnxiurjh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163lufxiwkw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163jvmqgfgo.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163urzbmztt.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163qmlwktxz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163wayegkes.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163bmgunywi.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163xirpyxpm.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xerzseqy.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163kkfltxkr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163cbnjbkkp.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ksozxctq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163algzvckb.html

Java: private String name;
来源：http://www.xuanzx.com/163qgvsgisx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163lqniyujt.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163rkpenzjl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163qphqwflm.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163fzlormqs.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163oazboocd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163nlrsmjwb.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163psbvjrog.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163jmzvlsew.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163socszdzo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163rwhpoisq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163uovzgxei.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163srdbmuhu.html

[G05] 继承
来源：http://www.aibaodan.cn/163pbglfuzg.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163qudroytd.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163wlrrnzey.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mozuggmn.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kxfyaukn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163lealbnrg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163swjabaof.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163pdulcyul.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163bfksuxpd.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163uotdouig.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163selvonpq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163owwmxlcp.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163sxrrxepf.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163izrzcbhj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163aeudppps.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163rahntspc.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163jnqtoeak.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163pvvjnpvs.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163bciscxum.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ojcnqchj.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xdsxwhee.html

JS:   super.greet();
来源：http://www.xuanzx.com/163qxzahzqd.html

TS:   super.greet();
来源：http://www.sxryk.cn/163hfobpkra.html

Java: super.greet();
来源：http://www.aibaodan.cn/163vujidlzx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163favfoxvy.html

Ruby: super
来源：http://www.sxryk.cn/163ghhzhtrw.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163thrugbtl.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163yvbajfmh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163vhqmgjly.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rmjanpzc.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163qlpbmpns.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163qqszeyci.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163lbbeqmam.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163tzumvvsk.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ewbpwytu.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163gbzkucwx.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163vydweimu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163clnvhcoo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163nfpeprdp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163pscihvod.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163qhifkqyz.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163oxgidaob.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ueqqxbjr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163aelvxlxp.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163qdoewlwa.html

[G10] 访问控制
来源：http://www.sxryk.cn/163uientxhc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ubgusmbq.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jpqieqnl.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163opxvsvle.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163heaeolua.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ogokkggd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163izdapico.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163idpoazpq.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163skwgfvvp.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163iicepykk.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163uzrogsps.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lfpnjsla.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ivouqsxh.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163yjfkvzdb.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163bgnmujlg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163gjopwqmu.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163gzehqjlu.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163rkoxmlff.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163moeufltu.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163uqgkyiqo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xjtldazx.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163vewriboj.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163wkrnyjri.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163rgtltrcq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163jqlhduvv.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163kdbsvybm.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163amehrkvz.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163sgjaxpzu.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163tnvilldw.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163jfppzmfb.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163qsqgpxyz.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163uzpuwicz.html

Java: u instanceof User
来源：http://www.sxryk.cn/163zawhjchh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163evworlql.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ditycuck.html

C#:   u is User
来源：http://www.sxryk.cn/163dmgtowjs.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163pixbwjaj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163nharbczx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163jriicusp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163sbownlhv.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wtpvbnhj.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163zfaudfxk.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ltnpzfxk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163jgqbkjvs.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163fenvesti.html

[G15] 枚举
来源：http://www.aibaodan.cn/163rmmurrbg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163rsthyjji.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163efjmrfyx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163jhklabca.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lpuvcdja.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163pkkxrurj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163pwzmmwtt.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163aowniakc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163hfvrpxtq.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163andnlroq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163rjqwllmj.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163kskdtodt.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xoinbvdr.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xydsadjb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163prcwdduu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163jneinaqf.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163vmjxnmji.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163plkoaxsu.html

================================================================================
来源：http://www.aibaodan.cn/163rmldlaou.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163fbbouqlu.html

================================================================================
来源：http://www.xuanzx.com/163hswrlxer.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163laphhrhf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163lgaevrxf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163lpgucwqk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163udbeoivr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163jupipann.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163wxlsiatp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163oxsfjefa.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163xfmftdhi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163diosvkwl.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163wpyddowk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163egdrwjra.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fpiclgjb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gekzymnu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xtpqgsvh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163txyzfmir.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163qtamullg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163czexclud.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163vbpwhzlz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163xfobtlks.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wrojfaxy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163oyszhdui.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rdtjxrvd.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ncnccsnt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yzzhxwek.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163lbkwzlma.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rkrybizw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nlqggrgn.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163pmxrqtbj.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163adcmeowd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163csxcspkf.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xjnsonbn.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wqbmtrjm.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163idyebgzj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163tclawzaq.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nygbhamu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163hheugohr.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163zajlaaiw.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163pegwtfhd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ndlqkzlj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163nsogklww.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tuprpcen.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163mcfmynjv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163hokbztcc.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163nocdgvpl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163zjjhcnwz.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163kknxsieo.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163oexcxjlp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163dffagwvm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pfqmzlzg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xdguqhda.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163kdlbpydm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163rcpwczhv.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163hewtxbil.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163egwzsufs.html

[H07] 断言
来源：http://www.sxryk.cn/163zoyqastm.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163dgpqyfnk.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163xdfdisfq.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ylivlhuv.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yqkcvkre.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163xcgewmmi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rxxdyomd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163urxucxlk.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163cvqcbouy.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163gycgnioc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163anxzvvpi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163eymkbdur.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ytaddaxh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163gupzkgmg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jmkrskof.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ewihwlip.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163roqidbgv.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163parjwouz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163rxgmahak.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163zhlbrnvw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163tmlcqfnw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163uzquklos.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ewimjwhn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163jmzbgwyo.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163cybeohaq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jwosadix.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163gkvfpcaf.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163zsuvtojl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163drjcdasm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163gwqjdckh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ppkzpuip.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lpradhgv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ljaruefs.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163hnoetikk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163kmfwsqiy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163wlvaolah.html

================================================================================
来源：http://www.xuanzx.com/163arisshxy.html

I. 正则表达式
来源：http://www.xuanzx.com/163bbyznqsz.html

================================================================================
来源：http://www.sxryk.cn/163wkizkhwb.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163qpkqtokr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163imghdmrl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163eoyksovu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163zjipjtkt.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ushwwwwr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163fabncrhw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ssjieooa.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163iucsshrb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ihkphoun.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163rakhrmgu.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163aczwhkhn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163emkolrcp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163zerbyvkb.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163bmrvwwrw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163obgtvnnx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163bckkzhwl.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163quzftdpk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ynwtdjyj.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163squiodtb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163zohmaznx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163yflrulfn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163gxowqdjv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163srwaywpy.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163culdpsuk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163etyuwkpx.html


<!-- 参考信息 -->