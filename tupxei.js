外链999!wailian999！

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rfzmtkne.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163neemqomu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rlbxlfuq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163hglkdqhq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jsqqkton.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163evvfpwzv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163cdgmqwfg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163emknqtgp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jdmhvbon.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163mmgzmxrp.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163jyusihzo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jfuszctx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163yclvbxcd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cxqcqrzx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nigwcugx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ojhmsjjg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163pphvpmaj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ngrrptsc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163jnemmjvy.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163opleuoez.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163qhfzxkjs.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163rgmnqett.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163hmbjychw.html

TS:   // 同上
来源：http://www.aibaodan.cn/163isedjnqd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hlvcnxsy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ptcqmcer.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163wenxeqte.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nuzpglav.html

================================================================================
来源：http://www.aibaodan.cn/163pqegsbnv.html

G. 面向对象
来源：http://www.aibaodan.cn/163hyskxxxy.html

================================================================================
来源：http://www.sxryk.cn/163rkqqcvhu.html

[G01] 定义类
来源：http://www.xuanzx.com/163tugjdwqx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163mwjqvble.html

PHP:  class User {}
来源：http://www.sxryk.cn/163cvixfxvt.html

JS:   class User {}
来源：http://www.xuanzx.com/163hipskoro.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163zsqsqkaz.html

Java: class User {}
来源：http://www.aibaodan.cn/163ulbcfddp.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163hwyygwwp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163vuczmldh.html

C#:   class User {}
来源：http://www.aibaodan.cn/163pqfrhnsq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ibxiikaw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163adyuqvkc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163oamcotsy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163itgfwmar.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163qkhboxxx.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163anxzxrwk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163nnbnkamo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163hianaljt.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163vkdnslfx.html

[G03] 实例属性
来源：http://www.xuanzx.com/163uycuclmj.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163eadyiopn.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163fsphdssn.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163xmgwoily.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163gyrnodsg.html

Java: private String name;
来源：http://www.xuanzx.com/163slslrfdn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163stwlbdkx.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163wpehypww.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163fmgevqpr.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163wjhhamzk.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163qryquxue.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163snduvhid.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xjfqvqfi.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163dbuxfbjo.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163yrdzjfth.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163mxkcukiy.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163iildacvv.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163xfhzlvwk.html

[G05] 继承
来源：http://www.aibaodan.cn/163kmyxrqof.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163irekkxbd.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163kkyiktlv.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uymqtqwn.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163deqsdtzz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163obkybexl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ltovldqi.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163aovugyeo.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163johuyryn.html

[G06] 重写方法
来源：http://www.xuanzx.com/163peukecoj.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163kzlgqylg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163iabripmu.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lxwpnvsr.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rquqmpso.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wypepqwp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163jchfkxem.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ctayohor.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163dljppcwm.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163goslwvye.html

Py:   super().greet()
来源：http://www.xuanzx.com/163vdbuihey.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163kcmozlcg.html

JS:   super.greet();
来源：http://www.sxryk.cn/163lupzpoaq.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dmnuccrs.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ksrnyflf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163bhifdscp.html

Ruby: super
来源：http://www.sxryk.cn/163zsbdghgu.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ycqgfvvu.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wfphubqd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163mwrxuijg.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163lkkfearq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ayjvdnot.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163yobyocuy.html

Java: static void f() {}
来源：http://www.sxryk.cn/163fijunvsh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163vqxghowt.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bwcigkqh.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163wptogiuu.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163lstetxrg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ogkxgblm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163uwttkxtb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163jbddwwlq.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163sdxboibd.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163zkegziqw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163mqfjrsch.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163mxtelpor.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163tsoitdol.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lzntseeo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jamfrfad.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163tqlgdorh.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163nhkarjwo.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163exebkfwc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163eeuhgsux.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163uwqcalyw.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163slttanhu.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163pbzjulre.html

[G11] getter / setter
来源：http://www.xuanzx.com/163zbhmibfl.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ittimnyp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vnaeuiaf.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163mhpqdkxi.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163oheupyel.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163anuzplwu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163zlhgvxwf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163spxdrbpa.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ibwsbcgo.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163xcozrksg.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163szffoemc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ftxyedcz.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163pzvpsumk.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ypcjrghk.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163dkvpucmz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163rfeqoyaw.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163tverpnwm.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163kznpozsx.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163syqvnovm.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163yzbpoilg.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163pvsqnhcp.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163mhtzrfls.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163upmwtjzy.html

