外链999!wailian999！

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163rwwaswwp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xbfyozur.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163sqolvknm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163awmnnste.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163xwxpedwz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163drfdrqwp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163hngzkgea.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163qtduaehg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163kmifbdfa.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163yaywihuz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163lrsqgjwk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vlszhbtq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163octjnbxc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ocozduvb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ahfajhdf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163azudxlub.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ezannqqw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163iwmmxoef.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163fgnolate.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vxxvwcbk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163owovoqxm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gtbrlxdx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163wdzorfjf.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qoapxlot.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163gwtymjzz.html

[F06] 删除文件
来源：http://www.xuanzx.com/163eomyzdnh.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163rvgzeswq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163euaffkye.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163uxqmavfz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wmeujhfw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pwwfplko.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163cupedayg.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163patylmsw.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163kuafppjx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163zuibnyyc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163lwqbqlfd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163prualrwd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bguqyncs.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zsdsokye.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163vcvlbbtq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163pyluxqbc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163sgyequlp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163jolgokmq.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163pybejxki.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163seraukqy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163wotahsri.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jrtbpkyu.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tzyrwvwi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163frbikunc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163bmztnsem.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163bwenygxp.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163cguyvgyg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163lgkprmrd.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163wvkahmed.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163origgfzn.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163sntzidnj.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163obtrorxz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ibyrmlsb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163kxjlhrue.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ztydxlau.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163jhstrmnj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163hukzxrks.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bypagrje.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163cflfmnop.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ahqnavni.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163asrvcnuc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163xfocjboo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163srivxkqz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163knshcvnv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163mhzpncji.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163nzejnfbb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bvalriki.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163pjdriuwp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bkfbvrqh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mbzajqxy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163rbrsemoc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163fvhmrwxt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pvbvmofw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qyqajehr.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jttcyzqd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163wmcapycb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163cjaghpqm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163bqifnecb.html

TS:   // 同上
来源：http://www.sxryk.cn/163mrobkwqm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163shygnuik.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163pqdbozce.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163kpzgzekn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ewmokpix.html

================================================================================
来源：http://www.xuanzx.com/163aakqvdyn.html

G. 面向对象
来源：http://www.sxryk.cn/163fznyjtrh.html

================================================================================
来源：http://www.xuanzx.com/163vygepibb.html

[G01] 定义类
来源：http://www.xuanzx.com/163uypidxed.html

Py:   class User: pass
来源：http://www.sxryk.cn/163zioaqxlf.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163njzkxsfy.html

JS:   class User {}
来源：http://www.sxryk.cn/163pezkpcbm.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163bgxmsvli.html

Java: class User {}
来源：http://www.sxryk.cn/163pbckbqfz.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163djkirbkp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163nxdkllme.html

C#:   class User {}
来源：http://www.xuanzx.com/163vuerbceg.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163fvlmujcn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163mctvzljs.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163hgraipnk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163jocawelw.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163rjdjflgh.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ojclncbf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163jyhrqlbh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ufktghad.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163fqudgfvi.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163zgjaprvj.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163msmiwnhd.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163rxwrlynd.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163xgajhtns.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163emowyuud.html

Java: private String name;
来源：http://www.aibaodan.cn/163uermzbdh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163gvvslrnm.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163dwxlovvj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163feqohwzt.html

[G04] 定义方法
来源：http://www.xuanzx.com/163dancjguz.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163gkuzpbai.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ipgefpic.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163xhcfuwbh.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163qdwwqrzs.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ijqxsooa.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163vfnfonfl.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163niyqfevp.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qyedblgi.html

[G05] 继承
来源：http://www.sxryk.cn/163fdtgvetb.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163skanmxbh.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163vhslhinp.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xsyfcgwi.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163enscprsa.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163eyvqyxpt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163sucylqdr.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163eysaeazq.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163eifhjkhi.html

[G06] 重写方法
来源：http://www.sxryk.cn/163kawkppth.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163rdxtdkqn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tmrgwics.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163rogcssyd.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163snzlbulm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163qfwsmxpu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ymtbjmas.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163mfvpaevr.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163vriwcnse.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163spklffpt.html

