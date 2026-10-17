外链999!wailian999！

[F09] 获取文件大小
来源：http://www.xuanzx.com/163auqylrhl.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ttbagogh.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163kkuqrqaz.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ggjaaamt.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nzqmxdbz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dzbvmbhh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163qjxjlwim.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163qclmibbm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163affrskmh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163czlfnvui.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fdmzumdt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163omjkqxsi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163uenttanq.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163mpnwywky.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ggeawyyq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163wdcixmsk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uvultvjp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163lsrgqmqt.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163kmlzxpkd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qcqqouoe.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163crmgemzn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vmhuoypk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ddaobsft.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163yxpkyola.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163cxfngnrd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qdmyehmv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163itkmjtvf.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163trhjkvsv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163nptvbkfc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vjghipcr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163qhokzzwx.html

TS:   // 同上
来源：http://www.aibaodan.cn/163djromifl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163cnvqiqvv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163pkvyswgb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163jztgvvae.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wnibxlnf.html

================================================================================
来源：http://www.aibaodan.cn/163accwujzt.html

G. 面向对象
来源：http://www.sxryk.cn/163dpgcdqgr.html

================================================================================
来源：http://www.xuanzx.com/163pplfeiob.html

[G01] 定义类
来源：http://www.xuanzx.com/163bhvcbhsc.html

Py:   class User: pass
来源：http://www.sxryk.cn/163hvkvvmbi.html

PHP:  class User {}
来源：http://www.xuanzx.com/163kipodtgi.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zbudzoys.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163duanivrc.html

Java: class User {}
来源：http://www.aibaodan.cn/163vutfiouv.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163stjdxqxh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zjlgwcrs.html

C#:   class User {}
来源：http://www.xuanzx.com/163yececxfb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163tydcxibw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163jmnwvgxy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163yxrlsstu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163smotcxml.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ilhjpgfq.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163kgrjoxby.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163eytphctu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163wrnaabtv.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163nozlimqp.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ebajgfra.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163xdhsfagy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163tasqllfz.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163mznposwi.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163hqonyrie.html

Java: private String name;
来源：http://www.xuanzx.com/163yatjhije.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ripameqa.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163xnlpmfan.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163kplamqio.html

[G04] 定义方法
来源：http://www.sxryk.cn/163zoetesvm.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vgsotkdk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163sevhtgml.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163pkiootly.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163loeptevf.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163osexgcby.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163jfgbuofn.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163fbrpknac.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ohvasija.html

[G05] 继承
来源：http://www.aibaodan.cn/163gvhrkjbb.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ldwqtzoc.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163lbdjelwj.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tivhtxxy.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qxuzsmcq.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163qwbdrnyi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163dlowxfve.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163oakmmqrv.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163kqjvuiks.html

[G06] 重写方法
来源：http://www.xuanzx.com/163xnfvfsws.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163tflvvots.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ejkbobca.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163omvhzmri.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gmqmflvc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163xglbeqce.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163wpskznah.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ebiqskor.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163wcakirbh.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163jeajbije.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163xdzflzgn.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163slfezfvq.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hhtesjtv.html

TS:   super.greet();
来源：http://www.xuanzx.com/163vxhwdjwa.html

Java: super.greet();
来源：http://www.sxryk.cn/163tvlwucwd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163uezihksj.html

Ruby: super
来源：http://www.xuanzx.com/163tnufymrd.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163wjywujbl.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xgajiovk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163xewalext.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163soayhspb.html

JS:   static f() {}
来源：http://www.xuanzx.com/163okjznyrf.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163lnvpmmso.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163adcylasy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163qbulqxoa.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163sdehbkbd.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163dvylotoi.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163djmlqusc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163mqurocia.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163smhbwbzu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163nvisyfwb.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163nyjuxurn.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163jzzkdbvp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163qpscgwrw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163tvdwdjtb.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163kpfemrbm.html

[G10] 访问控制
来源：http://www.xuanzx.com/163goznjodn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163woemofdf.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xbjquwif.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163pmmxneec.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163pfwzzuqk.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hedfqrky.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163yvqretyu.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163sdtdckqg.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163zpyesrrq.html

