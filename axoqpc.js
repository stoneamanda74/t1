外链999!wailian999！

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163fmxtvyks.html

[F06] 删除文件
来源：http://www.sxryk.cn/163okesgtmj.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163qauxmgsz.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163cgvxcvok.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lnyrfmqn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ntozssvr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mgcyaxeo.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163xxpyhojq.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163fdfbawug.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163sezlcoli.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163gczirwhw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163gjuagrge.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163pbezcbrz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163iymdzcrb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163teseulxh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163qmymbrhs.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hxvkwgrv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163hqowyjxi.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163edjwavlq.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163cblktlfd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vdbpwmeq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163czdwaclp.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163owmoxjkt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yzefxxiw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163djqdhifl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163fwwqkpur.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163jzqesxtt.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163mxcfzgcm.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163uugjgpyb.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163hpqedkre.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163nekmcvdx.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rzrsulcz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qmlqnnrh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163knjhlbgf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ohswfsfu.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163caegkokj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163skilnaul.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163diabulcq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dxbdeydc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163gohitewp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hxrxryoi.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163qtcylgvu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163dnexhycw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163jgjeofxa.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yxhvaktp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163qqhbwoca.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163thdalnop.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hnfggkaj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163iqhorikl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tapngzlv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tgblvstn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163dryksyxh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ygpeqqrp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lrkqtame.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163lhtqzyxx.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163sdpfvdjm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163hvvdpmeh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163velbwdjw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163fluvdabd.html

TS:   // 同上
来源：http://www.aibaodan.cn/163nekstqbv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xytqocto.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163caemyyzi.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qttofcbg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163pgfjazmo.html

================================================================================
来源：http://www.aibaodan.cn/163amrjkoiw.html

G. 面向对象
来源：http://www.sxryk.cn/163qjjrdoeb.html

================================================================================
来源：http://www.aibaodan.cn/163esykinle.html

[G01] 定义类
来源：http://www.aibaodan.cn/163plomqexj.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163kqglyany.html

PHP:  class User {}
来源：http://www.xuanzx.com/163gavgydbw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163egkvbcte.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163wscjpvmm.html

Java: class User {}
来源：http://www.sxryk.cn/163yysrdsfo.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163rvoimlzz.html

Ruby: class User; end
来源：http://www.sxryk.cn/163obpignji.html

C#:   class User {}
来源：http://www.sxryk.cn/163uvyvpkqe.html

[G02] 构造函数
来源：http://www.sxryk.cn/163azrehkee.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163hebmfmub.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163jkwrdpug.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163tfjeytzj.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ptmyoijg.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zdxbmhsf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163qpprolio.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163yeaoomef.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163nvruxjpt.html

[G03] 实例属性
来源：http://www.sxryk.cn/163tgrbtmpk.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ctdkzecc.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hiouijqe.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163jjmtjrbz.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163thhnjhlu.html

Java: private String name;
来源：http://www.xuanzx.com/163fkrpbctu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163mlaiiydn.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163fqlzjoay.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163lhktwmzn.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163utzqynbt.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163nlitfccf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163rojxitzp.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163xykiimta.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163hvuhmhst.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ychpqvdu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163tuuolyxw.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163itggdthq.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163rmmoarwg.html

[G05] 继承
来源：http://www.xuanzx.com/163qojsuppi.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163vqnqqxbt.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163levwxnrv.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pakgwqou.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163antrcyrh.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163dxhirvhz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163nnndxwta.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163cqrsxata.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163pkqzuizt.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163nxhrnyox.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163dtoepwia.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163elwthjeg.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163jjsjidwx.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163buecsyod.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163gihzyiao.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163rjsrbini.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163uaxlzhmm.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163mfsurxyh.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163spjdnguu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163swwhnsmb.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163bjrcqgmb.html

JS:   super.greet();
来源：http://www.xuanzx.com/163nraihumy.html

TS:   super.greet();
来源：http://www.xuanzx.com/163zsnotqhc.html

Java: super.greet();
来源：http://www.xuanzx.com/163vtenmgku.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163pdtjmzco.html

Ruby: super
来源：http://www.xuanzx.com/163rbntaiof.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163pvrmhxia.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ifzymmnl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163pqbpkzfh.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163trhedlem.html

