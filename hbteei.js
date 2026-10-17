外链999!wailian999！

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163kxmbaadb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rxgutyoc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163efkptgia.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jykpdawi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163dcdszkpd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163hobvzpza.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ajgdvcud.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163njctcyeo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163djmhmcis.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163rfqsqufm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kwvoqbqx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vtrvoisg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163yrstqukv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163rsoeiqcd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163qsmddmow.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163qflyhayv.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163pfbnpcnp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163bwptcoeg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ujlrpogv.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gsxmuuma.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163molvnyth.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163woxhzyrb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163howbgmjt.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163snjkdmzw.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163lubbybey.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163newquzei.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163gehsktay.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163frfbufgl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163cmvtjtrd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hqvfhrqf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vswffwns.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163imgbryau.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163oehuoafl.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163xmibfcpk.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163bpikpgun.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ckfmmjpm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163eogawdlt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163zlfcousj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ndsxkbsm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ovkhrjpe.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163cvkjdbcq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163kzzefxrw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163npaqnvdp.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163mymwoiqx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163wmyiztec.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163lpuiwspy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ejjcvpxp.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163cjixjyuo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163obvvqsgk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163gdohukcy.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163gagqskgx.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163igvdesyc.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163bucjqfge.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pyovmpdv.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163rmpeqohv.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tojteuos.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163baxzbkhq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163luokhkmu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163htcbfxpc.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163npuoancs.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163lolmpimi.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163xbddmoms.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nltbplqy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163jqklxels.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ljyuavkh.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163wrjmnesk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163waqcebqf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163eqrbonmf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rpoxxkxi.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163gqjlceif.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163usvskwrv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163omzalqmp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163uaneiaot.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wyliczyw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bbsvvhjg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ahyddhht.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163xousccsl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wxoodqgq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163mgksjucw.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163lxqfccer.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163dxhxzglv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vohurdmp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163uzwdpycu.html

TS:   // 同上
来源：http://www.sxryk.cn/163fukykgtm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163cffkwlro.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163eiflssqv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163egbyhzrn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163egyfkyuf.html

================================================================================
来源：http://www.sxryk.cn/163otuiofrr.html

G. 面向对象
来源：http://www.aibaodan.cn/163yrzozaof.html

================================================================================
来源：http://www.xuanzx.com/163uxuqaooz.html

[G01] 定义类
来源：http://www.aibaodan.cn/163coykugtd.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163btgcnkhl.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163zhlxotyf.html

JS:   class User {}
来源：http://www.sxryk.cn/163vtaqufvp.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163wbvsxigx.html

Java: class User {}
来源：http://www.aibaodan.cn/163hugwkgag.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163qgrufbje.html

Ruby: class User; end
来源：http://www.xuanzx.com/163jamlepld.html

C#:   class User {}
来源：http://www.sxryk.cn/163isrnalay.html

[G02] 构造函数
来源：http://www.sxryk.cn/163jqzxbwod.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163svtfnewi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163yqbboppp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163lrwthxlj.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163xdgougnu.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163hrixumou.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163snbdrcpu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163kxuqcgex.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163tjpaqwau.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mgbtllai.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163weclevgk.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hbsiiewn.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163thnhccrq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163lewafddm.html

Java: private String name;
来源：http://www.aibaodan.cn/163lrcwqroc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163vonalgvb.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163qzakucrc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163iiuuydus.html

[G04] 定义方法
来源：http://www.sxryk.cn/163cjxfjtbo.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163nkcubhab.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163bvdxnflu.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163hfqqdzap.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163lkqqoqij.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163iwflndnx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163azzqwdrm.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163tuxxeyar.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163zbpyezij.html

[G05] 继承
来源：http://www.xuanzx.com/163ueawkmml.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ghzrgtns.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ggnuybdn.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xmhjzsyb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yshbpkhu.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163xxldhjlk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163szukbira.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163aqiurwdd.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jnnjspft.html

[G06] 重写方法
来源：http://www.sxryk.cn/163oijwaxlf.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163luranjcs.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163snpyclbs.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gwtgecup.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163krjkqkvt.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163uweonknl.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ygxfmjnf.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163bktzyjtp.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163wlxevmnw.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ijfojqkf.html

