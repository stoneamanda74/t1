外链999!wailian999！

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nmwhehjn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vamqgocw.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163lyxfbopd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vjqpgxcw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163dgnztpvk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163owwjjfsj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wkjnxhrk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163eyutxeky.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163njcxixxc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fftwxvla.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163hzknzkur.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163pwoayqos.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163nupetret.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163urfrgqzz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ubjypvhq.html

TS:   // 同上
来源：http://www.sxryk.cn/163tjibgneb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163lovkajzr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163khrhzido.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163igalsdhb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163kfirlrlu.html

================================================================================
来源：http://www.sxryk.cn/163soesauyz.html

G. 面向对象
来源：http://www.aibaodan.cn/163dyvlxoyw.html

================================================================================
来源：http://www.aibaodan.cn/163uaioocdr.html

[G01] 定义类
来源：http://www.sxryk.cn/163jhluplmj.html

Py:   class User: pass
来源：http://www.sxryk.cn/163sljqfxvx.html

PHP:  class User {}
来源：http://www.xuanzx.com/163apyxqrao.html

JS:   class User {}
来源：http://www.xuanzx.com/163qepccopw.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163sbhwexjh.html

Java: class User {}
来源：http://www.sxryk.cn/163tqeacgdi.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163dxuwllxe.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163untsueqr.html

C#:   class User {}
来源：http://www.aibaodan.cn/163elyxdoop.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163hvbemxos.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163toqgatfu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ryurwzce.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163dizwshgh.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163xkrlomil.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163dfvucbqz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163tmwmtwxd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163kjfgmqfc.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163accweylg.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163givsiwwl.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wejzdxuu.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163tyacasxx.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163uamtgudm.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163izasgiva.html

Java: private String name;
来源：http://www.aibaodan.cn/163lpgktbmv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163lxnpswim.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163aatekqes.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163jazmtrhe.html

[G04] 定义方法
来源：http://www.xuanzx.com/163kdmlxidm.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163rokmuhsb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163gdtkookb.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163gflpchvv.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163rpptqwht.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163qvviwqre.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163osvljhvv.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163zbtoiclz.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163xjqngyhn.html

[G05] 继承
来源：http://www.sxryk.cn/163wmkoayys.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163sxwdruls.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163sdttmfcj.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163nkkbltpr.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ziudnkwr.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ukfkrbiu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163oigyxdnl.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163fwwdkxye.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163kkzawpta.html

[G06] 重写方法
来源：http://www.xuanzx.com/163haprzbzu.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163vcjtlbtt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ekxjmawc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ldptcdxn.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ftrovwdz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163xjwjaeld.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163xkqzvbjl.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ynvpemyf.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dksrwyox.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163mxdmtfjt.html

Py:   super().greet()
来源：http://www.sxryk.cn/163jlxapwbh.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163yyusvueb.html

JS:   super.greet();
来源：http://www.sxryk.cn/163qurahflr.html

TS:   super.greet();
来源：http://www.xuanzx.com/163mbbslqgc.html

Java: super.greet();
来源：http://www.xuanzx.com/163nsiyvezy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163hxrxlrmq.html

Ruby: super
来源：http://www.aibaodan.cn/163jfrgkfla.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163usbetuwj.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163oupecdyb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163cqjttdud.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163bsuetamx.html

JS:   static f() {}
来源：http://www.xuanzx.com/163eszzscjo.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nkdhmlcu.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xlmlwnvb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163hqpqmzxl.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163iiyvzqig.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163bhykccrf.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163fdteegwm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163cqnbaspw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ilnbjmfv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163pydfanwv.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163yxitwywp.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ooeznoea.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ngiqzcad.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163pumprnjd.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163wvyfztyu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163opwyblvm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ozdnhopf.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163cfmecfnc.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163gzrwifqv.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163juwonola.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163wilbgolu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163iebvnzgu.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ixbmcblz.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163kgbjntnj.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vlfeguus.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163gfiqlrbb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163opqjmocm.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ddyqnbvb.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ivqqkiod.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163rhsbwnxr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ygsllksl.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163brumhyjp.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163rdqaodlw.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163irmasuxu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163wlklfqvm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163zvaknmfq.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163hsecbith.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ardmdice.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163hbkamuiu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163gvclmcnn.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wnodelor.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163gbuptgiz.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163faegssqu.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163fcbajhbn.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163iwaodkxf.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163gsbjmcyf.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163wkmlzxrg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163uxzrjrnb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163tcnciral.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163uxsgzdsv.html

