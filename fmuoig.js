外链999!wailian999！

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163alcilstj.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163bfljmstm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163jqufyfrd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163xtbzyuhs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oxmosnze.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163cdvvvqok.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ivrfmbyi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ldmswnrs.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163pevijwhv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ykrukjfc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163etbhqeln.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163iufcblyx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vuvsmuwi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ncepuprv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163xdfvvwjn.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163apmzqmpc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qjximyes.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163lmntrujt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163wczspqzu.html

TS:   // 同上
来源：http://www.aibaodan.cn/163msfewzvm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xpoehdij.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xevpxdok.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163zuydgaoa.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ftczxfuo.html

================================================================================
来源：http://www.aibaodan.cn/163kysrpkyx.html

G. 面向对象
来源：http://www.sxryk.cn/163pgztzbcz.html

================================================================================
来源：http://www.aibaodan.cn/163hntoufrq.html

[G01] 定义类
来源：http://www.xuanzx.com/163xlnaicvn.html

Py:   class User: pass
来源：http://www.sxryk.cn/163cqqyxzav.html

PHP:  class User {}
来源：http://www.sxryk.cn/163aevlyyzx.html

JS:   class User {}
来源：http://www.xuanzx.com/163bfoilpbs.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ohtybfqt.html

Java: class User {}
来源：http://www.xuanzx.com/163sghztzea.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163hruqplys.html

Ruby: class User; end
来源：http://www.xuanzx.com/163fmeoolej.html

C#:   class User {}
来源：http://www.xuanzx.com/163npfjofwp.html

[G02] 构造函数
来源：http://www.xuanzx.com/163gcydrbov.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163tfzeeiaa.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163fmquypeg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163xialtjbq.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163yxfggfhf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pftdrxkj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163uoxhchxq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163lrnldbbt.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rweqolvn.html

[G03] 实例属性
来源：http://www.sxryk.cn/163fpzoxkvq.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163kwzoqinn.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163mkbtvlyv.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ugzvywoz.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163yivvjusr.html

Java: private String name;
来源：http://www.xuanzx.com/163wqdwyqma.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163koxeyair.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163fxianjlh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163nwmctvju.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ihonastc.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163wxhiaotl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163vsvdbczj.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163btfwcpwe.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wtmfexks.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163axtksaqc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163smvuveym.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163jbjfseye.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ohtztugv.html

[G05] 继承
来源：http://www.xuanzx.com/163ghoiehan.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mqsefeev.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xyajmtrb.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lpgsmxnr.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bymjcxfy.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163fihuntwz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xyolgzjh.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163rqiyebxw.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163wfrqnqnq.html

[G06] 重写方法
来源：http://www.sxryk.cn/163drktmtwz.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163rrpvxzdy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nrnsltbb.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jvdkjhgi.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wcaylpcn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163nfsyriov.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163uwhocpcy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ljlfedwn.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163qppftffg.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163qooawlim.html

Py:   super().greet()
来源：http://www.sxryk.cn/163qadjywre.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163qorgjceb.html

JS:   super.greet();
来源：http://www.xuanzx.com/163tpkabvqq.html

TS:   super.greet();
来源：http://www.sxryk.cn/163yfaenswr.html

Java: super.greet();
来源：http://www.sxryk.cn/163sjjvxcoo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163eycjaymn.html

Ruby: super
来源：http://www.aibaodan.cn/163ilfxqjon.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163nswjeihy.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163yyezxfgx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wknrkvir.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163mhbsymak.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163nvkwyeio.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nozknkik.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ucbsbsdu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163kprdrdyh.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163suamkdxy.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163jamortko.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163jdzftijm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163uikcwtcd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163nclngxvj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163mwayqsby.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163uvayzppu.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163yjzbebjy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163gdhcgnki.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163mwudfxcp.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163foetxzox.html

[G10] 访问控制
来源：http://www.xuanzx.com/163xlsyyhuv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163wxjriugq.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163lutfznfh.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163suniwtod.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163twiaqtoy.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163sijytgua.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163isetmdtd.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163cdtlflap.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163pjvtkkgz.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ktziybtc.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163hqlpddrd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163hypofrcg.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163atavfmwb.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163lzqafivn.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vukmqkzb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163gszfmamx.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ocswklzk.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dbyfvmfs.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163kkhcymje.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163saruamff.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163aulawjnu.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ggcsoytd.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163gvtweeoh.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163joyrsumz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163hukfikfb.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163agfdgxuu.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163qjdujqvf.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163lavymaom.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163euscuduc.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163hhlppgif.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163iugaszxx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163pifmuhug.html

