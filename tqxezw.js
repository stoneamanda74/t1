外链999!wailian999！

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163pbfvfrew.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vcaejgra.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ihzuckqn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163xvkmwinf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163uvntufif.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163trrhakhp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qiugapqw.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jnubthde.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163pkbqnxce.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163jvjbpxwk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163bxhmppow.html

TS:   // 同上
来源：http://www.sxryk.cn/163hvzysriz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163wjmzfsni.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163atqlbbuv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163zivpmlob.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163vcowjwbt.html

================================================================================
来源：http://www.aibaodan.cn/163prldnrqk.html

G. 面向对象
来源：http://www.xuanzx.com/163quofbwtj.html

================================================================================
来源：http://www.xuanzx.com/163bfpdyunl.html

[G01] 定义类
来源：http://www.sxryk.cn/163mdajappj.html

Py:   class User: pass
来源：http://www.xuanzx.com/163soaggoxi.html

PHP:  class User {}
来源：http://www.sxryk.cn/163wivydwji.html

JS:   class User {}
来源：http://www.sxryk.cn/163ykzzlyfk.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163xhonvrvf.html

Java: class User {}
来源：http://www.aibaodan.cn/163rwqckjsh.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163xxhlqpyg.html

Ruby: class User; end
来源：http://www.xuanzx.com/163qthxogja.html

C#:   class User {}
来源：http://www.sxryk.cn/163fwottifn.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163eeftqbby.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163nittzzgy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163zrhkgkhe.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163tyxfvxid.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163qscgrrwg.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163xaqcxanw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163yddkuoie.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163mvvyuqzw.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163gzasbrwa.html

[G03] 实例属性
来源：http://www.sxryk.cn/163yavbyryq.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163rtmzahgs.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163zbdbelhi.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163unjoqysy.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163kdtpjatq.html

Java: private String name;
来源：http://www.aibaodan.cn/163deoqoqjl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163vwkdpytx.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163rdiahhyj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ywegahsc.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jleyussi.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163bpqgjgth.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nwikmyas.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163wpsjeppu.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ltafxvmy.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163hrzojxem.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163madnrlwn.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163mqhpqarb.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163wfufjqaf.html

[G05] 继承
来源：http://www.sxryk.cn/163sbfhrvqz.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163imgsyaeh.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163dbjofycf.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163oodiapfl.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ezmhused.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163tlarygkx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163uxxsxslw.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163yxpudbxv.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163bhsonkqn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163nbidddrp.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163urmolzhr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163soayebbi.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ngnnqidi.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163npduxmsk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163qgvtykjj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163losezmpy.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163llaumcjk.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163dfwjuubq.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163jymddfhf.html

Py:   super().greet()
来源：http://www.xuanzx.com/163zwdlpqth.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163uxhxqplv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163sbjvjnsq.html

TS:   super.greet();
来源：http://www.xuanzx.com/163aoqpqgpd.html

Java: super.greet();
来源：http://www.sxryk.cn/163ahstghli.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163vczvgqwj.html

Ruby: super
来源：http://www.sxryk.cn/163ytxwasti.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163pfxrppds.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163fkcpbzcm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163dgjiiqqf.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163unxiowry.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163dtzrexih.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163tbdzvgwx.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163zhvvidls.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fkrjonga.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163lpdwhjug.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163sdgbcyqb.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163khwkmydx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163sfxijcgm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163etscspni.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163emfvqlwc.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163genjloxe.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163hjnsayok.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vdozkadn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163pxwatqjl.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163tqqdhuzr.html

[G10] 访问控制
来源：http://www.xuanzx.com/163bhzlzxcv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mxnvmagn.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163sudpyijv.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163zpwujifw.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163napebwck.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163lldionwk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163aageufwt.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163gimuucws.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vexlnxpx.html

[G11] getter / setter
来源：http://www.xuanzx.com/163lmzoordp.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163knctytpn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163cvvehtky.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ovytriry.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163rvcgunaj.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163hskprvuz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163sfgxvyhe.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163hdlkgudf.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163jgrqhdpx.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163oktzhriy.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dfohdcsd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163benheqni.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ewnzowjl.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163lmfgdavy.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163eorclckt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ytpnqjog.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163phydceeo.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163mrawilon.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163twkyxfsz.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163aumdtamy.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163lsffxpot.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ilgvexke.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163zaknmeap.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ygovrctj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163aqqbckpj.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163yryhdqyk.html