Java: u instanceof User
来源：http://www.xuanzx.com/163fzrjxyfe.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163tsmjmrlu.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163opjmzwst.html

C#:   u is User
来源：http://www.xuanzx.com/163fxknwbwh.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163szlfdqwx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163vuptmqun.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163entjscpq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163hecayczo.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163cyktpgnq.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163hlxldayw.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ijopmdun.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163oispacwp.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163fmehscbq.html

[G15] 枚举
来源：http://www.aibaodan.cn/163rusqagfc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163kxmmkfmf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163njjwvghx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163aeabxdng.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rlcnwshj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163oijgjpah.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163yfcwjahy.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163yinsucpq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fhtfsgqg.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163glbdavmv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163qwdsdjnc.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163lhyfgfme.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163nlsmilto.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163kxcetuzv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163elutsxmk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163smtzarsy.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163rqnzizst.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163rvmlbnre.html

================================================================================
来源：http://www.xuanzx.com/163zskrcbki.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ubrmjade.html

================================================================================
来源：http://www.xuanzx.com/163vqidxdba.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163zynknasr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163gwzuwgsl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163rfpiqdfx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jrkxfgom.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163nxnauzse.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163bnzrphut.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ecsjijai.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163mtvjqoyu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xghiedwc.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163foadvzkq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163judrqvxt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gpwgbltp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yuuvppen.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fknnvmul.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163thrnyxwo.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ammgjbvh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163puvgowss.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163hxwovwau.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zhrloucz.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163uyeexizj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163onredpjl.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mhuduvmp.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jggcohnq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ojgcajqu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163vmvoxlky.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163pbthojnk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dgsvkyfg.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163bpvtsqaz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163tiqscjdc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kzoovesr.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dpwevkpd.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163drdvfiem.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ebnqmwqm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bbbtrrrh.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163alcliybq.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163xildrsdd.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ajidyxsa.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163iwxnhqib.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163wsnydabj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163exfnbybn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qwgdyaaf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163dbcukwnq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163czwkmjnh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163vbnfyxdy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163vwsyhqvc.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163aylxffla.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jocgbntm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163zrzyxxdw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fmbgkvtz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163chrseyhn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163lwwfkboi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163tkxtcgyn.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ugqvdreq.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163elbgaqwq.html

[H07] 断言
来源：http://www.xuanzx.com/163ypnutoul.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163kykrobwj.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163fqscmbgp.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163bxxmhenp.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vdbaoawv.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163mhiolhkl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163srqwahms.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163wkjoebsw.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163qjucrred.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163lvnplull.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163djtacfdx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163myyigrlv.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163uhvunjwy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163blinugja.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163fekyccuo.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163svxnayat.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163jwezgprw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163nhphdcof.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163zizqkyyn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163zcpqegsj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163qytuvohb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ysirbtlv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163vsgqgbsy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163cegmhjag.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163boxpcpai.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163awzanucc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163zcbbvmrc.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163itmonpln.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163cfkpypmm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163idqdbibl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163oflogher.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163giyaxdiw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xqkbygaa.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163zglecwlx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163hosohbqp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163zsrrspwn.html

================================================================================
来源：http://www.aibaodan.cn/163wsogfect.html

I. 正则表达式
来源：http://www.sxryk.cn/163tlzhxvto.html

================================================================================
来源：http://www.xuanzx.com/163qdysfezh.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163crpbygjc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ttehpyfb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163bwgauubc.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163msisdmqb.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163csriemza.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ytkarihw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163arberher.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163odctywaa.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163yyggscgp.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ltuddnft.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163coetomma.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163fvkrlpgk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163bmhmwaia.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163bmbwgcgd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163tuzyeyfq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163xukqprtf.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163hxmleowb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163lepywqbi.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163iyozgkpv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163fquxpmpg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ctgjpawc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163giloblcz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163rjamxwoz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163zdznlude.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163gihbttef.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163wirbpmly.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163mvvbawkk.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163nfyawwtj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163gcuzatxt.html


<!-- 参考信息 -->