C#:   u is User
来源：http://www.sxryk.cn/163dlwpncto.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163txjnattg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163qsuxdtcm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dzgserfg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163djyssslg.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163lkwykixt.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163absfemit.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163lqhggpqo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163viclekkc.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163fwdagzno.html

[G15] 枚举
来源：http://www.aibaodan.cn/163wjnleaai.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ucsddvqq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163lbdsizaz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163vdfhramu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hkjvkpck.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163mrgfimmm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163sbheenzn.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163swzmlkgh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163porkmlmx.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163eeaocinx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163qbeuioue.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vjrrymjc.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163gxbbrwvl.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lefljlvj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163wlkaltkl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ixxeevwt.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163fjkpsjms.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163wumgktvg.html

================================================================================
来源：http://www.xuanzx.com/163tpomjaaq.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163fvxabwbp.html

================================================================================
来源：http://www.sxryk.cn/163vootzufd.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163eonpbjdf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163klzexrbu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163qverchwi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wmpzzlfg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163twlxtyrl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163nrdezvvz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163fmgqxiaw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163udkcjmxp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163cjfywmse.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163sjglrqwt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163dkvljpqx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163syfdaupd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uoawacvm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tnqyogfr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qvjbrqnr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163xdddyahh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163enoanxhf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163jkhnsllu.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163hukuxpkx.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163lqwahpyy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163rjmtcjqu.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163shxpnruo.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ccsrbvhg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ogbbqjhy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163jcsoipfa.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163hqrlbyxn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163snnjroid.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163rsqiinae.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163xtunktik.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163cnabvdeb.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hwkvjail.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zxbulhim.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ylvklmyh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163stindylv.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ggbpszhm.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163soeckxqa.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163qdjkqzef.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163fgygdklx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163asbvjncr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163sdncbjcm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163txnjutpy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163qesgefqj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163uzcycmjd.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163acutqbqq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163xeikodrf.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ydhwyobp.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163uxcrgmlu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163wodbjcmb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zqehlrzd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fzzstuan.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163hmiqpnap.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163flnwpwco.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163mnowrnrm.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163fdvmyqae.html

[H07] 断言
来源：http://www.sxryk.cn/163yuqhupuz.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163rdmtkidu.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163sbkabvct.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qlngmruz.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hwewdsmf.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163iblgwjqw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163xgdjxzeg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163vxdzjypj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163yakuwxpm.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163aeclxsno.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hpvrvsqn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163eyhmetsy.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163sitpkdjm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163daxutkkh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ajacnixg.html

Go:   err.Error()
来源：http://www.xuanzx.com/163esaoeuus.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163bulscmtn.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163opubwqxd.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163dhdrlsxs.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163zayifshm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163gaymtwqa.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ripnvwtj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163vtphkyvv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163bogpwwbj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163cuszvnvs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ldrbssfm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bhmzvohn.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ozokfigg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jdwnypsk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mwacfomr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wnuhmhjv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163udzkubfq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ibayztpr.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163mxbjonvc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163bbzryyip.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163lncjiwlz.html

================================================================================
来源：http://www.aibaodan.cn/163myoqkmbz.html

I. 正则表达式
来源：http://www.sxryk.cn/163dwhgmbsl.html

================================================================================
来源：http://www.sxryk.cn/163ylwomysl.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163pareozis.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163fgxdetpw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163oiffvkxp.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wlwatzfn.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kdxbsari.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163lhjztpjg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163kljblonp.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163qzlohabf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163fcwiybeq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163iqikhfsz.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163papyjqzd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163jxxwbmxn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ovbkfwnb.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wcjwvvpl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163amcrusby.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163lofmflzz.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163phjcsnyy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163fruurlkk.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163lqddyfqn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163czekbnyw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163hyzfxlxv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ollivftr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163capcwede.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ckslieaa.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163izbqkyvu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163acmidicv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163boekhgzt.html

[I04] 正则替换
来源：http://www.xuanzx.com/163esklkdor.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163uldmmaxs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163okhmgqid.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mhykwydd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cwjqsqmi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163fuuhimsl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163sowjougy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163nnicvidu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163oloioixh.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163qscdrfqi.html


<!-- 参考信息 -->