[G11] getter / setter
来源：http://www.xuanzx.com/163mkqjvxup.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163mzpeancv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163xnqeqscg.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163hrrnrobd.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163rbhvidjp.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163zfnpxpga.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163okoveqzt.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163iwzpzmsg.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163dmtnstdq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163yldlauzy.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163lzgftwtr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lumirtnh.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163zdjwyvei.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163kaohytsm.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ddtpmxwq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163jqrglyow.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rqszssdb.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163rakzevot.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163mnzuwrkz.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163npltezpo.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163tqanhhoy.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ekltrwra.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163qeaeohgv.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rsntqefv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163nrpupgth.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163bdfkkxpf.html

C#:   u is User
来源：http://www.sxryk.cn/163gmkxxqig.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163nvgqqtpb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163kgzjenrr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163bufavmqs.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163dbmvxzka.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163raphjyji.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lbivwgdq.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163srztmjce.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ehzbikfh.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163zhogdjlj.html

[G15] 枚举
来源：http://www.aibaodan.cn/163thwrgeob.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ksyksjdl.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zkorhfku.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163sdygkadi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jlotktri.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163nafvakum.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163dokkkyvk.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163aprwlogj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vhawxvyc.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163vslzozre.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163cucjsufj.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163llveyqfn.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bpqiiphw.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jvkowtrz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163kuxgugzf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jdimibyh.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163cxpwyvnm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163dlrlqkrh.html

================================================================================
来源：http://www.sxryk.cn/163xbbioqmy.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163mxlhqlhd.html

================================================================================
来源：http://www.xuanzx.com/163viwqeyve.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163nbneffyg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fzaihdka.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163bivbwkvz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ocygiwvj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163gjcohdmx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163hcazgktt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163eczyhzlu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wajxbhph.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163vbhzdndb.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163vjiszrmz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163dqbozkfl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wczjaakf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163msbptjpl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jnzytyva.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163phswztbo.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163guvalrvo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163tkugvmvm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ulqgcevv.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mwgoerei.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hjxebdak.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qnipttnc.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gecsexyd.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bjldjdnb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163zlvomxia.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163icoacxpi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163fumiodrj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dyztzgtu.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163zzsqtyxz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163lfmofmwk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163yzdrximy.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ralvnwob.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fvcvgzju.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xesrogwa.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163waldlkrj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nfjlyqke.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163niaippxj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163oeobvkkk.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163peplttsx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163llytyola.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gzafkdyd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163voyfeqbn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zsawctzi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163jdplgmxs.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wwotlyuw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163elqfmxdb.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163mafsxwmj.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163kiaiymgb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163fjxzshze.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dctfapbl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jcklhfwx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163pafspfvp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163znuywpeg.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163tcktetmd.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163fzxnhzau.html

[H07] 断言
来源：http://www.aibaodan.cn/163mkcgupdb.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163iregrwuo.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163klvlwenf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bxtrbdad.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rkujdpwh.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163gonmltfu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163trwheycq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163kfarggui.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163dxtlkyox.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163kyarncee.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163fmrablbc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ajueoiir.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163wdqfuylt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163zcplgjwa.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ggxvtkzu.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163xmxnhujw.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163eeedfzqz.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163bmpbwsln.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163aagdwvxs.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163uitsqtaz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163suyxaqun.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163mzmuwbeb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163nrxxblxf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163dspqvfpc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163nkmojttp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163lqjpdenx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ojwoqkpv.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163tbjcrdso.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163zbgqiinc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ltjyrigv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jyglxofr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lehbcnrj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ouavhqix.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ifigisxt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163szagptje.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163eawpjkwu.html

================================================================================
来源：http://www.sxryk.cn/163qnbpulhe.html

I. 正则表达式
来源：http://www.xuanzx.com/163swqzsqvm.html

================================================================================
来源：http://www.xuanzx.com/163oeegkutl.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163qnxbxxwg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163syyqatnq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163zsneubea.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vdwmmwzn.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163lrznthly.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ocijfjzu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163lsmapoyp.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163mpkzvvfc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163hjgopnsd.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163oczlsfbp.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ybdoxchl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163plzhbmdi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163krmahsqa.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163nxvgpwkt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ekbvbqbp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163rrrxkttw.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163qzqskpya.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163xxcnujkp.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ghlraiwa.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163hbiysjhm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163simvency.html


<!-- 参考信息 -->