外链999!wailian999！

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163epmgklcf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163anmftmzs.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kjffnjwe.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ljwvmubi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163fasaabnz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163darxrukx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163wvfewugh.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163xlpahdyf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163chycwjpl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163dyedggjk.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mcmiwfby.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nnjulhjj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mqwssawo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qodhkmvx.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163oihkvhsr.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ylsgxkbn.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163bpycdcyu.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163zmhlfkym.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163sibvegke.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uswrkdob.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163yqvwiymj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lwpsxwgu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163qhrxzfxa.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163soivuszg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163mnveqkzq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163hauqxnau.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163sszgyqvb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163zsqqfrff.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163azyrljxn.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163dkpfgasw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163inselgfo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163gguiqyqu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163knbwhbxt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163brltzrcz.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ifkxbwoi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vaqirgky.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163hfpbenio.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yjebtyie.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163priorews.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163jiufzzpk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qkqrpggw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163omftqeoq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163tarznbem.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163eefxsmdq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163fqtmuedr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163egnjqdzo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163iseitkkd.html

TS:   // 同上
来源：http://www.aibaodan.cn/163gctsdjhh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163wduukrds.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163rdboideb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163nhbfdfjz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qpxsahfq.html

================================================================================
来源：http://www.xuanzx.com/163jzkecqqs.html

G. 面向对象
来源：http://www.aibaodan.cn/163tkqtdylp.html

================================================================================
来源：http://www.sxryk.cn/163dlnqbcle.html

[G01] 定义类
来源：http://www.sxryk.cn/163lubdqvoc.html

Py:   class User: pass
来源：http://www.xuanzx.com/163oshmiqwp.html

PHP:  class User {}
来源：http://www.sxryk.cn/163urulkymq.html

JS:   class User {}
来源：http://www.xuanzx.com/163pstqqxrz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163cjnohwkf.html

Java: class User {}
来源：http://www.sxryk.cn/163fzupuhtt.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163urfebbln.html

Ruby: class User; end
来源：http://www.sxryk.cn/163mtajjsfz.html

C#:   class User {}
来源：http://www.aibaodan.cn/163xqwftbmt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163beldpgbe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ikulumiu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163zruaufsa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ycpblcpf.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ywinibgi.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163lhhweevf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163irbekhoi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163bnqgilgj.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163hjnhgwke.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163cztiyogz.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163qlwhxswo.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163rwcrooqi.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163rzafgaal.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163udzabmnc.html

Java: private String name;
来源：http://www.aibaodan.cn/163mmxqirkb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163alyvekdm.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163hvpyxehr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163bodxiqvw.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jqdsozyf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163aotbvyxm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kgbdwrwp.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163wdxjnepu.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163kacapiha.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163qouixntk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163kuxdbjuv.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jhptmavt.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163chkjfoff.html

[G05] 继承
来源：http://www.sxryk.cn/163ikfbbmfs.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ygmwkasw.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ktydpuij.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zpnqqzzo.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163jhlsrjxi.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163dklnwist.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163snzxgszl.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163wcpkkovx.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163rfbgedhd.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163bsqyboft.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163wdoeahks.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163cexgowud.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163lzkoibwu.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163cxwiihbf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163vvmgxeyx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163plyksytv.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163pjjwpxls.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163gchfxprc.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163rssjkiom.html

Py:   super().greet()
来源：http://www.xuanzx.com/163iefcobyo.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163xgadxxsf.html

JS:   super.greet();
来源：http://www.xuanzx.com/163vohwmclh.html

TS:   super.greet();
来源：http://www.sxryk.cn/163lpcbzlii.html

Java: super.greet();
来源：http://www.xuanzx.com/163fyenppqp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163stmgwzie.html

Ruby: super
来源：http://www.sxryk.cn/163iezxybcb.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163etancexq.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163tlqebgtf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tsdymesb.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163qmbgebsg.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163fkvizrrt.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163kmtnectp.html