JS:   static f() {}
来源：http://www.xuanzx.com/163jkslvuqj.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nxcxeqbt.html

Java: static void f() {}
来源：http://www.xuanzx.com/163sziwpiof.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163acjkizfd.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ihqianow.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163yakxqsez.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163wytgrkxk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163pdsjlipk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163dvjaqxfv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163kvwpmaco.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163fnwjmjwm.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ccaigqer.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163mgazymim.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163jgqavgrb.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163keetbnli.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163knzbfxaq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wvacvebk.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163uopnbdrt.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163umscbash.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163tuebsvkh.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163igyftymb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163sjczibue.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163acyamxsr.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163nwnttmhj.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tqsnllti.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163iiwujorb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jabsfdmb.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163epkeziip.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ycvhtbfq.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ojnbskxw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163aflvmjmx.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163lxcrmnah.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ovkmjtrd.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163kekzscfb.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163afkjiygl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163msvotzjt.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ywopnqec.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163lrdmecsd.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163bsydvwhh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163cidptvny.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163yxfdldcl.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163eheowjcq.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163vijbpxkj.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163cwzxlqaf.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163putvctmj.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163xvmtdrfy.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163usauorpq.html

Java: u instanceof User
来源：http://www.xuanzx.com/163hawaqtlj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163gsjduspt.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163gjlchutl.html

C#:   u is User
来源：http://www.aibaodan.cn/163mezsosrh.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163awxbwhtf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163fdzxuzph.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163bipeudrn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163riwmjwvu.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pygvlpak.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163drdgirta.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163bxzgzzcw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163lgdaisbf.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163pgdplyyh.html

[G15] 枚举
来源：http://www.sxryk.cn/163stwymccj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163zutymiif.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163sejlwngm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163pmawbtpi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163syeongcr.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163esfpuiyc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163eruxnimn.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163fmmqqfrh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xvftuhan.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163uuxaxmbu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163nkcujkpm.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163mdvtdtwy.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163yydrvsnd.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163diyxnbqf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ilxpwgcb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163hovvsnyp.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xqqjyoqp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163irfgbkdz.html

================================================================================
来源：http://www.sxryk.cn/163daaazbfu.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163akpnzkgm.html

================================================================================
来源：http://www.sxryk.cn/163pwrnsusw.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mrsctlzk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ndxtmexz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163izvpwage.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163bdcerxsg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163slohwwpf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163asdpfpav.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ruojyruq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163psykuaxr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163nqhyaynf.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163cxtenrfs.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163scngcivb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rjrxiyee.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kfwmovgj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163onfyoggz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tsxygirq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163pcjuxjce.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ymducmlz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163gbnioltw.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vefomaor.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163moqilsrv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xpoemoif.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dzxdghhr.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rhpghmad.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mdwsudoa.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163tesolmer.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163stcxhtth.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bwchchtp.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163tatxodxs.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qrkqehiz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163voihrtud.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163rxxrhkww.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ybjbotrc.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163sbkvhnxx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163blvnscgz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163tyswloxs.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xsucciaj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163tpleyhkr.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163zhypmqvk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163auspzixy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jqdoygds.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ptzbvafw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163dfyxawic.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163jjuctapz.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ogkfrlkv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163jliivkcw.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xypqxdln.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163vmfjsgqk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163wbxwgzqr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hfyzqcgr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dbvmqumk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163fuarmtrj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163xcmletje.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163zqbgpinq.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163smkllcfo.html

[H07] 断言
来源：http://www.xuanzx.com/163bntdmjme.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163utoejeee.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163xjswnjqg.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kfvuegzl.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gfcuenry.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163hzblpsql.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163nvydjxri.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163dwearxxi.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163efgxakmj.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163jrggsrzt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163vnczcmwp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163yghidqeu.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163npqhrxcq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163hthcvqoz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163fvoobyha.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ugcboykl.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163rrkznsjr.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163peferqxd.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163adoyorju.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ujfsgrgz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163nkewmnds.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163jxcwsuvt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163evjsffmx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163luoiuwot.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163fowncwzd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163bdogxuud.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163tfjkbwfp.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163qpqmsbsa.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ihhiadln.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163cevgghbb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163odiwtzil.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ihvhkwfa.html


<!-- 参考信息 -->