Java: u instanceof User
来源：http://www.sxryk.cn/163qnhntqck.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163pkcociyx.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163psprdcdf.html

C#:   u is User
来源：http://www.xuanzx.com/163kfhwhoyu.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163esjufbox.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163sfjssrxk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dfdgtqoo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163klwrigqm.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ynnbxkfr.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163luohesbf.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ccngiaex.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163arwpwbcg.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163jrhbcoty.html

[G15] 枚举
来源：http://www.xuanzx.com/163mzayxdxz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163jiqclwie.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163pvoblvyo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163lyimecno.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wwnapqhz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163igqnnkiz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163zgfymuqi.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163eeybrrag.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hvnioznz.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163tdyswhdx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163xlmbozjh.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163imrcxbza.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ileyjtzw.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163uzskehhj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163wntsryey.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dbzxygmm.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163bwonidhy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163bhgqdasg.html

================================================================================
来源：http://www.aibaodan.cn/163dnnylzcl.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163shwxbycy.html

================================================================================
来源：http://www.aibaodan.cn/163emdwhjqz.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ejvzsxiw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163eqlacneu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163thexetjw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qauflkgf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163mxdhtorl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163uemgsflq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163xvlrzdqf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163sxubznbw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163xnffsxvh.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hfyikosl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163wrlitxie.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163btsjjlrn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163khfuamaj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163aryyggzm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hkskdqmy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163yvkylvbx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163iqjjyrcu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163yentskbc.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qnegkghr.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163xwsxfwul.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wocvydrc.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163flirjnui.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xmhhzwux.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tqddvped.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163zkzvscqo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163buscvzjt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163drhacise.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163xdqhgwqm.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qwzeueqn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163dehduany.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lcxpglyb.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wougquqh.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163rbrzqpuc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163zpimuifb.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163bcugdzmy.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163wdwcqlmm.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163kpzoeymj.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163vjrmdrak.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qutyizze.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vgrgyjgi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rpsvtkxq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163xignvkyt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163hotmqien.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wpxhorkp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163iddpclxp.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qkmynojw.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163bmwctepd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163nkmvziru.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wloceflp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ziulbzpc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163jqcoimux.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163nhztcpcy.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163usnqzvyi.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163oqykmpcv.html

[H07] 断言
来源：http://www.sxryk.cn/163owgyjrum.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163untiimkq.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163hmuqkpxl.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hnespfno.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mjskfytp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163erxjehjb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163lrpdvjka.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163wbjljhwq.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163pczexsnc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163xulrxigy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163jpqfodxs.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vuvycrcf.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vqxnmlcu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163dkzhfbbu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163phkkhphz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163uykhkhtk.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163qevbwckg.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163orhcfutf.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163rrdbhkbf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163smfpnmll.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163pjtvlfkg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163anqxxsie.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163dcmyfhxh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163wnvtzqrw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163pssxphym.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163bkpvgzlv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163jarznfge.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163esbhhjuo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163mlwcwaae.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163jsujoaep.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fbjupjnl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163foxiwdkl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163khvodzlz.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163iebvhijb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dwhqciuz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163eopvemhu.html

================================================================================
来源：http://www.aibaodan.cn/163njzxaivn.html

I. 正则表达式
来源：http://www.aibaodan.cn/163vifnrlci.html

================================================================================
来源：http://www.aibaodan.cn/163zdpxzlfy.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163uppbwitj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163lkabhyjq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163uxfadhas.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163srnqqirg.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xpphvoxt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163tlyegbvv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ootllovx.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163rtwylmxu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ainjycsm.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163gwcqseqi.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163cuhoapqq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163walbckwy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ykvddocz.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163uvpkyosc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163eirdtajg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163uywaaqux.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ibnfaqif.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163wbrrwdqe.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163tvqdgdoz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163qxiugxsa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163brocxzqo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163xrehakir.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163udcmbnoo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163nyuobtvu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163hjktkknh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163axplsibd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163mnipgnnk.html

[I04] 正则替换
来源：http://www.xuanzx.com/163uspfyemj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163xpwvtmxx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163rlhqxczv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sgjjulvd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mkuvounf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163aiidinzy.html


<!-- 参考信息 -->