Java: static void f() {}
来源：http://www.xuanzx.com/163gulnmmpm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163idkwfmxl.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163kxnfpvgu.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163brrmokwd.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163idojdtug.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ufuodhlb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163qbxvedhh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163brbgnodo.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163kzconcyx.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ycjmqrrm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163bnursepi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163fsgyttui.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163epnqtxgi.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ypoyoiob.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ijebivca.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163aollrcwf.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163jpqmryad.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163kmwxckpm.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163blorwrlz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vaspixns.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163diwhobqv.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163lntsgszi.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163wygrmbxa.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163hzcbwavo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163pvzffwwr.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163iymjaukx.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163jxsxodse.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163nrxivxgc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163hfawsayp.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163uxbxwxsh.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163yuoebnwc.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163opmwqlbo.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163bwwbbgfk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163salqejvn.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163owilpjzi.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163svemiuna.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163mrcbrymk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ochfhgxb.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163xjeihufo.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163sdyqdafs.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163dzgrztsq.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163zaclapwz.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ziwrvrmh.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163bzaostkm.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163wvhcgwlm.html

Java: u instanceof User
来源：http://www.xuanzx.com/163zyklshzr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163sdcpdpug.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163rdlpzfcq.html

C#:   u is User
来源：http://www.sxryk.cn/163brohrygi.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ydfkxnir.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163pskbmzko.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163qhudwwhy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163feqjthpa.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163twjoexhm.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163crlxzywj.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vagggesk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ivfnrxlv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163plimwgpk.html

[G15] 枚举
来源：http://www.xuanzx.com/163dppzgfip.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163kjggygbd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163lrfuuqkb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163cqhdbngw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xsbnzgik.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163utpnhplr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163zsbqrfpl.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163xxzdzcxq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kohreamr.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163nrddggei.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163fkbwiutz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163zauhnjrn.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hbimbtbg.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rprfntlp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ijkrwtpm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163cymyhzra.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ipcipmbo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163dqhvlagr.html

================================================================================
来源：http://www.xuanzx.com/163wjedjfgv.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163urnnuymz.html

================================================================================
来源：http://www.xuanzx.com/163gvulrelx.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163kidasjrj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163rmoadvov.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163hprmqywe.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wigqrlfs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163vfbfderm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163idmmzsrr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ceuaosow.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163yxnoskpr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163yyoxfjut.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163ieeaeghp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163yupamqgp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lyqiinia.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bfvcmsfe.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163irsghnrm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uhtmhjjm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163hswzzlur.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163qzsmmntt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163mdeicqam.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xwakfdmd.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163pfbiqtur.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163gdqidyof.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jipmapbz.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mtgggyom.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163xjqpkhnv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163vysqlvda.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163lqqniana.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163rklawoyy.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163shtmujaz.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163iinegdla.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163vmyultbs.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xtyuuvec.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bxbnmaxs.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ynftrtxx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163evqnjvvn.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163jnksuxul.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163igyarkqg.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163rmmcnfio.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163yjmfcewf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163onazglve.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hdlkgqdu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163yeriyapv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163lvgzifpt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163yojjpfdo.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163cpdrhesl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ogczwdmf.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163vqtowpyt.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163sogyohtk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163mfzfpwts.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163snlqmubl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zfwfimhm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163hwbhrbby.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163szrqemjd.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163whqlamtz.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163yaczeyhh.html

[H07] 断言
来源：http://www.sxryk.cn/163gtllxioj.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163pnmhahfb.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ajdpgmfg.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jiazhjdd.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lozlwvyn.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fhlmjboh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163yqprvgrq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163knmswjpf.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163uozyayvw.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lusagojs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163wajqisyx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163dwmttcit.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163lptsyqmm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163xethzpbj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163jwctktgn.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163lnhgszgu.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163rcyakzrl.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163wupohqxj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163kngilfyr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163zdrdqyfd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163daasqaid.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163vaugbuoj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163jxhnycpj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163htnbbyxn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163scrlnjow.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163pyssrihr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163gsmwvrhw.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ttnsyjbn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163tgendzos.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163wqmvibou.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vtnmsqrt.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qkypdtfi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163szzxdroc.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163wheowgle.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ljamrdqb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163lzmridva.html

================================================================================
来源：http://www.aibaodan.cn/163wmgmwwkv.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ohexrpbf.html

================================================================================
来源：http://www.aibaodan.cn/163soozjvuw.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163hqzzwfbq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163kcddafje.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163aaoeyrnk.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ipqlkumh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ysydwocf.html


<!-- 参考信息 -->