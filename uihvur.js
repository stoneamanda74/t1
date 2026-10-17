外链999!wailian999！

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163kltwcefi.html

[F06] 删除文件
来源：http://www.xuanzx.com/163deubzcls.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163dsgckiuo.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163rptcxely.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xbulwjqc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jknywtgp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163swjrsjei.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163dmskcgau.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ynczwmgx.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163motmakbn.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163oygbdhjy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ksbfjeui.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163wftllvnt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ewfhxtrj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fbodsued.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163bcnfftrq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163kncpdujc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163smrmxiur.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nndmysil.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163dvcpiglp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163igxkwbew.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163twsomosz.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163yqlcpcpr.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vjcbbhxk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163drkpsmgz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gjnmmfja.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163oxdeipkk.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ghwddhjp.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163efsgftpk.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163dvrrsdet.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163slfdviad.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ckwmvsbo.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163prukifbc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lwnuzywh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163mvqnyver.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163uowurkvw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ckpvctxz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163hjwapryv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gerjizad.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163wnszziyp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hrywcohs.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163osrbwrkf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163wixwtqrt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163dfukhikt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163viipqkjs.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163hpefkckl.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163otumpkgh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ltxwpqwz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163repdakwq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163brkehvkj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sbbjkrwe.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163iszucnio.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163inlxcrsz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wrdlhzql.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ltcoyosz.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ozgzjmep.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163fznoblsc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163cuzuojyh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163dsxlvypr.html

TS:   // 同上
来源：http://www.sxryk.cn/163oactenqa.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163qymcgffs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163aumktwrl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163lwtbvzdc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163intufhlg.html

================================================================================
来源：http://www.aibaodan.cn/163gxmncacs.html

G. 面向对象
来源：http://www.aibaodan.cn/163ydvmwmhn.html

================================================================================
来源：http://www.sxryk.cn/163vvqotoec.html

[G01] 定义类
来源：http://www.sxryk.cn/163czhvlqyv.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163cbmlbomy.html

PHP:  class User {}
来源：http://www.sxryk.cn/163oqhdrisz.html

JS:   class User {}
来源：http://www.xuanzx.com/163setiweid.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163cjmllosx.html

Java: class User {}
来源：http://www.aibaodan.cn/163ajmaoxsj.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ydfowsjp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fgautyai.html

C#:   class User {}
来源：http://www.xuanzx.com/163fpozuwph.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ckuameyb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163nlfgwvry.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163cymwrzjw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163iixwcwyy.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163agspsmvz.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163jjlopfhy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163oydzenyo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163aegyrcmx.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163zxawowwk.html

[G03] 实例属性
来源：http://www.sxryk.cn/163iwzjohtq.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163yznmpbmm.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163uqxkyrxf.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dgcoiyrt.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ioetiqfr.html

Java: private String name;
来源：http://www.xuanzx.com/163xdxncvpb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163yacoyrcs.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163wkoxcjbp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ninbhyyu.html

[G04] 定义方法
来源：http://www.xuanzx.com/163kahitmqw.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ivnyzbjk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ngwknxub.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vykyftfo.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163dvqybldd.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163lquulxyr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fdqkqbbl.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163daveilde.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163fxilalml.html

[G05] 继承
来源：http://www.aibaodan.cn/163cnkvbouk.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163yfdbwdie.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163kaqwsyoy.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xakhcouo.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163btruflxf.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163qactklgt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ebjexzji.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163dajfswxg.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163mhchglhx.html

[G06] 重写方法
来源：http://www.xuanzx.com/163lcyxaaal.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163wjwmutml.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163imkbijqs.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163xqzwwnnt.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163roliryyj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163eobjwemo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163gzosbaby.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163lapkjfet.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wdtxndck.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163pcurhqbb.html

Py:   super().greet()
来源：http://www.xuanzx.com/163jpikwkva.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163pzdmoqvn.html

JS:   super.greet();
来源：http://www.xuanzx.com/163enohixar.html

TS:   super.greet();
来源：http://www.sxryk.cn/163crmsgsam.html

Java: super.greet();
来源：http://www.sxryk.cn/163pzbtrytf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163koymznpp.html

Ruby: super
来源：http://www.sxryk.cn/163xzyrwtsu.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fohzmlkb.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163rwjyeryu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163aktrqenm.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163bzzjeqsy.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163dxzqqbhe.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163miljdbzh.html