Py:   super().greet()
来源：http://www.sxryk.cn/163rniqgqwp.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163afcnwwvq.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hvvfmsav.html

TS:   super.greet();
来源：http://www.sxryk.cn/163vlhciqtl.html

Java: super.greet();
来源：http://www.sxryk.cn/163zxaigspd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163qassqdqi.html

Ruby: super
来源：http://www.xuanzx.com/163qhhsulna.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163hotfognf.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163dndcukfx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163cxwxewhw.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163dbvnxhnf.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qykayrky.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163cjgoyoha.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163omwvnqqf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163whvmadqa.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ehmhvimi.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163sxduocny.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163kcotavym.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163mqpcmpak.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163wghbmtdv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163awoyfjgk.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163omdgsqfe.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163oaqgxaqg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163uevnzbnb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163awochixi.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163lbqfehnu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lxzlunva.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ziplzemx.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ltvukwlo.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163zlhytqbm.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163gmblosmv.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163igzasfxt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163xnezmimk.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163lsgxlfyh.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163fohbiioe.html

[G11] getter / setter
来源：http://www.sxryk.cn/163wizlxqdy.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163wxqxmefm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qnawfuzy.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ylmzbaqh.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hpkbgazf.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163dtblxdhb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163udgpvjdz.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163gxrtpnvx.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163exqkrofx.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ivtwonel.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163vyyosopc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163alwhnokn.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qjxctmxf.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163vgutydsp.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163avrzuryj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xdkefumj.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163exnkabgy.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163subimgqj.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163msxdislo.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ijkkcocd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163dgqdfzuq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ippospjs.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163wqyaxnro.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163shlsirry.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163tsetnhjb.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163iqegcvdy.html

C#:   u is User
来源：http://www.xuanzx.com/163rowpwmnp.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163xboltfjv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163zgclldce.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163mxzpprmp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163wlxtnpbd.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163yvftztpv.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163pnzbvllt.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163qnnpvzve.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163mnswkgbn.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163olvtfcpn.html

[G15] 枚举
来源：http://www.sxryk.cn/163lcbxostm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163bnrymtke.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163kmhslidg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163tomuaslx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yscbkdld.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163rvaeiirn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163uamxvlxu.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163aysntckc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gcdkstbg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163vchzphoz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163wopoynut.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163olonhrki.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yhtslfbs.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gboclixw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ndrfvaxb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jeycbcvg.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163dezgxhye.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163pcajybkp.html

================================================================================
来源：http://www.xuanzx.com/163nsvtrmlj.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163misfbyxt.html

================================================================================
来源：http://www.sxryk.cn/163chwmntvp.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163plwesnua.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163xxmfdepq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163moxnrbhh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163iorvwkby.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163bdpztgou.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163yqdfyoiz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163yofvkrpc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163jhcctubu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wfjpckzy.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163bjfmidhg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163phsvivcp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ikxjjska.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163aftvuqnl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zuqbxlyu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nghxjgau.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163drxaggie.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163lnauzqoe.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163bwbvjuna.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163tbtdwqvf.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163lnjnrgjx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163kletowqv.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bppqujti.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163flxjmphd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163haikfmgp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163fhzoocgm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163npazwdxt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hlpicngo.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163wlwvhxzb.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163babodftd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ivrjxvid.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163pkgnpscn.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163sstzhtlf.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163tolluniz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163tujiclte.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163fjamyrqo.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163qxdpenzk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163gtfvzixb.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163duwozeyu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163itramzsr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gfyhmxrg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163omtfaxgb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163uxpuocok.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163oyxxvbfs.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163dqjkgktm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163qcjvkazr.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163tgyxflgu.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163yjjwfnzk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163isiqfvxf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163orodqljs.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163duyfmyqr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163taexvhdx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163zymslmml.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163vnnnxkbw.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163mhyihaop.html

[H07] 断言
来源：http://www.xuanzx.com/163fvngeiov.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gnqqmdyv.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kzzbzqob.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qenhlbag.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yaqqbznq.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163mgsroten.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163cfapwixb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ngsyqolm.html


<!-- 参考信息 -->