Py:   super().greet()
来源：http://www.xuanzx.com/163wvvnukdb.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163fwusalxj.html

JS:   super.greet();
来源：http://www.xuanzx.com/163eadkljav.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163tilfiqil.html

Java: super.greet();
来源：http://www.xuanzx.com/163dlvpnfkq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163qviujwmt.html

Ruby: super
来源：http://www.sxryk.cn/163ynffguuu.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163fvnlyjls.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163kxsxwzae.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ivygfdtr.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163pnauobkv.html

JS:   static f() {}
来源：http://www.sxryk.cn/163tpvkmigy.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163jcvgatkf.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qikgbujq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163wsuwxwry.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163qhcoaoea.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163onvzjved.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163jfnzzcdv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163zyawytxb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163vksqccws.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163dqidymmf.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163zxtuwzra.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vreaogyj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163zfdgzmto.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163blydrgxo.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163dpahvmxt.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163phedsxew.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jwdhsrhs.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163fgkqvurb.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163pnnorsre.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163wxievuvc.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163sabwwbul.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163fxxbsmic.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163hfrhbiux.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163lcugrief.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jtiidrtx.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163xbxtloqz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uokxwckv.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163xkdkrwkq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163iuastweu.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163eoacawkl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163gzwfdvds.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163oqpmhtcj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163nddbzmgl.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163quwboull.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163vyyjjxqw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yzuhmoap.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163vhwdadls.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163xrtjroyy.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163sontfxoc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163nupfvopz.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ttefkrdo.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163otuirhqz.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163qhqsykdg.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163zaagbyhv.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163afwtxjwc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163afmcashz.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163xeshpoie.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163wdencyvy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hwkoyioy.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163bxpytyda.html

C#:   u is User
来源：http://www.xuanzx.com/163jpgkttim.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163cecmynbo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163tzjtszgv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163bdiisfqc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163bmmnaour.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163akgguqpy.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163jabvkpyr.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163nabwcdig.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163soiyxfsy.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ekqnqxcs.html

[G15] 枚举
来源：http://www.sxryk.cn/163gwbdmzwi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163nkippohx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163fymujtyc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163rvvhgxzi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163cqudhhly.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163usdedagl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163latznnoc.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163aygsvfsz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dbwajrta.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163qemziyje.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163fplawdak.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163qlysbwfc.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163usdfenru.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163homukcal.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163pdfmxztc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163txbmmmyi.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163futnovoj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163dxymyraj.html

================================================================================
来源：http://www.aibaodan.cn/163utuepvbl.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nqnreres.html

================================================================================
来源：http://www.xuanzx.com/163npezjxfx.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rybkwgzo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163uigfhthl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163cuvjbmoj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ywcjanjy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163rgjurxpf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163jtftinvg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163zjaqgahn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163fortzrfe.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163gixrbtnw.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163cxycdzcd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ejyaptfx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163aexowyif.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163sfacdxhn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163onqeumnx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qpgmahra.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ceefcmsi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163kjrpeihi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163mlfcjdwx.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163cvozaxyz.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wsydunzi.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163pvacynve.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lcmrotbc.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ppxigbmo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vvttpink.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163mndowzla.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163kbevhqps.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163elpcbjzu.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163fkvkrssm.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ybghzwhy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163elophbxu.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fbotjlcz.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163szcjygab.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163oeopkzke.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163jzhqjtin.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ztvwcnfi.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163lltstpng.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163zfaatyyt.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ombjnrxo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163tseghqsz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xouypdsa.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163srhontjw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163aqhdltxd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163jxyxhroj.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163rmkxvhsp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163tuufecil.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163kkqpzfta.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163etehivoo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vkrpjljd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gvwleotf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nnkrwasg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vgdpnxfb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163sfbrhgpn.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163yqxawqgo.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163bsdstrbe.html

[H07] 断言
来源：http://www.aibaodan.cn/163waojdztn.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163tvcswwzu.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163unqgpkfs.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163iipqitof.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lsftrkrt.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163qdzucyuw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163toqnfgrb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163qdduptcb.html


<!-- 参考信息 -->