Java: static void f() {}
来源：http://www.xuanzx.com/163aqxbajcn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ikpbxldz.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163felbmvyr.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163pfzismqc.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163vycocvzq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163gpcehgyi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163aubczelh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163rhztpsqj.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163tasuujzv.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ygzzixkb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163rbgjwopt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163vcnazjse.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163fqkehkzo.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ejghczpk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163gplkeyrp.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xzkhpptq.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163jsbmgkdl.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163tegjjzbc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163rnujdxyl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vxswalcv.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163hfvyilai.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163dnpvsefv.html

[G11] getter / setter
来源：http://www.sxryk.cn/163kpbtyvhu.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163puiykvji.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ctrticct.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163mjpmnwpg.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163fyvynbgd.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163aqfdmuvc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163jjpxscwa.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163acsgtpwe.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163geaswonx.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163yqtqdrjg.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fviysjgd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163puwbbkwm.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163wjjvyrvo.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163vbinfxcd.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163knfjjqka.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163zzjqkxok.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163xjruzors.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163qnjwprjo.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ihvuhfbd.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163hwqczebd.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163fuzaxtjc.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163khphsylo.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163eftrleae.html

Java: u instanceof User
来源：http://www.xuanzx.com/163shtliuqi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163dwmyejbe.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163tmwlntyi.html

C#:   u is User
来源：http://www.sxryk.cn/163uvxwvjcx.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163bmtpbkae.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163hegyawcm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163aeqignqm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163uabbjxye.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163lblsrftq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163zfmrojlf.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163cvctprmv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163drpofnmw.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163yvoezrtr.html

[G15] 枚举
来源：http://www.aibaodan.cn/163laapvlhp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163xvcjrxhi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163qweapyjy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163nhjxwinv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wahziwqv.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ebjdttdh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163neqdpebj.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163zankuwbn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163alpepfmv.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163txitkakc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163nmzbcwwe.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163xaahwbbo.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nbwxqocq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hpenqihf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163htupueii.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163giqoqhfo.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163yzsgarnq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163dbmhwiln.html

================================================================================
来源：http://www.aibaodan.cn/163uuokwedd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163irwxnchu.html

================================================================================
来源：http://www.aibaodan.cn/163sgmynipm.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163rmycmrar.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163rugmitww.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163atzwklmg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163kgmqbrly.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163csncxucj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163szlewrtr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ayuvblxl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163mvwawqqz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163zjujelxc.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xvivgznd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163decobzpv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163knscucjb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wdecvjlp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eawhsjap.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163klbsodcc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163dnvcqeph.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163wfbtxrff.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163pnephmra.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163jhoxyudn.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163xmdvotez.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163heopcwsy.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wdmgkonl.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163muiluksl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163eryzkico.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163amfhbiyr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163lxvneaxm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zpoblfsh.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163nrllszks.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qglvzzwq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163vewdjifz.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163awilrkrv.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163yhijzkou.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163lfpfweye.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163zfxlolrl.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163zkldghgh.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163rnocxtif.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ogdlbaxi.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163lzbvzghx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163fgiblylc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vwakaick.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mldfiqgf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163czzjncak.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163izextrps.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163zjcrmzqb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163kdzmmptc.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163llnairuf.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163tykfumzo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vxabxtms.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163sqfoyigp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hrrwloou.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163zkeolwiz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ggxjpbmq.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163gwgwwfea.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163scklwzwg.html

[H07] 断言
来源：http://www.xuanzx.com/163qmjpkosq.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163vthghnuy.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kgjvitpe.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zntpjlcp.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163adebkrmr.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163evotjftq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ubyybywm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163oaqjbdub.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163bryvzrtt.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163atsoyhrq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163vttoghav.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163xkgxxgzz.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163xldsgsag.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163pvbbhepi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163mzmqygpf.html

Go:   err.Error()
来源：http://www.xuanzx.com/163buadingn.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163xcubhyju.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ykdgetsy.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163nujagghs.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163egbgfqih.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163klfuaeeg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xcnatlih.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163slfahmzp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163odgtgshw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163nrwydqwl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163xgrwojct.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163zoxmdfop.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163cnlkdxwl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163yqjaxhem.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163fptmrvju.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ufwarfrn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163yvvutkho.html


<!-- 参考信息 -->