C#:   u is User
来源：http://www.sxryk.cn/163otbusbyn.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163hzniwggt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163kjwfpiqx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tbvdjxwa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163oqdhydyl.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163fqyveyxk.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163trsncsnl.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163hzwhwtlf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163vlkgbalb.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163hpicgxpk.html

[G15] 枚举
来源：http://www.sxryk.cn/163kbaztjgm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wksljjxb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163arwxzxtb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163mjopxgcz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ktzqadrx.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163wetyuqhn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163kxiscjoi.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ndjgvaeb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163iyuvwiwi.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ilfywvdb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ofvirmca.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163zyixtbqw.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gewgzxyu.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rbjnliqw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163zvamowca.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163wzwacngj.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163eukhrnct.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163goqkaaue.html

================================================================================
来源：http://www.aibaodan.cn/163dqbmakdy.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163xlvevcjo.html

================================================================================
来源：http://www.sxryk.cn/163vmzlgeuk.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ongltohw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163pbkhlnug.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163svaicell.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ysxszwdb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ngzlgbut.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163uwkvwnjr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163whpavbur.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163owkdobbc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jjymyzne.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163vnbmnwdy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163tmttjiuq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eybleias.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vnonibgz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ectzyyzq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ywhhbzpq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163buehuqgp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ygobbese.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163hvhjadyg.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hhejghgq.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hqnwljjj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163widagbni.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hcwzxjxh.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163omkdnlva.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163wphjgqji.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163vxmoforx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ngkmvlfl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wasyskkk.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163vkrzflkm.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163lolmhigj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163bqnnhyii.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ipqhpola.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163cpurkddi.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ermtjvop.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ywfyhnid.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ecwqgwtv.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163kyxmakpg.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163bolpcguk.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163jqdabvvg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163uwhzxbud.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ynmudcua.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hpbejcuj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163tjynibdm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163rwsvwzxr.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163kznjmeck.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ifjxtqcs.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163sqsyxxhz.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163rjlimllh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163dwpzleno.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bqugejjt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zvykpwcw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163heancuyq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163viyqsouf.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163uqgyxfij.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163sosehmfr.html

[H07] 断言
来源：http://www.sxryk.cn/163zxyfjtov.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163htfbajki.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163bzpfqpjf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dvplgstr.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pjufvkvp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163bevtaljr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163kkidgmor.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163craxsytb.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163xkqyedxw.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163cacoxaev.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163kmcbzsbd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vzklahyi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163rfttdkxk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163umgjtrdw.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163eewhkvnj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163hzxtikrt.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163kfjbpuvw.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163lkgdkrgr.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163uyrofavg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jqztmdcd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163aquottca.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163eufnurpy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163fdjqtggd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163wpcdenph.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zjxxyztt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163yczadxeo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163sogwetit.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dlhcfrno.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mhfpsbcn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ishkeley.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163gyfwjlfi.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dndhzfmf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163kjfwwayw.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mkyjnqvy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163hzjpvngm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163lwuwunps.html

================================================================================
来源：http://www.xuanzx.com/163bvtmsxrc.html

I. 正则表达式
来源：http://www.aibaodan.cn/163lamfabjy.html

================================================================================
来源：http://www.sxryk.cn/163cubksfin.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163unygscbn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163sjpvpzwb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pmjupvck.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xiktgxdo.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163kjnjyovc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163mfjgwvrw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163khnznyow.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163wiqhgyns.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163zdznnxzt.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163nygnnwdh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163nifyquqn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xugnfohd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163uxyifnoj.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163eyvmetxt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163xnmovepu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163kfxmwxdn.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163chywzbiy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163kylpxkpn.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163putjvpns.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ndfglzdu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163jxianvja.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163fnabfwgc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163kljonhut.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163njojtcsy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163kjgkpcmw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163tvcmefwc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163bzbykyip.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163hqfklrcs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163omawsawk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163fosomdal.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163mjsfrngx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cfjuepmt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163nfqwmtpt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163vpvliheg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163zhzyqxvp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hnoszjsa.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163eeghcuep.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163kbvwkkzj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163vmcxvrse.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sruyeyki.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rpaazbvw.html


<!-- 参考信息 -->